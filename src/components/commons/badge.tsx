import React from 'react';
import { cn } from '../../util/cn';

interface BadgeProps {
  icon: React.ReactNode;
  text: string;
  className?: string;
}

export const Badge = ({ icon, text, className } : BadgeProps) => {
  return (
    <div 
      className={cn('inline-flex items-center gap-2 px-4 py-2 rounded-full shadow-md text-[#5E5E5E] font-medium text-base font-prompt leading-6',
        className
      )}
    >
      <span className="text-natural flex items-center justify-center [&>svg]:w-5 [&>svg]:h-5">
        {icon}
      </span>
      
      <span>{text}</span>
    </div>
  );
};