import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import QuoteButton from '@/components/QuoteButton';
import Testimonials from '@/components/Testimonials';
import FloatingCTA from '@/components/FloatingCTA';
import EquipmentSection from '@/components/EquipmentSection';
import { ServiceSchema, BreadcrumbSchema } from '@/components/SchemaMarkup';
import { ClientLogoMarqueeInline } from '@/components/ClientLogoMarquee';
import { Factory, Thermometer, Shield, Gauge, Warehouse, Zap, Clock, FileText, MapPin, Camera } from 'lucide-react';

export const metadata: Metadata = {
  title: 'UAV Industrial Survey Services | Industrial Mapping UK | Skykam Drone Inspections',
  description: 'Expert drone industrial survey services throughout the UK. Asset mapping, facility inspections, and infrastructure surveys for factories, warehouses, and industrial sites. CAA certified drone operators.',
  keywords: 'drone industrial survey, industrial drone survey, drone industrial site mapping, drone factory survey, drone warehouse survey, drone industrial asset mapping, industrial inspection drone',
};

export default function DroneIndustrialSurveyPage() {
  return (
    <>
      <ServiceSchema
        name="UAV Industrial Survey Services"
        description="Expert drone industrial survey services throughout the UK. Asset mapping, facility inspections, and infrastructure surveys for factories, warehouses, and industrial sites. CAA certified drone operators."
        url="https://skykam.co.uk/services/drone-industrial-survey"
      />
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://skykam.co.uk" },
        { name: "Services", url: "https://skykam.co.uk/services" },
        { name: "UAV Industrial Survey Services", url: "https://skykam.co.uk/services/drone-industrial-survey" }
      ]} />

      {/* Hero Section */}
      <section className="relative min-h-[800px] md:min-h-[600px] flex items-start bg-teal -mt-[120px] pt-[120px] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/services/industrial/industrial-hero.avif"
            alt="Drone view of UK industrial facility with factories and warehouses"
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
              Drone Industrial Survey Service
            </h1>
            <p className="text-white/80 text-lg md:text-xl mb-8">
              Thorough drone surveys for industrial facilities, factories, warehouses, and manufacturing sites. Minimise downtime with rapid data capture.
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
              Avg Response within 5 Mins • Or call{' '}
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

              {/* What is a drone industrial survey? */}
              <div>
                <h2 id="what-is-industrial" className="text-2xl md:text-3xl font-bold text-teal mb-4 scroll-mt-32">
                  Understanding <span className="text-gold">Drone Industrial Surveys</span>
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed mb-4">
                  A drone industrial survey uses UAV technology to capture thorough data of industrial facilities, manufacturing plants, warehouses, and production sites. Our UAVs equipped with high-resolution cameras and sensors can map entire facilities, inspect rooftops and infrastructure, and create detailed records of your industrial assets.
                </p>
                <p className="text-text-secondary text-lg leading-relaxed">
                  At Skykam Drone Inspections, we specialise in surveys of active industrial sites throughout the UK. Our approach minimises operational disruption while delivering the accurate spatial data you need for facility management, maintenance planning, insurance documentation, and regulatory compliance.
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
                        Industrial Survey Data,
                        <span className="text-gold block relative inline-block">
                          Minimal Downtime
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
                          'High-resolution site orthomosaic',
                          'Detailed asset mapping',
                          'Building & roof surveys',
                          'CAD-ready drawings & 3D models',
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
                          'CAA certified & fully insured',
                          'Active site experience',
                          'Latest DJI enterprise UAVs',
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
                        <span>Relied upon by facility managers, engineers & industrial operators throughout the UK.</span>
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
                    <p className="text-white/50 text-xs uppercase tracking-wider text-center mb-4">Relied upon by leading organisations</p>
                    <ClientLogoMarqueeInline />
                  </div>
                </div>
              </div>

              {/* How much does a drone industrial survey cost? */}
              <div>
                <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-6">
                  <Image
                    src="/images/services/industrial/industrial-cost.avif"
                    alt="Surveyor reviewing drone industrial survey data on tablet at industrial site"
                    fill
                    className="object-cover"
                  />
                </div>
                <h2 id="industrial-cost" className="text-2xl md:text-3xl font-bold text-teal mb-4 scroll-mt-32">
                  What Does an <span className="text-gold">Drone Industrial Survey</span> Cost?
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed mb-6">
                  Pricing depends on your facility size and requirements. Here's a guide to help you budget:
                </p>

                {/* Pricing Table */}
                <div className="rounded-xl overflow-hidden border border-border mb-6">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-teal">
                        <th className="text-left text-white font-semibold py-3 px-4">Facility Size</th>
                        <th className="text-left text-white font-semibold py-3 px-4">Guide Price</th>
                        <th className="text-left text-white font-semibold py-3 px-4 hidden md:table-cell">Typical Applications</th>
                        <th className="text-left text-white font-semibold py-3 px-4 hidden lg:table-cell">Deliverables</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-white">
                        <td className="py-3 px-4 text-text-primary font-medium">Small<span className="block text-sm text-text-secondary font-normal">Under 2 ha</span></td>
                        <td className="py-3 px-4 text-gold font-bold">£600+</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden md:table-cell">Small workshops, depots, single buildings</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden lg:table-cell">Orthomosaic, roof survey, basic CAD</td>
                      </tr>
                      <tr className="bg-background-alt">
                        <td className="py-3 px-4 text-text-primary font-medium">Medium<span className="block text-sm text-text-secondary font-normal">2–10 ha</span></td>
                        <td className="py-3 px-4 text-gold font-bold">£1,200+</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden md:table-cell">Manufacturing units, distribution centres</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden lg:table-cell">Full orthomosaic, asset mapping, CAD</td>
                      </tr>
                      <tr className="bg-white">
                        <td className="py-3 px-4 text-text-primary font-medium">Large<span className="block text-sm text-text-secondary font-normal">10–25 ha</span></td>
                        <td className="py-3 px-4 text-gold font-bold">£2,200+</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden md:table-cell">Factory complexes, logistics parks</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden lg:table-cell">Full suite + 3D models</td>
                      </tr>
                      <tr className="bg-background-alt">
                        <td className="py-3 px-4 text-text-primary font-medium">Major Complex<span className="block text-sm text-text-secondary font-normal">25+ ha</span></td>
                        <td className="py-3 px-4 text-gold font-bold">POA</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden md:table-cell">Power stations, refineries, major plants</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden lg:table-cell">Bespoke scope & phased delivery</td>
                      </tr>
                      <tr className="bg-white">
                        <td className="py-3 px-4 text-text-primary font-medium">With Thermal<span className="block text-sm text-text-secondary font-normal">Any size</span></td>
                        <td className="py-3 px-4 text-gold font-bold">+£300</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden md:table-cell">Heat loss detection, electrical faults</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden lg:table-cell">Thermal imagery & report</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-text-secondary text-sm mb-6 italic">
                  *Guide prices include standard outputs. Final quote based on site complexity, access, and specific requirements.
                </p>

                {/* What influences your quote */}
                <h3 className="font-bold text-teal mb-3">What influences your quote?</h3>
                <ul className="grid grid-cols-2 gap-2 mb-6">
                  {['Site size & complexity', 'Required outputs', 'Active operations', 'Access & safety requirements'].map((factor, index) => (
                    <li key={index} className="flex items-center gap-2 text-text-secondary">
                      <svg className="w-4 h-4 text-gold flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm">{factor}</span>
                    </li>
                  ))}
                </ul>

                <p className="text-text-secondary leading-relaxed mb-6">
                  Our UAV-based approach typically saves <span className="text-gold font-semibold">40-60%</span> compared to conventional ground surveys and scaffolding-based inspections. Contact us with your project details and we'll provide a tailored quote within 24 hours.
                </p>

                {/* CTA Banner */}
                <div className="bg-teal rounded-xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-center sm:text-left">
                    <p className="text-white font-semibold">Ready to get a quote for your facility?</p>
                    <p className="text-white/70 text-sm">Free, no-obligation quotes within 24 hours</p>
                  </div>
                  <div className="flex gap-3">
                    <a href="tel:+442046340456" className="flex items-center gap-2 px-4 py-2.5 rounded-full border border-white/30 text-white hover:bg-white/10 transition-colors text-sm font-medium">
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

              {/* Drone Industrial Survey vs Conventional Methods */}
              <div>
                <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-6">
                  <Image
                    src="/images/services/industrial/industrial-comparison.avif"
                    alt="Comparison of drone industrial survey versus traditional ground survey methods"
                    fill
                    className="object-cover"
                  />
                </div>
                <h2 id="industrial-vs-traditional" className="text-2xl md:text-3xl font-bold text-teal mb-4 scroll-mt-32">
                  What Is the Difference Between <span className="text-gold">Drone Industrial Survey</span> and Conventional Methods?
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed mb-4">
                  Conventional industrial surveys typically require ground teams, scaffolding, cherry pickers, or rope access to inspect and measure facilities. This approach is time-consuming, expensive, and often requires shutting down operations for safety.
                </p>
                <p className="text-text-secondary text-lg leading-relaxed mb-4">
                  Drone industrial surveys capture the same data - and often more - from the air in a fraction of the time. Our UAVs can survey rooftops, facades, pipework, and storage tanks without scaffolding, reach areas inaccessible to ground teams, and capture data while your facility continues normal operations.
                </p>
                {/* Technology Comparison Cards */}
                <div className="mt-8">
                  <h3 className="text-center font-bold text-teal text-xl mb-6">When to Choose Each Approach</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {/* UAV Survey Card */}
                    <div className="relative bg-teal rounded-2xl p-6 overflow-hidden group hover:shadow-xl transition-shadow duration-300">
                      {/* Decorative element */}
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
                            <h4 className="text-white font-bold text-lg">Select Drone Survey</h4>
                            <p className="text-gold text-sm font-medium">Fast & non-disruptive</p>
                          </div>
                        </div>
                        <div className="space-y-3">
                          {[
                            { Icon: Factory, text: 'Active operational sites' },
                            { Icon: Warehouse, text: 'Large facilities & complexes' },
                            { Icon: Shield, text: 'Hard-to-reach areas' },
                            { Icon: Clock, text: 'Tight project timelines' },
                          ].map((item, i) => (
                            <div key={i} className="flex items-center gap-3 bg-white/10 rounded-lg px-4 py-2.5">
                              <item.Icon className="w-5 h-5 text-gold flex-shrink-0" strokeWidth={1.5} />
                              <span className="text-white/90 font-medium">{item.text}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Conventional Survey Card */}
                    <div className="relative bg-white border-2 border-border rounded-2xl p-6 overflow-hidden group hover:border-gold hover:shadow-xl transition-all duration-300">
                      {/* Decorative element */}
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
                            <svg className="w-6 h-6 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                            </svg>
                          </div>
                          <div>
                            <h4 className="text-teal font-bold text-lg">Select Conventional</h4>
                            <p className="text-text-secondary text-sm font-medium">Detail & close access</p>
                          </div>
                        </div>
                        <div className="space-y-3">
                          {[
                            { Icon: Gauge, text: 'Internal structural surveys' },
                            { Icon: FileText, text: 'Detailed defect assessment' },
                            { Icon: MapPin, text: 'Underground utilities' },
                            { Icon: Camera, text: 'Close material sampling' },
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
                    <p className="text-text-secondary text-sm mb-2">Not sure which approach suits your facility?</p>
                    <QuoteButton className="text-gold font-semibold hover:underline inline-flex items-center gap-1">
                      Speak with a specialist
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </QuoteButton>
                  </div>
                </div>
              </div>

              {/* What accuracy can a drone industrial survey achieve? */}
              <div>
                <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-6">
                  <Image
                    src="/images/services/industrial/industrial-accuracy.avif"
                    alt="Ground control point marker at industrial site for survey accuracy"
                    fill
                    className="object-cover"
                  />
                </div>
                <h2 id="industrial-accuracy" className="text-2xl md:text-3xl font-bold text-teal mb-4 scroll-mt-32">
                  What Accuracy Can an <span className="text-gold">Drone Industrial Survey</span> Achieve?
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed mb-4">
                  Our drone industrial surveys routinely achieve positional accuracy of plus or minus 2-3cm when using ground control points and RTK-enabled UAVs. This level of precision is suitable for asset management, facilities planning, insurance documentation, and most engineering applications.
                </p>
                <p className="text-text-secondary text-lg leading-relaxed">
                  For projects requiring higher accuracy, we can increase GCP density and employ specialist processing workflows. Our orthomosaics typically achieve ground sample distances (GSD) of 1-2cm per pixel, capturing detail down to individual bolts, joints, and surface defects visible from above.
                </p>
              </div>

              {/* Applications */}
              <div>
                <h2 id="industrial-applications" className="text-2xl md:text-3xl font-bold text-teal mb-4 scroll-mt-32">
                  Where Are <span className="text-gold">Drone Industrial Surveys</span> Used?
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed mb-6">
                  Drone industrial surveys serve a wide range of industries and purposes. Here are the key applications where our clients see the greatest value:
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-background-alt rounded-xl p-6">
                    <h3 className="font-bold text-teal mb-2">Facility Management</h3>
                    <p className="text-text-secondary text-sm">Complete site mapping for asset registers, space planning, and facilities management systems integration.</p>
                  </div>
                  <div className="bg-background-alt rounded-xl p-6">
                    <h3 className="font-bold text-teal mb-2">Roof & Building Surveys</h3>
                    <p className="text-text-secondary text-sm">Condition assessments of roofs, cladding, and building fabric without scaffolding or disruption to operations.</p>
                  </div>
                  <div className="bg-background-alt rounded-xl p-6">
                    <h3 className="font-bold text-teal mb-2">Insurance & Compliance</h3>
                    <p className="text-text-secondary text-sm">Detailed visual records for insurance valuations, claims documentation, and regulatory compliance.</p>
                  </div>
                  <div className="bg-background-alt rounded-xl p-6">
                    <h3 className="font-bold text-teal mb-2">Infrastructure Mapping</h3>
                    <p className="text-text-secondary text-sm">Pipework, storage tanks, conveyors, and utility runs captured in precise 3D for maintenance planning.</p>
                  </div>
                  <div className="bg-background-alt rounded-xl p-6">
                    <h3 className="font-bold text-teal mb-2">Progress Monitoring</h3>
                    <p className="text-text-secondary text-sm">Regular survey flights to track construction, expansion, or remediation projects over time.</p>
                  </div>
                  <div className="bg-background-alt rounded-xl p-6">
                    <h3 className="font-bold text-teal mb-2">Site Security</h3>
                    <p className="text-text-secondary text-sm">Perimeter mapping, fence line surveys, and security assessments from comprehensive drone imagery.</p>
                  </div>
                </div>

                {/* CTA after applications */}
                <div className="mt-8 text-center">
                  <p className="text-text-secondary mb-4">Have a facility that needs surveying?</p>
                  <div className="flex flex-wrap justify-center gap-3">
                    <QuoteButton className="btn btn-primary btn-shimmer">
                      Talk Through Your Project
                    </QuoteButton>
                    <a href="tel:+442046340456" className="btn btn-outline">
                      Call 020 4634 0456
                    </a>
                  </div>
                </div>
              </div>

              {/* Can drones survey active industrial sites? */}
              <div>
                <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-6">
                  <Image
                    src="/images/services/industrial/industrial-feature.avif"
                    alt="Industrial asset mapping with infrastructure overlay from drone survey"
                    fill
                    className="object-cover"
                  />
                </div>
                <h2 id="active-sites" className="text-2xl md:text-3xl font-bold text-teal mb-4 scroll-mt-32">
                  Can UAVs Survey <span className="text-gold">Active Industrial Sites</span>?
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed mb-4">
                  Yes - this is one of the key advantages of drone surveys. Our drone pilots are trained in industrial safety protocols and hold relevant certifications for working on operational sites. We conduct thorough risk assessments before every flight and coordinate closely with your site management team.
                </p>
                <p className="text-text-secondary text-lg leading-relaxed mb-4">
                  We can operate around:
                </p>
                <ul className="space-y-2 mb-6">
                  {[
                    'Active production lines and manufacturing processes',
                    'Vehicle and forklift movements',
                    'Loading and unloading operations',
                    'Ongoing maintenance activities',
                    'Shift changes and personnel movements',
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-text-secondary">
                      <svg className="w-5 h-5 text-gold mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-text-secondary text-lg leading-relaxed">
                  For sites with specific hazards (chemical plants, refineries, etc.), we hold ATEX-rated equipment and can obtain additional permits as required. We work with your HSE team to ensure full compliance with site-specific safety requirements.
                </p>
              </div>

              {/* What outputs? */}
              <div>
                <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-6">
                  <Image
                    src="/images/services/industrial/industrial-deliverables.avif"
                    alt="Computer screen displaying industrial site plans and 3D models from drone survey"
                    fill
                    className="object-cover"
                  />
                </div>
                <h2 id="industrial-deliverables" className="text-2xl md:text-3xl font-bold text-teal mb-4 scroll-mt-32">
                  What Outputs Do You Receive From an <span className="text-gold">Drone Industrial Survey</span>?
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed mb-6">
                  We tailor outputs to your specific requirements, but our standard industrial survey deliverables include:
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-4 bg-background-alt rounded-xl p-4">
                    <div className="w-10 h-10 bg-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-teal">Site Orthomosaic</h4>
                      <p className="text-text-secondary text-sm">High-resolution, georeferenced drone map of your entire facility. Perfect for GIS integration and as-built documentation.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4 bg-background-alt rounded-xl p-4">
                    <div className="w-10 h-10 bg-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-teal">Asset Mapping</h4>
                      <p className="text-text-secondary text-sm">Detailed inventory of visible assets including buildings, tanks, pipework, and infrastructure with precise locations.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4 bg-background-alt rounded-xl p-4">
                    <div className="w-10 h-10 bg-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-teal">Building Surveys</h4>
                      <p className="text-text-secondary text-sm">Roof condition reports, elevation imagery, and facade documentation for maintenance and insurance purposes.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4 bg-background-alt rounded-xl p-4">
                    <div className="w-10 h-10 bg-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-teal">Infrastructure Plans</h4>
                      <p className="text-text-secondary text-sm">Traced drawings of visible infrastructure including road layouts, drainage, and utility runs.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4 bg-background-alt rounded-xl p-4">
                    <div className="w-10 h-10 bg-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-teal">CAD Files & 3D Models</h4>
                      <p className="text-text-secondary text-sm">DWG/DXF files compatible with AutoCAD, plus 3D mesh models for visualisation and BIM integration.</p>
                    </div>
                  </li>
                </ul>

                {/* CTA after outputs */}
                <div className="mt-6 p-5 bg-gold/10 border border-gold/20 rounded-xl">
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-teal font-semibold text-center sm:text-left">Need specific outputs for your facility?</p>
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
                    src="/images/services/industrial/industrial-timeline.avif"
                    alt="Drone pilot preparing DJI Matrice drone for industrial survey"
                    fill
                    className="object-cover"
                  />
                </div>
                <h2 id="survey-timeline" className="text-2xl md:text-3xl font-bold text-teal mb-4 scroll-mt-32">
                  What's the Duration of an <span className="text-gold">Drone Industrial Survey</span>?
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed mb-4">
                  On-site data capture is remarkably fast. We can survey most industrial facilities in half a day to a full day depending on size and complexity. A typical 10-hectare site takes 3-4 hours of flight time, plus setup, safety briefings, and ground control establishment.
                </p>
                <p className="text-text-secondary text-lg leading-relaxed mb-6">
                  Processing and delivery depends on your required outputs. Standard outputs are typically ready within 5-7 working days. For urgent projects, we offer expedited processing with 48-72 hour turnaround available at additional cost.
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
                        <td className="py-3 px-4 text-text-primary font-medium">Planning & Coordination</td>
                        <td className="py-3 px-4 text-gold font-bold">1-2 days</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden md:table-cell">Flight planning, airspace clearance, site liaison</td>
                      </tr>
                      <tr className="bg-background-alt">
                        <td className="py-3 px-4 text-text-primary font-medium">On-Site Data Capture</td>
                        <td className="py-3 px-4 text-gold font-bold">½-1 day</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden md:table-cell">Safety briefing, GCP setup, drone flights</td>
                      </tr>
                      <tr className="bg-white">
                        <td className="py-3 px-4 text-text-primary font-medium">Data Processing</td>
                        <td className="py-3 px-4 text-gold font-bold">2-3 days</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden md:table-cell">Image processing, orthomosaic generation</td>
                      </tr>
                      <tr className="bg-background-alt">
                        <td className="py-3 px-4 text-text-primary font-medium">Output Production</td>
                        <td className="py-3 px-4 text-gold font-bold">2-3 days</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden md:table-cell">CAD drawings, reports, 3D models</td>
                      </tr>
                      <tr className="bg-teal/10">
                        <td className="py-3 px-4 text-teal font-bold">Total (Standard)</td>
                        <td className="py-3 px-4 text-teal font-bold">5-7 working days</td>
                        <td className="py-3 px-4 text-teal text-sm font-medium hidden md:table-cell">From site visit to final delivery</td>
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
                    <p className="text-teal font-semibold text-sm">Express Processing Available</p>
                    <p className="text-text-secondary text-sm">Need it faster? 48-72 hour turnaround available for urgent projects.</p>
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
                    Compare Quotes
                  </a>
                </div>
              </div>

              {/* How to select a provider */}
              <div>
                <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-6">
                  <Image
                    src="/images/services/industrial/industrial-provider.avif"
                    alt="Professional survey team meeting with facility manager at industrial site"
                    fill
                    className="object-cover"
                  />
                </div>
                <h2 id="choose-provider" className="text-2xl md:text-3xl font-bold text-teal mb-4 scroll-mt-32">
                  How Do I Select an <span className="text-gold">Drone Industrial Survey</span> Provider?
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed mb-4">
                  Not all UAV operators have the experience and credentials needed for industrial sites. When evaluating providers, we recommend checking these key factors:
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gold mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-text-primary"><strong>CAA certification</strong> - Ensure they hold valid GVC or legacy PfCO permissions for commercial operations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gold mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-text-primary"><strong>Industrial site experience</strong> - Ask about previous work on operational facilities similar to yours</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gold mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-text-primary"><strong>Appropriate insurance</strong> - Public liability (5M+) and professional indemnity cover</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gold mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-text-primary"><strong>Safety credentials</strong> - CSCS cards, site safety training, risk assessment capability</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gold mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-text-primary"><strong>Processing capability</strong> - In-house data processing and CAD production</span>
                  </li>
                </ul>
                <p className="text-text-secondary text-lg leading-relaxed mb-6">
                  At Skykam Drone Inspections, we tick every box. We're CAA certified, carry 10M public liability insurance, and have delivered industrial surveys across manufacturing, logistics, energy, and chemical sectors throughout the UK.
                </p>

                {/* CTA after provider section */}
                <div className="bg-teal rounded-xl p-5">
                  <p className="text-white font-semibold mb-3">Ready to work with an experienced industrial survey provider?</p>
                  <div className="flex flex-wrap gap-3">
                    <QuoteButton className="px-5 py-2.5 rounded-full bg-gold text-teal-dark font-semibold hover:bg-gold/90 transition-colors text-sm btn-shimmer">
                      Compare Quotes
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
                  Is <span className="text-gold">Drone Industrial Survey</span> More Economical Than Conventional Methods?
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed mb-4">
                  In most cases, significantly more economical. Conventional roof surveys requiring scaffolding can cost 10,000+ just for access. Cherry pickers and MEWPs add hire costs, operator fees, and extended site time. Ground-based surveys of large facilities require multiple days of surveyor time.
                </p>
                <p className="text-text-secondary text-lg leading-relaxed mb-6">
                  Our drone surveys capture equivalent or better data in a fraction of the time and cost. A complete facility survey that might take a ground team a week can be flown in hours. The cost savings typically range from 40-70% compared to conventional methods, with the added benefit of minimal operational disruption.
                </p>

                {/* Final CTA */}
                <div className="bg-gradient-to-r from-teal to-teal-dark rounded-xl p-6 text-center">
                  <h3 className="text-white font-bold text-xl mb-2">Ready to Talk Through Your Industrial Survey?</h3>
                  <p className="text-white/80 text-sm mb-4">Specialist advice - Tailored pricing - Avg Response within 5 Mins</p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <QuoteButton className="btn btn-primary btn-shimmer">
                      Request Facility Pricing
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
                  With extensive experience surveying operational industrial sites, James personally oversees every project to ensure accurate data capture and professional delivery.
                </p>
              </div>

              {/* Table of Contents */}
              <div className="bg-background-alt border border-border rounded-2xl p-6">
                <h3 className="text-teal font-bold text-lg mb-4">
                  TLDR: Drone Industrial Surveys Explained
                </h3>
                <nav className="space-y-2">
                  {[
                    { id: 'what-is-industrial', label: 'Understanding Drone Industrial Surveys' },
                    { id: 'industrial-cost', label: 'What Does a Drone Industrial Survey Cost?' },
                    { id: 'industrial-vs-traditional', label: 'What Is the Difference Between Drone Industrial Survey and Conventional Methods?' },
                    { id: 'industrial-accuracy', label: 'What Accuracy Can a Drone Industrial Survey Achieve?' },
                    { id: 'industrial-applications', label: 'Where Are Drone Industrial Surveys Used?' },
                    { id: 'active-sites', label: 'Can UAVs Survey Active Industrial Sites?' },
                    { id: 'industrial-deliverables', label: 'What Outputs Do You Receive From a Drone Industrial Survey?' },
                    { id: 'survey-timeline', label: 'What\'s the Duration of a Drone Industrial Survey?' },
                    { id: 'choose-provider', label: 'How Do I Select a Drone Industrial Survey Provider?' },
                    { id: 'cost-comparison', label: 'Is Drone Industrial Survey More Economical Than Conventional Methods?' },
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
                  Industrial Survey Outputs
                </h3>
                <ul className="space-y-3">
                  {[
                    'Site orthomosaic',
                    'Asset mapping',
                    'Building surveys',
                    'Infrastructure plans',
                    'CAD files (DWG/DXF)',
                    '3D models',
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
                  Talk Through Your Facility
                </h3>
                <p className="text-white/70 text-sm mb-4">
                  Receive specialist advice and tailored pricing.
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
                    placeholder="Brief facility details..."
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
              href="/services/drone-survey"
              className="bg-white border border-border rounded-xl p-6 hover:border-gold hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-teal font-bold text-lg mb-2">UAV Survey</h3>
              <p className="text-text-secondary text-sm">
                Thorough drone surveys delivering precise topographic data and 3D models.
              </p>
            </Link>
            <Link
              href="/services/drone-roof-survey"
              className="bg-white border border-border rounded-xl p-6 hover:border-gold hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-teal font-bold text-lg mb-2">Drone Roof Inspection</h3>
              <p className="text-text-secondary text-sm">
                Detailed roof inspections and condition assessments without scaffolding.
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
