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
        'flex flex-col items-center justify-center gap-2 sprout-card pb-6 pt-6 pr-15 pl-15',
        className,
      )}
    >
      <h2 className="text-spt-primary-400 font-bold">{value}</h2>
      <p className="text-spt-neutral-600 text-base font-normal">{label}</p>
    </div>
  )
}

export { SmallCard }
