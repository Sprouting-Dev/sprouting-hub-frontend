'use client'
import { TwoColumnCard } from '@/components/cards'
import { Bot, ArrowRight, Monitor } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { Process, Title } from '@/components/commons/'
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

      {/* Two Column Card Section */}
      <div className="flex flex-col justify-center items-center w-full px-4 py-8 md:py-16 gap-8">
        <div className="core-expertise-container mb-8">
          <h2 className="core-expertise-title">{t('coreExpertise.title')}</h2>
          <p className="core-expertise-description">{t('coreExpertise.description')}</p>
        </div>
        <TwoColumnCard
          image="/images/AI & Workflow Automation.png"
          titleIcon={
            <div className="w-12 h-12 rounded-lg bg-spt-primary-alpha-10 flex items-center justify-center">
              <Bot className="w-6 h-6 text-spt-primary-400" />
            </div>
          }
          title={t('coreExpertise.aiCard.title')}
          detail={t('coreExpertise.aiCard.detail')}
          listItems={[
            t('coreExpertise.aiCard.list.item1'),
            t('coreExpertise.aiCard.list.item2'),
            t('coreExpertise.aiCard.list.item3'),
            t('coreExpertise.aiCard.list.item4'),
            t('coreExpertise.aiCard.list.item5'),
          ]}
          imagePosition="left"
          button={{
            title: t('coreExpertise.aiCard.button'),
            onClick: () => (window.location.href = '/#'),
            icon: <ArrowRight size={20} />,
          }}
        />
        <TwoColumnCard
          image="/images/Software Development.png"
          titleIcon={
            <div className="w-12 h-12 rounded-lg bg-spt-primary-alpha-10 flex items-center justify-center">
              <Monitor className="w-6 h-6 text-spt-primary-400" />
            </div>
          }
          title={t('coreExpertise.devCard.title')}
          detail={t('coreExpertise.devCard.detail')}
          listItems={[
            t.raw('coreExpertise.devCard.list.item1'),
            t('coreExpertise.devCard.list.item2'),
            t('coreExpertise.devCard.list.item3'),
            t('coreExpertise.devCard.list.item4'),
            t('coreExpertise.devCard.list.item5'),
            t('coreExpertise.devCard.list.item6'),
          ]}
          imagePosition="right"
          button={{
            title: t('coreExpertise.devCard.button'),
            onClick: () => (window.location.href = '/#'),
            icon: <ArrowRight size={20} />,
          }}
        />
      </div>

      <div className="flex justify-center items-center p-10">
        <div className="max-w-6xl w-full">
          <Title title="Our Methodology" className="text-[2.5rem] mb-3" underline={false} />
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
