'use client'

import Image from 'next/image'
import React from 'react'

import { Button, Card, CardHeader, Chip } from '@heroui/react'
import './styles.css'

export default function HomePage() {
  return (
    <div className="page-gradient min-h-screen">
      <div className="relative mx-auto flex max-w-6xl flex-col px-6 py-12">
        <div className="sprout-shell relative overflow-hidden rounded-[32px] p-7 sm:p-9 lg:p-12">
          <header className="flex flex-wrap items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="brand-badge rounded-2xl p-3">
                <Image
                  alt="Payload Logo"
                  className="h-12 w-12"
                  height={48}
                  width={48}
                  src="https://raw.githubusercontent.com/payloadcms/payload/main/packages/ui/src/assets/payload-favicon.svg"
                />
              </div>

              <div>
                <p className="text-sm text-slate-600">Sprouting Hub</p>
                <p className="text-xl font-semibold text-slate-900">Rooted in your tokens</p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <span className="sprout-pill text-sm font-medium">data-theme="sprout"</span>
              <span className="sprout-tag text-sm font-medium">Custom root styles</span>
            </div>
          </header>

          <div className="sprout-divider my-8" />

          <div className="grid gap-8 lg:grid-cols-[1.6fr,1fr]">
            <div className="space-y-6">
              <Card className="sprout-card glass-panel border-none shadow-none">
                <CardHeader className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                  <div className="space-y-1">
                    <p className="text-xs uppercase tracking-[0.16em] text-slate-500">Dashboard</p>
                    <h1 className="text-3xl font-semibold text-slate-900 lg:text-4xl">
                      Welcome to your Sprouting Hub
                    </h1>
                  </div>
                  <Chip color="accent" variant="soft">
                    HeroUI + Tailwind
                  </Chip>
                </CardHeader>

                <Card.Content className="space-y-6">
                  <p className="text-base text-slate-600">
                    The layout below reads your custom root colors and applies them across glass
                    panels, badges, and gradients—no extra config needed.
                  </p>

                  <div className="flex flex-wrap gap-3">
                    <Button>Primary CTA</Button>
                    <Button variant="secondary">Secondary</Button>
                    <Button variant="ghost">Ghost</Button>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <div className="sprout-metric">
                      <span className="h-2 w-2 rounded-full bg-primary)" />
                      <span className="text-sm font-semibold">Primary token</span>
                    </div>
                    <div className="sprout-metric bg-[color-mix(in_oklch,var(--secondary),white_82%)] text-slate-800">
                      <span className="h-2 w-2 rounded-full bg-secondary" />
                      <span className="text-sm font-semibold">Secondary tone</span>
                    </div>
                    <div className="sprout-metric bg-[color-mix(in_oklch,var(--accent),white_82%)] text-slate-800">
                      <span className="h-2 w-2 rounded-full bg-accent)]" />
                      <span className="text-sm font-semibold">Accent glow</span>
                    </div>
                  </div>
                </Card.Content>
              </Card>

              <Card className="sprout-card glass-panel border-none shadow-none">
                <CardHeader className="flex flex-col gap-2">
                  <h3 className="text-lg font-semibold text-slate-900">Design system handoff</h3>
                  <p className="text-sm text-slate-600">
                    Everything uses your root palette—swap values in <code>styles.css</code> to
                    reskin.
                  </p>
                </CardHeader>

                <Card.Content className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Chip color="default" size="sm" variant="tertiary">
                      Utility-first
                    </Chip>
                    <div className="space-y-1">
                      <p className="font-semibold text-slate-900">Tailwind helpers</p>
                      <p className="text-sm text-slate-600">
                        Mix arbitrary values like <code>bg-[var(--primary)]</code> directly in JSX.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Chip color="success" size="sm" variant="primary">
                      Tokens
                    </Chip>
                    <div className="space-y-1">
                      <p className="font-semibold text-slate-900">CSS variables</p>
                      <p className="text-sm text-slate-600">
                        Primary, secondary, accent, and surfaces flow through the cards and badges.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Chip color="warning" size="sm" variant="tertiary">
                      Iterate
                    </Chip>
                    <div className="space-y-1">
                      <p className="font-semibold text-slate-900">Keep iterating</p>
                      <p className="text-sm text-slate-600">
                        Edit{' '}
                        <code className="rounded bg-white/60 px-1 py-0.5">
                          app/(frontend)/styles.css
                        </code>{' '}
                        to change the whole mood.
                      </p>
                    </div>
                  </div>
                </Card.Content>
              </Card>
            </div>

            <Card className="sprout-card glass-panel border-none shadow-none">
              <CardHeader className="flex flex-col gap-1">
                <h3 className="text-lg font-semibold text-slate-900">Styling checks</h3>
                <p className="text-sm text-slate-600">A quick status board.</p>
              </CardHeader>

              <Card.Content className="space-y-4">
                <div className="grid gap-3 sm:grid-cols-2">
                  <Card className="sprout-card border-none shadow-none">
                    <Card.Content className="gap-1 px-4 py-3">
                      <p className="font-semibold text-emerald-700">Tailwind</p>
                      <p className="text-sm text-emerald-700/80">Utilities are active.</p>
                    </Card.Content>
                  </Card>

                  <Card className="sprout-card border-none shadow-none">
                    <Card.Content className="gap-1 px-4 py-3">
                      <p className="font-semibold text-indigo-700">HeroUI</p>
                      <p className="text-sm text-indigo-700/80">Components render.</p>
                    </Card.Content>
                  </Card>
                </div>

                <div className="space-y-2">
                  <p className="text-sm font-semibold text-slate-900">Theme trace</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="sprout-tag text-xs font-medium">--primary</span>
                    <span className="sprout-tag text-xs font-medium">--secondary</span>
                    <span className="sprout-tag text-xs font-medium">--accent</span>
                    <span className="sprout-tag text-xs font-medium">--surface</span>
                  </div>
                </div>

                <Button size="sm" variant="ghost" onPress={() => alert('Hello from HeroUI!')}>
                  Test interaction
                </Button>
              </Card.Content>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
