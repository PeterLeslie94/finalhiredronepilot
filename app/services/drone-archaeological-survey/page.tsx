import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import QuoteButton from '@/components/QuoteButton';
import Testimonials from '@/components/Testimonials';
import FloatingCTA from '@/components/FloatingCTA';
import EquipmentSection from '@/components/EquipmentSection';
import { Landmark, Wheat, Search, Thermometer, Mountain, Building2, FileText, Shovel } from 'lucide-react';
import { ServiceSchema, BreadcrumbSchema } from '@/components/SchemaMarkup';
import { ClientLogoMarqueeInline } from '@/components/ClientLogoMarquee';

export const metadata: Metadata = {
  title: 'Drone Archaeological Survey Services | Heritage Site Mapping UK | Skykam',
  description: 'Expert drone archaeological survey services throughout the UK. Uncover concealed features through crop mark detection, thermal analysis and precision mapping. CAA certified drone operators.',
  keywords: 'drone archaeological survey, drone archaeology, archaeological drone survey uk, drone crop mark survey, drone heritage survey, drone archaeological mapping, thermal archaeology',
};

export default function DroneArchaeologicalSurveyPage() {
  return (
    <>
      <ServiceSchema
        name="Drone Archaeological Survey Services"
        description="Expert drone archaeological survey services throughout the UK. Uncover concealed features through crop mark detection, thermal analysis and precision mapping. CAA certified drone operators."
        url="https://skykam.co.uk/services/drone-archaeological-survey"
      />
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://skykam.co.uk" },
        { name: "Services", url: "https://skykam.co.uk/services" },
        { name: "Drone Archaeological Survey Services", url: "https://skykam.co.uk/services/drone-archaeological-survey" }
      ]} />
      {/* Hero Section */}
      <section className="relative min-h-[800px] md:min-h-[600px] flex items-start bg-teal -mt-[120px] pt-[120px] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/services/archaeological/archaeological-hero.avif"
            alt="Drone view of UK archaeological site with crop marks revealing ancient features"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-teal-dark via-teal-dark/90 via-40% to-teal-dark/40 z-10" />
        </div>
        <div className="container pt-8 pb-52 lg:pb-40 lg:pt-12 relative z-10">
          <div className="max-w-3xl">
            <p className="text-gold font-semibold uppercase tracking-wider mb-3">
              Heritage & Archaeology
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Drone Archaeological Survey Service
            </h1>
            <p className="text-white/80 text-lg md:text-xl mb-8">
              Uncover concealed archaeological features with precision UAV surveys. From crop mark detection to thermal analysis, our drone technology discovers what ground-based methods overlook.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <QuoteButton className="btn btn-primary">
                Compare Quotes
              </QuoteButton>
              <Link href="/services" className="btn btn-outline-white">
                All Services
              </Link>
            </div>
            <p className="mt-4 text-white/70 text-sm flex items-center gap-2">
              <svg className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
              Avg Response within 5 Mins • Or call{' '}
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

              {/* Understanding drone archaeological assessment */}
              <div>
                <h2 id="what-is-archaeological" className="text-2xl md:text-3xl font-bold text-teal mb-4 scroll-mt-32">
                  Understanding <span className="text-gold">Drone Archaeological Assessment</span>
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed mb-4">
                  A drone archaeological assessment employs sophisticated UAV technology to identify, document, and chart archaeological features that remain hidden or challenging to observe from ground level. Our unmanned aircraft gather high-resolution imagery and data that expose crop marks, earthworks, and subsurface structures throughout the terrain.
                </p>
                <p className="text-text-secondary text-lg leading-relaxed">
                  At Skykam, we integrate photogrammetry, multispectral sensing, and thermal detection to produce thorough archaeological documentation. This non-destructive methodology safeguards site integrity whilst furnishing archaeologists with precise survey information for research, planning submissions, and heritage stewardship.
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
                        Discover Buried Heritage,
                        <span className="text-gold block relative inline-block">
                          Without Disturbance
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
                          'High-resolution site orthomosaic',
                          '3D terrain and feature models',
                          'Crop mark analysis report',
                          'CAD-ready survey drawings',
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
                          'CAA approved & fully insured',
                          'Experience with heritage projects',
                          'Latest drone & sensor technology',
                          'Nationwide service delivery',
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
                        <span>Relied upon by archaeology units, heritage bodies and consultancies throughout the UK.</span>
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

              {/* Archaeological Assessment Pricing Guide */}
              <div>
                <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-6">
                  <Image
                    src="/images/services/archaeological/archaeological-cost.avif"
                    alt="Archaeologist reviewing drone survey data on tablet at excavation site"
                    fill
                    className="object-cover"
                  />
                </div>
                <h2 id="archaeological-cost" className="text-2xl md:text-3xl font-bold text-teal mb-4 scroll-mt-32">
                  <span className="text-gold">Archaeological Assessment</span> Pricing Guide
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed mb-6">
                  Investment varies based on your project scope and specifications. Here is a reference to assist with budgeting:
                </p>

                {/* Pricing Table */}
                <div className="rounded-xl overflow-hidden border border-border mb-6">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-teal">
                        <th className="text-left text-white font-semibold py-3 px-4">Project Size</th>
                        <th className="text-left text-white font-semibold py-3 px-4">Guide Price</th>
                        <th className="text-left text-white font-semibold py-3 px-4 hidden md:table-cell">Typical Applications</th>
                        <th className="text-left text-white font-semibold py-3 px-4 hidden lg:table-cell">Deliverables</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-white">
                        <td className="py-3 px-4 text-text-primary font-medium">Small Site<span className="block text-sm text-text-secondary font-normal">Under 1 ha</span></td>
                        <td className="py-3 px-4 text-gold font-bold">£500+</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden md:table-cell">Evaluation trenches, small excavations, building recording</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden lg:table-cell">Orthomosaic, 3D model, CAD</td>
                      </tr>
                      <tr className="bg-background-alt">
                        <td className="py-3 px-4 text-text-primary font-medium">Medium Site<span className="block text-sm text-text-secondary font-normal">1–5 ha</span></td>
                        <td className="py-3 px-4 text-gold font-bold">£900+</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden md:table-cell">Field systems, enclosures, village sites</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden lg:table-cell">Full survey + feature mapping</td>
                      </tr>
                      <tr className="bg-white">
                        <td className="py-3 px-4 text-text-primary font-medium">Large Site<span className="block text-sm text-text-secondary font-normal">5–20 ha</span></td>
                        <td className="py-3 px-4 text-gold font-bold">£1,800+</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden md:table-cell">Landscape surveys, multi-period sites, hillforts</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden lg:table-cell">Comprehensive mapping package</td>
                      </tr>
                      <tr className="bg-background-alt">
                        <td className="py-3 px-4 text-text-primary font-medium">Major Site<span className="block text-sm text-text-secondary font-normal">20+ ha</span></td>
                        <td className="py-3 px-4 text-gold font-bold">POA</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden md:table-cell">Large landscape projects, route corridors, estate surveys</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden lg:table-cell">Bespoke deliverables package</td>
                      </tr>
                      <tr className="bg-white">
                        <td className="py-3 px-4 text-text-primary font-medium">Research Projects<span className="block text-sm text-text-secondary font-normal">Academic/heritage</span></td>
                        <td className="py-3 px-4 text-gold font-bold">POA</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden md:table-cell">University research, heritage assessments, HLF projects</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden lg:table-cell">Custom scope & phased delivery</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-text-secondary text-sm mb-6 italic">
                  *Guide prices include standard deliverables. Final quote based on site complexity, access, and specific requirements.
                </p>

                {/* Factors influencing your estimate */}
                <h3 className="font-bold text-teal mb-3">Factors influencing your estimate</h3>
                <ul className="grid grid-cols-2 gap-2 mb-6">
                  {['Site size & terrain', 'Required deliverables', 'Turnaround time', 'Sensor requirements'].map((factor, index) => (
                    <li key={index} className="flex items-center gap-2 text-text-secondary">
                      <svg className="w-4 h-4 text-gold flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm">{factor}</span>
                    </li>
                  ))}
                </ul>

                <p className="text-text-secondary leading-relaxed mb-6">
                  Our UAV-based approach typically delivers <span className="text-gold font-semibold">40-60% savings</span> compared to conventional ground survey techniques whilst covering sites considerably faster. Reach out with your project specifications and we will furnish a bespoke estimate within 24 hours.
                </p>

                {/* CTA Banner */}
                <div className="bg-teal rounded-xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-center sm:text-left">
                    <p className="text-white font-semibold">Prepared to receive an estimate for your project?</p>
                    <p className="text-white/70 text-sm">Complimentary, obligation-free quotes within 24 hours</p>
                  </div>
                  <div className="flex gap-3">
                    <a href="tel:+442046340456" className="flex items-center gap-2 px-4 py-2.5 rounded-full border border-white/30 text-white hover:bg-white/10 transition-colors text-sm font-medium">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      Ring
                    </a>
                    <QuoteButton className="px-5 py-2.5 rounded-full bg-gold text-teal-dark font-semibold hover:bg-gold/90 transition-colors text-sm btn-shimmer">
                      Obtain Pricing
                    </QuoteButton>
                  </div>
                </div>
              </div>

              {/* Drone Assessment vs Conventional Methods */}
              <div>
                <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-6">
                  <Image
                    src="/images/services/archaeological/archaeological-comparison.avif"
                    alt="Comparison of drone archaeological survey and traditional excavation methods"
                    fill
                    className="object-cover"
                  />
                </div>
                <h2 id="archaeological-vs-traditional" className="text-2xl md:text-3xl font-bold text-teal mb-4 scroll-mt-32">
                  <span className="text-gold">Drone Assessment</span> vs Conventional Methods
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed mb-4">
                  Conventional archaeological survey depends on ground-based techniques such as total station recording, GPS plotting, and manual photography. Though accurate, these methods prove time-intensive, weather-sensitive, and restricted in the viewpoint they provide.
                </p>
                <p className="text-text-secondary text-lg leading-relaxed mb-4">
                  Drone archaeological assessment captures complete sites from above in a fraction of the duration, exposing patterns and features that remain entirely hidden from ground level. Crop marks, subtle earthworks, and landscape relationships become instantly evident when observed from altitude.
                </p>
                {/* Technology Comparison Cards */}
                <div className="mt-8">
                  <h3 className="text-center font-bold text-teal text-xl mb-6">Selecting the Right Methodology</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {/* Drone Survey Card */}
                    <div className="relative bg-teal rounded-2xl p-6 overflow-hidden group hover:shadow-xl transition-shadow duration-300">
                      {/* Decorative pattern */}
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
                            <h4 className="text-white font-bold text-lg">Select Drone Archaeological Assessment</h4>
                            <p className="text-gold text-sm font-medium">Landscape-scale perspective</p>
                          </div>
                        </div>
                        <div className="space-y-3">
                          {[
                            { Icon: Wheat, text: 'Crop mark detection' },
                            { Icon: Mountain, text: 'Earthwork recording' },
                            { Icon: Search, text: 'Pre-excavation planning' },
                            { Icon: Landmark, text: 'Landscape archaeology' },
                          ].map((item, i) => (
                            <div key={i} className="flex items-center gap-3 bg-white/10 rounded-lg px-4 py-2.5">
                              <item.Icon className="w-5 h-5 text-gold flex-shrink-0" strokeWidth={1.5} />
                              <span className="text-white/90 font-medium">{item.text}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Conventional Methods Card */}
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
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                            </svg>
                          </div>
                          <div>
                            <h4 className="text-teal font-bold text-lg">Select Conventional Methods</h4>
                            <p className="text-text-secondary text-sm font-medium">Exact detail documentation</p>
                          </div>
                        </div>
                        <div className="space-y-3">
                          {[
                            { Icon: Shovel, text: 'In-trench recording' },
                            { Icon: Building2, text: 'Standing building survey' },
                            { Icon: FileText, text: 'Context-level recording' },
                            { Icon: Search, text: 'Finds plotting' },
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

                  {/* Uncertain? CTA */}
                  <div className="mt-6 text-center">
                    <p className="text-text-secondary text-sm mb-2">Uncertain which methodology fits your project?</p>
                    <QuoteButton className="text-gold font-semibold hover:underline inline-flex items-center gap-1">
                      Compare Quotes
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </QuoteButton>
                  </div>
                </div>
              </div>

              {/* Precision Standards for Archaeological Assessment */}
              <div>
                <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-6">
                  <Image
                    src="/images/services/archaeological/archaeological-accuracy.avif"
                    alt="Ground control point marker at archaeological excavation for survey accuracy"
                    fill
                    className="object-cover"
                  />
                </div>
                <h2 id="archaeological-accuracy" className="text-2xl md:text-3xl font-bold text-teal mb-4 scroll-mt-32">
                  Precision Standards for <span className="text-gold">Archaeological Assessment</span>
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed mb-4">
                  Our drone archaeological assessments attain positional accuracy of plus or minus 2-3cm when employing ground control points, meeting or surpassing the specifications demanded for most archaeological documentation. Ground sample distances of 1-2cm per pixel guarantee individual features remain clearly discernible and measurable.
                </p>
                <p className="text-text-secondary text-lg leading-relaxed">
                  We deploy RTK-enabled aircraft with survey-grade GNSS positioning, complemented by strategically placed ground control points measured using our own GPS equipment. This workflow generates georeferenced outputs that merge seamlessly with your existing site documentation and national grid references.
                </p>
              </div>

              {/* Key Uses for Archaeological Assessment */}
              <div>
                <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-6">
                  <Image
                    src="/images/services/archaeological/archaeological-applications.avif"
                    alt="Drone view showing various archaeological features from drone survey"
                    fill
                    className="object-cover"
                  />
                </div>
                <h2 id="archaeological-applications" className="text-2xl md:text-3xl font-bold text-teal mb-4 scroll-mt-32">
                  Key Uses for <span className="text-gold">Archaeological Assessment</span>
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed mb-6">
                  Drone archaeological assessment has revolutionised heritage documentation across numerous domains. These are the principal areas where our clients experience the most significant value:
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-background-alt rounded-xl p-6">
                    <h3 className="font-bold text-teal mb-2">Excavation Documentation</h3>
                    <p className="text-text-secondary text-sm">Thorough photographic records of trenches and open-area excavations, accompanied by precise 3D models for post-excavation analysis.</p>
                  </div>
                  <div className="bg-background-alt rounded-xl p-6">
                    <h3 className="font-bold text-teal mb-2">Desk-Based Evaluations</h3>
                    <p className="text-text-secondary text-sm">High-resolution drone imagery supporting heritage impact evaluations and planning submissions.</p>
                  </div>
                  <div className="bg-background-alt rounded-xl p-6">
                    <h3 className="font-bold text-teal mb-2">Crop Mark Detection</h3>
                    <p className="text-text-secondary text-sm">Targeted surveys during optimal conditions to identify and document buried archaeological features manifesting as crop marks.</p>
                  </div>
                  <div className="bg-background-alt rounded-xl p-6">
                    <h3 className="font-bold text-teal mb-2">Monument Documentation</h3>
                    <p className="text-text-secondary text-sm">Comprehensive recording of scheduled monuments, hillforts, barrows, and other protected sites for condition assessment.</p>
                  </div>
                  <div className="bg-background-alt rounded-xl p-6">
                    <h3 className="font-bold text-teal mb-2">Landscape Assessments</h3>
                    <p className="text-text-secondary text-sm">Wide-area surveys examining settlement patterns, field systems, and relationships between features.</p>
                  </div>
                  <div className="bg-background-alt rounded-xl p-6">
                    <h3 className="font-bold text-teal mb-2">Community Initiatives</h3>
                    <p className="text-text-secondary text-sm">Supporting HLF-funded projects, research excavations, and community archaeology programmes with professional survey data.</p>
                  </div>
                </div>

                {/* CTA after applications */}
                <div className="mt-8 text-center">
                  <p className="text-text-secondary mb-4">Have an archaeological project requiring assessment?</p>
                  <div className="flex flex-wrap justify-center gap-3">
                    <QuoteButton className="btn btn-primary btn-shimmer">
                      Talk Through Your Project
                    </QuoteButton>
                    <a href="tel:+442046340456" className="btn btn-outline">
                      Ring 020 4634 0456
                    </a>
                  </div>
                </div>
              </div>

              {/* Exposing Concealed Archaeological Features */}
              <div>
                <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-6">
                  <Image
                    src="/images/services/archaeological/archaeological-feature.avif"
                    alt="Crop marks revealing hidden archaeological features visible from drone"
                    fill
                    className="object-cover"
                  />
                </div>
                <h2 id="hidden-features" className="text-2xl md:text-3xl font-bold text-teal mb-4 scroll-mt-32">
                  Exposing <span className="text-gold">Concealed Archaeological Features</span>
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed mb-4">
                  Certainly - this represents one of the most compelling applications of drone archaeological assessment. Features concealed beneath the surface become discernible through several phenomena best observed from above.
                </p>
                <p className="text-text-secondary text-lg leading-relaxed mb-6">
                  <strong>Crop marks</strong> develop when buried ditches retain additional moisture, causing vegetation above to grow taller and stay green longer. Conversely, buried walls and floors constrain root development, producing stunted or stressed vegetation. Our aircraft capture these subtle variations during optimal conditions - typically early summer mornings following dry periods.
                </p>

                {/* Detection Methods */}
                <div className="bg-background-alt rounded-xl p-6 mb-6">
                  <h3 className="font-bold text-teal mb-4">Our Feature Detection Techniques</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Wheat className="w-5 h-5 text-gold" />
                      </div>
                      <div>
                        <h4 className="font-bold text-teal">Crop Mark Evaluation</h4>
                        <p className="text-text-secondary text-sm">Standard RGB imagery during optimal growing conditions exposes differential crop growth patterns above buried features.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Thermometer className="w-5 h-5 text-gold" />
                      </div>
                      <div>
                        <h4 className="font-bold text-teal">Thermal Detection</h4>
                        <p className="text-text-secondary text-sm">Buried structures retain heat differently from surrounding soil, generating thermal signatures discernible in early morning or evening surveys.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Mountain className="w-5 h-5 text-gold" />
                      </div>
                      <div>
                        <h4 className="font-bold text-teal">Micro-Topography Mapping</h4>
                        <p className="text-text-secondary text-sm">High-resolution elevation models expose subtle earthworks, platforms, and hollows imperceptible to the naked eye at ground level.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-text-secondary text-lg leading-relaxed">
                  We can counsel you on optimal timing for your survey based on the features you seek to identify, the crops cultivated on site, and prevailing weather conditions. Many of our most noteworthy discoveries have resulted from flying at precisely the right moment.
                </p>
              </div>

              {/* Survey Outputs & Deliverable Packages */}
              <div>
                <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-6">
                  <Image
                    src="/images/services/archaeological/archaeological-deliverables.avif"
                    alt="Archaeological survey reports and 3D models displayed on computer screen"
                    fill
                    className="object-cover"
                  />
                </div>
                <h2 id="archaeological-deliverables" className="text-2xl md:text-3xl font-bold text-teal mb-4 scroll-mt-32">
                  <span className="text-gold">Survey Outputs</span> & Deliverable Packages
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed mb-6">
                  We customise deliverables to match your project specifications, though our standard archaeological survey outputs comprise:
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-4 bg-background-alt rounded-xl p-4">
                    <div className="w-10 h-10 bg-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-teal">Site Orthomosaic Imagery</h4>
                      <p className="text-text-secondary text-sm">High-resolution, georeferenced drone photograph encompassing the complete site, typically at 1-2cm ground sample distance. Ideal for interpretation and as a foundation for GIS work.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4 bg-background-alt rounded-xl p-4">
                    <div className="w-10 h-10 bg-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-teal">Three-Dimensional Models</h4>
                      <p className="text-text-secondary text-sm">Detailed 3D mesh and point cloud of excavations, structures, and terrain. Export for analysis, archiving, or public engagement initiatives.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4 bg-background-alt rounded-xl p-4">
                    <div className="w-10 h-10 bg-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-teal">Feature Interpretation Mapping</h4>
                      <p className="text-text-secondary text-sm">Interpretive mapping of visible archaeological features, crop marks, and earthworks superimposed on the orthomosaic.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4 bg-background-alt rounded-xl p-4">
                    <div className="w-10 h-10 bg-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-teal">CAD Drawing Files</h4>
                      <p className="text-text-secondary text-sm">Survey-accurate CAD files compatible with your established workflows. DXF, DWG, and Shapefile formats available.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4 bg-background-alt rounded-xl p-4">
                    <div className="w-10 h-10 bg-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-teal">Excavation Assistance</h4>
                      <p className="text-text-secondary text-sm">Real-time orthophotos and progress models during excavation, facilitating rapid decision-making and thorough documentation.</p>
                    </div>
                  </li>
                </ul>

                {/* CTA after deliverables */}
                <div className="mt-6 p-5 bg-gold/10 border border-gold/20 rounded-xl">
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-teal font-semibold text-center sm:text-left">Require particular deliverables for your project?</p>
                    <QuoteButton className="btn btn-primary btn-shimmer whitespace-nowrap">
                      Outline Your Needs
                    </QuoteButton>
                  </div>
                </div>
              </div>

              {/* Project Timelines & Delivery Schedules */}
              <div>
                <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-6">
                  <Image
                    src="/images/services/archaeological/archaeological-timeline.avif"
                    alt="Drone pilot at archaeological site preparing for survey"
                    fill
                    className="object-cover"
                  />
                </div>
                <h2 id="survey-timeline" className="text-2xl md:text-3xl font-bold text-teal mb-4 scroll-mt-32">
                  Project Timelines & <span className="text-gold">Delivery Schedules</span>
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed mb-4">
                  On-site data capture proves remarkably efficient. A typical excavation site can be surveyed in 30-60 minutes of flight time, whilst larger landscape surveys spanning several hectares require just a few hours. We can survey sites during excavation breaks with minimal disruption to the dig team.
                </p>
                <p className="text-text-secondary text-lg leading-relaxed mb-6">
                  Processing and delivery hinges on project complexity and your specified outputs. Standard deliverables are typically prepared within 5-7 working days. For urgent projects - such as fast-track excavations or planning deadlines - we provide expedited processing with 48-72 hour turnaround.
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
                        <td className="py-3 px-4 text-text-secondary text-sm hidden md:table-cell">Flight planning, airspace clearance, site liaison</td>
                      </tr>
                      <tr className="bg-background-alt">
                        <td className="py-3 px-4 text-text-primary font-medium">On-Site Data Capture</td>
                        <td className="py-3 px-4 text-gold font-bold">1-4 hours</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden md:table-cell">GCP setup, drone flights, data verification</td>
                      </tr>
                      <tr className="bg-white">
                        <td className="py-3 px-4 text-text-primary font-medium">Processing</td>
                        <td className="py-3 px-4 text-gold font-bold">2-3 days</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden md:table-cell">Image alignment, model generation, georeferencing</td>
                      </tr>
                      <tr className="bg-background-alt">
                        <td className="py-3 px-4 text-text-primary font-medium">Quality Control</td>
                        <td className="py-3 px-4 text-gold font-bold">1-2 days</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden md:table-cell">Accuracy checks, interpretation, annotation</td>
                      </tr>
                      <tr className="bg-white">
                        <td className="py-3 px-4 text-text-primary font-medium">Deliverable Generation</td>
                        <td className="py-3 px-4 text-gold font-bold">1-2 days</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden md:table-cell">Export in required formats, report compilation</td>
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
                    <p className="text-teal font-semibold text-sm">Accelerated Processing Offered</p>
                    <p className="text-text-secondary text-sm">Require faster delivery? 48-72 hour turnaround available for pressing excavation or planning deadlines.</p>
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
                    Ring James
                  </a>
                </div>
              </div>

              {/* Selecting an Archaeological Survey Provider */}
              <div>
                <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-6">
                  <Image
                    src="/images/services/archaeological/archaeological-provider.avif"
                    alt="Survey team meeting with archaeology unit client at excavation site"
                    fill
                    className="object-cover"
                  />
                </div>
                <h2 id="choose-provider" className="text-2xl md:text-3xl font-bold text-teal mb-4 scroll-mt-32">
                  Selecting an <span className="text-gold">Archaeological Survey Provider</span>
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed mb-4">
                  Not all drone survey providers grasp the particular requirements of archaeological projects. When assessing providers, we recommend examining these essential factors:
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gold mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-text-primary"><strong>CAA certification</strong> - Verify they possess valid GVC or legacy PfCO permissions for commercial operations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gold mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-text-primary"><strong>Archaeological comprehension</strong> - Do they appreciate archaeological recording standards and your project specifications?</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gold mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-text-primary"><strong>Comprehensive insurance</strong> - Public liability and professional indemnity coverage suitable for heritage sites</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gold mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-text-primary"><strong>Survey-grade precision</strong> - Can they furnish the accuracy demanded for archaeological documentation?</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gold mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-text-primary"><strong>Heritage sector track record</strong> - Request examples of archaeological projects they have executed</span>
                  </li>
                </ul>
                <p className="text-text-secondary text-lg leading-relaxed mb-6">
                  At Skykam, we satisfy every criterion. We are CAA certified, comprehensively insured, and have executed archaeological survey projects for commercial archaeology units, heritage bodies, and research initiatives throughout the UK.
                </p>

                {/* CTA after provider section */}
                <div className="bg-teal rounded-xl p-5">
                  <p className="text-white font-semibold mb-3">Prepared to collaborate with a provider who comprehends archaeology?</p>
                  <div className="flex flex-wrap gap-3">
                    <QuoteButton className="px-5 py-2.5 rounded-full bg-gold text-teal-dark font-semibold hover:bg-gold/90 transition-colors text-sm btn-shimmer">
                      Speak with James
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

              {/* Cost Comparison with Conventional Methods */}
              <div>
                <h2 id="cost-comparison" className="text-2xl md:text-3xl font-bold text-teal mb-4 scroll-mt-32">
                  <span className="text-gold">Drone Assessment</span> vs Conventional Method Costs
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed mb-4">
                  In the majority of scenarios, yes - frequently by a considerable margin. Conventional photographic recording of excavations demands scaffold towers, multiple camera positions, and substantial time. Ground-based surveying of complex sites entails establishing stations and manually documenting thousands of points.
                </p>
                <p className="text-text-secondary text-lg leading-relaxed mb-6">
                  Our drone surveys capture equivalent or superior data in a fraction of the duration. An excavation that might consume half a day to photograph conventionally can be captured in minutes from above, with vastly greater coverage and consistency. Cost reductions typically span 40-60% compared to conventional methods, whilst providing swifter turnaround and more thorough records.
                </p>

                {/* Final CTA */}
                <div className="bg-gradient-to-r from-teal to-teal-dark rounded-xl p-6 text-center">
                  <h3 className="text-white font-bold text-xl mb-2">Prepared to Explore Your Archaeological Project?</h3>
                  <p className="text-white/80 text-sm mb-4">Specialist guidance - Bespoke pricing - Avg Response within 5 Mins</p>
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
                  With extensive experience in surveying and UAV operations, James personally oversees every archaeological project to ensure professional delivery and accurate recording.
                </p>
              </div>

              {/* Table of Contents */}
              <div className="bg-background-alt border border-border rounded-2xl p-6">
                <h3 className="text-teal font-bold text-lg mb-4">
                  Quick Guide: Drone Archaeological Assessments
                </h3>
                <nav className="space-y-2">
                  {[
                    { id: 'what-is-archaeological', label: 'Understanding Drone Archaeological Assessment' },
                    { id: 'archaeological-cost', label: 'Archaeological Assessment Pricing Guide' },
                    { id: 'archaeological-vs-traditional', label: 'Drone vs Conventional Methods' },
                    { id: 'archaeological-accuracy', label: 'Precision Standards' },
                    { id: 'archaeological-applications', label: 'Key Uses for Archaeological Assessment' },
                    { id: 'hidden-features', label: 'Exposing Concealed Features' },
                    { id: 'archaeological-deliverables', label: 'Survey Outputs & Deliverables' },
                    { id: 'survey-timeline', label: 'Project Timelines & Delivery' },
                    { id: 'choose-provider', label: 'Selecting a Survey Provider' },
                    { id: 'cost-comparison', label: 'Drone vs Conventional Costs' },
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
                  Archaeological Survey Outputs
                </h3>
                <ul className="space-y-3">
                  {[
                    'Site orthomosaic (1-2cm GSD)',
                    '3D models & point clouds',
                    'Feature mapping & interpretation',
                    'Crop mark analysis',
                    'CAD files (DXF/DWG)',
                    'Excavation support services',
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
                    Obtain Pricing
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

      {/* Complementary Survey Services */}
      <section className="py-16 bg-background-alt">
        <div className="container">
          <h2 className="text-2xl font-bold text-teal mb-8 text-center">
            Complementary Survey Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link
              href="/services/drone-topographic-survey"
              className="bg-white border border-border rounded-xl p-6 hover:border-gold hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-teal font-bold text-lg mb-2">Drone Topographic Survey</h3>
              <p className="text-text-secondary text-sm">
                Comprehensive topographic surveys for planning, design and heritage stewardship projects.
              </p>
            </Link>
            <Link
              href="/services/lidar-mapping"
              className="bg-white border border-border rounded-xl p-6 hover:border-gold hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-teal font-bold text-lg mb-2">LiDAR Terrain Mapping</h3>
              <p className="text-text-secondary text-sm">
                Penetrate vegetation to expose concealed earthworks and features beneath canopy cover.
              </p>
            </Link>
            <Link
              href="/services/3d-modelling"
              className="bg-white border border-border rounded-xl p-6 hover:border-gold hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-teal font-bold text-lg mb-2">Three-Dimensional Modelling</h3>
              <p className="text-text-secondary text-sm">
                Comprehensive 3D models of excavations, structures, and monuments for archival and analysis purposes.
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
