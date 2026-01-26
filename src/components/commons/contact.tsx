'use client'

import React, { useState } from 'react'
<<<<<<< HEAD
import { useTranslations } from 'next-intl'
import { Button } from '@/components/commons/'
=======
import { Button } from '@/components/commons/button'
>>>>>>> 868581a (feat: create contact component)
import { cn } from '../../util/cn'

export interface ContactData {
  name: string
  company: string
  email: string
  message: string
}

interface ContactProps {
<<<<<<< HEAD
=======
  placeholders: {
    name: string
    company: string
    email: string
    message: string
  }
  errorMessages: {
    nameRequired: string
    emailRequired: string
    emailInvalid: string
    messageRequired: string
  }
  buttonText: {
    submit: string
    submitting: string
  }
>>>>>>> 868581a (feat: create contact component)
  onSubmit: (data: ContactData) => Promise<void>
}

interface FormErrors {
  name?: string
  email?: string
  message?: string
}

<<<<<<< HEAD
export const Contact: React.FC<ContactProps> = ({ onSubmit }) => {
  const t = useTranslations('Contact')

=======
export const Contact: React.FC<ContactProps> = ({
  placeholders,
  errorMessages,
  buttonText,
  onSubmit,
}) => {
>>>>>>> 868581a (feat: create contact component)
  const [formData, setFormData] = useState<ContactData>({
    name: '',
    company: '',
    email: '',
    message: '',
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const validate = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.name.trim()) newErrors.name = t('contact.namerequire')

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!formData.email.trim()) {
      newErrors.email = t('contact.emailrequire')
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = t('contact.emailinvalid')
    }

    if (!formData.message.trim()) newErrors.message = t('contact.messagerequire')

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    if (validate()) {
      try {
        await onSubmit(formData)
        setFormData({ name: '', company: '', email: '', message: '' })
      } catch (error) {
        console.error('Submit error:', error)
      }
    }
    setIsSubmitting(false)
  }

  return (
    <div className="w-full max-w-7xl mx-auto bg-white border rounded-3xl p-6">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <input
            type="text"
            name="name"
            placeholder={t('contact.name')}
            value={formData.name}
            onChange={handleChange}
            className={cn(
              'w-full px-6 py-3 rounded-full border text-base text-spt-neutral-1000 outline-none transition-all placeholder:text-black/50',
              errors.name ? 'border-red-500' : 'focus:border-spt-primary-400',
            )}
          />
          {errors.name && <span className="text-red-500 text-sm ml-4">{errors.name}</span>}
        </div>

        <div className="flex flex-col gap-1">
          <input
            type="text"
            name="company"
            placeholder={t('contact.company')}
            value={formData.company}
            onChange={handleChange}
            className="w-full px-6 py-3 rounded-full border text-base text-spt-neutral-1000 outline-none transition-all placeholder:text-black/50 focus:border-spt-primary-400"
          />
        </div>

        <div className="flex flex-col gap-1">
          <input
            type="email"
            name="email"
            placeholder={t('contact.email')}
            value={formData.email}
            onChange={handleChange}
            className={cn(
              'w-full px-6 py-3 rounded-full border text-base text-spt-neutral-1000 outline-none transition-all placeholder:text-black/50',
              errors.email ? 'border-red-500' : 'focus:border-spt-primary-400',
            )}
          />
          {errors.email && <span className="text-red-500 text-sm ml-4">{errors.email}</span>}
        </div>

        <div className="flex flex-col gap-1">
          <textarea
            name="message"
            placeholder={t('contact.message')}
            rows={3}
            value={formData.message}
            onChange={handleChange}
            className={cn(
              'w-full px-6 py-3 rounded-3xl border text-base text-spt-neutral-1000 outline-none transition-all resize-none placeholder:text-black/50',
              errors.message ? 'border-red-500 ' : 'focus:border-spt-primary-400',
            )}
          />
          {errors.message && <span className="text-red-500 text-sm ml-4">{errors.message}</span>}
        </div>

        <Button
          type="submit"
          label={isSubmitting ? t('contact.submitting') : t('contact.submit')}
          className="text-base hover:scale-101 active:scale-100"
          color="primary"
          size="lg"
          variant="pill"
          isDisabled={isSubmitting}
        />
      </form>
    </div>
  )
}
