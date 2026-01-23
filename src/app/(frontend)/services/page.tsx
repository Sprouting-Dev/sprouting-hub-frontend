'use client'

import { useTranslations } from 'next-intl'
import { HeroBanner } from '@/components/hero'

export default function ServicesPage() {
  const t = useTranslations('Service')

  return (
    <div className="flex flex-col">
      {/* Hero Banner */}
      <HeroBanner
        badge={t('hero.badge')}
        title={t('hero.title')}
        subtitle={t('hero.subtitle')}
        description={t('hero.description')}
        backgroundImage="/images/AI & Workflow Automation.png"
      />
    </div>
  )
}
