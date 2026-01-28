import { cn } from '../../util/cn'
import { SquareArrowOutUpRight } from 'lucide-react'
import Image from 'next/image'
import { ReactNode } from 'react'

interface ButtonConfig {
  title: string
  onClick?: () => void
  icon?: ReactNode
  className?: string
}

interface TwoColumnCardProps {
  image: string
  title: string
  detail: string
  tag?: string
  button?: ButtonConfig
  className?: string
  imagePosition?: 'left' | 'right'
}

const TwoColumnCard = ({
  image,
  title,
  detail,
  tag,
  button,
  className,
  imagePosition = 'left',
}: TwoColumnCardProps) => {
  return (
    <div
      className={cn(
        'sprout-two-column-card flex flex-col md:flex-row overflow-hidden transition-all duration-300',
        imagePosition === 'right' && 'md:flex-row-reverse',
        className,
      )}
    >
      {/* Image Section */}
      <div className="relative shrink-0 w-full md:w-1/2 aspect-video md:aspect-auto md:h-full overflow-hidden bg-spt-neutral-800">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>

      {/* Content Section */}
      <div className="flex-1 flex flex-col justify-center gap-4 p-8 md:p-12">
        {tag && (
          <div className="inline-flex">
            <span className="text-spt-secondary-400 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full border border-spt-secondary-400/30 bg-spt-secondary-400/10">
              {tag}
            </span>
          </div>
        )}

        <h3 className="text-surface text-3xl md:text-4xl font-bold leading-tight">{title}</h3>

        <p className="text-spt-neutral-150 text-base md:text-lg leading-relaxed">{detail}</p>

        {button && (
          <div className="mt-4">
            <button
              onClick={button.onClick}
              className={cn(
                'group flex items-center justify-center gap-3 px-8 py-3 border-2 rounded-full bg-transparent transition-all duration-300 hover:scale-105 active:scale-95 font-semibold border-spt-secondary-400 text-spt-secondary-400 hover:bg-spt-secondary-400 hover:text-white',
                button.className,
              )}
            >
              {button.title}
              {button.icon || (
                <SquareArrowOutUpRight
                  size={20}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              )}
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export { TwoColumnCard }
