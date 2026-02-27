import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import QuoteButton from '@/components/QuoteButton';
import Testimonials from '@/components/Testimonials';
import FloatingCTA from '@/components/FloatingCTA';
import EquipmentSection from '@/components/EquipmentSection';
import { ServiceSchema, BreadcrumbSchema } from '@/components/SchemaMarkup';
import { ClientLogoMarqueeInline } from '@/components/ClientLogoMarquee';
import { Building2, Home, Factory, Warehouse, Thermometer, ShieldCheck, Clock, PoundSterling } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Drone Roof Inspection Services | UAV Roof Surveys UK | Hire Drone Pilot',
  description: 'Expert UAV roof inspection services throughout the UK. Secure, comprehensive drone assessments with thermal scanning. CAA certified drone pilots. Zero scaffolding needed.',
  keywords: 'drone roof survey, drone roof inspection, roof inspection drone, drone thermal roof survey, drone commercial roof survey uk',
};

export default function DroneRoofSurveyPage() {
  return (
    <>
      <ServiceSchema
        name="Drone Roof Inspection Services"
        description="Expert UAV roof inspection services throughout the UK. Secure, comprehensive drone assessments with thermal scanning. CAA certified drone pilots. Zero scaffolding needed."
        url="https://hiredronepilot.uk/services/drone-roof-inspection"
      />
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://hiredronepilot.uk" },
        { name: "Services", url: "https://hiredronepilot.uk/services" },
        { name: "Drone Roof Survey Services", url: "https://hiredronepilot.uk/services/drone-roof-inspection" }
      ]} />

      {/* Hero Section */}
      <section className="relative min-h-[800px] md:min-h-[600px] flex items-start bg-teal -mt-[120px] pt-[120px] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/services/roof/roof-hero.avif"
            alt="Professional drone inspecting large commercial roof in the UK"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-teal-dark via-teal-dark/90 via-40% to-teal-dark/40 z-10" />
        </div>
        <div className="container pt-8 pb-52 lg:pb-40 lg:pt-12 relative z-10">
          <div className="max-w-3xl">
            <p className="text-gold font-semibold uppercase tracking-wider mb-3">
              Inspection & Assessment
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Drone Roof Survey Service
            </h1>
            <p className="text-white/80 text-lg md:text-xl mb-8">
              Secure, thorough rooftop assessments from above without access equipment or elevated platforms. Ultra-high-definition imagery paired with thermal analysis delivers precise condition evaluations.
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

              {/* What is a Drone Roof Survey? */}
              <div>
                <h2 id="what-is-drone-roof-survey" className="text-2xl md:text-3xl font-bold text-teal mb-4 scroll-mt-32">
                  Understanding <span className="text-gold">Drone Roof Assessments</span>
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed mb-4">
                  A drone roof assessment utilises advanced UAV technology to gather comprehensive imagery of your rooftop from elevated vantage points, eliminating the requirement for scaffolding, boom lifts, or personnel physically accessing the roof surface. Our aircraft capture ultra-sharp photographs and footage that expose the actual state of your roofing materials.
                </p>
                <p className="text-text-secondary text-lg leading-relaxed">
                  At Hire Drone Pilot, we operate cutting-edge camera drones fitted with high-resolution sensors and optional thermal detection capabilities. This enables us to pinpoint defects, deterioration, and areas of concern that remain invisible from ground level—and frequently escape notice during conventional rooftop inspections.
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
                        Secure Rooftop Assessments,
                        <span className="text-gold block relative inline-block">
                          Zero Access Equipment Needed
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
                          'Ultra-sharp drone photography',
                          'Detailed defect documentation',
                          'Thermal scanning (optional)',
                          'Upkeep guidance',
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
                        Delivered in 3-5 working days
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
                          'Zero scaffolding expenses',
                          'Bookings within days',
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

              {/* How much does a Drone Roof Survey cost? */}
              <div>
                <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-6">
                  <Image
                    src="/images/services/roof/roof-cost.avif"
                    alt="Surveyor reviewing drone roof survey data on tablet device"
                    fill
                    className="object-cover"
                  />
                </div>
                <h2 id="drone-roof-survey-cost" className="text-2xl md:text-3xl font-bold text-teal mb-4 scroll-mt-32">
                  What Does an <span className="text-gold">Drone Roof Inspection</span> Cost?
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed mb-6">
                  Drone roof inspection pricing varies based on your property&apos;s dimensions and intricacy. Below is a reference to assist with budgeting:
                </p>

                {/* Pricing Table */}
                <div className="rounded-xl overflow-hidden border border-border mb-6">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-teal">
                        <th className="text-left text-white font-semibold py-3 px-4">Property Type</th>
                        <th className="text-left text-white font-semibold py-3 px-4">Guide Price</th>
                        <th className="text-left text-white font-semibold py-3 px-4 hidden md:table-cell">Typical Buildings</th>
                        <th className="text-left text-white font-semibold py-3 px-4 hidden lg:table-cell">Deliverables</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-white">
                        <td className="py-3 px-4 text-text-primary font-medium">Residential<span className="block text-sm text-text-secondary font-normal">Single property</span></td>
                        <td className="py-3 px-4 text-gold font-bold">£250+</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden md:table-cell">Houses, bungalows, small flats</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden lg:table-cell">HD imagery, basic report</td>
                      </tr>
                      <tr className="bg-background-alt">
                        <td className="py-3 px-4 text-text-primary font-medium">Small Commercial<span className="block text-sm text-text-secondary font-normal">Up to 500m²</span></td>
                        <td className="py-3 px-4 text-gold font-bold">£350+</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden md:table-cell">Shops, small offices, pubs</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden lg:table-cell">HD imagery, annotated report</td>
                      </tr>
                      <tr className="bg-white">
                        <td className="py-3 px-4 text-text-primary font-medium">Medium Commercial<span className="block text-sm text-text-secondary font-normal">500-2000m²</span></td>
                        <td className="py-3 px-4 text-gold font-bold">£500+</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden md:table-cell">Warehouses, schools, care homes</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden lg:table-cell">Full report + orthomosaic</td>
                      </tr>
                      <tr className="bg-background-alt">
                        <td className="py-3 px-4 text-text-primary font-medium">Large Commercial<span className="block text-sm text-text-secondary font-normal">2000m²+</span></td>
                        <td className="py-3 px-4 text-gold font-bold">£750+</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden md:table-cell">Distribution centres, factories</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden lg:table-cell">Comprehensive survey package</td>
                      </tr>
                      <tr className="bg-white">
                        <td className="py-3 px-4 text-text-primary font-medium">Multi-Building<span className="block text-sm text-text-secondary font-normal">Portfolio</span></td>
                        <td className="py-3 px-4 text-gold font-bold">POA</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden md:table-cell">Estates, housing associations</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden lg:table-cell">Custom scope & reporting</td>
                      </tr>
                      <tr className="bg-teal/10">
                        <td className="py-3 px-4 text-teal font-bold">Thermal Add-on</td>
                        <td className="py-3 px-4 text-teal font-bold">+£150</td>
                        <td className="py-3 px-4 text-teal text-sm font-medium hidden md:table-cell">Add to any survey above</td>
                        <td className="py-3 px-4 text-teal text-sm font-medium hidden lg:table-cell">Heat loss & moisture detection</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-text-secondary text-sm mb-6 italic">
                  *Reference prices encompass standard deliverables. Final quotation depends on site intricacy, accessibility, and particular needs.
                </p>

                {/* What affects your quote */}
                <h3 className="font-bold text-teal mb-3">Factors Influencing Your Quote</h3>
                <ul className="grid grid-cols-2 gap-2 mb-6">
                  {['Roof dimensions & intricacy', 'Quantity of structures', 'Site location & accessibility', 'Thermal scanning needs'].map((factor, index) => (
                    <li key={index} className="flex items-center gap-2 text-text-secondary">
                      <svg className="w-4 h-4 text-gold flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm">{factor}</span>
                    </li>
                  ))}
                </ul>

                <p className="text-text-secondary leading-relaxed mb-6">
                  When measured against conventional roof inspections needing scaffolding or elevated access platforms, a drone roof assessment typically delivers savings of <span className="text-gold font-semibold">60-80%</span> on access expenses alone. Send us your property particulars and we&apos;ll furnish a customised quotation within 24 hours.
                </p>

                {/* CTA Banner */}
                <div className="bg-teal rounded-xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-center sm:text-left">
                    <p className="text-white font-semibold">Prepared to receive a quotation for your roof inspection?</p>
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

              {/* Drone Roof Survey vs Traditional Inspection */}
              <div>
                <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-6">
                  <Image
                    src="/images/services/roof/roof-comparison.avif"
                    alt="Comparison of drone roof survey versus scaffolding and cherry picker access"
                    fill
                    className="object-cover"
                  />
                </div>
                <h2 id="drone-roof-survey-vs-traditional" className="text-2xl md:text-3xl font-bold text-teal mb-4 scroll-mt-32">
                  How Does <span className="text-gold">Drone Roof Inspection</span> Compare to Conventional Methods?
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed mb-4">
                  Conventional roof inspections usually demand scaffolding, boom lifts, or surveyors manually ascending to the rooftop. This introduces substantial expenses, safety hazards, and frequently requires days to coordinate. Adverse weather can extend schedules even further.
                </p>
                <p className="text-text-secondary text-lg leading-relaxed mb-4">
                  A drone roof inspection removes these obstacles. We can arrive on-site within days, finish the assessment in hours, and gather imagery that&apos;s frequently more comprehensive than a visual check from roof level. Our aircraft reach zones that would be hazardous or unfeasible to access on foot, and the entire operation carries zero danger of falls or incidents.
                </p>
                {/* Comparison Cards */}
                <div className="mt-8">
                  <h3 className="text-center font-bold text-teal text-xl mb-6">Why Select Drone Over Traditional?</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {/* Drone Card */}
                    <div className="relative bg-teal rounded-2xl p-6 overflow-hidden group hover:shadow-xl transition-shadow duration-300">
                      <div className="relative z-10">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-12 h-12 bg-gold/20 rounded-xl flex items-center justify-center">
                            <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                          </div>
                          <div>
                            <h4 className="text-white font-bold text-lg">Drone Roof Assessment</h4>
                            <p className="text-gold text-sm font-medium">Swift, secure & budget-friendly</p>
                          </div>
                        </div>
                        <div className="space-y-3">
                          {[
                            { Icon: Clock, text: 'Booking within days' },
                            { Icon: ShieldCheck, text: 'No elevated work hazards' },
                            { Icon: PoundSterling, text: '60-80% expense reduction' },
                            { Icon: Thermometer, text: 'Thermal scanning available' },
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
                    <div className="relative bg-white border-2 border-border rounded-2xl p-6 overflow-hidden group hover:border-red-300 hover:shadow-xl transition-all duration-300">
                      <div className="relative z-10">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center">
                            <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                            </svg>
                          </div>
                          <div>
                            <h4 className="text-text-primary font-bold text-lg">Conventional Inspection</h4>
                            <p className="text-text-secondary text-sm font-medium">Scaffolding or elevated platforms</p>
                          </div>
                        </div>
                        <div className="space-y-3">
                          {[
                            { text: '2-4 weeks advance notice', negative: true },
                            { text: 'Elevated work hazards', negative: true },
                            { text: 'Substantial scaffolding fees', negative: true },
                            { text: 'Weather-sensitive installation', negative: true },
                          ].map((item, i) => (
                            <div key={i} className="flex items-center gap-3 bg-red-50 rounded-lg px-4 py-2.5">
                              <svg className="w-5 h-5 text-red-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                    <p className="text-text-secondary text-sm mb-2">Uncertain whether a drone roof inspection fits your property?</p>
                    <QuoteButton className="text-gold font-semibold hover:underline inline-flex items-center gap-1">
                      Obtain specialist guidance
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </QuoteButton>
                  </div>
                </div>
              </div>

              {/* What accuracy can a Drone Roof Survey achieve? */}
              <div>
                <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-6">
                  <Image
                    src="/images/services/roof/roof-accuracy.avif"
                    alt="High-resolution close-up of roof detail showing defect identification"
                    fill
                    className="object-cover"
                  />
                </div>
                <h2 id="drone-roof-survey-accuracy" className="text-2xl md:text-3xl font-bold text-teal mb-4 scroll-mt-32">
                  What Precision Can an <span className="text-gold">Drone Roof Assessment</span> Deliver?
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed mb-4">
                  Our drone roof assessments gather imagery at resolutions of 1-2cm per pixel—sharp enough to spot individual fractured tiles, raised flashings, obstructed gutters, and even early-stage moss formation. This degree of clarity frequently surpasses what can be observed during a manual rooftop walkover.
                </p>
                <p className="text-text-secondary text-lg leading-relaxed">
                  When paired with orthomosaic processing, we generate scaled, quantifiable <Link href="/services/drone-measured-building-survey" className="text-gold hover:underline">roof plans</Link> enabling you to compute areas, schedule repairs, and specify materials with assurance. For structural evaluations or insurance claims, this documentation furnishes unambiguous, timestamped proof of roof condition.
                </p>
              </div>

              {/* Applications */}
              <div>
                <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-6">
                  <Image
                    src="/images/services/roof/roof-applications.avif"
                    alt="Various roof types from above - commercial flat, residential pitched, industrial"
                    fill
                    className="object-cover"
                  />
                </div>
                <h2 id="drone-roof-survey-applications" className="text-2xl md:text-3xl font-bold text-teal mb-4 scroll-mt-32">
                  Where Are <span className="text-gold">Drone Roof Inspections</span> Used?
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed mb-6">
                  Drone roof inspections prove beneficial across an extensive variety of property categories and circumstances. Below are the primary applications where our clients realise the most value:
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-background-alt rounded-xl p-6">
                    <Home className="w-8 h-8 text-gold mb-3" strokeWidth={1.5} />
                    <h3 className="font-bold text-teal mb-2">Domestic Properties</h3>
                    <p className="text-text-secondary text-sm">Pre-acquisition assessments, insurance claims, routine upkeep reviews, and storm damage evaluation for houses and apartments.</p>
                  </div>
                  <div className="bg-background-alt rounded-xl p-6">
                    <Building2 className="w-8 h-8 text-gold mb-3" strokeWidth={1.5} />
                    <h3 className="font-bold text-teal mb-2">Commercial Premises</h3>
                    <p className="text-text-secondary text-sm">Office towers, retail spaces, and multi-level structures where conventional access proves costly and disruptive.</p>
                  </div>
                  <div className="bg-background-alt rounded-xl p-6">
                    <Warehouse className="w-8 h-8 text-gold mb-3" strokeWidth={1.5} />
                    <h3 className="font-bold text-teal mb-2">Industrial & Storage Facilities</h3>
                    <p className="text-text-secondary text-sm">Expansive flat rooftops on distribution hubs, manufacturing plants, and logistics centres—frequently too vast for practical scaffold deployment.</p>
                  </div>
                  <div className="bg-background-alt rounded-xl p-6">
                    <Factory className="w-8 h-8 text-gold mb-3" strokeWidth={1.5} />
                    <h3 className="font-bold text-teal mb-2">Heritage & Listed Structures</h3>
                    <p className="text-text-secondary text-sm">Churches, historic estates, and <Link href="/services/drone-facade-survey" className="text-gold hover:underline">protected buildings</Link> where physical access might cause harm or faces restrictions.</p>
                  </div>
                  <div className="bg-background-alt rounded-xl p-6">
                    <ShieldCheck className="w-8 h-8 text-gold mb-3" strokeWidth={1.5} />
                    <h3 className="font-bold text-teal mb-2">Insurance & Claims</h3>
                    <p className="text-text-secondary text-sm">Storm damage records, condition reports for underwriters, and evidence collection for insurance disputes.</p>
                  </div>
                  <div className="bg-background-alt rounded-xl p-6">
                    <Thermometer className="w-8 h-8 text-gold mb-3" strokeWidth={1.5} />
                    <h3 className="font-bold text-teal mb-2">Energy Performance Reviews</h3>
                    <p className="text-text-secondary text-sm">Thermal drone inspections to detect heat loss, insulation faults, and moisture penetration for <Link href="/services/drone-solar-survey" className="text-gold hover:underline">energy efficiency</Link> enhancements.</p>
                  </div>
                </div>

                {/* CTA after applications */}
                <div className="mt-8 text-center">
                  <p className="text-text-secondary mb-4">Have a rooftop requiring assessment?</p>
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

              {/* Can Drone Roof Surveys Detect Leaks? - Thermal Imaging Feature */}
              <div>
                <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-6">
                  <Image
                    src="/images/services/roof/roof-feature.avif"
                    alt="Thermal imaging overlay on roof showing heat loss patterns"
                    fill
                    className="object-cover"
                  />
                </div>
                <h2 id="thermal-imaging" className="text-2xl md:text-3xl font-bold text-teal mb-4 scroll-mt-32">
                  Can <span className="text-gold">Drone Roof Inspections</span> Identify Leaks?
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed mb-4">
                  Absolutely—through <Link href="/services/drone-thermal-imaging" className="text-gold hover:underline">thermal imaging</Link>. Our aircraft can be fitted with radiometric thermal cameras that sense temperature differences across your roof surface. Trapped moisture holds heat distinctively compared to dry materials, rendering water ingress detectable even when no visible surface damage exists.
                </p>
                <p className="text-text-secondary text-lg leading-relaxed mb-4">
                  Thermal drone roof inspections prove especially effective for:
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gold mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-text-primary"><strong>Moisture identification</strong> – Locating water penetration before it damages interiors</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gold mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-text-primary"><strong>Heat loss pinpointing</strong> – Detecting insulation voids and thermal bridging</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gold mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-text-primary"><strong>Flat roof evaluations</strong> – Spotting water pooling and drainage problems</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gold mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-text-primary"><strong>Solar panel performance</strong> – Verifying cell operation and connection integrity</span>
                  </li>
                </ul>
                <p className="text-text-secondary text-lg leading-relaxed">
                  For optimal outcomes, thermal inspections are performed during early morning or evening hours when temperature contrasts are most distinct. We&apos;ll recommend ideal scheduling when you get in touch.
                </p>

                {/* Thermal callout */}
                <div className="mt-6 flex items-start gap-3 bg-gold/10 border border-gold/30 rounded-lg p-4">
                  <Thermometer className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                  <div>
                    <p className="text-teal font-semibold text-sm">Include Thermal Scanning With Any Assessment</p>
                    <p className="text-text-secondary text-sm">Simply +£150 to incorporate thermal analysis into your drone roof inspection.</p>
                  </div>
                </div>
              </div>

              {/* What deliverables? */}
              <div>
                <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-6">
                  <Image
                    src="/images/services/roof/roof-deliverables.avif"
                    alt="Annotated drone roof survey report displayed on computer screen"
                    fill
                    className="object-cover"
                  />
                </div>
                <h2 id="drone-roof-survey-deliverables" className="text-2xl md:text-3xl font-bold text-teal mb-4 scroll-mt-32">
                  What Outputs Do You Receive From an <span className="text-gold">Drone Roof Inspection</span>?
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed mb-6">
                  We customise outputs to match your needs, but our standard drone roof inspection package comprises:
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-4 bg-background-alt rounded-xl p-4">
                    <div className="w-10 h-10 bg-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-teal">Ultra-Sharp Drone Photography</h4>
                      <p className="text-text-secondary text-sm">Complete coverage imagery at 1-2cm/pixel resolution capturing every element of your roof surface, flashings, and drainage systems.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4 bg-background-alt rounded-xl p-4">
                    <div className="w-10 h-10 bg-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-teal">Marked-Up Defect Documentation</h4>
                      <p className="text-text-secondary text-sm">Professional PDF documentation with issues highlighted, photographed, and explained. Features location markers and severity ratings.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4 bg-background-alt rounded-xl p-4">
                    <div className="w-10 h-10 bg-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-teal">Orthomosaic Rooftop Plan</h4>
                      <p className="text-text-secondary text-sm">Scaled, quantifiable overhead view of your complete roof, perfect for computing areas and scheduling repairs.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4 bg-background-alt rounded-xl p-4">
                    <div className="w-10 h-10 bg-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Thermometer className="w-5 h-5 text-gold" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h4 className="font-bold text-teal">Thermal Photography (Optional)</h4>
                      <p className="text-text-secondary text-sm">Radiometric thermal imagery revealing heat escape patterns, moisture presence, and insulation faults.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4 bg-background-alt rounded-xl p-4">
                    <div className="w-10 h-10 bg-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-teal">Condition Summary & Guidance</h4>
                      <p className="text-text-secondary text-sm">Overview of roof status with ranked maintenance guidance and calculated repair zones.</p>
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
                    src="/images/services/roof/roof-timeline.avif"
                    alt="Drone pilot preparing for roof survey flight"
                    fill
                    className="object-cover"
                  />
                </div>
                <h2 id="survey-timeline" className="text-2xl md:text-3xl font-bold text-teal mb-4 scroll-mt-32">
                  What&apos;s the Duration of an <span className="text-gold">Drone Roof Inspection</span>?
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed mb-4">
                  On-site data gathering is exceptionally swift. A standard domestic roof requires 20-30 minutes to assess. Mid-sized commercial structures take 1-2 hours. Even substantial industrial complexes can typically be finished within half a day.
                </p>
                <p className="text-text-secondary text-lg leading-relaxed mb-6">
                  Report turnaround hinges on your assessment scope. Standard photography reports are generally complete within 3-5 working days. Assessments demanding orthomosaic processing or comprehensive thermal analysis may require 5-7 days. We&apos;ll verify achievable timelines when quoting your project.
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
                        <td className="py-3 px-4 text-text-primary font-medium">Scheduling & Preparation</td>
                        <td className="py-3 px-4 text-gold font-bold">1-3 days</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden md:table-cell">Date confirmation, airspace verification, site review</td>
                      </tr>
                      <tr className="bg-background-alt">
                        <td className="py-3 px-4 text-text-primary font-medium">On-Site Assessment</td>
                        <td className="py-3 px-4 text-gold font-bold">30 mins - 4 hrs</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden md:table-cell">Equipment setup, flight operations, data validation</td>
                      </tr>
                      <tr className="bg-white">
                        <td className="py-3 px-4 text-text-primary font-medium">Imagery Processing</td>
                        <td className="py-3 px-4 text-gold font-bold">1-2 days</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden md:table-cell">Photo curation, enhancement, orthomosaic generation</td>
                      </tr>
                      <tr className="bg-background-alt">
                        <td className="py-3 px-4 text-text-primary font-medium">Report Compilation</td>
                        <td className="py-3 px-4 text-gold font-bold">1-3 days</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden md:table-cell">Defect marking, condition evaluation, guidance</td>
                      </tr>
                      <tr className="bg-teal/10">
                        <td className="py-3 px-4 text-teal font-bold">Overall (Standard)</td>
                        <td className="py-3 px-4 text-teal font-bold">3-5 working days</td>
                        <td className="py-3 px-4 text-teal text-sm font-medium hidden md:table-cell">From site attendance to final handover</td>
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
                    <p className="text-teal font-semibold text-sm">Rapid Service Offered</p>
                    <p className="text-text-secondary text-sm">Require quicker turnaround? Same-day or next-day reports obtainable for time-sensitive projects.</p>
                  </div>
                </div>

                {/* CTA after timeline */}
                <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
                  <QuoteButton className="btn btn-primary btn-shimmer">
                    Schedule Your Assessment
                  </QuoteButton>
                  <a href="tel:+441334804554" className="btn btn-outline flex items-center justify-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Chat With Peter
                  </a>
                </div>
              </div>

              {/* How to choose a provider */}
              <div>
                <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-6">
                  <Image
                    src="/images/services/roof/roof-provider.avif"
                    alt="Professional survey team meeting with property manager"
                    fill
                    className="object-cover"
                  />
                </div>
                <h2 id="choose-provider" className="text-2xl md:text-3xl font-bold text-teal mb-4 scroll-mt-32">
                  How Do I Select an <span className="text-gold">Drone Roof Inspection</span> Provider?
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed mb-4">
                  Not every drone roof inspection service offers the same standard. When assessing providers, we suggest examining these essential criteria:
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gold mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-text-primary"><strong>CAA certification</strong> – Verify they possess valid GVC or legacy PfCO permissions for commercial work</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gold mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-text-primary"><strong>Commercial insurance</strong> – Public liability (minimum £1M) and professional indemnity protection</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gold mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-text-primary"><strong>Roof inspection background</strong> – Request examples of earlier rooftop assessment projects</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gold mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-text-primary"><strong>Documentation standard</strong> – Ask for specimen reports to gauge the comprehensiveness you&apos;ll receive</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gold mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-text-primary"><strong>Thermal equipment</strong> – If leak detection matters, confirm they possess appropriate thermal kit</span>
                  </li>
                </ul>
                <p className="text-text-secondary text-lg leading-relaxed mb-6">
                  At Hire Drone Pilot, we satisfy every criterion. We&apos;re CAA certified, comprehensively insured, and have performed roof assessments for facilities managers, chartered surveyors, and property owners throughout the UK.
                </p>

                {/* CTA after provider section */}
                <div className="bg-teal rounded-xl p-5">
                  <p className="text-white font-semibold mb-3">Prepared to partner with a dependable roof inspection provider?</p>
                  <div className="flex flex-wrap gap-3">
                    <QuoteButton className="px-5 py-2.5 rounded-full bg-gold text-teal-dark font-semibold hover:bg-gold/90 transition-colors text-sm btn-shimmer">
                      Connect With Peter
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

              {/* Cost comparison - Drone vs Scaffolding */}
              <div>
                <h2 id="cost-comparison" className="text-2xl md:text-3xl font-bold text-teal mb-4 scroll-mt-32">
                  Is an <span className="text-gold">Drone Roof Inspection</span> More Economical Than Scaffolding?
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed mb-4">
                  Considerably more economical—and swifter as well. Scaffolding rental for a standard commercial structure can run £2,000-£10,000+ based on scale, with supplementary charges for assembly, removal, and rental duration. Boom lift hire brings daily fees plus operator expenses. Both demand health & safety coordination and frequently disrupt business activities.
                </p>
                <p className="text-text-secondary text-lg leading-relaxed mb-6">
                  Our drone roof inspections provide equivalent visual evaluation—frequently with superior coverage—at a fraction of the expense. An assessment that might necessitate £5,000 worth of scaffolding can normally be accomplished by drone for £350-£750. That represents savings of <span className="text-gold font-semibold">80% or greater</span>, with outcomes delivered within days rather than weeks.
                </p>

                {/* Cost Comparison Visual */}
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-background-alt border border-border rounded-xl p-6">
                    <h4 className="font-bold text-teal mb-4">Conventional Access Expenses</h4>
                    <ul className="space-y-2 text-text-secondary text-sm">
                      <li className="flex justify-between">
                        <span>Scaffolding rental (2 weeks)</span>
                        <span className="font-semibold">£3,000-£8,000</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Assembly & removal</span>
                        <span className="font-semibold">£500-£1,500</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Site safety coordination</span>
                        <span className="font-semibold">£300-£500</span>
                      </li>
                      <li className="flex justify-between border-t border-border pt-2 mt-2">
                        <span className="font-bold text-teal">Standard Total</span>
                        <span className="font-bold text-red-500">£4,000-£10,000</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-teal/10 border border-teal/20 rounded-xl p-6">
                    <h4 className="font-bold text-teal mb-4">Drone Roof Assessment</h4>
                    <ul className="space-y-2 text-text-secondary text-sm">
                      <li className="flex justify-between">
                        <span>Full inspection & documentation</span>
                        <span className="font-semibold">£350-£750</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Thermal scanning (optional)</span>
                        <span className="font-semibold">+£150</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Zero access equipment required</span>
                        <span className="font-semibold text-green-600">Included</span>
                      </li>
                      <li className="flex justify-between border-t border-teal/20 pt-2 mt-2">
                        <span className="font-bold text-teal">Standard Total</span>
                        <span className="font-bold text-gold">£350-£900</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Final CTA */}
                <div className="bg-gradient-to-r from-teal to-teal-dark rounded-xl p-6 text-center">
                  <h3 className="text-white font-bold text-xl mb-2">Prepared to Assess Your Rooftop?</h3>
                  <p className="text-white/80 text-sm mb-4">Specialist guidance • Customised pricing • Avg Response within 5 Mins</p>
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
                  With broad expertise in UAV surveying and structural inspections, Peter personally supervises every roof assessment to guarantee thorough, precise documentation you can depend on.
                </p>
              </div>

              {/* Table of Contents */}
              <div className="bg-background-alt border border-border rounded-2xl p-6">
                <h3 className="text-teal font-bold text-lg mb-4">
                  Quick Guide: Drone Roof Inspections Explained
                </h3>
                <nav className="space-y-2">
                  {[
                    { id: 'what-is-drone-roof-survey', label: 'Understanding Drone Roof Assessments' },
                    { id: 'drone-roof-survey-cost', label: 'What Does a Drone Roof Inspection Cost?' },
                    { id: 'drone-roof-survey-vs-traditional', label: 'How Does Drone Compare to Conventional Methods?' },
                    { id: 'drone-roof-survey-accuracy', label: 'What Precision Can Drone Assessments Deliver?' },
                    { id: 'drone-roof-survey-applications', label: 'Where Are Drone Roof Inspections Used?' },
                    { id: 'thermal-imaging', label: 'Can Drone Roof Inspections Identify Leaks?' },
                    { id: 'drone-roof-survey-deliverables', label: 'What Outputs Do You Receive?' },
                    { id: 'survey-timeline', label: 'What\'s the Duration of a Drone Inspection?' },
                    { id: 'choose-provider', label: 'How Do I Select a Provider?' },
                    { id: 'cost-comparison', label: 'Is Drone More Economical Than Scaffolding?' },
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
                  Assessment Outputs
                </h3>
                <ul className="space-y-3">
                  {[
                    'Ultra-sharp drone photography',
                    'Marked-up defect documentation',
                    'Orthomosaic rooftop plans',
                    'Thermal photography (optional)',
                    'Condition evaluation reports',
                    'Upkeep guidance',
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
                  Obtain specialist guidance and customised pricing.
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

      {/* Related Services */}
      <section className="py-16 bg-background-alt">
        <div className="container">
          <h2 className="text-2xl font-bold text-teal mb-8 text-center">
            Complementary Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link
              href="/services/drone-survey"
              className="bg-white border border-border rounded-xl p-6 hover:border-gold hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-teal font-bold text-lg mb-2">UAV Surveying</h3>
              <p className="text-text-secondary text-sm">
                Thorough drone surveys providing accurate topographic information and 3D representations.
              </p>
            </Link>
            <Link
              href="/services/drone-roof-inspection"
              className="bg-white border border-border rounded-xl p-6 hover:border-gold hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-teal font-bold text-lg mb-2">Structure Inspection</h3>
              <p className="text-text-secondary text-sm">
                Complete building exterior and structural examinations utilising drone technology.
              </p>
            </Link>
            <Link
              href="/services/thermal-imaging"
              className="bg-white border border-border rounded-xl p-6 hover:border-gold hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-teal font-bold text-lg mb-2">Thermal Analysis</h3>
              <p className="text-text-secondary text-sm">
                Identify heat escape, moisture, and insulation faults through thermal drone surveys.
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
