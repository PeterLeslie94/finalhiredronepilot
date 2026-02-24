import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import QuoteButton from '@/components/QuoteButton';
import Testimonials from '@/components/Testimonials';
import FloatingCTA from '@/components/FloatingCTA';
import EquipmentSection from '@/components/EquipmentSection';
import { ServiceSchema, BreadcrumbSchema } from '@/components/SchemaMarkup';
import { ClientLogoMarqueeInline } from '@/components/ClientLogoMarquee';
import { Building2, Landmark, Church, Home, Factory, Ruler, Camera, Layers } from 'lucide-react';

export const metadata: Metadata = {
  title: 'UAV Elevation Survey Solutions | Building Facade Survey UK | Hire Drone Pilot',
  description: 'Expert UAV elevation survey solutions throughout the UK. Orthorectified facade imagery, precise measurements, and detailed building elevations. CAA authorised drone operators.',
  keywords: 'drone elevation survey, drone building facade survey, drone facade mapping, drone elevation drawings, drone building survey, drone orthorectified facade, drone architectural survey uk',
};

export default function DroneElevationSurveyPage() {
  return (
    <>
      <ServiceSchema
        name="UAV Elevation Survey Solutions"
        description="Expert UAV elevation survey solutions throughout the UK. Orthorectified facade imagery, precise measurements, and detailed building elevations. CAA authorised drone operators."
        url="https://hiredronepilot.uk/services/drone-elevation-survey"
      />
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://hiredronepilot.uk" },
        { name: "Services", url: "https://hiredronepilot.uk/services" },
        { name: "UAV Elevation Survey Solutions", url: "https://hiredronepilot.uk/services/drone-elevation-survey" }
      ]} />

      {/* Hero Section */}
      <section className="relative min-h-[800px] md:min-h-[600px] flex items-start bg-teal -mt-[120px] pt-[120px] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/services/elevation/elevation-hero.avif"
            alt="Professional drone capturing detailed building facade and elevation imagery"
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
              Drone Elevation Survey Service
            </h1>
            <p className="text-white/80 text-lg md:text-xl mb-8">
              Capture detailed building facades and elevations with precision drone technology. Orthorectified imagery and precise measurements without scaffolding or access equipment.
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

              {/* Understanding UAV Elevation Surveys */}
              <div>
                <h2 id="what-is-elevation" className="text-2xl md:text-3xl font-bold text-teal mb-4 scroll-mt-32">
                  Understanding <span className="text-gold">Drone Elevation Surveys</span>
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed mb-4">
                  A UAV elevation survey captures detailed imagery of building facades and vertical surfaces using our expert drone systems. Unlike ground-based photography, our drones fly at precise distances parallel to each face of a building, capturing high-resolution images that we process into orthorectified elevation drawings.
                </p>
                <p className="text-text-secondary text-lg leading-relaxed">
                  At Hire Drone Pilot, we use advanced photogrammetry techniques to transform these images into scale-accurate facade records. The resulting elevation drawings show true dimensions—you can measure directly from them with millimetre precision. This makes UAV elevation surveys invaluable for architects, heritage specialists, and anyone needing detailed building records without expensive scaffolding.
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
                          "Have questions? Ring me directly - I'm happy to discuss your project requirements."
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
                        Survey-Grade Elevation Data,
                        <span className="text-gold block relative inline-block">
                          No Scaffolding Required
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
                          'Orthorectified facade images',
                          'Scaled elevation drawings',
                          '3D facade models',
                          'CAD-ready files (DXF/DWG)',
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
                        Ready in 3-5 working days
                      </p>
                    </div>

                    {/* Right: Why choose us */}
                    <div>
                      <h3 className="text-gold font-bold text-sm uppercase tracking-wider mb-3">
                        Why Use HireDronePilot
                      </h3>
                      <ul className="space-y-2.5">
                        {[
                          'CAA authorised & fully insured',
                          'Specialist facade processing',
                          'Latest DJI technology',
                          'UK-wide coverage',
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
                        <span>Relied upon by architects, heritage consultants & property professionals throughout the UK.</span>
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

              {/* UAV Elevation Survey Pricing Guide */}
              <div>
                <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-6">
                  <Image
                    src="/images/services/elevation/elevation-cost.avif"
                    alt="Surveyor reviewing drone elevation survey data on tablet with UK building"
                    fill
                    className="object-cover"
                  />
                </div>
                <h2 id="elevation-cost" className="text-2xl md:text-3xl font-bold text-teal mb-4 scroll-mt-32">
                  <span className="text-gold">Drone Elevation Survey</span> Pricing Guide
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed mb-6">
                  Pricing depends on building size and complexity. Here is a guide to help you budget:
                </p>

                {/* Pricing Table */}
                <div className="rounded-xl overflow-hidden border border-border mb-6">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-teal">
                        <th className="text-left text-white font-semibold py-3 px-4">Project Type</th>
                        <th className="text-left text-white font-semibold py-3 px-4">Guide Price</th>
                        <th className="text-left text-white font-semibold py-3 px-4 hidden md:table-cell">Typical Applications</th>
                        <th className="text-left text-white font-semibold py-3 px-4 hidden lg:table-cell">Deliverables</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-white">
                        <td className="py-3 px-4 text-text-primary font-medium">Single Facade<span className="block text-sm text-text-secondary font-normal">1 elevation</span></td>
                        <td className="py-3 px-4 text-gold font-bold">£350+</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden md:table-cell">Shop fronts, feature walls, single-aspect buildings</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden lg:table-cell">Ortho image, elevation drawing</td>
                      </tr>
                      <tr className="bg-background-alt">
                        <td className="py-3 px-4 text-text-primary font-medium">Small Building<span className="block text-sm text-text-secondary font-normal">2-4 facades</span></td>
                        <td className="py-3 px-4 text-gold font-bold">£500+</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden md:table-cell">Residential properties, small commercial units</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden lg:table-cell">All facade orthos, elevation set</td>
                      </tr>
                      <tr className="bg-white">
                        <td className="py-3 px-4 text-text-primary font-medium">Medium Building<span className="block text-sm text-text-secondary font-normal">Multi-storey</span></td>
                        <td className="py-3 px-4 text-gold font-bold">£800+</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden md:table-cell">Office blocks, apartment buildings, schools</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden lg:table-cell">Full ortho suite + CAD files</td>
                      </tr>
                      <tr className="bg-background-alt">
                        <td className="py-3 px-4 text-text-primary font-medium">Large/Complex<span className="block text-sm text-text-secondary font-normal">Heritage/complex form</span></td>
                        <td className="py-3 px-4 text-gold font-bold">£1,200+</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden md:table-cell">Listed buildings, churches, historic estates</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden lg:table-cell">Full suite + 3D facade model</td>
                      </tr>
                      <tr className="bg-white">
                        <td className="py-3 px-4 text-text-primary font-medium">Multi-Building<span className="block text-sm text-text-secondary font-normal">Estate/campus</span></td>
                        <td className="py-3 px-4 text-gold font-bold">POA</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden md:table-cell">University campuses, housing estates, industrial parks</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden lg:table-cell">Bespoke scope & phased delivery</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-text-secondary text-sm mb-6 italic">
                  *Guide prices include standard deliverables. Final quote based on building height, access, and specific requirements.
                </p>

                {/* What influences your quotation */}
                <h3 className="font-bold text-teal mb-3">What influences your quotation?</h3>
                <ul className="grid grid-cols-2 gap-2 mb-6">
                  {['Building height & complexity', 'Number of facades', 'Access restrictions', 'Required deliverables'].map((factor, index) => (
                    <li key={index} className="flex items-center gap-2 text-text-secondary">
                      <svg className="w-4 h-4 text-gold flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm">{factor}</span>
                    </li>
                  ))}
                </ul>

                <p className="text-text-secondary leading-relaxed mb-6">
                  Our drone approach typically saves <span className="text-gold font-semibold">60-80%</span> compared to conventional scaffolding surveys. Contact us with your project details and we will provide a tailored quote within 24 hours.
                </p>

                {/* CTA Banner */}
                <div className="bg-teal rounded-xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-center sm:text-left">
                    <p className="text-white font-semibold">Ready to receive a quote for your project?</p>
                    <p className="text-white/70 text-sm">Free, no-obligation quotes within 24 hours</p>
                  </div>
                  <div className="flex gap-3">
                    <a href="tel:+441334804554" className="flex items-center gap-2 px-4 py-2.5 rounded-full border border-white/30 text-white hover:bg-white/10 transition-colors text-sm font-medium">
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

              {/* Comparing UAV Elevation Survey and Conventional Methods */}
              <div>
                <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-6">
                  <Image
                    src="/images/services/elevation/elevation-comparison.avif"
                    alt="Comparison of UAV elevation survey versus conventional scaffolding survey"
                    fill
                    className="object-cover"
                  />
                </div>
                <h2 id="elevation-vs-traditional" className="text-2xl md:text-3xl font-bold text-teal mb-4 scroll-mt-32">
                  Comparing <span className="text-gold">Drone Elevation Survey</span> and Conventional Methods
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed mb-4">
                  Conventional building elevation surveys typically require scaffolding, cherry pickers, or rope access to capture facade imagery at height. This means significant setup costs, site disruption, and health and safety considerations. A single facade on a three-storey building might need £2,000+ of scaffolding hire before any survey work begins.
                </p>
                <p className="text-text-secondary text-lg leading-relaxed mb-4">
                  UAV elevation surveys eliminate these access costs entirely. Our drones capture imagery from any height and angle without touching the building, working around obstacles and reaching areas that would be impractical or hazardous for conventional methods. We complete most elevation surveys in a single day with minimal site disruption.
                </p>
                {/* Technology Comparison Cards */}
                <div className="mt-8">
                  <h3 className="text-center font-bold text-teal text-xl mb-6">When to Select Each Method</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {/* UAV Card */}
                    <div className="relative bg-teal rounded-2xl p-6 overflow-hidden group hover:shadow-xl transition-shadow duration-300">
                      {/* Decorative elements */}
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
                            <h4 className="text-white font-bold text-lg">UAV Elevation Survey</h4>
                            <p className="text-gold text-sm font-medium">Rapid & cost-effective</p>
                          </div>
                        </div>
                        <div className="space-y-3">
                          {[
                            { Icon: Building2, text: 'Multi-storey buildings' },
                            { Icon: Landmark, text: 'Heritage & listed structures' },
                            { Icon: Factory, text: 'Large industrial facades' },
                            { Icon: Home, text: 'Difficult access sites' },
                          ].map((item, i) => (
                            <div key={i} className="flex items-center gap-3 bg-white/10 rounded-lg px-4 py-2.5">
                              <item.Icon className="w-5 h-5 text-gold flex-shrink-0" strokeWidth={1.5} />
                              <span className="text-white/90 font-medium">{item.text}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Conventional Card */}
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
                            <svg className="w-6 h-6 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                            </svg>
                          </div>
                          <div>
                            <h4 className="text-teal font-bold text-lg">Conventional Methods</h4>
                            <p className="text-text-secondary text-sm font-medium">Scaffolding/access required</p>
                          </div>
                        </div>
                        <div className="space-y-3">
                          {[
                            { Icon: Ruler, text: 'Interior face surveys' },
                            { Icon: Camera, text: 'Close-range detail capture' },
                            { Icon: Layers, text: 'Material sampling needed' },
                            { Icon: Building2, text: 'No-fly zone restrictions' },
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

                  {/* Uncertain which? CTA */}
                  <div className="mt-6 text-center">
                    <p className="text-text-secondary text-sm mb-2">Uncertain which method suits your project?</p>
                    <QuoteButton className="text-gold font-semibold hover:underline inline-flex items-center gap-1">
                      Request expert guidance
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </QuoteButton>
                  </div>
                </div>
              </div>

              {/* Precision Levels for UAV Elevation Surveys */}
              <div>
                <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-6">
                  <Image
                    src="/images/services/elevation/elevation-accuracy.avif"
                    alt="Building facade with measurement precision markers and survey reference points"
                    fill
                    className="object-cover"
                  />
                </div>
                <h2 id="elevation-accuracy" className="text-2xl md:text-3xl font-bold text-teal mb-4 scroll-mt-32">
                  Precision Levels for <span className="text-gold">Drone Elevation Surveys</span>
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed mb-4">
                  Our UAV elevation surveys routinely achieve precision of ±5-10mm across the facade surface when using ground control points. This level of precision exceeds the requirements for most architectural, heritage, and planning applications.
                </p>
                <p className="text-text-secondary text-lg leading-relaxed">
                  We achieve this through careful flight planning at optimal distances from the building, high-overlap image capture, and rigorous photogrammetric processing. For projects requiring the highest precision, we establish survey control networks and validate measurements against known references. The resulting orthorectified images are true-to-scale—you can measure window dimensions, crack widths, or architectural details directly from the deliverables.
                </p>
              </div>

              {/* Applications */}
              <div>
                <h2 id="elevation-applications" className="text-2xl md:text-3xl font-bold text-teal mb-4 scroll-mt-32">
                  <span className="text-gold">Drone Elevation Survey</span> Applications
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed mb-6">
                  UAV elevation surveys serve a wide range of industries and purposes. Here are the key applications where our clients see the greatest value:
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-background-alt rounded-xl p-6">
                    <h3 className="font-bold text-teal mb-2">Heritage & Conservation</h3>
                    <p className="text-text-secondary text-sm">Recording listed buildings, condition surveys for conservation plans, and detailed facade documentation for heritage applications.</p>
                  </div>
                  <div className="bg-background-alt rounded-xl p-6">
                    <h3 className="font-bold text-teal mb-2">Architecture & Design</h3>
                    <p className="text-text-secondary text-sm">As-built facade records for refurbishment projects, extension designs, and building information modelling (BIM) input.</p>
                  </div>
                  <div className="bg-background-alt rounded-xl p-6">
                    <h3 className="font-bold text-teal mb-2">Property & Asset Management</h3>
                    <p className="text-text-secondary text-sm">Building condition assessments, facade inspection records, and portfolio documentation for estates and facilities teams.</p>
                  </div>
                  <div className="bg-background-alt rounded-xl p-6">
                    <h3 className="font-bold text-teal mb-2">Planning & Development</h3>
                    <p className="text-text-secondary text-sm">Accurate elevation drawings for planning applications, impact assessments, and development proposals.</p>
                  </div>
                  <div className="bg-background-alt rounded-xl p-6">
                    <h3 className="font-bold text-teal mb-2">Insurance & Claims</h3>
                    <p className="text-text-secondary text-sm">Pre and post-loss documentation, defect surveys, and detailed records for dispute resolution and claims support.</p>
                  </div>
                  <div className="bg-background-alt rounded-xl p-6">
                    <h3 className="font-bold text-teal mb-2">Facade Maintenance</h3>
                    <p className="text-text-secondary text-sm">Identifying repair requirements, scheduling maintenance works, and tracking building condition over time.</p>
                  </div>
                </div>

                {/* CTA after applications */}
                <div className="mt-8 text-center">
                  <p className="text-text-secondary mb-4">Have a building that needs elevation survey?</p>
                  <div className="flex flex-wrap justify-center gap-3">
                    <QuoteButton className="btn btn-primary btn-shimmer">
                      Share Your Requirements
                    </QuoteButton>
                    <a href="tel:+441334804554" className="btn btn-outline">
                      Phone +44 1334 804554
                    </a>
                  </div>
                </div>
              </div>

              {/* Can UAV elevation surveys capture all building faces? */}
              <div>
                <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-6">
                  <Image
                    src="/images/services/elevation/elevation-feature.avif"
                    alt="Orthorectified facade image with CAD overlay measurements on screen"
                    fill
                    className="object-cover"
                  />
                </div>
                <h2 id="all-building-faces" className="text-2xl md:text-3xl font-bold text-teal mb-4 scroll-mt-32">
                  Can <span className="text-gold">Drone Elevation Surveys</span> Capture All Building Faces?
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed mb-4">
                  In most cases, yes. Our drones can capture facades that face any direction, including north-facing elevations that rarely receive direct sunlight. We plan flights to optimise lighting conditions across all faces, often capturing different elevations at different times of day for consistent image quality.
                </p>
                <p className="text-text-secondary text-lg leading-relaxed">
                  However, some situations present challenges. Buildings very close to boundaries may have restricted airspace for drone operations. Internal courtyards or light wells with limited overhead clearance can be difficult to access. In these cases, we assess each facade individually and advise on the best approach—sometimes combining drone capture with ground-based photography for complete coverage. We will always be upfront about any limitations during the quotation process.
                </p>
              </div>

              {/* UAV Elevation Survey Outputs */}
              <div>
                <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-6">
                  <Image
                    src="/images/services/elevation/elevation-deliverables.avif"
                    alt="Building elevation drawings and facade models displayed on computer screen"
                    fill
                    className="object-cover"
                  />
                </div>
                <h2 id="elevation-deliverables" className="text-2xl md:text-3xl font-bold text-teal mb-4 scroll-mt-32">
                  <span className="text-gold">Drone Elevation Survey</span> Outputs
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed mb-6">
                  We tailor deliverables to your project requirements, but our standard UAV elevation survey outputs include:
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-4 bg-background-alt rounded-xl p-4">
                    <div className="w-10 h-10 bg-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-teal">Orthorectified Facade Images</h4>
                      <p className="text-text-secondary text-sm">True-to-scale photographic images of each facade, corrected for perspective distortion. Measure directly from the image in any software.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4 bg-background-alt rounded-xl p-4">
                    <div className="w-10 h-10 bg-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-teal">Elevation Drawings</h4>
                      <p className="text-text-secondary text-sm">Professional architectural elevation drawings with key dimensions annotated. Supplied as PDF and CAD formats.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4 bg-background-alt rounded-xl p-4">
                    <div className="w-10 h-10 bg-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-teal">3D Facade Models</h4>
                      <p className="text-text-secondary text-sm">Textured 3D mesh models of building facades for visualisation, BIM integration, and detailed analysis.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4 bg-background-alt rounded-xl p-4">
                    <div className="w-10 h-10 bg-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-teal">CAD Files (DXF/DWG)</h4>
                      <p className="text-text-secondary text-sm">Ready-to-use vector files compatible with AutoCAD, Revit, and other design software. Scale-accurate and georeferenced.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4 bg-background-alt rounded-xl p-4">
                    <div className="w-10 h-10 bg-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-teal">Measurement Data</h4>
                      <p className="text-text-secondary text-sm">Comprehensive measurement reports including overall dimensions, window schedules, and feature locations as required.</p>
                    </div>
                  </li>
                </ul>

                {/* CTA after deliverables */}
                <div className="mt-6 p-5 bg-gold/10 border border-gold/20 rounded-xl">
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-teal font-semibold text-center sm:text-left">Need specific deliverables for your project?</p>
                    <QuoteButton className="btn btn-primary btn-shimmer whitespace-nowrap">
                      Share Requirements
                    </QuoteButton>
                  </div>
                </div>
              </div>

              {/* UAV Elevation Survey Timeline */}
              <div>
                <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-6">
                  <Image
                    src="/images/services/elevation/elevation-timeline.avif"
                    alt="Drone pilot preparing for elevation survey flight at UK building"
                    fill
                    className="object-cover"
                  />
                </div>
                <h2 id="survey-timeline" className="text-2xl md:text-3xl font-bold text-teal mb-4 scroll-mt-32">
                  <span className="text-gold">Drone Elevation Survey</span> Timeline
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed mb-4">
                  On-site data capture is typically completed in a single visit. A small building with four facades takes 1-2 hours of flight time. Larger or more complex buildings may require half a day. We work efficiently to minimise disruption to building occupants and neighbours.
                </p>
                <p className="text-text-secondary text-lg leading-relaxed mb-6">
                  Processing and delivery depends on project complexity. Standard deliverables for a typical building are ready within 3-5 working days. Complex heritage projects with detailed annotation requirements may take 5-7 days. For urgent projects, we offer expedited processing—ask about rapid-track options when you get in touch.
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
                        <td className="py-3 px-4 text-gold font-bold">1-2 days</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden md:table-cell">Flight planning, airspace clearance, site logistics</td>
                      </tr>
                      <tr className="bg-background-alt">
                        <td className="py-3 px-4 text-text-primary font-medium">On-Site Data Capture</td>
                        <td className="py-3 px-4 text-gold font-bold">2-4 hours</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden md:table-cell">Drone flights, control point setup, image verification</td>
                      </tr>
                      <tr className="bg-white">
                        <td className="py-3 px-4 text-text-primary font-medium">Image Processing</td>
                        <td className="py-3 px-4 text-gold font-bold">1-2 days</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden md:table-cell">Photogrammetric alignment, orthorectification, QC</td>
                      </tr>
                      <tr className="bg-background-alt">
                        <td className="py-3 px-4 text-text-primary font-medium">Deliverable Production</td>
                        <td className="py-3 px-4 text-gold font-bold">1-2 days</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden md:table-cell">CAD export, elevation drawings, final outputs</td>
                      </tr>
                      <tr className="bg-teal/10">
                        <td className="py-3 px-4 text-teal font-bold">Total (Standard)</td>
                        <td className="py-3 px-4 text-teal font-bold">3-5 working days</td>
                        <td className="py-3 px-4 text-teal text-sm font-medium hidden md:table-cell">From site visit to final delivery</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Expedited option callout */}
                <div className="mt-4 flex items-start gap-3 bg-gold/10 border border-gold/30 rounded-lg p-4">
                  <svg className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <div>
                    <p className="text-teal font-semibold text-sm">Expedited Processing Available</p>
                    <p className="text-text-secondary text-sm">Require faster delivery? 24-48 hour turnaround available for urgent projects.</p>
                  </div>
                </div>

                {/* CTA after timeline */}
                <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
                  <QuoteButton className="btn btn-primary btn-shimmer">
                    Begin Your Project
                  </QuoteButton>
                  <a href="tel:+441334804554" className="btn btn-outline flex items-center justify-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Speak with Peter
                  </a>
                </div>
              </div>

              {/* Selecting a UAV Elevation Survey Provider */}
              <div>
                <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-6">
                  <Image
                    src="/images/services/elevation/elevation-provider.avif"
                    alt="Survey team meeting with architect client in modern office"
                    fill
                    className="object-cover"
                  />
                </div>
                <h2 id="choose-provider" className="text-2xl md:text-3xl font-bold text-teal mb-4 scroll-mt-32">
                  Selecting a <span className="text-gold">Drone Elevation Survey</span> Provider
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed mb-4">
                  Not all drone survey providers have the expertise for elevation work. When evaluating providers, we recommend checking these key factors:
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gold mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-text-primary"><strong>CAA authorisation</strong> – Ensure they hold valid GVC or legacy PfCO permissions for commercial operations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gold mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-text-primary"><strong>Professional insurance</strong> – Public liability and professional indemnity cover appropriate to building survey work</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gold mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-text-primary"><strong>Facade survey experience</strong> – Elevation surveys require specialist knowledge in vertical photogrammetry</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gold mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-text-primary"><strong>CAD capability</strong> – Ask about their processing workflow and deliverable formats</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gold mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-text-primary"><strong>Relevant case studies</strong> – Request examples of similar building surveys they've completed</span>
                  </li>
                </ul>
                <p className="text-text-secondary text-lg leading-relaxed mb-6">
                  At Hire Drone Pilot, we satisfy every criterion. We are CAA authorised, fully insured, and have delivered elevation surveys for heritage buildings, commercial properties, and residential developments throughout the UK.
                </p>

                {/* CTA after provider section */}
                <div className="bg-teal rounded-xl p-5">
                  <p className="text-white font-semibold mb-3">Ready to work with a reliable elevation survey provider?</p>
                  <div className="flex flex-wrap gap-3">
                    <QuoteButton className="px-5 py-2.5 rounded-full bg-gold text-teal-dark font-semibold hover:bg-gold/90 transition-colors text-sm btn-shimmer">
                      Speak with Peter
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
                  Is <span className="text-gold">Drone Elevation Survey</span> More Affordable Than Conventional Methods?
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed mb-4">
                  In almost every case, significantly more affordable. Conventional elevation surveys require physical access to the building face—typically via scaffolding, cherry picker, or rope access. For a three-storey building, scaffolding alone can cost £2,000-5,000 before any survey work begins. Add the surveyor's time, traffic management, and building occupation disruption, and costs escalate rapidly.
                </p>
                <p className="text-text-secondary text-lg leading-relaxed mb-6">
                  Our UAV elevation surveys eliminate these access costs entirely. We capture the same quality imagery—often better—without touching the building. The total cost typically represents a <span className="text-gold font-semibold">60-80% saving</span> compared to conventional scaffolding-based surveys, while delivering faster turnaround and causing minimal site disruption. For multi-storey or difficult-access buildings, the savings are even more significant.
                </p>

                {/* Final CTA */}
                <div className="bg-gradient-to-r from-teal to-teal-dark rounded-xl p-6 text-center">
                  <h3 className="text-white font-bold text-xl mb-2">Ready to Discuss Your Elevation Survey Project?</h3>
                  <p className="text-white/80 text-sm mb-4">Expert advice • Tailored pricing • Avg Response within 5 Mins</p>
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
                  With extensive experience in surveying and UAV operations, Peter personally oversees every elevation survey to ensure accurate, professional deliverables.
                </p>
              </div>

              {/* Table of Contents */}
              <div className="bg-background-alt border border-border rounded-2xl p-6">
                <h3 className="text-teal font-bold text-lg mb-4">
                  Quick Guide: UAV Elevation Surveys Explained
                </h3>
                <nav className="space-y-2">
                  {[
                    { id: 'what-is-elevation', label: 'Understanding UAV Elevation Surveys' },
                    { id: 'elevation-cost', label: 'UAV Elevation Survey Pricing Guide' },
                    { id: 'elevation-vs-traditional', label: 'Comparing UAV Elevation Survey and Conventional Methods' },
                    { id: 'elevation-accuracy', label: 'Precision Levels for UAV Elevation Surveys' },
                    { id: 'elevation-applications', label: 'UAV Elevation Survey Applications' },
                    { id: 'all-building-faces', label: 'Can UAV Elevation Surveys Capture All Building Faces?' },
                    { id: 'elevation-deliverables', label: 'UAV Elevation Survey Outputs' },
                    { id: 'survey-timeline', label: 'UAV Elevation Survey Timeline' },
                    { id: 'choose-provider', label: 'Selecting a UAV Elevation Survey Provider' },
                    { id: 'cost-comparison', label: 'Is UAV Elevation Survey More Affordable Than Conventional Methods?' },
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
                  Elevation Survey Deliverables
                </h3>
                <ul className="space-y-3">
                  {[
                    'Orthorectified facade images',
                    'Elevation drawings (PDF/CAD)',
                    '3D facade models',
                    'CAD files (DXF/DWG)',
                    'Measurement data',
                    'High-res source imagery',
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
                  Share Your Project
                </h3>
                <p className="text-white/70 text-sm mb-4">
                  Receive expert advice and tailored pricing.
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

      {/* Explore Similar Services */}
      <section className="py-16 bg-background-alt">
        <div className="container">
          <h2 className="text-2xl font-bold text-teal mb-8 text-center">
            Explore Similar Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link
              href="/services/drone-survey"
              className="bg-white border border-border rounded-xl p-6 hover:border-gold hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-teal font-bold text-lg mb-2">Drone Survey</h3>
              <p className="text-text-secondary text-sm">
                Comprehensive drone surveys delivering precise topographic data and 3D models.
              </p>
            </Link>
            <Link
              href="/services/drone-topographical-survey"
              className="bg-white border border-border rounded-xl p-6 hover:border-gold hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-teal font-bold text-lg mb-2">UAV Topographic Survey</h3>
              <p className="text-text-secondary text-sm">
                Detailed topographic surveys for planning, design and construction projects.
              </p>
            </Link>
            <Link
              href="/services/drone-lidar-mapping"
              className="bg-white border border-border rounded-xl p-6 hover:border-gold hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-teal font-bold text-lg mb-2">LiDAR Mapping</h3>
              <p className="text-text-secondary text-sm">
                Precision LiDAR scanning for detailed terrain models through vegetation.
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
