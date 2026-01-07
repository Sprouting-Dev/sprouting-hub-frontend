import React from 'react'
import { Star } from 'lucide-react'
import { cn } from './util/cn'

interface TestimonialCardProps {
  avatar: string
  title: string
  subtitle: string
  detail: string
  className?: string
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  avatar,
  title,
  subtitle,
  detail,
  className,
}) => {
  return (
    <div
      className={cn(
        'sprout-card pr-25 pl-10 pb-15 pt-10  flex flex-col gap-4 ',
        className,
      )}
    >
      {/* Header */}
      <div className="flex items-center gap-3">
        {/* Avatar */}
        <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-black font-bold">
          {avatar}
        </div>
        <div className="flex flex-col">
          <h6 className="text-natural">{title}</h6>
          <span className="text-gray-500 text-sm">{subtitle}</span>
        </div>
      </div>
      {/* Rating Stars */}
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-primary text-primary" />
        ))}
      </div>
      {/* Review Detail */}
      <p className="text-gray-700 text-base ">{detail}</p>
    </div>
  )
}
