import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import QuoteButton from '@/components/QuoteButton';
import Testimonials from '@/components/Testimonials';
import FloatingCTA from '@/components/FloatingCTA';
import EquipmentSection from '@/components/EquipmentSection';
import { ServiceSchema, BreadcrumbSchema } from '@/components/SchemaMarkup';
import { ClientLogoMarqueeInline } from '@/components/ClientLogoMarquee';
import { Radio, Layers, MapPin, ShieldCheck, Clock, PoundSterling, Search, Building2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Drone Ground Penetrating Radar | UAV GPR Surveys UK | Hire Drone Pilot',
  description: 'Professional drone ground penetrating radar services across the UK. UAV-mounted GPR for subsurface detection of utilities, voids, geological layers and archaeology. CAA certified pilots.',
  keywords: 'drone ground penetrating radar, uav gpr survey, drone subsurface survey, underground utility detection drone, drone archaeology survey, gpr drone uk',
};

export default function DroneGroundPenetratingRadarPage() {
  return (
    <>
      <ServiceSchema
        name="Drone Ground Penetrating Radar Services"
        description="Professional drone ground penetrating radar services across the UK. UAV-mounted GPR for subsurface detection of utilities, voids, geological layers and archaeology. CAA certified pilots."
        url="https://hiredronepilot.uk/services/drone-ground-penetrating-radar"
      />
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://hiredronepilot.uk" },
        { name: "Services", url: "https://hiredronepilot.uk/services" },
        { name: "Drone Ground Penetrating Radar", url: "https://hiredronepilot.uk/services/drone-ground-penetrating-radar" }
      ]} />

      {/* Hero Section */}
      <section className="relative min-h-[800px] md:min-h-[600px] flex items-start bg-teal -mt-[120px] pt-[120px] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/services/service-drone-survey.avif"
            alt="Drone equipped with ground penetrating radar flying over survey site in the UK"
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
              Drone Ground Penetrating Radar
            </h1>
            <p className="text-white/80 text-lg md:text-xl mb-8">
              UAV-mounted GPR technology reveals what lies beneath the surface without excavation. Detect buried utilities, voids, geological layers, and archaeological features across large areas rapidly and non-invasively.
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

              {/* What is Drone Ground Penetrating Radar */}
              <div>
                <h2 id="what-is-drone-gpr" className="text-2xl md:text-3xl font-bold text-teal mb-4 scroll-mt-32">
                  What is <span className="text-gold">Drone Ground Penetrating Radar</span>?
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed mb-4">
                  Drone ground penetrating radar (GPR) combines unmanned aerial vehicle technology with subsurface radar sensors to map what lies beneath the ground surface. The UAV-mounted GPR antenna transmits electromagnetic pulses into the ground and records the reflected signals, building a detailed cross-sectional profile of <Link href="/services/drone-lidar-mapping" className="text-gold hover:underline">subsurface features</Link>.
                </p>
                <p className="text-text-secondary text-lg leading-relaxed">
                  At Hire Drone Pilot, we deploy drone GPR systems capable of detecting <Link href="/services/drone-utility-survey" className="text-gold hover:underline">buried utilities</Link>, underground voids, geological stratification, <Link href="/services/drone-archaeological-survey" className="text-gold hover:underline">archaeological remains</Link>, and structural anomalies. This non-invasive approach covers significantly larger areas than traditional hand-pushed GPR trolleys, making it ideal for extensive <Link href="/services/drone-site-survey" className="text-gold hover:underline">site investigations</Link> and preliminary ground assessments.
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
                          &quot;Have questions about GPR surveys? Ring me directly - I&apos;m happy to discuss your project requirements.&quot;
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
                        See Below the Surface,
                        <span className="text-gold block relative inline-block">
                          Without Digging
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
                          'Subsurface profile mapping',
                          'Utility detection report',
                          'Georeferenced data layers',
                          'Interpretation & recommendations',
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
                        Delivered in 5-10 working days
                      </p>
                    </div>

                    <div>
                      <h3 className="text-gold font-bold text-sm uppercase tracking-wider mb-3">
                        Why Use HireDronePilot
                      </h3>
                      <ul className="space-y-2.5">
                        {[
                          'CAA certified & comprehensively insured',
                          'Specialist GPR interpretation',
                          'Large area coverage in hours',
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
                        <span>Relied upon by civil engineers, archaeologists & utility companies throughout the UK.</span>
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
                        Request GPR Survey Quote
                      </QuoteButton>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t border-white/10">
                    <p className="text-white/50 text-xs uppercase tracking-wider text-center mb-4">Relied upon by major organisations</p>
                    <ClientLogoMarqueeInline />
                  </div>
                </div>
              </div>

              {/* How Much Does Drone GPR Cost */}
              <div>
                <h2 id="drone-gpr-cost" className="text-2xl md:text-3xl font-bold text-teal mb-4 scroll-mt-32">
                  How Much Does <span className="text-gold">Drone GPR</span> Cost?
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed mb-6">
                  Drone GPR pricing depends principally on the survey area, required resolution, and depth of investigation. Below is a guide to assist with budgeting:
                </p>

                <div className="rounded-xl overflow-hidden border border-border mb-6">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-teal">
                        <th className="text-left text-white font-semibold py-3 px-4">Survey Scale</th>
                        <th className="text-left text-white font-semibold py-3 px-4">Guide Price</th>
                        <th className="text-left text-white font-semibold py-3 px-4 hidden md:table-cell">Typical Scope</th>
                        <th className="text-left text-white font-semibold py-3 px-4 hidden lg:table-cell">Deliverables</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-white">
                        <td className="py-3 px-4 text-text-primary font-medium">Small Area<span className="block text-sm text-text-secondary font-normal">Up to 0.5 hectares</span></td>
                        <td className="py-3 px-4 text-gold font-bold">£800+</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden md:table-cell">Building plots, garden sites, small fields</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden lg:table-cell">GPR profiles, basic report</td>
                      </tr>
                      <tr className="bg-background-alt">
                        <td className="py-3 px-4 text-text-primary font-medium">Medium Area<span className="block text-sm text-text-secondary font-normal">0.5-2 hectares</span></td>
                        <td className="py-3 px-4 text-gold font-bold">£1,500+</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden md:table-cell">Development sites, road corridors, farmland</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden lg:table-cell">Full interpretation report</td>
                      </tr>
                      <tr className="bg-white">
                        <td className="py-3 px-4 text-text-primary font-medium">Large Area<span className="block text-sm text-text-secondary font-normal">2+ hectares</span></td>
                        <td className="py-3 px-4 text-gold font-bold">£2,500+</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden md:table-cell">Large development sites, pipeline routes</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden lg:table-cell">Comprehensive GPR package</td>
                      </tr>
                      <tr className="bg-background-alt">
                        <td className="py-3 px-4 text-text-primary font-medium">Linear Corridor<span className="block text-sm text-text-secondary font-normal">Routes & pipelines</span></td>
                        <td className="py-3 px-4 text-gold font-bold">POA</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden md:table-cell">Road schemes, pipeline easements</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden lg:table-cell">Custom scope & reporting</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-text-secondary text-sm mb-6 italic">
                  *Guide prices encompass standard deliverables. Final quotation depends on terrain conditions, required resolution, and target depth.
                </p>

                <h3 className="font-bold text-teal mb-3">Factors Influencing Your Quote</h3>
                <ul className="grid grid-cols-2 gap-2 mb-6">
                  {['Survey area & terrain type', 'Required investigation depth', 'Line spacing & resolution', 'Ground conditions & access'].map((factor, index) => (
                    <li key={index} className="flex items-center gap-2 text-text-secondary">
                      <svg className="w-4 h-4 text-gold flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm">{factor}</span>
                    </li>
                  ))}
                </ul>

                <p className="text-text-secondary leading-relaxed mb-6">
                  Drone-mounted GPR covers ground <span className="text-gold font-semibold">5-10 times faster</span> than traditional hand-pushed systems, dramatically reducing survey costs for larger sites whilst maintaining comparable data quality.
                </p>

                <div className="bg-teal rounded-xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-center sm:text-left">
                    <p className="text-white font-semibold">Ready for a GPR survey quotation?</p>
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

              {/* Drone vs Ground-Based GPR */}
              <div>
                <h2 id="drone-vs-ground-gpr" className="text-2xl md:text-3xl font-bold text-teal mb-4 scroll-mt-32">
                  How Does <span className="text-gold">Drone GPR</span> Compare to Ground-Based Methods?
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed mb-4">
                  Traditional ground-based GPR requires an operator to physically push or tow the antenna across the survey area at walking pace. This works well for small sites but becomes prohibitively slow and expensive for larger areas. Rough, waterlogged, or contaminated terrain can make ground-based surveys impractical or impossible.
                </p>
                <p className="text-text-secondary text-lg leading-relaxed mb-4">
                  Drone-mounted GPR flies the antenna at low altitude, covering vast areas rapidly regardless of ground conditions. The aerial platform maintains consistent survey speed, line spacing, and antenna height, producing more uniform data quality across the entire site.
                </p>
                <div className="mt-8">
                  <h3 className="text-center font-bold text-teal text-xl mb-6">Why Select Drone Over Ground-Based?</h3>
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
                            <h4 className="text-white font-bold text-lg">Drone GPR Survey</h4>
                            <p className="text-gold text-sm font-medium">Rapid, terrain-independent</p>
                          </div>
                        </div>
                        <div className="space-y-3">
                          {[
                            { Icon: Clock, text: '5-10x faster area coverage' },
                            { Icon: ShieldCheck, text: 'Works on any terrain' },
                            { Icon: PoundSterling, text: 'Lower cost per hectare' },
                            { Icon: Radio, text: 'Consistent data quality' },
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
                            <h4 className="text-text-primary font-bold text-lg">Ground-Based GPR</h4>
                            <p className="text-text-secondary text-sm font-medium">Walking pace, terrain-dependent</p>
                          </div>
                        </div>
                        <div className="space-y-3">
                          {[
                            { text: 'Walking pace only', negative: true },
                            { text: 'Unsuitable for rough terrain', negative: true },
                            { text: 'High cost for large sites', negative: true },
                            { text: 'Variable antenna coupling', negative: true },
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
                    <p className="text-text-secondary text-sm mb-2">Uncertain whether drone GPR suits your site?</p>
                    <QuoteButton className="text-gold font-semibold hover:underline inline-flex items-center gap-1">
                      Obtain specialist guidance
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </QuoteButton>
                  </div>
                </div>
              </div>

              {/* How Deep Can Drone GPR Detect */}
              <div>
                <h2 id="gpr-detection-depth" className="text-2xl md:text-3xl font-bold text-teal mb-4 scroll-mt-32">
                  How Deep Can <span className="text-gold">Drone GPR</span> Detect?
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed mb-4">
                  Detection depth depends on several factors including antenna frequency, soil conditions, and the nature of the subsurface targets. In favourable conditions such as dry sandy or gravelly soils, drone GPR can penetrate to depths of 6-10 metres. In clay-rich or waterlogged ground, effective depth may be limited to 1-3 metres.
                </p>
                <p className="text-text-secondary text-lg leading-relaxed mb-4">
                  Lower frequency antennas achieve greater depth but with reduced resolution, whilst higher frequency antennas provide finer detail at shallower depths. We select the optimal antenna configuration for your specific investigation objectives and ground conditions.
                </p>

                <div className="mt-4 flex items-start gap-3 bg-gold/10 border border-gold/30 rounded-lg p-4">
                  <Radio className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                  <div>
                    <p className="text-teal font-semibold text-sm">Depth vs Resolution Trade-off</p>
                    <p className="text-text-secondary text-sm">We will advise on the best antenna frequency for your targets and ground conditions during the planning stage.</p>
                  </div>
                </div>
              </div>

              {/* Where is Drone GPR Used */}
              <div>
                <h2 id="drone-gpr-applications" className="text-2xl md:text-3xl font-bold text-teal mb-4 scroll-mt-32">
                  Where is <span className="text-gold">Drone GPR</span> Used?
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed mb-6">
                  Drone ground penetrating radar serves diverse industries and applications where non-invasive subsurface information is essential:
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-background-alt rounded-xl p-6">
                    <Building2 className="w-8 h-8 text-gold mb-3" strokeWidth={1.5} />
                    <h3 className="font-bold text-teal mb-2">Construction & Development</h3>
                    <p className="text-text-secondary text-sm">Pre-construction ground investigations, foundation design support, and buried obstruction detection before earthworks commence.</p>
                  </div>
                  <div className="bg-background-alt rounded-xl p-6">
                    <MapPin className="w-8 h-8 text-gold mb-3" strokeWidth={1.5} />
                    <h3 className="font-bold text-teal mb-2">Utility Detection</h3>
                    <p className="text-text-secondary text-sm">Locating buried pipes, cables, and drainage systems across large development sites prior to excavation works.</p>
                  </div>
                  <div className="bg-background-alt rounded-xl p-6">
                    <Search className="w-8 h-8 text-gold mb-3" strokeWidth={1.5} />
                    <h3 className="font-bold text-teal mb-2">Archaeological Investigation</h3>
                    <p className="text-text-secondary text-sm">Non-invasive detection of buried structures, ditches, foundations, and features prior to development or research excavation.</p>
                  </div>
                  <div className="bg-background-alt rounded-xl p-6">
                    <Layers className="w-8 h-8 text-gold mb-3" strokeWidth={1.5} />
                    <h3 className="font-bold text-teal mb-2">Geological Assessment</h3>
                    <p className="text-text-secondary text-sm">Mapping soil stratification, bedrock depth, peat boundaries, and geological anomalies for engineering and environmental projects.</p>
                  </div>
                  <div className="bg-background-alt rounded-xl p-6">
                    <ShieldCheck className="w-8 h-8 text-gold mb-3" strokeWidth={1.5} />
                    <h3 className="font-bold text-teal mb-2">Void & Cavity Detection</h3>
                    <p className="text-text-secondary text-sm">Identifying sinkholes, mine workings, tunnels, and subsurface voids that pose stability risks to structures and infrastructure.</p>
                  </div>
                  <div className="bg-background-alt rounded-xl p-6">
                    <Radio className="w-8 h-8 text-gold mb-3" strokeWidth={1.5} />
                    <h3 className="font-bold text-teal mb-2">Environmental Surveys</h3>
                    <p className="text-text-secondary text-sm">Mapping contamination plumes, landfill boundaries, buried waste deposits, and groundwater table positions.</p>
                  </div>
                </div>

                <div className="mt-8 text-center">
                  <p className="text-text-secondary mb-4">Have a subsurface investigation requirement?</p>
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
                <h2 id="drone-gpr-deliverables" className="text-2xl md:text-3xl font-bold text-teal mb-4 scroll-mt-32">
                  What Deliverables Do You Receive From <span className="text-gold">Drone GPR</span>?
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed mb-6">
                  We tailor outputs to your project requirements, but our standard GPR survey package includes:
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-4 bg-background-alt rounded-xl p-4">
                    <div className="w-10 h-10 bg-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Radio className="w-5 h-5 text-gold" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h4 className="font-bold text-teal">GPR Profile Data</h4>
                      <p className="text-text-secondary text-sm">Processed radar cross-sections (radargrams) showing subsurface features, layer boundaries, and anomalies along each survey line.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4 bg-background-alt rounded-xl p-4">
                    <div className="w-10 h-10 bg-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Layers className="w-5 h-5 text-gold" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h4 className="font-bold text-teal">Depth Slice Maps</h4>
                      <p className="text-text-secondary text-sm">Horizontal plan views at specified depths showing the spatial distribution of subsurface features across the survey area.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4 bg-background-alt rounded-xl p-4">
                    <div className="w-10 h-10 bg-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-teal">Interpretation Report</h4>
                      <p className="text-text-secondary text-sm">Professional report with annotated findings, feature identification, depth estimates, and recommendations for further investigation where appropriate.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4 bg-background-alt rounded-xl p-4">
                    <div className="w-10 h-10 bg-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-gold" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h4 className="font-bold text-teal">Georeferenced Data</h4>
                      <p className="text-text-secondary text-sm">All survey data tied to precise GPS coordinates, enabling integration with CAD drawings, GIS systems, and site plans.</p>
                    </div>
                  </li>
                </ul>

                <div className="mt-6 p-5 bg-gold/10 border border-gold/20 rounded-xl">
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-teal font-semibold text-center sm:text-left">Need specific deliverables for your project?</p>
                    <QuoteButton className="btn btn-primary btn-shimmer whitespace-nowrap">
                      Talk Through Requirements
                    </QuoteButton>
                  </div>
                </div>
              </div>

              {/* How Long Does a GPR Survey Take */}
              <div>
                <h2 id="gpr-survey-timeline" className="text-2xl md:text-3xl font-bold text-teal mb-4 scroll-mt-32">
                  How Long Does a <span className="text-gold">GPR Survey</span> Take?
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed mb-4">
                  On-site data capture with drone GPR is significantly faster than ground-based alternatives. A 0.5-hectare site can typically be surveyed in 2-3 hours. Larger sites of 2+ hectares may require a full day. Linear corridor surveys along pipeline or road routes proceed at approximately 1-2 kilometres per hour.
                </p>
                <p className="text-text-secondary text-lg leading-relaxed mb-6">
                  Data processing and interpretation require the most time, as specialist geophysicists analyse the radar profiles to identify and classify subsurface features. We provide clear timelines during the quotation process.
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
                        <td className="py-3 px-4 text-text-secondary text-sm hidden md:table-cell">Site assessment, flight planning, antenna selection</td>
                      </tr>
                      <tr className="bg-background-alt">
                        <td className="py-3 px-4 text-text-primary font-medium">On-Site Data Capture</td>
                        <td className="py-3 px-4 text-gold font-bold">2 hrs - 2 days</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden md:table-cell">Equipment setup, drone flights, data validation</td>
                      </tr>
                      <tr className="bg-white">
                        <td className="py-3 px-4 text-text-primary font-medium">Data Processing</td>
                        <td className="py-3 px-4 text-gold font-bold">2-5 days</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden md:table-cell">Signal processing, migration, depth calibration</td>
                      </tr>
                      <tr className="bg-background-alt">
                        <td className="py-3 px-4 text-text-primary font-medium">Interpretation & Reporting</td>
                        <td className="py-3 px-4 text-gold font-bold">3-5 days</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden md:table-cell">Feature identification, mapping, report compilation</td>
                      </tr>
                      <tr className="bg-teal/10">
                        <td className="py-3 px-4 text-teal font-bold">Overall (Standard)</td>
                        <td className="py-3 px-4 text-teal font-bold">5-10 working days</td>
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
                    <p className="text-teal font-semibold text-sm">Expedited Service Available</p>
                    <p className="text-text-secondary text-sm">Urgent project? Accelerated processing and reporting available for time-critical ground investigations.</p>
                  </div>
                </div>

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

              {/* How to Choose a Provider */}
              <div>
                <h2 id="choose-provider" className="text-2xl md:text-3xl font-bold text-teal mb-4 scroll-mt-32">
                  How Do I Select a <span className="text-gold">Drone GPR</span> Provider?
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed mb-4">
                  Drone GPR surveys require both specialist flying skills and geophysical interpretation expertise. When evaluating providers, examine these essential criteria:
                </p>
                <ul className="space-y-3 mb-6">
                  {[
                    { title: 'Geophysical expertise', desc: 'Ensure qualified geophysicists interpret the data, not just drone pilots capturing raw files' },
                    { title: 'Appropriate GPR equipment', desc: 'Verify they operate drone-rated GPR antennas with suitable frequency range for your targets' },
                    { title: 'CAA certification', desc: 'Confirm valid commercial drone permissions and appropriate insurance for your site environment' },
                    { title: 'Relevant experience', desc: 'Request case studies from similar applications - utility detection, archaeology, or geological mapping' },
                    { title: 'Data deliverables', desc: 'Confirm they provide interpreted results, not just raw radargrams requiring further specialist analysis' },
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
                  <p className="text-white font-semibold mb-3">Ready to work with a specialist GPR survey provider?</p>
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

              {/* What Can GPR Detect Underground */}
              <div>
                <h2 id="what-gpr-detects" className="text-2xl md:text-3xl font-bold text-teal mb-4 scroll-mt-32">
                  What Can <span className="text-gold">GPR Detect</span> Underground?
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed mb-4">
                  Ground penetrating radar detects changes in the dielectric properties of subsurface materials. Any boundary between materials with different electromagnetic characteristics produces a reflected signal. The range of detectable features is extensive:
                </p>
                <ul className="space-y-3 mb-6">
                  {[
                    { title: 'Buried utilities', desc: 'Metal and plastic pipes, cables, ducts, and drainage systems at various depths' },
                    { title: 'Underground voids', desc: 'Sinkholes, mine workings, tunnels, cellars, and natural cavities posing collapse risk' },
                    { title: 'Archaeological remains', desc: 'Foundations, walls, ditches, graves, and other buried structural features' },
                    { title: 'Geological boundaries', desc: 'Soil layer interfaces, bedrock depth, water table position, and peat boundaries' },
                    { title: 'Buried tanks & objects', desc: 'Fuel tanks, drums, concrete structures, and other man-made buried objects' },
                    { title: 'Contamination plumes', desc: 'Changes in soil saturation indicating hydrocarbon or chemical contamination migration' },
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-gold mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-text-primary"><strong>{item.title}</strong> – {item.desc}</span>
                    </li>
                  ))}
                </ul>

                {/* Final CTA */}
                <div className="bg-gradient-to-r from-teal to-teal-dark rounded-xl p-6 text-center">
                  <h3 className="text-white font-bold text-xl mb-2">Ready to See What&apos;s Below?</h3>
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
                  With extensive experience in specialist drone surveys, Peter coordinates every GPR project to ensure thorough subsurface data capture and expert interpretation you can rely on.
                </p>
              </div>

              <div className="bg-background-alt border border-border rounded-2xl p-6">
                <h3 className="text-teal font-bold text-lg mb-4">
                  Quick Guide: Drone GPR Explained
                </h3>
                <nav className="space-y-2">
                  {[
                    { id: 'what-is-drone-gpr', label: 'What is Drone Ground Penetrating Radar?' },
                    { id: 'drone-gpr-cost', label: 'How Much Does Drone GPR Cost?' },
                    { id: 'drone-vs-ground-gpr', label: 'Drone vs Ground-Based GPR' },
                    { id: 'gpr-detection-depth', label: 'How Deep Can Drone GPR Detect?' },
                    { id: 'drone-gpr-applications', label: 'Where is Drone GPR Used?' },
                    { id: 'drone-gpr-deliverables', label: 'What Deliverables Do You Receive?' },
                    { id: 'gpr-survey-timeline', label: 'How Long Does a GPR Survey Take?' },
                    { id: 'choose-provider', label: 'How to Choose a Provider' },
                    { id: 'what-gpr-detects', label: 'What Can GPR Detect Underground?' },
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
                  Survey Deliverables
                </h3>
                <ul className="space-y-3">
                  {[
                    'GPR profile data (radargrams)',
                    'Depth slice maps',
                    'Interpretation report',
                    'Georeferenced data layers',
                    'CAD/GIS compatible files',
                    'Recommendations for further work',
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
              href="/services/drone-land-survey"
              className="bg-white border border-border rounded-xl p-6 hover:border-gold hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-teal font-bold text-lg mb-2">Land Survey</h3>
              <p className="text-text-secondary text-sm">
                Topographic drone surveys providing accurate elevation data and site plans for development projects.
              </p>
            </Link>
            <Link
              href="/services/drone-archaeological-survey"
              className="bg-white border border-border rounded-xl p-6 hover:border-gold hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-teal font-bold text-lg mb-2">Archaeological Survey</h3>
              <p className="text-text-secondary text-sm">
                Aerial archaeological assessments combining photogrammetry, multispectral, and thermal sensors.
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
          </div>
        </div>
      </section>

      <FloatingCTA />
    </>
  );
}
