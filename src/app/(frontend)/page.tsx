'use client'

import React from 'react'
import { useTranslations } from 'next-intl'
import { Badge } from '@/components/commons/badge'
import { FeatureCard } from '@/components/cards/featurecard'
import { ServiceCard } from '@/components/cards/servicecard'
import { TestimonialCard } from '@/components/cards/testimonialCard'
import { HorizonCard } from '@/components/cards/horizonCard'
import {
  CodeIcon,
  Database,
  Cpu,
  Globe,
  CheckCircle,
  Bot,
  Monitor,
} from 'lucide-react'

import './styles.css'

export default function HomePage() {
  const t = useTranslations('Home')

  return (
    <div className="flex flex-col gap-5">
      {/* Feature Card */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 p-10">
        <FeatureCard
          image="/Bot.png"
          title={t('features.automation.title')}
          detail={t('features.automation.detail')}
        />
        <FeatureCard
          image="/Server.png"
          title={t('features.architecture.title')}
          detail={t('features.architecture.detail')}
        />
        <FeatureCard
          image="/TrendingUP.png"
          title={t('features.delivery.title')}
          detail={t('features.delivery.detail')}
        />
        <FeatureCard
          image="/Sparkles.png"
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
          />
          <HorizonCard
            image="/images/wiivor_mockup_banner.png"
            title={t('horizon.wiivor.title')}
            detail={t('horizon.wiivor.detail')}
            tag={t('horizon.wiivor.tag')}
            buttonTitle={t('horizon.wiivor.buttonTitle')}
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

<<<<<<< HEAD
      {/* Testimonial Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pr-10 pl-10 pb-10">
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
=======
     {/* Testimonial Cards */}
      <div className="flex justify-center items-center p-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl justify-items-center">
          <TestimonialCard
            avatar="NS"
            title="Natthakit Saetan"
            subtitle="General Manager"
            detail="เนื้อหาออกแบบมาให้คนที่ไม่เคยเขียนโค้ดเข้าใจได้ง่าย สามารถนำไปสร้างระบบ Workflow อัตโนมัติได้จริง ๆ"
          />
          <TestimonialCard
            avatar="NS"
            title="Natthakit Saetan"
            subtitle="General Manager"
            detail="เนื้อหาออกแบบมาให้คนที่ไม่เคยเขียนโค้ดเข้าใจได้ง่าย สามารถนำไปสร้างระบบ Workflow อัตโนมัติได้จริง ๆ"
          />
          <TestimonialCard
            avatar="NS"
            title="Natthakit Saetan"
            subtitle="General Manager"
            detail="เนื้อหาออกแบบมาให้คนที่ไม่เคยเขียนโค้ดเข้าใจได้ง่าย สามารถนำไปสร้างระบบ Workflow อัตโนมัติได้จริง ๆ"
          />
        </div>
>>>>>>> f71a705 (feat: update TestimonialCard styling and layout with shadow)
      </div>
    </div>
  )
}