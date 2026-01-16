import Image from 'next/image'
import { cn } from '../../util/cn'
import { ArrowRight } from 'lucide-react'

interface ServiceCardProps {
  image: string
  icon: React.ReactNode
  title: string
  detail: string
  className?: string
}

export const ServiceCard = ({ image, icon, title, detail, className }: ServiceCardProps) => {
  return (
    <div
      className={cn(
        'group flex flex-col rounded-3xl overflow-hidden shadow-md transition-all h-full',
        className,
      )}
    >
      <div className="relative h-40 w-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute bottom-4 left-4 z-10 bg-white p-3 rounded-xl text-spt-primary-400 opacity-90 [&>svg]:w-6 [&>svg]:h-6">
          {icon}
        </div>
      </div>

      <div className="py-6 px-8 flex flex-col grow">
        <h6 className="text-2xl text-spt-primary-500">{title}</h6>

        <b2 className="text-spt-neutral-800 leading-relaxed mt-2 mb-6 line-clamp-3">{detail}</b2>

        <div className="mt-auto flex items-center gap-2 text-spt-secondary-400 font-semibold text-base cursor-pointer hover:opacity-80 transition-opacity">
          <span>Learn More</span>
          <ArrowRight className="w-4 h-4" />
        </div>
      </div>
    </div>
  )
}
