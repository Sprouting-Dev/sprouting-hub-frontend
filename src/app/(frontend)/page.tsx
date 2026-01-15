'use client'

import React from 'react'
import { Badge } from '@/components/commons/badge'
import { FeatureCard } from '@/components/cards/featurecard'
import { ServiceCard } from '@/components/cards/servicecard'
import { TestimonialCard } from '@/components/cards/testimonialCard'
import { HorizonCard } from '@/components/cards/horizonCard'
import {
  CodeIcon,
  Database,
  Cpu,
  Globe,
  CheckCircle,
  Bot,
  Monitor,
} from 'lucide-react'

import './styles.css'

export default function HomePage() {
  return (
    <div className="flex flex-col gap-5">

      {/* Feature Card */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 p-10">
        <FeatureCard
          image="/Bot.png"
          title="Intelligent Automation"
          detail="Transform manual processes into 24/7 autonomous systems. We optimize workflows to free your team for high-value innovation."
        />
        <FeatureCard
          image="/Server.png"
          title="Scalable Architecture"
          detail="Secure, enterprise-grade solutions built on battle-tested stacks, designed to evolve seamlessly with your business."
        />
        <FeatureCard
          image="/TrendingUP.png"
          title="Rapid Delivery"
          detail="	Accelerate time-to-market with our agile frameworks, ensuring speed without compromising security or quality."
        />
        <FeatureCard
          image="/Sparkles.png"
          title="Strategic Partnership"
          detail="More than a vendor. We provide the strategic ecosystem and foresight needed to lead your industry."
        />
      </div>

      {/* Service Cards */}
      <div className="flex justify-center items-center p-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl w-full">
          <ServiceCard
            image="/images/AI & Workflow Automation.png"
            icon={<Bot />}
            title="AI & Workflow Automation"
            detail="Transform manual tasks into autonomous, 24/7 workflows. We orchestrate Make and n8n to connect your apps into one high-performance ecosystem."
          />
          <ServiceCard
            image="/images/Software Development.png"
            icon={<Monitor />}
            title="Software Development"
            detail="Build secure, scalable digital solutions tailored to your business. Our full-stack team engineers the robust technology backbone you need for long-term success."
          />
        </div>
      </div>

      {/* Horizon Cards */}
      <div className="flex justify-center items-center p-10 bg-spt-neutral-1000">
        <div className="flex flex-col gap-5 w-full items-center">
          <HorizonCard
            image="/images/sprouting_academy_thum.png"
            title="Sprouting Tech Academy"
            detail="Sprouting Tech Academy is a specialized professional learning institution dedicated to advancing expertise in AI and Workflow Automation. Our curriculum is designed around industry-leading platforms, including Make.com and n8n, equipping learners with the technical proficiency and strategic mindset required to lead in an increasingly automated digital economy."
            tag="Education"
            buttonTitle="Visit Academy"
          />
          <HorizonCard
            image="/images/wiivor_mockup_banner.png"
            title="Wiivor"
            detail="Wiivor is an intelligent, AI-driven web development ecosystem designed to bridge the gap between concept and execution. By articulating your requirements in natural language, our advanced generative AI engine accurately interprets your vision and delivers fully functional, production-ready websites—removing the traditional complexities of coding, design, and infrastructure management."
            tag="AI Generative Platform"
            buttonTitle="Explore Wiivor"
          />
        </div>
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
  )
}
