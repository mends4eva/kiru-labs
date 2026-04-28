'use client'

import Link from 'next/link'
import { Heart, HelpCircle } from 'lucide-react'

export default function SupportPage() {
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
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6">Support & Resources</h1>
          <p className="text-2xl sm:text-3xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
            We&apos;re here to help. Get support and discover ways to contribute to our mission.
          </p>
        </div>
      </section>

      {/* Support Options */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-10">
            {/* Support Card */}
            <div className="rounded-2xl p-12 bg-white/5 border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <HelpCircle size={48} className="text-blue-500" />
                <h2 className="text-3xl sm:text-4xl font-bold text-white">Support Center</h2>
              </div>
              <p className="text-lg sm:text-xl text-foreground/75 leading-relaxed mb-8">
                Our comprehensive support resources are being prepared. Contact us for assistance with technical issues, account management, or service inquiries.
              </p>
              <Link href="/company/contact">
                <button className="px-8 py-5 text-lg font-semibold rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition-colors w-full">
                  Contact Support
                </button>
              </Link>
            </div>

            {/* Donations Card */}
            <div className="rounded-2xl p-12 bg-white/5 border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <Heart size={48} className="text-red-500" />
                <h2 className="text-3xl sm:text-4xl font-bold text-white">Donations</h2>
              </div>
              <p className="text-lg sm:text-xl text-foreground/75 leading-relaxed mb-8">
                Support our mission to drive innovation and create solutions that transform lives. Your donation helps us build the future.
              </p>
              <Link href="/resources/donations">
                <button className="px-8 py-5 text-lg font-semibold rounded-xl bg-red-600 text-white hover:bg-red-700 transition-colors w-full">
                  Learn About Donations
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
