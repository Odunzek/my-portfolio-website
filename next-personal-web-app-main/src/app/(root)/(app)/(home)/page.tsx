// Import social media links from constants file
import { SOCIALS } from '@/constans/common'

// Import social icons from React Icons library
import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa'

// Force dynamic rendering for this page (Next.js optimization control)
export const dynamic = 'force-dynamic'

// Home page component
export default function HomePage() {
  return (
    // Page container: centers everything vertically + horizontally
    <div className="relative flex min-h-full w-full flex-col items-center justify-center">
      {/* Wrapper for the main hero text and social icons */}
      <div className="relative flex items-center justify-center py-3">
        {/* HERO TEXT BLOCK */}
        <h1 className="relative flex-1">
          {/* First line: "I AM" aligned in two-column grid */}
          <span className="grid grid-cols-2">
            <span className="block text-center text-sm opacity-90">I AM</span>
          </span>

          {/* Main Name Section */}
          <span className="z-10 block text-[calc(1.825rem+6.9vw)] font-bold leading-none">ODUNZE KACHI</span>

          {/* Role Section: aligned to the right side using grid */}
          <span className="grid grid-cols-2 justify-items-end">
            <span className="block"></span>
            {/* Empty left column to push text to the right */}

            <span className="block text-sm opacity-90">
              DATA SCIENTIST
              <br />
              AI AND ML ENGINEER
            </span>
          </span>
        </h1>

        {/* SOCIAL ICON ROW */}
        <div className="absolute -bottom-1/4 mx-auto flex">
          {/* Instagram Link */}
          <a href={SOCIALS.IG} aria-label="Instagram" target="_blank" rel="noopener" className="mx-2 block p-2 opacity-80 hover:opacity-95">
            <FaInstagram size={20} />
          </a>

          {/* GitHub Link */}
          <a href={SOCIALS.GH} aria-label="GitHub" target="_blank" rel="noopener" className="mx-2 block p-2 opacity-80 hover:opacity-95">
            <FaGithub size={20} />
          </a>

          {/* LinkedIn Link */}
          <a href={SOCIALS.IN} aria-label="LinkedIn" target="_blank" rel="noopener" className="mx-2 block p-2 opacity-80 hover:opacity-95">
            <FaLinkedin size={20} />
          </a>

          {/* WhatsApp Link */}
          <a href={SOCIALS.WA} aria-label="WhatsApp" target="_blank" rel="noopener" className="mx-2 block p-2 opacity-80 hover:opacity-95">
            <FaWhatsapp size={20} />
          </a>
        </div>
      </div>
    </div>
  )
}
