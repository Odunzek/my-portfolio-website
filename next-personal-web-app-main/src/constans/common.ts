import { FiBookOpen, FiClipboard, FiGlobe, FiHome, FiMail, FiUser } from 'react-icons/fi'

export const HOST = process.env.NEXT_PUBLIC_HOST || 'http://localhost:3000'

export const NAV_ITEMS = [
  { path: '/', label: 'Home', Icon: FiHome },
  { path: '/about', label: 'About', Icon: FiUser },
  { path: '/blog', label: 'Blog', Icon: FiGlobe },
  { path: '/projects', label: 'Projects', Icon: FiClipboard },
  { path: '/contact', label: 'Contact', Icon: FiMail },
  { path: '/guestbook', label: 'Guestbook', Icon: FiBookOpen },
]

export const PAGE_TITLES = {
  '/': '._',
  '/about': 'About',
  '/blog': 'Blog',
  '/projects': 'Projects',
  '/contact': 'Contact',
  '/guestbook': 'G-book',
}

export const SOCIALS = {
  GH: 'https://github.com/Odunzek',
  IG: 'https://www.instagram.com/dedeard.js',
  IN: 'www.linkedin.com/in/onyekachi-odunze',
  WA: 'https://api.whatsapp.com/send?phone=6281343912883&text=%3CChatMe%20%2F%3E',
}

export const RESUME_URL = 'https://drive.google.com/file/d/19y4Jm357w94BlXTQmRymDBom0eAowljV/view?usp=drive_link'

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
