'use client'

import React from 'react'
import { Button } from '@/components/commons/button'
import { Badge } from '@/components/commons/badge'
import { Feature } from '@/components/cards/feature'
import { Card } from '@/components/cards/card'
import { TestimonialCard } from '@/components/cards/testimonialCard'
import { Navbar } from '@/components/layout'
import {
  CodeIcon,
  Database,
  Cpu,
  Globe,
  CheckCircle,
  Bot,
  Sparkles,
  TrendingUp,
  Clock,
  Monitor,
} from 'lucide-react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import './styles.css'

export default function HomePage() {
  return (
    <div className="flex flex-col gap-5">
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Navbar />

          <Routes>
            <Route path="/" />
            <Route path="/services" />
            <Route path="/products" />
            <Route path="/about" />
            <Route path="/contact" />
          </Routes>

          {/* Button */}
          <div className="flex items-center gap-3 p-2">
            <Button label="Button" color="natural" size="sm" variant="pill" />
            <Button label="Button" color="primary" size="md" variant="pill" />
            <Button label="Button" color="secondary" size="lg" variant="pill" />
            <Button label="Button" color="accent" size="xl" variant="pill" />
          </div>
          <div className="flex items-center gap-3 p-2">
            <Button label="Button" color="accent" size="sm" variant="rounded" />
            <Button label="Button" color="secondary" size="md" variant="rounded" />
            <Button label="Button" color="primary" size="lg" variant="rounded" />
            <Button label="Button" color="natural" size="xl" variant="rounded" />
          </div>

          {/* Badge */}
          <div className="flex items-center gap-3 justify-center flex-wrap p-5">
            <Badge icon={<CodeIcon />} text="React / Next.js" />
            <Badge icon={<Database />} text="PostgreSQL" />
            <Badge icon={<Cpu />} text="Python AI" />
            <Badge icon={<Globe />} text="Cloud Native" />
            <Badge icon={<CheckCircle />} text="Tailwind CSS" />
            <Badge icon={<CodeIcon />} text="TypeScript" />
          </div>

          {/* Feature */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 p-10">
            <Feature
              icon={<Bot />}
              title="AI Automation Mastery"
              detail="Leveraging cutting-edge AI to streamline operations and unlock new efficiencies."
            />
            <Feature
              icon={<Sparkles />}
              title="Expert Full-Stack Team"
              detail="End-to-end development capabilities, ensuring seamless integration across all platforms."
            />
            <Feature
              icon={<TrendingUp />}
              title="Rapid Delivery"
              detail="Agile workflows optimized for speed, accelerating your time-to-market without compromising quality."
            />
            <Feature
              icon={<Clock />}
              title="Tailored Innovation"
              detail="Custom solutions engineered specifically to solve your unique business challenges."
            />
          </div>

          {/* Cards */}
          <div className="flex justify-center items-center p-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl w-full">
              <Card
                image="https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=2000&auto=format&fit=crop"
                icon={<Bot />}
                title="AI Automation"
                detail="Streamline your operations with intelligent bots and workflow automation. We build custom AI solutions that reduce manual tasks and optimize business processes."
              />
              <Card
                image="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2000&auto=format&fit=crop"
                icon={<Monitor />}
                title="Software Development"
                detail="From web applications to complex enterprise systems, our full-stack team delivers robust, scalable, and high-performance software tailored to your needs."
              />
            </div>
          </div>

          {/* Testimonial Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pr-10 pl-10 pb-10">
            <TestimonialCard
              avatar="NS"
              title="Natthakit Saetan"
              subtitle="General Manager"
              detail="เนื้อหาออกแบบมาให้ใช้งานได้ง่าย สามารถนำไปใช้จริงได้ง่าย สามารถนำไปใช้จริงอย่างได้ Workflow อัตโนมัติได้จริง ๆ"
            />
            <TestimonialCard
              avatar="NS"
              title="Natthakit Saetan"
              subtitle="General Manager"
              detail="เนื้อหาออกแบบมาให้ใช้งานได้ง่าย สามารถนำไปใช้จริงได้ง่าย สามารถนำไปใช้จริงอย่างได้ Workflow อัตโนมัติได้จริง ๆ"
            />
            <TestimonialCard
              avatar="NS"
              title="Natthakit Saetan"
              subtitle="General Manager"
              detail="เนื้อหาออกแบบมาให้ใช้งานได้ง่าย สามารถนำไปใช้จริงได้ง่าย สามารถนำไปใช้จริงอย่างได้ Workflow อัตโนมัติได้จริง ๆ"
            />
          </div>
        </div>
      </Router>
    </div>
  )
}
