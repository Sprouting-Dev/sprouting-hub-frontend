import type { ReactNode } from 'react'
import { Metadata } from 'next'
import { NextIntlClientProvider } from 'next-intl'
import { getLocale, getMessages } from 'next-intl/server'

import './styles.css'
import { Navbar } from '@/components/layout/navigation'

export const metadata: Metadata = {
  description: 'A blank template using Payload in a Next.js app.',
  title: 'Sprounting Tech Hub',
}

export default async function RootLayout(props: { children: ReactNode }) {
  const { children } = props
  const locale = await getLocale()
  const messages = await getMessages()

  return (
    <html data-theme="sprout" lang={locale}>
      <body className="bg-slate-50 text-slate-900 antialiased">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Navbar />
          <main className="min-h-screen">{children}</main>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
