import { cn } from '../../util/cn'

interface SmallCardProps {
  value: string
  label: string
  className?: string
}

const SmallCard = ({ value, label, className }: SmallCardProps) => {
  return (
    <div
      className={cn(
        'flex flex-col items-center justify-center min-w-2xs sprout-card py-6 px-10',
        className,
      )}
    >
      <h2 className="text-spt-primary-400 font-bold">{value}</h2>
      <p className="text-spt-neutral-600 text-base font-normal">{label}</p>
    </div>
  )
}

export { SmallCard }
