import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import QuoteButton from '@/components/QuoteButton';
import Testimonials from '@/components/Testimonials';
import FloatingCTA from '@/components/FloatingCTA';
import EquipmentSection from '@/components/EquipmentSection';
import { ServiceSchema, BreadcrumbSchema } from '@/components/SchemaMarkup';
import { ClientLogoMarqueeInline } from '@/components/ClientLogoMarquee';
import { Waves, Anchor, ShieldCheck, Clock, PoundSterling, MapPin, Fish, Layers } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Drone Sonar Survey Services | Underwater Mapping UK | Hire Drone Pilot',
  description: 'Professional drone sonar survey services across the UK. Drone-deployed sonar for underwater mapping, bathymetric profiling, object detection and aquatic infrastructure inspection. CAA certified.',
  keywords: 'drone sonar survey, drone bathymetric survey, underwater mapping drone, sonar drone uk, lake survey drone, reservoir survey drone, river survey drone',
};

export default function DroneSonarSurveyPage() {
  return (
    <>
      <ServiceSchema
        name="Drone Sonar Survey Services"
        description="Professional drone sonar survey services across the UK. Drone-deployed sonar for underwater mapping, bathymetric profiling, object detection and aquatic infrastructure inspection. CAA certified."
        url="https://hiredronepilot.uk/services/drone-sonar-survey"
      />
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://hiredronepilot.uk" },
        { name: "Services", url: "https://hiredronepilot.uk/services" },
        { name: "Drone Sonar Survey", url: "https://hiredronepilot.uk/services/drone-sonar-survey" }
      ]} />

      {/* Hero Section */}
      <section className="relative min-h-[800px] md:min-h-[600px] flex items-start bg-teal -mt-[120px] pt-[120px] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/services/service-drone-survey.avif"
            alt="Drone deploying sonar equipment over a lake for underwater survey in the UK"
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
              Drone Sonar Survey Services
            </h1>
            <p className="text-white/80 text-lg md:text-xl mb-8">
              Drone-deployed sonar technology maps underwater terrain, detects submerged objects, and profiles water body depths without the need for boats or divers. Rapid, safe, and cost-effective aquatic surveying across the UK.
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

              {/* What is a Drone Sonar Survey */}
              <div>
                <h2 id="what-is-drone-sonar" className="text-2xl md:text-3xl font-bold text-teal mb-4 scroll-mt-32">
                  What is a <span className="text-gold">Drone Sonar Survey</span>?
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed mb-4">
                  A drone sonar survey uses an unmanned aerial vehicle to deploy a tethered or droppable sonar transducer into water bodies, capturing detailed bathymetric (depth) data and underwater imagery. The drone positions the sonar module precisely across the water surface following pre-programmed survey lines, building a comprehensive map of the underwater terrain.
                </p>
                <p className="text-text-secondary text-lg leading-relaxed">
                  At Hire Drone Pilot, we deploy single-beam and multi-beam sonar systems carried by heavy-lift drones. This approach eliminates the need for survey boats, launches, and watercraft operators, making it ideal for remote, shallow, or hazardous water bodies where conventional boat-based surveys prove difficult or impossible.
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
                          &quot;Have questions about sonar surveys? Ring me directly - I&apos;m happy to discuss your project requirements.&quot;
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
                        Map What Lies Beneath,
                        <span className="text-gold block relative inline-block">
                          No Boats Required
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
                          'Bathymetric depth mapping',
                          'Underwater contour plans',
                          'Volume calculations',
                          'Condition assessment report',
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
                          'No boat or diver requirements',
                          'Access remote water bodies',
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
                        <span>Relied upon by water companies, environmental consultants & civil engineers throughout the UK.</span>
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
                        Request Sonar Survey Quote
                      </QuoteButton>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t border-white/10">
                    <p className="text-white/50 text-xs uppercase tracking-wider text-center mb-4">Relied upon by major organisations</p>
                    <ClientLogoMarqueeInline />
                  </div>
                </div>
              </div>

              {/* How Much Does a Drone Sonar Survey Cost */}
              <div>
                <h2 id="drone-sonar-cost" className="text-2xl md:text-3xl font-bold text-teal mb-4 scroll-mt-32">
                  How Much Does a <span className="text-gold">Drone Sonar Survey</span> Cost?
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed mb-6">
                  Drone sonar survey pricing reflects the size and complexity of the water body and the level of detail required. Below is a guide to assist with budgeting:
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
                        <td className="py-3 px-4 text-text-primary font-medium">Small Water Body<span className="block text-sm text-text-secondary font-normal">Ponds, small lakes</span></td>
                        <td className="py-3 px-4 text-gold font-bold">£800+</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden md:table-cell">Farm ponds, settling lagoons, small reservoirs</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden lg:table-cell">Depth map, basic report</td>
                      </tr>
                      <tr className="bg-background-alt">
                        <td className="py-3 px-4 text-text-primary font-medium">River / Canal Section<span className="block text-sm text-text-secondary font-normal">Linear water courses</span></td>
                        <td className="py-3 px-4 text-gold font-bold">£1,200+</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden md:table-cell">River reaches, canal sections, estuaries</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden lg:table-cell">Cross-sections, depth profile</td>
                      </tr>
                      <tr className="bg-white">
                        <td className="py-3 px-4 text-text-primary font-medium">Large Lake / Reservoir<span className="block text-sm text-text-secondary font-normal">Major water bodies</span></td>
                        <td className="py-3 px-4 text-gold font-bold">£2,000+</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden md:table-cell">Drinking water reservoirs, large lakes</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden lg:table-cell">Full bathymetric package</td>
                      </tr>
                      <tr className="bg-background-alt">
                        <td className="py-3 px-4 text-text-primary font-medium">Monitoring Programme<span className="block text-sm text-text-secondary font-normal">Repeat surveys</span></td>
                        <td className="py-3 px-4 text-gold font-bold">POA</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden md:table-cell">Quarterly or annual repeat surveys</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden lg:table-cell">Change detection reporting</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-text-secondary text-sm mb-6 italic">
                  *Guide prices encompass standard deliverables. Final quotation depends on water body dimensions, access conditions, and required survey density.
                </p>

                <h3 className="font-bold text-teal mb-3">Factors Influencing Your Quote</h3>
                <ul className="grid grid-cols-2 gap-2 mb-6">
                  {['Water body size & depth', 'Survey line spacing', 'Access & launch conditions', 'Volume calculation needs'].map((factor, index) => (
                    <li key={index} className="flex items-center gap-2 text-text-secondary">
                      <svg className="w-4 h-4 text-gold flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm">{factor}</span>
                    </li>
                  ))}
                </ul>

                <p className="text-text-secondary leading-relaxed mb-6">
                  Drone-deployed sonar eliminates the need for boat hire, launch facilities, and watercraft operators, typically reducing survey costs by <span className="text-gold font-semibold">40-60%</span> compared to traditional boat-based bathymetric surveys.
                </p>

                <div className="bg-teal rounded-xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-center sm:text-left">
                    <p className="text-white font-semibold">Ready for a sonar survey quotation?</p>
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

              {/* Drone vs Boat-Based Sonar */}
              <div>
                <h2 id="drone-vs-boat-sonar" className="text-2xl md:text-3xl font-bold text-teal mb-4 scroll-mt-32">
                  How Does <span className="text-gold">Drone Sonar</span> Compare to Boat-Based Methods?
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed mb-4">
                  Traditional bathymetric surveys require survey boats, trained crew, slipway or launch access, and often several days of mobilisation. For remote water bodies, transporting boats overland adds significant cost and logistical complexity. Shallow waters, weed growth, and restricted access can render boat surveys impossible.
                </p>
                <p className="text-text-secondary text-lg leading-relaxed mb-4">
                  Drone-deployed sonar requires only a clear area to launch the aircraft. The drone carries the sonar module to the water surface, follows precise survey lines at controlled speed, and returns data in real time. Water bodies that would require extensive boat logistics can be surveyed in hours with minimal equipment.
                </p>
                <div className="mt-8">
                  <h3 className="text-center font-bold text-teal text-xl mb-6">Why Select Drone Over Boat-Based?</h3>
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
                            <h4 className="text-white font-bold text-lg">Drone Sonar Survey</h4>
                            <p className="text-gold text-sm font-medium">Rapid deployment, any water body</p>
                          </div>
                        </div>
                        <div className="space-y-3">
                          {[
                            { Icon: Clock, text: 'Same-day mobilisation' },
                            { Icon: ShieldCheck, text: 'No watercraft needed' },
                            { Icon: PoundSterling, text: '40-60% cost reduction' },
                            { Icon: Waves, text: 'Access remote locations' },
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
                            <h4 className="text-text-primary font-bold text-lg">Boat-Based Sonar</h4>
                            <p className="text-text-secondary text-sm font-medium">Requires launch access & crew</p>
                          </div>
                        </div>
                        <div className="space-y-3">
                          {[
                            { text: 'Boat transport & launch needed', negative: true },
                            { text: 'Crew and vessel costs', negative: true },
                            { text: 'Cannot access shallow areas', negative: true },
                            { text: 'Days of mobilisation', negative: true },
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
                    <p className="text-text-secondary text-sm mb-2">Uncertain whether drone sonar suits your water body?</p>
                    <QuoteButton className="text-gold font-semibold hover:underline inline-flex items-center gap-1">
                      Obtain specialist guidance
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </QuoteButton>
                  </div>
                </div>
              </div>

              {/* What Can Sonar Detect Underwater */}
              <div>
                <h2 id="what-sonar-detects" className="text-2xl md:text-3xl font-bold text-teal mb-4 scroll-mt-32">
                  What Can <span className="text-gold">Sonar Detect</span> Underwater?
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed mb-4">
                  Drone-deployed sonar systems capture detailed information about underwater environments. The acoustic signals map the water body floor and detect objects, structures, and features beneath the surface:
                </p>
                <ul className="space-y-3 mb-6">
                  {[
                    { title: 'Bed topography', desc: 'Detailed depth profiles and contour mapping of lake beds, river channels, and reservoir floors' },
                    { title: 'Silt and sediment accumulation', desc: 'Measuring sediment depth to calculate storage capacity loss and plan dredging operations' },
                    { title: 'Submerged infrastructure', desc: 'Locating underwater pipes, intake structures, dam faces, and outfall positions' },
                    { title: 'Obstructions and debris', desc: 'Detecting fallen trees, dumped materials, rock formations, and navigation hazards' },
                    { title: 'Aquatic vegetation mapping', desc: 'Identifying weed beds, invasive species distribution, and habitat features' },
                    { title: 'Erosion and scour patterns', desc: 'Assessing bank erosion, bridge scour, and changes in channel morphology over time' },
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

              {/* Where Are Drone Sonar Surveys Used */}
              <div>
                <h2 id="drone-sonar-applications" className="text-2xl md:text-3xl font-bold text-teal mb-4 scroll-mt-32">
                  Where Are <span className="text-gold">Drone Sonar Surveys</span> Used?
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed mb-6">
                  Drone sonar technology serves diverse industries and applications across the water management, environmental, and infrastructure sectors:
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-background-alt rounded-xl p-6">
                    <Waves className="w-8 h-8 text-gold mb-3" strokeWidth={1.5} />
                    <h3 className="font-bold text-teal mb-2">Reservoir Management</h3>
                    <p className="text-text-secondary text-sm">Storage capacity assessments, siltation monitoring, and dam safety inspections for water companies and reservoir owners.</p>
                  </div>
                  <div className="bg-background-alt rounded-xl p-6">
                    <Fish className="w-8 h-8 text-gold mb-3" strokeWidth={1.5} />
                    <h3 className="font-bold text-teal mb-2">Environmental Assessment</h3>
                    <p className="text-text-secondary text-sm">Aquatic habitat mapping, baseline surveys for development planning, and ecological impact assessments.</p>
                  </div>
                  <div className="bg-background-alt rounded-xl p-6">
                    <Anchor className="w-8 h-8 text-gold mb-3" strokeWidth={1.5} />
                    <h3 className="font-bold text-teal mb-2">Infrastructure Inspection</h3>
                    <p className="text-text-secondary text-sm">Underwater inspection of bridge foundations, culvert outlets, weir structures, and submerged pipeline crossings.</p>
                  </div>
                  <div className="bg-background-alt rounded-xl p-6">
                    <Layers className="w-8 h-8 text-gold mb-3" strokeWidth={1.5} />
                    <h3 className="font-bold text-teal mb-2">Dredging Support</h3>
                    <p className="text-text-secondary text-sm">Pre-dredge volume calculations, progress monitoring during operations, and post-dredge verification surveys.</p>
                  </div>
                  <div className="bg-background-alt rounded-xl p-6">
                    <MapPin className="w-8 h-8 text-gold mb-3" strokeWidth={1.5} />
                    <h3 className="font-bold text-teal mb-2">Flood Risk Assessment</h3>
                    <p className="text-text-secondary text-sm">River channel capacity modelling, floodplain mapping support, and natural flood management scheme design.</p>
                  </div>
                  <div className="bg-background-alt rounded-xl p-6">
                    <ShieldCheck className="w-8 h-8 text-gold mb-3" strokeWidth={1.5} />
                    <h3 className="font-bold text-teal mb-2">Quarry & Mining</h3>
                    <p className="text-text-secondary text-sm">Flooded quarry depth surveys, tailings pond assessments, and settlement lagoon volume calculations.</p>
                  </div>
                </div>

                <div className="mt-8 text-center">
                  <p className="text-text-secondary mb-4">Have a water body requiring survey?</p>
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
                <h2 id="drone-sonar-deliverables" className="text-2xl md:text-3xl font-bold text-teal mb-4 scroll-mt-32">
                  What Deliverables Do You Receive From a <span className="text-gold">Drone Sonar Survey</span>?
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed mb-6">
                  We tailor outputs to your project objectives, but our standard sonar survey package includes:
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-4 bg-background-alt rounded-xl p-4">
                    <div className="w-10 h-10 bg-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Waves className="w-5 h-5 text-gold" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h4 className="font-bold text-teal">Bathymetric Depth Map</h4>
                      <p className="text-text-secondary text-sm">Colour-coded depth map showing the underwater terrain with contour lines at specified intervals, georeferenced to OS coordinates.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4 bg-background-alt rounded-xl p-4">
                    <div className="w-10 h-10 bg-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Layers className="w-5 h-5 text-gold" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h4 className="font-bold text-teal">Cross-Section Profiles</h4>
                      <p className="text-text-secondary text-sm">Detailed cross-sectional views at specified locations showing bed profile, water depth, and channel geometry.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4 bg-background-alt rounded-xl p-4">
                    <div className="w-10 h-10 bg-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-teal">Volume Calculations</h4>
                      <p className="text-text-secondary text-sm">Accurate water body capacity calculations at specified levels, silt volume estimates, and comparative analysis against design profiles.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4 bg-background-alt rounded-xl p-4">
                    <div className="w-10 h-10 bg-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-teal">Interpretation Report</h4>
                      <p className="text-text-secondary text-sm">Professional report with findings summary, feature identification, condition assessment, and recommendations for maintenance or further investigation.</p>
                    </div>
                  </li>
                </ul>

                <div className="mt-6 p-5 bg-gold/10 border border-gold/20 rounded-xl">
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-teal font-semibold text-center sm:text-left">Need specific deliverables for your water body?</p>
                    <QuoteButton className="btn btn-primary btn-shimmer whitespace-nowrap">
                      Talk Through Requirements
                    </QuoteButton>
                  </div>
                </div>
              </div>

              {/* How Long Does a Survey Take */}
              <div>
                <h2 id="sonar-survey-timeline" className="text-2xl md:text-3xl font-bold text-teal mb-4 scroll-mt-32">
                  How Long Does a <span className="text-gold">Sonar Survey</span> Take?
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed mb-6">
                  On-site data capture with drone sonar is considerably faster than traditional boat-based methods. A small pond or lagoon can be surveyed in 2-3 hours. Medium water bodies require half a day. Large reservoirs may need 1-2 full days depending on the required survey density and complexity.
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
                        <td className="py-3 px-4 text-text-secondary text-sm hidden md:table-cell">Site assessment, flight planning, permissions</td>
                      </tr>
                      <tr className="bg-background-alt">
                        <td className="py-3 px-4 text-text-primary font-medium">On-Site Data Capture</td>
                        <td className="py-3 px-4 text-gold font-bold">2 hrs - 2 days</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden md:table-cell">Equipment setup, sonar flights, data validation</td>
                      </tr>
                      <tr className="bg-white">
                        <td className="py-3 px-4 text-text-primary font-medium">Data Processing</td>
                        <td className="py-3 px-4 text-gold font-bold">2-3 days</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden md:table-cell">Depth calibration, surface generation, volume calculation</td>
                      </tr>
                      <tr className="bg-background-alt">
                        <td className="py-3 px-4 text-text-primary font-medium">Report Compilation</td>
                        <td className="py-3 px-4 text-gold font-bold">2-3 days</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden md:table-cell">Map production, analysis, recommendations</td>
                      </tr>
                      <tr className="bg-teal/10">
                        <td className="py-3 px-4 text-teal font-bold">Overall (Standard)</td>
                        <td className="py-3 px-4 text-teal font-bold">5-7 working days</td>
                        <td className="py-3 px-4 text-teal text-sm font-medium hidden md:table-cell">From site visit to final report delivery</td>
                      </tr>
                    </tbody>
                  </table>
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
                  How Do I Select a <span className="text-gold">Drone Sonar Survey</span> Provider?
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed mb-4">
                  Drone sonar surveys require specialist equipment and hydrographic interpretation expertise. When evaluating providers, examine these essential criteria:
                </p>
                <ul className="space-y-3 mb-6">
                  {[
                    { title: 'Sonar equipment', desc: 'Verify they operate survey-grade sonar systems with appropriate frequency and resolution for your targets' },
                    { title: 'Hydrographic experience', desc: 'Ensure qualified personnel interpret and process the bathymetric data, not just pilots' },
                    { title: 'CAA certification', desc: 'Confirm valid commercial drone permissions and insurance for operations over water' },
                    { title: 'Data accuracy', desc: 'Ask about depth accuracy specifications and quality control procedures for survey data' },
                    { title: 'Relevant case studies', desc: 'Request evidence of comparable water body surveys in similar environments' },
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
                  <p className="text-white font-semibold mb-3">Ready to work with a specialist sonar survey provider?</p>
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

              {/* Combined Above and Below Water Surveys */}
              <div>
                <h2 id="combined-surveys" className="text-2xl md:text-3xl font-bold text-teal mb-4 scroll-mt-32">
                  Combined <span className="text-gold">Above and Below Water</span> Surveys
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed mb-4">
                  One of the most powerful advantages of drone-based survey technology is the ability to combine aerial topographic mapping with underwater bathymetric profiling in a single mobilisation. This creates a seamless dataset spanning the entire site, from surrounding terrain through the water margins and down to the bed of the water body.
                </p>
                <p className="text-text-secondary text-lg leading-relaxed mb-6">
                  Combined surveys prove particularly valuable for flood modelling, dam safety assessments, reservoir capacity studies, and environmental impact assessments where understanding the complete hydrological picture is essential.
                </p>

                <div className="mt-4 flex items-start gap-3 bg-gold/10 border border-gold/30 rounded-lg p-4">
                  <Waves className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                  <div>
                    <p className="text-teal font-semibold text-sm">Seamless Above-Below Water Data</p>
                    <p className="text-text-secondary text-sm">Ask about combining aerial photogrammetry with sonar bathymetry for a complete site model at a reduced combined rate.</p>
                  </div>
                </div>

                {/* Final CTA */}
                <div className="mt-8 bg-gradient-to-r from-teal to-teal-dark rounded-xl p-6 text-center">
                  <h3 className="text-white font-bold text-xl mb-2">Ready to Map Your Water Body?</h3>
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
                  With extensive experience in specialist aquatic surveys, Peter coordinates every sonar project to ensure accurate bathymetric data capture and professional interpretation you can rely on.
                </p>
              </div>

              <div className="bg-background-alt border border-border rounded-2xl p-6">
                <h3 className="text-teal font-bold text-lg mb-4">
                  Quick Guide: Drone Sonar Surveys
                </h3>
                <nav className="space-y-2">
                  {[
                    { id: 'what-is-drone-sonar', label: 'What is a Drone Sonar Survey?' },
                    { id: 'drone-sonar-cost', label: 'How Much Does It Cost?' },
                    { id: 'drone-vs-boat-sonar', label: 'Drone vs Boat-Based Sonar' },
                    { id: 'what-sonar-detects', label: 'What Can Sonar Detect Underwater?' },
                    { id: 'drone-sonar-applications', label: 'Where Are Sonar Surveys Used?' },
                    { id: 'drone-sonar-deliverables', label: 'What Deliverables Do You Receive?' },
                    { id: 'sonar-survey-timeline', label: 'How Long Does a Survey Take?' },
                    { id: 'choose-provider', label: 'How to Choose a Provider' },
                    { id: 'combined-surveys', label: 'Combined Above & Below Water Surveys' },
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
                    'Bathymetric depth map',
                    'Cross-section profiles',
                    'Volume calculations',
                    'Georeferenced data layers',
                    'Interpretation report',
                    'CAD/GIS compatible files',
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
              href="/services/drone-water-quality-assessment"
              className="bg-white border border-border rounded-xl p-6 hover:border-gold hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-teal font-bold text-lg mb-2">Water Quality Assessment</h3>
              <p className="text-text-secondary text-sm">
                Aerial monitoring of water quality parameters including turbidity, algal blooms, and pollution indicators.
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
