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

export const FORMSPREE_KEY = 'xoqyaqqe'

export const FIREBASE_CONFIG = {
  apiKey: 'AIzaSyCgnl6LoCNI6JGiw9pwTx7A6suCAf9i2oA',
  authDomain: 'my-portfolio-f450f.firebaseapp.com',
  databaseURL: 'https://dede-ard.firebaseio.com',
  projectId: 'my-portfolio-f450f',
  storageBucket: 'my-portfolio-f450f.firebasestorage.app',
  messagingSenderId: '547141802872',
  appId: '1:547141802872:web:4af68f1729d7e7bba3468d',
  measurementId: 'G-PC9ZQZ4WLF',
}





