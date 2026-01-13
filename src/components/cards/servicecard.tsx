import { cn } from '../../util/cn';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  image: string;
  icon: React.ReactNode;
  title: string;
  detail: string;
  className?: string;
}

export const ServiceCard = ({ image, icon, title, detail, className } : ServiceCardProps) => {
  return (
    <div 
      className={cn('group flex flex-col rounded-3xl overflow-hidden shadow-md transition-all h-full',
        className
      )}
    >
      <div className="relative h-40 w-full overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
        />
        <div className="absolute bottom-4 left-4 z-10 bg-white p-3 rounded-xl text-natural opacity-90 [&>svg]:w-6 [&>svg]:h-6">
          {icon}
        </div>
      </div>

      <div className="py-6 px-8 flex flex-col grow">
        <h6 className="text-2xl text-hover-natural">
          {title}
        </h6>
        
        <b2 className="text-[#5E5E5E] leading-relaxed mt-2 mb-6 line-clamp-3">
          {detail}
        </b2>

        <div className="mt-auto flex items-center gap-2 text-primary font-prompt font-semibold text-base cursor-pointer hover:opacity-80 transition-opacity">
          <span>Learn More</span>
          <ArrowRight className="w-4 h-4" />
        </div>
      </div>
    </div>
  );
};