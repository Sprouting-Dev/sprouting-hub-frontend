'use client'

import React from 'react'
import Image, { StaticImageData } from 'next/image'
import { User } from 'lucide-react'
import { cn } from '@/util/cn'

interface AvatarProps {
  name: string
  role: string
  src?: string | StaticImageData
  className?: string
}

export const Avatar: React.FC<AvatarProps> = ({ name, role, src, className }) => {
  return (
    <div className={cn('flex flex-col items-center text-center gap-4', className)}>
      <div className="flex items-center justify-center relative w-50 h-50 rounded-full border-4 border-white shadow-xl overflow-hidden bg-black/20">
        {src ? (
          <Image
            src={src}
            alt={name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <User className="w-30 h-30 text-gray-400" />
        )}
      </div>
      <div className="flex flex-col gap-1">
        <h6 className="text-xl text-spt-neutral-1000">{name}</h6>
        <b2 className="text-spt-primary-400">{role}</b2>
      </div>
    </div>
  )
}
