import { Button as HeroButton, buttonVariants, type ButtonProps } from '@heroui/react'
import { tv, type VariantProps } from 'tailwind-variants'

const customButtonVariants = tv({
  extend: buttonVariants,
  base: 'font-prompt font-semibold transition-all duration-300 hover:scale-105 active:scale-95',
  variants: {
    color: {
      primary: 'bg-spt-primary-400 hover:bg-spt-primary-500',
      secondary: 'bg-spt-secondary-400 hover:bg-spt-secondary-500',
    },
    size: {
      sm: 'min-w-14 w-auto h-6 text-xs',
      md: 'min-w-17 w-auto h-8 text-sm',
      lg: 'min-w-19 w-auto h-12 text-sm',
      xl: 'min-w-25 w-auto h-16 text-base',
    },
    variant: {
      pill: 'rounded-full',
      rounded: 'rounded-lg',
    },
  },
  defaultVariants: {
    color: 'primary',
    size: 'md',
    variant: 'pill',
  },
})

type CustomButtonVariants = VariantProps<typeof customButtonVariants>
interface CustomButtonProps
  extends Omit<ButtonProps, 'className' | 'size' | 'color' | 'variant'>, CustomButtonVariants {
  className?: string
  label: string
}

export const Button = ({ label, color, size, variant, className, ...props }: CustomButtonProps) => {
  return (
    <HeroButton className={customButtonVariants({ color, size, variant, className })} {...props}>
      {label}
    </HeroButton>
  )
}
