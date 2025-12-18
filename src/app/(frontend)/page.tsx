'use client'

import React from 'react'
import { Button } from '@/components/commons/button'

import './styles.css'

export default function HomePage() {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center gap-3">
        <Button label="Button" color="natural" size="sm" variant="pill" />
        <Button label="Button" color="primary" size="md" variant="pill" />
        <Button label="Button" color="secondary" size="lg" variant="pill" />
        <Button label="Button" color="accent" size="xl" variant="pill" />
      </div>
      <div className="flex items-center gap-3">
        <Button label="Button" color="accent" size="sm" variant="rounded" />
        <Button label="Button" color="secondary" size="md" variant="rounded" />
        <Button label="Button" color="primary" size="lg" variant="rounded" />
        <Button label="Button" color="natural" size="xl" variant="rounded" />
      </div>
    </div>
  )
}
