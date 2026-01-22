import React from 'react'
import { cn } from '../../util/cn'

interface ProcessStep {
  title: string
  detail: string
}

interface ProcessProps {
  steps: ProcessStep[]
  className?: string
}

export const Process: React.FC<ProcessProps> = ({ steps, className }) => {
  const lineWidth = `calc(100% - ${100 / steps.length}%)`

  return (
    <div
      className={cn(
        'w-full bg-white rounded-[1.250rem] border border-gray-100 p-8 md:p-8',
        className,
      )}
    >
      <div className="relative">
        <div
          className="hidden md:block absolute top-10 left-0 right-0 mx-auto h-0.75 bg-gray-200 transform -translate-y-1/2"
          style={{ width: lineWidth }}
        />

        <div className="grid grid-cols-1 md:grid-flow-col md:auto-cols-fr gap-10 md:gap-4 relative z-10">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center group px-2">
              <div className="relative mb-3">
                <div className="w-20 h-20 rounded-full bg-gradient-to-b from-spt-primary-400 to-spt-secondary-400 shadow-lg shadow-teal-900/20 border-4 border-white flex items-center justify-center">
                  <span className="text-white text-[2rem] font-bold font-prompt">{index + 1}</span>
                </div>
              </div>

              <h3 className="text-xl font-bold text-spt-neutral-1000 flex items-end justify-center">
                {step.title}
              </h3>

              <p className="text-sm text-spt-neutral-800 w-3xs mx-auto">{step.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
