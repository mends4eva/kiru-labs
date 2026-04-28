'use client'

import Link from 'next/link'

export default function PrivacyPolicyPage() {
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

      {/* Header */}
      <section className="pt-12 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6">Privacy & Data Protection Policy</h1>
          <div className="space-y-2">
            <p className="text-lg text-foreground/70">Effective Date: January 2024</p>
            <p className="text-lg text-foreground/70">Regulatory Authority: Ghana Data Protection Commission (DPC)</p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-12">
          
          {/* Section 1 */}
          <div className="rounded-2xl p-10 bg-white/5 border border-white/10">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">1. Introduction and Scope</h2>
            <p className="text-lg text-foreground/80 leading-relaxed mb-4">
              KiruLabs ("the Company") is a Ghana-based technology organization engaged in the design, deployment, and management of digital systems, including software, hardware, and humanitarian data solutions.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              This Privacy & Data Protection Policy is a binding legal framework that governs how all personal and non-personal data is collected, processed, stored, transferred, and deleted within KiruLabs systems. It applies to all individuals and entities interacting with KiruLabs in any capacity.
            </p>
          </div>

          {/* Section 2 */}
          <div className="rounded-2xl p-10 bg-white/5 border border-white/10">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">2. Data Classification and Responsibility</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">KiruLabs as Data Controller</h3>
                <p className="text-lg text-foreground/80 leading-relaxed">
                  Data collected directly from you is fully controlled by KiruLabs. We determine how it is used and are legally accountable for its protection.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">KiruLabs as Data Processor</h3>
                <p className="text-lg text-foreground/80 leading-relaxed">
                  Data uploaded by clients remains their exclusive property. KiruLabs processes it only as instructed, does not access it without authorization, and maintains strict confidentiality.
                </p>
              </div>
            </div>
          </div>

          {/* Section 3 */}
          <div className="rounded-2xl p-10 bg-white/5 border border-white/10">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">3. Consent and Lawful Processing</h2>
            <p className="text-lg text-foreground/80 leading-relaxed mb-6">
              No personal data is processed without a lawful basis. Your consent must be freely given, specific, informed, and revocable at any time.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              KiruLabs explicitly prohibits pre-ticked consent boxes, hidden clauses, and bundled consent where unrelated services are forced together.
            </p>
          </div>

          {/* Section 4 */}
          <div className="rounded-2xl p-10 bg-white/5 border border-white/10">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">4. Security Architecture</h2>
            <p className="text-lg text-foreground/80 leading-relaxed mb-6">
              KiruLabs adopts a defense-in-depth security model with multiple layers of protection including encryption, access control, monitoring, and regular testing.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed mb-6">
              All personnel are bound by strict confidentiality obligations. Access to systems is granted strictly on a need-to-know basis.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              In the event of a breach, we contain the impact, notify affected parties as required by law, and inform regulatory bodies.
            </p>
          </div>

          {/* Section 5 */}
          <div className="rounded-2xl p-10 bg-white/5 border border-white/10">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">5. Data Subject Rights</h2>
            <p className="text-lg text-foreground/80 leading-relaxed mb-6">
              You have the right to access, correct, delete, and request portability of your data. All requests must be verified and processed within 30 days.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              These rights are not optional—they are enforceable. KiruLabs will not delay, deny, or obscure these rights unless legally justified.
            </p>
          </div>

          {/* Section 6 */}
          <div className="rounded-2xl p-10 bg-white/5 border border-white/10">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">6. AI Governance</h2>
            <p className="text-lg text-foreground/80 leading-relaxed mb-6">
              KiruLabs integrates AI technologies under strict ethical constraints. AI will never make decisions with legal, financial, or life-altering consequences without human oversight.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              You are always aware when interacting with AI. Automated profiling can be disabled without reducing access to core services.
            </p>
          </div>

          {/* Section 7 */}
          <div className="rounded-2xl p-10 bg-white/5 border border-white/10">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">7. Third-Party Processing</h2>
            <p className="text-lg text-foreground/80 leading-relaxed mb-6">
              Every third-party service provider must sign a Data Processing Agreement and demonstrate compliance with security standards.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              KiruLabs explicitly prohibits selling, trading, or sharing data for undisclosed purposes. Only the minimum necessary data is transferred.
            </p>
          </div>

          {/* Section 8 */}
          <div className="rounded-2xl p-10 bg-white/5 border border-white/10">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">8. Data Retention and Deletion</h2>
            <p className="text-lg text-foreground/80 leading-relaxed mb-6">
              Data is retained only as long as necessary. Once the purpose is fulfilled, data is deleted securely or anonymized irreversibly.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              For inactive clients, data is frozen to prevent unauthorized access with a 90-day recovery window before irreversible deletion.
            </p>
          </div>

          {/* Contact Section */}
          <div className="rounded-2xl p-12 bg-blue-600/15 border-2 border-blue-500/50">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Questions About Your Data?</h2>
            <p className="text-lg sm:text-xl text-foreground/80 mb-8 leading-relaxed">
              Contact our Data Protection Officer for any inquiries, complaints, or requests related to your data.
            </p>
            <Link href="/company/contact">
              <button className="px-8 py-5 text-lg font-semibold rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition-colors">
                Contact Us
              </button>
            </Link>
          </div>
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
