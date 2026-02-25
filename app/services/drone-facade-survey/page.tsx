import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import QuoteButton from '@/components/QuoteButton';
import Testimonials from '@/components/Testimonials';
import FloatingCTA from '@/components/FloatingCTA';
import EquipmentSection from '@/components/EquipmentSection';
import { ServiceSchema, BreadcrumbSchema } from '@/components/SchemaMarkup';
import { ClientLogoMarqueeInline } from '@/components/ClientLogoMarquee';
import { Building2, Shield, Clock, AlertTriangle, Thermometer, Droplets, Wrench, Eye } from 'lucide-react';

export const metadata: Metadata = {
  title: 'UAV Building Exterior Inspection | Facade Assessment UK | Hire Drone Pilot',
  description: 'Expert UAV facade assessment services throughout the UK. Secure, budget-friendly building exterior inspections without scaffolding or abseil teams. CAA certified drone pilots.',
  keywords: 'drone facade survey, drone building facade inspection, drone building survey, drone facade inspection uk, drone building inspection, cladding inspection drone',
};

export default function DroneFacadeSurveyPage() {
  return (
    <>
      <ServiceSchema
        name="UAV Building Exterior Inspection Services"
        description="Expert UAV facade assessment services throughout the UK. Secure, budget-friendly building exterior inspections without scaffolding or abseil teams. CAA certified drone pilots."
        url="https://hiredronepilot.uk/services/drone-facade-survey"
      />
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://hiredronepilot.uk" },
        { name: "Services", url: "https://hiredronepilot.uk/services" },
        { name: "Drone Facade Survey Services", url: "https://hiredronepilot.uk/services/drone-facade-survey" }
      ]} />

      {/* Hero Section */}
      <section className="relative min-h-[800px] md:min-h-[600px] flex items-start bg-teal -mt-[120px] pt-[120px] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/services/facade/facade-hero.avif"
            alt="Professional drone inspecting high-rise building facade in UK city"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-teal-dark via-teal-dark/90 via-40% to-teal-dark/40 z-10" />
        </div>
        <div className="container pt-8 pb-52 lg:pb-40 lg:pt-12 relative z-10">
          <div className="max-w-3xl">
            <p className="text-gold font-semibold uppercase tracking-wider mb-3">
              Building Inspection
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Drone Facade Survey Service
            </h1>
            <p className="text-white/80 text-lg md:text-xl mb-8">
              Secure, economical building exterior inspections without scaffolding, abseil access, or elevated platforms. Thorough defect detection for structures of any height.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <QuoteButton className="btn btn-primary">
                Compare Quotes
              </QuoteButton>
              <Link href="/services" className="btn btn-outline-white">
                View All Services
              </Link>
            </div>
            <p className="mt-4 text-white/70 text-sm flex items-center gap-2">
              <svg className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
              Avg Response within 5 Mins • Or call{' '}
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

              {/* What is a Drone Facade Survey? */}
              <div>
                <h2 id="what-is-facade" className="text-2xl md:text-3xl font-bold text-teal mb-4 scroll-mt-32">
                  Understanding <span className="text-gold">Drone Facade Assessments</span>
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed mb-4">
                  A drone facade assessment employs high-resolution cameras and thermal detection sensors fitted to our UAVs to gather comprehensive imagery of building exteriors. This enables us to spot defects, damage, and degradation across the complete facade without requiring scaffolding, boom lifts, or abseil crews.
                </p>
                <p className="text-text-secondary text-lg leading-relaxed">
                  At Hire Drone Pilot, we operate cutting-edge drone technology capable of capturing sub-millimetre precision from secure operating distances. Our assessments uncover cracks, water penetration, deteriorated sealants, unstable cladding, and structural concerns that would otherwise demand costly access equipment to examine.
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
                        Thorough Exterior Assessments,
                        <span className="text-gold block relative inline-block">
                          Zero Scaffolding Needed
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
                          'Ultra-sharp facade photography',
                          'Comprehensive defect documentation',
                          'Condition mapping & classification',
                          'Thermal irregularity detection',
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
                          'No elevated work hazards',
                          'State-of-the-art drone & camera systems',
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
                        <span>Relied upon by facilities managers, chartered surveyors & property owners throughout the UK.</span>
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
                        Request Specialist Guidance
                      </QuoteButton>
                    </div>
                  </div>

                  {/* Client Logo Marquee */}
                  <div className="mt-6 pt-6 border-t border-white/10">
                    <p className="text-white/50 text-xs uppercase tracking-wider text-center mb-4">Relied upon by major organisations</p>
                    <ClientLogoMarqueeInline />
                  </div>
                </div>
              </div>

              {/* How much does a Drone Facade Survey cost? */}
              <div>
                <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-6">
                  <Image
                    src="/images/services/facade/facade-cost.avif"
                    alt="Surveyor reviewing drone facade inspection data on tablet"
                    fill
                    className="object-cover"
                  />
                </div>
                <h2 id="facade-cost" className="text-2xl md:text-3xl font-bold text-teal mb-4 scroll-mt-32">
                  What Does an <span className="text-gold">Drone Facade Assessment</span> Cost?
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed mb-6">
                  Pricing varies based on building height, facade intricacy, and required outputs. Below is a reference to assist with budgeting:
                </p>

                {/* Pricing Table */}
                <div className="rounded-xl overflow-hidden border border-border mb-6">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-teal">
                        <th className="text-left text-white font-semibold py-3 px-4">Building Type</th>
                        <th className="text-left text-white font-semibold py-3 px-4">Guide Price</th>
                        <th className="text-left text-white font-semibold py-3 px-4 hidden md:table-cell">Typical Applications</th>
                        <th className="text-left text-white font-semibold py-3 px-4 hidden lg:table-cell">Deliverables</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-white">
                        <td className="py-3 px-4 text-text-primary font-medium">Low-rise<span className="block text-sm text-text-secondary font-normal">1-3 storeys</span></td>
                        <td className="py-3 px-4 text-gold font-bold">£400+</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden md:table-cell">Houses, small commercial units, retail premises</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden lg:table-cell">HD imagery, basic defect report</td>
                      </tr>
                      <tr className="bg-background-alt">
                        <td className="py-3 px-4 text-text-primary font-medium">Medium-rise<span className="block text-sm text-text-secondary font-normal">4-8 storeys</span></td>
                        <td className="py-3 px-4 text-gold font-bold">£700+</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden md:table-cell">Apartment blocks, office buildings, hotels</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden lg:table-cell">HD imagery, defect mapping, condition report</td>
                      </tr>
                      <tr className="bg-white">
                        <td className="py-3 px-4 text-text-primary font-medium">High-rise<span className="block text-sm text-text-secondary font-normal">9-15 storeys</span></td>
                        <td className="py-3 px-4 text-gold font-bold">£1,200+</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden md:table-cell">Tower blocks, commercial high-rises, university buildings</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden lg:table-cell">Full inspection package + thermal</td>
                      </tr>
                      <tr className="bg-background-alt">
                        <td className="py-3 px-4 text-text-primary font-medium">Tall Building<span className="block text-sm text-text-secondary font-normal">15+ storeys</span></td>
                        <td className="py-3 px-4 text-gold font-bold">£2,000+</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden md:table-cell">Skyscrapers, major commercial towers, landmark buildings</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden lg:table-cell">Comprehensive survey + 3D model</td>
                      </tr>
                      <tr className="bg-white">
                        <td className="py-3 px-4 text-text-primary font-medium">Multi-building<span className="block text-sm text-text-secondary font-normal">Campus</span></td>
                        <td className="py-3 px-4 text-gold font-bold">POA</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden md:table-cell">Housing estates, business parks, university campuses</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden lg:table-cell">Bespoke scope & phased delivery</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-text-secondary text-sm mb-6 italic">
                  *Reference prices encompass standard outputs. Final quotation depends on building intricacy, access needs, and particular requirements.
                </p>

                {/* What affects your quote */}
                <h3 className="font-bold text-teal mb-3">Factors Influencing Your Quote</h3>
                <ul className="grid grid-cols-2 gap-2 mb-6">
                  {['Structure height & intricacy', 'Number of elevations', 'Required outputs', 'Thermal scanning needs'].map((factor, index) => (
                    <li key={index} className="flex items-center gap-2 text-text-secondary">
                      <svg className="w-4 h-4 text-gold flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm">{factor}</span>
                    </li>
                  ))}
                </ul>

                <p className="text-text-secondary leading-relaxed mb-6">
                  Our UAV-based approach typically delivers savings of <span className="text-gold font-semibold">60-80%</span> compared to scaffolding or abseil inspections. Send us your building particulars and we&apos;ll furnish a customised quotation within 24 hours.
                </p>

                {/* CTA Banner */}
                <div className="bg-teal rounded-xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-center sm:text-left">
                    <p className="text-white font-semibold">Prepared to receive a quotation for your structure?</p>
                    <p className="text-white/70 text-sm">Complimentary, no-commitment quotes within 24 hours</p>
                  </div>
                  <div className="flex gap-3">
                    <a href="tel:+441334804554" className="flex items-center gap-2 px-4 py-2.5 rounded-full border border-white/30 text-white hover:bg-white/10 transition-colors text-sm font-medium">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      Ring Us
                    </a>
                    <QuoteButton className="px-5 py-2.5 rounded-full bg-gold text-teal-dark font-semibold hover:bg-gold/90 transition-colors text-sm btn-shimmer">
                      Compare Quotes
                    </QuoteButton>
                  </div>
                </div>
              </div>

              {/* Drone Facade Survey vs Rope Access */}
              <div>
                <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-6">
                  <Image
                    src="/images/services/facade/facade-comparison.avif"
                    alt="Drone facade survey compared to rope access and scaffolding methods"
                    fill
                    className="object-cover"
                  />
                </div>
                <h2 id="facade-vs-rope-access" className="text-2xl md:text-3xl font-bold text-teal mb-4 scroll-mt-32">
                  How Does <span className="text-gold">Drone Facade Assessment</span> Compare to Abseil Access?
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed mb-4">
                  Conventional facade inspections demand either scaffolding, boom lifts, or abseil teams. These approaches are costly, time-intensive, and present considerable health and safety hazards. Elevated work remains among the primary causes of workplace fatalities within the UK construction sector.
                </p>
                <p className="text-text-secondary text-lg leading-relaxed mb-4">
                  Drone facade assessments remove all elevated work hazards by maintaining personnel securely at ground level. Our drones gather imagery that&apos;s frequently more comprehensive than visual inspection, and can reach zones that would be challenging or unfeasible to access via traditional methods—such as balcony undersides or areas adjacent to obstacles.
                </p>
                {/* Technology Comparison Cards */}
                <div className="mt-8">
                  <h3 className="text-center font-bold text-teal text-xl mb-6">Selecting the Right Approach</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {/* Drone Survey Card */}
                    <div className="relative bg-teal rounded-2xl p-6 overflow-hidden group hover:shadow-xl transition-shadow duration-300">
                      {/* Decorative element */}
                      <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                        <svg viewBox="0 0 100 100" className="w-full h-full">
                          <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="2" className="text-gold" />
                          <circle cx="50" cy="50" r="25" fill="none" stroke="currentColor" strokeWidth="2" className="text-gold" />
                          <circle cx="50" cy="50" r="10" fill="currentColor" className="text-gold" />
                        </svg>
                      </div>
                      <div className="relative z-10">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-12 h-12 bg-gold/20 rounded-xl flex items-center justify-center">
                            <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                          </div>
                          <div>
                            <h4 className="text-white font-bold text-lg">Select Drone Facade Assessment</h4>
                            <p className="text-gold text-sm font-medium">Secure & budget-friendly</p>
                          </div>
                        </div>
                        <div className="space-y-3">
                          {[
                            { Icon: Shield, text: 'No elevated work hazards' },
                            { Icon: Clock, text: 'Assessment finished in hours, not days' },
                            { Icon: Eye, text: 'Reach hard-to-access zones' },
                            { Icon: Building2, text: 'Structures of any height' },
                          ].map((item, i) => (
                            <div key={i} className="flex items-center gap-3 bg-white/10 rounded-lg px-4 py-2.5">
                              <item.Icon className="w-5 h-5 text-gold flex-shrink-0" strokeWidth={1.5} />
                              <span className="text-white/90 font-medium">{item.text}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Rope Access Card */}
                    <div className="relative bg-white border-2 border-border rounded-2xl p-6 overflow-hidden group hover:border-gold hover:shadow-xl transition-all duration-300">
                      {/* Decorative element */}
                      <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
                        <svg viewBox="0 0 100 100" className="w-full h-full">
                          <line x1="50" y1="0" x2="50" y2="100" stroke="currentColor" strokeWidth="3" className="text-teal" />
                          <circle cx="50" cy="30" r="8" fill="currentColor" className="text-teal" />
                          <circle cx="50" cy="60" r="8" fill="currentColor" className="text-teal" />
                        </svg>
                      </div>
                      <div className="relative z-10">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-12 h-12 bg-teal/10 rounded-xl flex items-center justify-center">
                            <svg className="w-6 h-6 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                          </div>
                          <div>
                            <h4 className="text-teal font-bold text-lg">Consider Abseil Access</h4>
                            <p className="text-text-secondary text-sm font-medium">Physical intervention required</p>
                          </div>
                        </div>
                        <div className="space-y-3">
                          {[
                            { Icon: Wrench, text: 'Instant repairs necessary' },
                            { Icon: AlertTriangle, text: 'Material sample gathering' },
                            { Icon: Droplets, text: 'Intrusive testing required' },
                            { Icon: Thermometer, text: 'Hands-on examination' },
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
                    <p className="text-text-secondary text-sm mb-2">Uncertain which approach fits your project?</p>
                    <QuoteButton className="text-gold font-semibold hover:underline inline-flex items-center gap-1">
                      Obtain specialist guidance
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </QuoteButton>
                  </div>
                </div>
              </div>

              {/* What accuracy can a Drone Facade Survey achieve? */}
              <div>
                <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-6">
                  <Image
                    src="/images/services/facade/facade-accuracy.avif"
                    alt="High-resolution facade detail showing crack and defect identification"
                    fill
                    className="object-cover"
                  />
                </div>
                <h2 id="facade-accuracy" className="text-2xl md:text-3xl font-bold text-teal mb-4 scroll-mt-32">
                  What Precision Can an <span className="text-gold">Drone Facade Assessment</span> Deliver?
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed mb-4">
                  Our drone facade assessments gather imagery at resolutions of 2-5mm per pixel, enabling us to spot hairline cracks, minor degradation, and early-stage defects that might escape notice during conventional visual inspections. This degree of clarity surpasses what&apos;s attainable by the human eye from scaffolding or abseil access.
                </p>
                <p className="text-text-secondary text-lg leading-relaxed">
                  For thermal scanning surveys, we employ radiometric cameras detecting temperature differences as minimal as 0.05 degrees Celsius. This enables us to pinpoint moisture penetration, insulation failures, and thermal bridging with exact precision. All imagery is geotagged and can be superimposed onto building elevations for accurate defect position mapping.
                </p>
              </div>

              {/* Applications */}
              <div>
                <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-6">
                  <Image
                    src="/images/services/facade/facade-applications.avif"
                    alt="Various facade types including glass curtain wall, brick, stone, and cladding"
                    fill
                    className="object-cover"
                  />
                </div>
                <h2 id="facade-applications" className="text-2xl md:text-3xl font-bold text-teal mb-4 scroll-mt-32">
                  Where Are <span className="text-gold">Drone Facade Assessments</span> Used?
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed mb-6">
                  Drone facade assessments address a broad spectrum of building inspection and asset management requirements. Below are the principal applications where our clients realise the most value:
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-background-alt rounded-xl p-6">
                    <h3 className="font-bold text-teal mb-2">Cladding Examinations</h3>
                    <p className="text-text-secondary text-sm">Post-Grenfell compliance verification, ACM detection, cladding condition reviews for building safety cases and EWS1 documentation.</p>
                  </div>
                  <div className="bg-background-alt rounded-xl p-6">
                    <h3 className="font-bold text-teal mb-2">Scheduled Maintenance</h3>
                    <p className="text-text-secondary text-sm">Programmed facade condition reviews for upkeep planning, budgeting, and lifecycle expense analysis.</p>
                  </div>
                  <div className="bg-background-alt rounded-xl p-6">
                    <h3 className="font-bold text-teal mb-2">Pre-Purchase Assessments</h3>
                    <p className="text-text-secondary text-sm">Due diligence examinations for property acquisitions, spotting potential remediation expenses before purchase.</p>
                  </div>
                  <div className="bg-background-alt rounded-xl p-6">
                    <h3 className="font-bold text-teal mb-2">Insurance Documentation</h3>
                    <p className="text-text-secondary text-sm">Recording storm damage, impact damage, or defects for insurance claims with timestamped evidence.</p>
                  </div>
                  <div className="bg-background-alt rounded-xl p-6">
                    <h3 className="font-bold text-teal mb-2">Historic Structures</h3>
                    <p className="text-text-secondary text-sm">Non-intrusive inspection of protected buildings, churches, and heritage structures where access faces restrictions.</p>
                  </div>
                  <div className="bg-background-alt rounded-xl p-6">
                    <h3 className="font-bold text-teal mb-2">Defect Examination</h3>
                    <p className="text-text-secondary text-sm">Investigating reported defects, water penetration, cracking, or structural issues without access equipment.</p>
                  </div>
                </div>

                {/* CTA after applications */}
                <div className="mt-8 text-center">
                  <p className="text-text-secondary mb-4">Have a structure requiring inspection?</p>
                  <div className="flex flex-wrap justify-center gap-3">
                    <QuoteButton className="btn btn-primary btn-shimmer">
                      Talk Through Your Project
                    </QuoteButton>
                    <a href="tel:+441334804554" className="btn btn-outline">
                      Ring +44 1334 804554
                    </a>
                  </div>
                </div>
              </div>

              {/* What defects can Drone Facade Surveys identify? */}
              <div>
                <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-6">
                  <Image
                    src="/images/services/facade/facade-feature.avif"
                    alt="Facade defect mapping with color-coded condition assessment"
                    fill
                    className="object-cover"
                  />
                </div>
                <h2 id="facade-defects" className="text-2xl md:text-3xl font-bold text-teal mb-4 scroll-mt-32">
                  What Issues Can <span className="text-gold">Drone Facade Assessments</span> Detect?
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed mb-6">
                  Our high-resolution cameras and thermal sensors can detect an extensive array of facade defects and degradation:
                </p>
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="space-y-3">
                    <h4 className="font-bold text-teal">Visible Defects</h4>
                    <ul className="space-y-2">
                      {[
                        'Fine and structural fracturing',
                        'Spalling and surface degradation',
                        'Deteriorated or absent sealants',
                        'Unstable or compromised cladding panels',
                        'Oxidation and rust marking',
                        'Plant growth and organic staining',
                        'Impact damage and vandalism',
                        'Absent or damaged fixings',
                      ].map((defect, index) => (
                        <li key={index} className="flex items-start gap-2 text-text-secondary text-sm">
                          <svg className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span>{defect}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-bold text-teal">Thermal Anomalies</h4>
                    <ul className="space-y-2">
                      {[
                        'Moisture penetration and dampness',
                        'Insulation failures and gaps',
                        'Thermal bridging',
                        'Air leakage routes',
                        'Concealed water damage',
                        'Delamination under render',
                        'Failed cavity barriers',
                        'HVAC efficiency problems',
                      ].map((defect, index) => (
                        <li key={index} className="flex items-start gap-2 text-text-secondary text-sm">
                          <svg className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span>{defect}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <p className="text-text-secondary leading-relaxed">
                  Every defect is recorded with high-resolution imagery, exact position mapping, and severity classification to support upkeep planning and remediation prioritisation.
                </p>
              </div>

              {/* What deliverables? */}
              <div>
                <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-6">
                  <Image
                    src="/images/services/facade/facade-deliverables.avif"
                    alt="Annotated facade inspection report displayed on computer screen"
                    fill
                    className="object-cover"
                  />
                </div>
                <h2 id="facade-deliverables" className="text-2xl md:text-3xl font-bold text-teal mb-4 scroll-mt-32">
                  What Outputs Do You Receive From an <span className="text-gold">Drone Facade Assessment</span>?
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed mb-6">
                  We customise outputs to match your project needs, but our standard drone facade assessment package comprises:
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-4 bg-background-alt rounded-xl p-4">
                    <div className="w-10 h-10 bg-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-teal">Ultra-Sharp Facade Photography</h4>
                      <p className="text-text-secondary text-sm">Complete photographic archive of all elevations at 2-5mm resolution, organised by facade with metadata.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4 bg-background-alt rounded-xl p-4">
                    <div className="w-10 h-10 bg-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-teal">Defect Documentation</h4>
                      <p className="text-text-secondary text-sm">Thorough report cataloguing all discovered defects with severity classifications, positions, and suggested actions.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4 bg-background-alt rounded-xl p-4">
                    <div className="w-10 h-10 bg-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-teal">Condition Charts</h4>
                      <p className="text-text-secondary text-sm">Elevation drawings with defects plotted and colour-graded by severity (red/amber/green) for visual evaluation.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4 bg-background-alt rounded-xl p-4">
                    <div className="w-10 h-10 bg-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-teal">3D Representations (Optional)</h4>
                      <p className="text-text-secondary text-sm">Photogrammetric 3D model of building exteriors for measurement, visualisation, and BIM compatibility.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4 bg-background-alt rounded-xl p-4">
                    <div className="w-10 h-10 bg-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-teal">CAD Drawings (Optional)</h4>
                      <p className="text-text-secondary text-sm">Scaled elevation drawings in DWG/DXF format with defect annotations for remediation scheduling.</p>
                    </div>
                  </li>
                </ul>

                {/* CTA after deliverables */}
                <div className="mt-6 p-5 bg-gold/10 border border-gold/20 rounded-xl">
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-teal font-semibold text-center sm:text-left">Require particular outputs for your project?</p>
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
                    src="/images/services/facade/facade-timeline.avif"
                    alt="Drone pilot at base of tall building preparing for facade survey"
                    fill
                    className="object-cover"
                  />
                </div>
                <h2 id="survey-timeline" className="text-2xl md:text-3xl font-bold text-teal mb-4 scroll-mt-32">
                  What&apos;s the Duration of an <span className="text-gold">Drone Facade Assessment</span>?
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed mb-4">
                  On-site data gathering is exceptionally swift compared to conventional approaches. A standard medium-rise structure (4-8 storeys) can be assessed in 2-4 hours, covering all four elevations. High-rise buildings require additional time but typically complete within a single day.
                </p>
                <p className="text-text-secondary text-lg leading-relaxed mb-6">
                  Processing and report delivery hinges on building intricacy and required outputs. Standard deliverables are generally complete within 5-7 working days. For time-sensitive projects, we provide accelerated processing with 48-72 hour turnaround obtainable at supplementary cost.
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
                        <td className="py-3 px-4 text-text-primary font-medium">Planning & Permissions</td>
                        <td className="py-3 px-4 text-gold font-bold">1-3 days</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden md:table-cell">Flight planning, airspace clearance, site risk assessment</td>
                      </tr>
                      <tr className="bg-background-alt">
                        <td className="py-3 px-4 text-text-primary font-medium">On-Site Data Capture</td>
                        <td className="py-3 px-4 text-gold font-bold">2-6 hours</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden md:table-cell">Drone flights covering all facades, data verification</td>
                      </tr>
                      <tr className="bg-white">
                        <td className="py-3 px-4 text-text-primary font-medium">Image Processing</td>
                        <td className="py-3 px-4 text-gold font-bold">1-2 days</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden md:table-cell">Organisation, enhancement, thermal analysis</td>
                      </tr>
                      <tr className="bg-background-alt">
                        <td className="py-3 px-4 text-text-primary font-medium">Defect Analysis</td>
                        <td className="py-3 px-4 text-gold font-bold">2-3 days</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden md:table-cell">Systematic review, defect identification, severity grading</td>
                      </tr>
                      <tr className="bg-white">
                        <td className="py-3 px-4 text-text-primary font-medium">Report & Deliverables</td>
                        <td className="py-3 px-4 text-gold font-bold">1-2 days</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden md:table-cell">Report compilation, condition mapping, quality check</td>
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
                    Compare Quotes
                  </QuoteButton>
                  <a href="tel:+441334804554" className="btn btn-outline flex items-center justify-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Speak to Peter
                  </a>
                </div>
              </div>

              {/* How to choose a provider */}
              <div>
                <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-6">
                  <Image
                    src="/images/services/facade/facade-provider.avif"
                    alt="Survey team meeting with building manager client"
                    fill
                    className="object-cover"
                  />
                </div>
                <h2 id="choose-provider" className="text-2xl md:text-3xl font-bold text-teal mb-4 scroll-mt-32">
                  How Do I Select an <span className="text-gold">Drone Facade Assessment</span> Provider?
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed mb-4">
                  Not all drone facade assessment providers deliver the same quality. When appraising providers, we suggest verifying these essential criteria:
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gold mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-text-primary"><strong>CAA certification</strong> – Confirm they possess valid GVC permissions for commercial operations near structures</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gold mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-text-primary"><strong>Comprehensive insurance</strong> – Public liability and professional indemnity coverage suitable for building assessments</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gold mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-text-primary"><strong>Building assessment expertise</strong> – Facade assessments demand specialised knowledge beyond standard drone photography</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gold mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-text-primary"><strong>Thermal detection capability</strong> – Enquire about their thermal cameras and analysis proficiency</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gold mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-text-primary"><strong>Documentation quality</strong> – Request sample reports to evaluate their analysis and presentation calibre</span>
                  </li>
                </ul>
                <p className="text-text-secondary text-lg leading-relaxed mb-6">
                  At Hire Drone Pilot, we meet every criterion. We&apos;re CAA certified, comprehensively insured, and have completed facade assessments for residential blocks, commercial offices, heritage structures, and industrial premises throughout the UK.
                </p>

                {/* CTA after provider section */}
                <div className="bg-teal rounded-xl p-5">
                  <p className="text-white font-semibold mb-3">Prepared to engage a dependable facade assessment provider?</p>
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

              {/* Cost comparison */}
              <div>
                <h2 id="cost-comparison" className="text-2xl md:text-3xl font-bold text-teal mb-4 scroll-mt-32">
                  Is <span className="text-gold">Drone Facade Assessment</span> More Economical Than Conventional Approaches?
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed mb-4">
                  In nearly every case, yes—substantially. Conventional facade inspections demand either scaffolding (costly to construct and remove), cherry pickers (restricted reach, necessitates road closures), or abseil crews (skilled personnel, safety gear, permits). These approaches readily accumulate tens of thousands of pounds for high-rise structures.
                </p>
                <p className="text-text-secondary text-lg leading-relaxed mb-6">
                  Our drone facade assessments gather equivalent or superior data at a fraction of the expense. A structure that might cost £15,000-£20,000 to scaffold for inspection can be assessed by drone for £1,500-£3,000. The cost reductions typically span 60-80% compared to conventional approaches, whilst providing quicker turnaround and frequently more thorough coverage.
                </p>

                {/* Cost comparison visual */}
                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-background-alt rounded-xl p-5 text-center">
                    <p className="text-text-secondary text-sm mb-2">Scaffolding</p>
                    <p className="text-2xl font-bold text-text-primary">£15,000+</p>
                    <p className="text-xs text-text-secondary mt-1">2-3 weeks installation</p>
                  </div>
                  <div className="bg-background-alt rounded-xl p-5 text-center">
                    <p className="text-text-secondary text-sm mb-2">Abseil Access</p>
                    <p className="text-2xl font-bold text-text-primary">£5,000+</p>
                    <p className="text-xs text-text-secondary mt-1">3-5 days on-site</p>
                  </div>
                  <div className="bg-teal rounded-xl p-5 text-center">
                    <p className="text-gold text-sm mb-2">Drone Facade Assessment</p>
                    <p className="text-2xl font-bold text-white">£1,200+</p>
                    <p className="text-xs text-white/70 mt-1">Same day data gathering</p>
                  </div>
                </div>

                {/* Final CTA */}
                <div className="bg-gradient-to-r from-teal to-teal-dark rounded-xl p-6 text-center">
                  <h3 className="text-white font-bold text-xl mb-2">Prepared to Talk Through Your Facade Assessment?</h3>
                  <p className="text-white/80 text-sm mb-4">Specialist guidance • Bespoke pricing • Avg Response within 5 Mins</p>
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
                  With substantial expertise in building assessments and UAV operations, Peter personally supervises every facade inspection to guarantee thorough coverage and professional delivery.
                </p>
              </div>

              {/* Table of Contents */}
              <div className="bg-background-alt border border-border rounded-2xl p-6">
                <h3 className="text-teal font-bold text-lg mb-4">
                  Quick Guide: Drone Facade Assessments Explained
                </h3>
                <nav className="space-y-2">
                  {[
                    { id: 'what-is-facade', label: 'What Is a Drone Facade Assessment?' },
                    { id: 'facade-cost', label: 'What Does a Drone Facade Assessment Cost?' },
                    { id: 'facade-vs-rope-access', label: 'How Does Drone Assessment Compare to Abseil Access?' },
                    { id: 'facade-accuracy', label: 'What Precision Can a Drone Facade Assessment Deliver?' },
                    { id: 'facade-applications', label: 'Where Are Drone Facade Assessments Used?' },
                    { id: 'facade-defects', label: 'What Issues Can Drone Facade Assessments Detect?' },
                    { id: 'facade-deliverables', label: 'What Outputs Do You Receive From a Drone Facade Assessment?' },
                    { id: 'survey-timeline', label: 'Drone Facade Assessment Timeline' },
                    { id: 'choose-provider', label: 'How Do I Select a Drone Facade Assessment Provider?' },
                    { id: 'cost-comparison', label: 'Is Drone Facade Assessment More Economical Than Conventional Approaches?' },
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
                  Facade Assessment Outputs
                </h3>
                <ul className="space-y-3">
                  {[
                    'Ultra-sharp facade photography',
                    'Defect documentation with severity classifications',
                    'Condition charts (RAG)',
                    '3D representations & measurements',
                    'CAD drawings (DWG/DXF)',
                    'Thermal irregularity analysis',
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
                  Receive specialist guidance and bespoke pricing.
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
                    placeholder="Brief project particulars..."
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
              href="/services/drone-roof-inspection"
              className="bg-white border border-border rounded-xl p-6 hover:border-gold hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-teal font-bold text-lg mb-2">Drone Roof Inspection</h3>
              <p className="text-text-secondary text-sm">
                Secure, comprehensive roof assessments without requiring scaffolding or access equipment.
              </p>
            </Link>
            <Link
              href="/services/thermal-imaging"
              className="bg-white border border-border rounded-xl p-6 hover:border-gold hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-teal font-bold text-lg mb-2">Thermal Detection</h3>
              <p className="text-text-secondary text-sm">
                Pinpoint heat loss, moisture penetration, and insulation failures with drone thermal assessments.
              </p>
            </Link>
            <Link
              href="/services/drone-survey"
              className="bg-white border border-border rounded-xl p-6 hover:border-gold hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-teal font-bold text-lg mb-2">Drone Survey</h3>
              <p className="text-text-secondary text-sm">
                Thorough drone assessments for land, construction sites, and infrastructure projects.
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
