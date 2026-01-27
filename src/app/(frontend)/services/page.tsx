'use client'

import { useTranslations } from 'next-intl'
import { Process } from '@/components/commons/'
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

      <div className="flex justify-center items-center p-10">
        <div className="max-w-6xl w-full">
          <h3 className="text-[2.5rem] text-center text-spt-primary-500 mb-3">Our Methodology</h3>
          <p className="text-lg font-base text-center text-spt-neutral-800 mb-15">
            A streamlined journey from concept to reality.
          </p>
          <Process
            steps={[
              {
                title: t('process.step1.title'),
                detail: t('process.step1.detail'),
              },
              {
                title: t('process.step2.title'),
                detail: t('process.step2.detail'),
              },
              {
                title: t('process.step3.title'),
                detail: t('process.step3.detail'),
              },
              {
                title: t('process.step4.title'),
                detail: t('process.step4.detail'),
              },
            ]}
          />
        </div>
      </div>
    </div>
  )
}
