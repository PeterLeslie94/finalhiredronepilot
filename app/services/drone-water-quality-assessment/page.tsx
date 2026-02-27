import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import QuoteButton from '@/components/QuoteButton';
import Testimonials from '@/components/Testimonials';
import FloatingCTA from '@/components/FloatingCTA';
import EquipmentSection from '@/components/EquipmentSection';
import { ServiceSchema, BreadcrumbSchema } from '@/components/SchemaMarkup';
import { ClientLogoMarqueeInline } from '@/components/ClientLogoMarquee';
import { Droplets, Thermometer, Leaf, ShieldCheck, Clock, PoundSterling, BarChart3, FlaskConical } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Drone Water Quality Assessment | Aerial Water Monitoring UK | Hire Drone Pilot',
  description: 'Professional drone water quality assessment services across the UK. Multispectral and thermal sensors for monitoring turbidity, algal blooms, pollution, and temperature. CAA certified pilots.',
  keywords: 'drone water quality, aerial water monitoring, drone water assessment, algal bloom detection drone, water pollution drone, water quality drone survey uk',
};

export default function DroneWaterQualityAssessmentPage() {
  return (
    <>
      <ServiceSchema
        name="Drone Water Quality Assessment Services"
        description="Professional drone water quality assessment services across the UK. Multispectral and thermal sensors for monitoring turbidity, algal blooms, pollution, and temperature. CAA certified pilots."
        url="https://hiredronepilot.uk/services/drone-water-quality-assessment"
      />
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://hiredronepilot.uk" },
        { name: "Services", url: "https://hiredronepilot.uk/services" },
        { name: "Drone Water Quality Assessment", url: "https://hiredronepilot.uk/services/drone-water-quality-assessment" }
      ]} />

      {/* Hero Section */}
      <section className="relative min-h-[800px] md:min-h-[600px] flex items-start bg-teal -mt-[120px] pt-[120px] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/services/service-drone-survey.avif"
            alt="Drone monitoring water quality over a lake using multispectral sensors in the UK"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-teal-dark via-teal-dark/90 via-40% to-teal-dark/40 z-10" />
        </div>
        <div className="container pt-8 pb-52 lg:pb-40 lg:pt-12 relative z-10">
          <div className="max-w-3xl">
            <p className="text-gold font-semibold uppercase tracking-wider mb-3">
              Specialist Services
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Drone Water Quality Assessment
            </h1>
            <p className="text-white/80 text-lg md:text-xl mb-8">
              Multispectral and thermal drone sensors monitor water quality parameters across lakes, rivers, reservoirs, and coastal waters. Detect algal blooms, pollution events, turbidity patterns, and temperature anomalies rapidly and cost-effectively.
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

              {/* What is Drone Water Quality Assessment */}
              <div>
                <h2 id="what-is-water-quality-assessment" className="text-2xl md:text-3xl font-bold text-teal mb-4 scroll-mt-32">
                  What is <span className="text-gold">Drone Water Quality Assessment</span>?
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed mb-4">
                  Drone water quality assessment employs multispectral, hyperspectral, and thermal sensors mounted on professional UAVs to analyse water body conditions from above. These sensors detect spectral signatures associated with chlorophyll concentrations, suspended sediment, dissolved organic matter, surface temperature variations, and other indicators of water quality.
                </p>
                <p className="text-text-secondary text-lg leading-relaxed">
                  At Hire Drone Pilot, we deploy calibrated sensor platforms capable of mapping water quality parameters across entire water bodies in a single flight. This provides spatial coverage impossible to achieve with traditional point-sampling methods, revealing patterns of contamination, algal growth, and thermal stratification that discrete water samples would miss entirely.
                </p>

                {/* Conversion CTA Box */}
                <div className="mt-8 bg-teal rounded-2xl p-6 md:p-8 overflow-hidden">
                  <div className="flex flex-col md:flex-row md:items-start gap-6 mb-6 pb-6 border-b border-white/10">
                    <div className="flex items-start gap-4">
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
                          &quot;Have questions about water quality monitoring? Ring me directly - I&apos;m happy to discuss your project requirements.&quot;
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
                    <div className="md:ml-auto md:text-right">
                      <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight">
                        Monitor Water Health,
                        <span className="text-gold block relative inline-block">
                          From Above
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
                    <div>
                      <h3 className="text-gold font-bold text-sm uppercase tracking-wider mb-3">
                        What You&apos;ll Receive
                      </h3>
                      <ul className="space-y-2.5">
                        {[
                          'Water quality parameter maps',
                          'Algal bloom distribution data',
                          'Thermal surface mapping',
                          'Monitoring recommendations',
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

                    <div>
                      <h3 className="text-gold font-bold text-sm uppercase tracking-wider mb-3">
                        Why Use HireDronePilot
                      </h3>
                      <ul className="space-y-2.5">
                        {[
                          'CAA certified & comprehensively insured',
                          'Calibrated multispectral sensors',
                          'Full spatial coverage',
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
                        <span>Relied upon by water companies, environmental consultants & regulatory bodies throughout the UK.</span>
                      </p>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-white/10">
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
                        Request Assessment Quote
                      </QuoteButton>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t border-white/10">
                    <p className="text-white/50 text-xs uppercase tracking-wider text-center mb-4">Relied upon by major organisations</p>
                    <ClientLogoMarqueeInline />
                  </div>
                </div>
              </div>

              {/* How Much Does It Cost */}
              <div>
                <h2 id="water-quality-cost" className="text-2xl md:text-3xl font-bold text-teal mb-4 scroll-mt-32">
                  How Much Does <span className="text-gold">Drone Water Quality Assessment</span> Cost?
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed mb-6">
                  Water quality assessment pricing depends on the scope, sensor requirements, and whether the project involves a one-off survey or ongoing monitoring programme:
                </p>

                <div className="rounded-xl overflow-hidden border border-border mb-6">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-teal">
                        <th className="text-left text-white font-semibold py-3 px-4">Assessment Type</th>
                        <th className="text-left text-white font-semibold py-3 px-4">Guide Price</th>
                        <th className="text-left text-white font-semibold py-3 px-4 hidden md:table-cell">Typical Scope</th>
                        <th className="text-left text-white font-semibold py-3 px-4 hidden lg:table-cell">Deliverables</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-white">
                        <td className="py-3 px-4 text-text-primary font-medium">Single Water Body<span className="block text-sm text-text-secondary font-normal">One-off assessment</span></td>
                        <td className="py-3 px-4 text-gold font-bold">£600+</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden md:table-cell">Lakes, ponds, reservoirs, river reaches</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden lg:table-cell">Parameter maps, basic report</td>
                      </tr>
                      <tr className="bg-background-alt">
                        <td className="py-3 px-4 text-text-primary font-medium">Multi-Site Survey<span className="block text-sm text-text-secondary font-normal">Multiple locations</span></td>
                        <td className="py-3 px-4 text-gold font-bold">£1,200+</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden md:table-cell">Catchment-wide, multiple water bodies</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden lg:table-cell">Full assessment package</td>
                      </tr>
                      <tr className="bg-white">
                        <td className="py-3 px-4 text-text-primary font-medium">Monitoring Programme<span className="block text-sm text-text-secondary font-normal">Quarterly visits</span></td>
                        <td className="py-3 px-4 text-gold font-bold">£3,000/yr+</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden md:table-cell">Seasonal tracking, trend analysis</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden lg:table-cell">Quarterly reports, annual summary</td>
                      </tr>
                      <tr className="bg-background-alt">
                        <td className="py-3 px-4 text-text-primary font-medium">Incident Response<span className="block text-sm text-text-secondary font-normal">Emergency survey</span></td>
                        <td className="py-3 px-4 text-gold font-bold">POA</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden md:table-cell">Pollution events, algal bloom outbreaks</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden lg:table-cell">Rapid assessment report</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-text-secondary text-sm mb-6 italic">
                  *Guide prices encompass standard deliverables. Final quotation depends on water body size, sensor requirements, and monitoring frequency.
                </p>

                <h3 className="font-bold text-teal mb-3">Factors Influencing Your Quote</h3>
                <ul className="grid grid-cols-2 gap-2 mb-6">
                  {['Water body size & count', 'Sensor type required', 'Monitoring frequency', 'Laboratory validation needs'].map((factor, index) => (
                    <li key={index} className="flex items-center gap-2 text-text-secondary">
                      <svg className="w-4 h-4 text-gold flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm">{factor}</span>
                    </li>
                  ))}
                </ul>

                <p className="text-text-secondary leading-relaxed mb-6">
                  A single drone flight captures water quality data across an entire water body surface, providing <span className="text-gold font-semibold">thousands of measurement points</span> compared to the handful of discrete samples achievable by traditional methods in the same timeframe.
                </p>

                <div className="bg-teal rounded-xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-center sm:text-left">
                    <p className="text-white font-semibold">Ready for a water quality assessment quotation?</p>
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

              {/* Drone vs Traditional Water Sampling */}
              <div>
                <h2 id="drone-vs-traditional-sampling" className="text-2xl md:text-3xl font-bold text-teal mb-4 scroll-mt-32">
                  How Does <span className="text-gold">Drone Assessment</span> Compare to Traditional Sampling?
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed mb-4">
                  Traditional water quality monitoring relies on manual collection of water samples at fixed points, typically from the bank or a boat. These samples are transported to laboratories for analysis. Whilst this provides precise measurements at specific locations, it captures only a snapshot at a handful of points and misses the spatial distribution of water quality across the wider water body.
                </p>
                <p className="text-text-secondary text-lg leading-relaxed mb-4">
                  Drone-based assessment maps water quality indicators across the entire water surface simultaneously. This reveals spatial patterns, identifies pollution sources, tracks plume movements, and documents algal bloom extent in ways that point sampling simply cannot achieve.
                </p>
                <div className="mt-8">
                  <h3 className="text-center font-bold text-teal text-xl mb-6">Why Select Drone Over Traditional Sampling?</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="relative bg-teal rounded-2xl p-6 overflow-hidden group hover:shadow-xl transition-shadow duration-300">
                      <div className="relative z-10">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-12 h-12 bg-gold/20 rounded-xl flex items-center justify-center">
                            <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                          </div>
                          <div>
                            <h4 className="text-white font-bold text-lg">Drone Assessment</h4>
                            <p className="text-gold text-sm font-medium">Full spatial coverage</p>
                          </div>
                        </div>
                        <div className="space-y-3">
                          {[
                            { Icon: Clock, text: 'Entire water body in one flight' },
                            { Icon: ShieldCheck, text: 'No water access needed' },
                            { Icon: PoundSterling, text: 'Lower cost per data point' },
                            { Icon: BarChart3, text: 'Spatial distribution mapping' },
                          ].map((item, i) => (
                            <div key={i} className="flex items-center gap-3 bg-white/10 rounded-lg px-4 py-2.5">
                              <item.Icon className="w-5 h-5 text-gold flex-shrink-0" strokeWidth={1.5} />
                              <span className="text-white/90 font-medium">{item.text}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="relative bg-white border-2 border-border rounded-2xl p-6 overflow-hidden group hover:border-red-300 hover:shadow-xl transition-all duration-300">
                      <div className="relative z-10">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center">
                            <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                            </svg>
                          </div>
                          <div>
                            <h4 className="text-text-primary font-bold text-lg">Traditional Sampling</h4>
                            <p className="text-text-secondary text-sm font-medium">Point measurements only</p>
                          </div>
                        </div>
                        <div className="space-y-3">
                          {[
                            { text: 'Limited to sampling points', negative: true },
                            { text: 'Boat or bank access required', negative: true },
                            { text: 'Laboratory delays for results', negative: true },
                            { text: 'Misses spatial patterns', negative: true },
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

                  <div className="mt-6 text-center">
                    <p className="text-text-secondary text-sm mb-2">Uncertain whether drone assessment suits your monitoring needs?</p>
                    <QuoteButton className="text-gold font-semibold hover:underline inline-flex items-center gap-1">
                      Obtain specialist guidance
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </QuoteButton>
                  </div>
                </div>
              </div>

              {/* What Parameters Can Be Measured */}
              <div>
                <h2 id="measurable-parameters" className="text-2xl md:text-3xl font-bold text-teal mb-4 scroll-mt-32">
                  What Parameters Can Be <span className="text-gold">Measured</span>?
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed mb-4">
                  Drone-mounted sensors detect water quality indicators through their spectral and thermal signatures. The range of measurable parameters is expanding as sensor technology advances:
                </p>
                <ul className="space-y-3 mb-6">
                  {[
                    { title: 'Chlorophyll-a concentration', desc: 'Quantifying algal biomass and mapping the spatial extent and intensity of algal blooms across the water surface' },
                    { title: 'Turbidity & suspended solids', desc: 'Measuring water clarity and sediment load to identify erosion sources, discharge impacts, and mixing zones' },
                    { title: 'Surface temperature', desc: 'Mapping thermal patterns to detect effluent discharges, cooling water plumes, and stratification boundaries' },
                    { title: 'Cyanobacteria detection', desc: 'Identifying potentially toxic blue-green algae concentrations for public health risk assessment' },
                    { title: 'Dissolved organic matter', desc: 'Detecting coloured dissolved organic matter indicating peat runoff, sewage inputs, or agricultural pollution' },
                    { title: 'Oil and hydrocarbon sheens', desc: 'Identifying surface contamination from spills, leaks, or diffuse pollution sources' },
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-gold mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-text-primary"><strong>{item.title}</strong> – {item.desc}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-4 flex items-start gap-3 bg-gold/10 border border-gold/30 rounded-lg p-4">
                  <FlaskConical className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                  <div>
                    <p className="text-teal font-semibold text-sm">Laboratory Validation Available</p>
                    <p className="text-text-secondary text-sm">We can coordinate ground-truth water sampling alongside drone flights to calibrate and validate remote sensing data.</p>
                  </div>
                </div>
              </div>

              {/* Where Are Drone Water Assessments Used */}
              <div>
                <h2 id="water-assessment-applications" className="text-2xl md:text-3xl font-bold text-teal mb-4 scroll-mt-32">
                  Where Are <span className="text-gold">Drone Water Assessments</span> Used?
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed mb-6">
                  Drone water quality assessment serves <Link href="/services/drone-environmental-survey" className="text-gold hover:underline">environmental management</Link>, regulatory compliance, and operational monitoring across diverse sectors:
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-background-alt rounded-xl p-6">
                    <Droplets className="w-8 h-8 text-gold mb-3" strokeWidth={1.5} />
                    <h3 className="font-bold text-teal mb-2">Water Supply Management</h3>
                    <p className="text-text-secondary text-sm">Monitoring drinking water reservoirs for algal blooms, turbidity events, and contamination risks affecting treatment processes.</p>
                  </div>
                  <div className="bg-background-alt rounded-xl p-6">
                    <Leaf className="w-8 h-8 text-gold mb-3" strokeWidth={1.5} />
                    <h3 className="font-bold text-teal mb-2">Environmental Regulation</h3>
                    <p className="text-text-secondary text-sm">Supporting Water Framework Directive monitoring, <Link href="/services/drone-coastal-survey" className="text-gold hover:underline">ecological status assessment</Link>, and pollution incident investigation for regulators.</p>
                  </div>
                  <div className="bg-background-alt rounded-xl p-6">
                    <FlaskConical className="w-8 h-8 text-gold mb-3" strokeWidth={1.5} />
                    <h3 className="font-bold text-teal mb-2">Pollution Investigation</h3>
                    <p className="text-text-secondary text-sm">Tracing pollution plumes to their source, documenting contamination extent, and monitoring remediation progress over time.</p>
                  </div>
                  <div className="bg-background-alt rounded-xl p-6">
                    <Thermometer className="w-8 h-8 text-gold mb-3" strokeWidth={1.5} />
                    <h3 className="font-bold text-teal mb-2">Thermal Discharge Monitoring</h3>
                    <p className="text-text-secondary text-sm">Mapping cooling water plumes from power stations and industrial plants to assess environmental impact on receiving waters.</p>
                  </div>
                  <div className="bg-background-alt rounded-xl p-6">
                    <BarChart3 className="w-8 h-8 text-gold mb-3" strokeWidth={1.5} />
                    <h3 className="font-bold text-teal mb-2">Development Planning</h3>
                    <p className="text-text-secondary text-sm">Baseline water quality surveys for Environmental Impact Assessments, <Link href="/services/drone-flood-risk-survey" className="text-gold hover:underline">construction monitoring</Link>, and post-development compliance.</p>
                  </div>
                  <div className="bg-background-alt rounded-xl p-6">
                    <ShieldCheck className="w-8 h-8 text-gold mb-3" strokeWidth={1.5} />
                    <h3 className="font-bold text-teal mb-2">Aquaculture & Fisheries</h3>
                    <p className="text-text-secondary text-sm">Monitoring water conditions at fish farms, stocked fisheries, and <Link href="/services/drone-bathymetric-survey" className="text-gold hover:underline">shellfish waters</Link> to protect stock health and productivity.</p>
                  </div>
                </div>

                <div className="mt-8 text-center">
                  <p className="text-text-secondary mb-4">Have a water quality monitoring requirement?</p>
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

              {/* What Deliverables Do You Receive */}
              <div>
                <h2 id="water-assessment-deliverables" className="text-2xl md:text-3xl font-bold text-teal mb-4 scroll-mt-32">
                  What Deliverables Do You Receive From <span className="text-gold">Water Quality Assessment</span>?
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed mb-6">
                  We tailor outputs to your monitoring objectives, but our standard water quality assessment package includes:
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-4 bg-background-alt rounded-xl p-4">
                    <div className="w-10 h-10 bg-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Droplets className="w-5 h-5 text-gold" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h4 className="font-bold text-teal">Water Quality Parameter Maps</h4>
                      <p className="text-text-secondary text-sm">Colour-coded spatial maps showing the distribution and intensity of measured parameters across the entire water body surface.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4 bg-background-alt rounded-xl p-4">
                    <div className="w-10 h-10 bg-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Thermometer className="w-5 h-5 text-gold" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h4 className="font-bold text-teal">Thermal Surface Map</h4>
                      <p className="text-text-secondary text-sm">Calibrated temperature map showing surface water thermal patterns, discharge plumes, and stratification indicators.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4 bg-background-alt rounded-xl p-4">
                    <div className="w-10 h-10 bg-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-teal">Assessment Report</h4>
                      <p className="text-text-secondary text-sm">Professional report with findings analysis, comparison against environmental standards, trend assessment (for repeat surveys), and management recommendations.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4 bg-background-alt rounded-xl p-4">
                    <div className="w-10 h-10 bg-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <BarChart3 className="w-5 h-5 text-gold" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h4 className="font-bold text-teal">GIS Data Layers</h4>
                      <p className="text-text-secondary text-sm">Georeferenced raster and vector data compatible with QGIS, ArcGIS, and other mapping platforms for integration with existing monitoring programmes.</p>
                    </div>
                  </li>
                </ul>

                <div className="mt-6 p-5 bg-gold/10 border border-gold/20 rounded-xl">
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-teal font-semibold text-center sm:text-left">Need specific deliverables for your monitoring programme?</p>
                    <QuoteButton className="btn btn-primary btn-shimmer whitespace-nowrap">
                      Talk Through Requirements
                    </QuoteButton>
                  </div>
                </div>
              </div>

              {/* How Long Does an Assessment Take */}
              <div>
                <h2 id="assessment-timeline" className="text-2xl md:text-3xl font-bold text-teal mb-4 scroll-mt-32">
                  How Long Does an <span className="text-gold">Assessment</span> Take?
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed mb-6">
                  On-site data capture is rapid. A single water body can typically be surveyed in 1-3 hours depending on size and complexity. Multi-site campaigns require additional mobilisation time. Data processing and analysis require specialist interpretation of the multispectral imagery.
                </p>

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
                        <td className="py-3 px-4 text-text-primary font-medium">Planning & Preparation</td>
                        <td className="py-3 px-4 text-gold font-bold">2-5 days</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden md:table-cell">Site assessment, sensor selection, flight planning</td>
                      </tr>
                      <tr className="bg-background-alt">
                        <td className="py-3 px-4 text-text-primary font-medium">On-Site Data Capture</td>
                        <td className="py-3 px-4 text-gold font-bold">1-4 hours</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden md:table-cell">Sensor calibration, drone flights, ground-truth sampling</td>
                      </tr>
                      <tr className="bg-white">
                        <td className="py-3 px-4 text-text-primary font-medium">Data Processing</td>
                        <td className="py-3 px-4 text-gold font-bold">2-3 days</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden md:table-cell">Radiometric correction, index calculation, mapping</td>
                      </tr>
                      <tr className="bg-background-alt">
                        <td className="py-3 px-4 text-text-primary font-medium">Analysis & Reporting</td>
                        <td className="py-3 px-4 text-gold font-bold">2-4 days</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden md:table-cell">Parameter interpretation, standards comparison, recommendations</td>
                      </tr>
                      <tr className="bg-teal/10">
                        <td className="py-3 px-4 text-teal font-bold">Overall (Standard)</td>
                        <td className="py-3 px-4 text-teal font-bold">5-7 working days</td>
                        <td className="py-3 px-4 text-teal text-sm font-medium hidden md:table-cell">From site visit to final report delivery</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="mt-4 flex items-start gap-3 bg-gold/10 border border-gold/30 rounded-lg p-4">
                  <svg className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <div>
                    <p className="text-teal font-semibold text-sm">Emergency Response Available</p>
                    <p className="text-text-secondary text-sm">Pollution incident? We offer rapid-response deployment and accelerated reporting for time-critical environmental events.</p>
                  </div>
                </div>

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

              {/* How to Choose a Provider */}
              <div>
                <h2 id="choose-provider" className="text-2xl md:text-3xl font-bold text-teal mb-4 scroll-mt-32">
                  How Do I Select a <span className="text-gold">Water Quality Assessment</span> Provider?
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed mb-4">
                  Drone water quality assessment requires specialist sensor equipment and environmental science expertise. When evaluating providers, examine these essential criteria:
                </p>
                <ul className="space-y-3 mb-6">
                  {[
                    { title: 'Multispectral sensor capability', desc: 'Verify they operate calibrated sensors with appropriate spectral bands for your target parameters' },
                    { title: 'Environmental expertise', desc: 'Ensure qualified environmental scientists interpret the data, not just drone operators' },
                    { title: 'CAA certification', desc: 'Confirm valid commercial drone permissions and insurance for operations over water' },
                    { title: 'Calibration and validation', desc: 'Ask about ground-truth sampling procedures and sensor calibration protocols' },
                    { title: 'Monitoring programme experience', desc: 'For ongoing monitoring, request evidence of repeat survey and trend analysis capabilities' },
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-gold mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-text-primary"><strong>{item.title}</strong> – {item.desc}</span>
                    </li>
                  ))}
                </ul>

                <div className="bg-teal rounded-xl p-5">
                  <p className="text-white font-semibold mb-3">Ready to work with a specialist water quality assessment provider?</p>
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

              {/* Benefits of Aerial Water Quality Monitoring */}
              <div>
                <h2 id="aerial-monitoring-benefits" className="text-2xl md:text-3xl font-bold text-teal mb-4 scroll-mt-32">
                  Benefits of <span className="text-gold">Aerial Water Quality Monitoring</span>
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed mb-4">
                  Drone-based water quality monitoring offers transformative advantages over traditional approaches. The combination of spatial coverage, rapid deployment, and repeat survey capability creates a monitoring tool that fundamentally changes how water body health is assessed and managed.
                </p>
                <p className="text-text-secondary text-lg leading-relaxed mb-6">
                  For ongoing monitoring programmes, drone surveys establish comprehensive baselines, track seasonal changes, detect emerging problems early, and document the effectiveness of management interventions with quantified spatial data rather than isolated point measurements.
                </p>

                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-teal/10 border border-teal/20 rounded-xl p-6">
                    <h4 className="font-bold text-teal mb-4">Key Advantages</h4>
                    <ul className="space-y-2 text-text-secondary text-sm">
                      <li className="flex justify-between"><span>Spatial coverage</span><span className="font-semibold">Entire water body</span></li>
                      <li className="flex justify-between"><span>Data points per survey</span><span className="font-semibold">Thousands</span></li>
                      <li className="flex justify-between"><span>Deployment speed</span><span className="font-semibold">Same day possible</span></li>
                      <li className="flex justify-between"><span>Repeat survey consistency</span><span className="font-semibold">Automated flight paths</span></li>
                    </ul>
                  </div>
                  <div className="bg-background-alt border border-border rounded-xl p-6">
                    <h4 className="font-bold text-teal mb-4">Traditional Limitations Overcome</h4>
                    <ul className="space-y-2 text-text-secondary text-sm">
                      <li className="flex justify-between"><span>Point sampling gaps</span><span className="font-semibold text-green-600">Resolved</span></li>
                      <li className="flex justify-between"><span>Boat access issues</span><span className="font-semibold text-green-600">Eliminated</span></li>
                      <li className="flex justify-between"><span>Laboratory wait times</span><span className="font-semibold text-green-600">Reduced</span></li>
                      <li className="flex justify-between"><span>Spatial pattern blindness</span><span className="font-semibold text-green-600">Resolved</span></li>
                    </ul>
                  </div>
                </div>

                {/* Final CTA */}
                <div className="bg-gradient-to-r from-teal to-teal-dark rounded-xl p-6 text-center">
                  <h3 className="text-white font-bold text-xl mb-2">Ready to Monitor Your Water Bodies?</h3>
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
                  With extensive experience in environmental drone surveys, Peter coordinates every water quality project to ensure accurate sensor data and meaningful interpretation you can rely on.
                </p>
              </div>

              <div className="bg-background-alt border border-border rounded-2xl p-6">
                <h3 className="text-teal font-bold text-lg mb-4">
                  Quick Guide: Water Quality Assessment
                </h3>
                <nav className="space-y-2">
                  {[
                    { id: 'what-is-water-quality-assessment', label: 'What is Drone Water Quality Assessment?' },
                    { id: 'water-quality-cost', label: 'How Much Does It Cost?' },
                    { id: 'drone-vs-traditional-sampling', label: 'Drone vs Traditional Sampling' },
                    { id: 'measurable-parameters', label: 'What Parameters Can Be Measured?' },
                    { id: 'water-assessment-applications', label: 'Where Are Assessments Used?' },
                    { id: 'water-assessment-deliverables', label: 'What Deliverables Do You Receive?' },
                    { id: 'assessment-timeline', label: 'How Long Does an Assessment Take?' },
                    { id: 'choose-provider', label: 'How to Choose a Provider' },
                    { id: 'aerial-monitoring-benefits', label: 'Benefits of Aerial Monitoring' },
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

              <div className="bg-teal rounded-2xl p-6">
                <h3 className="text-gold font-bold text-lg mb-4 uppercase tracking-wide">
                  Assessment Deliverables
                </h3>
                <ul className="space-y-3">
                  {[
                    'Water quality parameter maps',
                    'Thermal surface mapping',
                    'Algal bloom distribution data',
                    'Assessment report',
                    'GIS data layers',
                    'Monitoring recommendations',
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

              <div className="bg-teal rounded-2xl p-6 sticky top-32">
                <h3 className="text-white font-bold text-lg mb-2">
                  Talk Through Your Project
                </h3>
                <p className="text-white/70 text-sm mb-4">
                  Obtain specialist guidance and tailored pricing.
                </p>
                <form name="sidebar-quote" method="POST" className="space-y-3">
                  <input type="hidden" name="form-name" value="sidebar-quote" />
                  <input type="text" name="name" placeholder="Your Name" required className="w-full px-4 py-2.5 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 text-sm focus:outline-none focus:border-gold" />
                  <input type="email" name="email" placeholder="Email Address" required className="w-full px-4 py-2.5 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 text-sm focus:outline-none focus:border-gold" />
                  <input type="tel" name="phone" placeholder="Phone Number" className="w-full px-4 py-2.5 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 text-sm focus:outline-none focus:border-gold" />
                  <textarea name="message" placeholder="Brief project details..." rows={3} className="w-full px-4 py-2.5 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 text-sm focus:outline-none focus:border-gold resize-none" />
                  <button type="submit" className="btn btn-primary btn-shimmer w-full">
                    Compare Quotes
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div id="equipment-trigger">
        <EquipmentSection />
      </div>

      <Testimonials />

      <section className="py-16 bg-background-alt">
        <div className="container">
          <h2 className="text-2xl font-bold text-teal mb-8 text-center">
            Complementary Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link
              href="/services/drone-sonar-survey"
              className="bg-white border border-border rounded-xl p-6 hover:border-gold hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-teal font-bold text-lg mb-2">Sonar Survey</h3>
              <p className="text-text-secondary text-sm">
                Drone-deployed sonar for underwater mapping, bathymetric profiling, and submerged object detection.
              </p>
            </Link>
            <Link
              href="/services/drone-environmental-survey"
              className="bg-white border border-border rounded-xl p-6 hover:border-gold hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-teal font-bold text-lg mb-2">Environmental Survey</h3>
              <p className="text-text-secondary text-sm">
                Comprehensive environmental monitoring and habitat mapping using specialist drone sensors.
              </p>
            </Link>
            <Link
              href="/services/drone-coastal-survey"
              className="bg-white border border-border rounded-xl p-6 hover:border-gold hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-teal font-bold text-lg mb-2">Coastal Survey</h3>
              <p className="text-text-secondary text-sm">
                Shoreline mapping, erosion monitoring, and coastal change analysis using drone photogrammetry.
              </p>
            </Link>
          </div>
        </div>
      </section>

      <FloatingCTA />
    </>
  );
}
