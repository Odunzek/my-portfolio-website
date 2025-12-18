import {NEXT_PUBLIC_FORMSPREE_KEY} from '@/constans/common'
import type { Metadata } from 'next'
import PageTitle from '../components/PageTitle'
import ContactForm from './components/ContactForm'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Contact - Kachi Odunze',
  openGraph: {
    title: 'Contact - Kachi Odunze',
    url: '/contact',
  },
  alternates: {
    canonical: '/contact',
  },
}

export default function ContactPage() {
  return (
    <>
      <PageTitle title="Contact" />
      <div className="flex flex-col lg:flex-row">
        <div className="mb-4 w-full text-center lg:w-[480px] lg:text-left">
          <div className="mb-8">
            <h2 className="mb-3 text-lg font-bold">ADDRESS</h2>
            <p className="text-sm leading-5">ON, Canada.</p>
          </div>
          <div className="mb-8">
            <h2 className="mb-3 text-lg font-bold">EMAIL ADDRESS</h2>
            <p className="text-sm leading-5">
              <a href="mailto:odunzekachy@gmail.com" rel="noopener" className="hover:text-yellow-600">
                odunzekachy@gmail.com
              </a>
              <br />
              <a href="mailto:kempyregroup@gmail.com" rel="noopener" className="hover:text-yellow-600">
                kempyregroup@gmail.com
              </a>
            </p>
          </div>
          <div className="mb-8">
            <h2 className="mb-3 text-lg font-bold">MOBILE PHONE</h2>
            <p className="text-sm leading-5">
              <span>Call: </span>
              <a href="tel:+16477241344" target="_blank" rel="noopener" className="hover:text-yellow-600">
                +1-647-724-1344
              </a>
            </p>
          </div>
        </div>
        <div className="lg:flex-1">
          <ContactForm formspreeKey={NEXT_PUBLIC_FORMSPREE_KEY} />
        </div>
      </div>
    </>
  )
}
