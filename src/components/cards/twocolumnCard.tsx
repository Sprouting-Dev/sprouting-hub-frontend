import { cn } from '../../util/cn'
import { SquareArrowOutUpRight, Check } from 'lucide-react'
import Image from 'next/image'
import { ReactNode } from 'react'

interface ButtonConfig {
  title: string
  onClick?: () => void
  icon?: ReactNode
  className?: string
}

interface ListItem {
  title: string
  description?: string
}

interface TwoColumnCardProps {
  image: string
  title: string
  titleIcon?: ReactNode
  detail: string
  listItems?: (string | ListItem)[]
  tag?: string
  button?: ButtonConfig
  className?: string
  imagePosition?: 'left' | 'right'
}

const TwoColumnCard = ({
  image,
  title,
  titleIcon,
  detail,
  listItems,
  tag,
  button,
  className,
  imagePosition = 'left',
}: TwoColumnCardProps) => {
  return (
    <div
      className={cn(
        'sprout-two-column-card',
        imagePosition === 'right' ? 'sprout-two-column-card-right' : 'sprout-two-column-card-left',
        'flex-col md:!flex-row',
        imagePosition === 'right' && 'md:!flex-row-reverse',
        className,
      )}
    >
      {/* Image Section */}
      <div className="relative shrink-0 w-full md:w-1/2 aspect-video md:aspect-auto md:h-full overflow-hidden bg-spt-neutral-800">
        <Image
          src={image}
          alt={title}
          fill
          priority
          quality={100}
          unoptimized
          sizes="(min-width: 768px) 487px, 100vw"
          className="object-cover object-center transition-transform duration-500 hover:scale-105"
        />
      </div>

      {/* Content Section */}
      <div className="flex-1 flex flex-col justify-center gap-8 p-8 md:p-12">
        {tag && (
          <div className="inline-flex">
            <span className="text-spt-secondary-400 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full border border-spt-secondary-400/30 bg-spt-secondary-400/10">
              {tag}
            </span>
          </div>
        )}

        <div className="flex items-center gap-3">
          {titleIcon && <div className="shrink-0">{titleIcon}</div>}
          <h3 className="two-column-card-title">{title}</h3>
        </div>

        <p className="two-column-card-description pb-4">{detail}</p>

        {listItems && listItems.length > 0 && (
          <ul className="two-column-card-list pb-6">
            {listItems.map((item) => (
              <li key={crypto.randomUUID()} className="flex items-start gap-3">
                <div className="two-column-card-list-icon shrink-0 w-6 h-6 flex items-center justify-center">
                  <Check className="w-4 h-4" strokeWidth={3} />
                </div>
                <div className="flex flex-col">
                  {typeof item === 'string' ? (
                    <span className="two-column-card-list-item">{item}</span>
                  ) : (
                    <>
                      <span className="two-column-card-list-item">{item.title}</span>
                      {item.description && (
                        <span className="two-column-card-list-description">{item.description}</span>
                      )}
                    </>
                  )}
                </div>
              </li>
            ))}
          </ul>
        )}

        {button && (
          <button
            onClick={button.onClick}
            className={cn('two-column-card-button', button.className)}
          >
            {button.title}
            {button.icon || (
              <SquareArrowOutUpRight
                size={20}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            )}
          </button>
        )}
      </div>
    </div>
  )
}

export { TwoColumnCard }
