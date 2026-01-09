import { cn } from '../commons/util/cn'

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
    <div className={cn('sprout-card flex flex-col md:flex-row gap-6 overflow-hidden', className)}>
      {/* image - Left Side */}
      <div className="flex-shrink-0 w-full md:w-2/6 aspect-video md:aspect-auto md:self-stretch bg-gray-900 flex items-center justify-center overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>

      {/* Content - Right Side */}
      <div className="flex-1 flex flex-col justify-center gap-3 pr-6 py-6 pl-2">
        {/* Tag */}
        <span className="text-primary text-sm font-semibold uppercase tracking-wider">{tag}</span>

        {/* title */}
        <h3 className="text-natural text-2xl font-bold">{title}</h3>

        {/* Detail */}
        <p className="text-gray-400 text-base leading-relaxed">{detail}</p>
        {/* Button */}
        <div className="mt-2">
          <button className="flex items-center gap-2 px-6 py-3 border-2 border-primary text-primary rounded-full bg-transparent hover:bg-primary hover:text-white transition-all duration-300 hover:scale-105 active:scale-95 font-medium">
            {buttonTitle}
           
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-square-arrow-out-up-right-icon lucide-square-arrow-out-up-right"
              >
                <path d="M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6" />
                <path d="m21 3-9 9" />
                <path d="M15 3h6v6" />
              </svg>
          
           
          </button>
        </div>
      </div>
    </div>
  )
}

export { HorizonCard }
