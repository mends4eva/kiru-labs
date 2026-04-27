'use client'

import { Button } from "@/components/ui/button"
import { IdeaCard } from "@/components/idea-card"
import Link from "next/link"
import { ArrowRight, ArrowLeft, Code2, Brain, Globe, Palette, Zap, Shield, Smartphone, Cloud, Lightbulb, Users, Rocket } from 'lucide-react'
import { useState } from 'react'

interface Idea {
  id: number
  title: string
  description: string
  category: string
  icon: any
  color: string
  image?: string
}

const ideas: Idea[] = [
  {
    id: 1,
    title: "Smart Workflow Automation",
    description: "AI-powered system that learns your business processes and automates repetitive tasks, saving time and reducing errors.",
    category: "AI & Automation",
    icon: Zap,
    color: "from-blue-500 to-cyan-500",
    image: "/placeholder.svg?height=300&width=400"
  },
  {
    id: 2,
    title: "Real-time Analytics Dashboard",
    description: "Live business intelligence platform with predictive insights, custom reports, and data visualization for enterprise decision-making.",
    category: "Analytics",
    icon: Brain,
    color: "from-purple-500 to-pink-500",
    image: "/placeholder.svg?height=300&width=400"
  },
  {
    id: 3,
    title: "Cloud-Native Architecture",
    description: "Scalable microservices infrastructure with automatic load balancing, disaster recovery, and 99.99% uptime guarantee.",
    category: "Cloud Infrastructure",
    icon: Cloud,
    color: "from-orange-500 to-red-500",
    image: "/placeholder.svg?height=300&width=400"
  },
  {
    id: 4,
    title: "Interactive Brand Experience",
    description: "Immersive web experiences with 3D elements, animations, and personalized content that engages your audience like never before.",
    category: "Design & UX",
    icon: Palette,
    color: "from-green-500 to-emerald-500",
    image: "/placeholder.svg?height=300&width=400"
  },
  {
    id: 5,
    title: "Mobile-First Progressive App",
    description: "Native mobile experience on web with offline functionality, push notifications, and seamless synchronization across devices.",
    category: "Mobile Solutions",
    icon: Smartphone,
    color: "from-indigo-500 to-blue-500",
    image: "/placeholder.svg?height=300&width=400"
  },
  {
    id: 6,
    title: "Enterprise Security Suite",
    description: "Comprehensive cybersecurity framework with zero-trust architecture, encryption, threat detection, and compliance management.",
    category: "Security",
    icon: Shield,
    color: "from-red-500 to-rose-500",
    image: "/placeholder.svg?height=300&width=400"
  },
  {
    id: 7,
    title: "AI Content Generation",
    description: "Intelligent system that creates marketing copy, social media content, and technical documentation tailored to your brand voice.",
    category: "AI & Content",
    icon: Lightbulb,
    color: "from-yellow-500 to-orange-500",
    image: "/placeholder.svg?height=300&width=400"
  },
  {
    id: 8,
    title: "Team Collaboration Hub",
    description: "Unified platform for project management, communication, file sharing, and video conferencing with advanced permissions.",
    category: "Collaboration",
    icon: Users,
    color: "from-teal-500 to-green-500",
    image: "/placeholder.svg?height=300&width=400"
  },
  {
    id: 9,
    title: "Full-Stack Development Platform",
    description: "Complete development environment with built-in testing, deployment pipelines, and monitoring for rapid application delivery.",
    category: "Development",
    icon: Code2,
    color: "from-cyan-500 to-blue-500",
    image: "/placeholder.svg?height=300&width=400"
  },
  {
    id: 10,
    title: "Global Web Presence",
    description: "Multi-language, multi-currency e-commerce platform with CDN optimization, SEO excellence, and conversion optimization.",
    category: "Web Solutions",
    icon: Globe,
    color: "from-blue-500 to-purple-500",
    image: "/placeholder.svg?height=300&width=400"
  },
  {
    id: 11,
    title: "Business Growth Accelerator",
    description: "Strategic consulting combined with technology implementation to scale your business 10x faster with measurable results.",
    category: "Strategy",
    icon: Rocket,
    color: "from-rose-500 to-pink-500",
    image: "/placeholder.svg?height=300&width=400"
  },
  {
    id: 12,
    title: "Innovation Lab Platform",
    description: "Dedicated space for experimenting with emerging technologies, prototyping ideas, and bringing breakthrough innovations to market.",
    category: "Innovation",
    icon: Lightbulb,
    color: "from-amber-500 to-orange-500",
    image: "/placeholder.svg?height=300&width=400"
  }
]

