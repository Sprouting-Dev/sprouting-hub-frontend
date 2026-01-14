import { cn } from '../../util/cn'
import { SquareArrowOutUpRight } from 'lucide-react'

interface HorizonCardProps {
  image: string
  title: string
  detail: string
  tag: string
  buttonTitle: string
  className?: string
}

const HorizonCard = ({ image, title, detail, tag, buttonTitle, className }: HorizonCardProps) => {
  return (
    <div
      className={cn(
        'sprout-horizon-card flex flex-col md:flex-row overflow-hidden bg-dark hover:bg-primary transition-colors duration-300',
        className,
      )}
    >
      {/* image - Left Side */}
      <div className="flex-shrink-0 w-full md:w-2/5 aspect-video md:aspect-auto md:self-stretch bg-dark flex items-center justify-center overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      {/* Content - Right Side */}
      <div className="flex-1 flex flex-col justify-center gap-2 p-8 bg-spt-neutral-900">
        <a href="#" className="text-spt-secondary-400 text-sm font-bold uppercase tracking-wider underline">
          {tag}
        </a>
        <h3 className="text-surface text-2xl font-bold">{title}</h3>
        <p className="text-muted text-base text-surface leading-relaxed pr-8">{detail}</p>
        <div className="mt-5">
          <button className="flex items-center justify-center gap-3 px-6 mt-4 py-2 border-1 rounded-full bg-transparent transition-all duration-300 hover:scale-105 active:scale-95 font-medium border-primary text-primary hover:bg-primary hover:text-white">
            {buttonTitle}
            <SquareArrowOutUpRight size={20} />
          </button>
        </div>
      </div>
    </div>
  )
}

export { HorizonCard }
