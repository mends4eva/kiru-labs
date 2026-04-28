'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-background">
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
      <section className="pt-8 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6">Pricing & Engagement</h1>
          <p className="text-2xl sm:text-3xl text-foreground/80 max-w-3xl leading-relaxed">
            Transparent, project-based pricing tailored to your unique needs.
          </p>
        </div>
      </section>

      {/* Pricing Structure */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-2xl p-10 sm:p-12 bg-white/5 border border-white/10 mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-8">Pricing Structure</h2>
            <div className="space-y-6 text-lg sm:text-xl text-foreground/80 leading-relaxed">
              <p>
                KiruLabs operates on a <span className="font-semibold text-white">project-based pricing model</span>. Due to the bespoke nature of our services across software development, hardware engineering, and biosystems solutions, we do not maintain a standardized rate card. All pricing is determined by project scope, technical complexity, resource allocation, and delivery timeline.
              </p>
              <p>
                KiruLabs is committed to providing <span className="font-semibold text-white">competitive and affordable pricing</span> aligned with our standard project timelines. Should a client require expedited delivery or scheduling outside of our standard workflow, additional fees may apply to accommodate resource prioritization and overtime allocation. All such adjustments will be transparently itemized in the formal proposal.
              </p>
            </div>
          </div>

          {/* Engagement Process */}
          <div className="rounded-2xl p-10 sm:p-12 bg-white/5 border border-white/10 mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-10">Engagement Process</h2>
            
            <div className="space-y-10">
              {[
                {
                  num: '1',
                  title: 'Initial Inquiry',
                  desc: 'Prospective clients are required to submit a detailed project brief via our Contact page. The brief should include: project objectives, technical requirements, desired deliverables, and preferred timelines.'
                },
                {
                  num: '2',
                  title: 'Proposal & Quotation',
                  desc: 'Upon receipt and review of the project brief, KiruLabs will conduct an internal scope and timeline assessment. A formal proposal will be issued via email within three (3) business days, including comprehensive scope of work, project milestones, detailed cost breakdown, estimated timeline, and payment schedule.'
                },
                {
                  num: '3',
                  title: 'Timeline & Scheduling Fees',
                  desc: 'Our standard pricing reflects delivery within our established production schedule. Requests for accelerated timelines or dedicated resource allocation outside of standard scheduling are classified as priority engagements and will incur additional costs to maintain quality.'
                },
                {
                  num: '4',
                  title: 'Agreement & Commencement',
                  desc: 'Should the client approve the proposal, a Master Service Agreement (MSA) or Project Service Agreement (PSA) will be executed, outlining terms of service, intellectual property rights, confidentiality clauses, and liability provisions.'
                },
                {
                  num: '5',
                  title: 'Project Kickoff Deposit',
                  desc: 'To secure project scheduling and resource allocation, a non-refundable kickoff deposit is required for most engagements. The deposit amount is project-dependent and will be clearly stated in the proposal. Work shall commence only upon receipt of the signed agreement and cleared deposit payment.'
                },
                {
                  num: '6',
                  title: 'Invoicing & Payment Terms',
                  desc: 'Unless otherwise agreed, invoices are issued based on the milestone schedule defined in the service agreement. All invoices are payable within fourteen (14) days of issuance. Accepted payment methods include bank transfer and approved digital payment platforms.'
                }
              ].map((step) => (
                <div key={step.num} className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-600 text-white font-bold text-lg">
                      {step.num}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">{step.title}</h3>
                    <p className="text-lg sm:text-xl text-foreground/75 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Service Categories */}
          <div className="rounded-2xl p-10 sm:p-12 bg-white/5 border border-white/10 mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-8">Service Categories</h2>
            <p className="text-xl sm:text-2xl text-foreground/80 mb-8 leading-relaxed">
              KiruLabs provides services under the following engagement types:
            </p>
            <ul className="space-y-4 text-lg sm:text-xl text-foreground/75">
              <li className="flex gap-4">
                <span className="text-blue-500 font-bold">•</span>
                <span><span className="font-semibold text-white">Consulting Engagements</span> – Technical advisory, feasibility studies, system architecture</span>
              </li>
              <li className="flex gap-4">
                <span className="text-blue-500 font-bold">•</span>
                <span><span className="font-semibold text-white">Development Contracts</span> – End-to-end software, hardware, or integrated system development</span>
              </li>
              <li className="flex gap-4">
                <span className="text-blue-500 font-bold">•</span>
                <span><span className="font-semibold text-white">Retainer Agreements</span> – Ongoing support, maintenance, and iterative development</span>
              </li>
              <li className="flex gap-4">
                <span className="text-blue-500 font-bold">•</span>
                <span><span className="font-semibold text-white">Research & Prototyping</span> – Biosystems and AgriTech R&D, MVP development</span>
              </li>
            </ul>
            <p className="text-lg sm:text-xl text-foreground/75 mt-8 leading-relaxed">
              Each category is subject to the process outlined above. Pricing and deposit requirements vary by engagement type, scope, and timeline requirements.
            </p>
          </div>

          {/* Additional Info */}
          <div className="rounded-2xl p-10 sm:p-12 bg-blue-600/15 border-2 border-blue-500/50">
            <p className="text-lg sm:text-xl text-foreground/80 mb-6 leading-relaxed">
              <span className="font-semibold text-white">All proposals are valid for a period of thirty (30) days</span> from the date of issuance. KiruLabs reserves the right to revise pricing based on material changes to project scope or timeline after proposal acceptance.
            </p>
            <p className="text-lg sm:text-xl font-semibold text-white mb-6">
              Ready to start your project?
            </p>
            <Button asChild className="px-8 py-5 text-lg font-semibold rounded-xl bg-blue-600 hover:bg-blue-700 text-white">
              <Link href="/company/contact">
                Initiate a Project Inquiry
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 glass-effect mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center text-base text-foreground/60">
          <p>&copy; 2024 Kirulabs. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
