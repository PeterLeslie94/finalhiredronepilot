import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import QuoteButton from '@/components/QuoteButton';
import Testimonials from '@/components/Testimonials';
import FloatingCTA from '@/components/FloatingCTA';
import EquipmentSection from '@/components/EquipmentSection';
import { Target, Ruler, Building2, Route, Factory, Layers, MapPin, CheckCircle } from 'lucide-react';
import { ServiceSchema, BreadcrumbSchema } from '@/components/SchemaMarkup';
import { ClientLogoMarqueeInline } from '@/components/ClientLogoMarquee';

export const metadata: Metadata = {
  title: 'UAV Setting Out Survey Services | Setting Out UK | Hire Drone Pilot',
  description: 'Expert drone setting out survey services throughout the UK. GPS-guided construction staking, as-built verification, and precision coordinate delivery. CAA certified drone operators.',
  keywords: 'drone setting out survey, drone construction setting out, GPS setting out, drone stakeout, drone as-built survey, coordinate setting out uk',
};

export default function DroneSettingOutSurveyPage() {
  return (
    <>
      <ServiceSchema
        name="UAV Setting Out Survey Services"
        description="Expert drone setting out survey services throughout the UK. GPS-guided construction staking, as-built verification, and precision coordinate delivery. CAA certified drone operators."
        url="https://hiredronepilot.uk/services/drone-setting-out-survey"
      />
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://hiredronepilot.uk" },
        { name: "Services", url: "https://hiredronepilot.uk/services" },
        { name: "UAV Setting Out Survey Services", url: "https://hiredronepilot.uk/services/drone-setting-out-survey" }
      ]} />
      {/* Hero Section */}
      <section className="relative min-h-[800px] md:min-h-[600px] flex items-start bg-teal -mt-[120px] pt-[120px] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/services/setting-out/setting-out-hero.avif"
            alt="Drone view of construction site with setting out markers visible for drone survey"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-teal-dark via-teal-dark/90 via-40% to-teal-dark/40 z-10" />
        </div>
        <div className="container pt-8 pb-52 lg:pb-40 lg:pt-12 relative z-10">
          <div className="max-w-3xl">
            <p className="text-gold font-semibold uppercase tracking-wider mb-3">
              Surveying & Construction
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Drone Setting Out Survey Service
            </h1>
            <p className="text-white/80 text-lg md:text-xl mb-8">
              Precision setting out with UAV-assisted verification. Transfer design coordinates to site swiftly and accurately with as-built confirmation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <QuoteButton className="btn btn-primary">
                Compare Quotes
              </QuoteButton>
              <Link href="/services" className="btn btn-outline-white">
                All Services
              </Link>
            </div>
            <p className="mt-4 text-white/70 text-sm flex items-center gap-2">
              <svg className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
              Avg Response within 5 Mins - Or call{' '}
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

              {/* What is a drone setting out survey? */}
              <div>
                <h2 id="what-is-setting-out" className="text-2xl md:text-3xl font-bold text-teal mb-4 scroll-mt-32">
                  Understanding <span className="text-gold">Drone Setting Out Surveys</span>
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed mb-4">
                  A drone setting out survey combines conventional setting out techniques with UAV technology to transfer design coordinates onto the ground with enhanced speed and verification. We mark the precise positions of building corners, foundation lines, road alignments, and infrastructure elements so construction can proceed accurately from design intent.
                </p>
                <p className="text-text-secondary text-lg leading-relaxed">
                  At Hire Drone Pilot, we use RTK-enabled UAVs alongside total stations and GNSS equipment to deliver survey-grade accuracy. The drone component allows instant <Link href="/services/drone-as-built-survey" className="text-gold hover:underline">as-built verification</Link>, creating imagery and coordinates that confirm your setting out positions match design specifications before groundworks begin.
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
                          &quot;Have questions? Ring me directly - I&apos;m happy to discuss your project requirements.&quot;
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
                        Survey-Grade Setting Out,
                        <span className="text-gold block relative inline-block">
                          Verified By UAV
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
                        What You&apos;ll Receive
                      </h3>
                      <ul className="space-y-2.5">
                        {[
                          'Setting out coordinates & schedules',
                          'As-built drone verification',
                          'CAD overlay confirmation',
                          'Survey-grade accuracy (10-20mm)',
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
                        Delivered same day or next day
                      </p>
                    </div>

                    {/* Right: Why choose us */}
                    <div>
                      <h3 className="text-gold font-bold text-sm uppercase tracking-wider mb-3">
                        Why Use HireDronePilot
                      </h3>
                      <ul className="space-y-2.5">
                        {[
                          'CAA certified & fully insured',
                          'Integrated UAV + total station',
                          'Instant visual verification',
                          'Nationwide coverage',
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
                        <span>Relied upon by contractors, developers & engineers throughout the UK.</span>
                      </p>
                    </div>
                  </div>

                  {/* CTA Buttons */}
                  <div className="mt-8 pt-6 border-t border-white/10">
                    {/* Available now badge */}
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

              {/* How much does a drone setting out survey cost? */}
              <div>
                <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-6">
                  <Image
                    src="/images/services/setting-out/setting-out-cost.avif"
                    alt="Surveyor with total station and drone at UK construction site for setting out"
                    fill
                    className="object-cover"
                  />
                </div>
                <h2 id="setting-out-cost" className="text-2xl md:text-3xl font-bold text-teal mb-4 scroll-mt-32">
                  What Does an <span className="text-gold">Drone Setting Out Survey</span> Cost?
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed mb-6">
                  Pricing depends on site size, number of points to set out, and required outputs. Here&apos;s a guide to help you budget:
                </p>

                {/* Pricing Table */}
                <div className="rounded-xl overflow-hidden border border-border mb-6">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-teal">
                        <th className="text-left text-white font-semibold py-3 px-4">Project Type</th>
                        <th className="text-left text-white font-semibold py-3 px-4">Guide Price</th>
                        <th className="text-left text-white font-semibold py-3 px-4 hidden md:table-cell">Typical Applications</th>
                        <th className="text-left text-white font-semibold py-3 px-4 hidden lg:table-cell">Includes</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-white">
                        <td className="py-3 px-4 text-text-primary font-medium">Small Site<span className="block text-sm text-text-secondary font-normal">Up to 20 points</span></td>
                        <td className="py-3 px-4 text-gold font-bold">£500+</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden md:table-cell">Single dwelling, extension, small commercial unit</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden lg:table-cell">Coordinates, verification, as-built</td>
                      </tr>
                      <tr className="bg-background-alt">
                        <td className="py-3 px-4 text-text-primary font-medium">Medium Site<span className="block text-sm text-text-secondary font-normal">20-50 points</span></td>
                        <td className="py-3 px-4 text-gold font-bold">£800+</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden md:table-cell">Housing plots, warehouse, road sections</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden lg:table-cell">Full schedule, CAD overlay, drone imagery</td>
                      </tr>
                      <tr className="bg-white">
                        <td className="py-3 px-4 text-text-primary font-medium">Large Site<span className="block text-sm text-text-secondary font-normal">50-100 points</span></td>
                        <td className="py-3 px-4 text-gold font-bold">£1,200+</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden md:table-cell">Multi-plot developments, infrastructure projects</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden lg:table-cell">Full deliverable suite + progress reports</td>
                      </tr>
                      <tr className="bg-background-alt">
                        <td className="py-3 px-4 text-text-primary font-medium">Complex Project<span className="block text-sm text-text-secondary font-normal">100+ points</span></td>
                        <td className="py-3 px-4 text-gold font-bold">£1,800+</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden md:table-cell">Major developments, phased construction, utilities</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden lg:table-cell">Custom deliverables, multiple visits</td>
                      </tr>
                      <tr className="bg-white">
                        <td className="py-3 px-4 text-text-primary font-medium">Ongoing Contract<span className="block text-sm text-text-secondary font-normal">Regular visits</span></td>
                        <td className="py-3 px-4 text-gold font-bold">POA</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden md:table-cell">Long-term projects, multiple phases, retainer</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden lg:table-cell">Bespoke scope & scheduling</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-text-secondary text-sm mb-6 italic">
                  *Guide prices include drone verification. Final quote based on point count, site access, and specific requirements.
                </p>

                {/* What affects your quote */}
                <h3 className="font-bold text-teal mb-3">What influences your quote?</h3>
                <ul className="grid grid-cols-2 gap-2 mb-6">
                  {['Number of set-out points', 'Site complexity & access', 'Verification requirements', 'Turnaround urgency'].map((factor, index) => (
                    <li key={index} className="flex items-center gap-2 text-text-secondary">
                      <svg className="w-4 h-4 text-gold flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm">{factor}</span>
                    </li>
                  ))}
                </ul>

                <p className="text-text-secondary leading-relaxed mb-6">
                  Our UAV-integrated approach reduces revisits and provides instant verification, typically saving <span className="text-gold font-semibold">20-30%</span> compared to conventional setting out with separate checking. Contact us with your project details for a tailored quote within 24 hours.
                </p>

                {/* CTA Banner */}
                <div className="bg-teal rounded-xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-center sm:text-left">
                    <p className="text-white font-semibold">Ready to get a quote for your project?</p>
                    <p className="text-white/70 text-sm">Free, no-obligation quotes within 24 hours</p>
                  </div>
                  <div className="flex gap-3">
                    <a href="tel:+441334804554" className="flex items-center gap-2 px-4 py-2.5 rounded-full border border-white/30 text-white hover:bg-white/10 transition-colors text-sm font-medium">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      Call
                    </a>
                    <QuoteButton className="px-5 py-2.5 rounded-full bg-gold text-teal-dark font-semibold hover:bg-gold/90 transition-colors text-sm btn-shimmer">
                      Compare Quotes
                    </QuoteButton>
                  </div>
                </div>
              </div>

              {/* Drone Setting Out vs Conventional Methods */}
              <div>
                <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-6">
                  <Image
                    src="/images/services/setting-out/setting-out-comparison.avif"
                    alt="Comparison of UAV-assisted setting out versus conventional total station only methods"
                    fill
                    className="object-cover"
                  />
                </div>
                <h2 id="setting-out-vs-traditional" className="text-2xl md:text-3xl font-bold text-teal mb-4 scroll-mt-32">
                  What Is the Difference Between <span className="text-gold">Drone Setting Out</span> and Conventional Methods?
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed mb-4">
                  Conventional setting out relies solely on total stations or GNSS rovers to mark positions on site. The surveyor works point-by-point, marking each location with pegs or spray paint. While accurate, this method provides no immediate visual context and errors may only be discovered during construction.
                </p>
                <p className="text-text-secondary text-lg leading-relaxed mb-4">
                  Drone setting out surveys add a powerful verification layer. After marking positions, we capture imagery from above showing every point in spatial context. We overlay this against CAD designs to confirm alignment before construction begins. This catches errors immediately, reduces costly rework, and provides documented proof of accurate positioning.
                </p>
                {/* Technology Comparison Cards */}
                <div className="mt-8">
                  <h3 className="text-center font-bold text-teal text-xl mb-6">When to Choose Each Approach</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {/* UAV-Assisted Card */}
                    <div className="relative bg-teal rounded-2xl p-6 overflow-hidden group hover:shadow-xl transition-shadow duration-300">
                      {/* Decorative elements */}
                      <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                        <svg viewBox="0 0 100 100" className="w-full h-full">
                          <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="1" fill="none" className="text-gold" />
                          <circle cx="50" cy="50" r="25" stroke="currentColor" strokeWidth="1" fill="none" className="text-gold" />
                          <line x1="50" y1="10" x2="50" y2="90" stroke="currentColor" strokeWidth="1" className="text-gold" />
                          <line x1="10" y1="50" x2="90" y2="50" stroke="currentColor" strokeWidth="1" className="text-gold" />
                        </svg>
                      </div>
                      <div className="relative z-10">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-12 h-12 bg-gold/20 rounded-xl flex items-center justify-center">
                            <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </div>
                          <div>
                            <h4 className="text-white font-bold text-lg">Select Drone Setting Out</h4>
                            <p className="text-gold text-sm font-medium">Verified accuracy</p>
                          </div>
                        </div>
                        <div className="space-y-3">
                          {[
                            { Icon: Building2, text: 'Complex building layouts' },
                            { Icon: Layers, text: 'Multi-plot developments' },
                            { Icon: Target, text: 'High-accuracy requirements' },
                            { Icon: CheckCircle, text: 'Documented verification needed' },
                          ].map((item, i) => (
                            <div key={i} className="flex items-center gap-3 bg-white/10 rounded-lg px-4 py-2.5">
                              <item.Icon className="w-5 h-5 text-gold flex-shrink-0" strokeWidth={1.5} />
                              <span className="text-white/90 font-medium">{item.text}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Conventional Card */}
                    <div className="relative bg-white border-2 border-border rounded-2xl p-6 overflow-hidden group hover:border-gold hover:shadow-xl transition-all duration-300">
                      {/* Decorative tripod */}
                      <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
                        <svg viewBox="0 0 100 100" className="w-full h-full">
                          <line x1="50" y1="20" x2="20" y2="90" stroke="currentColor" strokeWidth="2" className="text-teal" />
                          <line x1="50" y1="20" x2="80" y2="90" stroke="currentColor" strokeWidth="2" className="text-teal" />
                          <line x1="50" y1="20" x2="50" y2="90" stroke="currentColor" strokeWidth="2" className="text-teal" />
                          <circle cx="50" cy="15" r="8" fill="currentColor" className="text-teal" />
                        </svg>
                      </div>
                      <div className="relative z-10">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-12 h-12 bg-teal/10 rounded-xl flex items-center justify-center">
                            <svg className="w-6 h-6 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                            </svg>
                          </div>
                          <div>
                            <h4 className="text-teal font-bold text-lg">Conventional Setting Out</h4>
                            <p className="text-text-secondary text-sm font-medium">Simple positioning</p>
                          </div>
                        </div>
                        <div className="space-y-3">
                          {[
                            { Icon: MapPin, text: 'Single building corners' },
                            { Icon: Ruler, text: 'Simple grid layouts' },
                            { Icon: Route, text: 'Linear features' },
                            { Icon: Factory, text: 'Low-risk applications' },
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
                    <p className="text-text-secondary text-sm mb-2">Not sure which approach suits your project?</p>
                    <QuoteButton className="text-gold font-semibold hover:underline inline-flex items-center gap-1">
                      Speak with a specialist
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </QuoteButton>
                  </div>
                </div>
              </div>

              {/* What accuracy can a drone setting out survey achieve? */}
              <div>
                <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-6">
                  <Image
                    src="/images/services/setting-out/setting-out-accuracy.avif"
                    alt="Survey peg with GPS equipment for setting out accuracy verification"
                    fill
                    className="object-cover"
                  />
                </div>
                <h2 id="setting-out-accuracy" className="text-2xl md:text-3xl font-bold text-teal mb-4 scroll-mt-32">
                  What Accuracy Can an <span className="text-gold">Drone Setting Out Survey</span> Achieve?
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed mb-4">
                  Our drone setting out surveys achieve positional accuracy of 10-20mm when using total station methods, meeting or exceeding construction tolerances for <Link href="/services/drone-measured-building-survey" className="text-gold hover:underline">building corners</Link>, foundation lines, and infrastructure elements. This is the same accuracy as conventional setting out because we use the same survey-grade equipment.
                </p>
                <p className="text-text-secondary text-lg leading-relaxed">
                  The UAV verification component adds a visual accuracy check using RTK-enabled positioning. We capture each marked position from the air and confirm coordinates against design data. This dual approach catches any errors in real-time, ensuring what&apos;s on the ground matches what&apos;s in the CAD drawing before expensive construction begins.
                </p>
              </div>

              {/* Applications */}
              <div>
                <h2 id="setting-out-applications" className="text-2xl md:text-3xl font-bold text-teal mb-4 scroll-mt-32">
                  Where Are <span className="text-gold">Drone Setting Out Surveys</span> Used?
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed mb-6">
                  Drone setting out surveys serve construction and <Link href="/services/drone-site-survey" className="text-gold hover:underline">infrastructure projects</Link> where precision positioning and verification matter. Here are the key applications where our clients see the greatest value:
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-background-alt rounded-xl p-6">
                    <h3 className="font-bold text-teal mb-2">Building Foundations</h3>
                    <p className="text-text-secondary text-sm">Marking building corners, pile positions, and foundation outlines with UAV verification against architectural drawings.</p>
                  </div>
                  <div className="bg-background-alt rounded-xl p-6">
                    <h3 className="font-bold text-teal mb-2">Housing Developments</h3>
                    <p className="text-text-secondary text-sm">Multi-plot layout with road alignments, service routes, and individual plot boundaries set out and verified from above.</p>
                  </div>
                  <div className="bg-background-alt rounded-xl p-6">
                    <h3 className="font-bold text-teal mb-2">Road & Highway Works</h3>
                    <p className="text-text-secondary text-sm">Centreline setting out, kerb lines, junction geometry, and drainage runs with thorough drone documentation.</p>
                  </div>
                  <div className="bg-background-alt rounded-xl p-6">
                    <h3 className="font-bold text-teal mb-2">Utilities & Services</h3>
                    <p className="text-text-secondary text-sm">Pipeline routes, cable trenches, and service connection points marked with sub-surface coordination.</p>
                  </div>
                  <div className="bg-background-alt rounded-xl p-6">
                    <h3 className="font-bold text-teal mb-2">Industrial & Commercial</h3>
                    <p className="text-text-secondary text-sm">Warehouse footprints, car park layouts, and large-scale commercial building grids with verified accuracy.</p>
                  </div>
                  <div className="bg-background-alt rounded-xl p-6">
                    <h3 className="font-bold text-teal mb-2">Landscaping & Earthworks</h3>
                    <p className="text-text-secondary text-sm">Level pegs, cut/fill markers, retention features, and landscaping boundaries with before/after documentation.</p>
                  </div>
                </div>

                {/* CTA after applications */}
                <div className="mt-8 text-center">
                  <p className="text-text-secondary mb-4">Have a project that needs setting out?</p>
                  <div className="flex flex-wrap justify-center gap-3">
                    <QuoteButton className="btn btn-primary btn-shimmer">
                      Talk Through Your Project
                    </QuoteButton>
                    <a href="tel:+441334804554" className="btn btn-outline">
                      Call +44 1334 804554
                    </a>
                  </div>
                </div>
              </div>

              {/* How does drone technology improve setting out accuracy? */}
              <div>
                <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-6">
                  <Image
                    src="/images/services/setting-out/setting-out-feature.avif"
                    alt="CAD design overlay on drone image for setting out verification"
                    fill
                    className="object-cover"
                  />
                </div>
                <h2 id="drone-technology-accuracy" className="text-2xl md:text-3xl font-bold text-teal mb-4 scroll-mt-32">
                  How Does <span className="text-gold">Drone Technology</span> Improve Setting Out Accuracy?
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed mb-4">
                  UAV technology transforms setting out from a trust-based process into a verified one. Conventional methods rely entirely on the surveyor&apos;s field work being correct, with errors only discovered during construction. Our drone integration provides immediate visual confirmation that every point is in the right place.
                </p>
                <p className="text-text-secondary text-lg leading-relaxed mb-4">
                  After completing the ground-based setting out, we fly the site and capture high-resolution imagery with centimetre-accurate positioning. We then overlay your CAD design directly onto this imagery, creating a visual comparison between design intent and actual marker positions. Any discrepancies are immediately visible and can be corrected before work begins.
                </p>
                <p className="text-text-secondary text-lg leading-relaxed">
                  This verification process also creates permanent documentation. You receive timestamped imagery proving accurate setting out, protecting all parties if disputes arise later. For phased developments, we track progress across multiple visits, building a complete record of setting out accuracy throughout the project lifecycle.
                </p>
              </div>

              {/* What outputs? */}
              <div>
                <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-6">
                  <Image
                    src="/images/services/setting-out/setting-out-deliverables.avif"
                    alt="Setting out survey report with coordinates and as-built verification on screen"
                    fill
                    className="object-cover"
                  />
                </div>
                <h2 id="setting-out-deliverables" className="text-2xl md:text-3xl font-bold text-teal mb-4 scroll-mt-32">
                  What Outputs Do You Receive From an <span className="text-gold">Drone Setting Out Survey</span>?
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed mb-6">
                  We tailor outputs to your project requirements, but our standard drone setting out survey deliverables include:
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-4 bg-background-alt rounded-xl p-4">
                    <div className="w-10 h-10 bg-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-teal">Setting Out Coordinates</h4>
                      <p className="text-text-secondary text-sm">Complete coordinate schedule in your preferred format (CSV, DXF, or project-specific). Grid references, levels, and point descriptions for every marked position.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4 bg-background-alt rounded-xl p-4">
                    <div className="w-10 h-10 bg-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-teal">As-Built Verification</h4>
                      <p className="text-text-secondary text-sm">Georeferenced drone imagery with marked positions visible. Comparison report showing design vs actual positioning with deviation analysis.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4 bg-background-alt rounded-xl p-4">
                    <div className="w-10 h-10 bg-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-teal">CAD Overlays</h4>
                      <p className="text-text-secondary text-sm">Your design drawings overlaid on drone imagery showing alignment of set-out points. Exportable to AutoCAD, Civil 3D, and other CAD platforms.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4 bg-background-alt rounded-xl p-4">
                    <div className="w-10 h-10 bg-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-teal">Progress Reports</h4>
                      <p className="text-text-secondary text-sm">For phased projects, comparative imagery and coordinate tracking across multiple setting out visits. Visual progress documentation for project records.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4 bg-background-alt rounded-xl p-4">
                    <div className="w-10 h-10 bg-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-teal">Point Schedules</h4>
                      <p className="text-text-secondary text-sm">Detailed point schedule with reference numbers, coordinates, descriptions, and verification status. Formatted for site use and project documentation.</p>
                    </div>
                  </li>
                </ul>

                {/* CTA after outputs */}
                <div className="mt-6 p-5 bg-gold/10 border border-gold/20 rounded-xl">
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-teal font-semibold text-center sm:text-left">Need specific outputs for your project?</p>
                    <QuoteButton className="btn btn-primary btn-shimmer whitespace-nowrap">
                      Talk Through Requirements
                    </QuoteButton>
                  </div>
                </div>
              </div>

              {/* How long does it take? */}
              <div>
                <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-6">
                  <Image
                    src="/images/services/setting-out/setting-out-timeline.avif"
                    alt="Survey team with drone and total station preparing for setting out work"
                    fill
                    className="object-cover"
                  />
                </div>
                <h2 id="survey-timeline" className="text-2xl md:text-3xl font-bold text-teal mb-4 scroll-mt-32">
                  What&apos;s the Duration of an <span className="text-gold">Drone Setting Out Survey</span>?
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed mb-4">
                  On-site setting out is typically completed in a single day. A straightforward project with 20-30 points takes 3-4 hours including drone verification. Larger sites with 50+ points may require a full day or multiple visits depending on complexity.
                </p>
                <p className="text-text-secondary text-lg leading-relaxed mb-6">
                  Outputs are often available same-day or next working day. Coordinate schedules and verification imagery are processed immediately after field work. For complex multi-phase projects, we agree delivery schedules at the outset to match your <Link href="/services/drone-construction-monitoring" className="text-gold hover:underline">construction programme</Link>.
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
                        <td className="py-3 px-4 text-text-primary font-medium">Pre-Planning</td>
                        <td className="py-3 px-4 text-gold font-bold">1-2 days</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden md:table-cell">CAD review, coordinate extraction, site assessment</td>
                      </tr>
                      <tr className="bg-background-alt">
                        <td className="py-3 px-4 text-text-primary font-medium">On-Site Setting Out</td>
                        <td className="py-3 px-4 text-gold font-bold">3-8 hours</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden md:table-cell">Control setup, point positioning, marker installation</td>
                      </tr>
                      <tr className="bg-white">
                        <td className="py-3 px-4 text-text-primary font-medium">UAV Verification</td>
                        <td className="py-3 px-4 text-gold font-bold">30-60 mins</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden md:table-cell">Drone capture, position documentation</td>
                      </tr>
                      <tr className="bg-background-alt">
                        <td className="py-3 px-4 text-text-primary font-medium">Processing & QC</td>
                        <td className="py-3 px-4 text-gold font-bold">2-4 hours</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden md:table-cell">Image processing, CAD overlay, verification check</td>
                      </tr>
                      <tr className="bg-white">
                        <td className="py-3 px-4 text-text-primary font-medium">Output Generation</td>
                        <td className="py-3 px-4 text-gold font-bold">1-2 hours</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden md:table-cell">Coordinate schedules, reports, CAD files</td>
                      </tr>
                      <tr className="bg-teal/10">
                        <td className="py-3 px-4 text-teal font-bold">Total (Standard)</td>
                        <td className="py-3 px-4 text-teal font-bold">Same day / Next day</td>
                        <td className="py-3 px-4 text-teal text-sm font-medium hidden md:table-cell">Coordinates on-site, full outputs within 24hrs</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Express option callout */}
                <div className="mt-4 flex items-start gap-3 bg-gold/10 border border-gold/30 rounded-lg p-4">
                  <svg className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <div>
                    <p className="text-teal font-semibold text-sm">Urgent Response Available</p>
                    <p className="text-text-secondary text-sm">Need setting out urgently? We offer same-day mobilisation for time-critical projects.</p>
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
                    Compare Quotes
                  </a>
                </div>
              </div>

              {/* How to select a provider */}
              <div>
                <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-6">
                  <Image
                    src="/images/services/setting-out/setting-out-provider.avif"
                    alt="Survey team meeting with construction site manager discussing setting out requirements"
                    fill
                    className="object-cover"
                  />
                </div>
                <h2 id="choose-provider" className="text-2xl md:text-3xl font-bold text-teal mb-4 scroll-mt-32">
                  How Do I Select an <span className="text-gold">Drone Setting Out Survey</span> Provider?
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed mb-4">
                  Not all setting out providers offer drone verification. When evaluating providers, we recommend checking these key factors:
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gold mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-text-primary"><strong>Survey qualifications</strong> - Ensure they have appropriate surveying credentials and construction experience</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gold mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-text-primary"><strong>CAA certification</strong> - Valid GVC or legacy PfCO permissions for commercial UAV operations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gold mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-text-primary"><strong>Professional insurance</strong> - Public liability and professional indemnity cover appropriate to construction work</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gold mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-text-primary"><strong>Integrated workflow</strong> - Ability to combine conventional survey with drone verification efficiently</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gold mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-text-primary"><strong>Construction experience</strong> - Ask about similar projects they&apos;ve completed in your sector</span>
                  </li>
                </ul>
                <p className="text-text-secondary text-lg leading-relaxed mb-6">
                  At Hire Drone Pilot, we tick every box. We&apos;re CAA certified, fully insured, and have delivered drone setting out surveys for housing developments, commercial buildings, and infrastructure projects throughout the UK.
                </p>

                {/* CTA after provider section */}
                <div className="bg-teal rounded-xl p-5">
                  <p className="text-white font-semibold mb-3">Ready to work with a dependable setting out provider?</p>
                  <div className="flex flex-wrap gap-3">
                    <QuoteButton className="px-5 py-2.5 rounded-full bg-gold text-teal-dark font-semibold hover:bg-gold/90 transition-colors text-sm btn-shimmer">
                      Compare Quotes
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

              {/* Efficiency comparison */}
              <div>
                <h2 id="efficiency-comparison" className="text-2xl md:text-3xl font-bold text-teal mb-4 scroll-mt-32">
                  Is <span className="text-gold">Drone Setting Out Survey</span> More Efficient Than Conventional?
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed mb-4">
                  The efficiency gains come primarily from reduced errors and instant verification rather than faster marking. Conventional setting out and drone setting out take similar time to mark positions on the ground since both use the same survey-grade equipment.
                </p>
                <p className="text-text-secondary text-lg leading-relaxed mb-6">
                  Where drone integration excels is in eliminating costly revisits and rework. Conventional methods may require separate checking visits and provide no visual documentation. Our UAV verification catches errors immediately, provides permanent proof of accuracy, and enables confident sign-off before construction begins. For projects where accuracy matters, this verification typically pays for itself many times over.
                </p>

                {/* Final CTA */}
                <div className="bg-gradient-to-r from-teal to-teal-dark rounded-xl p-6 text-center">
                  <h3 className="text-white font-bold text-xl mb-2">Ready to Talk Through Your Setting Out Project?</h3>
                  <p className="text-white/80 text-sm mb-4">Specialist advice - Tailored pricing - Avg Response within 5 Mins</p>
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
                  With extensive experience in surveying and UAV operations, Peter personally oversees every setting out project to ensure construction-grade accuracy and professional delivery.
                </p>
              </div>

              {/* Table of Contents */}
              <div className="bg-background-alt border border-border rounded-2xl p-6">
                <h3 className="text-teal font-bold text-lg mb-4">
                  TLDR: Drone Setting Out Explained
                </h3>
                <nav className="space-y-2">
                  {[
                    { id: 'what-is-setting-out', label: 'Understanding Drone Setting Out Surveys' },
                    { id: 'setting-out-cost', label: 'What Does a Drone Setting Out Survey Cost?' },
                    { id: 'setting-out-vs-traditional', label: 'What Is the Difference Between Drone Setting Out and Conventional Methods?' },
                    { id: 'setting-out-accuracy', label: 'What Accuracy Can a Drone Setting Out Survey Achieve?' },
                    { id: 'setting-out-applications', label: 'Where Are Drone Setting Out Surveys Used?' },
                    { id: 'drone-technology-accuracy', label: 'How Does UAV Technology Improve Setting Out Accuracy?' },
                    { id: 'setting-out-deliverables', label: 'What Outputs Do You Receive From a Drone Setting Out Survey?' },
                    { id: 'survey-timeline', label: 'What\'s the Duration of a Drone Setting Out Survey?' },
                    { id: 'choose-provider', label: 'How Do I Select a Drone Setting Out Survey Provider?' },
                    { id: 'efficiency-comparison', label: 'Is Drone Setting Out Survey More Efficient Than Conventional?' },
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

              {/* Outputs Card */}
              <div className="bg-teal rounded-2xl p-6">
                <h3 className="text-gold font-bold text-lg mb-4 uppercase tracking-wide">
                  Setting Out Outputs
                </h3>
                <ul className="space-y-3">
                  {[
                    'Setting out coordinates',
                    'As-built verification',
                    'CAD overlays',
                    'Progress reports',
                    'Point schedules',
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
                  Talk Through Your Project
                </h3>
                <p className="text-white/70 text-sm mb-4">
                  Receive specialist advice and tailored pricing.
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

      {/* Associated Services */}
      <section className="py-16 bg-background-alt">
        <div className="container">
          <h2 className="text-2xl font-bold text-teal mb-8 text-center">
            Associated Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link
              href="/services/drone-topographical-survey"
              className="bg-white border border-border rounded-xl p-6 hover:border-gold hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-teal font-bold text-lg mb-2">Drone Topographic Survey</h3>
              <p className="text-text-secondary text-sm">
                Detailed topographic assessments capturing existing site features before construction begins.
              </p>
            </Link>
            <Link
              href="/services/drone-survey"
              className="bg-white border border-border rounded-xl p-6 hover:border-gold hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-teal font-bold text-lg mb-2">UAV Survey</h3>
              <p className="text-text-secondary text-sm">
                Thorough drone surveys delivering precise data and 3D models for construction projects.
              </p>
            </Link>
            <Link
              href="/services/volumetric-analysis"
              className="bg-white border border-border rounded-xl p-6 hover:border-gold hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-teal font-bold text-lg mb-2">Volumetric Analysis</h3>
              <p className="text-text-secondary text-sm">
                Accurate stockpile measurements and cut/fill calculations from drone data.
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
