'use client'

import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { ArrowRight, Zap, Shield, Rocket } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-border bg-background/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image
              src="/bear-logo.png"
              alt="Bear Solutions"
              width={120}
              height={40}
              className="h-10 w-auto"
            />
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm hover:text-accent transition-colors">Features</a>
            <a href="#about" className="text-sm hover:text-accent transition-colors">About</a>
            <a href="#contact" className="text-sm hover:text-accent transition-colors">Contact</a>
          </div>
          <Button variant="default" size="sm">Get Started</Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Grid background effect */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.1)_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center space-y-8 mb-12">
            <div className="inline-block">
              <div className="px-4 py-2 rounded-full border border-accent/30 bg-accent/10 text-accent text-sm font-medium">
                ✨ Next Generation Solutions
              </div>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
              The Future of<br />
              <span className="text-accent">Innovation</span> Starts Here
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Bear Solutions delivers cutting-edge technology and transformative strategies for enterprises ready to lead their industry.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="lg" className="gap-2">
                Explore Our Platform
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline">
                Watch Demo
              </Button>
            </div>
          </div>

          {/* Feature Cards Preview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20">
            {[
              {
                icon: Zap,
                title: "Lightning Fast",
                description: "Performance optimized for maximum speed and efficiency"
              },
              {
                icon: Shield,
                title: "Enterprise Security",
                description: "Bank-grade security with military-grade encryption"
              },
              {
                icon: Rocket,
                title: "Rapid Deployment",
                description: "Get up and running in minutes, not months"
              }
            ].map((feature, i) => (
              <div key={i} className="p-6 rounded-xl border border-border bg-card/50 backdrop-blur hover:border-accent/50 transition-all hover:shadow-lg hover:shadow-accent/10">
                <feature.icon className="w-8 h-8 text-accent mb-4" />
                <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30 border-y border-border">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { value: "500+", label: "Enterprise Clients" },
              { value: "99.99%", label: "Uptime SLA" },
              { value: "24/7", label: "Expert Support" },
              { value: "50M+", label: "Daily Transactions" }
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-accent mb-2">{stat.value}</div>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">Why Choose Bear Solutions?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Built for enterprises that demand excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Advanced Analytics",
                description: "Real-time insights powered by AI-driven analytics and machine learning models"
              },
              {
                title: "Seamless Integration",
                description: "Connect with your existing tools and platforms through our robust API ecosystem"
              },
              {
                title: "Global Infrastructure",
                description: "Deploy globally with local performance and compliance with regional requirements"
              },
              {
                title: "Custom Solutions",
                description: "Tailored implementations designed specifically for your unique business needs"
              }
            ].map((feature, i) => (
              <div key={i} className="p-8 rounded-xl border border-border bg-card/30 backdrop-blur">
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/20 border-t border-border">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl sm:text-5xl font-bold">Ready to Transform Your Business?</h2>
          <p className="text-lg text-muted-foreground">
            Join leading enterprises that trust Bear Solutions for innovation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">Schedule Demo</Button>
            <Button size="lg" variant="outline">Learn More</Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 px-4 sm:px-6 lg:px-8 bg-secondary/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <Image
                src="/bear-logo.png"
                alt="Bear Solutions"
                width={140}
                height={50}
                className="h-12 w-auto mb-4"
              />
              <p className="text-sm text-muted-foreground">Enterprise innovation made simple</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-accent transition">Features</a></li>
                <li><a href="#" className="hover:text-accent transition">Pricing</a></li>
                <li><a href="#" className="hover:text-accent transition">Security</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-accent transition">About</a></li>
                <li><a href="#" className="hover:text-accent transition">Blog</a></li>
                <li><a href="#" className="hover:text-accent transition">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-accent transition">Privacy</a></li>
                <li><a href="#" className="hover:text-accent transition">Terms</a></li>
                <li><a href="#" className="hover:text-accent transition">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 Bear Solutions. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
