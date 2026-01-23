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
      className={cn('relative w-full overflow-hidden', className)}
      style={{ minHeight: 'calc(100vh - var(--navbar-height))' }}
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
        <div
          className="absolute inset-0 opacity-60"
          style={{
            background:
              'linear-gradient(180deg, rgba(19, 180, 153, 0) 0%, var(--spt-primary-400) 136.92%)',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-full flex flex-col items-center justify-center text-center px-8 md:px-20 lg:px-40 xl:px-60 py-20 md:py-24 lg:py-32">
        {/* Badge */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-spt-secondary-100/20 border border-spt-secondary-400/30 px-4 py-2 text-sm font-semibold text-spt-secondary-400">
          <Sparkles size={14} className="text-spt-secondary-400" strokeWidth={1.33} />
          {badge}
        </div>

        {/* Title */}
        <h1
          className="max-w-4xl font-bold text-4xl md:text-5xl lg:text-6xl mb-4 bg-clip-text text-transparent"
          style={{
            background:
              'linear-gradient(180deg, var(--spt-primary-400) 0%, var(--spt-gradient-mid) 50%, var(--spt-secondary-400) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          {title}
          <br />
          {subtitle}
        </h1>

        {/* Description */}
        <p className="mt-6 max-w-2xl text-xl font-light leading-8 text-center text-spt-primary-500">
          {description}
        </p>
      </div>
    </div>
  )
}

export { HeroBanner }
