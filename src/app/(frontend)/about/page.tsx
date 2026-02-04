'use client'

import React from 'react'
import { useTranslations } from 'next-intl'
import { FeatureCard } from '@/components/cards'
import { Avatar, Mission, Title } from '@/components/commons'
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

      <Mission />

      <Title title={t('feature.title')} className="text-[2.5rem]" underline={false} />
      <p className="text-lg font-base text-center text-spt-neutral-800">{t('feature.detail')}</p>

      {/* Feature Card */}
      <div className="flex flex-col items-center gap-3">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-10 max-w-4xl">
          <FeatureCard
            image="/icons/Innovation.png"
            title={t('feature.innovation.title')}
            detail={t('feature.innovation.detail')}
            align="left"
            iconclassName="bg-spt-primary-10/10"
            titleclassName="text-spt-neutral-1000"
            detailclassName="textspt-neutral-600"
          />
          <FeatureCard
            image="/icons/Partnership.png"
            title={t('feature.client.title')}
            detail={t('feature.client.detail')}
            align="left"
            iconclassName="bg-spt-primary-10/10"
            titleclassName="text-spt-neutral-1000"
            detailclassName="textspt-neutral-600"
          />
          <FeatureCard
            image="/icons/Agile.png"
            title={t('feature.agile.title')}
            detail={t('feature.agile.detail')}
            align="left"
            iconclassName="bg-spt-primary-10/10"
            titleclassName="text-spt-neutral-1000"
            detailclassName="textspt-neutral-600"
          />
        </div>
      </div>

      <Title title={t('avatar.title')} className="text-[2.5rem] mt-15" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center max-w-6xl mx-auto gap-16 pb-20 px-8">
        {teamMembers.map((member) => (
          <Avatar key={member.name} name={member.name} role={member.role} src={member.image} />
        ))}
      </div>
    </div>
  )
}
