'use client'

import React from 'react'
import Link from 'next/link'
import Image, { StaticImageData } from 'next/image'
import fbIcon from '/public/icons/Facebook.png'
import xIcon from '/public/icons/Twitter.png'
import liIcon from '/public/icons/Linkedin.png'
import ytIcon from '/public/icons/Youtube.png'
import { useTranslations } from 'next-intl'

export const Address = () => {
  const t = useTranslations('Contact')

  const SocialIcon = ({
    src,
    alt,
    href,
  }: {
    src: string | StaticImageData
    alt: string
    href: string
  }) => (
    <Link
      href={href}
      className="w-12 h-12 rounded-full border border-spt-primary-10/10 flex items-center justify-center hover:bg-spt-primary-50 transition-colors hover:scale-110"
    >
      <Image src={src} alt={alt} width={20} height={20} className="object-contain" />
    </Link>
  )

  return (
    <div className="w-full max-w-7xl min-h-[756px] mx-auto bg-white border rounded-3xl p-8">
      <div className="flex flex-col gap-6 mb-8">
        <div className="flex items-start gap-4">
          <Image src="/icons/Address.png" alt="Address" width={20} height={20} />
          <p className="font-medium text-base text-spt-primary-400">
            {t('company.address')}
            <span className="font-normal text-spt-neutral-1000">
              : 60 Paya Lebar Rd, #06-28 Paya Lebar Square, Singapore 409051
            </span>
          </p>
        </div>

        <div className="flex items-center gap-4">
          <Image src="/icons/Email.png" alt="Email" width={20} height={20} />
          <p className="font-medium text-base text-spt-primary-400">
            {t('company.email')}
            <span className="font-normal text-spt-neutral-1000">: info@sproutingtechhub.com</span>
          </p>
        </div>

        <div className="flex items-center gap-4">
          <Image src="/icons/Tel.png" alt="Tel" width={20} height={20} />
          <p className="font-medium text-base text-spt-primary-400">
            {t('company.tel')}
            <span className="font-normal text-spt-neutral-1000">: +66 61-024-5495</span>
          </p>
        </div>
      </div>

      <div className="flex justify-center items-center gap-4 mb-8">
        <SocialIcon src={fbIcon} alt="Facebook" href="#" />
        <SocialIcon src={xIcon} alt="Twitter" href="#" />
        <SocialIcon src={liIcon} alt="LinkedIn" href="#" />
        <SocialIcon src={ytIcon} alt="Youtube" href="#" />
      </div>

      <div className="relative w-full h-125 rounded-xl overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1410.239933304729!2d103.89147826414255!3d1.3191635710903151!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da19001c8fc5bf%3A0x1245f862bf22898d!2sSprouting%20Tech!5e0!3m2!1sth!2sth!4v1769552555558!5m2!1sth!2sth"
          className="w-full h-full border-0"
          loading="lazy"
        />
      </div>
    </div>
  )
}
