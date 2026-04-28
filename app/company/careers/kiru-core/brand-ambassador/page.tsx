'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function BrandAmbassadorPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    experience: '',
    skills: '',
    network: '',
    achievements: '',
    portfolio: '',
    motivation: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Brand Ambassador Application:', formData)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <main className="min-h-screen bg-background flex items-center justify-center px-4">
        <div className="max-w-md w-full glass-card p-12 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">Thank You!</h1>
          <p className="text-lg text-foreground/70 mb-8">
            Your application has been received. Our HR team will contact you soon.
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
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">Brand Ambassador</h1>
          <p className="text-lg sm:text-xl text-foreground/70">
            Apply for the Brand Ambassador position at Kiru Labs
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 pb-20">
  <div className="max-w-2xl mx-auto">
    <form
      action="https://formsubmit.co/kirulabsofficial@gmail.com"
      method="POST"
      className="glass-card p-8 sm:p-12 space-y-6"
    >
      {/* FormSubmit Hidden Fields */}
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_template" value="table" />

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

      {/* Years of Experience */}
      <div>
        <label className="block text-lg font-semibold mb-2">Years of Brand Representation Experience *</label>
        <select
          name="experience"
          value={formData.experience}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 tumtum border border-white/20 rounded-lg text-foreground focus:outline-none focus:border-primary text-base sm:text-lg"
        >
          <option value="">Select experience level</option>
          <option value="0-1">0-1 years</option>
          <option value="1-3">1-3 years</option>
          <option value="3-5">3-5 years</option>
          <option value="5+">5+ years</option>
        </select>
      </div>

      {/* Key Skills */}
      <div>
        <label className="block text-lg font-semibold mb-2">Key Skills & Strengths *</label>
        <textarea
          name="skills"
          value={formData.skills}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-foreground placeholder-foreground/50 focus:outline-none focus:border-primary text-base sm:text-lg min-h-32"
          placeholder="Tell us about your communication, networking, and relationship-building skills..."
        />
      </div>

      {/* Network & Reach */}
      <div>
        <label className="block text-lg font-semibold mb-2">Your Professional Network & Reach</label>
        <textarea
          name="network"
          value={formData.network}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-foreground placeholder-foreground/50 focus:outline-none focus:border-primary text-base sm:text-lg min-h-24"
          placeholder="Describe your professional connections and influencer reach..."
        />
      </div>

      {/* Key Achievements */}
      <div>
        <label className="block text-lg font-semibold mb-2">Key Achievements as a Brand Ambassador</label>
        <textarea
          name="achievements"
          value={formData.achievements}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-foreground placeholder-foreground/50 focus:outline-none focus:border-primary text-base sm:text-lg min-h-32"
          placeholder="Share past successes in building brand relationships or growing partnerships..."
        />
      </div>

      {/* Portfolio/References */}
      <div>
        <label className="block text-lg font-semibold mb-2">Portfolio or References</label>
        <input
          type="url"
          name="portfolio"
          value={formData.portfolio}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-foreground placeholder-foreground/50 focus:outline-none focus:border-primary text-base sm:text-lg"
          placeholder="Link to your portfolio or professional profiles"
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
          placeholder="Tell us about your interest in representing Kiru Labs..."
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
