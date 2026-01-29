'use client'

import React from 'react'
import Link from 'next/link'
import { Facebook, Twitter, Linkedin, MapPin, Mail, Phone } from 'lucide-react'
import Image from 'next/image'
import logoImg from '/public/brand/Logo.png'

export const Footer = () => {
  return (
    <footer className="bg-spt-neutral-1000 text-muted py-12">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div className="footer-brand">
            <h2 className="text-primary text-2xl font-bold mb-4 flex items-center pt-3 pb-3">
              <span className="mr-2">
                <Image
                  src={logoImg}
                  alt="Sprouting Tech Logo"
                  className="h-9 w-auto object-contain"
                  priority
                />
              </span>
              <span className="font-bold text-2xl bg-gradient-to-b from-spt-primary-400 to-spt-secondary-400 bg-clip-text text-transparent whitespace-nowrap font-prompt  ">
                Sprouting Tech
              </span>
            </h2>

            <p className="text-spt-neutral-500 text-sm mb-4 leading-relaxed ">
              Empowering businesses through intelligent automation and premier software development.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-spt-neutral-500 hover:text-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-spt-neutral-500 hover:text-primary transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-spt-neutral-500 hover:text-primary transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-spt-secondary-400 text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-spt-neutral-500 hover:text-primary text-sm transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-spt-neutral-500 hover:text-primary text-sm transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="text-spt-neutral-500 hover:text-primary text-sm transition-colors"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-spt-neutral-500 hover:text-primary text-sm transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-spt-neutral-500 hover:text-primary text-sm transition-colors"
                >
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-spt-secondary-400 text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-spt-neutral-500 hover:text-primary text-sm transition-colors"
                >
                  AI Automation
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-spt-neutral-500 hover:text-primary text-sm transition-colors"
                >
                  Web Development
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-spt-neutral-500 hover:text-primary text-sm transition-colors"
                >
                  Mobile Apps
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-spt-neutral-500 hover:text-primary text-sm transition-colors"
                >
                  Cloud Solutions
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-spt-neutral-500 hover:text-primary text-sm transition-colors"
                >
                  IT Consulting
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-spt-secondary-400 text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin className="text-spt-secondary-400 mr-3 mt-1 flex-shrink-0" size={16} />
                <span className="text-spt-neutral-500 text-sm">
                  123 Innovation Drive,
                  <br />
                  Tech Park, Bangkok 10110
                </span>
              </div>
              <div className="flex items-center">
                <Mail className="text-spt-secondary-400 mr-3 flex-shrink-0" size={16} />
                <span className="text-spt-neutral-500 text-sm">hello@sproutingtech.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="text-spt-secondary-400 mr-3 flex-shrink-0" size={16} />
                <span className="text-spt-neutral-500 text-sm">+66 2 123 4567</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t pt-6 flex flex-col md:flex-row justify-between items-center text-sm border-[#494949] text-[#494949]">
          <div>&copy; 2025 Sprouting Tech Co., Ltd. All rights reserved</div>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="#" className="text-spt-neutral-800  transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-spt-neutral-800  transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
