import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import DiagonalDivider from '@/components/DiagonalDivider';
import ClientLogoMarquee from '@/components/ClientLogoMarquee';
import { BreadcrumbSchema, PersonSchema } from '@/components/SchemaMarkup';
import {
  CheckCircle2,
  Cpu,
  FileCheck2,
  MapPin,
  Rocket,
  Shield,
  ShieldCheck,
  Target,
  Users,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'About HireDronePilot | Peter Leslie, Founder',
  description:
    'Learn how Peter Leslie built HireDronePilot to help UK clients compare independent drone pilot quotes faster, with stronger compliance and no platform cut on drone pilot pricing.',
  keywords: [
    'About HireDronePilot',
    'Peter Leslie drone pilot',
    'UK drone pilot marketplace',
    'CAA drone credentials',
    'Compare drone pilot quotes',
  ],
  openGraph: {
    title: 'About HireDronePilot',
    description:
      'Founder story, mission, and verified credentials behind HireDronePilot.',
    type: 'website',
  },
};

const stats = [
  { value: 'UK Wide', label: 'Drone Pilot Coverage' },
  { value: 'CAA Vetted', label: 'Drone Pilot Standards' },
  { value: 'Avg 5 Mins', label: 'Response Speed' },
  { value: 'No Platform Cut', label: 'Direct Drone Pilot Pricing' },
];

const problemPoints = [
  {
    icon: Target,
    title: 'Manual Outreach Slows Projects',
    description:
      'Most clients still email or call operators one by one, burning time before they even receive comparable quotes.',
  },
  {
    icon: Cpu,
    title: 'Inconsistent Drone Pilot Quality',
    description:
      'Many listings hide credential gaps and capability gaps, making it risky to choose purely on price.',
  },
  {
    icon: FileCheck2,
    title: 'Compliance Gets Left Too Late',
    description:
      'Insurance, certification, and operating readiness are often checked after shortlisting, not before.',
  },
];

const solutionPoints = [
  {
    title: 'One Brief, Multiple Quotes',
    description:
      'Submit your project once and compare direct quotes from independent drone pilots.',
  },
  {
    title: 'Basic Document Checks',
    description:
      'Onboarding includes basic document checks on submitted certification and insurance fields.',
  },
  {
    title: 'Transparent Quote Comparison',
    description:
      'Review availability, capability, and pricing side-by-side before committing.',
  },
  {
    title: 'No Platform Cut Added',
    description:
      'You compare direct drone pilot pricing so more of your budget goes to delivery.',
  },
];

const credentialCards = [
  {
    badge: 'Peter Leslie - GVC',
    title: 'CAA Operational Authorisation (GVC)',
    image: '/images/licences/gvc-licence-full.webp',
    alt: 'Peter Leslie CAA GVC certificate',
    bullets: [
      'Formal assessment for commercial drone operations in UK airspace.',
      'Supports structured risk assessment and mission planning standards.',
      'Sets the benchmark used to assess drone pilots on HireDronePilot.',
    ],
    bgClass: 'bg-orange-50/70 border-orange-200',
    iconClass: 'text-orange-500',
  },
  {
    badge: 'Peter Leslie - A2 CofC',
    title: 'A2 Certificate of Competency',
    image: '/images/licences/drone-a2-cofc-full.webp',
    alt: 'Peter Leslie A2 CofC certificate',
    bullets: [
      'Supports closer-proximity work with clear operational boundaries.',
      'Important for urban and built-environment drone project delivery.',
      'Reinforces practical compliance standards across the drone pilot network.',
    ],
    bgClass: 'bg-blue-50/70 border-blue-200',
    iconClass: 'text-blue-500',
  },
  {
    badge: 'Peter Leslie - Flyer ID',
    title: 'CAA Flyer ID (A1 & A3 Categories)',
    image: '/images/licences/flyer-id-a1-a3-full.webp',
    alt: 'Peter Leslie Flyer ID certificate',
    bullets: [
      'Demonstrates active registration and operator accountability.',
      'Supports traceability for aircraft operation and compliance records.',
      'Part of the credibility stack behind HireDronePilot vetting.',
    ],
    bgClass: 'bg-emerald-50/70 border-emerald-200',
    iconClass: 'text-emerald-500',
  },
];

