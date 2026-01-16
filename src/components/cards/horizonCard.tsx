import { cn } from '../../util/cn'
import { SquareArrowOutUpRight } from 'lucide-react'
import Image from 'next/image'

interface HorizonCardProps {
  image: string
  title: string
  detail: string
  tag: string
  buttonTitle: string
  onClick?: () => void
  className?: string
}

const HorizonCard = ({ image, title, detail, tag, buttonTitle, onClick, className }: HorizonCardProps) => {
  return (
    <div
      className={cn(
        'sprout-horizon-card flex flex-col md:flex-row overflow-hidden',
        className,
      )}
    >
      {/* image - Left Side */}
      <div className="relative flex-shrink-0 w-full md:w-2/5 aspect-video md:aspect-auto md:self-stretch flex items-center justify-center overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(min-width: 768px) 40vw, 100vw"
          className="object-cover"
        />
      </div>
      {/* Content - Right Side */}
      <div className="flex-1 flex flex-col justify-center gap-2 p-8 border-t-1 border-spt-neutral-850">
        <a href="#" className="text-spt-secondary-400 text-sm font-bold uppercase tracking-wider underline">
          {tag}
        </a>
        <h3 className="text-surface text-2xl font-bold">{title}</h3>
        <p className="text-spt-neutral-150 text-base leading-relaxed pr-20">{detail}</p>
        <div className="mt-5">
          <button
            onClick={onClick}
            className="flex items-center justify-center gap-3 px-6 mt-4 py-2 border-2 rounded-full bg-transparent transition-all duration-300 hover:scale-105 active:scale-95 font-medium border-spt-secondary-400 text-spt-secondary-400 hover:bg-spt-secondary-400 hover:text-white"
        >
            {buttonTitle}
            <SquareArrowOutUpRight size={20} />
          </button>
        </div>
      </div>
    </div>
  )
}

export { HorizonCard }