export default function IdeasPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const categories = Array.from(new Set(ideas.map(idea => idea.category)))
  const filteredIdeas = selectedCategory 
    ? ideas.filter(idea => idea.category === selectedCategory)
    : ideas

  return (
    <div className="min-h-screen bg-black">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 glass-effect border-b border-white/10 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <Link href="/">
            <span className="text-xl font-bold text-white hover:text-primary smooth-all">KIRULABS</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="/" className="relative text-foreground hover:text-primary smooth-all group">
              <span className="relative z-10">Home</span>
              <div className="absolute -inset-2 glass-effect rounded-lg opacity-0 group-hover:opacity-100 smooth-all -z-10"></div>
            </a>
            <a href="/about" className="relative text-foreground hover:text-primary smooth-all group">
              <span className="relative z-10">About</span>
              <div className="absolute -inset-2 glass-effect rounded-lg opacity-0 group-hover:opacity-100 smooth-all -z-10"></div>
            </a>
            <a href="/ideas" className="relative text-foreground hover:text-primary smooth-all group">
              <span className="relative z-10">Projects</span>
              <div className="absolute -inset-2 glass-effect rounded-lg opacity-0 group-hover:opacity-100 smooth-all -z-10"></div>
            </a>
          </div>

          <div className="flex items-center gap-4">
            <Link href="/">
              <Button variant="glass" size="sm">Back Home</Button>
            </Link>
            <div className="hidden md:flex">
              <Link href="/get-started">
                <Button variant="default" size="sm">Get Started</Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute top-20 right-10 w-48 sm:w-72 h-48 sm:h-72 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-20 left-10 w-64 sm:w-96 h-64 sm:h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10 text-center space-y-4 sm:space-y-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
            Our Innovative
            <span className="gradient-accent"> Projects</span>
          </h1>

          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-foreground/70 max-w-2xl mx-auto leading-relaxed">
            Explore our collection of groundbreaking solutions and innovative projects designed to transform your business and solve real-world challenges.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      {/* <section className="px-4 sm:px-6 lg:px-8 pb-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-2 sm:gap-3 justify-center">
            <Button
              variant={selectedCategory === null ? "default" : "glass"}
              size="sm"
              onClick={() => setSelectedCategory(null)}
              className="text-xs sm:text-sm"
            >
              All Ideas
            </Button>
            {categories.map(category => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "glass"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className="text-xs sm:text-sm"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section> */}

      {/* Ideas Grid */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16">
            {filteredIdeas.map((idea) => {
              const IconComponent = idea.icon
              return (
                <IdeaCard
                  key={idea.id}
                  id={idea.id}
                  title={idea.title}
                  description={idea.description}
                  icon={<IconComponent size={28} />}
                  image={idea.image}
                />
              )
            })}
          </div>

          {filteredIdeas.length === 0 && (
            <div className="text-center py-16">
              <p className="text-foreground/60">No ideas found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="glass-card text-center space-y-6 sm:space-y-8 border-primary/30 hover:border-primary/60 smooth-all hover:glow-effect p-6 sm:p-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">Ready to Bring Your Ideas to Life?</h2>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg tumtum max-w-2xl mx-auto leading-relaxed">
              Let's collaborate to transform these innovative ideas into real solutions that drive your business forward.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 pt-2 sm:pt-4">
              <Link href="/get-started" className="block">
                <Button variant="default" size="sm" className="gap-2 text-sm">
                  Start a Project
                  <ArrowRight size={16} />
                </Button>
              </Link>
              <Link href="/" className="block">
                <Button variant="glass" size="sm" className="w-full text-sm tumtum">Back to Home</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center text-xs sm:text-sm text-foreground/60">
          <p>&copy; 2024 Kirulabs. All rights reserved. Innovating for a better future.</p>
        </div>
      </footer>
    </div>
  )
}
