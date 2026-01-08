import React from 'react';
import { cn } from '../commons/util/cn';
import { ArrowRight } from 'lucide-react';

interface CardProps {
  image: string;
  icon: React.ReactNode;
  title: string;
  detail: string;
  className?: string;
}

export const Card: React.FC<CardProps> = ({ image, icon, title, detail, className }) => {
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
        <div className="absolute bottom-4 left-6 z-10 bg-white p-3 rounded-xl text-natural opacity-90 [&>svg]:w-6 [&>svg]:h-6">
          {icon}
        </div>
      </div>

      <div className="p-6 pt-6 flex flex-col grow">
        <h6 className=" text-gray-900">
          {title}
        </h6>
        
        <b3 className="text-gray-600 leading-relaxed mt-1 mb-6 line-clamp-3">
          {detail}
        </b3>

        <div className="mt-auto flex items-center gap-2 text-primary font-bold text-sm cursor-pointer hover:opacity-80 transition-opacity">
          <span>Learn More</span>
          <ArrowRight className="w-4 h-4" />
        </div>
      </div>
    </div>
  );
};