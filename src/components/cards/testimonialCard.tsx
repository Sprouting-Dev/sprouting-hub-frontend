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
        'w-96 h-[266px] rounded-[14px] p-4 flex flex-col gap-4 border border-gray-200 sprout-shadow-md',
        className,
      )}
    >
      {/* Header */}
      <div className="flex items-center gap-3">
        {/* Avatar */}
        <div className="w-12 h-12 rounded-full bg-natural border-[2px] border-[#13B499] flex items-center justify-center text-[#333333] font-bold text-lg font-prompt">
          {avatar}
        </div>
        <div className="flex flex-col">
          <h6 className="text-[#333333] font-bold text-base font-prompt">{title}</h6>
          <span className="text-[#9F9F9F] text-sm font-prompt font-normal">{subtitle}</span>
        </div>
      </div>
      {/* Rating Stars */}
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-spt-secondary-400 text-spt-secondary-400" />
        ))}
      </div>
      {/* Review Detail */}
      <p className="text-[#5E5E5E] text-base leading-relaxed font-prompt font-normal pr-8">
        {detail}
      </p>
    </div>
  )
}

export { TestimonialCard }
