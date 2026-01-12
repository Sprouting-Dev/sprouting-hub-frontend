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
             className="w-19.25 h-8 object-contain"
             priority
           />
           <span className="font-bold text-2xl bg-gradient-to-t from-primary to-natural bg-clip-text text-transparent pb-1 px-1 whitespace-nowrap">
             Sprouting Tech
           </span>
        </Link>

        <div className="hidden md:flex items-center space-x-8 ml-auto mr-8">
          {navItems.map((item) => {
            const isActive = pathname === item.path;
            
            return (
              <Link
                key={item.name}
                href={item.path}
                className={cn(
                  "text-base font-normal transition-colors hover:text-natural",
                  isActive ? "text-natural" : "text-neutral-500"
                )}
              >
                {item.name}
              </Link>
            );
          })}
        </div>

        <div className="hidden md:block w-[2px] h-6 bg-neutral-200 mr-8"></div>

        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 text-sm font-semibold leading-5 select-none">
            <Globe className="w-4 h-4 text-primary" />
            <span 
              onClick={() => setCurrentLang('EN')}
              className={cn(
                "cursor-pointer transition-colors",
                currentLang === 'EN' ? "text-natural" : "text-neutral-500 hover:text-natural"
              )}
            >
              EN
            </span>

            <span className="w-[2px] h-6 bg-neutral-200 mx-1"></span>

            <span 
              onClick={() => setCurrentLang('TH')}
              className={cn(
                "cursor-pointer transition-colors",
                currentLang === 'TH' ? "text-natural" : "text-neutral-500 hover:text-natural"
              )}
            >
              TH
            </span>
          </div>

          <Button className="h-10" label="Get Started" color="natural" size="md" variant="pill" />
        </div>

      </div>
    </nav>
  );
};