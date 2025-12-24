'use client'

import React from 'react'
import { Button } from '@/components/commons/button'
import { Badge } from '@/components/commons/badge'
import { CodeIcon, Database, Cpu, Globe, CheckCircle } from 'lucide-react'

import './styles.css'

export default function HomePage() {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center gap-3">
        <h1>Test</h1>
        <b1>Test</b1>
        <b4>Test</b4>
      </div>
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
      <div className="flex items-center gap-3 justify-center flex-wrap ">
        <Badge icon={<CodeIcon/>} text="React / Next.js" />
        <Badge icon={<Database/>} text="PostgreSQL" />
        <Badge icon={<Cpu/>} text="Python AI" />
        <Badge icon={<Globe/>} text="Cloud Native" />
        <Badge icon={<CheckCircle/>} text="Tailwind CSS" />
        <Badge icon={<CodeIcon/>} text="TypeScript" />
      </div>
    </div>
  )
}
