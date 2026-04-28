'use client'

import Link from 'next/link'

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
      {/* Back Button */}
      <div className="pt-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Link href="/company/careers">
            <button className="text-lg font-semibold text-blue-500 hover:text-blue-600 transition-colors">
              ← Back to Careers
            </button>
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="pt-8 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6">Kiru Core</h1>
          <p className="text-2xl sm:text-3xl md:text-4xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
            Full-time opportunities to build your career with us
          </p>
        </div>
      </section>

      {/* Roles Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid gap-10 md:grid-cols-3">
            {roles.map((role) => (
              <div 
                key={role.id} 
                className="rounded-2xl p-12 flex flex-col h-full bg-white/5 border border-white/10 hover:border-white/20 transition-all"
              >
                <div className="mb-6">
                  <span className="inline-block px-5 py-2 rounded-full bg-blue-600/20 text-blue-300 text-lg font-medium border border-blue-500/30">
                    {role.department}
                  </span>
                </div>
                
                <h3 className="text-3xl sm:text-4xl font-bold mb-6 text-white">{role.title}</h3>
                <p className="text-xl sm:text-2xl text-foreground/75 leading-relaxed mb-10 flex-grow">{role.description}</p>
                
                <Link href={`/company/careers/kiru-core/${role.id}`}>
                  <button className="w-full py-5 px-6 text-xl font-semibold rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition-colors">
                    Apply Now
                  </button>
                </Link>
              </div>
            ))}
          </div>

          {/* Apply for Multiple */}
          <div className="mt-20 rounded-2xl p-14 bg-white/5 border border-white/10 text-center">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">Interested in Multiple Roles?</h2>
            <p className="text-2xl sm:text-3xl text-foreground/80 mb-10 max-w-3xl mx-auto leading-relaxed">
              You can apply for multiple positions. Select the roles that match your skills during the application process.
            </p>
            <Link href="/company/careers/kiru-core/multi-apply">
              <button className="px-8 py-5 text-2xl font-semibold rounded-xl bg-green-600 text-white hover:bg-green-700 transition-colors">
                Apply for Multiple Roles
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