export default function AboutPage() {
  return (
    <>
      <PersonSchema />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://hiredronepilot.uk' },
          { name: 'About', url: 'https://hiredronepilot.uk/about' },
        ]}
      />

      <section className="relative min-h-[800px] md:min-h-[600px] flex items-start overflow-hidden bg-teal -mt-[120px] pt-[120px]">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-teal-dark via-teal-dark/90 via-40% to-teal-dark/40 z-10" />
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat hidden md:block"
            style={{ backgroundImage: 'url(/images/hero-desktop.avif)' }}
          />
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat md:hidden"
            style={{ backgroundImage: 'url(/images/hero-mobile.avif)' }}
          />
        </div>

        <div className="absolute inset-0 z-5 opacity-5 pointer-events-none overflow-hidden">
          <div className="absolute top-20 right-0 text-[210px] font-bold text-white leading-none">
            HDP
          </div>
        </div>

        <div className="container relative z-20 py-16 lg:py-24">
          <div className="max-w-2xl mt-8 md:mt-0">
            <p className="text-gold font-semibold uppercase tracking-wider mb-4 text-sm md:text-base">
              About HireDronePilot
            </p>
            <h1 className="text-4xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
              Built By A Drone Pilot. <span className="text-gold">Designed For Better Hiring.</span>
            </h1>
            <p className="text-white/80 text-lg md:text-xl mb-8 leading-relaxed">
              Peter Leslie created HireDronePilot so UK clients can stop chasing operators manually
              and start comparing independent drone pilot quotes in one place. Faster outreach, stronger
              compliance, and direct pricing with no platform cut added.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn btn-primary btn-shimmer">
                Compare Quotes
              </Link>
              <a
                href="https://www.linkedin.com/in/peter-leslie-drones"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-white"
              >
                Meet Peter
              </a>
            </div>
            <p className="mt-4 text-white/70 text-sm flex items-center gap-2">
              <svg className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                  clipRule="evenodd"
                />
              </svg>
              Avg Response within 5 Mins • Or call{' '}
              <a href="tel:+441334804554" className="text-gold hover:underline font-medium">
                +44 1334 804554
              </a>
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-16 md:h-20 z-30">
          <svg
            className="absolute bottom-0 w-full h-16 md:h-20"
            viewBox="0 0 1440 80"
            preserveAspectRatio="none"
            fill="white"
          >
            <path d="M0,80 L1440,80 L1440,0 L0,80 Z" />
          </svg>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden shadow-2xl border-4 border-gold/30">
                  <Image
                    src="/images/peter_leslie.webp"
                    alt="Peter Leslie, founder of HireDronePilot"
                    width={384}
                    height={384}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gold rounded-lg flex items-center justify-center">
                      <Shield className="w-6 h-6 text-teal-dark" />
                    </div>
                    <div>
                      <p className="text-teal font-bold text-lg">Founder Led</p>
                      <p className="text-text-secondary text-sm">CAA Qualified Operator</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <p className="text-gold font-semibold uppercase tracking-wider mb-3 text-sm">
                Peter&apos;s Story
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-teal mb-6 leading-tight">
                Why HireDronePilot Exists
              </h2>
              <div className="space-y-4 text-text-secondary text-lg mb-8">
                <p>
                  HireDronePilot was started by <strong className="text-teal">Peter Leslie</strong>{' '}
                  after seeing how difficult it was for businesses to reliably source professional
                  drone operators. Clients were spending too much time on manual outreach with no
                  consistent way to compare credentials and quotes.
                </p>
                <p>
                  Instead of running another generic directory, Peter built a quote-first platform
                  that helps clients post once and compare independent drone pilot responses quickly.
                  This improves speed, clarity, and quality control from the start.
                </p>
                <p>
                  The company goal is to become the UK&apos;s most trusted way to hire compliant
                  drone pilots for surveys, inspections, and specialist aerial deliverables.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-2 bg-teal/10 text-teal px-4 py-2 rounded-full text-sm font-medium">
                  <Shield className="w-4 h-4" />
                  Owner & Drone Pilot
                </span>
                <span className="inline-flex items-center gap-2 bg-teal/10 text-teal px-4 py-2 rounded-full text-sm font-medium">
                  <Shield className="w-4 h-4" />
                  CAA GVC Certified
                </span>
                <span className="inline-flex items-center gap-2 bg-teal/10 text-teal px-4 py-2 rounded-full text-sm font-medium">
                  <Shield className="w-4 h-4" />
                  UK Marketplace Builder
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ClientLogoMarquee />

      <section className="section bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <p className="text-gold font-semibold uppercase tracking-wider mb-3 text-sm">
              The Problem We Fixed
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-teal mb-4">
              Hiring Drone Pilots Was Slow, Fragmented, and Unclear
            </h2>
            <p className="text-text-secondary text-lg max-w-3xl mx-auto">
              HireDronePilot was built to remove friction from the buying side while protecting
              standards on the delivery side.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {problemPoints.map((point) => (
              <div key={point.title} className="bg-red-50 border border-red-200 rounded-xl p-6">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <point.icon className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-red-900 font-bold text-lg mb-2">{point.title}</h3>
                <p className="text-red-700/80 text-sm">{point.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-teal rounded-2xl p-8 md:p-12">
            <div className="text-center mb-10">
              <p className="text-gold font-semibold uppercase tracking-wider mb-3 text-sm">
                Our Solution
              </p>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                One Form. Independent Drone Pilots. Better Quote Decisions.
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {solutionPoints.map((point) => (
                <div key={point.title} className="text-center">
                  <div className="w-12 h-12 bg-gold/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-6 h-6 text-gold" />
                  </div>
                  <h4 className="text-white font-bold mb-2">{point.title}</h4>
                  <p className="text-white/70 text-sm">{point.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <DiagonalDivider fromColor="white" toColor="background-alt" />

      <section className="section bg-background-alt">
        <div className="container max-w-6xl">
          <div className="text-center mb-12">
            <p className="text-gold font-semibold uppercase tracking-wider mb-3 text-sm">
              Trusted & Certified
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-teal mb-4">
              Verified Credentials Behind The Platform
            </h2>
            <p className="text-text-secondary text-lg max-w-3xl mx-auto">
              These licences and registrations are held by Peter Leslie and shape the compliance
              standards used to vet drone pilots on HireDronePilot.
            </p>
          </div>

          <div className="bg-white border border-border rounded-2xl p-8 mb-10">
            <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-8 items-center">
              <div className="relative w-full max-w-[200px] mx-auto">
                <Image
                  src="/images/licences/Civil_Aviation_Authority_logo.avif"
                  alt="Civil Aviation Authority logo"
                  width={200}
                  height={200}
                  className="w-full h-auto object-contain"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-teal mb-3">
                  Civil Aviation Authority Aligned Operations
                </h3>
                <p className="text-text-secondary">
                  HireDronePilot is built around CAA compliance and operational accountability.
                  Credentials are not treated as marketing badges, they are part of how projects
                  are evaluated and how basic onboarding documents are reviewed before profiles
                  appear to clients.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            {credentialCards.map((credential) => (
              <article key={credential.title} className="bg-white border border-border rounded-2xl p-6 md:p-8">
                <div className="grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-8 items-start">
                  <div className="rounded-xl border border-border bg-white p-4">
                    <Image
                      src={credential.image}
                      alt={credential.alt}
                      width={1200}
                      height={850}
                      className="w-full h-auto object-contain rounded-lg"
                    />
                  </div>
                  <div>
                    <p className="text-sm text-gold font-semibold uppercase tracking-wider mb-2">
                      {credential.badge}
                    </p>
                    <h3 className="text-2xl font-bold text-teal mb-5">{credential.title}</h3>
                    <div className="grid grid-cols-1 gap-3">
                      {credential.bullets.map((item) => (
                        <div
                          key={item}
                          className={`flex items-start gap-3 rounded-xl border p-4 text-sm text-text-secondary ${credential.bgClass}`}
                        >
                          <ShieldCheck className={`w-5 h-5 mt-0.5 ${credential.iconClass}`} />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <DiagonalDivider fromColor="background-alt" toColor="teal-dark" />

      <section className="section bg-teal-dark">
        <div className="container">
          <div className="text-center mb-12">
            <p className="text-gold font-semibold uppercase tracking-wider mb-3 text-sm">
              Our Track Record
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Marketplace Principles, Proven in Real Projects
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-gold mb-2">{stat.value}</p>
                <p className="text-white/70 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-teal relative overflow-hidden">
        <div className="container relative z-10">
          <div className="text-center mb-12">
            <p className="text-gold font-semibold uppercase tracking-wider mb-3">
              Memberships
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Connected to UK Business & Drone Industry Bodies
            </h2>
            <p className="text-white/70 text-lg max-w-3xl mx-auto">
              HireDronePilot stays active in both local business communities and UK drone industry
              groups to keep standards practical, current, and commercially relevant.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-white/20 bg-white/5 p-6">
              <div className="flex items-center gap-3 mb-4">
                <Image
                  src="/images/licences/fpvuk-membership.webp"
                  alt="FPV UK membership"
                  width={180}
                  height={70}
                  className="h-12 w-auto object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">FPV UK Membership</h3>
              <p className="text-white/75 text-sm">
                Supports ongoing best-practice awareness and responsible operational standards.
              </p>
            </div>

            <div className="rounded-2xl border border-white/20 bg-white/5 p-6">
              <div className="mb-4">
                <Image
                  src="/images/licences/dundee-chamber-commerce-logo.avif"
                  alt="Dundee and Angus Chamber of Commerce logo"
                  width={90}
                  height={90}
                  className="h-14 w-auto object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Dundee & Angus Chamber of Commerce
              </h3>
              <p className="text-white/75 text-sm">
                Keeps HireDronePilot connected to local and regional business needs across Scotland
                and the wider UK.
              </p>
            </div>

            <div className="rounded-2xl border border-white/20 bg-white/5 p-6">
              <div className="mb-4">
                <Image
                  src="/images/licences/arpas-uk-drone-association-logo.avif"
                  alt="ARPAS-UK logo"
                  width={120}
                  height={90}
                  className="h-14 w-auto object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">ARPAS-UK Member</h3>
              <p className="text-white/75 text-sm">
                Aligns the platform with recognised UK drone-industry safety and operational
                frameworks.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container max-w-4xl text-center">
          <p className="text-gold font-semibold uppercase tracking-wider mb-3 text-sm">
            Get Started
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-teal mb-4">
            Compare independent drone pilot Quotes For Your Project
          </h2>
          <p className="text-text-secondary text-lg mb-8">
            Post your project brief once and receive direct quotes from professional drone pilots
            across the UK.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn btn-primary">
              Compare Quotes
            </Link>
            <a href="mailto:peter@certifieddronepilot.com" className="btn btn-outline">
              Email Peter Directly
            </a>
          </div>
          <div className="mt-6 flex items-center justify-center gap-2 text-sm text-text-secondary">
            <MapPin className="w-4 h-4 text-gold" />
            Castlecroft Business Centre, Tom Johnston Road, Dundee DD4 8XD
          </div>
          <div className="mt-4 flex flex-wrap gap-4 justify-center text-xs text-text-secondary">
            <span className="inline-flex items-center gap-1">
              <CheckCircle2 className="w-4 h-4 text-gold" />
              CAA-aligned standards
            </span>
            <span className="inline-flex items-center gap-1">
              <Users className="w-4 h-4 text-gold" />
              independent drone pilot network
            </span>
            <span className="inline-flex items-center gap-1">
              <Rocket className="w-4 h-4 text-gold" />
              Faster quote comparison
            </span>
          </div>
        </div>
      </section>
    </>
  );
}
