'use client'

import Link from "next/link"
import { Shield, Lock, Eye, CheckCircle, FileText, Zap } from 'lucide-react'

export default function SecurityPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Back Button */}
      <div className="pt-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Link href="/">
            <button className="text-lg font-semibold text-blue-500 hover:text-blue-600 transition-colors">
              ← Back to Home
            </button>
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="pt-12 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6">
            Security & Data Protection
          </h1>
          <p className="text-2xl sm:text-3xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
            Enterprise-grade security to protect your business, data, and privacy.
          </p>
        </div>
      </section>

      {/* Security Features */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-12 text-center">Our Security Commitment</h2>
          
          <div className="grid md:grid-cols-2 gap-10">
            <div className="rounded-2xl p-10 bg-white/5 border border-white/10">
              <div className="flex items-start gap-4">
                <Lock size={40} className="text-blue-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">Defense-in-Depth Security</h3>
                  <p className="text-lg text-foreground/75 leading-relaxed">
                    Multiple layers of protection including encryption, access control, monitoring, and regular security testing. Your data is protected at every level.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl p-10 bg-white/5 border border-white/10">
              <div className="flex items-start gap-4">
                <Eye size={40} className="text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">24/7 Monitoring & Audits</h3>
                  <p className="text-lg text-foreground/75 leading-relaxed">
                    Continuous monitoring, vulnerability detection, and regular security audits. Any detected issues are immediately logged and remediated.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl p-10 bg-white/5 border border-white/10">
              <div className="flex items-start gap-4">
                <Shield size={40} className="text-purple-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">Strict Access Control</h3>
                  <p className="text-lg text-foreground/75 leading-relaxed">
                    All personnel are bound by strict confidentiality obligations. System access is granted strictly on a need-to-know basis with full logging.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl p-10 bg-white/5 border border-white/10">
              <div className="flex items-start gap-4">
                <CheckCircle size={40} className="text-red-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">Breach Response Protocol</h3>
                  <p className="text-lg text-foreground/75 leading-relaxed">
                    In the unlikely event of a breach, we immediately contain the impact, notify affected parties, and inform regulatory bodies as required.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Data Protection Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-12 text-center">Data Protection Principles</h2>
          
          <div className="rounded-2xl p-12 bg-white/5 border border-white/10 space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl sm:text-3xl font-bold text-white flex items-center gap-3">
                <Zap size={32} className="text-blue-500" /> Your Data Stays Yours
              </h3>
              <p className="text-lg sm:text-xl text-foreground/75 leading-relaxed">
                When you upload data to our systems, you retain full ownership and control. KiruLabs acts strictly as a Data Processor, processing your data only as instructed and never accessing it without authorization.
              </p>
            </div>

            <div className="border-t border-white/10 pt-8">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">Your Rights</h3>
              <ul className="space-y-3 text-lg text-foreground/75">
                <li className="flex gap-3">
                  <span className="text-blue-500 font-bold">✓</span>
                  <span><span className="font-semibold text-white">Right to Access</span> – Know what data we hold about you</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-500 font-bold">✓</span>
                  <span><span className="font-semibold text-white">Right to Correct</span> – Update inaccurate information</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-500 font-bold">✓</span>
                  <span><span className="font-semibold text-white">Right to Delete</span> – Request deletion of your data</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-500 font-bold">✓</span>
                  <span><span className="font-semibold text-white">Right to Portability</span> – Receive your data in a standard format</span>
                </li>
              </ul>
            </div>

            <div className="border-t border-white/10 pt-8">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">Regulatory Compliance</h3>
              <p className="text-lg text-foreground/75 leading-relaxed">
                KiruLabs complies with Ghana Data Protection Act 2012, GDPR, and CCPA where applicable. When multiple laws apply, we enforce the highest standard of protection.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Policy Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-2xl p-12 bg-blue-600/15 border-2 border-blue-500/50">
            <div className="flex items-start gap-4">
              <FileText size={48} className="text-blue-400 flex-shrink-0 mt-1" />
              <div className="flex-grow">
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Comprehensive Privacy Policy</h2>
                <p className="text-xl text-foreground/80 mb-8 leading-relaxed">
                  Read our detailed Privacy & Data Protection Policy to understand exactly how we handle, protect, and respect your data. It covers data classification, consent, AI governance, third-party processing, and your rights.
                </p>
                <Link href="/privacy-policy">
                  <button className="px-8 py-5 text-lg font-semibold rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition-colors">
                    Read Full Privacy Policy
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Security Questions?</h2>
          <p className="text-xl text-foreground/80 mb-8 max-w-2xl mx-auto leading-relaxed">
            If you have concerns about security, data protection, or wish to exercise your rights, please contact us.
          </p>
          <Link href="/company/contact">
            <button className="px-8 py-5 text-lg font-semibold rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition-colors">
              Contact Us
            </button>
          </Link>
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
