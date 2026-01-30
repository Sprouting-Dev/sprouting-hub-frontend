'use client'

import React from 'react'
import { useTranslations } from 'next-intl'
import { Address, Contact, ContactData, Title } from '@/components/commons'
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

      <Title title={t('company.title')} className="pt-18" />

      {/* Address */}
      <div className="flex flex-col items-center p-8 pb-20">
        <Address />
      </div>

      <Title title={t('contact.title')} className="text-spt-primary-400 pt-18" />

      {/* Contact Section */}
      <div className="flex justify-center items-center p-8">
        <Contact onSubmit={handleContactSubmit} />
      </div>
    </div>
  )
}
