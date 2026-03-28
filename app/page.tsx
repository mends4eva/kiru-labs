'use client'

import { Button } from "@/components/ui/button"
import { Logo } from "@/components/logo"
import { FloatingElement } from "@/components/floating-element"
import { ArrowRight, Sparkles, Zap, Shield, Rocket, Menu, X } from 'lucide-react'
import Link from "next/link"
import { useState } from "react"

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-black">
      {/* Animated Navigation */}
      <nav className="fixed w-full top-0 z-50 glass-effect">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Logo className="h-10 w-auto" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="relative text-foreground hover:text-primary smooth-all group">
              <span className="relative z-10">Features</span>
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
            <Button variant="default" size="sm">Get Started</Button>
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
              <a href="/about" className="block text-foreground hover:text-primary hover:bg-white/10 p-2 rounded-lg smooth-all">About</a>
              <a href="#contact" className="block text-foreground hover:text-primary hover:bg-white/10 p-2 rounded-lg smooth-all">Contact</a>
              <Button variant="default" className="w-full">Get Started</Button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Gradient Background Elements */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center space-y-8 mb-16">
            <FloatingElement>
              <div className="inline-flex items-center gap-2 px-4 py-2 glass-card text-sm font-medium">
                <Sparkles size={16} className="text-primary" />
                <span>Welcome to Kirulabs</span>
              </div>
            </FloatingElement>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
              Liquid Glass
              <span className="gradient-accent"> Innovation</span>
            </h1>

            <p className="text-xl text-foreground/70 max-w-2xl mx-auto leading-relaxed">
              Experience the future of user interfaces with cutting-edge liquid glass design, smooth animations, and intelligent technology solutions.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button variant="default" size="lg" className="gap-2">
                Explore <ArrowRight size={20} />
              </Button>
              <Button variant="glass" size="lg">
                Learn More
              </Button>
            </div>
          </div>

          {/* Feature Preview Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="glass-card group hover:glow-effect smooth-all hover:border-primary/50">
              <div className="w-14 h-14 glass-effect rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 smooth-all">
                <Zap className="text-primary" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Lightning Fast</h3>
              <p className="text-foreground/70 leading-relaxed">Optimized performance for seamless user experience and instant responsiveness</p>
            </div>

            <div className="glass-card group hover:glow-effect smooth-all hover:border-primary/50">
              <div className="w-14 h-14 glass-effect rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 smooth-all">
                <Shield className="text-primary" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Secure & Trusted</h3>
              <p className="text-foreground/70 leading-relaxed">Enterprise-grade security with compliance standards and data protection</p>
            </div>

            <div className="glass-card group hover:glow-effect smooth-all hover:border-primary/50">
              <div className="w-14 h-14 glass-effect rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 smooth-all">
                <Rocket className="text-primary" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Future Ready</h3>
              <p className="text-foreground/70 leading-relaxed">Built with next-generation technologies for tomorrow's challenges</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl sm:text-5xl font-bold">Why Choose Kirulabs</h2>
            <p className="text-lg text-foreground/60 max-w-2xl mx-auto">Experience cutting-edge liquid glass UI with unmatched performance and design</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: "Beautiful Design", desc: "Stunning liquid glass UI with frosted glass effects and visual hierarchy" },
              { title: "Smooth Transitions", desc: "Fluid, performant interactions that feel natural and responsive" },
              { title: "Dark Mode Support", desc: "Automatic theme switching based on browser preferences" },
              { title: "Responsive Layout", desc: "Perfectly optimized for mobile, tablet, and desktop" },
            ].map((item, i) => (
              <div key={i} className="glass-card group hover:glow-effect hover:border-primary/50 smooth-all">
                <h3 className="text-2xl font-semibold mb-3 group-hover:text-primary smooth-all">{item.title}</h3>
                <p className="text-foreground/70 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="glass-card text-center space-y-8 border-primary/30 hover:border-primary/60 smooth-all hover:glow-effect">
            <h2 className="text-4xl sm:text-5xl font-bold">Ready to Get Started?</h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto leading-relaxed">
              Contact us today to discuss how Kirulabs can transform your digital presence with cutting-edge liquid glass design.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
              <Button variant="default" size="lg" className="gap-2">
                Contact Us
                <ArrowRight size={20} />
              </Button>
              <Link href="/about" className="block">
                <Button variant="glass" size="lg" className="w-full">About Us</Button>
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
              <Logo className="h-10 w-auto mb-4" />
              <p className="text-sm text-foreground/60">Enterprise innovation made simple</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-foreground/60">
                <li><a href="#" className="hover:text-foreground transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Security</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-foreground/60">
                <li><a href="/about" className="hover:text-foreground transition-colors">About</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-foreground/60">
                <li><a href="#contact" className="hover:text-foreground smooth-all">Contact Us</a></li>
                <li><a href="#" className="hover:text-foreground smooth-all">Documentation</a></li>
                <li><a href="#" className="hover:text-foreground smooth-all">Support</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border/50 pt-8 text-center text-sm text-foreground/60">
            <p>&copy; 2026 Kirulabs. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
