'use client'

import Link from 'next/link'
import Image from 'next/image'
import logoImg from '/public/Logo.png'
import { usePathname, useRouter } from 'next/navigation'
import { useLocale, useTranslations } from 'next-intl'
import { Button } from '@/components/commons/button'
import { Globe } from 'lucide-react'
import { cn } from '../../util/cn'

export const Navbar = () => {
  const pathname = usePathname()
  const router = useRouter()
  const locale = useLocale()
  const t = useTranslations('Nav')

  const setLocaleCookie = (nextLocale: 'en' | 'th') => {
    if (nextLocale === locale) {
      return
    }

    document.cookie = `NEXT_LOCALE=${nextLocale}; path=/; max-age=31536000; samesite=lax`
    router.refresh()
  }

  const navItems = [
    { name: t('home'), path: '/' },
    { name: t('services'), path: '/services' },
    { name: t('about'), path: '/about' },
    { name: t('contact'), path: '/contact' },
  ]

  return (
    <nav className="sticky top-0 z-50 w-full bg-white px-8 py-4 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-1 group">
          <Image
            src={logoImg}
            alt="Sprouting Tech Logo"
            className="w-19.25 h-8 object-contain"
            priority
          />
          <span className="font-bold text-2xl font-prompt bg-linear-to-b from-spt-primary-400 to-spt-secondary-400 bg-clip-text text-transparent px-1 whitespace-nowrap">
            Sprouting Tech
          </span>
        </Link>

        <div className="hidden md:flex items-center space-x-8 ml-auto mr-8">
          {navItems.map((item) => {
            const isActive = pathname === item.path

            return (
              <Link
                key={item.name}
                href={item.path}
                className={cn(
                  'text-base font-normal font-prompt transition-colors hover:text-spt-primary-400',
                  isActive ? 'text-spt-primary-400' : 'text-spt-neutral-500',
                )}
              >
                {item.name}
              </Link>
            )
          })}
        </div>

        <div className="hidden md:block w-[0.5px] h-6 bg-spt-neutral-200 mr-8"></div>

        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 text-sm font-semibold leading-5 font-prompt select-none">
            <Globe className="w-4 h-4 text-spt-secondary-400" />
            <span
              onClick={() => setLocaleCookie('en')}
              className={cn(
                'cursor-pointer transition-colors',
                locale === 'en'
                  ? 'text-spt-primary-400'
                  : 'text-spt-neutral-500 hover:text-spt-primary-400',
              )}
            >
              {t('language.en')}
            </span>

            <span className="w-[0.5px] h-6 bg-spt-neutral-200 mx-1"></span>

            <span
              onClick={() => setLocaleCookie('th')}
              className={cn(
                'cursor-pointer transition-colors',
                locale === 'th'
                  ? 'text-spt-primary-400'
                  : 'text-spt-neutral-500 hover:text-spt-primary-400',
              )}
            >
              {t('language.th')}
            </span>
          </div>

          <Button
            className="h-10"
            label={t('getStarted')}
            color="primary"
            size="md"
            variant="pill"
          />
        </div>
      </div>
    </nav>
  )
}
