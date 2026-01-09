import type { HTMLAttributes } from 'react'

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      b1: HTMLAttributes<HTMLElement>
      b2: HTMLAttributes<HTMLElement>
      b3: HTMLAttributes<HTMLElement>
      b4: HTMLAttributes<HTMLElement>
      b5: HTMLAttributes<HTMLElement>
      b6: HTMLAttributes<HTMLElement>
    }
  }
}
