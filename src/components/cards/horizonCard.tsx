import { cn } from '../commons/util/cn'

interface HorizonCardProps {
  Image: string
  Title: string
  Detail: string
  Tag: string
  buttonTitle: string
  className?: string
}

const HorizonCard = ({ Image, Title, Detail, Tag, buttonTitle, className }: HorizonCardProps) => {
  return (
    <div className={cn('sprout-card flex flex-col md:flex-row gap-6 overflow-hidden', className)}>
      {/* Image - Left Side */}
      <div className="flex-shrink-0 w-full md:w-2/6 aspect-video md:aspect-auto md:self-stretch bg-gray-900 flex items-center justify-center overflow-hidden">
        <img src={Image} alt={Title} className="w-full h-full object-cover" />
      </div>

      {/* Content - Right Side */}
      <div className="flex-1 flex flex-col justify-center gap-3 pr-6 py-6 pl-2">
        {/* Tag */}
        <span className="text-primary text-sm font-semibold uppercase tracking-wider">{Tag}</span>

        {/* Title */}
        <h3 className="text-natural text-2xl font-bold">{Title}</h3>

        {/* Detail */}
        <p className="text-gray-400 text-base leading-relaxed">{Detail}</p>
        {/* Button */}
        <div className="mt-2">
          <button className="flex items-center gap-2 px-6 py-3 border-2 border-primary text-primary rounded-full bg-transparent hover:bg-primary hover:text-white transition-all duration-300 hover:scale-105 active:scale-95 font-medium">
            {buttonTitle}
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

export { HorizonCard }
