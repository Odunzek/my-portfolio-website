// Import the IRepository type (defines the shape of a repository object)
import { IRepository } from '@/types'

// Utility to convert timestamps into “3 days ago”, “5 months ago”, etc.
import timeFromNow from '@/utils/time-from-now'

// Ensures this module only runs on the server (Next.js optimization)
import 'server-only'

// GitHub username: pulled from environment variable, otherwise fallback
// Replace 'odunzek' with your username OR set GH_USERNAME in .env.local
const username = process.env.GH_USERNAME || 'odunzek'

// Optional GitHub API key (for higher rate limits)
const apiKey = process.env.GH_API_KEY

// GitHub API endpoint to fetch your public repos (sorted by update time)
const repositoriesUrl = `https://api.github.com/users/${username}/repos?sort=updated&visibility=public&per_page=100`

// Base fetch config for GitHub API requests
const fetchOptions: RequestInit = {
  method: 'GET',
  headers: {
    Accept: 'application/vnd.github+json',
    'X-GitHub-Api-Version': '2022-11-28',

    // Add Authorization header ONLY if apiKey exists
    ...(apiKey ? { Authorization: 'Bearer ' + apiKey } : {}),
  },

  // Cache results for 24 hours (Next.js caching)
  next: { revalidate: 60 * 60 * 24 },
}

// Main function to fetch and format your GitHub repositories
const getProjects = async (): Promise<IRepository[]> => {
  // Fetch repo list
  const response = await fetch(repositoriesUrl, fetchOptions)
  if (!response.ok) {
    throw new Error(`Failed to fetch repositories: ${response.statusText}`)
  }

  // Parse JSON response
  let repositories = (await response.json()) as any[]

  // Filter out repos with NO description or NO language data
  repositories = repositories.filter((repo) => repo.languages_url)

  // Optional: give empty descriptions a fallback so UI doesn’t break
  repositories = repositories.map((repo) => ({
    ...repo,
    description: repo.description || 'No description provided yet.',
  }))

  // For each repo, fetch language info + latest commit date
  const promises = repositories.map(async (repo) => {
    const [languagesRes, commitsRes] = await Promise.all([
      // Fetch programming languages usage
      fetch(repo.languages_url, fetchOptions),
      // Fetch the latest commit from the repo
      fetch(`https://api.github.com/repos/${repo.full_name}/commits?per_page=1`, fetchOptions),
    ])

    // Build language breakdown into percentages
    const languagesData = (await languagesRes.json()) as { [key: string]: number }
    const totalSize = Object.values(languagesData).reduce((acc, size) => acc + size, 0)
    const languages = Object.entries(languagesData).map(([name, size]) => ({
      name,
      size: (size / totalSize) * 100,
    }))

    // Extract latest commit date
    const commitsData = (await commitsRes.json()) as [any]
    const lastCommit = commitsData[0]
    const lastCommitDate = lastCommit?.commit?.committer?.date

    // Convert raw GitHub data into our project type format
    const repository: IRepository = {
      id: repo.id,
      node_id: repo.node_id,
      name: repo.name,
      full_name: repo.full_name,
      description: repo.description,
      html_url: repo.html_url,
      stargazers_url: repo.stargazers_url,
      forks_url: repo.forks_url,
      homepage: repo.homepage,
      license: repo.license,
      stargazers_count: repo.stargazers_count,
      watchers_count: repo.watchers_count,
      forks_count: repo.forks_count,
      topics: repo.topics,

      // Languages calculated above
      languages: languages,

      // Human-readable timestamps
      created_at: timeFromNow(repo.created_at),
      updated_at: timeFromNow(repo.updated_at),
      pushed_at: timeFromNow(repo.pushed_at),
      last_commit_at: lastCommitDate ? timeFromNow(lastCommitDate) : 'N/A',

      // Raw commit date for sorting
      last_commit_date: lastCommitDate,
    }

    return repository
  })

  // Wait for all repos to be processed
  const allProjects = await Promise.all(promises)

  // Sort repos by latest commit
  allProjects.sort((a, b) => {
    if (!a.last_commit_date) return 1
    if (!b.last_commit_date) return -1
    return new Date(b.last_commit_date).getTime() - new Date(a.last_commit_date).getTime()
  })

  return allProjects
}

export default getProjects
