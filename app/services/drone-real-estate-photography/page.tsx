import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import QuoteButton from '@/components/QuoteButton';
import Testimonials from '@/components/Testimonials';
import FloatingCTA from '@/components/FloatingCTA';
import EquipmentSection from '@/components/EquipmentSection';
import { ServiceSchema, BreadcrumbSchema } from '@/components/SchemaMarkup';
import { ClientLogoMarqueeInline } from '@/components/ClientLogoMarquee';
import { Home, Building2, Landmark, MapPin, TrendingUp, ShieldCheck, Clock, PoundSterling } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Drone Real Estate Photography | Aerial Property Photography UK | Hire Drone Pilot',
  description: 'Professional drone real estate photography services throughout the UK. Stunning aerial property imagery for estate agents, developers, and land sales. CAA certified pilots.',
  keywords: 'drone real estate photography, aerial property photography, drone property photos, estate agent drone photography, property marketing drone uk',
};

export default function DroneRealEstatePhotographyPage() {
  return (
    <>
      <ServiceSchema
        name="Drone Real Estate Photography Services"
        description="Professional drone real estate photography services throughout the UK. Stunning aerial property imagery for estate agents, developers, and land sales. CAA certified pilots."
        url="https://hiredronepilot.uk/services/drone-real-estate-photography"
      />
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://hiredronepilot.uk" },
        { name: "Services", url: "https://hiredronepilot.uk/services" },
        { name: "Drone Real Estate Photography", url: "https://hiredronepilot.uk/services/drone-real-estate-photography" }
      ]} />

      {/* Hero Section */}
      <section className="relative min-h-[800px] md:min-h-[600px] flex items-start bg-teal -mt-[120px] pt-[120px] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/services/service-drone-survey.avif"
            alt="Drone capturing aerial view of a residential property for estate agent marketing"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-teal-dark via-teal-dark/90 via-40% to-teal-dark/40 z-10" />
        </div>
        <div className="container pt-8 pb-52 lg:pb-40 lg:pt-12 relative z-10">
          <div className="max-w-3xl">
            <p className="text-gold font-semibold uppercase tracking-wider mb-3">
              Photography &amp; Video
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Drone Real Estate Photography
            </h1>
            <p className="text-white/80 text-lg md:text-xl mb-8">
              Elevated property imagery that sells. Professional aerial photography for estate agents, property developers, and land owners—showcasing homes, estates, and developments from their most impressive angles.
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
              Avg Response within 5 Mins &bull; Or call{' '}
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

              {/* What is Drone Real Estate Photography? */}
              <div>
                <h2 id="what-is-drone-real-estate-photography" className="text-2xl md:text-3xl font-bold text-teal mb-4 scroll-mt-32">
                  What is <span className="text-gold">Drone Real Estate Photography</span>?
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed mb-4">
                  Drone real estate photography uses professional aerial vehicles to capture elevated images of properties, their grounds, and surrounding context. These images reveal the full extent of a property in ways that ground-level photography cannot—showing garden boundaries, parking areas, neighbouring amenities, and the overall setting that buyers find most compelling.
                </p>
                <p className="text-text-secondary text-lg leading-relaxed">
                  At Hire Drone Pilot, our CAA certified operators specialise in property photography for estate agents, developers, and private sellers throughout the UK. We understand what makes a property listing stand out online—and deliver images that generate more clicks, more viewings, and faster sales.
                </p>

                {/* Conversion CTA Box */}
                <div className="mt-8 bg-teal rounded-2xl p-6 md:p-8 overflow-hidden">
                  {/* Personal Header */}
                  <div className="flex flex-col md:flex-row md:items-start gap-6 mb-6 pb-6 border-b border-white/10">
                    {/* Left: Profile */}
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
                          &quot;Have questions? Ring me directly - I&apos;m happy to discuss your property photography needs.&quot;
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
                        Property Imagery That Sells,
                        <span className="text-gold block relative inline-block">
                          Faster Than You&apos;d Expect
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
                          'Elevated property photographs',
                          'Grounds & boundary context shots',
                          'Professionally edited finals',
                          'Web-ready & print-ready files',
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
                        Delivered in 2-4 working days
                      </p>
                    </div>

                    <div>
                      <h3 className="text-gold font-bold text-sm uppercase tracking-wider mb-3">
                        Why Use HireDronePilot
                      </h3>
                      <ul className="space-y-2.5">
                        {[
                          'CAA certified & fully insured',
                          'Property photography specialists',
                          'Quick turnaround for agents',
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
                        <span>Trusted by estate agents, property developers, and land agents across the UK.</span>
                      </p>
                    </div>
                  </div>

                  {/* CTA Buttons */}
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
                        Request a Property Quote
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

              {/* How much does it cost? */}
              <div>
                <h2 id="drone-real-estate-photography-cost" className="text-2xl md:text-3xl font-bold text-teal mb-4 scroll-mt-32">
                  How Much Does <span className="text-gold">Drone Real Estate Photography</span> Cost?
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed mb-6">
                  Property photography pricing varies depending on the size of the property, its grounds, and the number of images required. Below is a guide to assist your budgeting:
                </p>

                {/* Pricing Table */}
                <div className="rounded-xl overflow-hidden border border-border mb-6">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-teal">
                        <th className="text-left text-white font-semibold py-3 px-4">Package</th>
                        <th className="text-left text-white font-semibold py-3 px-4">Guide Price</th>
                        <th className="text-left text-white font-semibold py-3 px-4 hidden md:table-cell">Typical Properties</th>
                        <th className="text-left text-white font-semibold py-3 px-4 hidden lg:table-cell">Deliverables</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-white">
                        <td className="py-3 px-4 text-text-primary font-medium">Single Residential<span className="block text-sm text-text-secondary font-normal">Standard home</span></td>
                        <td className="py-3 px-4 text-gold font-bold">£200+</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden md:table-cell">Houses, flats, bungalows</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden lg:table-cell">10-15 edited aerials</td>
                      </tr>
                      <tr className="bg-background-alt">
                        <td className="py-3 px-4 text-text-primary font-medium">Small Estate<span className="block text-sm text-text-secondary font-normal">Grounds & outbuildings</span></td>
                        <td className="py-3 px-4 text-gold font-bold">£350+</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden md:table-cell">Country homes, farms, smallholdings</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden lg:table-cell">20-30 edited images</td>
                      </tr>
                      <tr className="bg-white">
                        <td className="py-3 px-4 text-text-primary font-medium">Development / Commercial<span className="block text-sm text-text-secondary font-normal">Multi-unit or large site</span></td>
                        <td className="py-3 px-4 text-gold font-bold">£500+</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden md:table-cell">New builds, commercial, land parcels</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden lg:table-cell">30+ images, progress sets</td>
                      </tr>
                      <tr className="bg-background-alt">
                        <td className="py-3 px-4 text-text-primary font-medium">Portfolio / Agency<span className="block text-sm text-text-secondary font-normal">Multiple properties</span></td>
                        <td className="py-3 px-4 text-gold font-bold">POA</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden md:table-cell">Ongoing agent partnerships</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden lg:table-cell">Custom per-property rates</td>
                      </tr>
                      <tr className="bg-teal/10">
                        <td className="py-3 px-4 text-teal font-bold">Video Walkover Add-on</td>
                        <td className="py-3 px-4 text-teal font-bold">+£200</td>
                        <td className="py-3 px-4 text-teal text-sm font-medium hidden md:table-cell">Add to any package</td>
                        <td className="py-3 px-4 text-teal text-sm font-medium hidden lg:table-cell">60-90s aerial fly-around</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-text-secondary text-sm mb-6 italic">
                  *Guide prices cover standard deliverables. Final quotation depends on property size, location, and specific requirements.
                </p>

                {/* What affects your quote */}
                <h3 className="font-bold text-teal mb-3">Factors Influencing Your Quote</h3>
                <ul className="grid grid-cols-2 gap-2 mb-6">
                  {['Property size & grounds', 'Number of images needed', 'Location & travel distance', 'Video or stills only'].map((factor, index) => (
                    <li key={index} className="flex items-center gap-2 text-text-secondary">
                      <svg className="w-4 h-4 text-gold flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm">{factor}</span>
                    </li>
                  ))}
                </ul>

                <p className="text-text-secondary leading-relaxed mb-6">
                  Estate agents who add aerial photography to their property listings consistently report increased online engagement and faster time-to-sale. The modest cost of drone photography is frequently recovered many times over through quicker completions and higher offers.
                </p>

                {/* CTA Banner */}
                <div className="bg-teal rounded-xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-center sm:text-left">
                    <p className="text-white font-semibold">Ready to receive a property photography quote?</p>
                    <p className="text-white/70 text-sm">Free, no-obligation quotes within 24 hours</p>
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

              {/* Drone vs Ground Photography for Property */}
              <div>
                <h2 id="drone-vs-ground-property" className="text-2xl md:text-3xl font-bold text-teal mb-4 scroll-mt-32">
                  How Does <span className="text-gold">Drone Photography</span> Compare to Ground Photography for Property?
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed mb-4">
                  Traditional property photography is captured from eye level, which limits the ability to convey the full extent of a home, its gardens, and the surrounding area. Buyers scrolling through listings want to understand the spatial layout—how the garden relates to the house, where the parking is, and what the neighbourhood looks like.
                </p>
                <p className="text-text-secondary text-lg leading-relaxed mb-4">
                  Drone photography provides that crucial context. Elevated shots reveal the complete picture, making properties appear more spacious, more appealing, and more professional. For larger properties with grounds, outbuildings, or scenic surroundings, aerial imagery is practically essential.
                </p>
                {/* Comparison Cards */}
                <div className="mt-8">
                  <h3 className="text-center font-bold text-teal text-xl mb-6">Why Choose Aerial for Property Marketing?</h3>
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
                            <h4 className="text-white font-bold text-lg">Drone Property Photography</h4>
                            <p className="text-gold text-sm font-medium">Context, scale & impact</p>
                          </div>
                        </div>
                        <div className="space-y-3">
                          {[
                            { Icon: TrendingUp, text: 'Higher listing engagement' },
                            { Icon: MapPin, text: 'Shows full property context' },
                            { Icon: PoundSterling, text: 'Affordable from £200' },
                            { Icon: Clock, text: 'Same-week availability' },
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
                            <h4 className="text-text-primary font-bold text-lg">Ground-Level Only</h4>
                            <p className="text-text-secondary text-sm font-medium">Limited perspective</p>
                          </div>
                        </div>
                        <div className="space-y-3">
                          {[
                            { text: 'Cannot show full property extent', negative: true },
                            { text: 'No garden or boundary context', negative: true },
                            { text: 'Blends in with other listings', negative: true },
                            { text: 'Misses scenic surroundings', negative: true },
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
                    <p className="text-text-secondary text-sm mb-2">Want to see how aerial photography could showcase your listing?</p>
                    <QuoteButton className="text-gold font-semibold hover:underline inline-flex items-center gap-1">
                      Get specialist advice
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </QuoteButton>
                  </div>
                </div>
              </div>

              {/* Where is it used? */}
              <div>
                <h2 id="drone-property-photography-applications" className="text-2xl md:text-3xl font-bold text-teal mb-4 scroll-mt-32">
                  Where is <span className="text-gold">Drone Property Photography</span> Used?
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed mb-6">
                  Aerial property photography is valuable across a wide range of property types and marketing scenarios:
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-background-alt rounded-xl p-6">
                    <Home className="w-8 h-8 text-gold mb-3" strokeWidth={1.5} />
                    <h3 className="font-bold text-teal mb-2">Residential Sales</h3>
                    <p className="text-text-secondary text-sm">Houses, flats, and bungalows benefit from elevated views that reveal gardens, driveways, and surrounding context for buyers.</p>
                  </div>
                  <div className="bg-background-alt rounded-xl p-6">
                    <Landmark className="w-8 h-8 text-gold mb-3" strokeWidth={1.5} />
                    <h3 className="font-bold text-teal mb-2">Country & Period Properties</h3>
                    <p className="text-text-secondary text-sm">Estates, manor houses, and listed buildings with extensive grounds that simply cannot be appreciated from ground level.</p>
                  </div>
                  <div className="bg-background-alt rounded-xl p-6">
                    <Building2 className="w-8 h-8 text-gold mb-3" strokeWidth={1.5} />
                    <h3 className="font-bold text-teal mb-2">New Developments</h3>
                    <p className="text-text-secondary text-sm">Off-plan and under-construction developments where aerial views show plot layout, progress, and the wider location.</p>
                  </div>
                  <div className="bg-background-alt rounded-xl p-6">
                    <MapPin className="w-8 h-8 text-gold mb-3" strokeWidth={1.5} />
                    <h3 className="font-bold text-teal mb-2">Land & Agricultural Sales</h3>
                    <p className="text-text-secondary text-sm">Farms, land parcels, and equestrian properties where boundaries and acreage are best understood from above.</p>
                  </div>
                  <div className="bg-background-alt rounded-xl p-6">
                    <TrendingUp className="w-8 h-8 text-gold mb-3" strokeWidth={1.5} />
                    <h3 className="font-bold text-teal mb-2">Commercial Property</h3>
                    <p className="text-text-secondary text-sm">Offices, retail units, and industrial premises where access, parking, and surrounding infrastructure matter to prospective tenants.</p>
                  </div>
                  <div className="bg-background-alt rounded-xl p-6">
                    <ShieldCheck className="w-8 h-8 text-gold mb-3" strokeWidth={1.5} />
                    <h3 className="font-bold text-teal mb-2">Lettings & Holiday Rentals</h3>
                    <p className="text-text-secondary text-sm">Holiday cottages, Airbnb properties, and rental portfolios where stunning imagery drives booking enquiries.</p>
                  </div>
                </div>

                <div className="mt-8 text-center">
                  <p className="text-text-secondary mb-4">Have a property that needs aerial photography?</p>
                  <div className="flex flex-wrap justify-center gap-3">
                    <QuoteButton className="btn btn-primary btn-shimmer">
                      Discuss Your Listing
                    </QuoteButton>
                    <a href="tel:+441334804554" className="btn btn-outline">
                      Ring +44 1334 804554
                    </a>
                  </div>
                </div>
              </div>

              {/* What Deliverables? */}
              <div>
                <h2 id="drone-property-deliverables" className="text-2xl md:text-3xl font-bold text-teal mb-4 scroll-mt-32">
                  What Deliverables Do You Receive From <span className="text-gold">Drone Property Photography</span>?
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed mb-6">
                  We tailor every package to the property and your marketing requirements. Standard deliverables include:
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-4 bg-background-alt rounded-xl p-4">
                    <div className="w-10 h-10 bg-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-teal">Edited Aerial Photographs</h4>
                      <p className="text-text-secondary text-sm">Colour-corrected, horizon-levelled, and professionally retouched images delivered at full resolution for print and digital use.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4 bg-background-alt rounded-xl p-4">
                    <div className="w-10 h-10 bg-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-teal">Portal-Ready Formats</h4>
                      <p className="text-text-secondary text-sm">Images sized and optimised for Rightmove, Zoopla, OnTheMarket, and your agency website—ready for immediate upload.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4 bg-background-alt rounded-xl p-4">
                    <div className="w-10 h-10 bg-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-teal">Aerial Video Fly-Around (Optional)</h4>
                      <p className="text-text-secondary text-sm">A cinematic 60-90 second <Link href="/services/drone-videographer" className="text-gold hover:underline">aerial video</Link> showcasing the property and its surroundings for enhanced online engagement.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4 bg-background-alt rounded-xl p-4">
                    <div className="w-10 h-10 bg-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-teal">Full Commercial Usage Rights</h4>
                      <p className="text-text-secondary text-sm">Unrestricted licence to use images across property portals, social media, printed brochures, and window cards.</p>
                    </div>
                  </li>
                </ul>

                <div className="mt-6 p-5 bg-gold/10 border border-gold/20 rounded-xl">
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-teal font-semibold text-center sm:text-left">Need specific deliverables for your listing?</p>
                    <QuoteButton className="btn btn-primary btn-shimmer whitespace-nowrap">
                      Discuss Requirements
                    </QuoteButton>
                  </div>
                </div>
              </div>

              {/* How long does it take? */}
              <div>
                <h2 id="property-shoot-timeline" className="text-2xl md:text-3xl font-bold text-teal mb-4 scroll-mt-32">
                  How Long Does a <span className="text-gold">Property Shoot</span> Take?
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed mb-4">
                  On-site capture is swift. A standard residential property requires 20-40 minutes. Larger estates with extensive grounds take 1-2 hours. We schedule shoots to coincide with the best natural lighting for your property.
                </p>
                <p className="text-text-secondary text-lg leading-relaxed mb-6">
                  Edited images are typically delivered within 2-4 working days. For agents with time-sensitive listings, we offer a 24-hour express service to ensure your property reaches the market without delay.
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
                        <td className="py-3 px-4 text-text-primary font-medium">Booking</td>
                        <td className="py-3 px-4 text-gold font-bold">1-2 days</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden md:table-cell">Date confirmation, airspace checks, access coordination</td>
                      </tr>
                      <tr className="bg-background-alt">
                        <td className="py-3 px-4 text-text-primary font-medium">On-Site Capture</td>
                        <td className="py-3 px-4 text-gold font-bold">20 mins - 2 hrs</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden md:table-cell">Setup, flights, multiple angles and elevations</td>
                      </tr>
                      <tr className="bg-white">
                        <td className="py-3 px-4 text-text-primary font-medium">Editing & Delivery</td>
                        <td className="py-3 px-4 text-gold font-bold">1-3 days</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden md:table-cell">Colour correction, retouching, format preparation</td>
                      </tr>
                      <tr className="bg-teal/10">
                        <td className="py-3 px-4 text-teal font-bold">Overall (Standard)</td>
                        <td className="py-3 px-4 text-teal font-bold">2-4 working days</td>
                        <td className="py-3 px-4 text-teal text-sm font-medium hidden md:table-cell">From booking to final image delivery</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="mt-4 flex items-start gap-3 bg-gold/10 border border-gold/30 rounded-lg p-4">
                  <svg className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <div>
                    <p className="text-teal font-semibold text-sm">Express Service for Agents</p>
                    <p className="text-text-secondary text-sm">Need images for a listing going live tomorrow? 24-hour express turnaround is available.</p>
                  </div>
                </div>

                <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
                  <QuoteButton className="btn btn-primary btn-shimmer">
                    Book a Property Shoot
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
                <h2 id="choose-provider" className="text-2xl md:text-3xl font-bold text-teal mb-4 scroll-mt-32">
                  How to Choose a <span className="text-gold">Drone Property Photography</span> Provider
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed mb-4">
                  The quality of your property imagery directly impacts buyer interest. When selecting a provider, consider these key factors:
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gold mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-text-primary"><strong>Property experience</strong> – Look for a portfolio demonstrating experience with residential and commercial property photography</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gold mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-text-primary"><strong>CAA certification</strong> – Essential for legal commercial drone operation in the UK</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gold mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-text-primary"><strong>Turnaround speed</strong> – Estate agents need swift delivery; confirm realistic timescales</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gold mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-text-primary"><strong>Editing quality</strong> – Professional post-processing makes the difference between average and outstanding property imagery</span>
                  </li>
                </ul>
                <p className="text-text-secondary text-lg leading-relaxed mb-6">
                  At Hire Drone Pilot, we specialise in property photography. We understand what estate agents, developers, and sellers need—and we deliver images that make listings stand out.
                </p>

                <div className="bg-teal rounded-xl p-5">
                  <p className="text-white font-semibold mb-3">Ready to work with a property photography specialist?</p>
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

              {/* Does Drone Photography Increase Property Sales? */}
              <div>
                <h2 id="increase-property-sales" className="text-2xl md:text-3xl font-bold text-teal mb-4 scroll-mt-32">
                  Does <span className="text-gold">Drone Photography</span> Increase Property Sales?
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed mb-4">
                  The evidence strongly suggests it does. Properties listed with <Link href="/services/drone-photography" className="text-gold hover:underline">aerial photography</Link> consistently attract more online views, generate more enquiries, and achieve faster sales than those without. For properties with grounds, scenic surroundings, or unique features, aerial imagery can be the deciding factor that prompts a buyer to book a viewing.
                </p>
                <p className="text-text-secondary text-lg leading-relaxed mb-6">
                  The investment is modest relative to the value at stake. A £200-£500 photography package supporting the sale of a property worth hundreds of thousands of pounds is a remarkably cost-effective marketing tool. Many agents now consider drone photography standard for properties above a certain price threshold.
                </p>

                {/* Final CTA */}
                <div className="bg-gradient-to-r from-teal to-teal-dark rounded-xl p-6 text-center">
                  <h3 className="text-white font-bold text-xl mb-2">Ready to Elevate Your Property Listings?</h3>
                  <p className="text-white/80 text-sm mb-4">Expert guidance &bull; Tailored pricing &bull; Avg Response within 5 Mins</p>
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
                  Specialising in property photography for estate agents and developers, Peter understands what makes a listing image compelling and delivers results that drive viewings.
                </p>
              </div>

              {/* Table of Contents */}
              <div className="bg-background-alt border border-border rounded-2xl p-6">
                <h3 className="text-teal font-bold text-lg mb-4">
                  Quick Guide: Property Drone Photography
                </h3>
                <nav className="space-y-2">
                  {[
                    { id: 'what-is-drone-real-estate-photography', label: 'What is Drone Real Estate Photography?' },
                    { id: 'drone-real-estate-photography-cost', label: 'How Much Does It Cost?' },
                    { id: 'drone-vs-ground-property', label: 'Drone vs Ground Photography' },
                    { id: 'drone-property-photography-applications', label: 'Where is It Used?' },
                    { id: 'drone-property-deliverables', label: 'What Deliverables Do You Receive?' },
                    { id: 'property-shoot-timeline', label: 'How Long Does a Shoot Take?' },
                    { id: 'choose-provider', label: 'How to Choose a Provider' },
                    { id: 'increase-property-sales', label: 'Does It Increase Sales?' },
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
                  Property Photography Deliverables
                </h3>
                <ul className="space-y-3">
                  {[
                    'Edited aerial property images',
                    'Portal-ready file formats',
                    'Print-resolution files',
                    'Aerial video fly-around (optional)',
                    'Commercial usage licence',
                    'Secure digital delivery',
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
                  Discuss Your Property Listing
                </h3>
                <p className="text-white/70 text-sm mb-4">
                  Get expert guidance and tailored pricing.
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
                    placeholder="Brief property details..."
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
            Related Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link
              href="/services/drone-photography"
              className="bg-white border border-border rounded-xl p-6 hover:border-gold hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-teal font-bold text-lg mb-2">Drone Photography</h3>
              <p className="text-text-secondary text-sm">
                Professional aerial photography for marketing, events, and commercial projects across the UK.
              </p>
            </Link>
            <Link
              href="/services/drone-videographer"
              className="bg-white border border-border rounded-xl p-6 hover:border-gold hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-teal font-bold text-lg mb-2">Drone Videography</h3>
              <p className="text-text-secondary text-sm">
                Cinematic aerial video to bring your property listing to life with dynamic fly-throughs.
              </p>
            </Link>
            <Link
              href="/services/drone-roof-inspection"
              className="bg-white border border-border rounded-xl p-6 hover:border-gold hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-teal font-bold text-lg mb-2">Roof Inspection</h3>
              <p className="text-text-secondary text-sm">
                Combine your property photography with a detailed drone roof assessment for pre-sale surveys.
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
