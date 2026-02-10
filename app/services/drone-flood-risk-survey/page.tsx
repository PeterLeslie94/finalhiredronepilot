import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import QuoteButton from '@/components/QuoteButton';
import Testimonials from '@/components/Testimonials';
import FloatingCTA from '@/components/FloatingCTA';
import EquipmentSection from '@/components/EquipmentSection';
import { Waves, MapPin, FileText, Building2, Landmark, AlertTriangle, Shield, Clock } from 'lucide-react';
import { ServiceSchema, BreadcrumbSchema } from '@/components/SchemaMarkup';
import { ClientLogoMarqueeInline } from '@/components/ClientLogoMarquee';

export const metadata: Metadata = {
  title: 'Drone Flood Risk Assessment Services | FRA Survey Data UK | Skykam',
  description: 'Expert UAV flood risk surveys throughout Britain. Precise elevation data for FRAs, catchment analysis, and Environment Agency submissions. Fully CAA certified drone operators.',
  keywords: 'drone flood risk survey, drone flood risk assessment, drone FRA survey data, drone flood modelling survey, drone catchment mapping, Environment Agency drone flood survey, drone elevation survey',
};

export default function DroneFloodRiskSurveyPage() {
  return (
    <>
      <ServiceSchema
        name="Drone Flood Risk Assessment Services"
        description="Expert UAV flood risk surveys throughout Britain. Precise elevation data for FRAs, catchment analysis, and Environment Agency submissions. Fully CAA certified drone operators."
        url="https://skykam.co.uk/services/drone-flood-risk-survey"
      />
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://skykam.co.uk" },
        { name: "Services", url: "https://skykam.co.uk/services" },
        { name: "Drone Flood Risk Survey Services", url: "https://skykam.co.uk/services/drone-flood-risk-survey" }
      ]} />
      {/* Hero Section */}
      <section className="relative min-h-[800px] md:min-h-[600px] flex items-start bg-teal -mt-[120px] pt-[120px] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/services/flood-risk/flood-risk-hero.avif"
            alt="Drone view of UK river floodplain during flood risk assessment survey"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-teal-dark via-teal-dark/90 via-40% to-teal-dark/40 z-10" />
        </div>
        <div className="container pt-8 pb-52 lg:pb-40 lg:pt-12 relative z-10">
          <div className="max-w-3xl">
            <p className="text-gold font-semibold uppercase tracking-wider mb-3">
              Flood Risk & Environmental
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Drone Flood Risk Survey Service
            </h1>
            <p className="text-white/80 text-lg md:text-xl mb-8">
              Precise elevation data for flood risk assessments, catchment analysis, and Environment Agency submissions. Survey-grade terrain models with swift delivery.
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

              {/* Understanding drone flood risk assessment */}
              <div>
                <h2 id="what-is-flood-risk" className="text-2xl md:text-3xl font-bold text-teal mb-4 scroll-mt-32">
                  Understanding <span className="text-gold">Drone Flood Risk Assessment</span>
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed mb-4">
                  A drone flood risk assessment employs UAV technology to gather highly precise elevation data from land, watercourses, and floodplains. This information underpins Flood Risk Assessments (FRAs) necessary for planning applications, insurance evaluations, and environmental impact studies throughout Britain.
                </p>
                <p className="text-text-secondary text-lg leading-relaxed">
                  At Skykam Drone Inspections, we operate survey-grade UAVs with RTK positioning to capture centimetre-accurate terrain models. Our data integrates with flood modelling software, enabling engineers and planners to comprehend how water will behave during storm events and pinpoint areas vulnerable to flooding.
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
                        FRA-Ready Survey Data,
                        <span className="text-gold block relative inline-block">
                          Swift Delivery
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
                          'Digital Terrain Model (DTM)',
                          'Catchment boundary analysis',
                          'Contours at specified intervals',
                          'FRA-ready elevation data',
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
                          'CAA certified with full insurance',
                          'Environment Agency compatible outputs',
                          'Survey-grade precision (±2-5cm)',
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
                        <span>Relied upon by environmental consultants, planners, and developers throughout Britain.</span>
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
                    <p className="text-white/50 text-xs uppercase tracking-wider text-center mb-4">Relied upon by major organisations</p>
                    <ClientLogoMarqueeInline />
                  </div>
                </div>
              </div>

              {/* Flood risk assessment pricing guide */}
              <div>
                <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-6">
                  <Image
                    src="/images/services/flood-risk/flood-risk-cost.avif"
                    alt="Surveyor reviewing drone flood risk data on tablet near UK river"
                    fill
                    className="object-cover"
                  />
                </div>
                <h2 id="flood-risk-cost" className="text-2xl md:text-3xl font-bold text-teal mb-4 scroll-mt-32">
                  Flood Risk Assessment <span className="text-gold">Pricing Guide</span>
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed mb-6">
                  Costs vary based on catchment size, site complexity, and specified outputs. Here's a breakdown to assist your planning:
                </p>

                {/* Pricing Table */}
                <div className="rounded-xl overflow-hidden border border-border mb-6">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-teal">
                        <th className="text-left text-white font-semibold py-3 px-4">Catchment Size</th>
                        <th className="text-left text-white font-semibold py-3 px-4">Guide Price</th>
                        <th className="text-left text-white font-semibold py-3 px-4 hidden md:table-cell">Typical Applications</th>
                        <th className="text-left text-white font-semibold py-3 px-4 hidden lg:table-cell">Deliverables</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-white">
                        <td className="py-3 px-4 text-text-primary font-medium">Small Catchment<span className="block text-sm text-text-secondary font-normal">Under 5 ha</span></td>
                        <td className="py-3 px-4 text-gold font-bold">£700+</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden md:table-cell">Single property FRAs, small development sites</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden lg:table-cell">DTM, contours, FRA support</td>
                      </tr>
                      <tr className="bg-background-alt">
                        <td className="py-3 px-4 text-text-primary font-medium">Medium Catchment<span className="block text-sm text-text-secondary font-normal">5–20 ha</span></td>
                        <td className="py-3 px-4 text-gold font-bold">£1,400+</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden md:table-cell">Housing developments, commercial sites</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden lg:table-cell">DTM, DSM, catchment mapping</td>
                      </tr>
                      <tr className="bg-white">
                        <td className="py-3 px-4 text-text-primary font-medium">Large Catchment<span className="block text-sm text-text-secondary font-normal">20–50 ha</span></td>
                        <td className="py-3 px-4 text-gold font-bold">£2,500+</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden md:table-cell">Major developments, infrastructure projects</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden lg:table-cell">Full suite + CAD files</td>
                      </tr>
                      <tr className="bg-background-alt">
                        <td className="py-3 px-4 text-text-primary font-medium">Major Catchment<span className="block text-sm text-text-secondary font-normal">50+ ha</span></td>
                        <td className="py-3 px-4 text-gold font-bold">POA</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden md:table-cell">River catchment studies, strategic flood planning</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden lg:table-cell">Bespoke scope & delivery</td>
                      </tr>
                      <tr className="bg-white">
                        <td className="py-3 px-4 text-text-primary font-medium">Post-Flood Assessment<span className="block text-sm text-text-secondary font-normal">Any size</span></td>
                        <td className="py-3 px-4 text-gold font-bold">POA</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden md:table-cell">Emergency response, damage assessment</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden lg:table-cell">Rapid turnaround available</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-text-secondary text-sm mb-6 italic">
                  *Indicative prices cover standard outputs. Final quotation depends on site demands, accessibility, and particular needs.
                </p>

                {/* What affects your quote */}
                <h3 className="font-bold text-teal mb-3">Factors influencing your quotation</h3>
                <ul className="grid grid-cols-2 gap-2 mb-6">
                  {['Catchment extent & topography', 'Specified outputs', 'Delivery timeframe', 'Site access needs'].map((factor, index) => (
                    <li key={index} className="flex items-center gap-2 text-text-secondary">
                      <svg className="w-4 h-4 text-gold flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm">{factor}</span>
                    </li>
                  ))}
                </ul>

                <p className="text-text-secondary leading-relaxed mb-6">
                  Our UAV-based methodology typically reduces costs by <span className="text-gold font-semibold">40–60%</span> versus conventional ground surveys of flood-prone areas. Share your project specifications and we'll deliver a customised quotation within 24 hours.
                </p>

                {/* CTA Banner */}
                <div className="bg-teal rounded-xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-center sm:text-left">
                    <p className="text-white font-semibold">Prepared for a quotation on your flood risk project?</p>
                    <p className="text-white/70 text-sm">Complimentary, no-commitment quotes within 24 hours</p>
                  </div>
                  <div className="flex gap-3">
                    <a href="tel:+442046340456" className="flex items-center gap-2 px-4 py-2.5 rounded-full border border-white/30 text-white hover:bg-white/10 transition-colors text-sm font-medium">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      Call
                    </a>
                    <QuoteButton className="px-5 py-2.5 rounded-full bg-gold text-teal-dark font-semibold hover:bg-gold/90 transition-colors text-sm btn-shimmer">
                      Compare Quotes
                    </QuoteButton>
                  </div>
                </div>
              </div>

              {/* Drone vs conventional methods */}
              <div>
                <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-6">
                  <Image
                    src="/images/services/flood-risk/flood-risk-comparison.avif"
                    alt="Comparison of drone flood survey versus traditional ground survey methods"
                    fill
                    className="object-cover"
                  />
                </div>
                <h2 id="flood-risk-comparison" className="text-2xl md:text-3xl font-bold text-teal mb-4 scroll-mt-32">
                  Drone Assessment vs <span className="text-gold">Conventional Survey Methods</span>
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed mb-4">
                  Conventional flood risk surveys depend on ground-based teams manually gathering spot heights across floodplains. This methodology is time-intensive, costly, and frequently yields sparse data points that overlook critical terrain features influencing water flow.
                </p>
                <p className="text-text-secondary text-lg leading-relaxed mb-4">
                  Drone flood risk assessments capture millions of elevation points in a fraction of the time, generating detailed terrain models that reveal every undulation, drainage channel, and flow path. This data density produces more precise flood models and identifies hazards that conventional surveys might miss.
                </p>
                {/* Technology Comparison Cards */}
                <div className="mt-8">
                  <h3 className="text-center font-bold text-teal text-xl mb-6">Selecting the Right Approach</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {/* Drone Survey Card */}
                    <div className="relative bg-teal rounded-2xl p-6 overflow-hidden group hover:shadow-xl transition-shadow duration-300">
                      {/* Decorative wave lines */}
                      <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                        <svg viewBox="0 0 100 100" className="w-full h-full">
                          <path d="M0,50 Q25,30 50,50 T100,50" fill="none" stroke="currentColor" strokeWidth="2" className="text-gold" />
                          <path d="M0,60 Q25,40 50,60 T100,60" fill="none" stroke="currentColor" strokeWidth="2" className="text-gold" />
                          <path d="M0,70 Q25,50 50,70 T100,70" fill="none" stroke="currentColor" strokeWidth="2" className="text-gold" />
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
                            <h4 className="text-white font-bold text-lg">Opt for Drone Assessment</h4>
                            <p className="text-gold text-sm font-medium">Rapid & comprehensive</p>
                          </div>
                        </div>
                        <div className="space-y-3">
                          {[
                            { Icon: Waves, text: 'Extensive catchment areas' },
                            { Icon: MapPin, text: 'Challenging access terrain' },
                            { Icon: FileText, text: 'FRA submissions' },
                            { Icon: Clock, text: 'Time-sensitive projects' },
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
                          <circle cx="20" cy="20" r="3" fill="currentColor" className="text-teal" />
                          <circle cx="50" cy="20" r="3" fill="currentColor" className="text-teal" />
                          <circle cx="80" cy="20" r="3" fill="currentColor" className="text-teal" />
                          <circle cx="20" cy="50" r="3" fill="currentColor" className="text-teal" />
                          <circle cx="50" cy="50" r="3" fill="currentColor" className="text-teal" />
                          <circle cx="80" cy="50" r="3" fill="currentColor" className="text-teal" />
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
                            <h4 className="text-teal font-bold text-lg">Conventional Ground Survey</h4>
                            <p className="text-text-secondary text-sm font-medium">Situations where it may still apply</p>
                          </div>
                        </div>
                        <div className="space-y-3">
                          {[
                            { Icon: Building2, text: 'Urban zones with flight limitations' },
                            { Icon: Landmark, text: 'Feature-specific detail required' },
                            { Icon: Shield, text: 'Subsurface infrastructure' },
                            { Icon: AlertTriangle, text: 'Covered or enclosed areas' },
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
                    <p className="text-text-secondary text-sm mb-2">Uncertain which method fits your flood risk needs?</p>
                    <QuoteButton className="text-gold font-semibold hover:underline inline-flex items-center gap-1">
                      Compare Quotes
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </QuoteButton>
                  </div>
                </div>
              </div>

              {/* Precision standards for drone assessments */}
              <div>
                <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-6">
                  <Image
                    src="/images/services/flood-risk/flood-risk-accuracy.avif"
                    alt="Ground control point marker on UK floodplain for precision elevation measurements"
                    fill
                    className="object-cover"
                  />
                </div>
                <h2 id="flood-risk-accuracy" className="text-2xl md:text-3xl font-bold text-teal mb-4 scroll-mt-32">
                  Precision Standards for <span className="text-gold">Drone Flood Risk Surveys</span>
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed mb-4">
                  Our drone flood risk assessments attain vertical precision of ±2-5cm and horizontal precision of ±5-10cm when employing ground control points. This accuracy level is vital for flood modelling, where even minor elevation changes can substantially influence predicted water depths and flow patterns.
                </p>
                <p className="text-text-secondary text-lg leading-relaxed">
                  We utilise RTK/PPK-enabled UAVs with high-resolution sensors to capture dense point clouds. For Environment Agency submissions and planning applications, we establish surveyed control networks and furnish comprehensive accuracy reports with every project. The resulting data surpasses the requirements for most Flood Risk Assessments and hydraulic modelling applications.
                </p>
              </div>

              {/* Applications */}
              <div>
                <h2 id="flood-risk-applications" className="text-2xl md:text-3xl font-bold text-teal mb-4 scroll-mt-32">
                  Key Uses for <span className="text-gold">Drone Flood Risk Surveys</span>
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed mb-6">
                  Drone flood risk assessments supply essential data across numerous applications where precise elevation information determines project success:
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-background-alt rounded-xl p-6">
                    <h3 className="font-bold text-teal mb-2">Flood Risk Assessments (FRAs)</h3>
                    <p className="text-text-secondary text-sm">Planning application support with accurate terrain data for sequential and exception test submissions.</p>
                  </div>
                  <div className="bg-background-alt rounded-xl p-6">
                    <h3 className="font-bold text-teal mb-2">Drainage Design</h3>
                    <p className="text-text-secondary text-sm">SuDS design, surface water management, and drainage infrastructure planning with precise ground levels.</p>
                  </div>
                  <div className="bg-background-alt rounded-xl p-6">
                    <h3 className="font-bold text-teal mb-2">Hydraulic Modelling</h3>
                    <p className="text-text-secondary text-sm">DTM data for flood modelling software including TUFLOW, MIKE, and HEC-RAS applications.</p>
                  </div>
                  <div className="bg-background-alt rounded-xl p-6">
                    <h3 className="font-bold text-teal mb-2">Insurance Assessments</h3>
                    <p className="text-text-secondary text-sm">Property-level flood risk evaluation for insurance underwriting and risk management.</p>
                  </div>
                  <div className="bg-background-alt rounded-xl p-6">
                    <h3 className="font-bold text-teal mb-2">Natural Flood Management</h3>
                    <p className="text-text-secondary text-sm">Catchment analysis for NFM schemes, attenuation features, and environmental flood mitigation.</p>
                  </div>
                  <div className="bg-background-alt rounded-xl p-6">
                    <h3 className="font-bold text-teal mb-2">Post-Flood Assessment</h3>
                    <p className="text-text-secondary text-sm">Emergency response surveys to document flood extents, damage assessment, and recovery planning.</p>
                  </div>
                </div>

                {/* CTA after applications */}
                <div className="mt-8 text-center">
                  <p className="text-text-secondary mb-4">Got a flood risk project requiring survey data?</p>
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

              {/* Environment Agency data compatibility */}
              <div>
                <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-6">
                  <Image
                    src="/images/services/flood-risk/flood-risk-feature.avif"
                    alt="Flood extent modelling visualization with water level overlay on terrain model"
                    fill
                    className="object-cover"
                  />
                </div>
                <h2 id="environment-agency" className="text-2xl md:text-3xl font-bold text-teal mb-4 scroll-mt-32">
                  Supporting <span className="text-gold">Environment Agency</span> Flood Assessments
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed mb-4">
                  Absolutely—our drone flood risk survey data is specifically prepared to satisfy Environment Agency requirements. We comprehend the technical specifications demanded for FRA submissions, pre-application discussions, and formal planning consultations with Lead Local Flood Authorities.
                </p>
                <p className="text-text-secondary text-lg leading-relaxed mb-4">
                  Our outputs integrate directly with Environment Agency flood mapping data and modelling software. We supply data in standard formats (GeoTIFF, ASCII grid, LAS/LAZ) that hydraulic engineers can import straight into their flood models. We also furnish accuracy statements and methodology reports necessary for regulatory submissions.
                </p>
                <p className="text-text-secondary text-lg leading-relaxed">
                  Whether you're undertaking a strategic flood risk assessment, site-specific FRA, or furnishing evidence for a planning appeal, our data delivers the foundation for defensible conclusions regarding flood risk.
                </p>
              </div>

              {/* Survey outputs and deliverables */}
              <div>
                <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-6">
                  <Image
                    src="/images/services/flood-risk/flood-risk-deliverables.avif"
                    alt="Flood risk assessment reports and terrain models displayed on computer screens"
                    fill
                    className="object-cover"
                  />
                </div>
                <h2 id="flood-risk-deliverables" className="text-2xl md:text-3xl font-bold text-teal mb-4 scroll-mt-32">
                  Survey Outputs & <span className="text-gold">Deliverable Packages</span>
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed mb-6">
                  We customise outputs to match your specific flood risk application. Our standard packages encompass:
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-4 bg-background-alt rounded-xl p-4">
                    <div className="w-10 h-10 bg-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-teal">Digital Terrain Model (DTM)</h4>
                      <p className="text-text-secondary text-sm">Bare-earth elevation model with vegetation removed. Essential for flood modelling and FRA submissions.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4 bg-background-alt rounded-xl p-4">
                    <div className="w-10 h-10 bg-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-teal">Digital Surface Model (DSM)</h4>
                      <p className="text-text-secondary text-sm">Top surface including buildings and vegetation. Useful for surface water flow analysis and visualisation.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4 bg-background-alt rounded-xl p-4">
                    <div className="w-10 h-10 bg-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-teal">Catchment Mapping</h4>
                      <p className="text-text-secondary text-sm">Watershed boundaries, flow accumulation analysis, and drainage catchment delineation.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4 bg-background-alt rounded-xl p-4">
                    <div className="w-10 h-10 bg-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-teal">Contours & Cross-Sections</h4>
                      <p className="text-text-secondary text-sm">Contour lines at your specified interval, plus river and channel cross-sections for hydraulic modelling.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4 bg-background-alt rounded-xl p-4">
                    <div className="w-10 h-10 bg-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-teal">CAD Files & GIS Data</h4>
                      <p className="text-text-secondary text-sm">DWG/DXF files for design software and georeferenced GIS formats (GeoTIFF, Shapefile, ASCII Grid).</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4 bg-background-alt rounded-xl p-4">
                    <div className="w-10 h-10 bg-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-teal">FRA Support Data</h4>
                      <p className="text-text-secondary text-sm">Accuracy statements, methodology reports, and survey metadata for regulatory submissions.</p>
                    </div>
                  </li>
                </ul>

                {/* CTA after deliverables */}
                <div className="mt-6 p-5 bg-gold/10 border border-gold/20 rounded-xl">
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-teal font-semibold text-center sm:text-left">Require particular outputs for your FRA?</p>
                    <QuoteButton className="btn btn-primary btn-shimmer whitespace-nowrap">
                      Discuss Your Needs
                    </QuoteButton>
                  </div>
                </div>
              </div>

              {/* Project timelines and delivery */}
              <div>
                <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-6">
                  <Image
                    src="/images/services/flood-risk/flood-risk-timeline.avif"
                    alt="Drone pilot near UK river preparing for flood risk survey flight"
                    fill
                    className="object-cover"
                  />
                </div>
                <h2 id="survey-timeline" className="text-2xl md:text-3xl font-bold text-teal mb-4 scroll-mt-32">
                  Project Timelines & <span className="text-gold">Delivery Schedules</span>
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed mb-4">
                  On-site data acquisition is remarkably efficient. A typical 10-hectare catchment survey requires just 2-3 hours of flight time, plus setup and ground control establishment. Larger catchments can be surveyed during a single day visit.
                </p>
                <p className="text-text-secondary text-lg leading-relaxed mb-6">
                  Processing and final delivery varies with the complexity of outputs required. Standard DTM and contour deliverables are typically complete within 5-7 working days. For urgent FRA deadlines, we provide expedited processing with 48-72 hour turnaround offered.
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
                        <td className="py-3 px-4 text-text-secondary text-sm hidden md:table-cell">Flight planning, airspace clearance, site risk assessment</td>
                      </tr>
                      <tr className="bg-background-alt">
                        <td className="py-3 px-4 text-text-primary font-medium">On-Site Data Capture</td>
                        <td className="py-3 px-4 text-gold font-bold">½-1 day</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden md:table-cell">GCP setup, drone flights, data verification</td>
                      </tr>
                      <tr className="bg-white">
                        <td className="py-3 px-4 text-text-primary font-medium">Data Processing</td>
                        <td className="py-3 px-4 text-gold font-bold">2-3 days</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden md:table-cell">Point cloud generation, DTM/DSM creation</td>
                      </tr>
                      <tr className="bg-background-alt">
                        <td className="py-3 px-4 text-text-primary font-medium">Quality Control</td>
                        <td className="py-3 px-4 text-gold font-bold">1-2 days</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden md:table-cell">Accuracy checks, deliverable generation</td>
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
                    <p className="text-teal font-semibold text-sm">Fast-Track Processing Option</p>
                    <p className="text-text-secondary text-sm">Require data urgently for an FRA deadline? 48-72 hour turnaround offered.</p>
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

              {/* Selecting a survey provider */}
              <div>
                <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-6">
                  <Image
                    src="/images/services/flood-risk/flood-risk-provider.avif"
                    alt="Survey team meeting with client discussing flood risk data"
                    fill
                    className="object-cover"
                  />
                </div>
                <h2 id="choose-provider" className="text-2xl md:text-3xl font-bold text-teal mb-4 scroll-mt-32">
                  Selecting a <span className="text-gold">Flood Risk Survey Provider</span>
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed mb-4">
                  Flood risk assessments demand specific expertise beyond standard drone photography. When evaluating potential providers, we suggest examining these critical aspects:
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gold mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-text-primary"><strong>CAA certification</strong> – Verify they possess valid GVC or legacy PfCO authorisation for commercial operations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gold mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-text-primary"><strong>Flood risk expertise</strong> – Enquire about their background with FRAs and Environment Agency requirements</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gold mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-text-primary"><strong>Survey-grade precision</strong> – Confirm they employ RTK/PPK positioning and ground control for accuracy work</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gold mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-text-primary"><strong>Compatible formats</strong> – Ensure they can supply data in formats your hydraulic engineers require</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gold mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-text-primary"><strong>Insurance coverage</strong> – Public liability and professional indemnity appropriate to your project scope</span>
                  </li>
                </ul>
                <p className="text-text-secondary text-lg leading-relaxed mb-6">
                  At Skykam Drone Inspections, we satisfy every criterion. We hold CAA approval, maintain comprehensive insurance, and have supplied flood risk survey data for planning applications, major developments, and environmental projects throughout Britain.
                </p>

                {/* CTA after provider section */}
                <div className="bg-teal rounded-xl p-5">
                  <p className="text-white font-semibold mb-3">Prepared to collaborate with a dependable flood risk survey specialist?</p>
                  <div className="flex flex-wrap gap-3">
                    <QuoteButton className="px-5 py-2.5 rounded-full bg-gold text-teal-dark font-semibold hover:bg-gold/90 transition-colors text-sm btn-shimmer">
                      Compare Quotes
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

              {/* Drone assessment cost advantages */}
              <div>
                <h2 id="cost-comparison" className="text-2xl md:text-3xl font-bold text-teal mb-4 scroll-mt-32">
                  Drone Assessment <span className="text-gold">Cost Advantages</span>
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed mb-4">
                  In the majority of situations, substantially so. Conventional ground surveys of floodplains necessitate teams working in demanding terrain, frequently near water and in wet conditions. The time required to manually capture adequate elevation points makes traditional surveys expensive, particularly for larger catchments.
                </p>
                <p className="text-text-secondary text-lg leading-relaxed mb-6">
                  Our drone flood risk assessments gather equivalent or superior data in a fraction of the time. A catchment that might occupy a ground team for several days can be surveyed in hours, with considerably denser data coverage. The savings typically span 40-60% compared with conventional approaches, whilst delivering quicker turnaround and superior data for flood modelling.
                </p>

                {/* Final CTA */}
                <div className="bg-gradient-to-r from-teal to-teal-dark rounded-xl p-6 text-center">
                  <h3 className="text-white font-bold text-xl mb-2">Prepared to Talk Through Your Flood Risk Project?</h3>
                  <p className="text-white/80 text-sm mb-4">Specialist guidance • Customised pricing • Avg Response within 5 Mins</p>
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
                  With extensive experience in surveying and UAV operations, James personally oversees every flood risk project to ensure survey-grade accuracy and professional delivery.
                </p>
              </div>

              {/* Table of Contents */}
              <div className="bg-background-alt border border-border rounded-2xl p-6">
                <h3 className="text-teal font-bold text-lg mb-4">
                  Quick Guide: Drone Flood Risk Assessments
                </h3>
                <nav className="space-y-2">
                  {[
                    { id: 'what-is-flood-risk', label: 'Understanding Drone Flood Risk Assessment' },
                    { id: 'flood-risk-cost', label: 'Flood Risk Assessment Pricing Guide' },
                    { id: 'flood-risk-comparison', label: 'Drone vs Conventional Survey Methods' },
                    { id: 'flood-risk-accuracy', label: 'Precision Standards for Drone Surveys' },
                    { id: 'flood-risk-applications', label: 'Key Uses for Drone Flood Risk Surveys' },
                    { id: 'environment-agency', label: 'Environment Agency Compatibility' },
                    { id: 'flood-risk-deliverables', label: 'Survey Outputs & Deliverable Packages' },
                    { id: 'survey-timeline', label: 'Project Timelines & Delivery Schedules' },
                    { id: 'choose-provider', label: 'Selecting a Survey Provider' },
                    { id: 'cost-comparison', label: 'Drone Assessment Cost Advantages' },
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
                  Flood Risk Assessment Outputs
                </h3>
                <ul className="space-y-3">
                  {[
                    'Digital Terrain Model (DTM)',
                    'Digital Surface Model (DSM)',
                    'Catchment boundary analysis',
                    'Contours & cross-sections',
                    'CAD drawings (DWG/DXF)',
                    'FRA support materials',
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
                  Obtain specialist guidance and customised pricing for your flood risk assessment.
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
            Complementary Survey Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link
              href="/services/drone-topographic-survey"
              className="bg-white border border-border rounded-xl p-6 hover:border-gold hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-teal font-bold text-lg mb-2">Drone Topographic Mapping</h3>
              <p className="text-text-secondary text-sm">
                Comprehensive terrain surveys for planning, design and construction undertakings.
              </p>
            </Link>
            <Link
              href="/services/lidar-mapping"
              className="bg-white border border-border rounded-xl p-6 hover:border-gold hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-teal font-bold text-lg mb-2">UAV LiDAR Scanning</h3>
              <p className="text-text-secondary text-sm">
                Vegetation penetration and precise terrain models for demanding environments.
              </p>
            </Link>
            <Link
              href="/services/drone-survey"
              className="bg-white border border-border rounded-xl p-6 hover:border-gold hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-teal font-bold text-lg mb-2">Drone Survey Solutions</h3>
              <p className="text-text-secondary text-sm">
                Full-scope drone assessments delivering 3D reconstructions and orthomosaics.
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
