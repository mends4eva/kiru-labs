'use client'

import { Button } from "@/components/ui/button"
import { Logo } from "@/components/logo"
import { FloatingElement } from "@/components/floating-element"
import { Mail, Linkedin, Twitter, ArrowRight } from 'lucide-react'
import Link from "next/link"

export default function About() {
  const founders = [
    {
      id: 1,
      name: "Sarah Chen",
      title: "Co-Founder & CEO",
      bio: "Visionary leader with 15+ years in tech innovation. Sarah drives Kirulabs' mission to democratize liquid glass UI design.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
      socials: [
        { icon: Linkedin, link: "#" },
        { icon: Twitter, link: "#" },
        { icon: Mail, link: "#" }
      ]
    },
    {
      id: 2,
      name: "Marcus Rivera",
      title: "Co-Founder & CTO",
      bio: "Engineering genius specializing in animation and UI performance. Marcus built the core tech stack that powers Kirulabs.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      socials: [
        { icon: Linkedin, link: "#" },
        { icon: Twitter, link: "#" },
        { icon: Mail, link: "#" }
      ]
    },
    {
      id: 3,
      name: "Elena Kowalski",
      title: "Co-Founder & Design Lead",
      bio: "Award-winning designer pushing the boundaries of modern UI. Elena's vision shaped the unique aesthetic of Kirulabs.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
      socials: [
        { icon: Linkedin, link: "#" },
        { icon: Twitter, link: "#" },
        { icon: Mail, link: "#" }
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-black">
      {/* Navigation */}
      <nav className="fixed w-full top-0 z-50 glass-effect">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/">
            <Logo className="h-10 w-auto cursor-pointer hover:opacity-80 transition-opacity" />
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/">
              <Button variant="glass" size="sm">Back Home</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10 text-center space-y-8">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
            Meet the
            <span className="gradient-accent"> Team</span>
            <br />
            Behind Kirulabs
          </h1>

          <p className="text-xl text-foreground/70 max-w-2xl mx-auto leading-relaxed">
            Three visionary leaders united by a passion for innovation and design excellence. Together, we're reimagining the future of digital experiences.
          </p>
        </div>
      </section>

      {/* Founders Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {founders.map((founder, i) => (
              <div key={founder.id} className="glass-card group hover:glow-effect smooth-all flex flex-col h-full hover:border-primary/50">
                  {/* Founder Image */}
                  <div className="relative mb-6 overflow-hidden rounded-2xl">
                    <div className="aspect-square overflow-hidden rounded-2xl border border-white/30 dark:border-white/20">
                      <img
                        src={founder.image}
                        alt={founder.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Info */}
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">{founder.name}</h3>
                  <p className="text-primary/80 font-semibold mb-4 text-sm">{founder.title}</p>
                  <p className="text-foreground/70 flex-grow mb-6 leading-relaxed">{founder.bio}</p>

                  {/* Social Links */}
                  <div className="flex gap-2">
                    {founder.socials.map((social, idx) => {
                      const Icon = social.icon
                      return (
                        <a
                          key={idx}
                          href={social.link}
                          className="glass-button-icon text-foreground/70 hover:text-primary transition-all duration-300"
                        >
                          <Icon size={18} />
                        </a>
                      )
                    })}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="glass-card space-y-6 hover:border-primary/50 smooth-all hover:glow-effect">
              <h2 className="text-4xl font-bold">Our Story</h2>
            <p className="text-lg text-foreground/70 leading-relaxed">
              Kirulabs was born from a simple belief: the future of user interfaces lies in the intersection of beauty, performance, and innovation. Our three founders—Sarah, Marcus, and Elena—met at a design conference in 2023 and immediately recognized their shared vision.
            </p>
            <p className="text-lg text-foreground/70 leading-relaxed">
              What started as late-night conversations about liquid glass UI has evolved into a comprehensive platform that's changing how developers and designers approach modern interface design. Every feature, every animation, and every glass effect is crafted with precision and purpose.
            </p>
            <p className="text-lg text-foreground/70 leading-relaxed">
              Today, Kirulabs empowers creators worldwide to build stunning, performant interfaces that captivate users and drive results. We're just getting started.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Innovation First",
                description: "We push boundaries and reimagine what's possible in UI design"
              },
              {
                title: "Design Excellence",
                description: "Every pixel matters. Beauty and function go hand in hand"
              },
              {
                title: "Performance Obsessed",
                description: "Smooth animations and fast load times are non-negotiable"
              }
            ].map((value, i) => (
              <div key={i} className="glass-card text-center hover:border-primary/50 smooth-all hover:glow-effect">
                <h3 className="text-2xl font-semibold mb-3 hover:text-primary smooth-all">{value.title}</h3>
                <p className="text-foreground/70 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="glass-card text-center space-y-8 border-primary/30 hover:border-primary/60 smooth-all hover:glow-effect">
              <h2 className="text-4xl sm:text-5xl font-bold">Join Our Journey</h2>
              <p className="text-lg text-foreground/70 max-w-2xl mx-auto leading-relaxed">
                Be part of the team building the future of digital design with liquid glass innovation
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
                <Button variant="default" size="lg">View Careers</Button>
                <Link href="/" className="block">
                  <Button variant="glass" size="lg" className="w-full gap-2">
                    Back to Home <ArrowRight size={20} />
                  </Button>
                </Link>
              </div>
            </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 glass-effect">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center text-sm text-foreground/60">
          <p>&copy; 2026 Kirulabs. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
