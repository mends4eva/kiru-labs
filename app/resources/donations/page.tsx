'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Heart, Users, Globe, TrendingUp } from 'lucide-react'

export default function DonationsPage() {
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

      {/* Hero Section */}
      <section className="pt-12 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-center mb-8">
            <Heart size={64} className="text-red-500" />
          </div>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6">Support Our Mission</h1>
          <p className="text-2xl sm:text-3xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
            Your donation helps us drive innovation and create solutions that transform lives across Africa.
          </p>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-12 text-center">Why Support KiruLabs?</h2>
          
          <div className="grid md:grid-cols-2 gap-10">
            <div className="rounded-2xl p-10 bg-white/5 border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <Globe size={40} className="text-blue-500" />
                <h3 className="text-2xl sm:text-3xl font-bold text-white">Global Impact</h3>
              </div>
              <p className="text-lg sm:text-xl text-foreground/75 leading-relaxed">
                We develop technology solutions that address real-world challenges in software development, hardware engineering, and humanitarian applications across Africa and beyond.
              </p>
            </div>

            <div className="rounded-2xl p-10 bg-white/5 border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <Users size={40} className="text-green-500" />
                <h3 className="text-2xl sm:text-3xl font-bold text-white">Community Growth</h3>
              </div>
              <p className="text-lg sm:text-xl text-foreground/75 leading-relaxed">
                Your support enables us to invest in talent, foster innovation, and create opportunities for young professionals and enterprises in our communities.
              </p>
            </div>

            <div className="rounded-2xl p-10 bg-white/5 border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <TrendingUp size={40} className="text-purple-500" />
                <h3 className="text-2xl sm:text-3xl font-bold text-white">Innovation & R&D</h3>
              </div>
              <p className="text-lg sm:text-xl text-foreground/75 leading-relaxed">
                Donations fuel our research and development in cutting-edge technologies including biosystems, AgriTech, and sustainable solutions for the future.
              </p>
            </div>

            <div className="rounded-2xl p-10 bg-white/5 border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <Heart size={40} className="text-red-500" />
                <h3 className="text-2xl sm:text-3xl font-bold text-white">Social Responsibility</h3>
              </div>
              <p className="text-lg sm:text-xl text-foreground/75 leading-relaxed">
                We are committed to using technology as a force for good, supporting humanitarian initiatives and creating positive social impact across our region.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Info Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-2xl p-12 bg-blue-600/15 border-2 border-blue-500/50">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-8">Ready to Make a Difference?</h2>
            <p className="text-xl sm:text-2xl text-foreground/80 mb-8 leading-relaxed">
              Whether you&apos;re an individual, organization, or enterprise, your contribution matters. Contact us to discuss donation options, sponsorship opportunities, and partnership possibilities.
            </p>
            <Link href="/company/contact">
              <button className="px-8 py-5 text-xl font-semibold rounded-xl bg-red-600 text-white hover:bg-red-700 transition-colors">
                Discuss Donations
              </button>
            </Link>
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
