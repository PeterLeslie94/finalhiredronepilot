import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import QuoteButton from '@/components/QuoteButton';
import Testimonials from '@/components/Testimonials';
import FloatingCTA from '@/components/FloatingCTA';
import EquipmentSection from '@/components/EquipmentSection';
import { ServiceSchema, BreadcrumbSchema } from '@/components/SchemaMarkup';
import { ClientLogoMarqueeInline } from '@/components/ClientLogoMarquee';
import { Car, TruckIcon, TrafficCone, Map, Gauge, Wrench, FileText, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Drone Road Survey Solutions | Road Mapping UK | Skykam Drone Inspections',
  description: 'Expert UAV road survey services throughout the UK. Precise road surface mapping, cross-sections, and condition assessments. CAA certified drone operators.',
  keywords: 'drone road survey, drone road mapping, drone road condition survey, drone highway survey, drone road cross-section, drone road surface mapping uk',
};

export default function DroneRoadSurveyPage() {
  return (
    <>
      <ServiceSchema
        name="Drone Road Survey Solutions"
        description="Expert UAV road survey services throughout the UK. Precise road surface mapping, cross-sections, and condition assessments. CAA certified drone operators."
        url="https://skykam.co.uk/services/drone-road-survey"
      />
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://skykam.co.uk" },
        { name: "Services", url: "https://skykam.co.uk/services" },
        { name: "Drone Road Survey Solutions", url: "https://skykam.co.uk/services/drone-road-survey" }
      ]} />

      {/* Hero Section */}
      <section className="relative min-h-[800px] md:min-h-[600px] flex items-start bg-teal -mt-[120px] pt-[120px] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/services/road/road-hero.avif"
            alt="Drone view of UK motorway network during road survey"
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
              Drone Road Survey Service
            </h1>
            <p className="text-white/80 text-lg md:text-xl mb-8">
              Precision drone surveys for roads, highways, and transport infrastructure. Precise cross-sections, surface condition mapping, and CAD-ready outputs.
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
              Avg Response within 5 Mins • Or ring{' '}
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

              {/* What is a drone road survey? */}
              <div>
                <h2 id="what-is-road-survey" className="text-2xl md:text-3xl font-bold text-teal mb-4 scroll-mt-32">
                  Understanding <span className="text-gold">Drone Road Surveys</span>
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed mb-4">
                  A UAV road survey employs drone-mounted cameras and sensors to capture highly precise data of road corridors, highways, and transport infrastructure. Our drones fly systematic grid patterns along roads, capturing thousands of overlapping images that are processed into precise 3D models, orthomosaics, and cross-sections.
                </p>
                <p className="text-text-secondary text-lg leading-relaxed">
                  At Skykam Drone Inspections, we deliver survey-grade road data for highway authorities, civil engineers, and transport planners. Whether you need cross-sections for resurfacing projects, surface condition assessments, or complete corridor mapping for new road schemes, our UAV road surveys provide the precise data you need—quicker and more economically than conventional methods.
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
                        Survey-Grade Road Data,
                        <span className="text-gold block relative inline-block">
                          Delivered Promptly
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
                          'High-resolution orthomosaic',
                          'Cross-sections at any interval',
                          'Longitudinal profiles',
                          'Survey-grade accuracy (±2-5cm)',
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
                          'Specialist road survey expertise',
                          'Latest UAV & sensor technology',
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
                        <span>Relied upon by highway authorities, engineers & transport planners throughout the UK.</span>
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

              {/* How much does a drone road survey cost? */}
              <div>
                <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-6">
                  <Image
                    src="/images/services/road/road-cost.avif"
                    alt="Surveyor reviewing drone road survey data on tablet beside UK highway"
                    fill
                    className="object-cover"
                  />
                </div>
                <h2 id="road-cost" className="text-2xl md:text-3xl font-bold text-teal mb-4 scroll-mt-32">
                  What's the Investment for a <span className="text-gold">Drone Road Survey</span>?
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed mb-6">
                  Pricing depends on the length of road and complexity of your requirements. Here's a guide to help you budget:
                </p>

                {/* Pricing Table */}
                <div className="rounded-xl overflow-hidden border border-border mb-6">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-teal">
                        <th className="text-left text-white font-semibold py-3 px-4">Road Length</th>
                        <th className="text-left text-white font-semibold py-3 px-4">Guide Price</th>
                        <th className="text-left text-white font-semibold py-3 px-4 hidden md:table-cell">Typical Applications</th>
                        <th className="text-left text-white font-semibold py-3 px-4 hidden lg:table-cell">Deliverables</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-white">
                        <td className="py-3 px-4 text-text-primary font-medium">Short Stretch<span className="block text-sm text-text-secondary font-normal">Under 1km</span></td>
                        <td className="py-3 px-4 text-gold font-bold">£600+</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden md:table-cell">Junction improvements, access roads, estate roads</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden lg:table-cell">Orthomosaic, cross-sections</td>
                      </tr>
                      <tr className="bg-background-alt">
                        <td className="py-3 px-4 text-text-primary font-medium">Medium<span className="block text-sm text-text-secondary font-normal">1-5km</span></td>
                        <td className="py-3 px-4 text-gold font-bold">£1,200+</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden md:table-cell">Rural roads, village bypasses, industrial access</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden lg:table-cell">Full deliverable suite</td>
                      </tr>
                      <tr className="bg-white">
                        <td className="py-3 px-4 text-text-primary font-medium">Long<span className="block text-sm text-text-secondary font-normal">5-10km</span></td>
                        <td className="py-3 px-4 text-gold font-bold">£2,000+</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden md:table-cell">A-road sections, dual carriageways, cycle routes</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden lg:table-cell">Full suite + condition report</td>
                      </tr>
                      <tr className="bg-background-alt">
                        <td className="py-3 px-4 text-text-primary font-medium">Major Route<span className="block text-sm text-text-secondary font-normal">10+ km</span></td>
                        <td className="py-3 px-4 text-gold font-bold">£3,500+</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden md:table-cell">Motorway sections, major road schemes</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden lg:table-cell">Custom deliverables package</td>
                      </tr>
                      <tr className="bg-white">
                        <td className="py-3 px-4 text-text-primary font-medium">Network Survey<span className="block text-sm text-text-secondary font-normal">Multiple routes</span></td>
                        <td className="py-3 px-4 text-gold font-bold">POA</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden md:table-cell">Highway authority asset surveys, network condition</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden lg:table-cell">Bespoke scope & phased delivery</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-text-secondary text-sm mb-6 italic">
                  *Guide prices include standard deliverables. Final quote based on road width, traffic management requirements, and specific outputs needed.
                </p>

                {/* What affects your quote */}
                <h3 className="font-bold text-teal mb-3">What affects your quote?</h3>
                <ul className="grid grid-cols-2 gap-2 mb-6">
                  {['Road length & width', 'Traffic management needs', 'Required deliverables', 'Turnaround time'].map((factor, index) => (
                    <li key={index} className="flex items-center gap-2 text-text-secondary">
                      <svg className="w-4 h-4 text-gold flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm">{factor}</span>
                    </li>
                  ))}
                </ul>

                <p className="text-text-secondary leading-relaxed mb-6">
                  Our UAV-based approach typically saves <span className="text-gold font-semibold">50-70%</span> compared to conventional road survey methods—and dramatically reduces traffic disruption. Contact us with your project details and we'll provide a tailored quote within 24 hours.
                </p>

                {/* CTA Banner */}
                <div className="bg-teal rounded-xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-center sm:text-left">
                    <p className="text-white font-semibold">Prepared to receive a quote for your road project?</p>
                    <p className="text-white/70 text-sm">Free, no-obligation quotes within 24 hours</p>
                  </div>
                  <div className="flex gap-3">
                    <a href="tel:+442046340456" className="flex items-center gap-2 px-4 py-2.5 rounded-full border border-white/30 text-white hover:bg-white/10 transition-colors text-sm font-medium">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      Ring
                    </a>
                    <QuoteButton className="px-5 py-2.5 rounded-full bg-gold text-teal-dark font-semibold hover:bg-gold/90 transition-colors text-sm btn-shimmer">
                      Compare Quotes
                    </QuoteButton>
                  </div>
                </div>
              </div>

              {/* Drone Road Survey vs Traditional Methods */}
              <div>
                <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-6">
                  <Image
                    src="/images/services/road/road-comparison.avif"
                    alt="Comparison of drone road survey versus traditional ground-based surveying methods"
                    fill
                    className="object-cover"
                  />
                </div>
                <h2 id="road-vs-traditional" className="text-2xl md:text-3xl font-bold text-teal mb-4 scroll-mt-32">
                  How Do <span className="text-gold">Drone Road Surveys</span> Compare to Conventional Methods?
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed mb-4">
                  Conventional road surveys require teams of surveyors working on or beside live carriageways. This means traffic management, lane closures, and significant health and safety considerations. It's slow, expensive, and disruptive to road users.
                </p>
                <p className="text-text-secondary text-lg leading-relaxed mb-4">
                  UAV road surveys capture the same data—often more—from the air. Our drones fly above the road corridor, capturing thousands of images in a fraction of the time. We can survey 10km of road in a single day that might take a ground team weeks. Traffic disruption is minimal or eliminated entirely for many projects.
                </p>
                {/* Technology Comparison Cards */}
                <div className="mt-8">
                  <h3 className="text-center font-bold text-teal text-xl mb-6">When to Select Each Approach</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {/* Drone Road Survey Card */}
                    <div className="relative bg-teal rounded-2xl p-6 overflow-hidden group hover:shadow-xl transition-shadow duration-300">
                      {/* Decorative elements */}
                      <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                        <svg viewBox="0 0 100 100" className="w-full h-full">
                          <line x1="0" y1="50" x2="100" y2="50" stroke="currentColor" strokeWidth="2" className="text-gold" />
                          <line x1="0" y1="30" x2="100" y2="30" stroke="currentColor" strokeWidth="1" className="text-gold" />
                          <line x1="0" y1="70" x2="100" y2="70" stroke="currentColor" strokeWidth="1" className="text-gold" />
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
                            <h4 className="text-white font-bold text-lg">Select UAV Road Survey</h4>
                            <p className="text-gold text-sm font-medium">Quick & minimal disruption</p>
                          </div>
                        </div>
                        <div className="space-y-3">
                          {[
                            { Icon: Car, text: 'Busy roads & motorways' },
                            { Icon: Map, text: 'Long corridor surveys' },
                            { Icon: Gauge, text: 'Rapid turnaround needed' },
                            { Icon: TruckIcon, text: 'Minimise traffic disruption' },
                          ].map((item, i) => (
                            <div key={i} className="flex items-center gap-3 bg-white/10 rounded-lg px-4 py-2.5">
                              <item.Icon className="w-5 h-5 text-gold flex-shrink-0" strokeWidth={1.5} />
                              <span className="text-white/90 font-medium">{item.text}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Traditional Survey Card */}
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
                            <h4 className="text-teal font-bold text-lg">Select Conventional Methods</h4>
                            <p className="text-text-secondary text-sm font-medium">When ground access is essential</p>
                          </div>
                        </div>
                        <div className="space-y-3">
                          {[
                            { Icon: Wrench, text: 'Underground utilities survey' },
                            { Icon: TrafficCone, text: 'Complex junction details' },
                            { Icon: FileText, text: 'Sub-surface investigation' },
                            { Icon: Clock, text: 'Dense urban environments' },
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
                    <p className="text-text-secondary text-sm mb-2">Uncertain which approach suits your project?</p>
                    <QuoteButton className="text-gold font-semibold hover:underline inline-flex items-center gap-1">
                      Speak with an expert
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </QuoteButton>
                  </div>
                </div>
              </div>

              {/* What accuracy can a drone road survey achieve? */}
              <div>
                <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-6">
                  <Image
                    src="/images/services/road/road-accuracy.avif"
                    alt="Ground control point marker on road surface for precision survey measurements"
                    fill
                    className="object-cover"
                  />
                </div>
                <h2 id="road-accuracy" className="text-2xl md:text-3xl font-bold text-teal mb-4 scroll-mt-32">
                  What Precision Levels Do <span className="text-gold">Drone Road Surveys</span> Attain?
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed mb-4">
                  Our UAV road surveys routinely attain vertical precision of ±2-5cm and horizontal precision of ±3-5cm when using ground control points. This level of accuracy meets the requirements for highway design, resurfacing projects, and engineering applications.
                </p>
                <p className="text-text-secondary text-lg leading-relaxed">
                  We use RTK/PPK-enabled drones with high-resolution cameras to ensure precise positioning. For projects requiring the highest accuracy, we establish ground control networks along the road corridor and process data using rigorous photogrammetric workflows. Cross-sections and profiles are extracted to engineering-grade standards suitable for CAD integration.
                </p>
              </div>

              {/* Applications */}
              <div>
                <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-6">
                  <Image
                    src="/images/services/road/road-applications.avif"
                    alt="Various road types from drone view showing motorway, rural road, and urban street"
                    fill
                    className="object-cover"
                  />
                </div>
                <h2 id="road-applications" className="text-2xl md:text-3xl font-bold text-teal mb-4 scroll-mt-32">
                  Where Are <span className="text-gold">Drone Road Surveys</span> Applied?
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed mb-6">
                  UAV road surveys serve a wide range of highway and transport infrastructure projects. Here are the key applications where our clients see the greatest value:
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-background-alt rounded-xl p-6">
                    <h3 className="font-bold text-teal mb-2">Road Design & Planning</h3>
                    <p className="text-text-secondary text-sm">Accurate terrain models and existing conditions surveys for new road schemes, junction improvements, and road widening projects.</p>
                  </div>
                  <div className="bg-background-alt rounded-xl p-6">
                    <h3 className="font-bold text-teal mb-2">Resurfacing Projects</h3>
                    <p className="text-text-secondary text-sm">Precise cross-sections and longitudinal profiles for surfacing quantity calculations and material specification.</p>
                  </div>
                  <div className="bg-background-alt rounded-xl p-6">
                    <h3 className="font-bold text-teal mb-2">Highway Asset Management</h3>
                    <p className="text-text-secondary text-sm">Network-wide condition surveys, asset inventories, and baseline data for highway authorities and maintenance contractors.</p>
                  </div>
                  <div className="bg-background-alt rounded-xl p-6">
                    <h3 className="font-bold text-teal mb-2">Drainage & Flooding</h3>
                    <p className="text-text-secondary text-sm">Accurate elevation data for drainage design, flood risk assessment, and surface water management along road corridors.</p>
                  </div>
                  <div className="bg-background-alt rounded-xl p-6">
                    <h3 className="font-bold text-teal mb-2">Active Travel Routes</h3>
                    <p className="text-text-secondary text-sm">Cycle paths, pedestrian routes, and multi-use trails—capturing existing conditions for upgrade and improvement schemes.</p>
                  </div>
                  <div className="bg-background-alt rounded-xl p-6">
                    <h3 className="font-bold text-teal mb-2">Construction Monitoring</h3>
                    <p className="text-text-secondary text-sm">Progress surveys during road construction, volume calculations for earthworks, and as-built verification.</p>
                  </div>
                </div>

                {/* CTA after applications */}
                <div className="mt-8 text-center">
                  <p className="text-text-secondary mb-4">Have a road project that needs surveying?</p>
                  <div className="flex flex-wrap justify-center gap-3">
                    <QuoteButton className="btn btn-primary btn-shimmer">
                      Talk About Your Project
                    </QuoteButton>
                    <a href="tel:+442046340456" className="btn btn-outline">
                      Ring 020 4634 0456
                    </a>
                  </div>
                </div>
              </div>

              {/* Can Drone Surveys Capture Road Surface Condition? */}
              <div>
                <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-6">
                  <Image
                    src="/images/services/road/road-feature.avif"
                    alt="Road surface condition mapping showing defects and annotations from drone survey"
                    fill
                    className="object-cover"
                  />
                </div>
                <h2 id="surface-condition" className="text-2xl md:text-3xl font-bold text-teal mb-4 scroll-mt-32">
                  Can <span className="text-gold">Drone Road Surveys</span> Capture Road Surface Condition?
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed mb-4">
                  Yes—our high-resolution UAV imagery captures detailed road surface condition data. From centimetre-resolution orthomosaics, we can identify and map surface faults including cracking patterns, potholes, patching, rutting evidence, and deterioration of road markings.
                </p>
                <p className="text-text-secondary text-lg leading-relaxed">
                  For highway authorities and maintenance contractors, this provides a powerful tool for condition assessment and planned maintenance prioritisation. Combined with our 3D surface models, we can quantify rutting depth, identify drainage issues, and support asset management decisions. This visual condition data complements conventional machine-based surveys and provides context that automated systems often miss.
                </p>
              </div>

              {/* What deliverables? */}
              <div>
                <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-6">
                  <Image
                    src="/images/services/road/road-deliverables.avif"
                    alt="Computer screen displaying road survey CAD drawings and cross-sections"
                    fill
                    className="object-cover"
                  />
                </div>
                <h2 id="road-deliverables" className="text-2xl md:text-3xl font-bold text-teal mb-4 scroll-mt-32">
                  What Outputs Do You Receive From a <span className="text-gold">Drone Road Survey</span>?
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed mb-6">
                  We tailor outputs to your project requirements. Our standard UAV road survey deliverables include:
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-4 bg-background-alt rounded-xl p-4">
                    <div className="w-10 h-10 bg-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-teal">High-Resolution Orthomosaic</h4>
                      <p className="text-text-secondary text-sm">Georeferenced drone imagery of the entire road corridor at 1-2cm per pixel resolution. Perfect for condition assessment and visual documentation.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4 bg-background-alt rounded-xl p-4">
                    <div className="w-10 h-10 bg-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-teal">Cross-Sections</h4>
                      <p className="text-text-secondary text-sm">Accurate cross-sections at any interval you specify—typically 10m, 20m, or 50m depending on project requirements.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4 bg-background-alt rounded-xl p-4">
                    <div className="w-10 h-10 bg-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-teal">Longitudinal Profiles</h4>
                      <p className="text-text-secondary text-sm">Road centreline profiles showing vertical alignment, gradients, and level changes along the route.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4 bg-background-alt rounded-xl p-4">
                    <div className="w-10 h-10 bg-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-teal">Surface Condition Reports</h4>
                      <p className="text-text-secondary text-sm">Visual assessment of road surface condition with defect mapping and photographic evidence.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4 bg-background-alt rounded-xl p-4">
                    <div className="w-10 h-10 bg-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-teal">CAD Drawings</h4>
                      <p className="text-text-secondary text-sm">AutoCAD-compatible DWG files with road edge, kerb lines, markings, and survey data ready for design integration.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4 bg-background-alt rounded-xl p-4">
                    <div className="w-10 h-10 bg-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-teal">Digital Terrain Model (DTM)</h4>
                      <p className="text-text-secondary text-sm">Bare-earth surface model of the road corridor for drainage analysis, earthworks calculations, and design development.</p>
                    </div>
                  </li>
                </ul>

                {/* CTA after deliverables */}
                <div className="mt-6 p-5 bg-gold/10 border border-gold/20 rounded-xl">
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-teal font-semibold text-center sm:text-left">Need specific outputs for your road project?</p>
                    <QuoteButton className="btn btn-primary btn-shimmer whitespace-nowrap">
                      Talk About Requirements
                    </QuoteButton>
                  </div>
                </div>
              </div>

              {/* How long does it take? */}
              <div>
                <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-6">
                  <Image
                    src="/images/services/road/road-timeline.avif"
                    alt="Drone pilot preparing for road survey flight beside UK highway"
                    fill
                    className="object-cover"
                  />
                </div>
                <h2 id="survey-timeline" className="text-2xl md:text-3xl font-bold text-teal mb-4 scroll-mt-32">
                  What's the Duration of a <span className="text-gold">Drone Road Survey</span>?
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed mb-4">
                  On-site data capture is remarkably quick compared to conventional methods. We can survey 5-10km of road corridor per day depending on width, traffic conditions, and complexity. A typical 2km road scheme takes just 2-3 hours of flight time, plus setup and ground control establishment.
                </p>
                <p className="text-text-secondary text-lg leading-relaxed mb-6">
                  Processing and delivery depends on project complexity and your required outputs. Standard deliverables are typically ready within 5-7 working days. For urgent projects, we offer expedited processing with 48-72 hour turnaround available at additional cost.
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
                        <td className="py-3 px-4 text-text-secondary text-sm hidden md:table-cell">Flight planning, airspace clearance, traffic management coordination</td>
                      </tr>
                      <tr className="bg-background-alt">
                        <td className="py-3 px-4 text-text-primary font-medium">On-Site Data Capture</td>
                        <td className="py-3 px-4 text-gold font-bold">½-1 day</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden md:table-cell">GCP setup, drone flights, data verification</td>
                      </tr>
                      <tr className="bg-white">
                        <td className="py-3 px-4 text-text-primary font-medium">Photogrammetric Processing</td>
                        <td className="py-3 px-4 text-gold font-bold">2-3 days</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden md:table-cell">Image alignment, point cloud generation, model creation</td>
                      </tr>
                      <tr className="bg-background-alt">
                        <td className="py-3 px-4 text-text-primary font-medium">Cross-Section Extraction</td>
                        <td className="py-3 px-4 text-gold font-bold">1-2 days</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden md:table-cell">Cross-sections, longitudinal profiles, CAD preparation</td>
                      </tr>
                      <tr className="bg-white">
                        <td className="py-3 px-4 text-text-primary font-medium">QC & Delivery</td>
                        <td className="py-3 px-4 text-gold font-bold">1 day</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden md:table-cell">Quality checks, report compilation, file delivery</td>
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
                    <p className="text-text-secondary text-sm">Need it faster? 48-72 hour turnaround available for urgent road projects.</p>
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
                    Talk to James
                  </a>
                </div>
              </div>

              {/* How to choose a provider */}
              <div>
                <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-6">
                  <Image
                    src="/images/services/road/road-provider.avif"
                    alt="Survey team meeting with highways client to discuss road survey project"
                    fill
                    className="object-cover"
                  />
                </div>
                <h2 id="choose-provider" className="text-2xl md:text-3xl font-bold text-teal mb-4 scroll-mt-32">
                  How Should I Select a <span className="text-gold">Drone Road Survey</span> Provider?
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed mb-4">
                  Not all UAV survey providers have expertise with road and highway projects. When evaluating providers, we recommend checking these key factors:
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
                    <span className="text-text-primary"><strong>Professional insurance</strong> – Public liability and professional indemnity cover appropriate to highway projects</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gold mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-text-primary"><strong>Road survey experience</strong> – Ask about their experience with linear corridor surveys and cross-section extraction</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gold mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-text-primary"><strong>CAD capability</strong> – Ensure they can deliver in your required formats (DWG, DXF, etc.)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gold mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-text-primary"><strong>Relevant case studies</strong> – Request examples of similar road and highway projects they've completed</span>
                  </li>
                </ul>
                <p className="text-text-secondary text-lg leading-relaxed mb-6">
                  At Skykam Drone Inspections, we tick every box. We're CAA certified, fully insured, and have delivered road survey projects for highway authorities, civil engineering consultants, and transport planners throughout the UK.
                </p>

                {/* CTA after provider section */}
                <div className="bg-teal rounded-xl p-5">
                  <p className="text-white font-semibold mb-3">Prepared to work with a reliable road survey provider?</p>
                  <div className="flex flex-wrap gap-3">
                    <QuoteButton className="px-5 py-2.5 rounded-full bg-gold text-teal-dark font-semibold hover:bg-gold/90 transition-colors text-sm btn-shimmer">
                      Speak to James
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
                  Are <span className="text-gold">Drone Road Surveys</span> More Cost-Effective Than Conventional Methods?
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed mb-4">
                  In most scenarios, yes—often dramatically so. Conventional road surveys require teams of surveyors working on or beside live carriageways, with all the traffic management, health and safety, and time costs that entails. A ground survey of a 5km road corridor might take a team a week or more.
                </p>
                <p className="text-text-secondary text-lg leading-relaxed mb-6">
                  Our UAV approach captures equivalent data in hours, not days. We fly above the road corridor, eliminating most traffic management requirements and dramatically reducing on-site time. The cost savings typically range from 50-70% compared to conventional methods—and you get quicker turnaround with less disruption to road users. For busy roads and motorways, the indirect savings from reduced traffic disruption can be even greater.
                </p>

                {/* Final CTA */}
                <div className="bg-gradient-to-r from-teal to-teal-dark rounded-xl p-6 text-center">
                  <h3 className="text-white font-bold text-xl mb-2">Prepared to Talk About Your Road Survey Project?</h3>
                  <p className="text-white/80 text-sm mb-4">Expert guidance • Tailored pricing • Avg Response within 5 Mins</p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <QuoteButton className="btn btn-primary btn-shimmer">
                      Compare Quotes
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
                  With considerable expertise in surveying and UAV operations, James personally oversees every road survey project to ensure survey-grade precision and professional delivery.
                </p>
              </div>

              {/* Table of Contents */}
              <div className="bg-background-alt border border-border rounded-2xl p-6">
                <h3 className="text-teal font-bold text-lg mb-4">
                  TLDR: UAV Road Surveys Explained
                </h3>
                <nav className="space-y-2">
                  {[
                    { id: 'what-is-road-survey', label: 'Understanding UAV Road Surveys' },
                    { id: 'road-cost', label: 'What\'s the Investment for a UAV Road Survey?' },
                    { id: 'road-vs-traditional', label: 'How Do UAV Road Surveys Compare to Conventional Methods?' },
                    { id: 'road-accuracy', label: 'What Precision Levels Do UAV Road Surveys Attain?' },
                    { id: 'road-applications', label: 'Where Are UAV Road Surveys Applied?' },
                    { id: 'surface-condition', label: 'Can UAV Road Surveys Capture Road Surface Condition?' },
                    { id: 'road-deliverables', label: 'What Outputs Do You Receive From a UAV Road Survey?' },
                    { id: 'survey-timeline', label: 'What\'s the Duration of a UAV Road Survey?' },
                    { id: 'choose-provider', label: 'How Should I Select a UAV Road Survey Provider?' },
                    { id: 'cost-comparison', label: 'Are UAV Road Surveys More Cost-Effective Than Conventional Methods?' },
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
                  Road Survey Outputs
                </h3>
                <ul className="space-y-3">
                  {[
                    'High-resolution orthomosaic',
                    'Cross-sections at any interval',
                    'Longitudinal profiles',
                    'Surface condition reports',
                    'CAD drawings (DWG/DXF)',
                    'Digital Terrain Model (DTM)',
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
                  Talk About Your Project
                </h3>
                <p className="text-white/70 text-sm mb-4">
                  Receive expert guidance and tailored pricing.
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
              href="/services/drone-topographic-survey"
              className="bg-white border border-border rounded-xl p-6 hover:border-gold hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-teal font-bold text-lg mb-2">Topographic Survey</h3>
              <p className="text-text-secondary text-sm">
                Detailed topographic surveys for planning, design and construction projects.
              </p>
            </Link>
            <Link
              href="/services/lidar-mapping"
              className="bg-white border border-border rounded-xl p-6 hover:border-gold hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-teal font-bold text-lg mb-2">LiDAR Mapping</h3>
              <p className="text-text-secondary text-sm">
                Precision LiDAR scanning for detailed terrain models and vegetation penetration.
              </p>
            </Link>
            <Link
              href="/services/drone-construction-monitoring"
              className="bg-white border border-border rounded-xl p-6 hover:border-gold hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-teal font-bold text-lg mb-2">Construction Monitoring</h3>
              <p className="text-text-secondary text-sm">
                Regular drone surveys tracking construction progress and earthworks volumes.
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
