'use client'

import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowRight, CheckCircle, Zap, Shield, Rocket, Code, Cloud, Brain, Globe, Video } from 'lucide-react'
import { useParams } from 'next/navigation'

interface IdeaDetail {
  id: string
  title: string
  category: string
  description: string
  longDescription: string
  features: string[]
  benefits: string[]
  icon: React.ReactNode
  color: string
}

const ideasData: { [key: string]: IdeaDetail } = {
  'ai-automation': {
    id: 'ai-automation',
    title: 'AI Automation',
    category: 'Artificial Intelligence',
    description: 'Streamline business processes with intelligent automation.',
    longDescription: 'Our AI Automation solution leverages machine learning and natural language processing to automate repetitive tasks, reduce human error, and increase operational efficiency. From customer service chatbots to intelligent workflow management, we help enterprises unlock the power of AI.',
    features: [
      'Intelligent Process Automation',
      'Natural Language Processing',
      'Machine Learning Integration',
      'Real-time Analytics & Monitoring',
      'Custom AI Model Training',
      'Seamless Integration with Existing Systems'
    ],
    benefits: [
      '60-80% reduction in manual work',
      'Improved accuracy and consistency',
      'Faster decision-making',
      '24/7 automated operations',
      'Scalable solutions',
      'ROI within 6-12 months'
    ],
    icon: <Brain className="text-primary" size={32} />,
    color: 'from-purple-500 to-pink-500'
  },
  'cloud-infrastructure': {
    id: 'cloud-infrastructure',
    title: 'Cloud Infrastructure',
    category: 'Cloud Services',
    description: 'Secure, scalable cloud solutions for modern enterprises.',
    longDescription: 'Build, deploy, and scale your applications with our comprehensive cloud infrastructure services. We provide enterprise-grade cloud solutions with 99.99% uptime guarantee, built-in security, and optimal performance.',
    features: [
      'Multi-cloud Strategy',
      'Infrastructure as Code',
      'Auto-scaling & Load Balancing',
      'Disaster Recovery & Backup',
      'Advanced Security & Compliance',
      'Cost Optimization'
    ],
    benefits: [
      'Reduced infrastructure costs by 40-50%',
      'Global deployment capability',
      'Enterprise-grade security',
      'Automatic updates & patches',
      'Easy scalability',
      'Pay-as-you-go model'
    ],
    icon: <Cloud className="text-primary" size={32} />,
    color: 'from-blue-500 to-cyan-500'
  },
  'data-analytics': {
    id: 'data-analytics',
    title: 'Data Analytics',
    category: 'Analytics',
    description: 'Transform raw data into actionable business insights.',
    longDescription: 'Unlock the potential of your data with advanced analytics and business intelligence tools. Our solutions help you understand customer behavior, optimize operations, and make data-driven decisions.',
    features: [
      'Real-time Data Processing',
      'Advanced Visualization',
      'Predictive Analytics',
      'Custom Dashboard Creation',
      'Data Integration & Cleansing',
      'Machine Learning Models'
    ],
    benefits: [
      'Data-driven decision making',
      'Identify new revenue opportunities',
      'Optimize resource allocation',
      'Reduce operational costs',
      'Competitive advantage',
      'Faster insights generation'
    ],
    icon: <Zap className="text-primary" size={32} />,
    color: 'from-orange-500 to-yellow-500'
  },
  'security-solutions': {
    id: 'security-solutions',
    title: 'Security Solutions',
    category: 'Cybersecurity',
    description: 'Protect your enterprise with advanced security solutions.',
    longDescription: 'Comprehensive cybersecurity solutions designed to protect your enterprise from evolving threats. From network security to application protection, we ensure your business stays secure.',
    features: [
      '24/7 Security Monitoring',
      'Threat Detection & Response',
      'Vulnerability Assessment',
      'Penetration Testing',
      'Compliance Management',
      'Security Awareness Training'
    ],
    benefits: [
      'Reduced security incidents',
      'Compliance with regulations',
      'Minimal downtime',
      'Peace of mind',
      'Data protection',
      'Risk mitigation'
    ],
    icon: <Shield className="text-primary" size={32} />,
    color: 'from-red-500 to-pink-500'
  },
  'mobile-development': {
    id: 'mobile-development',
    title: 'Mobile Development',
    category: 'Mobile Apps',
    description: 'Native and cross-platform mobile apps for your business.',
    longDescription: 'Develop powerful mobile applications that engage users and drive business growth. Our team specializes in iOS, Android, and cross-platform solutions with cutting-edge technologies.',
    features: [
      'Native iOS & Android Development',
      'Cross-platform Solutions',
      'App Store Optimization',
      'User Experience Design',
      'Integration with Backend Systems',
      'Ongoing Support & Maintenance'
    ],
    benefits: [
      'Reach customers on mobile',
      'High user engagement',
      'Improved customer loyalty',
      'Additional revenue stream',
      'Direct customer communication',
      'Competitive advantage'
    ],
    icon: <Rocket className="text-primary" size={32} />,
    color: 'from-green-500 to-teal-500'
  },
  'web-development': {
    id: 'web-development',
    title: 'Web Development',
    category: 'Web Services',
    description: 'Modern, responsive web applications for every need.',
    longDescription: 'Create stunning, high-performance web applications that convert visitors into customers. Our expert developers build scalable, secure web solutions using the latest technologies.',
    features: [
      'Responsive Design',
      'Fast Loading Times',
      'SEO Optimization',
      'User-Centric Design',
      'Advanced Security',
      'Scalable Architecture'
    ],
    benefits: [
      'Increased online visibility',
      'Better user experience',
      'Higher conversion rates',
      'Mobile-friendly presence',
      'Improved SEO rankings',
      'Easy maintenance'
    ],
    icon: <Code className="text-primary" size={32} />,
    color: 'from-indigo-500 to-blue-500'
  },
  'videography-media': {
    id: 'videography-media',
    title: 'Videography & Media',
    category: 'Multimedia',
    description: 'Professional video production and media services.',
    longDescription: 'Tell your brand story through professional videography and multimedia content. From corporate videos to marketing campaigns, we create engaging content that resonates with your audience.',
    features: [
      'Professional Video Production',
      'Corporate Video Creation',
      'Marketing Content Production',
      'Animation & Motion Graphics',
      'Audio Production',
      'Post-production & Editing'
    ],
    benefits: [
      'Increased brand awareness',
      'Higher engagement rates',
      'Professional brand image',
      'Improved conversion rates',
      'Social media optimized content',
      'Memorable storytelling'
    ],
    icon: <Video className="text-primary" size={32} />,
    color: 'from-violet-500 to-purple-500'
  },
  'internet-services': {
    id: 'internet-services',
    title: 'Internet Services',
    category: 'Web Services',
    description: 'Complete web hosting and digital services.',
    longDescription: 'Reliable internet and web hosting services designed for enterprise needs. Fast, secure, and scalable solutions to keep your business online.',
    features: [
      'Managed Web Hosting',
      'Domain Registration & Management',
      'SSL Certificates',
      'Email Hosting',
      'Content Delivery Network',
      'Backup & Recovery'
    ],
    benefits: [
      '99.99% uptime guarantee',
      'Fast website loading',
      'Enhanced security',
      'Professional email service',
      'Global reach',
      'Expert support'
    ],
    icon: <Globe className="text-primary" size={32} />,
    color: 'from-cyan-500 to-blue-500'
  }
}

