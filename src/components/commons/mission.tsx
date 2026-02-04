'use client'

import React from 'react'
import Image from 'next/image'
import { useTranslations } from 'next-intl'

export const Mission = () => {
  const t = useTranslations('About')

  return (
    <div className="w-full max-w-6xl mx-auto px-6 py-16 lg:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="relative mx-auto lg:ml-auto lg:mr-0 w-full max-w-md">
          <div className="absolute top-5 -left-5 w-full h-full rounded-[2rem] border-2 border-spt-secondary-400 z-0" />
          <div className="relative rounded-[2rem] overflow-hidden shadow-lg z-10 bg-gray-200 aspect-[4/3]">
            <Image
              src="/images/Hero BG About Page.jpg"
              alt="Our Team"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="flex flex-col gap-6 ">
          <div>
            <b2 className="text-spt-secondary-400 font-semibold pb-2 uppercase tracking-wide">
              {t('mission.subtitle')}
            </b2>
            <h2 className="text-5xl text-spt-primary-500 leading-tight pt-3">
              {t('mission.title')}
            </h2>
          </div>

          <div className="text-lg font-normal text-spt-neutral-800 space-y-4 pt-2">
            <p>{t('mission.description1')}</p>
            <p>{t('mission.description2')}</p>
          </div>

          <div className="flex flex-wrap gap-8 mt-4">
            <div className="flex flex-col border-l-4 border-spt-primary-400 pl-4">
              <span className="text-[2rem] font-bold text-spt-primary-400">98%</span>
              <span className="text-sm text-spt-neutral-850 mt-1">{t('mission.autorate')}</span>
            </div>
            <div className="flex flex-col border-l-4 border-spt-secondary-400 pl-4">
              <span className="text-[2rem] font-bold text-spt-secondary-400">24/7</span>
              <span className="text-sm text-spt-neutral-850 mt-1">{t('mission.uptime')}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
