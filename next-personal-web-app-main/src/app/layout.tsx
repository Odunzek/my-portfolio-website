// Import background noise texture for subtle grain effect
import noise from '@/assets/noise.gif'

// Base hostname used for generating absolute metadata URLs
import { HOST } from '@/constans/common'

// Vercel analytics integrations (optional performance tracking)
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'

// Next.js type for defining site-wide metadata
import type { Metadata } from 'next'

// Remove Lato – we are NOT using Google Fonts anymore
// import { Lato } from 'next/font/google'

// Import Satoshi local font
import { satoshi } from '@/fonts'

// Global providers: theme, context, etc.
import Providers from './Providers'

// Global CSS (Tailwind + custom styles)
import './globals.css'

// ❌ REMOVE THIS ENTIRE BLOCK
// const lato = Lato({
//   weight: ['400', '700'],
//   subsets: ['latin'],
//   display: 'swap',
// })

// Site-wide metadata configuration
export const metadata: Metadata = {
  metadataBase: new URL(HOST),

  icons: {
    icon: [
      {
        url: '/favicon.ico',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/favicon-white.ico',
        media: '(prefers-color-scheme: dark)',
      },
    ],
  },
}

// Root layout component that wraps every page in the app
export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // Use ONLY Satoshi
    <html lang="en" className={`h-full w-full ${satoshi.variable}`}>
      <body className="flex min-h-full w-full bg-white text-black antialiased selection:bg-yellow-600 dark:bg-black dark:text-white">
        {/* Background noise overlay (visible only on md+ screens) */}
        <i
          aria-hidden="true"
          className="pointer-events-none fixed bottom-0 left-0 right-0 top-0 z-[150] hidden h-full w-full opacity-5 md:block"
          style={{ backgroundImage: `url(${noise.src})` }}
        />

        {/* Global Providers */}
        <Providers>{children}</Providers>

        {/* Optional Vercel analytics tools */}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
