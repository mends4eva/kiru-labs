'use client'

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Logo } from '@/components/logo'
import Link from 'next/link'
import { ArrowRight, Mail, Phone, Building2 } from 'lucide-react'

export default function GetStartedPage() {
  const searchParams = useSearchParams()
  const preSelectedIdea = searchParams.get('idea') || ''

  const [formData, setFormData] = useState({
    companyName: '',
    contactPerson: '',
    email: '',
    phone: '',
    service: preSelectedIdea,
    description: '',
  })

  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (preSelectedIdea) {
      setFormData(prev => ({
        ...prev,
        service: preSelectedIdea
      }))
    }
  }, [preSelectedIdea])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData)
      setSubmitted(true)
      setLoading(false)
    }, 1000)
  }

  const serviceOptions = [
    'IT & Software Solutions',
    'Digital Creativity',
    'Internet Services',
    'Videography & Media',
    'AI Automation',
    'Cloud Infrastructure',
    'Data Analytics',
    'Security Solutions',
    'Mobile Development',
    'Web Development',
    'Other'
  ]

  return (
    <div className="min-h-screen bg-black">
      {/* Navigation */}
      <nav className="fixed w-full top-0 z-50 glass-effect border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/">
            <Logo className="h-10 w-auto cursor-pointer hover:opacity-80 transition-opacity" />
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/">
              <Button variant="glass" size="sm">Back</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Content */}
      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute top-20 right-10 w-48 sm:w-72 h-48 sm:h-72 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-20 left-10 w-64 sm:w-96 h-64 sm:h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-2xl mx-auto relative z-10">
          {!submitted ? (
            <>
              <div className="text-center mb-12">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Start Your Journey</h1>
                <p className="text-sm sm:text-base md:text-lg text-foreground/70">
                  Tell us about your company and what you&apos;re looking to achieve. We&apos;ll get back to you within 24 hours.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="glass-card space-y-6 p-6 sm:p-8">
                {/* Company Name */}
                <div>
                  <label htmlFor="companyName" className="block text-sm font-medium mb-2 text-foreground">
                    <Building2 className="inline mr-2" size={16} />
                    Company Name *
                  </label>
                  <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-foreground placeholder-foreground/50 focus:border-primary focus:outline-none smooth-all focus:bg-white/15 text-sm sm:text-base"
                    placeholder="Your company name"
                  />
                </div>

                {/* Contact Person */}
                <div>
                  <label htmlFor="contactPerson" className="block text-sm font-medium mb-2 text-foreground">
                    Contact Person *
                  </label>
                  <input
                    type="text"
                    id="contactPerson"
                    name="contactPerson"
                    value={formData.contactPerson}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-foreground placeholder-foreground/50 focus:border-primary focus:outline-none smooth-all focus:bg-white/15 text-sm sm:text-base"
                    placeholder="Your name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2 text-foreground">
                    <Mail className="inline mr-2" size={16} />
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-foreground placeholder-foreground/50 focus:border-primary focus:outline-none smooth-all focus:bg-white/15 text-sm sm:text-base"
                    placeholder="your.email@company.com"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2 text-foreground">
                    <Phone className="inline mr-2" size={16} />
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-foreground placeholder-foreground/50 focus:border-primary focus:outline-none smooth-all focus:bg-white/15 text-sm sm:text-base"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>

                {/* Service Selection */}
                <div>
                  <label htmlFor="service" className="block text-sm font-medium mb-2 text-foreground">
                    What service are you interested in? *
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-foreground focus:border-primary focus:outline-none smooth-all focus:bg-white/15 text-sm sm:text-base"
                  >
                    <option value="">Select a service...</option>
                    {serviceOptions.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Description */}
                <div>
                  <label htmlFor="description" className="block text-sm font-medium mb-2 text-foreground">
                    Tell us more about your needs (optional)
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-foreground placeholder-foreground/50 focus:border-primary focus:outline-none smooth-all focus:bg-white/15 text-sm sm:text-base resize-none"
                    placeholder="Describe what you're looking for and any specific requirements..."
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  variant="default"
                  className="w-full gap-2 text-sm sm:text-base py-3"
                  disabled={loading}
                >
                  {loading ? 'Sending...' : 'Send Request'}
                  <ArrowRight size={18} />
                </Button>

                <p className="text-xs sm:text-sm text-foreground/50 text-center">
                  * Required fields. We&apos;ll contact you shortly to discuss your project.
                </p>
              </form>
            </>
          ) : (
            <div className="glass-card text-center space-y-6 p-8 sm:p-12">
              <div className="w-16 h-16 mx-auto rounded-full bg-primary/20 flex items-center justify-center">
                <ArrowRight className="text-primary" size={32} />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold">Thank You!</h2>
              <p className="text-foreground/70">
                We&apos;ve received your request and will get back to you within 24 hours at the contact information you provided.
              </p>
              <div className="pt-4">
                <Link href="/">
                  <Button variant="default" className="gap-2">
                    Back to Home
                    <ArrowRight size={18} />
                  </Button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
