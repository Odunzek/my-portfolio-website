// Import profile image
import kachy from '@/assets/kachy.jpg'

// Import external resume link
import { RESUME_URL } from '@/constans/common'

// Next.js metadata type
import type { Metadata } from 'next'

// Next.js Image optimization component
import Image from 'next/image'

// Next.js internal routing
import Link from 'next/link'

// Page title component (keeps page headings consistent across the site)
import PageTitle from '../components/PageTitle'

// Force dynamic rendering for this page
export const dynamic = 'force-dynamic'

// Metadata for SEO and social previews
export const metadata: Metadata = {
  title: 'About - Kachi Odunze', // Update this later to your actual name
  openGraph: {
    title: 'About - Kachi Odunze',
    url: '/about',
  },
  alternates: {
    canonical: '/about',
  },
}

// Main About Page Component
export default function AboutPage() {
  return (
    <>
      {/* Page header */}
      <PageTitle title="About" />

      {/* Responsive layout: stacked on mobile, side-by-side on desktop */}
      <div className="md:flex">

        {/* LEFT COLUMN — Profile Image */}
        <div className="mb-5 md:w-56">
          <Image
            src={kachy}
            alt="Foto Kachi Odunze"
            className="block w-full"
            placeholder="blur"
          />
        </div>

        {/* RIGHT COLUMN — Text Content */}
        <div className="md:flex-1 md:pl-6">

          {/* Section: Name */}
          <h2 className="mb-2 text-xl font-bold">I’m Odunze Onyekachi</h2>

          {/* Section: About Summary */}
          <div className="mb-6">
            <p className="mb-1">
              Data Scientist and AI/ML Graduate Student based in Ontario, Canada. <br />
              I focus on building clear, reliable, and well-structured data and machine learning solutions
            </p>
          </div>

          {/* Section: Tech I Love */}
          <h2 className="mb-2 text-xl font-bold">Tech I Love</h2>
          <div className="mb-6">
            <p className="mb-1">
              Python, Pandas, NumPy, scikit-learn, TensorFlow, SQL, Jupyter, and Next.js.
            </p>
          </div>

          {/* Resume Download Button */}
          <a
            download
            target="_blank"
            rel="nofollow"
            href={RESUME_URL}
            className="mr-3 inline-block bg-white px-5 py-3 hover:bg-black hover:text-white dark:bg-black dark:hover:bg-white dark:hover:text-black"
          >
            Resume
          </a>

          {/* Contact Page Button */}
          <Link
            href="/contact"
            rel="nofollow"
            className="inline-block bg-white px-5 py-3 hover:bg-black hover:text-white dark:bg-black dark:hover:bg-white dark:hover:text-black"
          >
            Contact me
          </Link>
        </div>
      </div>
    </>
  )
}
