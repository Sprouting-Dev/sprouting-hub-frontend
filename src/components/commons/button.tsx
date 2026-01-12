import { Button as HeroButton, buttonVariants, type ButtonProps } from '@heroui/react'
import { tv, type VariantProps } from 'tailwind-variants'

const customButtonVariants = tv({
  extend: buttonVariants,
  base: 'text-white transition-all duration-300 hover:scale-105 active:scale-95',
  variants: {
    color: {
      natural: 'bg-natural hover:bg-hover-natural',
      primary: 'bg-primary hover:bg-hover-primary',
      secondary: 'bg-secondary hover:bg-hover-secondary',
      accent: 'bg-accent hover:bg-hover-accent',
    },
    size: {
      sm: "min-w-14 w-auto h-6 text-xs",
      md: "min-w-17 w-auto h-8 text-sm",
      lg: "min-w-19 w-auto h-12 text-sm",
      xl: "min-w-25 w-auto h-16 text-base",
    },
    variant: {
      pill: 'rounded-full',
      rounded: 'rounded-lg',
    },
  },
  defaultVariants: {
    color: 'natural',
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