export default function IdeaDetailPage() {
  const params = useParams()
  const ideaId = params.id as string
  const idea = ideasData[ideaId]

  if (!idea) {
    return (
      <div className="min-h-screen bg-black">
        <nav className="fixed w-full top-0 z-50 glass-effect border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
            <Link href="/">
              <span className="text-xl font-bold text-white hover:text-primary transition-colors">KIRULABS</span>
            </Link>
          </div>
        </nav>
        <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl font-bold mb-4">Idea Not Found</h1>
            <p className="text-foreground/70 mb-8">The idea you&apos;re looking for doesn&apos;t exist.</p>
            <Link href="/ideas">
              <Button variant="default">Back to Ideas</Button>
            </Link>
          </div>
        </section>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black">
      {/* Navigation */}
      <nav className="fixed w-full top-0 z-50 glass-effect border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/">
            <span className="text-xl font-bold text-white hover:text-primary transition-colors">KIRULABS</span>
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/ideas">
              <Button variant="glass" size="sm">Back to Ideas</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute top-20 right-10 w-48 sm:w-72 h-48 sm:h-72 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-20 left-10 w-64 sm:w-96 h-64 sm:h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="glass-card space-y-6 p-6 sm:p-8 md:p-10">
            <div className="flex items-center gap-4">
              {idea.icon}
              <div className="flex-1">
                <div className="inline-block px-3 py-1 rounded-full bg-primary/20 text-primary text-xs sm:text-sm font-medium mb-2">
                  {idea.category}
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">{idea.title}</h1>
              </div>
            </div>
            <p className="text-base sm:text-lg text-foreground/70 leading-relaxed">{idea.longDescription}</p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8">Key Features</h2>
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            {idea.features.map((feature, index) => (
              <div key={index} className="glass-card p-4 sm:p-5 flex items-start gap-4 hover:border-primary/50 smooth-all">
                <CheckCircle className="text-primary flex-shrink-0 mt-1" size={20} />
                <p className="text-sm sm:text-base text-foreground">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8">Benefits</h2>
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            {idea.benefits.map((benefit, index) => (
              <div key={index} className="glass-card p-4 sm:p-5 flex items-start gap-4 hover:border-primary/50 smooth-all">
                <CheckCircle className="text-primary flex-shrink-0 mt-1" size={20} />
                <p className="text-sm sm:text-base text-foreground">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="glass-card text-center space-y-6 p-8 sm:p-12 border-primary/30 hover:border-primary/60 smooth-all hover:glow-effect">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Interested in This Solution?</h2>
            <p className="text-sm sm:text-base md:text-lg text-foreground/70 max-w-2xl mx-auto">
              Let&apos;s discuss how {idea.title} can transform your business. Click below to get started with a pre-selected service option.
            </p>
            <div className="pt-4">
              <Link href={`/get-started?idea=${encodeURIComponent(idea.title)}`}>
                <Button variant="default" size="lg" className="gap-2">
                  I&apos;m Interested
                  <ArrowRight size={20} />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
