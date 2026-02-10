import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import QuoteButton from '@/components/QuoteButton';
import Testimonials from '@/components/Testimonials';
import FloatingCTA from '@/components/FloatingCTA';
import EquipmentSection from '@/components/EquipmentSection';
import { Mountain, TrendingUp, Shield, Ruler, FileText, Clock, HardHat, BarChart3 } from 'lucide-react';
import { ServiceSchema, BreadcrumbSchema } from '@/components/SchemaMarkup';
import { ClientLogoMarqueeInline } from '@/components/ClientLogoMarquee';

export const metadata: Metadata = {
  title: 'Drone Mining & Quarry Survey Solutions | UAV Site Surveys UK | Skykam Drone Inspections',
  description: 'Expert UAV mining survey services throughout the UK. Stockpile quantification, excavation mapping, progress tracking and safety documentation. CAA certified drone operators.',
  keywords: 'drone mining survey, drone quarry survey, drone stockpile volume survey, drone pit survey uk, mining drone survey, drone aggregate survey, drone quarry mapping',
};

export default function DroneMiningsurveyPage() {
  return (
    <>
      <ServiceSchema
        name="Drone Mining Survey Services"
        description="Professional drone mining survey services across the UK. Stockpile volumes, pit mapping, progress monitoring and safety compliance. CAA approved drone operators."
        url="https://skykam.co.uk/services/drone-mining-survey"
      />
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://skykam.co.uk" },
        { name: "Services", url: "https://skykam.co.uk/services" },
        { name: "Drone Mining Survey Services", url: "https://skykam.co.uk/services/drone-mining-survey" }
      ]} />
      {/* Hero Section */}
      <section className="relative min-h-[800px] md:min-h-[600px] flex items-start bg-teal -mt-[120px] pt-[120px] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/services/mining/mining-hero.avif"
            alt="Drone view of open pit mine and quarry operations in UK"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-teal-dark via-teal-dark/90 via-40% to-teal-dark/40 z-10" />
        </div>
        <div className="container pt-8 pb-52 lg:pb-40 lg:pt-12 relative z-10">
          <div className="max-w-3xl">
            <p className="text-gold font-semibold uppercase tracking-wider mb-3">
              Mining & Quarry Surveying
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Drone Mining Survey Service
            </h1>
            <p className="text-white/80 text-lg md:text-xl mb-8">
              High-precision drone surveys for mining operations, quarries, and aggregate facilities. Reliable stockpile quantification, excavation mapping, and progress tracking delivered safely and effectively.
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
              <a href="tel:+442046340456" className="text-gold hover:underline font-medium">
                020 4634 0456
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

              {/* What is a drone mining survey? */}
              <div>
                <h2 id="what-is-mining-survey" className="text-2xl md:text-3xl font-bold text-teal mb-4 scroll-mt-32">
                  Understanding <span className="text-gold">Drone Mining Surveys</span>
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed mb-4">
                  A UAV mining survey employs drone technology to capture comprehensive survey data from mining operations, quarries, and aggregate facilities. Our UAVs fitted with high-resolution cameras and RTK GPS systems traverse your site, acquiring thousands of images which we transform into precise 3D models, orthomosaics, and volume computations.
                </p>
                <p className="text-text-secondary text-lg leading-relaxed">
                  Skykam Drone Inspections specialises in supporting mining and quarrying operations throughout the UK to monitor progress, oversee stockpiles, and maintain precise site documentation. Our surveys deliver the data essential for stock management, compliance documentation, and operational planning—all gathered without interrupting your activities.
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
                          src="/images/about-surveyor.avif"
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
                          href="tel:+442046340456"
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
                        Precise Mining Survey Data,
                        <span className="text-gold block relative inline-block">
                          Rapid Delivery
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
                          'Precise stockpile measurements',
                          'Excavation mapping & progress reports',
                          'CAD-compatible survey outputs',
                          'Survey-grade precision (±2-5cm)',
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
                        Delivered in 5-7 working days
                      </p>
                    </div>

                    {/* Right: Why choose us */}
                    <div>
                      <h3 className="text-gold font-bold text-sm uppercase tracking-wider mb-3">
                        Why Use HireDronePilot
                      </h3>
                      <ul className="space-y-2.5">
                        {[
                          'CAA certified & comprehensively insured',
                          'Mining & quarry sector experts',
                          'Advanced DJI survey equipment',
                          'Nationwide availability',
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
                        <span>Relied upon by quarry managers and mining firms throughout Britain.</span>
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
                        href="tel:+442046340456"
                        className="flex items-center justify-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white font-semibold transition-colors"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        020 4634 0456
                      </a>
                      <QuoteButton className="btn btn-primary btn-shimmer flex-1 sm:flex-none">
                        Compare Quotes
                      </QuoteButton>
                    </div>
                  </div>

                  {/* Client Logo Marquee */}
                  <div className="mt-6 pt-6 border-t border-white/10">
                    <p className="text-white/50 text-xs uppercase tracking-wider text-center mb-4">Relied upon by industry leaders</p>
                    <ClientLogoMarqueeInline />
                  </div>
                </div>
              </div>

              {/* How much does a drone mining survey cost? */}
              <div>
                <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-6">
                  <Image
                    src="/images/services/mining/mining-cost.avif"
                    alt="Surveyor reviewing drone mining survey data on tablet at quarry site"
                    fill
                    className="object-cover"
                  />
                </div>
                <h2 id="mining-cost" className="text-2xl md:text-3xl font-bold text-teal mb-4 scroll-mt-32">
                  What's the Investment for <span className="text-gold">Drone Mining Surveys</span>?
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed mb-6">
                  Costs vary based on site dimensions and survey specifications. Here's a pricing overview to assist your planning:
                </p>

                {/* Pricing Table */}
                <div className="rounded-xl overflow-hidden border border-border mb-6">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-teal">
                        <th className="text-left text-white font-semibold py-3 px-4">Site Dimensions</th>
                        <th className="text-left text-white font-semibold py-3 px-4">Starting From</th>
                        <th className="text-left text-white font-semibold py-3 px-4 hidden md:table-cell">Common Uses</th>
                        <th className="text-left text-white font-semibold py-3 px-4 hidden lg:table-cell">Outputs</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-white">
                        <td className="py-3 px-4 text-text-primary font-medium">Compact Site<span className="block text-sm text-text-secondary font-normal">Under 10 ha</span></td>
                        <td className="py-3 px-4 text-gold font-bold">£800+</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden md:table-cell">Smaller quarries, individual stockpile zones, sand extraction</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden lg:table-cell">Volume analysis, orthomosaic</td>
                      </tr>
                      <tr className="bg-background-alt">
                        <td className="py-3 px-4 text-text-primary font-medium">Mid-Size Site<span className="block text-sm text-text-secondary font-normal">10–50 ha</span></td>
                        <td className="py-3 px-4 text-gold font-bold">£1,800+</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden md:table-cell">Regional quarry operations, multiple stockpile zones</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden lg:table-cell">Complete survey package + CAD</td>
                      </tr>
                      <tr className="bg-white">
                        <td className="py-3 px-4 text-text-primary font-medium">Extensive Site<span className="block text-sm text-text-secondary font-normal">50–100 ha</span></td>
                        <td className="py-3 px-4 text-gold font-bold">£3,500+</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden md:table-cell">Major quarry facilities, opencast mining sites</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden lg:table-cell">Full package + 3D model</td>
                      </tr>
                      <tr className="bg-background-alt">
                        <td className="py-3 px-4 text-text-primary font-medium">Large-Scale Operation<span className="block text-sm text-text-secondary font-normal">100+ ha</span></td>
                        <td className="py-3 px-4 text-gold font-bold">POA</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden md:table-cell">Major mining facilities, multi-pit operations</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden lg:table-cell">Tailored scope & outputs</td>
                      </tr>
                      <tr className="bg-white">
                        <td className="py-3 px-4 text-text-primary font-medium">Scheduled Monthly<span className="block text-sm text-text-secondary font-normal">Any size</span></td>
                        <td className="py-3 px-4 text-gold font-bold">POA</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden md:table-cell">Ongoing stockpile monitoring, progress documentation</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden lg:table-cell">Comparative analysis included</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-text-secondary text-sm mb-6 italic">
                  *Indicative prices cover standard outputs. Final quotation reflects site complexity, accessibility, and particular needs.
                </p>

                {/* What affects your quote */}
                <h3 className="font-bold text-teal mb-3">Factors influencing your quotation?</h3>
                <ul className="grid grid-cols-2 gap-2 mb-6">
                  {['Site area & topography', 'Stockpile quantity', 'Survey regularity', 'Specific output needs'].map((factor, index) => (
                    <li key={index} className="flex items-center gap-2 text-text-secondary">
                      <svg className="w-4 h-4 text-gold flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm">{factor}</span>
                    </li>
                  ))}
                </ul>

                <p className="text-text-secondary leading-relaxed mb-6">
                  Our UAV mining surveys generally achieve <span className="text-gold font-semibold">50–70%</span> cost savings versus conventional ground surveying, plus your operations continue without interruption. Get in touch for a customised quotation.
                </p>

                {/* CTA Banner */}
                <div className="bg-teal rounded-xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-center sm:text-left">
                    <p className="text-white font-semibold">Prepared to receive pricing for your site?</p>
                    <p className="text-white/70 text-sm">Complimentary, obligation-free quotes within 24 hours</p>
                  </div>
                  <div className="flex gap-3">
                    <a href="tel:+442046340456" className="flex items-center gap-2 px-4 py-2.5 rounded-full border border-white/30 text-white hover:bg-white/10 transition-colors text-sm font-medium">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      Ring
                    </a>
                    <QuoteButton className="px-5 py-2.5 rounded-full bg-gold text-teal-dark font-semibold hover:bg-gold/90 transition-colors text-sm btn-shimmer">
                      Compare Quotes
                    </QuoteButton>
                  </div>
                </div>
              </div>

              {/* Drone Mining Survey vs Traditional Methods */}
              <div>
                <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-6">
                  <Image
                    src="/images/services/mining/mining-comparison.avif"
                    alt="Comparison of drone mining survey versus traditional ground survey methods"
                    fill
                    className="object-cover"
                  />
                </div>
                <h2 id="mining-comparison" className="text-2xl md:text-3xl font-bold text-teal mb-4 scroll-mt-32">
                  How Do <span className="text-gold">Drone Mining Surveys</span> Compare to Conventional Approaches?
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed mb-4">
                  Conventional mining surveys demand that surveyors physically navigate the site carrying total stations or GPS instruments. This necessitates halting operations, securing safe passage to active working faces, and dedicating multiple days on-site to gather thorough data. The outcome is frequently sparse point coverage and considerable operational downtime.
                </p>
                <p className="text-text-secondary text-lg leading-relaxed mb-4">
                  Our UAV mining surveys capture your complete site from above within hours rather than days. We fly securely over active zones, unstable terrain, and unreachable faces without exposing personnel to danger. The outcome is millions of survey points, comprehensive site documentation, and data delivered whilst your operations proceed without pause.
                </p>
                {/* Technology Comparison Cards */}
                <div className="mt-8">
                  <h3 className="text-center font-bold text-teal text-xl mb-6">Select the Optimal Method</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {/* Drone Survey Card */}
                    <div className="relative bg-teal rounded-2xl p-6 overflow-hidden group hover:shadow-xl transition-shadow duration-300">
                      {/* Decorative lines */}
                      <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                        <svg viewBox="0 0 100 100" className="w-full h-full">
                          <line x1="0" y1="0" x2="100" y2="100" stroke="currentColor" strokeWidth="1" className="text-gold" />
                          <line x1="20" y1="0" x2="100" y2="80" stroke="currentColor" strokeWidth="1" className="text-gold" />
                          <line x1="40" y1="0" x2="100" y2="60" stroke="currentColor" strokeWidth="1" className="text-gold" />
                        </svg>
                      </div>
                      <div className="relative z-10">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-12 h-12 bg-gold/20 rounded-xl flex items-center justify-center">
                            <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                          </div>
                          <div>
                            <h4 className="text-white font-bold text-lg">UAV Mining Survey</h4>
                            <p className="text-gold text-sm font-medium">Swift, secure & thorough</p>
                          </div>
                        </div>
                        <div className="space-y-3">
                          {[
                            { Icon: Clock, text: 'Finished in hours, not days' },
                            { Icon: Shield, text: 'Zero personnel in danger zones' },
                            { Icon: TrendingUp, text: 'Millions of measurement points' },
                            { Icon: Mountain, text: 'Complete site documentation' },
                          ].map((item, i) => (
                            <div key={i} className="flex items-center gap-3 bg-white/10 rounded-lg px-4 py-2.5">
                              <item.Icon className="w-5 h-5 text-gold flex-shrink-0" strokeWidth={1.5} />
                              <span className="text-white/90 font-medium">{item.text}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Traditional Survey Card */}
                    <div className="relative bg-white border-2 border-border rounded-2xl p-6 overflow-hidden group hover:border-gold hover:shadow-xl transition-all duration-300">
                      {/* Decorative grid */}
                      <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
                        <svg viewBox="0 0 100 100" className="w-full h-full">
                          <rect x="10" y="10" width="20" height="20" fill="currentColor" className="text-teal" />
                          <rect x="40" y="10" width="20" height="20" fill="currentColor" className="text-teal" />
                          <rect x="70" y="10" width="20" height="20" fill="currentColor" className="text-teal" />
                          <rect x="10" y="40" width="20" height="20" fill="currentColor" className="text-teal" />
                          <rect x="40" y="40" width="20" height="20" fill="currentColor" className="text-teal" />
                          <rect x="70" y="40" width="20" height="20" fill="currentColor" className="text-teal" />
                        </svg>
                      </div>
                      <div className="relative z-10">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-12 h-12 bg-teal/10 rounded-xl flex items-center justify-center">
                            <Ruler className="w-6 h-6 text-teal" />
                          </div>
                          <div>
                            <h4 className="text-teal font-bold text-lg">Conventional Survey</h4>
                            <p className="text-text-secondary text-sm font-medium">Ground-level techniques</p>
                          </div>
                        </div>
                        <div className="space-y-3">
                          {[
                            { Icon: Clock, text: 'Multiple-day site attendance' },
                            { Icon: HardHat, text: 'Staff access necessary' },
                            { Icon: BarChart3, text: 'Restricted point density' },
                            { Icon: Mountain, text: 'Challenging terrain obstacles' },
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
                    <p className="text-text-secondary text-sm mb-2">Uncertain which method fits your operation?</p>
                    <QuoteButton className="text-gold font-semibold hover:underline inline-flex items-center gap-1">
                      Receive professional guidance
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </QuoteButton>
                  </div>
                </div>
              </div>

              {/* What accuracy can a drone mining survey achieve? */}
              <div>
                <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-6">
                  <Image
                    src="/images/services/mining/mining-accuracy.avif"
                    alt="Ground control point marker at mining site for survey accuracy"
                    fill
                    className="object-cover"
                  />
                </div>
                <h2 id="mining-accuracy" className="text-2xl md:text-3xl font-bold text-teal mb-4 scroll-mt-32">
                  What Precision Levels Do <span className="text-gold">Drone Mining Surveys</span> Attain?
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed mb-4">
                  Our UAV mining surveys consistently deliver vertical precision of ±2-5cm and horizontal precision of ±2-3cm when utilising ground control points and RTK positioning. This accuracy standard satisfies requirements for stockpile volume computations, regulatory adherence, and operational planning.
                </p>
                <p className="text-text-secondary text-lg leading-relaxed">
                  For stockpile volumes, this precision equates to measurement accuracy within 1-2% of true volumes—frequently surpassing conventional methods. We validate every survey against established control points and supply accuracy documentation with all outputs, ensuring you can rely on the data informing your crucial business decisions.
                </p>
              </div>

              {/* Applications */}
              <div>
                <h2 id="mining-applications" className="text-2xl md:text-3xl font-bold text-teal mb-4 scroll-mt-32">
                  Where Are <span className="text-gold">Drone Mining Surveys</span> Applied?
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed mb-6">
                  UAV surveys have revolutionised how mining and quarrying operations manage their facilities. These are the primary applications where our clients experience the most significant benefits:
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-background-alt rounded-xl p-6">
                    <h3 className="font-bold text-teal mb-2">Stockpile Quantification</h3>
                    <p className="text-text-secondary text-sm">Precise monthly or quarterly stockpile volumes supporting inventory control, reconciliation, and financial documentation.</p>
                  </div>
                  <div className="bg-background-alt rounded-xl p-6">
                    <h3 className="font-bold text-teal mb-2">Excavation Progress Tracking</h3>
                    <p className="text-text-secondary text-sm">Monitor extraction progress, compare against plans, and compute cut/fill volumes for contractor valuations and scheduling.</p>
                  </div>
                  <div className="bg-background-alt rounded-xl p-6">
                    <h3 className="font-bold text-teal mb-2">Regulatory Compliance & Documentation</h3>
                    <p className="text-text-secondary text-sm">Evidence supporting planning conditions, environmental assessments, and regulatory requirements with precisely dated records.</p>
                  </div>
                  <div className="bg-background-alt rounded-xl p-6">
                    <h3 className="font-bold text-teal mb-2">Restoration Progress Tracking</h3>
                    <p className="text-text-secondary text-sm">Monitor restoration advancement against approved schemes, confirm fill quantities, and document adherence to restoration requirements.</p>
                  </div>
                  <div className="bg-background-alt rounded-xl p-6">
                    <h3 className="font-bold text-teal mb-2">Facility Planning & Design</h3>
                    <p className="text-text-secondary text-sm">Precise topographic data supporting expansion proposals, haul route design, and operational enhancement.</p>
                  </div>
                  <div className="bg-background-alt rounded-xl p-6">
                    <h3 className="font-bold text-teal mb-2">Infrastructure Assessment</h3>
                    <p className="text-text-secondary text-sm">Examine conveyors, crushers, structures, and infrastructure from above, eliminating scaffolding or rope access requirements.</p>
                  </div>
                </div>

                {/* CTA after applications */}
                <div className="mt-8 text-center">
                  <p className="text-text-secondary mb-4">Got a mining or quarry project requiring survey work?</p>
                  <div className="flex flex-wrap justify-center gap-3">
                    <QuoteButton className="btn btn-primary btn-shimmer">
                      Talk Through Your Project
                    </QuoteButton>
                    <a href="tel:+442046340456" className="btn btn-outline">
                      Ring 020 4634 0456
                    </a>
                  </div>
                </div>
              </div>

              {/* How do drones improve mining safety? */}
              <div>
                <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-6">
                  <Image
                    src="/images/services/mining/mining-feature.avif"
                    alt="Drone surveying stockpiles at mining site for volume measurement"
                    fill
                    className="object-cover"
                  />
                </div>
                <h2 id="mining-safety" className="text-2xl md:text-3xl font-bold text-teal mb-4 scroll-mt-32">
                  How Do UAVs Enhance <span className="text-gold">Mining Safety</span>?
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed mb-4">
                  Mining and quarrying sites present inherent hazards. Conventional surveys demand that staff work adjacent to active faces, unstable gradients, and operational machinery. Each moment spent on the pit floor represents exposure to potential danger.
                </p>
                <p className="text-text-secondary text-lg leading-relaxed mb-4">
                  Our UAV surveys remove this exposure completely. We acquire comprehensive site data from the safety of altitude, surveying zones that would prove too hazardous or impractical to reach on foot. Precipitous bench faces, unstable stockpiles, operational haul routes—we survey them all without endangering personnel.
                </p>
                <p className="text-text-secondary text-lg leading-relaxed">
                  Beyond surveying safety, our drone imagery assists in identifying potential hazards: slope instabilities, water accumulation, bench weakness, and access concerns can all be detected from above before they escalate to incidents. Scheduled UAV surveys become integral to your proactive safety management approach.
                </p>
              </div>

              {/* What deliverables? */}
              <div>
                <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-6">
                  <Image
                    src="/images/services/mining/mining-deliverables.avif"
                    alt="Computer screen displaying mining survey reports and volume calculations"
                    fill
                    className="object-cover"
                  />
                </div>
                <h2 id="mining-deliverables" className="text-2xl md:text-3xl font-bold text-teal mb-4 scroll-mt-32">
                  What Outputs Do You Receive From a <span className="text-gold">Drone Mining Survey</span>?
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed mb-6">
                  We customise outputs to match your operational needs, though our standard mining survey deliverables encompass:
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-4 bg-background-alt rounded-xl p-4">
                    <div className="w-10 h-10 bg-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-teal">Excavation Mapping & Surface Models</h4>
                      <p className="text-text-secondary text-sm">Comprehensive 3D models of your pit or quarry depicting benches, faces, haul routes, and all surface features at survey-grade precision.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4 bg-background-alt rounded-xl p-4">
                    <div className="w-10 h-10 bg-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-teal">Volume Computations</h4>
                      <p className="text-text-secondary text-sm">Precise stockpile volumes with itemised breakdowns. Compare with earlier surveys for stock movement analysis.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4 bg-background-alt rounded-xl p-4">
                    <div className="w-10 h-10 bg-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-teal">Progress Monitoring Reports</h4>
                      <p className="text-text-secondary text-sm">Cut/fill analysis displaying extraction advancement, restoration volumes, and comparison against approved schemes.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4 bg-background-alt rounded-xl p-4">
                    <div className="w-10 h-10 bg-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-teal">Safety & Regulatory Documentation</h4>
                      <p className="text-text-secondary text-sm">Documentation supporting regulatory adherence, planning conditions, and safety records with time-stamped imagery evidence.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4 bg-background-alt rounded-xl p-4">
                    <div className="w-10 h-10 bg-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-teal">CAD Files & Three-Dimensional Models</h4>
                      <p className="text-text-secondary text-sm">Survey data in DWG, DXF, and additional CAD formats. 3D mesh models for visualisation and planning software compatibility.</p>
                    </div>
                  </li>
                </ul>

                {/* CTA after deliverables */}
                <div className="mt-6 p-5 bg-gold/10 border border-gold/20 rounded-xl">
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-teal font-semibold text-center sm:text-left">Require particular outputs for your operation?</p>
                    <QuoteButton className="btn btn-primary btn-shimmer whitespace-nowrap">
                      Talk Through Your Needs
                    </QuoteButton>
                  </div>
                </div>
              </div>

              {/* How long does it take? */}
              <div>
                <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-6">
                  <Image
                    src="/images/services/mining/mining-timeline.avif"
                    alt="Drone pilot at mining site preparing DJI drone for survey flight"
                    fill
                    className="object-cover"
                  />
                </div>
                <h2 id="survey-timeline" className="text-2xl md:text-3xl font-bold text-teal mb-4 scroll-mt-32">
                  What's the Duration of a <span className="text-gold">Drone Mining Survey</span>?
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed mb-4">
                  On-site data acquisition is exceptionally rapid compared to conventional approaches. We can survey most quarry sites within a single day, with larger operations requiring 1-2 days. A standard 20-hectare site with multiple stockpiles requires 3-4 hours of flight time.
                </p>
                <p className="text-text-secondary text-lg leading-relaxed mb-6">
                  Processing and delivery varies according to project complexity. Standard outputs are typically prepared within 5-7 working days. For operations needing regular monthly surveys, we can establish streamlined procedures with expedited turnaround. We'll confirm achievable timescales when quoting your project.
                </p>

                {/* Timeline Table */}
                <div className="rounded-xl overflow-hidden border border-border">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-teal">
                        <th className="text-left text-white font-semibold py-3 px-4">Stage</th>
                        <th className="text-left text-white font-semibold py-3 px-4">Timeframe</th>
                        <th className="text-left text-white font-semibold py-3 px-4 hidden md:table-cell">Activities</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-white">
                        <td className="py-3 px-4 text-text-primary font-medium">Planning & Organisation</td>
                        <td className="py-3 px-4 text-gold font-bold">1-2 days</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden md:table-cell">Site coordination, flight planning, safety arrangements</td>
                      </tr>
                      <tr className="bg-background-alt">
                        <td className="py-3 px-4 text-text-primary font-medium">On-Site Data Acquisition</td>
                        <td className="py-3 px-4 text-gold font-bold">½-1 day</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden md:table-cell">GCP deployment, UAV flights, data validation</td>
                      </tr>
                      <tr className="bg-white">
                        <td className="py-3 px-4 text-text-primary font-medium">Data Processing</td>
                        <td className="py-3 px-4 text-gold font-bold">2-3 days</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden md:table-cell">Photogrammetry, model creation, precision verification</td>
                      </tr>
                      <tr className="bg-background-alt">
                        <td className="py-3 px-4 text-text-primary font-medium">Analysis & Documentation</td>
                        <td className="py-3 px-4 text-gold font-bold">2-3 days</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden md:table-cell">Volume computations, comparisons, report preparation</td>
                      </tr>
                      <tr className="bg-teal/10">
                        <td className="py-3 px-4 text-teal font-bold">Overall (Standard)</td>
                        <td className="py-3 px-4 text-teal font-bold">5-7 working days</td>
                        <td className="py-3 px-4 text-teal text-sm font-medium hidden md:table-cell">From site attendance to final delivery</td>
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
                    <p className="text-teal font-semibold text-sm">Scheduled Survey Programmes Offered</p>
                    <p className="text-text-secondary text-sm">Monthly or quarterly surveys featuring streamlined processing and priority booking.</p>
                  </div>
                </div>

                {/* CTA after timeline */}
                <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
                  <QuoteButton className="btn btn-primary btn-shimmer">
                    Begin Your Project
                  </QuoteButton>
                  <a href="tel:+442046340456" className="btn btn-outline flex items-center justify-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Chat With James
                  </a>
                </div>
              </div>

              {/* How to choose a provider */}
              <div>
                <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-6">
                  <Image
                    src="/images/services/mining/mining-provider.avif"
                    alt="Survey team meeting with mining operations client at quarry site"
                    fill
                    className="object-cover"
                  />
                </div>
                <h2 id="choose-provider" className="text-2xl md:text-3xl font-bold text-teal mb-4 scroll-mt-32">
                  How Should I Select a <span className="text-gold">Drone Mining Survey</span> Provider?
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed mb-4">
                  Not every UAV survey provider comprehends the particular demands of mining and quarrying operations. When assessing providers, we suggest verifying these essential factors:
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gold mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-text-primary"><strong>Mining sector background</strong> – Request examples of quarry and mining surveys they've delivered</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gold mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-text-primary"><strong>CAA certification</strong> – Confirm they possess valid GVC permissions for commercial work</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gold mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-text-primary"><strong>Volume precision history</strong> – Enquire about their accuracy record on stockpile quantification</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gold mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-text-primary"><strong>Site safety knowledge</strong> – They must comprehend quarry safety protocols and RAMS documentation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gold mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-text-primary"><strong>Adequate insurance</strong> – Public liability and professional indemnity suitable for mining environments</span>
                  </li>
                </ul>
                <p className="text-text-secondary text-lg leading-relaxed mb-6">
                  At Skykam Drone Inspections, we satisfy every criterion. We're CAA certified, comprehensively insured, and have executed surveys for quarries and mining operations throughout the UK. We appreciate your operational demands and accommodate your timetable.
                </p>

                {/* CTA after provider section */}
                <div className="bg-teal rounded-xl p-5">
                  <p className="text-white font-semibold mb-3">Prepared to collaborate with a dependable mining survey provider?</p>
                  <div className="flex flex-wrap gap-3">
                    <QuoteButton className="px-5 py-2.5 rounded-full bg-gold text-teal-dark font-semibold hover:bg-gold/90 transition-colors text-sm btn-shimmer">
                      Connect With James
                    </QuoteButton>
                    <a href="tel:+442046340456" className="flex items-center gap-2 px-4 py-2.5 rounded-full border border-white/30 text-white hover:bg-white/10 transition-colors text-sm font-medium">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      020 4634 0456
                    </a>
                  </div>
                </div>
              </div>

              {/* Cost comparison */}
              <div>
                <h2 id="cost-comparison" className="text-2xl md:text-3xl font-bold text-teal mb-4 scroll-mt-32">
                  Are <span className="text-gold">Drone Mining Surveys</span> More Economical Than Conventional Methods?
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed mb-4">
                  In nearly every situation, yes—considerably more economical. Conventional ground surveys of operational mining sites demand surveyors spend days on-site, frequently working in demanding conditions whilst operations pause for safe access. The cost of downtime alone regularly surpasses the entire expense of a UAV survey.
                </p>
                <p className="text-text-secondary text-lg leading-relaxed mb-6">
                  Our UAV surveys capture thorough site data within hours rather than days, causing zero operational disruption. Cost savings generally fall between 50-70% compared to conventional approaches. For scheduled monthly surveys, the economics grow even more attractive—we can provide programmed survey packages delivering substantial ongoing savings.
                </p>

                {/* Final CTA */}
                <div className="bg-gradient-to-r from-teal to-teal-dark rounded-xl p-6 text-center">
                  <h3 className="text-white font-bold text-xl mb-2">Prepared to Talk About Your Mining Survey?</h3>
                  <p className="text-white/80 text-sm mb-4">Professional guidance • Customised pricing • Avg Response within 5 Mins</p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <QuoteButton className="btn btn-primary btn-shimmer">
                      Compare Quotes
                    </QuoteButton>
                    <a href="tel:+442046340456" className="btn bg-white text-teal hover:bg-white/90 flex items-center justify-center gap-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      Ring James Now
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
                      src="/images/about-surveyor.avif"
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
                  Drawing on comprehensive expertise in surveying and UAV operations, James personally manages every mining survey project, guaranteeing precision and professional completion.
                </p>
              </div>

              {/* Table of Contents */}
              <div className="bg-background-alt border border-border rounded-2xl p-6">
                <h3 className="text-teal font-bold text-lg mb-4">
                  Quick Guide: UAV Mining Surveys Overview
                </h3>
                <nav className="space-y-2">
                  {[
                    { id: 'what-is-mining-survey', label: 'Understanding UAV Mining Surveys' },
                    { id: 'mining-cost', label: 'Investment for UAV Mining Surveys' },
                    { id: 'mining-comparison', label: 'UAV vs Conventional Mining Survey Methods' },
                    { id: 'mining-accuracy', label: 'Precision Levels in UAV Mining Surveys' },
                    { id: 'mining-applications', label: 'UAV Mining Survey Applications' },
                    { id: 'mining-safety', label: 'UAV Enhancement of Mining Safety' },
                    { id: 'mining-deliverables', label: 'UAV Mining Survey Outputs' },
                    { id: 'survey-timeline', label: 'UAV Mining Survey Duration' },
                    { id: 'choose-provider', label: 'Selecting a UAV Mining Survey Provider' },
                    { id: 'cost-comparison', label: 'UAV vs Conventional Mining Survey Economics' },
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
                  Mining Survey Outputs
                </h3>
                <ul className="space-y-3">
                  {[
                    'Excavation mapping & surface models',
                    'Volume computations',
                    'Progress monitoring reports',
                    'Safety & regulatory documentation',
                    'CAD files (DWG/DXF)',
                    '3D mesh models',
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
                  Receive professional guidance and customised pricing.
                </p>
                <form name="sidebar-quote" method="POST" data-netlify="true" className="space-y-3">
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

      {/* Related Services */}
      <section className="py-16 bg-background-alt">
        <div className="container">
          <h2 className="text-2xl font-bold text-teal mb-8 text-center">
            Associated Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link
              href="/services/drone-topographic-survey"
              className="bg-white border border-border rounded-xl p-6 hover:border-gold hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-teal font-bold text-lg mb-2">UAV Topographic Survey</h3>
              <p className="text-text-secondary text-sm">
                Comprehensive topographic surveys supporting planning, design and engineering initiatives.
              </p>
            </Link>
            <Link
              href="/services/volumetric-analysis"
              className="bg-white border border-border rounded-xl p-6 hover:border-gold hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-teal font-bold text-lg mb-2">Volumetric Assessment</h3>
              <p className="text-text-secondary text-sm">
                Precise stockpile quantification and cut/fill computations derived from drone data.
              </p>
            </Link>
            <Link
              href="/services/lidar-mapping"
              className="bg-white border border-border rounded-xl p-6 hover:border-gold hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-teal font-bold text-lg mb-2">LiDAR Surveying</h3>
              <p className="text-text-secondary text-sm">
                High-precision LiDAR scanning producing detailed terrain models penetrating vegetation.
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
