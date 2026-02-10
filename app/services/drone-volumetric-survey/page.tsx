import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import QuoteButton from '@/components/QuoteButton';
import Testimonials from '@/components/Testimonials';
import FloatingCTA from '@/components/FloatingCTA';
import EquipmentSection from '@/components/EquipmentSection';
import { ServiceSchema, BreadcrumbSchema } from '@/components/SchemaMarkup';
import { ClientLogoMarqueeInline } from '@/components/ClientLogoMarquee';
import { Mountain, Factory, HardHat, Warehouse, TrendingUp, Repeat, Ruler, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Drone Volumetric Measurement Services | Stockpile Surveys UK | Skykam Drone Inspections',
  description: 'Expert drone volumetric measurement services throughout the UK. Precise stockpile calculations, earthworks analysis, and material quantification. 1-3% accuracy guaranteed.',
  keywords: 'drone volumetric survey, stockpile measurement, drone volume calculation, drone cut fill analysis, drone quarry survey, aggregate measurement, drone volumetric analysis',
};

export default function DroneVolumetricSurveyPage() {
  return (
    <>
      <ServiceSchema
        name="Drone Volumetric Survey Services"
        description="Professional drone volumetric survey services across the UK. Accurate stockpile measurements, cut/fill analysis, and volume calculations. 1-3% accuracy guaranteed."
        url="https://skykam.co.uk/services/drone-volumetric-survey"
      />
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://skykam.co.uk" },
        { name: "Services", url: "https://skykam.co.uk/services" },
        { name: "Drone Volumetric Survey Services", url: "https://skykam.co.uk/services/drone-volumetric-survey" }
      ]} />
      {/* Hero Section */}
      <section className="relative min-h-[800px] md:min-h-[600px] flex items-start bg-teal -mt-[120px] pt-[120px] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/services/volumetric/volumetric-hero.avif"
            alt="Drone photography of quarry stockpiles with volume measurement overlay"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-teal-dark via-teal-dark/90 via-40% to-teal-dark/40 z-10" />
        </div>
        <div className="container pt-8 pb-52 lg:pb-40 lg:pt-12 relative z-10">
          <div className="max-w-3xl">
            <p className="text-gold font-semibold uppercase tracking-wider mb-3">
              Surveying & Mapping
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Drone Volumetric Survey Service
            </h1>
            <p className="text-white/80 text-lg md:text-xl mb-8">
              Accurate stockpile quantification and material calculations through advanced UAV technology. Quicker, safer, and more reliable than conventional approaches.
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

              {/* What is a drone volumetric survey? */}
              <div>
                <h2 id="what-is-volumetric" className="text-2xl md:text-3xl font-bold text-teal mb-4 scroll-mt-32">
                  Understanding <span className="text-gold">Drone Volumetric Surveys</span>
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed mb-4">
                  A UAV volumetric survey employs drone photogrammetry to determine the exact volume of material stockpiles, excavations, and earthworks. Our drones photograph hundreds of overlapping frames that transform into comprehensive 3D models, enabling automatic extraction of precise volume data.
                </p>
                <p className="text-text-secondary text-lg leading-relaxed">
                  Skykam Drone Inspections provides volumetric surveys achieving 1-3% accuracy—frequently surpassing the precision of conventional ground-based techniques. Whether you need aggregate stockpile measurements at a quarry, earthworks monitoring on a construction project, or material inventory verification, our UAV surveys deliver the information you require swiftly and without risk.
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
                        Precise Volume Data,
                        <span className="text-gold block relative inline-block">
                          Rapid Turnaround
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
                          'Certified volume documentation (PDF)',
                          'Cut/fill analysis with colour visualisations',
                          '3D stockpile models (OBJ/mesh)',
                          '1-3% measurement accuracy',
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
                        Complete within 3-5 working days
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
                          'Dedicated volumetric processing expertise',
                          'Latest DJI survey equipment',
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
                        <span>Relied upon by quarries, building contractors & material suppliers throughout the UK.</span>
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
                    <p className="text-white/50 text-xs uppercase tracking-wider text-center mb-4">Chosen by industry leaders</p>
                    <ClientLogoMarqueeInline />
                  </div>
                </div>
              </div>

              {/* How much does a drone volumetric survey cost? */}
              <div>
                <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-6">
                  <Image
                    src="/images/services/volumetric/volumetric-cost.avif"
                    alt="Surveyor reviewing volumetric measurement data on tablet at quarry site"
                    fill
                    className="object-cover"
                  />
                </div>
                <h2 id="volumetric-cost" className="text-2xl md:text-3xl font-bold text-teal mb-4 scroll-mt-32">
                  <span className="text-gold">Drone Volumetric Survey</span> Pricing Guide
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed mb-6">
                  Costs vary based on stockpile quantity and site requirements. Use this guide for budget planning:
                </p>

                {/* Pricing Table */}
                <div className="rounded-xl overflow-hidden border border-border mb-6">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-teal">
                        <th className="text-left text-white font-semibold py-3 px-4">Project Scale</th>
                        <th className="text-left text-white font-semibold py-3 px-4">Indicative Cost</th>
                        <th className="text-left text-white font-semibold py-3 px-4 hidden md:table-cell">Common Uses</th>
                        <th className="text-left text-white font-semibold py-3 px-4 hidden lg:table-cell">Outputs</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-white">
                        <td className="py-3 px-4 text-text-primary font-medium">Single Stockpile<span className="block text-sm text-text-secondary font-normal">1 pile</span></td>
                        <td className="py-3 px-4 text-gold font-bold">£400+</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden md:table-cell">Individual assessments, rapid checks</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden lg:table-cell">Volume report, orthomosaic</td>
                      </tr>
                      <tr className="bg-background-alt">
                        <td className="py-3 px-4 text-text-primary font-medium">Small Site<span className="block text-sm text-text-secondary font-normal">2-5 piles</span></td>
                        <td className="py-3 px-4 text-gold font-bold">£600+</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden md:table-cell">Compact quarries, building merchants</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden lg:table-cell">Volume report, 3D models</td>
                      </tr>
                      <tr className="bg-white">
                        <td className="py-3 px-4 text-text-primary font-medium">Medium Site<span className="block text-sm text-text-secondary font-normal">5-10 piles</span></td>
                        <td className="py-3 px-4 text-gold font-bold">£900+</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden md:table-cell">Working quarries, recycling facilities</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden lg:table-cell">Full suite + reconciliation</td>
                      </tr>
                      <tr className="bg-background-alt">
                        <td className="py-3 px-4 text-text-primary font-medium">Large Site<span className="block text-sm text-text-secondary font-normal">10-20 piles</span></td>
                        <td className="py-3 px-4 text-gold font-bold">£1,400+</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden md:table-cell">Major quarries, industrial storage yards</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden lg:table-cell">Full suite + change detection</td>
                      </tr>
                      <tr className="bg-white">
                        <td className="py-3 px-4 text-text-primary font-medium">Recurring Monthly<span className="block text-sm text-text-secondary font-normal">Regular surveys</span></td>
                        <td className="py-3 px-4 text-gold font-bold">POA</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden md:table-cell">Stock tracking, inventory oversight</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden lg:table-cell">Custom reporting package</td>
                      </tr>
                      <tr className="bg-background-alt">
                        <td className="py-3 px-4 text-text-primary font-medium">Enterprise<span className="block text-sm text-text-secondary font-normal">Multi-site</span></td>
                        <td className="py-3 px-4 text-gold font-bold">POA</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden md:table-cell">National drone operators, distributed locations</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden lg:table-cell">Bespoke scope & SLA</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-text-secondary text-sm mb-6 italic">
                  *Indicative prices cover standard outputs. Final quotation depends on site accessibility, stockpile dimensions, and particular needs.
                </p>

                {/* What affects your quote */}
                <h3 className="font-bold text-teal mb-3">Factors influencing your quotation</h3>
                <ul className="grid grid-cols-2 gap-2 mb-6">
                  {['Stockpile count', 'Site accessibility & safety', 'Required turnaround', 'Survey frequency'].map((factor, index) => (
                    <li key={index} className="flex items-center gap-2 text-text-secondary">
                      <svg className="w-4 h-4 text-gold flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm">{factor}</span>
                    </li>
                  ))}
                </ul>

                <p className="text-text-secondary leading-relaxed mb-6">
                  Our UAV volumetric surveys typically cost <span className="text-gold font-semibold">50-70% less</span> than conventional surveying approaches while producing results in a fraction of the time. Share your requirements with us and receive a customised quotation within 24 hours.
                </p>

                {/* CTA Banner */}
                <div className="bg-teal rounded-xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-center sm:text-left">
                    <p className="text-white font-semibold">Prepared to receive a project quotation?</p>
                    <p className="text-white/70 text-sm">Complimentary, no-commitment quotes within 24 hours</p>
                  </div>
                  <div className="flex gap-3">
                    <a href="tel:+442046340456" className="flex items-center gap-2 px-4 py-2.5 rounded-full border border-white/30 text-white hover:bg-white/10 transition-colors text-sm font-medium">
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

              {/* Drone vs Traditional */}
              <div>
                <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-6">
                  <Image
                    src="/images/services/volumetric/volumetric-comparison.avif"
                    alt="Drone volumetric survey compared to traditional tape measurement methods"
                    fill
                    className="object-cover"
                  />
                </div>
                <h2 id="volumetric-vs-traditional" className="text-2xl md:text-3xl font-bold text-teal mb-4 scroll-mt-32">
                  <span className="text-gold">Drone Volumetric Survey</span> vs Conventional Measurement Methods
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed mb-4">
                  Conventional stockpile measurement depends on physical tape readings, GPS surveys with rod measurements, or wheel-based techniques. Surveyors must physically traverse around and across stockpiles—a labour-intensive process that introduces safety hazards and frequently overlooks irregular contours and surface variations.
                </p>
                <p className="text-text-secondary text-lg leading-relaxed mb-4">
                  UAV volumetric surveys record thousands of surface points without personnel setting foot on the stockpile. Our drone methodology generates comprehensive 3D models capturing every undulation, gradient, and irregularity. This delivers swifter data acquisition, enhanced safety, and measurements typically surpassing ground-based methods in accuracy.
                </p>
                {/* Technology Comparison Cards */}
                <div className="mt-8">
                  <h3 className="text-center font-bold text-teal text-xl mb-6">Side-by-Side Overview</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {/* Drone Card */}
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
                            <h4 className="text-white font-bold text-lg">UAV Volumetric Survey</h4>
                            <p className="text-gold text-sm font-medium">Contemporary method</p>
                          </div>
                        </div>
                        <div className="space-y-3">
                          {[
                            { Icon: Clock, text: 'Complete in minutes, not hours' },
                            { Icon: TrendingUp, text: '1-3% accuracy guaranteed' },
                            { Icon: Mountain, text: 'Zero stockpile climbing' },
                            { Icon: Repeat, text: 'Simple repeat surveys' },
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
                            <h4 className="text-teal font-bold text-lg">Conventional Methods</h4>
                            <p className="text-text-secondary text-sm font-medium">Ground-level approach</p>
                          </div>
                        </div>
                        <div className="space-y-3">
                          {[
                            { text: 'Hours per stockpile' },
                            { text: '5-15% typical accuracy' },
                            { text: 'Climbing & safety hazards' },
                            { text: 'Labour-intensive process' },
                          ].map((item, i) => (
                            <div key={i} className="flex items-center gap-3 bg-background-alt rounded-lg px-4 py-2.5">
                              <svg className="w-5 h-5 text-text-secondary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                              </svg>
                              <span className="text-text-primary font-medium">{item.text}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Not sure? CTA */}
                  <div className="mt-6 text-center">
                    <p className="text-text-secondary text-sm mb-2">Curious about potential savings?</p>
                    <QuoteButton className="text-gold font-semibold hover:underline inline-flex items-center gap-1">
                      Compare Quotes
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </QuoteButton>
                  </div>
                </div>
              </div>

              {/* What accuracy can a drone volumetric survey achieve? */}
              <div>
                <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-6">
                  <Image
                    src="/images/services/volumetric/volumetric-accuracy.avif"
                    alt="Ground control point at quarry for volumetric survey accuracy"
                    fill
                    className="object-cover"
                  />
                </div>
                <h2 id="volumetric-accuracy" className="text-2xl md:text-3xl font-bold text-teal mb-4 scroll-mt-32">
                  Precision Levels in <span className="text-gold">Drone Volumetric Surveys</span>
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed mb-4">
                  Our UAV volumetric surveys reliably achieve 1-3% accuracy for volume calculations. This precision level satisfies or surpasses requirements for stock management, financial documentation, and regulatory adherence throughout the aggregates and mining sectors.
                </p>
                <p className="text-text-secondary text-lg leading-relaxed">
                  We attain this precision using RTK/PPK-equipped drones, strategically positioned ground control points, and meticulous processing protocols. Every survey undergoes quality verification against known volumes and control markers prior to delivery. For clients demanding maximum precision, we can deploy enhanced ground control networks to achieve accuracy below 1%.
                </p>
              </div>

              {/* Applications */}
              <div>
                <h2 id="volumetric-applications" className="text-2xl md:text-3xl font-bold text-teal mb-4 scroll-mt-32">
                  Industry Uses for <span className="text-gold">Drone Volumetric Surveys</span>
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed mb-6">
                  UAV volumetric surveys benefit numerous industries where precise volume measurement proves essential for operations, compliance, or financial documentation:
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-background-alt rounded-xl p-6">
                    <h3 className="font-bold text-teal mb-2">Quarries & Mining Operations</h3>
                    <p className="text-text-secondary text-sm">Stock auditing, extraction monitoring, reserve estimations, and royalty confirmation for aggregates, sand, gravel, and mineral sites.</p>
                  </div>
                  <div className="bg-background-alt rounded-xl p-6">
                    <h3 className="font-bold text-teal mb-2">Construction Projects</h3>
                    <p className="text-text-secondary text-sm">Cut/fill computations, earthworks progress tracking, material monitoring, and contractor validation for civil engineering schemes.</p>
                  </div>
                  <div className="bg-background-alt rounded-xl p-6">
                    <h3 className="font-bold text-teal mb-2">Waste & Recycling Facilities</h3>
                    <p className="text-text-secondary text-sm">Landfill capacity assessment, waste volume monitoring, regulatory compliance documentation, and void space determination.</p>
                  </div>
                  <div className="bg-background-alt rounded-xl p-6">
                    <h3 className="font-bold text-teal mb-2">Ports & Logistics Hubs</h3>
                    <p className="text-text-secondary text-sm">Bulk cargo quantification, coal and ore stockpiles, inventory oversight, and shipping confirmation.</p>
                  </div>
                  <div className="bg-background-alt rounded-xl p-6">
                    <h3 className="font-bold text-teal mb-2">Agricultural Operations</h3>
                    <p className="text-text-secondary text-sm">Silage pits, grain storage, fertiliser stockpiles, and crop residue volumes for farm administration.</p>
                  </div>
                  <div className="bg-background-alt rounded-xl p-6">
                    <h3 className="font-bold text-teal mb-2">Material Supply Yards</h3>
                    <p className="text-text-secondary text-sm">Building merchants, concrete plants, and material depots needing periodic stock reviews and inventory confirmation.</p>
                  </div>
                </div>

                {/* CTA after applications */}
                <div className="mt-8 text-center">
                  <p className="text-text-secondary mb-4">Require precise volume data?</p>
                  <div className="flex flex-wrap justify-center gap-3">
                    <QuoteButton className="btn btn-primary btn-shimmer">
                      Talk About Your Project
                    </QuoteButton>
                    <a href="tel:+442046340456" className="btn btn-outline">
                      Ring 020 4634 0456
                    </a>
                  </div>
                </div>
              </div>

              {/* How Accurate Are Drone Volume Measurements? */}
              <div>
                <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-6">
                  <Image
                    src="/images/services/volumetric/volumetric-feature.avif"
                    alt="Cut/fill analysis visualization with colour-coded volume changes"
                    fill
                    className="object-cover"
                  />
                </div>
                <h2 id="measurement-accuracy" className="text-2xl md:text-3xl font-bold text-teal mb-4 scroll-mt-32">
                  Reliability of <span className="text-gold">Drone Volume Measurements</span>
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed mb-4">
                  Drone volumetric measurements deliver exceptional accuracy—typically within 1-3% of true volumes. This precision stems from combining high-resolution photogrammetry, exact GPS positioning, and advanced 3D modelling software that captures the authentic surface profile of every stockpile.
                </p>
                <p className="text-text-secondary text-lg leading-relaxed mb-6">
                  Independent research confirms drone surveys consistently surpass conventional tape and GPS rod techniques, which typically manage only 5-15% accuracy. The decisive advantage lies in coverage: whilst traditional methods sample limited points, drone surveys capture millions of surface coordinates defining the complete geometry of each stockpile.
                </p>

                {/* Accuracy Stats Box */}
                <div className="bg-gold/10 border border-gold/30 rounded-xl p-6">
                  <h3 className="text-teal font-bold text-lg mb-4">Precision Benchmarks</h3>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <p className="text-3xl font-bold text-gold">1-3%</p>
                      <p className="text-text-secondary text-sm">UAV Survey</p>
                    </div>
                    <div>
                      <p className="text-3xl font-bold text-text-secondary">5-10%</p>
                      <p className="text-text-secondary text-sm">GPS Rod</p>
                    </div>
                    <div>
                      <p className="text-3xl font-bold text-text-secondary">10-15%</p>
                      <p className="text-text-secondary text-sm">Tape Measure</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* What deliverables? */}
              <div>
                <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-6">
                  <Image
                    src="/images/services/volumetric/volumetric-deliverables.avif"
                    alt="Computer screen showing volumetric reports and 3D stockpile models"
                    fill
                    className="object-cover"
                  />
                </div>
                <h2 id="volumetric-deliverables" className="text-2xl md:text-3xl font-bold text-teal mb-4 scroll-mt-32">
                  Outputs From Your <span className="text-gold">Drone Volumetric Survey</span>
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed mb-6">
                  We customise outputs to match your needs, though our standard volumetric survey package comprises:
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-4 bg-background-alt rounded-xl p-4">
                    <div className="w-10 h-10 bg-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-teal">Volume Documentation (PDF)</h4>
                      <p className="text-text-secondary text-sm">Certified volume computations for each stockpile featuring methodology, accuracy declarations, and summary tables prepared for auditing.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4 bg-background-alt rounded-xl p-4">
                    <div className="w-10 h-10 bg-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-teal">Cut/Fill Assessment</h4>
                      <p className="text-text-secondary text-sm">Colour-graded maps displaying volume variations between surveys. Vital for monitoring earthworks advancement and material transfer.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4 bg-background-alt rounded-xl p-4">
                    <div className="w-10 h-10 bg-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-teal">3D Stockpile Reconstructions</h4>
                      <p className="text-text-secondary text-sm">Comprehensive mesh models (OBJ format) viewable in standard 3D applications or integrated into your management platforms.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4 bg-background-alt rounded-xl p-4">
                    <div className="w-10 h-10 bg-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-teal">Orthomosaic Imagery</h4>
                      <p className="text-text-secondary text-sm">High-definition drone photography of your site, georeferenced and compatible with GIS applications or basic visual assessment.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4 bg-background-alt rounded-xl p-4">
                    <div className="w-10 h-10 bg-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-teal">Reconciliation Analysis</h4>
                      <p className="text-text-secondary text-sm">Material flow assessment comparing surveyed volumes against sales/dispatch records to highlight variances.</p>
                    </div>
                  </li>
                </ul>

                {/* CTA after deliverables */}
                <div className="mt-6 p-5 bg-gold/10 border border-gold/20 rounded-xl">
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-teal font-semibold text-center sm:text-left">Require particular outputs for your project?</p>
                    <QuoteButton className="btn btn-primary btn-shimmer whitespace-nowrap">
                      Explore Your Needs
                    </QuoteButton>
                  </div>
                </div>
              </div>

              {/* How long does it take? */}
              <div>
                <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-6">
                  <Image
                    src="/images/services/volumetric/volumetric-timeline.avif"
                    alt="Drone pilot at quarry preparing for volumetric survey flight"
                    fill
                    className="object-cover"
                  />
                </div>
                <h2 id="survey-timeline" className="text-2xl md:text-3xl font-bold text-teal mb-4 scroll-mt-32">
                  <span className="text-gold">Drone Volumetric Survey</span> Timeframes
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed mb-4">
                  Field data acquisition is impressively swift. A standard site containing 5-10 stockpiles can be surveyed within 1-2 hours, including preparation and ground control setup. Even extensive quarries with 20+ stockpiles seldom require more than half a day.
                </p>
                <p className="text-text-secondary text-lg leading-relaxed mb-6">
                  Processing and delivery timescales depend on project complexity. Standard volume documentation is typically prepared within 3-5 working days. For time-sensitive requirements, we provide express processing with 24-48 hour delivery available at supplementary cost.
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
                        <td className="py-3 px-4 text-text-primary font-medium">Planning & Scheduling</td>
                        <td className="py-3 px-4 text-gold font-bold">1-2 days</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden md:table-cell">Site evaluation, flight preparation, appointment booking</td>
                      </tr>
                      <tr className="bg-background-alt">
                        <td className="py-3 px-4 text-text-primary font-medium">Field Survey</td>
                        <td className="py-3 px-4 text-gold font-bold">1-4 hours</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden md:table-cell">GCP deployment, UAV flights, data validation</td>
                      </tr>
                      <tr className="bg-white">
                        <td className="py-3 px-4 text-text-primary font-medium">Data Processing</td>
                        <td className="py-3 px-4 text-gold font-bold">1-2 days</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden md:table-cell">Photogrammetry, 3D model creation</td>
                      </tr>
                      <tr className="bg-background-alt">
                        <td className="py-3 px-4 text-text-primary font-medium">Volume Computation</td>
                        <td className="py-3 px-4 text-gold font-bold">1 day</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden md:table-cell">Stockpile extraction, volume analysis, quality checks</td>
                      </tr>
                      <tr className="bg-white">
                        <td className="py-3 px-4 text-text-primary font-medium">Report Preparation</td>
                        <td className="py-3 px-4 text-gold font-bold">1 day</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden md:table-cell">Volume documentation, deliverables compilation</td>
                      </tr>
                      <tr className="bg-teal/10">
                        <td className="py-3 px-4 text-teal font-bold">Total (Standard)</td>
                        <td className="py-3 px-4 text-teal font-bold">3-5 working days</td>
                        <td className="py-3 px-4 text-teal text-sm font-medium hidden md:table-cell">From site attendance to completed delivery</td>
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
                    <p className="text-teal font-semibold text-sm">Expedited Processing Offered</p>
                    <p className="text-text-secondary text-sm">Require faster delivery? 24-48 hour turnaround offered for time-critical projects.</p>
                  </div>
                </div>

                {/* CTA after timeline */}
                <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
                  <QuoteButton className="btn btn-primary btn-shimmer">
                    Launch Your Project
                  </QuoteButton>
                  <a href="tel:+442046340456" className="btn btn-outline flex items-center justify-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Chat with James
                  </a>
                </div>
              </div>

              {/* How to choose a provider */}
              <div>
                <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-6">
                  <Image
                    src="/images/services/volumetric/volumetric-provider.avif"
                    alt="Survey team meeting with quarry manager for volumetric survey planning"
                    fill
                    className="object-cover"
                  />
                </div>
                <h2 id="choose-provider" className="text-2xl md:text-3xl font-bold text-teal mb-4 scroll-mt-32">
                  Selecting Your <span className="text-gold">Drone Volumetric Survey</span> Partner
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed mb-4">
                  Not every drone survey company possesses the expertise for precise volumetric work. When assessing providers, verify these essential criteria:
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gold mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-text-primary"><strong>CAA certification</strong> – Confirm they maintain valid GVC or legacy PfCO permits for commercial work</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gold mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-text-primary"><strong>Comprehensive insurance</strong> – Public liability and professional indemnity coverage suited to your sector</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gold mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-text-primary"><strong>Volumetric expertise</strong> – Enquire directly about stockpile measurement precision and techniques</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gold mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-text-primary"><strong>RTK/PPK technology</strong> – Critical for attaining accuracy standards needed for financial documentation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gold mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-text-primary"><strong>Sector references</strong> – Seek testimonials from comparable operations within your industry</span>
                  </li>
                </ul>
                <p className="text-text-secondary text-lg leading-relaxed mb-6">
                  Skykam Drone Inspections meets every criterion. We hold CAA approval, carry full insurance, and have completed volumetric surveys for quarries, construction sites, and material suppliers across the UK. Our RTK-equipped technology and stringent processing protocols guarantee the precision your business relies upon.
                </p>

                {/* CTA after provider section */}
                <div className="bg-teal rounded-xl p-5">
                  <p className="text-white font-semibold mb-3">Prepared to partner with a reliable volumetric survey specialist?</p>
                  <div className="flex flex-wrap gap-3">
                    <QuoteButton className="px-5 py-2.5 rounded-full bg-gold text-teal-dark font-semibold hover:bg-gold/90 transition-colors text-sm btn-shimmer">
                      Reach Out to James
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
                  <span className="text-gold">Drone Volumetric Survey</span> Cost Advantages Over Traditional Methods
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed mb-4">
                  Yes—considerably so in most situations. Conventional volumetric surveys demand surveyors physically measure stockpiles using tape measures, GPS rovers, or laser instruments. This proves time-consuming, resource-intensive, and frequently necessitates multiple site visits for expansive yards.
                </p>
                <p className="text-text-secondary text-lg leading-relaxed mb-6">
                  Our UAV surveys capture equivalent data in a fraction of the time. A site requiring a ground team an entire day can be surveyed within hours. Cost reductions typically reach 50-70% versus traditional approaches, whilst providing swifter delivery and frequently superior accuracy. For ongoing surveys, the value proposition strengthens further with our monthly arrangements.
                </p>

                {/* Final CTA */}
                <div className="bg-gradient-to-r from-teal to-teal-dark rounded-xl p-6 text-center">
                  <h3 className="text-white font-bold text-xl mb-2">Prepared to Explore Your Volumetric Survey Needs?</h3>
                  <p className="text-white/80 text-sm mb-4">Professional guidance • Customised pricing • Avg Response within 5 Mins</p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <QuoteButton className="btn btn-primary btn-shimmer">
                      Obtain Project Quote
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
                  Bringing substantial expertise in surveying and UAV operations, James directly supervises every volumetric project ensuring measurement precision and professional completion.
                </p>
              </div>

              {/* Table of Contents */}
              <div className="bg-background-alt border border-border rounded-2xl p-6">
                <h3 className="text-teal font-bold text-lg mb-4">
                  Quick Guide: UAV Volumetric Surveys
                </h3>
                <nav className="space-y-2">
                  {[
                    { id: 'what-is-volumetric', label: 'Understanding UAV Volumetric Surveys' },
                    { id: 'volumetric-cost', label: 'UAV Volumetric Survey Pricing Guide' },
                    { id: 'volumetric-vs-traditional', label: 'UAV vs Conventional Measurement Methods' },
                    { id: 'volumetric-accuracy', label: 'Precision Levels in UAV Volumetric Surveys' },
                    { id: 'volumetric-applications', label: 'Industry Uses for UAV Volumetric Surveys' },
                    { id: 'measurement-accuracy', label: 'Reliability of Drone Volume Measurements' },
                    { id: 'volumetric-deliverables', label: 'Outputs From Your UAV Volumetric Survey' },
                    { id: 'survey-timeline', label: 'UAV Volumetric Survey Timeframes' },
                    { id: 'choose-provider', label: 'Selecting Your UAV Volumetric Survey Partner' },
                    { id: 'cost-comparison', label: 'UAV Survey Cost Advantages' },
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
                  Survey Outputs
                </h3>
                <ul className="space-y-3">
                  {[
                    'Volume documentation (PDF)',
                    'Cut/fill assessment',
                    '3D stockpile reconstructions',
                    'Change monitoring',
                    'Orthomosaic imagery',
                    'Reconciliation analysis',
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
                  Talk About Your Project
                </h3>
                <p className="text-white/70 text-sm mb-4">
                  Receive professional guidance and bespoke pricing.
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
            Connected Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link
              href="/services/drone-survey"
              className="bg-white border border-border rounded-xl p-6 hover:border-gold hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-teal font-bold text-lg mb-2">Drone Survey</h3>
              <p className="text-text-secondary text-sm">
                Thorough drone surveys producing accurate topographic information and 3D representations.
              </p>
            </Link>
            <Link
              href="/services/drone-topographic-survey"
              className="bg-white border border-border rounded-xl p-6 hover:border-gold hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-teal font-bold text-lg mb-2">Topographic Mapping</h3>
              <p className="text-text-secondary text-sm">
                In-depth topographic surveys supporting planning, design and construction endeavours.
              </p>
            </Link>
            <Link
              href="/services/lidar-mapping"
              className="bg-white border border-border rounded-xl p-6 hover:border-gold hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-teal font-bold text-lg mb-2">LiDAR Surveying</h3>
              <p className="text-text-secondary text-sm">
                High-precision LiDAR scanning for terrain modelling and vegetation canopy penetration.
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
