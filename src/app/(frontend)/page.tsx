'use client'

import React from 'react'
import { useTranslations } from 'next-intl'
import { useRouter } from 'next/navigation'
import { Badge, Button, Title } from '@/components/commons/'
import {
  FeatureCard,
  ServiceCard,
  TestimonialCard,
  HorizonCard,
  SmallCard,
} from '@/components/cards'
import { Sparkles, CodeIcon, Database, Cpu, Globe, CheckCircle, Bot, Monitor } from 'lucide-react'

import './styles.css'

export default function HomePage() {
  const t = useTranslations('Home')
  const router = useRouter()

  return (
    <div className="flex flex-col gap-5">
      {/* Hero Section */}
      <div className="relative flex flex-col items-center justify-center min-h-[90vh] px-4 pt-20 pb-10 text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-teal-50 px-4 py-1.5 text-sm font-bold text-spt-primary-400">
          <Sparkles className="w-4 h-4" />
          {t('hero.badge')}
        </div>
        <h1 className="max-w-6xl font-bold text-6xl bg-gradient-to-b from-spt-primary-400 to-spt-secondary-400 bg-clip-text text-transparent">
          {t('hero.title')}
        </h1>
        <p className="mt-8 max-w-md text-base text-spt-neutral-1000 font-normal">
          {t('hero.detail')}
        </p>
        <div className="animate-fade-in-up delay-300 mt-10">
          <Button
            className="text-base font-semibold"
            label={t('hero.contact')}
            color="primary"
            size="lg"
            variant="pill"
            onClick={() => router.push('/contact')}
          />
        </div>
      </div>

      <Title title="Value Proposition" />

      {/* Feature Card */}
      <div className="flex flex-col items-center gap-3">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 p-10 max-w-7xl">
          <FeatureCard
            image="/icons/Bot.png"
            title={t('features.automation.title')}
            detail={t('features.automation.detail')}
          />
          <FeatureCard
            image="/icons/Server.png"
            title={t('features.architecture.title')}
            detail={t('features.architecture.detail')}
          />
          <FeatureCard
            image="/icons/TrendingUp.png"
            title={t('features.delivery.title')}
            detail={t('features.delivery.detail')}
          />
          <FeatureCard
            image="/icons/Sparkles.png"
            title={t('features.partnership.title')}
            detail={t('features.partnership.detail')}
          />
        </div>
      </div>

      <Title title="Our Core Services" />

      {/* Service Cards */}
      <div className="flex justify-center items-center p-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl">
          <ServiceCard
            image="/images/AI & Workflow Automation.png"
            icon={<Bot />}
            title={t('services.automation.title')}
            detail={t('services.automation.detail')}
          />
          <ServiceCard
            image="/images/Software Development.png"
            icon={<Monitor />}
            title={t('services.software.title')}
            detail={t('services.software.detail')}
          />
        </div>
      </div>

      {/* Horizon Cards */}
      <div className="flex justify-center items-center py-10 bg-spt-neutral-1000">
        <div className="flex flex-col gap-15 w-full max-w-6xl m-10">
          <div className="flex flex-col text-left">
            <h2 className="text-[2.250rem] text-spt-secondary-400">{t('horizon.title')}</h2>
            <b1 className="text-spt-neutral-500 text-lg max-w-xl font-normal">
              {t('horizon.detail')}
            </b1>
          </div>
          <div className="flex flex-col gap-6 w-full items-center">
            <HorizonCard
              image="/images/sprouting_academy_thum.png"
              title={t('horizon.academy.title')}
              detail={t('horizon.academy.detail')}
              tag={t('horizon.academy.tag')}
              buttonTitle={t('horizon.academy.buttonTitle')}
              onClick={() => router.push('https://www.sproutingtechacademy.com/')}
            />
            <HorizonCard
              image="/images/wiivor_mockup_banner.png"
              title={t('horizon.wiivor.title')}
              detail={t('horizon.wiivor.detail')}
              tag={t('horizon.wiivor.tag')}
              buttonTitle={t('horizon.wiivor.buttonTitle')}
              onClick={() => router.push('https://wiivor.com/')}
            />
          </div>
        </div>
      </div>

      {/* Small Cards */}
      <div className="flex justify-center items-center py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl w-auto gap-6 mx-10">
          <SmallCard
            value={t('statistics.projects.value')}
            label={t('statistics.projects.label')}
          />
          <SmallCard
            value={t('statistics.efficiency.value')}
            label={t('statistics.efficiency.label')}
          />
          <SmallCard
            value={t('statistics.experience.value')}
            label={t('statistics.experience.label')}
          />
          <SmallCard
            value={t('statistics.satisfaction.value')}
            label={t('statistics.satisfaction.label')}
          />
        </div>
      </div>

      <div className="flex flex-col items-center gap-3 mt-10">
        <b3 className="font-bold bg-gradient-to-r from-spt-secondary-400 to-spt-primary-400 bg-clip-text text-transparent text-center">
          Powered By Modern Tech
        </b3>
      </div>

      {/* Badge */}
      <div className="flex items-center gap-3 justify-center flex-wrap mb-10">
        <Badge icon={<CodeIcon />} text={t('badges.reactNext')} />
        <Badge icon={<Database />} text={t('badges.postgres')} />
        <Badge icon={<Cpu />} text={t('badges.pythonAi')} />
        <Badge icon={<Globe />} text={t('badges.cloudNative')} />
        <Badge icon={<CheckCircle />} text={t('badges.tailwind')} />
        <Badge icon={<CodeIcon />} text={t('badges.typescript')} />
      </div>

      <Title title={t('testimonials.title')} underline={false} />

      {/* Testimonial Cards */}
      <div className="flex justify-center items-center px-10 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl justify-items-center">
          <TestimonialCard
            avatar="NS"
            title={t('testimonials.first.title')}
            subtitle={t('testimonials.first.subtitle')}
            detail={t('testimonials.first.detail')}
          />
          <TestimonialCard
            avatar="NS"
            title={t('testimonials.second.title')}
            subtitle={t('testimonials.second.subtitle')}
            detail={t('testimonials.second.detail')}
          />
          <TestimonialCard
            avatar="NS"
            title={t('testimonials.third.title')}
            subtitle={t('testimonials.third.subtitle')}
            detail={t('testimonials.third.detail')}
          />
        </div>
      </div>
    </div>
  )
}
