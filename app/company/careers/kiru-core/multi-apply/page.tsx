'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const roles = [
  { id: 'project-manager', title: 'Project Manager' },
  { id: 'social-media-manager', title: 'Social Media Manager' },
  { id: 'brand-ambassador', title: 'Brand Ambassador' },
]

export default function MultiApplyPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    selectedRoles: [] as string[],
    experience: '',
    skills: '',
    motivation: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const toggleRole = (roleId: string) => {
    setFormData(prev => ({
      ...prev,
      selectedRoles: prev.selectedRoles.includes(roleId)
        ? prev.selectedRoles.filter(r => r !== roleId)
        : [...prev.selectedRoles, roleId]
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (formData.selectedRoles.length === 0) {
      alert('Please select at least one role')
      return
    }
    console.log('Multi-Role Application:', formData)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <main className="min-h-screen bg-background flex items-center justify-center px-4">
        <div className="max-w-md w-full glass-card p-12 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">Thank You!</h1>
          <p className="text-lg text-foreground/70 mb-8">
            Your application for multiple roles has been received. Our HR team will review your qualifications and contact you soon.
          </p>
          <Button asChild size="lg" className="w-full" variant="default">
            <Link href="/">Back to Home</Link>
          </Button>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <section className="pt-12 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Link href="/company/careers/kiru-core" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-8">
            ← Back to Roles
          </Link>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">Apply for Multiple Roles</h1>
          <p className="text-lg sm:text-xl text-foreground/70">
            Tell us which positions interest you, and we'll match you with the best opportunity.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-2xl mx-auto">
          <form
            action="https://formsubmit.co/kirulabsofficial@gmail.com"
            method="POST"
            className="glass-card p-8 sm:p-12 space-y-6">
            {/* Full Name */}
            <div>
              <label className="block text-lg font-semibold mb-2">Full Name *</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-foreground placeholder-foreground/50 focus:outline-none focus:border-primary text-base sm:text-lg"
                placeholder="Your full name"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-lg font-semibold mb-2">Email Address *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-foreground placeholder-foreground/50 focus:outline-none focus:border-primary text-base sm:text-lg"
                placeholder="your.email@example.com"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-lg font-semibold mb-2">Phone Number *</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-foreground placeholder-foreground/50 focus:outline-none focus:border-primary text-base sm:text-lg"
                placeholder="+1 (555) 000-0000"
              />
            </div>

            {/* Role Selection */}
            <div>
              <label className="block text-lg font-semibold mb-4">Select Positions You're Interested In *</label>
              <div className="space-y-3">
                {roles.map(role => (
                  <label key={role.id} className="flex items-center gap-3 p-4 border border-white/20 rounded-lg cursor-pointer hover:border-primary/50 transition-colors">
                    <input
                      type="checkbox"
                      checked={formData.selectedRoles.includes(role.id)}
                      onChange={() => toggleRole(role.id)}
                      className="w-5 h-5 rounded border-white/30 cursor-pointer"
                    />
                    <span className="text-base sm:text-lg font-medium">{role.title}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Experience */}
            <div>
              <label className="block text-lg font-semibold mb-2">Years of Relevant Experience *</label>
              <select
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-foreground focus:outline-none focus:border-primary text-base sm:text-lg"
              >
                <option value="">Select experience level</option>
                <option value="0-2">0-2 years</option>
                <option value="2-5">2-5 years</option>
                <option value="5+">5+ years</option>
              </select>
            </div>

            {/* Skills */}
            <div>
              <label className="block text-lg font-semibold mb-2">Key Skills *</label>
              <textarea
                name="skills"
                value={formData.skills}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-foreground placeholder-foreground/50 focus:outline-none focus:border-primary text-base sm:text-lg min-h-32"
                placeholder="Tell us about your key skills and what makes you a great fit for these roles..."
              />
            </div>

            {/* Motivation */}
            <div>
              <label className="block text-lg font-semibold mb-2">Why Do You Want to Join Kiru Labs? *</label>
              <textarea
                name="motivation"
                value={formData.motivation}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-foreground placeholder-foreground/50 focus:outline-none focus:border-primary text-base sm:text-lg min-h-32"
                placeholder="Tell us about your interest in joining our team and these roles..."
              />
            </div>

            {/* Submit Button */}
            <Button type="submit" size="lg" className="w-full text-base sm:text-lg py-6">
              Submit Application
              <ArrowRight size={20} className="ml-2" />
            </Button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 glass-effect">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center text-sm text-foreground/60">
          <p>&copy; 2024 Kirulabs. All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}
