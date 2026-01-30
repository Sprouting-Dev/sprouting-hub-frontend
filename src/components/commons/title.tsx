import React from 'react'
import { cn } from '../../util/cn'

interface TitleProps {
  title: string
  className?: string
  underline?: boolean
}

export const Title: React.FC<TitleProps> = ({ title, className, underline = true }) => {
  return (
    <div className="flex flex-col items-center gap-3">
      <h3 className={cn('text-4xl text-spt-primary-500 text-center font-bold', className)}>
        {title}
      </h3>
      {underline && (
        <div className="h-1 w-25 bg-gradient-to-r from-spt-secondary-400 to-spt-primary-400 rounded-full" />
      )}
    </div>
  )
}
