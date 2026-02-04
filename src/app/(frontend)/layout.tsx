import type { ReactNode } from 'react'
import { Metadata } from 'next'
import { NextIntlClientProvider } from 'next-intl'
import { getLocale, getMessages } from 'next-intl/server'
import { Prompt } from 'next/font/google'
import { Footer } from '@/components/layout/footer'
import { ConditionalCTAFooter } from '@/components/footer/conditionalCTAFooter'
import './styles.css'
import { Navbar } from '@/components/layout/navigation'
import { OrbBackground } from '@/components/layout/background'

const prompt = Prompt({
  subsets: ['latin', 'thai'],
  weight: ['400', '500', '700'],
  variable: '--font-prompt',
  display: 'swap',
})

export const metadata: Metadata = {
  description: 'A blank template using Payload in a Next.js app.',
  title: 'Sprounting Tech Hub',
  icons: {
    icon: [
      { url: '/favicons/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicons/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: {
      url: '/favicons/favicon-180x180.png',
      sizes: '180x180',
      type: 'image/png',
    },
  },
}

export default async function FrontendLayout(props: { children: ReactNode }) {
  const { children } = props
  const locale = await getLocale()
  const messages = await getMessages()

  return (
    <html data-theme="sprout" lang={locale} className={prompt.variable}>
      <body className="antialiased">
        <OrbBackground />

        <NextIntlClientProvider locale={locale} messages={messages}>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <ConditionalCTAFooter />
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
