'use client'

import Link from 'next/link'
import Image, { StaticImageData } from 'next/image'
import logoImg from '/public/brand/Logo.png'
import menuIcon from '/public/icons/Menu.png'
import fbIcon from '/public/icons/Facebook.png'
import xIcon from '/public/icons/Twitter.png'
import liIcon from '/public/icons/Linkedin.png'
import ytIcon from '/public/icons/Youtube.png'
import { usePathname, useRouter } from 'next/navigation'
import { useLocale, useTranslations } from 'next-intl'
import { useState, useEffect } from 'react'
import { Button } from '@/components/commons/button'
import { Globe } from 'lucide-react'
import { cn } from '../../util/cn'

export const Navbar = () => {
  const pathname = usePathname()
  const router = useRouter()
  const locale = useLocale()
  const t = useTranslations('Nav')
  const [isOpen, setIsOpen] = useState(false)

  const setLocaleCookie = (nextLocale: 'en' | 'th') => {
    if (nextLocale === locale) {
      return
    }

    document.cookie = `NEXT_LOCALE=${nextLocale}; path=/; max-age=31536000; samesite=lax`
    router.refresh()
  }

  const SocialIcon = ({
    src,
    alt,
    href,
  }: {
    src: string | StaticImageData
    alt: string
    href: string
  }) => (
    <Link
      href={href}
      className="w-12 h-12 rounded-full border border-spt-primary-10/10 flex items-center justify-center hover:bg-spt-primary-50 transition-colors hover:scale-110"
    >
      <Image src={src} alt={alt} width={20} height={20} className="object-contain" />
    </Link>
  )

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const navItems = [
    { name: t('home'), path: '/' },
    { name: t('services'), path: '/services' },
    { name: t('about'), path: '/about' },
    { name: t('contact'), path: '/contact' },
  ]

  const closeMenu = () => setIsOpen(false)

  return (
    <>
      <nav className="sticky top-0 z-50 w-full bg-white px-8 py-4 shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-1 group">
            <Image
              src={logoImg}
              alt="Sprouting Tech Logo"
              className="w-19.25 h-8 object-contain"
              priority
            />
            <span className="font-bold text-2xl bg-linear-to-b from-spt-primary-400 to-spt-secondary-400 bg-clip-text text-transparent px-1 whitespace-nowrap">
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
                    'text-base font-normal transition-colors hover:text-spt-primary-400',
                    isActive ? 'text-spt-primary-400' : 'text-spt-neutral-500',
                  )}
                >
                  {item.name}
                </Link>
              )
            })}
          </div>

          <div className="hidden md:block w-[0.5px] h-6 bg-spt-neutral-200 mr-8"></div>

          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-center gap-2 text-sm font-semibold leading-5 select-none">
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
              onClick={() => router.push('/contact')}
            />
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex items-center justify-center focus:outline-none"
          >
            <Image
              src={menuIcon}
              alt="Menu"
              width={18}
              height={12}
              className="w-6 h-6 object-contain"
            />
          </button>
        </div>
      </nav>

      <div
        className={cn(
          'fixed inset-0 z-40 bg-white pt-28 px-8 md:hidden flex flex-col transition-all duration-300 ease-in-out',
          isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none',
        )}
      >
        <div className="flex flex-col gap-6">
          {navItems.map((item) => {
            const isActive = pathname === item.path
            return (
              <Link
                key={item.name}
                href={item.path}
                onClick={closeMenu}
                className={cn(
                  'text-[1.375rem] font-normal transition-colors',
                  isActive
                    ? 'text-spt-primary-400'
                    : 'text-spt-neutral-500 hover:text-spt-primary-400',
                )}
              >
                {item.name}
              </Link>
            )
          })}
        </div>

        <div className="mt-8 pt-8 border-t border-gray-100 w-full flex flex-col items-center gap-6">
          <div className="flex items-center gap-2 text-sm font-semibold leading-5 select-none">
            <Globe className="w-4 h-4 text-spt-secondary-400" />
            <span
              onClick={() => {
                setLocaleCookie('en')
                closeMenu()
              }}
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
              onClick={() => {
                setLocaleCookie('th')
                closeMenu()
              }}
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
            onClick={() => {
              router.push('/contact')
              closeMenu()
            }}
          />
        </div>

        <div className="justify-center mt-8 mb-10 flex gap-4">
          <SocialIcon src={fbIcon} alt="Facebook" href="#" />
          <SocialIcon src={xIcon} alt="Twitter" href="#" />
          <SocialIcon src={liIcon} alt="LinkedIn" href="#" />
          <SocialIcon src={ytIcon} alt="Youtube" href="#" />
        </div>
      </div>
    </>
  )
}
