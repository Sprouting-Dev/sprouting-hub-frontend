import { render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { NextIntlClientProvider } from 'next-intl'

import enNav from '@/messages/en/Nav.json'
import thNav from '@/messages/th/Nav.json'
import enHome from '@/messages/en/Home.json'
import thHome from '@/messages/th/Home.json'
import { Navbar } from '@/components/layout/navigation'
import HomePage from '@/app/(frontend)/page'

vi.mock('next/navigation', () => ({
  usePathname: () => '/',
  useRouter: () => ({ refresh: vi.fn() }),
}))

vi.mock('next/image', () => ({
  __esModule: true,
  default: ({
    src,
    alt,
    ...props
  }: {
    src: string | { src: string }
    alt?: string
    className?: string
  }) => <img src={typeof src === 'string' ? src : src.src} alt={alt ?? ''} {...props} />,
}))

const renderWithIntl = (
  ui: React.ReactElement,
  locale: 'en' | 'th',
  messages: Record<string, unknown>,
) => {
  return render(
    <NextIntlClientProvider locale={locale} messages={messages}>
      {ui}
    </NextIntlClientProvider>,
  )
}

describe('i18n', () => {
  it('renders navbar labels in English', () => {
    renderWithIntl(<Navbar />, 'en', { Nav: enNav })

    expect(screen.getByText('Home')).toBeTruthy()
    expect(screen.getByText('Get Started')).toBeTruthy()
  })

  it('renders navbar labels in Thai', () => {
    renderWithIntl(<Navbar />, 'th', { Nav: thNav })

    expect(screen.getByText('หน้าหลัก')).toBeTruthy()
    expect(screen.getByText('เริ่มต้นใช้งาน')).toBeTruthy()
  })

  it('renders home content using translations', () => {
    renderWithIntl(<HomePage />, 'en', { Home: enHome })

    expect(screen.getByText('Intelligent Automation')).toBeTruthy()
  })

  it('renders home content in Thai', () => {
    renderWithIntl(<HomePage />, 'th', { Home: thHome })

    expect(screen.getByText('ระบบอัตโนมัติอัจฉริยะ')).toBeTruthy()
  })
})
