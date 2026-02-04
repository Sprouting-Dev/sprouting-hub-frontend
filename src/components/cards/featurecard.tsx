import React from 'react'
import Image from 'next/image'
import { cn } from '../../util/cn'

interface FeatureCardProps {
  image: string
  title: string
  detail: string
  align?: 'center' | 'left'
  className?: string
  iconclassName?: string
  titleclassName?: string
  detailclassName?: string
}

export const FeatureCard = ({
  image,
  title,
  detail,
  align = 'center',
  className,
  iconclassName,
  titleclassName,
  detailclassName,
}: FeatureCardProps) => {
  return (
    <div
      className={cn(
        'flex flex-col bg-spt-neutral-100 py-5 px-6 w-auto rounded-2xl shadow-md',
        align === 'left' ? 'items-start text-left' : 'items-center text-center',
        className,
      )}
    >
      <div
        className={cn(
          'bg-spt-secondary-400/12 p-4 rounded-xl mb-3 [&>svg]:w-8 [&>svg]:h-8',
          iconclassName,
        )}
      >
        <Image src={image} alt={title} width={32} height={32} className="w-8 h-8 object-contain" />
      </div>

      <h6 className={cn('text-2xl text-spt-primary-500 mb-3', titleclassName)}>{title}</h6>

      <b2 className={cn('text-spt-neutral-800 font-normal', detailclassName)}>{detail}</b2>
    </div>
  )
}
