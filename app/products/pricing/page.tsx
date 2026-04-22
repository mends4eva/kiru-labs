'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed w-full top-0 z-50 glass-effect">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
          </div>
          <div className="flex items-center gap-6">
            <Link href="/" className="text-sm hover:text-primary smooth-all">Home</Link>
            <Link href="/ideas" className="text-sm hover:text-primary smooth-all">Ideas</Link>
            <Link href="/about" className="text-sm hover:text-primary smooth-all">About</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-28 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Link href="/" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-6">
            <ArrowLeft size={18} />
            Back to Home
          </Link>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">Pricing</h1>
          <p className="text-xl text-foreground/70">Simple and transparent pricing for all our solutions.</p>
        </div>
      </section>

      {/* Content Area */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="glass-card p-8 text-center">
            <p className="text-foreground/60 mb-6">Pricing information coming soon. Contact us for custom quotes.</p>
            <Button asChild>
              <Link href="/company/contact">Contact Sales</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 glass-effect mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center text-sm text-foreground/60">
          <p>&copy; 2024 Kirulabs. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
