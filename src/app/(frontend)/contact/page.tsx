'use client'

import React from 'react'
import { useTranslations } from 'next-intl'
import { Contact, ContactData } from '@/components/commons'
import { HeroBanner } from '@/components/hero'

export default function ContactPage() {
  const t = useTranslations('Contact')

  const handleContactSubmit = async (data: ContactData) => {
    console.log('Contact Data:', data)
    await new Promise((resolve) => setTimeout(resolve, 1500))
    alert(`ขอบคุณ เราได้รับข้อความเรียบร้อยแล้ว`)
  }

  return (
    <div className="flex flex-col gap-5">
      {/* Hero Banner */}
      <HeroBanner
        badge={t('hero.badge')}
        title={t('hero.title')}
        subtitle={t('hero.subtitle')}
        description={t('hero.description')}
        backgroundImage="/images/Software Development.png"
      />

      <div className="flex flex-col items-center gap-3 pt-4">
        <h3 className="text-4xl text-spt-primary-400 text-center">{t('contact.title')}</h3>
        <div className="h-1 w-25 bg-gradient-to-r from-spt-secondary-400 to-spt-primary-400 rounded-full" />
      </div>

      {/* Contact Section */}
      <div className="flex justify-center items-center p-8">
        <Contact onSubmit={handleContactSubmit} />
      </div>
    </div>
  )
}
