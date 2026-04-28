'use client'

import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Back Button */}
      <div className="pt-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Link href="/">
            <button className="text-lg font-semibold text-blue-500 hover:text-blue-600 transition-colors">
              ← Back to Home
            </button>
          </Link>
        </div>
      </div>

      {/* Banner Section */}
      <section className="pt-4 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex justify-center">
          <img 
            src="/careers-banner.png" 
            alt="Careers - Jobs for the Youth"
            className="h-56 sm:h-72 md:h-80 w-auto drop-shadow-xl"
            loading="lazy"
            decoding="async"
          />
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Description */}
          <div className="text-center mb-24">
            <p className="text-xl sm:text-2xl md:text-3xl text-foreground/80 max-w-4xl mx-auto leading-relaxed font-medium">
              Join Kiru Labs and grow your career with us. Explore opportunities as an intern, contractor, or core team member.
            </p>
          </div>

          {/* Career Cards Grid */}
          <div className="grid gap-10 md:grid-cols-3 max-w-7xl mx-auto">
            {/* Interns Card */}
            <div className="rounded-2xl p-12 flex flex-col bg-white/5 border border-white/10 hover:border-white/20 transition-all">
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-8">Interns</h2>
              <p className="text-xl sm:text-2xl text-foreground/75 leading-relaxed mb-12 flex-grow">
                Get hands-on experience and learn from industry experts in a supportive environment.
              </p>
              <div className="space-y-4">
                <button 
                  disabled 
                  className="w-full py-5 px-6 text-xl font-semibold rounded-xl bg-gray-500 text-white opacity-50 cursor-not-allowed"
                >
                  Coming Soon
                </button>
                <p className="text-lg text-foreground/60 text-center">
                  Check our socials for updates
                </p>
              </div>
            </div>

            {/* Contractors Card */}
            <div className="rounded-2xl p-12 flex flex-col bg-white/5 border border-white/10 hover:border-white/20 transition-all">
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-8">Contractors</h2>
              <p className="text-xl sm:text-2xl text-foreground/75 leading-relaxed mb-12 flex-grow">
                Part-time flexible opportunities to work on diverse and interesting projects.
              </p>
              <div className="space-y-4">
                <button 
                  disabled 
                  className="w-full py-5 px-6 text-xl font-semibold rounded-xl bg-gray-500 text-white opacity-50 cursor-not-allowed"
                >
                  Coming Soon
                </button>
                <p className="text-lg text-foreground/60 text-center">
                  Check our socials for updates
                </p>
              </div>
            </div>

            {/* Kiru Core Card - Highlighted */}
            <div className="rounded-2xl p-12 flex flex-col bg-blue-600/15 border-2 border-blue-500/50 hover:border-blue-500/70 transition-all">
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-8">Kiru Core</h2>
              <p className="text-xl sm:text-2xl text-foreground/75 leading-relaxed mb-12 flex-grow">
                Full-time positions with our core team. Build something amazing and make a lasting impact.
              </p>
              <Link href="/company/careers/kiru-core">
                <button className="w-full py-5 px-6 text-xl font-semibold rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition-colors">
                  View Open Roles
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 glass-effect mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center text-base text-foreground/60">
          <p>&copy; 2024 Kirulabs. All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}
