import { cn } from '../../util/cn'
import Image from 'next/image'
import { Sparkles } from 'lucide-react'

interface HeroBannerProps {
  title: string
  subtitle: string
  description: string
  badge: string
  backgroundImage: string
  className?: string
}

const HeroBanner = ({
  title,
  subtitle,
  description,
  badge,
  backgroundImage,
  className,
}: HeroBannerProps) => {
  return (
    <div
      className={cn(
        'relative w-full overflow-hidden min-h-[745px] bg-spt-neutral-100 pt-12',
        className,
      )}
    >
      {/* Background Image with Opacity */}
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage}
          alt="Hero Background"
          fill
          className="object-cover opacity-[0.08]"
          priority
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 gradient-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-full flex flex-col items-center justify-center text-center px-4 md:px-12 lg:px-24 xl:px-40 py-12 md:py-16 lg:py-20">
        {/* Badge */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-spt-secondary-alpha-10 border border-spt-secondary-alpha-20 px-4 py-2 text-sm font-semibold text-spt-secondary-400">
          <Sparkles size={14} className="text-spt-secondary-400" strokeWidth={1.33} />
          {badge}
        </div>

        {/* Title */}
        <h1 className="max-w-4xl font-bold text-4xl md:text-5xl lg:text-6xl mb-4 gradient-title">
          {title}
          <br />
          {subtitle}
        </h1>

        {/* Description */}
        <p className="mt-6 max-w-xl text-xl font-light leading-8 text-center text-spt-primary-500">
          {description}
        </p>
      </div>
    </div>
  )
}

export { HeroBanner }
