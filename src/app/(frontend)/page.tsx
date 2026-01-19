'use client'

import React from 'react'
import { useTranslations } from 'next-intl'
import { Badge } from '@/components/commons/badge'
import { Button } from '@/components/commons/button'
import { FeatureCard, ServiceCard, TestimonialCard, HorizonCard } from '@/components/cards'
import { Sparkles, CodeIcon, Database, Cpu, Globe, CheckCircle, Bot, Monitor } from 'lucide-react'

import './styles.css'

export default function HomePage() {
  const t = useTranslations('Home')

  return (
    <div className="flex flex-col gap-5">
      {/* Hero Section */}
      <div className="relative flex flex-col items-center justify-center min-h-[90vh] px-4 pt-20  pb-10 text-center">
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
          />
        </div>
      </div>

      {/* Feature Card */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 p-10">
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

      {/* Service Cards */}
      <div className="flex justify-center items-center p-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl w-full">
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
      <div className="flex justify-center items-center p-10 bg-spt-neutral-1000">
        <div className="flex flex-col gap-5 w-full items-center">
          <HorizonCard
            image="/images/sprouting_academy_thum.png"
            title={t('horizon.academy.title')}
            detail={t('horizon.academy.detail')}
            tag={t('horizon.academy.tag')}
            buttonTitle={t('horizon.academy.buttonTitle')}
            onClick={() => (window.location.href = '/#')}
          />
          <HorizonCard
            image="/images/wiivor_mockup_banner.png"
            title={t('horizon.wiivor.title')}
            detail={t('horizon.wiivor.detail')}
            tag={t('horizon.wiivor.tag')}
            buttonTitle={t('horizon.wiivor.buttonTitle')}
            onClick={() => (window.location.href = '/#')}
          />
        </div>
      </div>

      {/* Badge */}
      <div className="flex items-center gap-3 justify-center flex-wrap p-5">
        <Badge icon={<CodeIcon />} text={t('badges.reactNext')} />
        <Badge icon={<Database />} text={t('badges.postgres')} />
        <Badge icon={<Cpu />} text={t('badges.pythonAi')} />
        <Badge icon={<Globe />} text={t('badges.cloudNative')} />
        <Badge icon={<CheckCircle />} text={t('badges.tailwind')} />
        <Badge icon={<CodeIcon />} text={t('badges.typescript')} />
      </div>

      {/* Testimonial Cards */}
      <div className="flex justify-center items-center p-10">
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
