import React from 'react';
import { cn } from './util/cn';

interface BadgeProps {
  icon: React.ReactNode;
  text: string;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({ icon, text, className }) => {
  return (
      <div 
      className={cn('inline-flex items-center gap-2 px-4 py-2 rounded-full shadow-sm text-gray-700 font-medium text-sm',
        className
      )}
    >
      <span className="text-natural flex items-center justify-center [&>svg]:w-4 [&>svg]:h-4">
        {icon}
      </span>
      
      <span>{text}</span>
    </div>
  );
};