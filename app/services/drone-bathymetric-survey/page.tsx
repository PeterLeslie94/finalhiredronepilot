import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import QuoteButton from '@/components/QuoteButton';
import Testimonials from '@/components/Testimonials';
import FloatingCTA from '@/components/FloatingCTA';
import EquipmentSection from '@/components/EquipmentSection';
import { ServiceSchema, BreadcrumbSchema } from '@/components/SchemaMarkup';
import { ClientLogoMarqueeInline } from '@/components/ClientLogoMarquee';
import { Waves, Droplets, Anchor, Fish, Building2, ShieldCheck, Clock, PoundSterling, Layers } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Drone Bathymetric Survey Services UK | Underwater Mapping | Hire Drone Pilot',
  description: 'Professional drone bathymetric survey services across the UK. Map underwater terrain, water body depths, rivers, lakes and reservoirs. CAA certified pilots with sonar integration.',
  keywords: 'drone bathymetric survey, underwater drone mapping, bathymetric survey uk, drone water depth survey, river survey drone, lake survey drone',
};

export default function DroneBathymetricSurveyPage() {
  return (
    <>
      <ServiceSchema
        name="Drone Bathymetric Survey Services"
        description="Professional drone bathymetric survey services across the UK. Map underwater terrain, water body depths, rivers, lakes and reservoirs. CAA certified pilots with sonar integration."
        url="https://hiredronepilot.uk/services/drone-bathymetric-survey"
      />
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://hiredronepilot.uk" },
        { name: "Services", url: "https://hiredronepilot.uk/services" },
        { name: "Drone Bathymetric Survey", url: "https://hiredronepilot.uk/services/drone-bathymetric-survey" }
      ]} />

      {/* Hero Section */}
      <section className="relative min-h-[800px] md:min-h-[600px] flex items-start bg-teal -mt-[120px] pt-[120px] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/services/service-drone-survey.avif"
            alt="Drone conducting bathymetric survey over a UK river"
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
              Drone Bathymetric Survey
            </h1>
            <p className="text-white/80 text-lg md:text-xl mb-8">
              Map underwater terrain, measure water body depths, and generate detailed bed profiles using drone-deployed sonar technology. Rivers, lakes, reservoirs, and coastal environments surveyed safely from above.
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

              {/* What is a Drone Bathymetric Survey? */}
              <div>
                <h2 id="what-is-bathymetric-survey" className="text-2xl md:text-3xl font-bold text-teal mb-4 scroll-mt-32">
                  What Is a <span className="text-gold">Drone Bathymetric Survey</span>?
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed mb-4">
                  A drone bathymetric survey uses unmanned aerial vehicles equipped with echo sounder payloads or integrated <Link href="/services/drone-sonar-survey" className="text-gold hover:underline">sonar sensors</Link> to measure the depth and map the underwater topography of rivers, lakes, reservoirs, ponds, and <Link href="/services/drone-coastal-survey" className="text-gold hover:underline">coastal areas</Link>. The drone flies precise transects over the water surface while the tethered or mounted sonar device records depth readings at high frequency.
                </p>
                <p className="text-text-secondary text-lg leading-relaxed">
                  At Hire Drone Pilot, we combine this underwater depth data with aerial photogrammetry of the surrounding <Link href="/services/drone-topographical-survey" className="text-gold hover:underline">terrain</Link> to produce seamless topo-bathymetric models. This gives you a complete picture of the entire site—above and below the waterline—in a single survey operation. The result is georeferenced depth charts, bed profiles, and volumetric data that would traditionally require boat-based survey teams.
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
                        Map Above & Below,
                        <span className="text-gold block relative inline-block">
                          In a Single Survey
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
                          'Detailed depth charts & bed profiles',
                          'Volumetric capacity calculations',
                          'Topo-bathymetric merged models',
                          'Cross-section & longitudinal profiles',
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

                    {/* Right: Why choose us */}
                    <div>
                      <h3 className="text-gold font-bold text-sm uppercase tracking-wider mb-3">
                        Why Use HireDronePilot
                      </h3>
                      <ul className="space-y-2.5">
                        {[
                          'CAA certified & fully insured',
                          'No boat or vessel required',
                          'Minimal environmental disturbance',
                          'Combined aerial & underwater data',
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
                        <span>Trusted by water companies, environmental consultancies & civil engineers across the UK.</span>
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
                        Request Bathymetric Quote
                      </QuoteButton>
                    </div>
                  </div>

                  {/* Client Logo Marquee */}
                  <div className="mt-6 pt-6 border-t border-white/10">
                    <p className="text-white/50 text-xs uppercase tracking-wider text-center mb-4">Trusted by leading organisations</p>
                    <ClientLogoMarqueeInline />
                  </div>
                </div>
              </div>

              {/* How Much Does a Drone Bathymetric Survey Cost? */}
              <div>
                <h2 id="bathymetric-survey-cost" className="text-2xl md:text-3xl font-bold text-teal mb-4 scroll-mt-32">
                  How Much Does a <span className="text-gold">Drone Bathymetric Survey</span> Cost?
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed mb-6">
                  Bathymetric survey pricing depends on the water body size, depth, accessibility, and the deliverables required. Here is a guide to assist with budgeting:
                </p>

                {/* Pricing Table */}
                <div className="rounded-xl overflow-hidden border border-border mb-6">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-teal">
                        <th className="text-left text-white font-semibold py-3 px-4">Survey Scope</th>
                        <th className="text-left text-white font-semibold py-3 px-4">Guide Price</th>
                        <th className="text-left text-white font-semibold py-3 px-4 hidden md:table-cell">Typical Application</th>
                        <th className="text-left text-white font-semibold py-3 px-4 hidden lg:table-cell">Deliverables</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-white">
                        <td className="py-3 px-4 text-text-primary font-medium">Small Water Body<span className="block text-sm text-text-secondary font-normal">Pond, small lake</span></td>
                        <td className="py-3 px-4 text-gold font-bold">£800+</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden md:table-cell">Farm ponds, SuDS basins, small reservoirs</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden lg:table-cell">Depth chart, volume calculation</td>
                      </tr>
                      <tr className="bg-background-alt">
                        <td className="py-3 px-4 text-text-primary font-medium">River Section<span className="block text-sm text-text-secondary font-normal">Up to 1km stretch</span></td>
                        <td className="py-3 px-4 text-gold font-bold">£1,200+</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden md:table-cell">Flood modelling, habitat surveys, bridge works</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden lg:table-cell">Cross-sections, bed profile, DTM</td>
                      </tr>
                      <tr className="bg-white">
                        <td className="py-3 px-4 text-text-primary font-medium">Large Reservoir/Lake<span className="block text-sm text-text-secondary font-normal">1+ hectare water area</span></td>
                        <td className="py-3 px-4 text-gold font-bold">£2,000+</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden md:table-cell">Water supply reservoirs, large lakes</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden lg:table-cell">Full bathymetric model & report</td>
                      </tr>
                      <tr className="bg-background-alt">
                        <td className="py-3 px-4 text-text-primary font-medium">Coastal/Estuarine<span className="block text-sm text-text-secondary font-normal">Complex environments</span></td>
                        <td className="py-3 px-4 text-gold font-bold">POA</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden md:table-cell">Harbour, marina, coastal erosion studies</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden lg:table-cell">Custom scope & reporting</td>
                      </tr>
                      <tr className="bg-teal/10">
                        <td className="py-3 px-4 text-teal font-bold">Topo-Bathy Combined</td>
                        <td className="py-3 px-4 text-teal font-bold">+30%</td>
                        <td className="py-3 px-4 text-teal text-sm font-medium hidden md:table-cell">Add to any survey above</td>
                        <td className="py-3 px-4 text-teal text-sm font-medium hidden lg:table-cell">Merged above/below water model</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-text-secondary text-sm mb-6 italic">
                  *Guide prices include standard deliverables. Final quotation depends on water body complexity, access, and specific requirements.
                </p>

                {/* What affects your quote */}
                <h3 className="font-bold text-teal mb-3">Factors Influencing Your Quote</h3>
                <ul className="grid grid-cols-2 gap-2 mb-6">
                  {['Water body area & depth', 'Accessibility & terrain', 'Required transect density', 'Combined topo-bathy needs'].map((factor, index) => (
                    <li key={index} className="flex items-center gap-2 text-text-secondary">
                      <svg className="w-4 h-4 text-gold flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm">{factor}</span>
                    </li>
                  ))}
                </ul>

                <p className="text-text-secondary leading-relaxed mb-6">
                  Compared to deploying a manned survey vessel with crew, a drone bathymetric survey typically saves <span className="text-gold font-semibold">30-50%</span> on costs and can be mobilised far more quickly. Send us your site details and we will provide a tailored quotation within 24 hours.
                </p>

                {/* CTA Banner */}
                <div className="bg-teal rounded-xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-center sm:text-left">
                    <p className="text-white font-semibold">Ready to receive a quote for your bathymetric survey?</p>
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

              {/* Drone vs Boat-Based Bathymetric Surveys */}
              <div>
                <h2 id="drone-vs-boat" className="text-2xl md:text-3xl font-bold text-teal mb-4 scroll-mt-32">
                  How Do <span className="text-gold">Drone Bathymetric Surveys</span> Compare to Boat-Based Methods?
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed mb-4">
                  Traditional bathymetric surveys require a manned vessel equipped with sonar systems, boat launch access, trained crew, and marine safety equipment. A drone bathymetric survey eliminates these logistical barriers. We operate from the bank or shoreline with no boat launch infrastructure required. The drone navigates precise survey lines autonomously while the sonar payload captures depth readings. This approach is particularly advantageous for shallow water bodies, overgrown banks, and ecologically sensitive environments.
                </p>
                {/* Comparison Cards */}
                <div className="mt-8">
                  <h3 className="text-center font-bold text-teal text-xl mb-6">Why Choose Drone Over Boat-Based?</h3>
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
                            <h4 className="text-white font-bold text-lg">Drone Bathymetric Survey</h4>
                            <p className="text-gold text-sm font-medium">Rapid, non-invasive & versatile</p>
                          </div>
                        </div>
                        <div className="space-y-3">
                          {[
                            { Icon: Clock, text: 'No vessel mobilisation needed' },
                            { Icon: ShieldCheck, text: 'Minimal ecological disturbance' },
                            { Icon: PoundSterling, text: '30-50% cost reduction' },
                            { Icon: Layers, text: 'Combined topo-bathy capability' },
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
                            <h4 className="text-text-primary font-bold text-lg">Boat-Based Survey</h4>
                            <p className="text-text-secondary text-sm font-medium">Vessel, crew & launch access</p>
                          </div>
                        </div>
                        <div className="space-y-3">
                          {[
                            { text: 'Requires boat launch infrastructure', negative: true },
                            { text: 'Disturbs aquatic habitats', negative: true },
                            { text: 'Higher mobilisation costs', negative: true },
                            { text: 'Limited in shallow water', negative: true },
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
                    <p className="text-text-secondary text-sm mb-2">Unsure which approach suits your water body?</p>
                    <QuoteButton className="text-gold font-semibold hover:underline inline-flex items-center gap-1">
                      Get specialist advice
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </QuoteButton>
                  </div>
                </div>
              </div>

              {/* What Accuracy Can Be Achieved? */}
              <div>
                <h2 id="bathymetric-accuracy" className="text-2xl md:text-3xl font-bold text-teal mb-4 scroll-mt-32">
                  What Accuracy Can a <span className="text-gold">Drone Bathymetric Survey</span> Achieve?
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed mb-4">
                  Drone-deployed echo sounders typically achieve depth accuracy of +/-5cm in calm water conditions. Positional accuracy is maintained through RTK GPS corrections on the drone, ensuring each depth reading is precisely georeferenced. In optimal conditions, our surveys produce bathymetric models with a spatial resolution of 0.5-1 metre. For combined topo-bathymetric surveys, the aerial photogrammetry component achieves 2-3cm accuracy on surrounding terrain, providing a seamless transition between above-water and below-water data. All outputs are referenced to Ordnance Datum Newlyn (ODN) or your specified vertical datum.
                </p>
              </div>

              {/* Where Are Drone Bathymetric Surveys Used? */}
              <div>
                <h2 id="bathymetric-applications" className="text-2xl md:text-3xl font-bold text-teal mb-4 scroll-mt-32">
                  Where Are <span className="text-gold">Drone Bathymetric Surveys</span> Used?
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed mb-6">
                  Drone bathymetric surveys serve a wide range of industries and environmental applications. Here are the principal areas where our clients derive the greatest value:
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-background-alt rounded-xl p-6">
                    <Waves className="w-8 h-8 text-gold mb-3" strokeWidth={1.5} />
                    <h3 className="font-bold text-teal mb-2">Flood Risk Assessment</h3>
                    <p className="text-text-secondary text-sm">River channel surveys providing cross-sectional data for hydraulic modelling, <Link href="/services/drone-flood-risk-survey" className="text-gold hover:underline">flood mapping</Link>, and Environment Agency reporting requirements.</p>
                  </div>
                  <div className="bg-background-alt rounded-xl p-6">
                    <Droplets className="w-8 h-8 text-gold mb-3" strokeWidth={1.5} />
                    <h3 className="font-bold text-teal mb-2">Reservoir Capacity</h3>
                    <p className="text-text-secondary text-sm">Accurate volume calculations for water supply reservoirs, enabling storage capacity assessment and sedimentation monitoring over time.</p>
                  </div>
                  <div className="bg-background-alt rounded-xl p-6">
                    <Fish className="w-8 h-8 text-gold mb-3" strokeWidth={1.5} />
                    <h3 className="font-bold text-teal mb-2">Ecological & Habitat Surveys</h3>
                    <p className="text-text-secondary text-sm">Non-invasive bed mapping for habitat assessment, fish passage studies, and <Link href="/services/drone-environmental-survey" className="text-gold hover:underline">environmental impact assessments</Link> without disturbing sensitive ecosystems.</p>
                  </div>
                  <div className="bg-background-alt rounded-xl p-6">
                    <Anchor className="w-8 h-8 text-gold mb-3" strokeWidth={1.5} />
                    <h3 className="font-bold text-teal mb-2">Marina & Harbour Surveys</h3>
                    <p className="text-text-secondary text-sm">Siltation monitoring, dredging planning, and navigational depth verification for ports, marinas, and tidal waterways.</p>
                  </div>
                  <div className="bg-background-alt rounded-xl p-6">
                    <Building2 className="w-8 h-8 text-gold mb-3" strokeWidth={1.5} />
                    <h3 className="font-bold text-teal mb-2">Civil Engineering</h3>
                    <p className="text-text-secondary text-sm">Pre-construction surveys for bridge foundations, culvert design, river crossing assessments, and waterway infrastructure projects.</p>
                  </div>
                  <div className="bg-background-alt rounded-xl p-6">
                    <ShieldCheck className="w-8 h-8 text-gold mb-3" strokeWidth={1.5} />
                    <h3 className="font-bold text-teal mb-2">Dam Safety & Compliance</h3>
                    <p className="text-text-secondary text-sm">Reservoir bed surveys for dam safety inspections, sediment accumulation assessment, and Reservoirs Act compliance reporting.</p>
                  </div>
                </div>

                {/* CTA after applications */}
                <div className="mt-8 text-center">
                  <p className="text-text-secondary mb-4">Have a water body requiring survey?</p>
                  <QuoteButton className="btn btn-primary btn-shimmer">
                    Discuss Your Project
                  </QuoteButton>
                </div>
              </div>

              {/* What Deliverables Do You Receive? */}
              <div>
                <h2 id="bathymetric-deliverables" className="text-2xl md:text-3xl font-bold text-teal mb-4 scroll-mt-32">
                  What Deliverables Do You Receive From a <span className="text-gold">Drone Bathymetric Survey</span>?
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed mb-6">
                  We tailor outputs to your project requirements, but our standard bathymetric survey packages include:
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-4 bg-background-alt rounded-xl p-4">
                    <div className="w-10 h-10 bg-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-teal">Bathymetric Depth Charts</h4>
                      <p className="text-text-secondary text-sm">Colour-graded depth maps showing the underwater topography with depth contours, referenced to Ordnance Datum or chart datum.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4 bg-background-alt rounded-xl p-4">
                    <div className="w-10 h-10 bg-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-teal">Cross-Section & Longitudinal Profiles</h4>
                      <p className="text-text-secondary text-sm">Detailed channel and bed profiles at specified intervals for hydraulic modelling, design work, and flood risk assessment.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4 bg-background-alt rounded-xl p-4">
                    <div className="w-10 h-10 bg-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-teal">Volumetric Capacity Reports</h4>
                      <p className="text-text-secondary text-sm">Precise storage volume calculations at various water levels, enabling capacity assessment and sedimentation rate analysis.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4 bg-background-alt rounded-xl p-4">
                    <div className="w-10 h-10 bg-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Layers className="w-5 h-5 text-gold" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h4 className="font-bold text-teal">Topo-Bathymetric Merged Model</h4>
                      <p className="text-text-secondary text-sm">Seamless digital terrain model combining above-water photogrammetry with below-water sonar data into a unified surface.</p>
                    </div>
                  </li>
                </ul>

                {/* CTA after deliverables */}
                <div className="mt-6 p-4 bg-gold/10 border border-gold/20 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4">
                  <p className="text-teal font-semibold text-center sm:text-left">Need specific outputs?</p>
                  <QuoteButton className="btn btn-primary btn-shimmer whitespace-nowrap">Discuss Requirements</QuoteButton>
                </div>
              </div>

              {/* How Long Does a Survey Take? */}
              <div>
                <h2 id="survey-timeline" className="text-2xl md:text-3xl font-bold text-teal mb-4 scroll-mt-32">
                  How Long Does a <span className="text-gold">Drone Bathymetric Survey</span> Take?
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed mb-6">
                  On-site data collection for a small pond or lake can be completed within 2-3 hours. A 1km river section typically requires half a day including setup. Processing bathymetric data takes longer than standard aerial surveys due to the complexity of merging sonar readings with positional data. Standard reports are delivered within 5-7 working days, with complex topo-bathymetric models requiring 7-10 days.
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
                        <td className="py-3 px-4 text-text-primary font-medium">Planning & Preparation</td>
                        <td className="py-3 px-4 text-gold font-bold">2-5 days</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden md:table-cell">Site assessment, flight planning, access permissions</td>
                      </tr>
                      <tr className="bg-background-alt">
                        <td className="py-3 px-4 text-text-primary font-medium">On-Site Data Capture</td>
                        <td className="py-3 px-4 text-gold font-bold">2 hrs - 1 day</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden md:table-cell">Sonar deployment, drone flights, quality checks</td>
                      </tr>
                      <tr className="bg-white">
                        <td className="py-3 px-4 text-text-primary font-medium">Data Processing</td>
                        <td className="py-3 px-4 text-gold font-bold">2-4 days</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden md:table-cell">Depth filtering, georeferencing, model generation</td>
                      </tr>
                      <tr className="bg-background-alt">
                        <td className="py-3 px-4 text-text-primary font-medium">Report & Deliverables</td>
                        <td className="py-3 px-4 text-gold font-bold">2-3 days</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden md:table-cell">Chart production, volume calculations, reporting</td>
                      </tr>
                      <tr className="bg-teal/10">
                        <td className="py-3 px-4 text-teal font-bold">Total (Standard)</td>
                        <td className="py-3 px-4 text-teal font-bold">5-10 working days</td>
                        <td className="py-3 px-4 text-teal text-sm font-medium hidden md:table-cell">From site visit to final delivery</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* CTA after timeline */}
                <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
                  <QuoteButton className="btn btn-primary btn-shimmer">
                    Book Your Survey
                  </QuoteButton>
                  <a href="tel:+441334804554" className="btn btn-outline flex items-center justify-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Speak With Peter
                  </a>
                </div>
              </div>

              {/* How to Choose a Provider */}
              <div>
                <h2 id="choose-provider" className="text-2xl md:text-3xl font-bold text-teal mb-4 scroll-mt-32">
                  How to Choose a <span className="text-gold">Drone Bathymetric Survey</span> Provider
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed mb-4">
                  Bathymetric surveying is a specialist discipline requiring specific equipment and expertise. When evaluating providers, we recommend checking these essential criteria:
                </p>
                <ul className="space-y-3 mb-6">
                  {[
                    { bold: 'CAA certification', text: ' – Valid GVC permissions for commercial drone operations over and near water' },
                    { bold: 'Sonar equipment', text: ' – Purpose-built drone-deployable echo sounders with adequate depth range and accuracy' },
                    { bold: 'Hydrographic experience', text: ' – Proven track record in bathymetric surveys, not just standard aerial mapping' },
                    { bold: 'Insurance cover', text: ' – Public liability and professional indemnity covering over-water operations' },
                    { bold: 'Processing capability', text: ' – In-house ability to merge bathymetric and topographic datasets' },
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-gold mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-text-primary"><strong>{item.bold}</strong>{item.text}</span>
                    </li>
                  ))}
                </ul>
                {/* CTA after provider section */}
                <div className="bg-teal rounded-xl p-5">
                  <p className="text-white font-semibold mb-3">Ready to work with a specialist bathymetric survey provider?</p>
                  <div className="flex flex-wrap gap-3">
                    <QuoteButton className="px-5 py-2.5 rounded-full bg-gold text-teal-dark font-semibold hover:bg-gold/90 transition-colors text-sm btn-shimmer">
                      Get In Touch
                    </QuoteButton>
                    <a href="tel:+441334804554" className="flex items-center gap-2 px-4 py-2.5 rounded-full border border-white/30 text-white hover:bg-white/10 transition-colors text-sm font-medium">
                      +44 1334 804554
                    </a>
                  </div>
                </div>
              </div>

              {/* Combined Topo-Bathymetric Surveys */}
              <div>
                <h2 id="topo-bathymetric" className="text-2xl md:text-3xl font-bold text-teal mb-4 scroll-mt-32">
                  Combined <span className="text-gold">Topo-Bathymetric Surveys</span>
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed mb-6">
                  One of the most powerful advantages of drone-based bathymetric surveying is the ability to capture both above-water terrain and below-water bed data in a single site visit. This produces a seamless digital terrain model spanning from the surrounding landscape to the bed below. Combined topo-bathymetric models are essential for flood risk assessment, river restoration projects, and reservoir management. Traditional approaches would require separate survey teams with different equipment, often on different days.
                </p>

                {/* Cost Comparison Visual */}
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-background-alt border border-border rounded-xl p-6">
                    <h4 className="font-bold text-teal mb-4">Boat-Based Survey Costs</h4>
                    <ul className="space-y-2 text-text-secondary text-sm">
                      <li className="flex justify-between">
                        <span>Vessel mobilisation & crew</span>
                        <span className="font-semibold">£1,500-£4,000</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Sonar equipment hire</span>
                        <span className="font-semibold">£500-£1,500</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Separate topographic survey</span>
                        <span className="font-semibold">£800-£2,000</span>
                      </li>
                      <li className="flex justify-between border-t border-border pt-2 mt-2">
                        <span className="font-bold text-teal">Typical Total</span>
                        <span className="font-bold text-red-500">£2,800-£7,500</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-teal/10 border border-teal/20 rounded-xl p-6">
                    <h4 className="font-bold text-teal mb-4">Drone Topo-Bathymetric Survey</h4>
                    <ul className="space-y-2 text-text-secondary text-sm">
                      <li className="flex justify-between">
                        <span>Combined drone survey</span>
                        <span className="font-semibold">£1,000-£2,600</span>
                      </li>
                      <li className="flex justify-between">
                        <span>No vessel required</span>
                        <span className="font-semibold text-green-600">Included</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Merged topo-bathy model</span>
                        <span className="font-semibold text-green-600">Included</span>
                      </li>
                      <li className="flex justify-between border-t border-teal/20 pt-2 mt-2">
                        <span className="font-bold text-teal">Typical Total</span>
                        <span className="font-bold text-gold">£1,000-£2,600</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Final CTA */}
                <div className="bg-gradient-to-r from-teal to-teal-dark rounded-xl p-6 text-center">
                  <h3 className="text-white font-bold text-xl mb-2">Ready to Survey Your Water Body?</h3>
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
                  With specialist experience in over-water drone operations and bathymetric surveying, Peter personally manages every project to ensure accurate, reliable data you can depend on.
                </p>
              </div>

              {/* Table of Contents */}
              <div className="bg-background-alt border border-border rounded-2xl p-6">
                <h3 className="text-teal font-bold text-lg mb-4">
                  Quick Guide: Drone Bathymetric Surveys
                </h3>
                <nav className="space-y-2">
                  {[
                    { id: 'what-is-bathymetric-survey', label: 'What Is a Drone Bathymetric Survey?' },
                    { id: 'bathymetric-survey-cost', label: 'How Much Does It Cost?' },
                    { id: 'drone-vs-boat', label: 'Drone vs Boat-Based Surveys' },
                    { id: 'bathymetric-accuracy', label: 'What Accuracy Can Be Achieved?' },
                    { id: 'bathymetric-applications', label: 'Where Are They Used?' },
                    { id: 'bathymetric-deliverables', label: 'What Deliverables Do You Receive?' },
                    { id: 'survey-timeline', label: 'How Long Does a Survey Take?' },
                    { id: 'choose-provider', label: 'How to Choose a Provider' },
                    { id: 'topo-bathymetric', label: 'Combined Topo-Bathymetric Surveys' },
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
                    'Bathymetric depth charts',
                    'Cross-section profiles',
                    'Volumetric capacity reports',
                    'Topo-bathymetric merged models',
                    'Georeferenced survey data',
                    'Professional survey reports',
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
                  Discuss Your Survey Project
                </h3>
                <p className="text-white/70 text-sm mb-4">
                  Get specialist guidance and tailored pricing.
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
            Related Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link
              href="/services/drone-surveys"
              className="bg-white border border-border rounded-xl p-6 hover:border-gold hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-teal font-bold text-lg mb-2">Drone Surveys</h3>
              <p className="text-text-secondary text-sm">
                Comprehensive aerial surveys delivering topographic data and 3D mapping for any site.
              </p>
            </Link>
            <Link
              href="/services/drone-coastal-survey"
              className="bg-white border border-border rounded-xl p-6 hover:border-gold hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-teal font-bold text-lg mb-2">Coastal Surveys</h3>
              <p className="text-text-secondary text-sm">
                Shoreline monitoring, erosion tracking, and coastal change analysis using drone technology.
              </p>
            </Link>
            <Link
              href="/services/drone-environmental-survey"
              className="bg-white border border-border rounded-xl p-6 hover:border-gold hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-teal font-bold text-lg mb-2">Environmental Surveys</h3>
              <p className="text-text-secondary text-sm">
                Habitat mapping, ecological assessments, and environmental monitoring from the air.
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
