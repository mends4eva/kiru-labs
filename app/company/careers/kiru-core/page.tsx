'use client'

import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const roles = [
  {
    id: 'project-manager',
    title: 'Project Manager',
    description: 'Lead and manage projects from conception to delivery. Coordinate teams and ensure timely project completion.',
    department: 'Management',
  },
  {
    id: 'social-media-manager',
    title: 'Social Media Manager',
    description: 'Create and manage engaging content across social platforms. Build and grow our online community.',
    department: 'Marketing',
  },
  {
    id: 'brand-ambassador',
    title: 'Brand Ambassador',
    description: 'Represent Kiru Labs and promote our brand values. Build relationships with clients and partners.',
    department: 'Business Development',
  },
]

export default function KiruCorePage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-12 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Link href="/company/careers" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-8">
            ← Back to Careers
          </Link>
          
          <div className="text-center space-y-4 mb-12">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">Kiru Core</h1>
            <p className="text-lg sm:text-xl md:text-2xl text-foreground/70">
              Full-time opportunities to build your career with us
            </p>
          </div>
        </div>
      </section>

      {/* Roles Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {roles.map((role) => (
              <div key={role.id} className="glass-card p-8 flex flex-col h-full hover:border-primary/50 transition-all duration-300">
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 rounded-full bg-primary/20 text-primary text-sm font-medium">
                    {role.department}
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold mb-3 text-foreground">{role.title}</h3>
                <p className="text-gray-500 text-lg leading-relaxed mb-8 flex-grow">{role.description}</p>
                
                <Button asChild className="w-full" variant="default">
                  <Link href={`/company/careers/kiru-core/${role.id}`} className="gap-2">
                    View & Apply
                    <ArrowRight size={18} />
                  </Link>
                </Button>
              </div>
            ))}
          </div>

          {/* Apply for Multiple */}
          <div className="mt-16 glass-card p-12 text-center">
            <h3 className="text-2xl font-bold mb-4">Interested in Multiple Roles?</h3>
            <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
              You can apply for multiple positions. Select the roles that match your skills during the application process.
            </p>
            <Button asChild size="lg" variant="default">
              <Link href="/company/careers/kiru-core/multi-apply" className="gap-2">
                Apply for Multiple Roles
                <ArrowRight size={20} />
              </Link>
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
    </main>
  )
}
