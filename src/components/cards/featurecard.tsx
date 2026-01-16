import React from 'react'
import Image from 'next/image'
import { cn } from '../../util/cn'

interface FeatureCardProps {
  image: string
  title: string
  detail: string
  className?: string
}

export const FeatureCard = ({ image, title, detail, className }: FeatureCardProps) => {
  return (
    <div
      className={cn(
        'flex flex-col items-center text-center py-5 px-6 w-auto rounded-2xl shadow-md',
        className,
      )}
    >
      <div className="bg-spt-secondary-400/12 p-4 rounded-xl mb-3 [&>svg]:w-8 [&>svg]:h-8">
        <Image src={image} alt={title} width={32} height={32} className="w-8 h-8 object-contain" />
      </div>

      <h6 className="text-2xl text-spt-primary-500 mb-3">
        {title}
      </h6>

      <b2 className="text-spt-neutral-800 font-normal">
        {detail}
      </b2>
    </div>
  )
}
