'use client'

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Shield, Lock, Eye, CheckCircle } from 'lucide-react'

export default function SecurityPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed w-full top-0 z-50 glass-effect">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/">
            <span className="text-xl font-bold text-white hover:text-primary transition-colors">KIRULABS</span>
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/">
              <Button variant="glass" size="sm">Back to Home</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 glass-card rounded-full">
            <Shield size={18} className="text-primary" />
            <span className="text-sm font-medium">Security</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
            Enterprise-Grade Security
          </h1>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Comprehensive security solutions to protect your business, data, and infrastructure.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="glass-card p-8 space-y-8">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Security Information</h2>
              <p className="text-foreground/70">
                Our security features and detailed information will be added here.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                { icon: <Lock size={24} />, title: "Data Protection", desc: "Encryption and secure data handling" },
                { icon: <Eye size={24} />, title: "Monitoring", desc: "24/7 security monitoring and alerts" },
                { icon: <Shield size={24} />, title: "Compliance", desc: "Industry-standard compliance" },
                { icon: <CheckCircle size={24} />, title: "Verification", desc: "Security audits and testing" }
              ].map((item, i) => (
                <div key={i} className="p-4 rounded-lg bg-primary/5 border border-primary/20">
                  <div className="text-primary mb-3">{item.icon}</div>
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-foreground/60">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-2xl font-bold">Ready to Secure Your Business?</h2>
          <p className="text-foreground/70">Contact us to learn more about our security solutions.</p>
          <div className="flex gap-4 justify-center">
            <Link href="/company/contact">
              <Button size="lg" className="gap-2">
                Get in Touch
                <ArrowRight size={18} />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
