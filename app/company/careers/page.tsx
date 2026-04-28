'use client'

import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-12 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center justify-center space-y-8 min-h-[60vh]">
            {/* Hero Image */}
            <img 
              src="/careers-hero.png" 
              alt="Careers - Jobs for the Youth"
              className="h-64 sm:h-80 md:h-96 w-auto mx-auto drop-shadow-lg"
              loading="lazy"
              decoding="async"
            />

            {/* Description */}
            <p className="text-base sm:text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto text-center leading-relaxed">
              Join Kiru Labs and grow your career with us. Explore opportunities as an intern, contractor, or core team member.
            </p>

            {/* Career Categories */}
            <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl mt-12">
              {/* Interns */}
              <div className="glass-card p-8 text-center flex flex-col h-full">
                <h3 className="text-2xl font-bold text-foreground mb-4">Interns</h3>
                <p className="text-gray-500 text-lg leading-relaxed mb-6 flex-grow">
                  Get hands-on experience and learn from industry experts.
                </p>
                <Button disabled className="w-full" variant="default">
                  Not Yet Opened
                </Button>
                <p className="text-sm text-foreground/60 mt-3">
                  Follow us on socials for updates
                </p>
              </div>

              {/* Contractors */}
              <div className="glass-card p-8 text-center flex flex-col h-full">
                <h3 className="text-2xl font-bold text-foreground mb-4">Contractors</h3>
                <p className="text-gray-500 text-lg leading-relaxed mb-6 flex-grow">
                  Part-time flexible opportunities to work with us.
                </p>
                <Button disabled className="w-full" variant="default">
                  Not Yet Opened
                </Button>
                <p className="text-sm text-foreground/60 mt-3">
                  Follow us on socials for updates
                </p>
              </div>

              {/* Kiru Core */}
              <div className="glass-card p-8 text-center flex flex-col h-full">
                <h3 className="text-2xl font-bold text-foreground mb-4">Kiru Core</h3>
                <p className="text-gray-500 text-lg leading-relaxed mb-6 flex-grow">
                  Full-time positions with our core team.
                </p>
                <Button asChild className="w-full" variant="default">
                  <Link href="/company/careers/kiru-core">
                    Explore Positions
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 glass-effect mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center text-sm text-foreground/60">
          <p>&copy; 2024 Kirulabs. All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}
