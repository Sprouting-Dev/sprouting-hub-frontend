import { Star } from 'lucide-react'
import { cn } from '../../util/cn'

interface TestimonialCardProps {
  avatar: string
  title: string
  subtitle: string
  detail: string
  className?: string
}
const TestimonialCard = ({ avatar, title, subtitle, detail, className }: TestimonialCardProps) => {
  return (
    <div
      className={cn(
        'w-96 h-[266px] rounded-[14px] p-4 flex flex-col gap-4 bg-spt-neutral-100 sprout-shadow-md',
        className,
      )}
    >
      {/* Header */}
      <div className="flex items-center gap-3">
        {/* Avatar */}
        <div className="w-12 h-12 rounded-full bg-spt-primary-400 border-[2px] border-spt-secondary-400 flex items-center justify-center text-spt-neutral-1000 font-bold text-lg font-prompt">
          {avatar}
        </div>
        <div className="flex flex-col">
          <h6 className="text-spt-neutral-1000 font-bold text-base font-prompt">{title}</h6>
          <span className="text-spt-neutral-500 text-sm font-prompt font-normal">{subtitle}</span>
        </div>
      </div>
      {/* Rating Stars  */}
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-spt-secondary-400 text-spt-secondary-400" />
        ))}
      </div>
      {/* Review Detail */}
      <p className="text-spt-neutral-800 text-base leading-relaxed font-prompt font-normal pr-8">
        {detail}
      </p>
    </div>
  )
}

export { TestimonialCard }
