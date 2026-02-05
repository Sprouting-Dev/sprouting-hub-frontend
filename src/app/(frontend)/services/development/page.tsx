'use client'

import React from 'react'
import { useTranslations } from 'next-intl'
import { Title } from '@/components/commons/'
import { ServiceCard } from '@/components/cards'
import { Process } from '@/components/commons/process'
import { Monitor } from 'lucide-react'

export default function DevelopmentPage() {
  const t = useTranslations('Development')

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <div className="relative flex flex-col items-center justify-center pt-15 px-4 pb-10 text-center">
        <Title title={t('title')} underline={true} />
      </div>

      {/* Service Card */}
      <div className="flex justify-center items-center px-4 py-8">
        <ServiceCard
          titleIcon={
            <div className="w-12 h-12 rounded-lg bg-spt-primary-alpha-10 flex items-center justify-center">
              <Monitor className="w-6 h-6 text-spt-primary-400" />
            </div>
          }
          image="/images/Software Development.png"
          title={t('serviceCard.title')}
          detail={t('serviceCard.detail')}
          variant="large"
        />
      </div>

      {/* Advanced Technology Stack */}
      <div className="flex justify-center items-center px-4 py-16 ">
        <div className="max-w-6xl w-full">
          <Title title={t('useCases.title')} underline={true} />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            {[0, 1, 2].map((index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-md flex flex-col items-center text-center h-full border border-gray-100"
              >
                <h3 className="text-xl font-bold text-spt-neutral-900 mb-2 leading-tight whitespace-nowrap">
                  {t(`useCases.items.${index}.title`)}
                </h3>
                <div className="mt-auto mb-auto">
                  <p className="text-gray-500 text-sm leading-relaxed max-w-[280px] mx-auto">
                    {t(`useCases.items.${index}.detail`)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="flex flex-col items-center px-4 py-16">
        <Title title={t('process.title')} underline={false} />
        <div className="flex justify-center items-center px-4 py-8">
          <Process
            steps={[0, 1, 2, 3, 4].map((index) => ({
              title: t(`process.steps.${index}.title`),
              detail: t(`process.steps.${index}.detail`),
            }))}
            className="max-w-7xl md:px-4 md:py-8"
          />
        </div>
      </div>

      {/* Specialized Solutions */}
      <div className="flex justify-center items-center px-4 py-16 ">
        <div className="max-w-7xl w-full">
          <Title title={t('businessValue.title')} underline={true} />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-10">
            {[0, 1, 2, 3].map((index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-md flex flex-col items-center text-center h-full border border-gray-100"
              >
                <h3
                  className={`text-lg font-bold text-spt-neutral-900 mb-3 leading-tight mx-auto ${
                    index === 0 ? 'max-w-[240px]' : 'max-w-[180px]'
                  }`}
                >
                  {t(`businessValue.items.${index}.title`).replace(
                    'Payment Integration',
                    'Payment\u00A0Integration',
                  )}
                </h3>
                <div className="mt-auto mb-auto">
                  <p className="text-gray-500 text-sm leading-relaxed max-w-[220px] mx-auto">
                    {t(`businessValue.items.${index}.detail`)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
