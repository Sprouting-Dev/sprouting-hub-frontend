'use client'

import { usePathname } from 'next/navigation'
import { CTAFooter } from '@/components/footer/ctaFooter'

export function ConditionalCTAFooter() {
  const pathname = usePathname()
  const showCTAFooter = !pathname.includes('/contact')

  if (!showCTAFooter) return null

  return <CTAFooter className="my-10" />
}
