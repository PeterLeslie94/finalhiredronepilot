import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import QuoteButton from '@/components/QuoteButton';
import Testimonials from '@/components/Testimonials';
import FloatingCTA from '@/components/FloatingCTA';
import EquipmentSection from '@/components/EquipmentSection';
import { Building2, HardHat, Factory, Warehouse, Home, Landmark, FileCheck, ClipboardCheck } from 'lucide-react';
import { ServiceSchema, BreadcrumbSchema } from '@/components/SchemaMarkup';
import { ClientLogoMarqueeInline } from '@/components/ClientLogoMarquee';

export const metadata: Metadata = {
  title: 'UAV As-Built Survey Solutions | As-Built Surveys UK | Hire Drone Pilot',
  description: 'Expert UAV as-built survey solutions throughout the UK. Compare completed construction to design plans with precision drone survey data. CAA authorised drone operators.',
  keywords: 'drone as-built survey, drone as-built uk, drone as-built mapping, drone construction verification survey, drone BIM comparison survey, drone completion survey',
};

export default function DroneAsBuiltSurveyPage() {
  return (
    <>
      <ServiceSchema
        name="UAV As-Built Survey Solutions"
        description="Expert UAV as-built survey solutions throughout the UK. Compare completed construction to design plans with precision drone survey data. CAA authorised drone operators."
        url="https://hiredronepilot.uk/services/drone-as-built-survey"
      />
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://hiredronepilot.uk" },
        { name: "Services", url: "https://hiredronepilot.uk/services" },
        { name: "UAV As-Built Survey Solutions", url: "https://hiredronepilot.uk/services/drone-as-built-survey" }
      ]} />
      {/* Hero Section */}
      <section className="relative min-h-[800px] md:min-h-[600px] flex items-start bg-teal -mt-[120px] pt-[120px] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/services/as-built/as-built-hero.avif"
            alt="Drone view of completed UK construction project for as-built survey"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-teal-dark via-teal-dark/90 via-40% to-teal-dark/40 z-10" />
        </div>
        <div className="container pt-8 pb-52 lg:pb-40 lg:pt-12 relative z-10">
          <div className="max-w-3xl">
            <p className="text-gold font-semibold uppercase tracking-wider mb-3">
              Construction Verification
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Drone As-Built Survey Service
            </h1>
            <p className="text-white/80 text-lg md:text-xl mb-8">
              Precision drone surveys documenting completed construction, verifying as-built conditions against design specifications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <QuoteButton className="btn btn-primary">
                Compare Quotes
              </QuoteButton>
              <Link href="/services" className="btn btn-outline-white">
                Browse Services
              </Link>
            </div>
            <p className="mt-4 text-white/70 text-sm flex items-center gap-2">
              <svg className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
              Avg Response within 5 Mins • Or phone{' '}
              <a href="tel:+441334804554" className="text-gold hover:underline font-medium">
                +44 1334 804554
              </a>
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20">
          <svg
            className="absolute bottom-0 w-full h-20"
            viewBox="0 0 1440 80"
            preserveAspectRatio="none"
            fill="white"
          >
            <path d="M0,80 L1440,80 L1440,0 L0,80 Z" />
          </svg>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">

              {/* Understanding UAV As-Built Surveys */}
              <div>
                <h2 id="what-is-as-built" className="text-2xl md:text-3xl font-bold text-teal mb-4 scroll-mt-32">
                  Understanding <span className="text-gold">Drone As-Built Surveys</span>
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed mb-4">
                  A UAV as-built survey captures the precise dimensions, positions, and conditions of completed construction works using drone photogrammetry and survey-grade GPS technology. It creates an accurate record of what was actually built, rather than what was planned, providing essential documentation for handover, compliance, and future reference.
                </p>
                <p className="text-text-secondary text-lg leading-relaxed">
                  At Hire Drone Pilot, we deploy the latest drone technology to capture comprehensive as-built data quickly and accurately. Our surveys document everything from building positions and levels to infrastructure layouts and landscaping, delivering the precise measurements needed to verify construction against approved designs.
                </p>

                {/* Conversion CTA Box */}
                <div className="mt-8 bg-teal rounded-2xl p-6 md:p-8 overflow-hidden">
                  {/* Personal Header */}
                  <div className="flex flex-col md:flex-row md:items-start gap-6 mb-6 pb-6 border-b border-white/10">
                    {/* Left: Profile */}
                    <div className="flex items-start gap-4">
                      {/* Profile Photo */}
                      <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-gold/30 flex-shrink-0 overflow-hidden">
                        <Image
                          src="/images/peter_leslie.webp"
                          alt="Peter Leslie - Owner & Drone Pilot"
                          width={80}
                          height={80}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="text-white font-bold text-lg">Peter Leslie</h4>
                        <p className="text-gold text-sm font-medium">Owner & Drone Pilot</p>
                        <p className="text-white/70 text-sm italic mt-2 max-w-xs">
                          "Have questions? Ring me directly - I'm happy to discuss your project requirements."
                        </p>
                        <a
                          href="tel:+441334804554"
                          className="inline-flex items-center gap-2 mt-3 text-gold hover:text-white transition-colors text-sm font-semibold"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                          Call Now
                        </a>
                      </div>
                    </div>
                    {/* Right: Headline */}
                    <div className="md:ml-auto md:text-right">
                      <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight">
                        Precise As-Built Records,
                        <span className="text-gold block relative inline-block">
                          Delivered Rapidly
                          <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 200 8" preserveAspectRatio="none">
                            <path
                              d="M0,4 Q25,0 50,4 T100,4 T150,4 T200,4"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                            />
                          </svg>
                        </span>
                      </h3>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Left: What you get */}
                    <div>
                      <h3 className="text-gold font-bold text-sm uppercase tracking-wider mb-3">
                        What You'll Receive
                      </h3>
                      <ul className="space-y-2.5">
                        {[
                          'Georeferenced orthomosaic',
                          'As-built CAD drawings',
                          'BIM comparison reports',
                          'Survey-grade precision (±2-3cm)',
                        ].map((item, index) => (
                          <li key={index} className="flex items-start gap-2 text-white/90">
                            <svg className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                      <p className="text-gold font-semibold mt-4">
                        Ready in 3-5 working days
                      </p>
                    </div>

                    {/* Right: Why choose us */}
                    <div>
                      <h3 className="text-gold font-bold text-sm uppercase tracking-wider mb-3">
                        Why Use HireDronePilot
                      </h3>
                      <ul className="space-y-2.5">
                        {[
                          'CAA authorised & fully insured',
                          'Construction survey specialists',
                          'Latest DJI & RTK technology',
                          'UK-wide coverage',
                        ].map((item, index) => (
                          <li key={index} className="flex items-start gap-2 text-white/90">
                            <svg className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                      <p className="text-white/70 text-sm mt-4 flex items-start gap-2">
                        <svg className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/>
                        </svg>
                        <span>Relied upon by contractors, developers & local authorities throughout the UK.</span>
                      </p>
                    </div>
                  </div>

                  {/* CTA Buttons */}
                  <div className="mt-8 pt-6 border-t border-white/10">
                    {/* Standing by badge */}
                    <div className="flex items-center gap-2 mb-4">
                      <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                      </span>
                      <span className="text-white/90 text-sm font-medium">Ready to help — avg response within 5 mins</span>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <a
                        href="tel:+441334804554"
                        className="flex items-center justify-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white font-semibold transition-colors"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        +44 1334 804554
                      </a>
                      <QuoteButton className="btn btn-primary btn-shimmer flex-1 sm:flex-none">
                        Compare Quotes
                      </QuoteButton>
                    </div>
                  </div>

                  {/* Client Logo Marquee */}
                  <div className="mt-6 pt-6 border-t border-white/10">
                    <p className="text-white/50 text-xs uppercase tracking-wider text-center mb-4">Relied upon by leading organisations</p>
                    <ClientLogoMarqueeInline />
                  </div>
                </div>
              </div>

              {/* UAV As-Built Survey Pricing Guide */}
              <div>
                <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-6">
                  <Image
                    src="/images/services/as-built/as-built-cost.avif"
                    alt="Surveyor reviewing UAV as-built survey data on tablet at completed construction site"
                    fill
                    className="object-cover"
                  />
                </div>
                <h2 id="as-built-cost" className="text-2xl md:text-3xl font-bold text-teal mb-4 scroll-mt-32">
                  <span className="text-gold">Drone As-Built Survey</span> Pricing Guide
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed mb-6">
                  Pricing depends on your project scope. Here is a guide to help you budget:
                </p>

                {/* Pricing Table */}
                <div className="rounded-xl overflow-hidden border border-border mb-6">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-teal">
                        <th className="text-left text-white font-semibold py-3 px-4">Project Size</th>
                        <th className="text-left text-white font-semibold py-3 px-4">Guide Price</th>
                        <th className="text-left text-white font-semibold py-3 px-4 hidden md:table-cell">Typical Applications</th>
                        <th className="text-left text-white font-semibold py-3 px-4 hidden lg:table-cell">Deliverables</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-white">
                        <td className="py-3 px-4 text-text-primary font-medium">Small<span className="block text-sm text-text-secondary font-normal">Single building</span></td>
                        <td className="py-3 px-4 text-gold font-bold">£500+</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden md:table-cell">Individual houses, extensions, small commercial units</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden lg:table-cell">Orthomosaic, as-built drawings</td>
                      </tr>
                      <tr className="bg-background-alt">
                        <td className="py-3 px-4 text-text-primary font-medium">Medium<span className="block text-sm text-text-secondary font-normal">Small development</span></td>
                        <td className="py-3 px-4 text-gold font-bold">£900+</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden md:table-cell">Housing plots (5-15 units), industrial units, schools</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden lg:table-cell">Full survey + BIM comparison</td>
                      </tr>
                      <tr className="bg-white">
                        <td className="py-3 px-4 text-text-primary font-medium">Large<span className="block text-sm text-text-secondary font-normal">Medium development</span></td>
                        <td className="py-3 px-4 text-gold font-bold">£1,500+</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden md:table-cell">Housing estates (15-50 units), retail parks, warehouses</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden lg:table-cell">Complete deliverable suite</td>
                      </tr>
                      <tr className="bg-background-alt">
                        <td className="py-3 px-4 text-text-primary font-medium">Major Development<span className="block text-sm text-text-secondary font-normal">Large scheme</span></td>
                        <td className="py-3 px-4 text-gold font-bold">£2,500+</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden md:table-cell">Major residential, commercial, or mixed-use developments</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden lg:table-cell">Custom package + reporting</td>
                      </tr>
                      <tr className="bg-white">
                        <td className="py-3 px-4 text-text-primary font-medium">Multi-Phase<span className="block text-sm text-text-secondary font-normal">Phased projects</span></td>
                        <td className="py-3 px-4 text-gold font-bold">POA</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden md:table-cell">Staged construction, multiple site visits, ongoing documentation</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden lg:table-cell">Bespoke scope & scheduling</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-text-secondary text-sm mb-6 italic">
                  *Guide prices include standard deliverables. Final quote based on site complexity, access, and specific requirements.
                </p>

                {/* What influences your quotation */}
                <h3 className="font-bold text-teal mb-3">What influences your quotation?</h3>
                <ul className="grid grid-cols-2 gap-2 mb-6">
                  {['Project size & complexity', 'Required deliverables', 'BIM comparison needs', 'Turnaround time'].map((factor, index) => (
                    <li key={index} className="flex items-center gap-2 text-text-secondary">
                      <svg className="w-4 h-4 text-gold flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm">{factor}</span>
                    </li>
                  ))}
                </ul>

                <p className="text-text-secondary leading-relaxed mb-6">
                  Our drone approach typically saves <span className="text-gold font-semibold">50-70%</span> compared to conventional ground surveys while delivering faster turnaround. Contact us with your project details and we will provide a tailored quote within 24 hours.
                </p>

                {/* CTA Banner */}
                <div className="bg-teal rounded-xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-center sm:text-left">
                    <p className="text-white font-semibold">Ready to receive a quote for your project?</p>
                    <p className="text-white/70 text-sm">Free, no-obligation quotes within 24 hours</p>
                  </div>
                  <div className="flex gap-3">
                    <a href="tel:+441334804554" className="flex items-center gap-2 px-4 py-2.5 rounded-full border border-white/30 text-white hover:bg-white/10 transition-colors text-sm font-medium">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      Phone
                    </a>
                    <QuoteButton className="px-5 py-2.5 rounded-full bg-gold text-teal-dark font-semibold hover:bg-gold/90 transition-colors text-sm btn-shimmer">
                      Compare Quotes
                    </QuoteButton>
                  </div>
                </div>
              </div>

              {/* Comparing UAV As-Built Survey and Conventional Methods */}
              <div>
                <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-6">
                  <Image
                    src="/images/services/as-built/as-built-comparison.avif"
                    alt="Comparison of UAV as-built survey data with original design drawings"
                    fill
                    className="object-cover"
                  />
                </div>
                <h2 id="as-built-vs-traditional" className="text-2xl md:text-3xl font-bold text-teal mb-4 scroll-mt-32">
                  Comparing <span className="text-gold">Drone As-Built Survey</span> and Conventional Methods
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed mb-4">
                  Conventional as-built surveys rely on ground-based total stations and manual measurements, requiring surveyors to physically access every point on site. This approach is time-consuming, labour-intensive, and often requires scaffolding or access equipment for elevated features.
                </p>
                <p className="text-text-secondary text-lg leading-relaxed mb-4">
                  UAV as-built surveys capture thousands of measurements in a single flight, creating comprehensive 3D models and orthomosaics that document the entire site from above. This drone perspective ensures nothing is missed, while RTK-enabled GPS delivers survey-grade precision without ground control points for most applications.
                </p>
                {/* Technology Comparison Cards */}
                <div className="mt-8">
                  <h3 className="text-center font-bold text-teal text-xl mb-6">When to Select Each Approach</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {/* UAV Card */}
                    <div className="relative bg-teal rounded-2xl p-6 overflow-hidden group hover:shadow-xl transition-shadow duration-300">
                      {/* Decorative element */}
                      <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                        <svg viewBox="0 0 100 100" className="w-full h-full">
                          <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="1" fill="none" className="text-gold" />
                          <circle cx="50" cy="50" r="25" stroke="currentColor" strokeWidth="1" fill="none" className="text-gold" />
                          <circle cx="50" cy="50" r="10" stroke="currentColor" strokeWidth="1" fill="none" className="text-gold" />
                        </svg>
                      </div>
                      <div className="relative z-10">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-12 h-12 bg-gold/20 rounded-xl flex items-center justify-center">
                            <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                            </svg>
                          </div>
                          <div>
                            <h4 className="text-white font-bold text-lg">Opt for UAV As-Built</h4>
                            <p className="text-gold text-sm font-medium">Speed & coverage</p>
                          </div>
                        </div>
                        <div className="space-y-3">
                          {[
                            { Icon: Building2, text: 'Large developments' },
                            { Icon: HardHat, text: 'Active construction sites' },
                            { Icon: Factory, text: 'Industrial complexes' },
                            { Icon: Warehouse, text: 'Infrastructure projects' },
                          ].map((item, i) => (
                            <div key={i} className="flex items-center gap-3 bg-white/10 rounded-lg px-4 py-2.5">
                              <item.Icon className="w-5 h-5 text-gold flex-shrink-0" strokeWidth={1.5} />
                              <span className="text-white/90 font-medium">{item.text}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Traditional Card */}
                    <div className="relative bg-white border-2 border-border rounded-2xl p-6 overflow-hidden group hover:border-gold hover:shadow-xl transition-all duration-300">
                      {/* Decorative element */}
                      <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
                        <svg viewBox="0 0 100 100" className="w-full h-full">
                          <line x1="50" y1="10" x2="50" y2="90" stroke="currentColor" strokeWidth="2" className="text-teal" />
                          <line x1="10" y1="50" x2="90" y2="50" stroke="currentColor" strokeWidth="2" className="text-teal" />
                          <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="1" fill="none" className="text-teal" />
                        </svg>
                      </div>
                      <div className="relative z-10">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-12 h-12 bg-teal/10 rounded-xl flex items-center justify-center">
                            <svg className="w-6 h-6 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                            </svg>
                          </div>
                          <div>
                            <h4 className="text-teal font-bold text-lg">Opt for Conventional</h4>
                            <p className="text-text-secondary text-sm font-medium">Internal & detail work</p>
                          </div>
                        </div>
                        <div className="space-y-3">
                          {[
                            { Icon: Home, text: 'Interior surveys' },
                            { Icon: Landmark, text: 'Listed buildings' },
                            { Icon: FileCheck, text: 'Underground services' },
                            { Icon: ClipboardCheck, text: 'Specific point data' },
                          ].map((item, i) => (
                            <div key={i} className="flex items-center gap-3 bg-background-alt rounded-lg px-4 py-2.5">
                              <item.Icon className="w-5 h-5 text-teal flex-shrink-0" strokeWidth={1.5} />
                              <span className="text-text-primary font-medium">{item.text}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Not sure? CTA */}
                  <div className="mt-6 text-center">
                    <p className="text-text-secondary text-sm mb-2">Uncertain which approach suits your project?</p>
                    <QuoteButton className="text-gold font-semibold hover:underline inline-flex items-center gap-1">
                      Request expert guidance
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </QuoteButton>
                  </div>
                </div>
              </div>

              {/* Precision Levels for UAV As-Built Surveys */}
              <div>
                <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-6">
                  <Image
                    src="/images/services/as-built/as-built-accuracy.avif"
                    alt="Survey control points and accuracy verification markers at construction site"
                    fill
                    className="object-cover"
                  />
                </div>
                <h2 id="as-built-accuracy" className="text-2xl md:text-3xl font-bold text-teal mb-4 scroll-mt-32">
                  Precision Levels for <span className="text-gold">Drone As-Built Surveys</span>
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed mb-4">
                  Our UAV as-built surveys routinely achieve absolute precision of ±2-3cm horizontally and ±3-5cm vertically when using ground control points. For most construction verification purposes, this level of accuracy exceeds requirements and matches or beats conventional survey methods.
                </p>
                <p className="text-text-secondary text-lg leading-relaxed">
                  We use RTK-enabled drones with real-time GPS correction to ensure precise positioning throughout data capture. For projects requiring the highest precision, we establish ground control networks using survey-grade GNSS receivers. The result is reliable, repeatable data that stands up to scrutiny from clients, contractors, and planning authorities.
                </p>
              </div>

              {/* Applications */}
              <div>
                <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-6">
                  <Image
                    src="/images/services/as-built/as-built-applications.avif"
                    alt="Drone view of completed housing development showing all as-built features"
                    fill
                    className="object-cover"
                  />
                </div>
                <h2 id="as-built-applications" className="text-2xl md:text-3xl font-bold text-teal mb-4 scroll-mt-32">
                  Applications of <span className="text-gold">Drone As-Built Surveys</span>
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed mb-6">
                  UAV as-built surveys serve critical functions across the construction lifecycle. Here are the key applications where our clients see the greatest value:
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-background-alt rounded-xl p-6">
                    <h3 className="font-bold text-teal mb-2">Project Handover</h3>
                    <p className="text-text-secondary text-sm">Comprehensive documentation of completed works for client acceptance, featuring accurate records of building positions, levels, and external features.</p>
                  </div>
                  <div className="bg-background-alt rounded-xl p-6">
                    <h3 className="font-bold text-teal mb-2">Planning Compliance</h3>
                    <p className="text-text-secondary text-sm">Evidence for planning condition discharge, demonstrating that construction matches approved drawings and specifications.</p>
                  </div>
                  <div className="bg-background-alt rounded-xl p-6">
                    <h3 className="font-bold text-teal mb-2">BIM Verification</h3>
                    <p className="text-text-secondary text-sm">Comparing completed construction against BIM models to identify deviations and update digital twins with as-built reality.</p>
                  </div>
                  <div className="bg-background-alt rounded-xl p-6">
                    <h3 className="font-bold text-teal mb-2">Dispute Resolution</h3>
                    <p className="text-text-secondary text-sm">Independent survey evidence for construction disputes, boundary disagreements, or defect claims requiring accurate measurements.</p>
                  </div>
                  <div className="bg-background-alt rounded-xl p-6">
                    <h3 className="font-bold text-teal mb-2">Asset Management</h3>
                    <p className="text-text-secondary text-sm">Creating accurate records for facilities management, maintenance planning, and future development considerations.</p>
                  </div>
                  <div className="bg-background-alt rounded-xl p-6">
                    <h3 className="font-bold text-teal mb-2">Infrastructure Recording</h3>
                    <p className="text-text-secondary text-sm">Documenting completed roads, drainage, utilities, and landscaping for adoption by local authorities or management companies.</p>
                  </div>
                </div>

                {/* CTA after applications */}
                <div className="mt-8 text-center">
                  <p className="text-text-secondary mb-4">Have a project that needs as-built documentation?</p>
                  <div className="flex flex-wrap justify-center gap-3">
                    <QuoteButton className="btn btn-primary btn-shimmer">
                      Share Your Requirements
                    </QuoteButton>
                    <a href="tel:+441334804554" className="btn btn-outline">
                      Ring +44 1334 804554
                    </a>
                  </div>
                </div>
              </div>

              {/* Can UAV As-Built Surveys Compare to BIM Models? */}
              <div>
                <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-6">
                  <Image
                    src="/images/services/as-built/as-built-feature.avif"
                    alt="BIM model comparison overlay on completed construction showing deviations"
                    fill
                    className="object-cover"
                  />
                </div>
                <h2 id="bim-comparison" className="text-2xl md:text-3xl font-bold text-teal mb-4 scroll-mt-32">
                  Can <span className="text-gold">Drone As-Built Surveys</span> Compare to BIM Models?
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed mb-4">
                  Absolutely—this is one of the most powerful applications of UAV as-built surveying. We create precise 3D point clouds and models from drone data that can be directly compared against your design BIM, identifying deviations between what was planned and what was built.
                </p>
                <p className="text-text-secondary text-lg leading-relaxed mb-6">
                  Our comparison reports highlight discrepancies using colour-coded deviation maps, making it immediately clear where construction differs from design intent. Whether you are verifying contractor performance, updating as-built models, or preparing for handover, this comparison capability provides objective evidence of construction precision.
                </p>

                {/* BIM Benefits List */}
                <div className="bg-teal/5 border border-teal/20 rounded-xl p-6">
                  <h3 className="font-bold text-teal mb-4">BIM Comparison Deliverables</h3>
                  <ul className="space-y-3">
                    {[
                      'Colour-coded deviation maps showing construction vs design',
                      'Quantified deviation reports with measurements',
                      'Updated as-built BIM models',
                      'Clash detection between as-built and design elements',
                      'Point cloud registration to design coordinates',
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3 text-text-secondary">
                        <svg className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* UAV As-Built Survey Outputs */}
              <div>
                <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-6">
                  <Image
                    src="/images/services/as-built/as-built-deliverables.avif"
                    alt="Computer screen displaying as-built CAD drawings and survey data"
                    fill
                    className="object-cover"
                  />
                </div>
                <h2 id="as-built-deliverables" className="text-2xl md:text-3xl font-bold text-teal mb-4 scroll-mt-32">
                  <span className="text-gold">Drone As-Built Survey</span> Outputs
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed mb-6">
                  We tailor deliverables to your project requirements, but our standard as-built survey outputs include:
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-4 bg-background-alt rounded-xl p-4">
                    <div className="w-10 h-10 bg-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-teal">As-Built Orthomosaic</h4>
                      <p className="text-text-secondary text-sm">High-resolution georeferenced drone imagery showing the completed development in precise detail, suitable for measurements and annotations.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4 bg-background-alt rounded-xl p-4">
                    <div className="w-10 h-10 bg-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-teal">BIM Comparison Reports</h4>
                      <p className="text-text-secondary text-sm">Detailed deviation analysis comparing as-built data to design models, with colour-coded visualisations and measurement reports.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4 bg-background-alt rounded-xl p-4">
                    <div className="w-10 h-10 bg-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-teal">Deviation Reports</h4>
                      <p className="text-text-secondary text-sm">Quantified reports highlighting where construction differs from approved plans, with precise measurements of any discrepancies.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4 bg-background-alt rounded-xl p-4">
                    <div className="w-10 h-10 bg-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-teal">CAD Files (DWG/DXF)</h4>
                      <p className="text-text-secondary text-sm">Scaled CAD drawings in your preferred format, ready for integration with existing project documentation and design software.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4 bg-background-alt rounded-xl p-4">
                    <div className="w-10 h-10 bg-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-teal">3D Models</h4>
                      <p className="text-text-secondary text-sm">Photorealistic 3D models and point clouds for visualisation, measurement, and integration with BIM workflows.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4 bg-background-alt rounded-xl p-4">
                    <div className="w-10 h-10 bg-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-teal">Completion Records</h4>
                      <p className="text-text-secondary text-sm">Comprehensive documentation packages for project handover, planning discharge, and long-term asset records.</p>
                    </div>
                  </li>
                </ul>

                {/* CTA after deliverables */}
                <div className="mt-6 p-5 bg-gold/10 border border-gold/20 rounded-xl">
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-teal font-semibold text-center sm:text-left">Need specific deliverables for your project?</p>
                    <QuoteButton className="btn btn-primary btn-shimmer whitespace-nowrap">
                      Share Requirements
                    </QuoteButton>
                  </div>
                </div>
              </div>

              {/* UAV As-Built Survey Timeline */}
              <div>
                <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-6">
                  <Image
                    src="/images/services/as-built/as-built-timeline.avif"
                    alt="Drone pilot at completed development preparing for as-built survey flight"
                    fill
                    className="object-cover"
                  />
                </div>
                <h2 id="survey-timeline" className="text-2xl md:text-3xl font-bold text-teal mb-4 scroll-mt-32">
                  <span className="text-gold">Drone As-Built Survey</span> Timeline
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed mb-4">
                  On-site data capture is remarkably efficient. A typical housing development can be surveyed in just 1-2 hours of flight time, plus setup and ground control establishment. Larger sites may require half a day to a full day depending on complexity.
                </p>
                <p className="text-text-secondary text-lg leading-relaxed mb-6">
                  Processing and delivery depends on project complexity and your required outputs. Standard deliverables are typically ready within 3-5 working days. For urgent handover deadlines, we offer expedited processing with 24-48 hour turnaround available at additional cost.
                </p>

                {/* Timeline Table */}
                <div className="rounded-xl overflow-hidden border border-border">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-teal">
                        <th className="text-left text-white font-semibold py-3 px-4">Phase</th>
                        <th className="text-left text-white font-semibold py-3 px-4">Duration</th>
                        <th className="text-left text-white font-semibold py-3 px-4 hidden md:table-cell">What Happens</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-white">
                        <td className="py-3 px-4 text-text-primary font-medium">Planning & Booking</td>
                        <td className="py-3 px-4 text-gold font-bold">1-2 days</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden md:table-cell">Flight planning, airspace clearance, site coordination</td>
                      </tr>
                      <tr className="bg-background-alt">
                        <td className="py-3 px-4 text-text-primary font-medium">On-Site Data Capture</td>
                        <td className="py-3 px-4 text-gold font-bold">2-4 hours</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden md:table-cell">GCP setup, drone flights, data verification</td>
                      </tr>
                      <tr className="bg-white">
                        <td className="py-3 px-4 text-text-primary font-medium">Processing</td>
                        <td className="py-3 px-4 text-gold font-bold">1-2 days</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden md:table-cell">Photogrammetry, georeferencing, model creation</td>
                      </tr>
                      <tr className="bg-background-alt">
                        <td className="py-3 px-4 text-text-primary font-medium">BIM Comparison (if req)</td>
                        <td className="py-3 px-4 text-gold font-bold">1-2 days</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden md:table-cell">Design overlay, deviation analysis, reporting</td>
                      </tr>
                      <tr className="bg-white">
                        <td className="py-3 px-4 text-text-primary font-medium">Deliverable Generation</td>
                        <td className="py-3 px-4 text-gold font-bold">1 day</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden md:table-cell">CAD drawings, reports, final QC checks</td>
                      </tr>
                      <tr className="bg-teal/10">
                        <td className="py-3 px-4 text-teal font-bold">Total (Standard)</td>
                        <td className="py-3 px-4 text-teal font-bold">3-5 working days</td>
                        <td className="py-3 px-4 text-teal text-sm font-medium hidden md:table-cell">From site visit to final delivery</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Expedited option callout */}
                <div className="mt-4 flex items-start gap-3 bg-gold/10 border border-gold/30 rounded-lg p-4">
                  <svg className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <div>
                    <p className="text-teal font-semibold text-sm">Expedited Processing Available</p>
                    <p className="text-text-secondary text-sm">Require faster delivery? 24-48 hour turnaround available for urgent projects.</p>
                  </div>
                </div>

                {/* CTA after timeline */}
                <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
                  <QuoteButton className="btn btn-primary btn-shimmer">
                    Begin Your Project
                  </QuoteButton>
                  <a href="tel:+441334804554" className="btn btn-outline flex items-center justify-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Speak with Peter
                  </a>
                </div>
              </div>

              {/* Selecting a UAV As-Built Survey Provider */}
              <div>
                <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-6">
                  <Image
                    src="/images/services/as-built/as-built-provider.avif"
                    alt="Professional survey team meeting with construction client on site"
                    fill
                    className="object-cover"
                  />
                </div>
                <h2 id="choose-provider" className="text-2xl md:text-3xl font-bold text-teal mb-4 scroll-mt-32">
                  Selecting a <span className="text-gold">Drone As-Built Survey</span> Provider
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed mb-4">
                  Not all UAV survey services are equal. When evaluating providers for as-built work, we recommend checking these key factors:
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gold mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-text-primary"><strong>CAA authorisation</strong> – Ensure they hold valid GVC or legacy PfCO permissions for commercial operations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gold mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-text-primary"><strong>Construction experience</strong> – As-built surveys require understanding of construction workflows and client needs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gold mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-text-primary"><strong>BIM capability</strong> – Can they compare to your design models and deliver deviation reports?</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gold mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-text-primary"><strong>Professional insurance</strong> – Public liability and professional indemnity cover appropriate to construction sites</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gold mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-text-primary"><strong>Relevant case studies</strong> – Request examples of similar construction projects they've documented</span>
                  </li>
                </ul>
                <p className="text-text-secondary text-lg leading-relaxed mb-6">
                  At Hire Drone Pilot, we satisfy every criterion. We are CAA authorised, fully insured, and have delivered as-built surveys for residential developments, commercial projects, and infrastructure schemes throughout the UK.
                </p>

                {/* CTA after provider section */}
                <div className="bg-teal rounded-xl p-5">
                  <p className="text-white font-semibold mb-3">Ready to work with a reliable as-built survey provider?</p>
                  <div className="flex flex-wrap gap-3">
                    <QuoteButton className="px-5 py-2.5 rounded-full bg-gold text-teal-dark font-semibold hover:bg-gold/90 transition-colors text-sm btn-shimmer">
                      Speak with Peter
                    </QuoteButton>
                    <a href="tel:+441334804554" className="flex items-center gap-2 px-4 py-2.5 rounded-full border border-white/30 text-white hover:bg-white/10 transition-colors text-sm font-medium">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      +44 1334 804554
                    </a>
                  </div>
                </div>
              </div>

              {/* Cost comparison */}
              <div>
                <h2 id="cost-comparison" className="text-2xl md:text-3xl font-bold text-teal mb-4 scroll-mt-32">
                  Is <span className="text-gold">Drone As-Built Survey</span> More Affordable Than Conventional Methods?
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed mb-4">
                  In most scenarios, significantly more affordable. Conventional ground-based as-built surveys require surveyors to physically measure every element of completed construction, often needing scaffolding or access equipment for elevated features. This is time-consuming and labour-intensive.
                </p>
                <p className="text-text-secondary text-lg leading-relaxed mb-6">
                  Our UAV approach captures equivalent or better data in a fraction of the time. A development that might take a ground team several days can be surveyed in hours. The cost savings typically range from 50-70% compared to conventional methods, while delivering faster turnaround and comprehensive coverage. For large or complex sites, the economics become even more compelling.
                </p>

                {/* Final CTA */}
                <div className="bg-gradient-to-r from-teal to-teal-dark rounded-xl p-6 text-center">
                  <h3 className="text-white font-bold text-xl mb-2">Ready to Share Your As-Built Project?</h3>
                  <p className="text-white/80 text-sm mb-4">Expert guidance • Tailored pricing • Avg Response within 5 Mins</p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <QuoteButton className="btn btn-primary btn-shimmer">
                      Compare Quotes
                    </QuoteButton>
                    <a href="tel:+441334804554" className="btn bg-white text-teal hover:bg-white/90 flex items-center justify-center gap-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      Ring Peter Now
                    </a>
                  </div>
                </div>
              </div>

            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Your Surveyor Card */}
              <div className="bg-white border border-border rounded-2xl p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-gold/30 flex-shrink-0">
                    <Image
                      src="/images/peter_leslie.webp"
                      alt="Peter Leslie - Owner & Drone Pilot"
                      width={64}
                      height={64}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-teal font-bold">Peter Leslie</h4>
                    <p className="text-text-secondary text-sm">Owner & Drone Pilot</p>
                  </div>
                </div>
                <p className="text-text-secondary text-sm leading-relaxed">
                  With extensive experience in surveying and construction, Peter personally oversees every as-built project to ensure accuracy and professional delivery.
                </p>
              </div>

              {/* Table of Contents */}
              <div className="bg-background-alt border border-border rounded-2xl p-6">
                <h3 className="text-teal font-bold text-lg mb-4">
                  Quick Guide: UAV As-Built Surveys Explained
                </h3>
                <nav className="space-y-2">
                  {[
                    { id: 'what-is-as-built', label: 'Understanding UAV As-Built Surveys' },
                    { id: 'as-built-cost', label: 'UAV As-Built Survey Pricing Guide' },
                    { id: 'as-built-vs-traditional', label: 'Comparing UAV As-Built Survey and Conventional Methods' },
                    { id: 'as-built-accuracy', label: 'Precision Levels for UAV As-Built Surveys' },
                    { id: 'as-built-applications', label: 'Applications of UAV As-Built Surveys' },
                    { id: 'bim-comparison', label: 'Can UAV As-Built Surveys Compare to BIM Models?' },
                    { id: 'as-built-deliverables', label: 'UAV As-Built Survey Outputs' },
                    { id: 'survey-timeline', label: 'UAV As-Built Survey Timeline' },
                    { id: 'choose-provider', label: 'Selecting a UAV As-Built Survey Provider' },
                    { id: 'cost-comparison', label: 'Is UAV As-Built Survey More Affordable Than Conventional Methods?' },
                  ].map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className="block text-text-secondary hover:text-gold transition-all duration-200 text-sm py-1.5 border-l-2 border-transparent hover:border-gold pl-3 -ml-3"
                    >
                      {item.label}
                    </a>
                  ))}
                </nav>
              </div>

              {/* Deliverables Card */}
              <div className="bg-teal rounded-2xl p-6">
                <h3 className="text-gold font-bold text-lg mb-4 uppercase tracking-wide">
                  As-Built Deliverables
                </h3>
                <ul className="space-y-3">
                  {[
                    'As-built orthomosaic',
                    'BIM comparison reports',
                    'Deviation reports',
                    'CAD files (DWG/DXF)',
                    '3D models & point clouds',
                    'Completion records',
                  ].map((deliverable, index) => (
                    <li key={index} className="flex items-start gap-3 text-white/80">
                      <svg className="w-4 h-4 text-gold mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>{deliverable}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Card - Sticky with Form */}
              <div className="bg-teal rounded-2xl p-6 sticky top-32">
                <h3 className="text-white font-bold text-lg mb-2">
                  Share Your Project
                </h3>
                <p className="text-white/70 text-sm mb-4">
                  Receive expert guidance and tailored pricing.
                </p>
                <form name="sidebar-quote" method="POST" className="space-y-3">
                  <input type="hidden" name="form-name" value="sidebar-quote" />
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    required
                    className="w-full px-4 py-2.5 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 text-sm focus:outline-none focus:border-gold"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    required
                    className="w-full px-4 py-2.5 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 text-sm focus:outline-none focus:border-gold"
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    className="w-full px-4 py-2.5 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 text-sm focus:outline-none focus:border-gold"
                  />
                  <textarea
                    name="message"
                    placeholder="Brief project details..."
                    rows={3}
                    className="w-full px-4 py-2.5 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 text-sm focus:outline-none focus:border-gold resize-none"
                  />
                  <button
                    type="submit"
                    className="btn btn-primary btn-shimmer w-full"
                  >
                    Compare Quotes
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Equipment Section */}
      <div id="equipment-trigger">
        <EquipmentSection />
      </div>

      {/* Testimonials Section */}
      <Testimonials />

      {/* Explore Similar Services */}
      <section className="py-16 bg-background-alt">
        <div className="container">
          <h2 className="text-2xl font-bold text-teal mb-8 text-center">
            Explore Similar Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link
              href="/services/drone-topographical-survey"
              className="bg-white border border-border rounded-xl p-6 hover:border-gold hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-teal font-bold text-lg mb-2">UAV Topographic Survey</h3>
              <p className="text-text-secondary text-sm">
                Detailed topographic surveys for planning, design and construction projects.
              </p>
            </Link>
            <Link
              href="/services/drone-progress-monitoring"
              className="bg-white border border-border rounded-xl p-6 hover:border-gold hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-teal font-bold text-lg mb-2">UAV Progress Monitoring</h3>
              <p className="text-text-secondary text-sm">
                Regular drone documentation tracking construction progress over time.
              </p>
            </Link>
            <Link
              href="/services/drone-3d-modelling"
              className="bg-white border border-border rounded-xl p-6 hover:border-gold hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-teal font-bold text-lg mb-2">UAV 3D Modelling</h3>
              <p className="text-text-secondary text-sm">
                Photorealistic 3D models for visualisation and BIM integration.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Floating CTA - Mobile only on service pages */}
      <FloatingCTA />
    </>
  );
}
