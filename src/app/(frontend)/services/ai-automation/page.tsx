'use client'

import React from 'react'
import { useTranslations } from 'next-intl'
import { useRouter } from 'next/navigation'
import { Title } from '@/components/commons/'
import { ServiceCard } from '@/components/cards'
import { Process } from '@/components/commons/process'
import { CTAFooter } from '@/components/footer/ctaFooter'
import { Bot } from 'lucide-react'

export default function AIAutomationPage() {
  const t = useTranslations('AIAutomation')
  const tHome = useTranslations('Home')
  const router = useRouter()

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
              <Bot className="w-6 h-6 text-spt-primary-400" />
            </div>
          }
          image="/images/AI & Workflow Automation.png"
          title={t('serviceCard.title')}
          detail={t('serviceCard.detail')}
          variant="large"
        />
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

      {/* 1 (Use Cases) */}
      <div className="flex justify-center items-center px-4 py-16 ">
        <div className="max-w-6xl w-full">
          <Title title={t('useCases.title')} underline={true} />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            {[0, 1, 2].map((index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-md flex flex-col items-center text-center h-full border border-gray-100"
              >
                <h3 className="text-xl font-bold text-spt-neutral-900 mb-2 leading-tight max-w-[200px] mx-auto">
                  {t(`useCases.items.${index}.title`)}
                </h3>
                <div className="mt-auto mb-auto">
                  <p className="text-gray-500 text-sm leading-relaxed max-w-[250px] mx-auto">
                    {t(`useCases.items.${index}.detail`)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* 2 (Business Value) */}
      <div className="flex justify-center items-center px-4 py-16 ">
        <div className="max-w-6xl w-full">
          <Title title={t('businessValue.title')} underline={true} />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            {[0, 1, 2].map((index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-md flex flex-col items-center text-center h-full border border-gray-100"
              >
                <h3 className="text-xl font-bold text-spt-neutral-900 mb-4 leading-tight max-w-[200px] mx-auto">
                  {t(`businessValue.items.${index}.title`)}
                </h3>
                <div className="mt-auto mb-auto">
                  <p className="text-gray-500 text-sm leading-relaxed max-w-[260px] mx-auto">
                    {t(`businessValue.items.${index}.detail`)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* CTA Footer */}
      <CTAFooter
        title={tHome('ctaFooter.title')}
        description={tHome('ctaFooter.description')}
        button={{
          label: tHome('ctaFooter.button'),
          onClick: () => router.push('/contact'),
        }}
        subDescription={tHome('ctaFooter.subDescription')}
      />
    </div>
  )
}
