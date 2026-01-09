import React from 'react'
import { Metadata } from 'next'
import './styles.css'
import { Navbar } from '@/components/layout/navigation';

export const metadata: Metadata = {
  description: 'A blank template using Payload in a Next.js app.',
  title: 'Payload Blank Template',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html data-theme="sprout" lang="en">
      <body className="bg-slate-50 text-slate-900 antialiased">
        <Navbar />
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  )
}
