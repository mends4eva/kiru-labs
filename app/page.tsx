'use client'

import { Button } from "@/components/ui/button"
import { FloatingElement } from "@/components/floating-element"
import { Meteors } from "@/components/ui/meteors"
import { ArrowRight, Sparkles, Zap, Shield, Rocket, Menu, X } from 'lucide-react'
import Link from "next/link"
import { useState } from "react"

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="relative min-h-screen bg-black">
      <video
        autoPlay
        loop
        muted
        className="absolute inset-x-0 top-16 bottom-0 w-full h-[calc(100%-4rem)] object-cover opacity-10 pointer-events-none z-0"
      >
        <source src="/funnel-animation.mp4" type="video/mp4" />
      </video>

      {/* Animated Navigation */}
      <nav className="fixed w-full top-0 z-50 glass-effect">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="relative text-foreground hover:text-primary smooth-all group">
              <span className="relative z-10">Features</span>
              <div className="absolute -inset-2 glass-effect rounded-lg opacity-0 group-hover:opacity-100 smooth-all -z-10"></div>
            </a>
            <a href="/ideas" className="relative text-foreground hover:text-primary smooth-all group">
              <span className="relative z-10">Ideas</span>
              <div className="absolute -inset-2 glass-effect rounded-lg opacity-0 group-hover:opacity-100 smooth-all -z-10"></div>
            </a>
            <a href="/about" className="relative text-foreground hover:text-primary smooth-all group">
              <span className="relative z-10">About</span>
              <div className="absolute -inset-2 glass-effect rounded-lg opacity-0 group-hover:opacity-100 smooth-all -z-10"></div>
            </a>
            <a href="#contact" className="relative text-foreground hover:text-primary smooth-all group">
              <span className="relative z-10">Contact</span>
              <div className="absolute -inset-2 glass-effect rounded-lg opacity-0 group-hover:opacity-100 smooth-all -z-10"></div>
            </a>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Link href="/get-started">
              <Button variant="default" size="sm">Get Started</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden glass-button-icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden glass-effect border-t">
            <div className="px-4 py-4 space-y-3">
              <a href="#features" className="block text-foreground hover:text-primary hover:bg-white/10 p-2 rounded-lg smooth-all">Features</a>
              <a href="/ideas" className="block text-foreground hover:text-primary hover:bg-white/10 p-2 rounded-lg smooth-all">Ideas</a>
              <a href="/about" className="block text-foreground hover:text-primary hover:bg-white/10 p-2 rounded-lg smooth-all">About</a>
              <a href="#contact" className="block text-foreground hover:text-primary hover:bg-white/10 p-2 rounded-lg smooth-all">Contact</a>
              <Button variant="default" className="w-full">Get Started</Button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Meteors Background */}
        <Meteors number={30} className="bg-slate-400" />

        {/* Gradient Background Elements */}
        <div className="absolute top-20 right-10 w-48 sm:w-72 h-48 sm:h-72 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-20 left-10 w-64 sm:w-96 h-64 sm:h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center space-y-6 mb-12">
            <FloatingElement>
              <img 
                src="/kiru-logo.png" 
                alt="Kirulabs Logo" 
                className="h-40 sm:h-56 md:h-72 w-auto mx-auto drop-shadow-lg"
              />
            </FloatingElement>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Your enterprise,
              <span className="gradient-accent"> our innovation.</span>
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-foreground/70 max-w-2xl mx-auto leading-relaxed">
              We believe technology should make life easier, smarter and errot-free. We are dynamic IT and Tech solutions company dedicated to empowering enterprises of all sizes with cutting-edge services that streamline operations and unlock growth
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
              <Link href="/ideas">
                <Button variant="default" size="sm" className="gap-2 text-sm">
                  Explore <ArrowRight size={16} />
                </Button>
              </Link>
              <Link href="/get-started">
                <Button variant="glass" size="sm" className="text-sm">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>

          {/* Feature Preview Cards */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            <div className="glass-card group hover:glow-effect smooth-all hover:border-primary/50 p-4 sm:p-6">
              <div className="w-10 sm:w-14 h-10 sm:h-14 glass-effect rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 smooth-all">
                <Zap className="text-primary" size={20} />
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2 sm:mb-3">Comprehensive Solutions</h3>
              <p className="text-xs sm:text-sm text-foreground/70 leading-relaxed">We cover every aspect of IT, so you dont need multile vendors</p>
            </div>

            <div className="glass-card group hover:glow-effect smooth-all hover:border-primary/50 p-4 sm:p-6">
              <div className="w-10 sm:w-14 h-10 sm:h-14 glass-effect rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 smooth-all">
                <Shield className="text-primary" size={20} />
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2 sm:mb-3">Error-Free Systems</h3>
              <p className="text-xs sm:text-sm text-foreground/70 leading-relaxed">Our Mission is to make work more planned, efficient and less prone to mistakes.</p>
            </div>

            <div className="glass-card group hover:glow-effect smooth-all hover:border-primary/50 p-4 sm:p-6 sm:col-span-2 md:col-span-1">
              <div className="w-10 sm:w-14 h-10 sm:h-14 glass-effect rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 smooth-all">
                <Rocket className="text-primary" size={20} />
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2 sm:mb-3">Future Ready</h3>
              <p className="text-xs sm:text-sm text-foreground/70 leading-relaxed">We combine creativity with technical expertise to deliver solutions that stand out.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 space-y-2 sm:space-y-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">Why Choose Kirulabs</h2>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-foreground/60 max-w-2xl mx-auto">We offer the best solutions to your enterprise.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
            {[
              { title: "All-in-One Tech Partner", desc: "We provide complete IT and digital solutions under one roof, from software troubleshooting to creative design and videography." },
              { title: "Error-Free Efficiency", desc: "Our systems are built to make work easier, more organized, and less prone to mistakes, ensuring smooth operations for enterprises." },
              { title: "Creative + Technical Expertise", desc: "We blend technical problem-solving with creative services like publications, presentations, and flyers to give your brand a powerful edge." },
              { title: "Future-Driven Innovation", desc: "At Kirulabs, we don't just solve today's problems, we design solutions that prepare your enterprise for tomorrow's challenges." },
            ].map((item, i) => (
              <div key={i} className="glass-card group hover:glow-effect hover:border-primary/50 smooth-all p-4 sm:p-5 md:p-6">
                <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold mb-2 sm:mb-3 group-hover:text-primary smooth-all">{item.title}</h3>
                <p className="text-xs sm:text-sm md:text-base text-foreground/70 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="glass-card text-center space-y-6 sm:space-y-8 border-primary/30 hover:border-primary/60 smooth-all hover:glow-effect p-6 sm:p-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">Ready to Get Started?</h2>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-foreground/70 max-w-2xl mx-auto leading-relaxed">
              Contact us today to discuss how Kirulabs can transform your digital presence with cutting-edge liquid glass design.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 pt-2 sm:pt-4">
              <Link href="/get-started" className="block">
                <Button variant="default" size="sm" className="gap-2 text-sm">
                  Get Started
                  <ArrowRight size={16} />
                </Button>
              </Link>
              <Link href="/about" className="block">
                <Button variant="glass" size="sm" className="w-full text-sm">About Us</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 glass-effect">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <img src="/kirulabs-logo.png" alt="Kirulabs" className="h-10 w-auto mb-4" />
              <p className="text-sm text-foreground/60">Enterprise innovation made simple</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-foreground/60">
                <li><Link href="/products/features" className="hover:text-foreground transition-colors">Features</Link></li>
                <li><Link href="/products/pricing" className="hover:text-foreground transition-colors">Pricing</Link></li>
                <li><Link href="/security" className="hover:text-foreground transition-colors">Security</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-foreground/60">
                <li><Link href="/about" className="hover:text-foreground transition-colors">About</Link></li>
                <li><Link href="/resources/blog" className="hover:text-foreground transition-colors">Blog</Link></li>
                <li><Link href="/company/careers" className="hover:text-foreground transition-colors">Careers</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Products</h4>
              <ul className="space-y-2">
                <li><Link href="/ideas" className="hover:text-foreground smooth-all">Solutions</Link></li>
                <li><Link href="/products/pricing" className="hover:text-foreground smooth-all">Pricing</Link></li>
                <li><Link href="/products/features" className="hover:text-foreground smooth-all">Features</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border/50 pt-8 text-center text-sm text-foreground/60">
            <p>&copy; 2024 Kirulabs. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
