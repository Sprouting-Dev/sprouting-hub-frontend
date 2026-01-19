import React from 'react'
import { cn } from '../../util/cn'

interface BadgeProps {
  icon: React.ReactNode
  text: string
  className?: string
}

export const Badge = ({ icon, text, className }: BadgeProps) => {
  return (
    <div
      className={cn(
        'inline-flex items-center gap-2 px-4 py-2 rounded-full shadow-md bg-spt-neutral-100 text-spt-neutral-800 font-medium text-base leading-6',
        className,
      )}
    >
      <span className="text-spt-primary-400 flex items-center justify-center [&>svg]:w-5 [&>svg]:h-5">
        {icon}
      </span>

      <span>{text}</span>
    </div>
  )
}
