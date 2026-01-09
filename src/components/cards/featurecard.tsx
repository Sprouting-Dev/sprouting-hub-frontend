import React from 'react';
import { cn } from '../../util/cn';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  detail: string;
  className?: string;
}

export const FeatureCard = ({ icon, title, detail, className } : FeatureCardProps) => {
  return (
    <div 
      className={cn('flex flex-col items-center text-center py-5 w-auto rounded-2xl shadow-md',
        className
      )}
    >
      <div className="bg-[#E0F2F1] text-primary p-4 rounded-xl mb-3 [&>svg]:w-8 [&>svg]:h-8">
        {icon}
      </div>
      
      <h6 className="text-natural mb-3">
        {title}
      </h6>
      
      <b2 className="text-gray-700">
        {detail}
      </b2>
    </div>
  );
};