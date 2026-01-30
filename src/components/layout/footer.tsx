'use client'

import React from 'react'
import Link from 'next/link'
import { Facebook, Twitter, Linkedin, MapPin, Mail, Phone } from 'lucide-react'
import Image from 'next/image'
import logoImg from '/public/brand/Logo.png'
import { useTranslations } from 'next-intl'

interface FooterLink {
  label: string
  href: string
}

interface FooterSection {
  title: string
  links: FooterLink[]
}

export const Footer = () => {
  const t = useTranslations('Footer')

  const quickLinks: FooterLink[] = [
    { label: t('footer.quickLinks.home'), href: '/' },
    { label: t('footer.quickLinks.services'), href: '/services' },
    { label: t('footer.quickLinks.products'), href: '/products' },
    { label: t('footer.quickLinks.about'), href: '/about' },
    { label: t('footer.quickLinks.careers'), href: '/careers' },
  ]

  const services: FooterLink[] = [
    { label: t('footer.services.aiAutomation'), href: '/' },
    { label: t('footer.services.webDevelopment'), href: '/' },
    { label: t('footer.services.mobileApps'), href: '/' },
    { label: t('footer.services.cloudSolutions'), href: '/' },
    { label: t('footer.services.itConsulting'), href: '/' },
  ]

  const contactInfo = {
    address: t('footer.contact.address'),
    email: t('footer.contact.email'),
    phone: t('footer.contact.phone'),
  }

  const legalLinks: FooterLink[] = [
    { label: t('footer.legal.privacyPolicy'), href: '/' },
    { label: t('footer.legal.termsOfService'), href: '/' },
  ]

  const renderLinkSection = ({ title, links }: FooterSection) => (
    <div>
      <h3 className="text-spt-secondary-400 text-lg font-semibold mb-4">{title}</h3>
      <ul className="space-y-2">
        {links.map((link) => (
          <li key={link.label}>
            <Link href={link.href} className="text-hover">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )

  return (
    <footer className="bg-spt-neutral-1000 text-muted py-12">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="footer-brand">
            <h2 className="spt-text-primary text-2xl font-bold mb-4 flex items-center pt-3 pb-3">
              <span className="mr-2">
                <Image
                  src={logoImg}
                  alt="Sprouting Tech Logo"
                  className="h-9 w-auto object-contain"
                  priority
                />
              </span>
              <span className="font-bold text-2xl bg-gradient-to-b from-spt-primary-400 to-spt-secondary-400 bg-clip-text text-transparent whitespace-nowrap font-prompt">
                Sprouting Tech
              </span>
            </h2>

            <p className="text-spt-neutral-500 text-sm mb-4 leading-relaxed">
              {t('footer.brand.tagline')}
            </p>
            <div className="flex gap-4">
              <Link href="/" className="text-spt-neutral-500  transition-colors">
                <Facebook size={20} />
              </Link>
              <Link href="/" className="text-spt-neutral-500  transition-colors">
                <Twitter size={20} />
              </Link>
              <Link href="/" className="text-spt-neutral-500  transition-colors">
                <Linkedin size={20} />
              </Link>
            </div>
          </div>

          {/* Quick Links Section */}
          {renderLinkSection({
            title: t('footer.quickLinks.title'),
            links: quickLinks,
          })}

          {/* Services Section */}
          {renderLinkSection({
            title: t('footer.services.title'),
            links: services,
          })}

          {/* Contact Section */}
          <div>
            <h3 className="text-spt-secondary-400 text-lg font-semibold mb-4">
              {t('footer.contact.title')}
            </h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin className="text-spt-secondary-400 mr-3 mt-1 flex-shrink-0" size={16} />
                <span className="text-spt-neutral-500 text-sm">{contactInfo.address}</span>
              </div>
              <div className="flex items-center">
                <Mail className="text-spt-secondary-400 mr-3 flex-shrink-0" size={16} />
                <a href={`mailto:${contactInfo.email}`} className="text-hover">
                  {contactInfo.email}
                </a>
              </div>
              <div className="flex items-center">
                <Phone className="text-spt-secondary-400 mr-3 flex-shrink-0" size={16} />
                <a href={`tel:${contactInfo.phone}`} className="text-hover">
                  {contactInfo.phone}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Legal Section */}
        <div className="border-t pt-6 flex flex-col md:flex-row justify-between items-center text-sm border-spt-neutral-900 text-spt-neutral-900">
          <div>{t('footer.legal.copyright')}</div>
          <div className="flex gap-6 mt-4 md:mt-0">
            {legalLinks.map((link) => (
              <Link key={link.label} href={link.href} className="text-hover">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
