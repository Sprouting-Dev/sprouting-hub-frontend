'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logoImg from '../../public/Logo.png';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/commons/button'
import { Globe } from 'lucide-react';
import { cn } from '../../util/cn';

export const Navbar = () => {
  const pathname = usePathname();
  const [currentLang, setCurrentLang] = useState<'EN' | 'TH'>('EN');

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Products', path: '/products' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-[#ffffff] px-8 py-4 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-1 group">
           <Image 
             src={logoImg}
             alt="Sprouting Tech Logo"
             className="h-9 w-auto object-contain"
             priority
           />
           <span className="font-bold text-2xl bg-gradient-to-t from-primary to-natural bg-clip-text text-transparent pb-1 px-1 whitespace-nowrap">
             Sprouting Tech
           </span>
        </Link>

        <div className="hidden md:flex items-center space-x-8 ml-auto mr-12">
          {navItems.map((item) => {
            const isActive = pathname === item.path;
            
            return (
              <Link
                key={item.name}
                href={item.path}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-natural",
                  isActive ? "text-natural" : "text-gray-500"
                )}
              >
                {item.name}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 text-sm select-none">
            <Globe className="w-4 h-4 text-primary" />
            <span 
              onClick={() => setCurrentLang('EN')}
              className={cn(
                "cursor-pointer transition-colors",
                currentLang === 'EN' ? "font-bold text-natural" : "text-gray-400 font-medium hover:text-gray-600"
              )}
            >
              EN
            </span>

            <span className="w-[1px] h-4 bg-gray-300 mx-1"></span>

            <span 
              onClick={() => setCurrentLang('TH')}
              className={cn(
                "cursor-pointer transition-colors",
                currentLang === 'TH' ? "font-bold text-natural" : "text-gray-400 font-medium hover:text-gray-600"
              )}
            >
              TH
            </span>
          </div>

          <Button label="Get Started" color="natural" size="md" variant="pill" />
        </div>

      </div>
    </nav>
  );
};