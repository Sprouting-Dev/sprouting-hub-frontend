import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Button } from '@/components/commons/button'
import { Sprout, Globe, ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from './commons/util/cn'

export const Navbar = () => {
  const [currentLang, setCurrentLang] = useState<'EN' | 'TH'>('EN')

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Products', path: '/products' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ]

  return (
    <nav className="sticky top-0 z-50 w-full bg-[#E5E5E5] px-8 py-4 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <NavLink to="/" className="flex items-center gap-1 group">
          <div className="flex items-center text-natural font-bold text-2xl tracking-tighter">
            <ChevronLeft className="w-12 h-12" />
            <Sprout className="w-7 h-7 -mx-3" />
            <ChevronRight className="w-12 h-12" />
          </div>
          <span className="font-bold text-2xl -mx-3 bg-gradient-to-t from-primary to-natural bg-clip-text text-transparent pr-3">
            Sprouting Tech
          </span>
        </NavLink>

        <div className="hidden md:flex items-center space-x-8 ml-auto mr-12">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                cn(
                  'text-sm font-medium transition-colors hover:text-natural',
                  isActive ? 'text-natural' : 'text-gray-500',
                )
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 text-sm select-none">
            <Globe className="w-4 h-4 text-primary" />

            <span
              onClick={() => setCurrentLang('EN')}
              className={cn(
                'cursor-pointer transition-colors',
                currentLang === 'EN'
                  ? 'font-bold text-natural'
                  : 'text-gray-400 font-medium hover:text-gray-600',
              )}
            >
              EN
            </span>

            <span className="w-[1px] h-4 bg-gray-300 mx-1"></span>

            <span
              onClick={() => setCurrentLang('TH')}
              className={cn(
                'cursor-pointer transition-colors',
                currentLang === 'TH'
                  ? 'font-bold text-natural'
                  : 'text-gray-400 font-medium hover:text-gray-600',
              )}
            >
              TH
            </span>
          </div>

          <Button label="Get Started" color="natural" size="md" variant="pill" />
        </div>
      </div>
    </nav>
  )
}
