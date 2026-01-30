'use client'

import React from 'react'
import { useTranslations } from 'next-intl'
import { Avatar, Title } from '@/components/commons'
import { HeroBanner } from '@/components/hero'

export default function AboutPage() {
  const t = useTranslations('About')

  const teamMembers = [
    {
      name: 'Marcus Thorne',
      role: 'CEO & Lead Architect',
      image: '',
    },
    {
      name: 'Sarah Jenkins',
      role: 'Head of AI',
      image: '',
    },
    {
      name: 'David Kim',
      role: 'Senior Full-Stack Dev',
      image: '',
    },
    {
      name: 'Elena Rodriguez',
      role: 'Product Strategist',
      image: '',
    },
  ]

  return (
    <div className="flex flex-col gap-5">
      {/* Hero Banner */}
      <HeroBanner
        badge={t('hero.badge')}
        title={t('hero.title')}
        subtitle={t('hero.subtitle')}
        description={t('hero.description')}
        backgroundImage="/images/Hero BG About Page.jpg"
      />

      <Title title={t('avatar.title')} className="text-[2.5rem]" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center max-w-6xl mx-auto gap-16 pb-20 px-8">
        {teamMembers.map((member, index) => (
          <Avatar key={index} name={member.name} role={member.role} src={member.image} />
        ))}
      </div>
    </div>
  )
}
