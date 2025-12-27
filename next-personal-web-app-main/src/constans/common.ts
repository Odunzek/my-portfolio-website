import { FolderGit2, Globe, Home, Mail, User } from 'lucide-react'

export const HOST = process.env.NEXT_PUBLIC_HOST || 'http://localhost:3000'


export const NAV_ITEMS = [
  { path: '/', label: 'Home', Icon: Home },
  { path: '/about', label: 'About', Icon: User },
  { path: '/blog', label: 'Blog', Icon: Globe },
  { path: '/projects', label: 'Projects', Icon: FolderGit2 },
  { path: '/contact', label: 'Contact', Icon: Mail },
]

export const PAGE_TITLES = {
  '/': '._',
  '/about': 'About',
  '/blog': 'Blog',
  '/projects': 'Projects',
  '/contact': 'Contact',
}

export const SOCIALS = {
  GH: 'https://github.com/Odunzek',
  IN: 'https://www.linkedin.com/in/onyekachi-odunze',
}

export const RESUME_URL = 'https://drive.google.com/file/d/14wZFppwPYvmQSH8tMz7caIUf92ixsCiF/view?usp=sharing'

export const NEXT_PUBLIC_FORMSPREE_KEY = process.env.NEXT_PUBLIC_FORMSPREE_KEY!

export const FIREBASE_CONFIG = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY!,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN!,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID!,
  databaseURL: 'https://my-portfolio-f450f-default-rtdb.firebaseio.com/',
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET!,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID!,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID!,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID!,
}
