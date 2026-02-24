import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import QuoteButton from '@/components/QuoteButton';
import Testimonials from '@/components/Testimonials';
import FloatingCTA from '@/components/FloatingCTA';
import EquipmentSection from '@/components/EquipmentSection';
import { ServiceSchema, BreadcrumbSchema } from '@/components/SchemaMarkup';
import { ClientLogoMarqueeInline } from '@/components/ClientLogoMarquee';
import { Thermometer, Building2, Factory, Zap, ShieldCheck, Clock, PoundSterling, Sun } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Drone Thermal Imaging Services | Aerial Thermography UK | Hire Drone Pilot',
  description: 'Professional drone thermal imaging services across the UK. Radiometric thermal cameras for building diagnostics, energy audits, solar panel inspection and leak detection. CAA certified pilots.',
  keywords: 'drone thermal imaging, aerial thermography, thermal drone survey, building thermal inspection, solar panel inspection drone, energy audit drone uk',
};

export default function DroneThermalImagingPage() {
  return (
    <>
      <ServiceSchema
        name="Drone Thermal Imaging Services"
        description="Professional drone thermal imaging services across the UK. Radiometric thermal cameras for building diagnostics, energy audits, solar panel inspection and leak detection. CAA certified pilots."
        url="https://hiredronepilot.uk/services/drone-thermal-imaging"
      />
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://hiredronepilot.uk" },
        { name: "Services", url: "https://hiredronepilot.uk/services" },
        { name: "Drone Thermal Imaging", url: "https://hiredronepilot.uk/services/drone-thermal-imaging" }
      ]} />

      {/* Hero Section */}
      <section className="relative min-h-[800px] md:min-h-[600px] flex items-start bg-teal -mt-[120px] pt-[120px] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/services/service-drone-survey.avif"
            alt="Drone equipped with thermal camera surveying a commercial building in the UK"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-teal-dark via-teal-dark/90 via-40% to-teal-dark/40 z-10" />
        </div>
        <div className="container pt-8 pb-52 lg:pb-40 lg:pt-12 relative z-10">
          <div className="max-w-3xl">
            <p className="text-gold font-semibold uppercase tracking-wider mb-3">
              Inspection Services
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Drone Thermal Imaging Services
            </h1>
            <p className="text-white/80 text-lg md:text-xl mb-8">
              Radiometric thermal cameras mounted on professional drones deliver precise temperature mapping for building diagnostics, energy audits, solar panel inspections, and industrial monitoring across the UK.
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

              <div>
                <h2 id="what-is-drone-thermal-imaging" className="text-2xl md:text-3xl font-bold text-teal mb-4 scroll-mt-32">
                  What is <span className="text-gold">Drone Thermal Imaging</span>?
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed mb-4">
                  Drone thermal imaging employs radiometric thermal cameras mounted on professional UAVs to capture detailed temperature data across buildings, infrastructure, and landscapes. Unlike standard photography, thermal sensors detect infrared radiation emitted by surfaces, converting invisible heat patterns into colour-coded imagery that reveals temperature variations with precision.
                </p>
                <p className="text-text-secondary text-lg leading-relaxed">
                  At Hire Drone Pilot, our thermal drone platforms carry calibrated radiometric cameras measuring absolute temperatures across every pixel. This enables us to identify heat loss, moisture ingress, electrical faults, insulation deficiencies, and equipment anomalies invisible to the naked eye or conventional cameras.
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
                          &quot;Have questions about thermal imaging? Ring me directly - I&apos;m happy to discuss your project requirements.&quot;
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
                        Reveal Hidden Heat Loss,
                        <span className="text-gold block relative inline-block">
                          Detect Problems Early
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
                          'Radiometric thermal imagery',
                          'Temperature analysis report',
                          'Annotated defect mapping',
                          'Remediation recommendations',
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
                          'Calibrated radiometric cameras',
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
                        <span>Relied upon by energy consultants, facilities managers & building surveyors throughout the UK.</span>
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
                        Request Thermal Survey Quote
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

              <div>
                <h2 id="drone-thermal-imaging-cost" className="text-2xl md:text-3xl font-bold text-teal mb-4 scroll-mt-32">
                  How Much Does <span className="text-gold">Drone Thermal Imaging</span> Cost?
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed mb-6">Pricing depends on scale and complexity. Below is a guide to help with budgeting:</p>

                {/* Pricing Table */}
                <div className="rounded-xl overflow-hidden border border-border mb-6">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-teal">
                        <th className="text-left text-white font-semibold py-3 px-4">Survey Type</th>
                        <th className="text-left text-white font-semibold py-3 px-4">Guide Price</th>
                        <th className="text-left text-white font-semibold py-3 px-4 hidden md:table-cell">Typical Scope</th>
                        <th className="text-left text-white font-semibold py-3 px-4 hidden lg:table-cell">Deliverables</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-white">
                        <td className="py-3 px-4 text-text-primary font-medium">Single Building<span className="block text-sm text-text-secondary font-normal">Residential or small commercial</span></td>
                        <td className="py-3 px-4 text-gold font-bold">£350+</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden md:table-cell">Houses, offices, small retail units</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden lg:table-cell">Thermal imagery, basic report</td>
                      </tr>
                      <tr className="bg-background-alt">
                        <td className="py-3 px-4 text-text-primary font-medium">Commercial / Industrial<span className="block text-sm text-text-secondary font-normal">Medium-scale facilities</span></td>
                        <td className="py-3 px-4 text-gold font-bold">£600+</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden md:table-cell">Warehouses, factories, schools</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden lg:table-cell">Full radiometric report</td>
                      </tr>
                      <tr className="bg-white">
                        <td className="py-3 px-4 text-text-primary font-medium">Large Site / Multi-Building<span className="block text-sm text-text-secondary font-normal">Estates or portfolios</span></td>
                        <td className="py-3 px-4 text-gold font-bold">£1,000+</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden md:table-cell">Business parks, housing estates, campuses</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden lg:table-cell">Comprehensive thermal package</td>
                      </tr>
                      <tr className="bg-background-alt">
                        <td className="py-3 px-4 text-text-primary font-medium">Solar Farm Inspection<span className="block text-sm text-text-secondary font-normal">Panel-level analysis</span></td>
                        <td className="py-3 px-4 text-gold font-bold">POA</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden md:table-cell">Ground-mount and rooftop arrays</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden lg:table-cell">Cell-level defect mapping</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-text-secondary text-sm mb-6 italic">
                  *Guide prices encompass standard deliverables. Final quotation depends on site complexity, building count, and specific requirements.
                </p>

                {/* What affects your quote */}
                <h3 className="font-bold text-teal mb-3">Factors Influencing Your Quote</h3>
                <ul className="grid grid-cols-2 gap-2 mb-6">
                  {['Building size & complexity', 'Number of structures', 'Site location & accessibility', 'Time-of-day requirements'].map((factor, index) => (
                    <li key={index} className="flex items-center gap-2 text-text-secondary">
                      <svg className="w-4 h-4 text-gold flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm">{factor}</span>
                    </li>
                  ))}
                </ul>

                <p className="text-text-secondary leading-relaxed mb-6">
                  Drone thermal surveys typically cost <span className="text-gold font-semibold">50-70% less</span> than scaffolding-based thermographic inspections, whilst covering substantially larger areas in a fraction of the time. Share your project details and we will provide a tailored quotation within 24 hours.
                </p>

                {/* CTA Banner */}
                <div className="bg-teal rounded-xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-center sm:text-left">
                    <p className="text-white font-semibold">Ready for a thermal imaging quotation?</p>
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

              <div>
                <h2 id="drone-vs-handheld-thermal" className="text-2xl md:text-3xl font-bold text-teal mb-4 scroll-mt-32">
                  How Does <span className="text-gold">Drone Thermal Imaging</span> Compare to Handheld Methods?
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed mb-4">
                  Handheld thermal cameras require inspectors to physically access every surface, limiting coverage to ground-level or areas reachable by ladder. This approach is time-consuming, provides inconsistent viewing angles, and frequently misses upper facades, rooftops, and hard-to-reach zones.
                </p>
                <p className="text-text-secondary text-lg leading-relaxed mb-4">
                  Drone-mounted thermal cameras capture entire building envelopes from optimal vantage points in a single flight, ensuring uniform coverage, consistent calibration, and the ability to survey large sites rapidly without access equipment.
                </p>
                {/* Comparison Cards */}
                <div className="mt-8">
                  <h3 className="text-center font-bold text-teal text-xl mb-6">Why Select Drone Over Handheld?</h3>
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
                            <h4 className="text-white font-bold text-lg">Drone Thermal Survey</h4>
                            <p className="text-gold text-sm font-medium">Complete coverage, rapid results</p>
                          </div>
                        </div>
                        <div className="space-y-3">
                          {[
                            { Icon: Clock, text: 'Full building in under an hour' },
                            { Icon: ShieldCheck, text: 'No elevated work needed' },
                            { Icon: PoundSterling, text: 'Lower cost per square metre' },
                            { Icon: Thermometer, text: 'Consistent calibration throughout' },
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
                            <h4 className="text-text-primary font-bold text-lg">Handheld Thermal Survey</h4>
                            <p className="text-text-secondary text-sm font-medium">Ground-level access only</p>
                          </div>
                        </div>
                        <div className="space-y-3">
                          {[
                            { text: 'Limited to reachable surfaces', negative: true },
                            { text: 'Scaffolding for upper levels', negative: true },
                            { text: 'Inconsistent viewing angles', negative: true },
                            { text: 'Slow coverage of large sites', negative: true },
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
                    <p className="text-text-secondary text-sm mb-2">Uncertain whether drone thermal imaging suits your project?</p>
                    <QuoteButton className="text-gold font-semibold hover:underline inline-flex items-center gap-1">
                      Obtain specialist guidance
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </QuoteButton>
                  </div>
                </div>
              </div>

              {/* What Can Thermal Imaging Detect */}
              <div>
                <h2 id="what-can-thermal-detect" className="text-2xl md:text-3xl font-bold text-teal mb-4 scroll-mt-32">
                  What Can <span className="text-gold">Thermal Imaging</span> Detect?
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed mb-4">
                  Radiometric thermal cameras reveal issues invisible to conventional methods. Temperature anomalies indicate underlying problems long before they become visible:
                </p>
                <ul className="space-y-3 mb-6">
                  {[
                    { title: 'Heat loss & insulation defects', desc: 'Pinpointing missing or moisture-damaged insulation within walls, roofs, and floors' },
                    { title: 'Moisture ingress', desc: 'Detecting damp beneath roof membranes, within cavity walls, and around window reveals' },
                    { title: 'Electrical hotspots', desc: 'Identifying overloaded circuits and deteriorating components in switchgear' },
                    { title: 'Solar panel defects', desc: 'Locating hot cells, bypass diode failures, and string faults reducing output' },
                    { title: 'Air leakage paths', desc: 'Revealing draughts around doors, windows, and service penetrations' },
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-gold mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-text-primary"><strong>{item.title}</strong> – {item.desc}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 id="drone-thermal-imaging-applications" className="text-2xl md:text-3xl font-bold text-teal mb-4 scroll-mt-32">
                  Where is <span className="text-gold">Drone Thermal Imaging</span> Used?
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed mb-6">Drone thermal imaging serves a broad range of industries and applications:</p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-background-alt rounded-xl p-6">
                    <Building2 className="w-8 h-8 text-gold mb-3" strokeWidth={1.5} />
                    <h3 className="font-bold text-teal mb-2">Building Diagnostics</h3>
                    <p className="text-text-secondary text-sm">Energy performance assessments, pre-purchase surveys, and planned maintenance inspections for residential and commercial properties.</p>
                  </div>
                  <div className="bg-background-alt rounded-xl p-6">
                    <Sun className="w-8 h-8 text-gold mb-3" strokeWidth={1.5} />
                    <h3 className="font-bold text-teal mb-2">Solar Panel Inspection</h3>
                    <p className="text-text-secondary text-sm">Cell-level defect detection across rooftop and ground-mounted arrays, identifying hotspots reducing energy generation.</p>
                  </div>
                  <div className="bg-background-alt rounded-xl p-6">
                    <Factory className="w-8 h-8 text-gold mb-3" strokeWidth={1.5} />
                    <h3 className="font-bold text-teal mb-2">Industrial Monitoring</h3>
                    <p className="text-text-secondary text-sm">Equipment condition monitoring, process vessel assessments, and pipeline leak detection across manufacturing and processing sites.</p>
                  </div>
                  <div className="bg-background-alt rounded-xl p-6">
                    <Zap className="w-8 h-8 text-gold mb-3" strokeWidth={1.5} />
                    <h3 className="font-bold text-teal mb-2">Electrical Infrastructure</h3>
                    <p className="text-text-secondary text-sm">Substation inspections, overhead line surveys, and transformer condition monitoring for utility companies and network operators.</p>
                  </div>
                  <div className="bg-background-alt rounded-xl p-6">
                    <ShieldCheck className="w-8 h-8 text-gold mb-3" strokeWidth={1.5} />
                    <h3 className="font-bold text-teal mb-2">Insurance & Claims</h3>
                    <p className="text-text-secondary text-sm">Documenting heat loss, moisture damage, and structural defects for insurance assessments and warranty claims.</p>
                  </div>
                  <div className="bg-background-alt rounded-xl p-6">
                    <Thermometer className="w-8 h-8 text-gold mb-3" strokeWidth={1.5} />
                    <h3 className="font-bold text-teal mb-2">Energy Audits</h3>
                    <p className="text-text-secondary text-sm">Supporting EPC assessments, retrofit planning, and net-zero carbon strategies with quantified thermal performance data.</p>
                  </div>
                </div>

                {/* CTA after applications */}
                <div className="mt-8 text-center">
                  <p className="text-text-secondary mb-4">Have a thermal imaging project in mind?</p>
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

              <div>
                <h2 id="drone-thermal-deliverables" className="text-2xl md:text-3xl font-bold text-teal mb-4 scroll-mt-32">
                  What Deliverables Do You Receive From <span className="text-gold">Drone Thermal Imaging</span>?
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed mb-6">Our standard thermal imaging package includes:</p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-4 bg-background-alt rounded-xl p-4">
                    <div className="w-10 h-10 bg-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Thermometer className="w-5 h-5 text-gold" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h4 className="font-bold text-teal">Radiometric Thermal Imagery</h4>
                      <p className="text-text-secondary text-sm">Calibrated thermal photographs with embedded temperature data for every pixel, enabling precise measurement and analysis.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4 bg-background-alt rounded-xl p-4">
                    <div className="w-10 h-10 bg-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-teal">Annotated Defect Report</h4>
                      <p className="text-text-secondary text-sm">Professional PDF with thermal anomalies highlighted, categorised by severity, with corresponding visual photography for context.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4 bg-background-alt rounded-xl p-4">
                    <div className="w-10 h-10 bg-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-teal">Side-by-Side Visual Comparison</h4>
                      <p className="text-text-secondary text-sm">Matched thermal and RGB photographs enabling clear correlation between temperature anomalies and visible building features.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4 bg-background-alt rounded-xl p-4">
                    <div className="w-10 h-10 bg-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-teal">Remediation Recommendations</h4>
                      <p className="text-text-secondary text-sm">Practical guidance on addressing identified defects, prioritised by urgency and estimated impact on building performance.</p>
                    </div>
                  </li>
                </ul>

                {/* CTA after deliverables */}
                <div className="mt-6 p-5 bg-gold/10 border border-gold/20 rounded-xl">
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-teal font-semibold text-center sm:text-left">Need specific deliverables for your project?</p>
                    <QuoteButton className="btn btn-primary btn-shimmer whitespace-nowrap">
                      Talk Through Requirements
                    </QuoteButton>
                  </div>
                </div>
              </div>

              <div>
                <h2 id="thermal-survey-timeline" className="text-2xl md:text-3xl font-bold text-teal mb-4 scroll-mt-32">
                  How Long Does a <span className="text-gold">Thermal Survey</span> Take?
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed mb-6">
                  On-site data capture is rapid: 30-45 minutes for residential properties, 1-2 hours for commercial buildings, and up to a full day for large industrial complexes. Surveys are conducted during early morning or evening when temperature differentials are greatest.
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
                        <td className="py-3 px-4 text-text-secondary text-sm hidden md:table-cell">Weather monitoring, optimal timing selection, airspace checks</td>
                      </tr>
                      <tr className="bg-background-alt">
                        <td className="py-3 px-4 text-text-primary font-medium">On-Site Data Capture</td>
                        <td className="py-3 px-4 text-gold font-bold">30 mins - 4 hrs</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden md:table-cell">Camera calibration, flight operations, data validation</td>
                      </tr>
                      <tr className="bg-white">
                        <td className="py-3 px-4 text-text-primary font-medium">Thermal Analysis</td>
                        <td className="py-3 px-4 text-gold font-bold">1-2 days</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden md:table-cell">Image processing, anomaly identification, temperature mapping</td>
                      </tr>
                      <tr className="bg-background-alt">
                        <td className="py-3 px-4 text-text-primary font-medium">Report Compilation</td>
                        <td className="py-3 px-4 text-gold font-bold">1-3 days</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden md:table-cell">Defect annotation, severity rating, recommendations</td>
                      </tr>
                      <tr className="bg-teal/10">
                        <td className="py-3 px-4 text-teal font-bold">Overall (Standard)</td>
                        <td className="py-3 px-4 text-teal font-bold">3-5 working days</td>
                        <td className="py-3 px-4 text-teal text-sm font-medium hidden md:table-cell">From site visit to final report delivery</td>
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
                    <p className="text-teal font-semibold text-sm">Rapid Service Available</p>
                    <p className="text-text-secondary text-sm">Need faster turnaround? Same-day or next-day reports obtainable for time-sensitive projects.</p>
                  </div>
                </div>

                {/* CTA after timeline */}
                <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
                  <QuoteButton className="btn btn-primary btn-shimmer">
                    Schedule Your Survey
                  </QuoteButton>
                  <a href="tel:+441334804554" className="btn btn-outline flex items-center justify-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Chat With Peter
                  </a>
                </div>
              </div>

              <div>
                <h2 id="choose-provider" className="text-2xl md:text-3xl font-bold text-teal mb-4 scroll-mt-32">
                  How Do I Select a <span className="text-gold">Thermal Imaging</span> Provider?
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed mb-4">
                  Not every drone thermal imaging service delivers the same quality. When evaluating providers, examine these essential criteria:
                </p>
                <ul className="space-y-3 mb-6">
                  {[
                    { title: 'CAA certification', desc: 'Valid GVC or legacy PfCO permissions for commercial drone operations' },
                    { title: 'Radiometric cameras', desc: 'Calibrated radiometric thermal cameras, not consumer-grade sensors' },
                    { title: 'Thermography qualifications', desc: 'ITC Level 1 or equivalent certification in infrared thermography' },
                    { title: 'Report quality', desc: 'Request sample reports to assess depth of analysis and recommendations' },
                    { title: 'Insurance coverage', desc: 'Public liability (minimum £1M) and professional indemnity protection' },
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-gold mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-text-primary"><strong>{item.title}</strong> – {item.desc}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-text-secondary text-lg leading-relaxed mb-6">
                  At Hire Drone Pilot, we satisfy every criterion listed above, holding full CAA certification and operating calibrated radiometric thermal cameras across the UK.
                </p>

                {/* CTA after provider section */}
                <div className="bg-teal rounded-xl p-5">
                  <p className="text-white font-semibold mb-3">Ready to work with a specialist thermal imaging provider?</p>
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

              <div>
                <h2 id="best-conditions" className="text-2xl md:text-3xl font-bold text-teal mb-4 scroll-mt-32">
                  Best Conditions for <span className="text-gold">Thermal Surveys</span>
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed mb-4">
                  Optimal results require sufficient temperature differential between the heated interior and external surfaces. We schedule flights during the heating season (October to April) when differences are most pronounced.
                </p>
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-teal/10 border border-teal/20 rounded-xl p-6">
                    <h4 className="font-bold text-teal mb-4">Ideal Conditions</h4>
                    <ul className="space-y-2 text-text-secondary text-sm">
                      <li className="flex justify-between"><span>Time of day</span><span className="font-semibold">Pre-dawn or evening</span></li>
                      <li className="flex justify-between"><span>Wind speed</span><span className="font-semibold">Below 10 mph</span></li>
                      <li className="flex justify-between"><span>Dry for 24+ hours</span><span className="font-semibold">Required</span></li>
                      <li className="flex justify-between"><span>Temp. differential</span><span className="font-semibold">10°C+ indoor/outdoor</span></li>
                    </ul>
                  </div>
                  <div className="bg-background-alt border border-border rounded-xl p-6">
                    <h4 className="font-bold text-teal mb-4">Conditions to Avoid</h4>
                    <ul className="space-y-2 text-text-secondary text-sm">
                      <li className="flex justify-between"><span>Direct sunshine</span><span className="font-semibold text-red-500">Distorts readings</span></li>
                      <li className="flex justify-between"><span>Heavy rain</span><span className="font-semibold text-red-500">Masks anomalies</span></li>
                      <li className="flex justify-between"><span>Strong gusts</span><span className="font-semibold text-red-500">Cools surfaces</span></li>
                      <li className="flex justify-between"><span>Summer midday</span><span className="font-semibold text-red-500">Minimal contrast</span></li>
                    </ul>
                  </div>
                </div>

                {/* Final CTA */}
                <div className="bg-gradient-to-r from-teal to-teal-dark rounded-xl p-6 text-center">
                  <h3 className="text-white font-bold text-xl mb-2">Ready to Reveal What&apos;s Hidden?</h3>
                  <p className="text-white/80 text-sm mb-4">Specialist guidance • Tailored pricing • Avg Response within 5 Mins</p>
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
                  With extensive experience in aerial thermography and building diagnostics, Peter personally oversees every thermal imaging project to ensure accurate, actionable results you can rely on.
                </p>
              </div>

              {/* Table of Contents */}
              <div className="bg-background-alt border border-border rounded-2xl p-6">
                <h3 className="text-teal font-bold text-lg mb-4">
                  Quick Guide: Drone Thermal Imaging Explained
                </h3>
                <nav className="space-y-2">
                  {[
                    { id: 'what-is-drone-thermal-imaging', label: 'What is Drone Thermal Imaging?' },
                    { id: 'drone-thermal-imaging-cost', label: 'How Much Does Thermal Imaging Cost?' },
                    { id: 'drone-vs-handheld-thermal', label: 'Drone vs Handheld Thermal Surveys' },
                    { id: 'what-can-thermal-detect', label: 'What Can Thermal Imaging Detect?' },
                    { id: 'drone-thermal-imaging-applications', label: 'Where is Drone Thermal Imaging Used?' },
                    { id: 'drone-thermal-deliverables', label: 'What Deliverables Do You Receive?' },
                    { id: 'thermal-survey-timeline', label: 'How Long Does a Thermal Survey Take?' },
                    { id: 'choose-provider', label: 'How to Choose a Provider' },
                    { id: 'best-conditions', label: 'Best Conditions for Thermal Surveys' },
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
                  Survey Deliverables
                </h3>
                <ul className="space-y-3">
                  {[
                    'Radiometric thermal imagery',
                    'Annotated defect report',
                    'Side-by-side visual comparison',
                    'Temperature analysis data',
                    'Remediation recommendations',
                    'Executive summary',
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
                  Obtain specialist guidance and tailored pricing.
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
              href="/services/drone-roof-inspection"
              className="bg-white border border-border rounded-xl p-6 hover:border-gold hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-teal font-bold text-lg mb-2">Roof Inspection</h3>
              <p className="text-text-secondary text-sm">
                Comprehensive drone roof assessments with optional thermal add-on for leak and moisture detection.
              </p>
            </Link>
            <Link
              href="/services/drone-facade-survey"
              className="bg-white border border-border rounded-xl p-6 hover:border-gold hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-teal font-bold text-lg mb-2">Facade Survey</h3>
              <p className="text-text-secondary text-sm">
                Detailed building envelope inspections combining visual and thermal analysis of external walls.
              </p>
            </Link>
            <Link
              href="/services/drone-solar-survey"
              className="bg-white border border-border rounded-xl p-6 hover:border-gold hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-teal font-bold text-lg mb-2">Solar Panel Survey</h3>
              <p className="text-text-secondary text-sm">
                Specialist thermal inspection of photovoltaic arrays to maximise energy generation performance.
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
