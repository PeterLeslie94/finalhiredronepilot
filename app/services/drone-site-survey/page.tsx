import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import QuoteButton from '@/components/QuoteButton';
import Testimonials from '@/components/Testimonials';
import FloatingCTA from '@/components/FloatingCTA';
import EquipmentSection from '@/components/EquipmentSection';
import { ServiceSchema, BreadcrumbSchema } from '@/components/SchemaMarkup';
import { ClientLogoMarqueeInline } from '@/components/ClientLogoMarquee';
import { Building2, Home, Factory, Warehouse, MapPin, Ruler, FileText, Box } from 'lucide-react';

export const metadata: Metadata = {
  title: 'UAV Site Survey Solutions | Drone Site Mapping UK | Hire Drone Pilot',
  description: 'Expert UAV site survey solutions throughout the UK. Thorough site mapping, perimeter surveys, and feature documentation. CAA authorised drone operators with rapid delivery.',
  keywords: 'drone site survey, drone site survey uk, drone development site survey, site mapping drone, boundary survey drone, drone site feature survey',
};

export default function DroneSiteSurveyPage() {
  return (
    <>
      <ServiceSchema
        name="UAV Site Survey Solutions"
        description="Expert UAV site survey solutions throughout the UK. Thorough site mapping, perimeter surveys, and feature documentation. CAA authorised drone operators with rapid delivery."
        url="https://hiredronepilot.uk/services/drone-site-survey"
      />
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://hiredronepilot.uk" },
        { name: "Services", url: "https://hiredronepilot.uk/services" },
        { name: "UAV Site Survey Solutions", url: "https://hiredronepilot.uk/services/drone-site-survey" }
      ]} />

      {/* Hero Section */}
      <section className="relative min-h-[800px] md:min-h-[600px] flex items-start bg-teal -mt-[120px] pt-[120px] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/services/site/site-hero.avif"
            alt="Drone photography of UK development site with comprehensive site survey in progress"
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
              Drone Site Survey Service
            </h1>
            <p className="text-white/80 text-lg md:text-xl mb-8">
              Thorough site documentation from above. Record boundaries, features, access points, and current conditions in one visit.
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

              {/* What is a Drone Site Survey? */}
              <div>
                <h2 id="what-is-site-survey" className="text-2xl md:text-3xl font-bold text-teal mb-4 scroll-mt-32">
                  Understanding <span className="text-gold">Drone Site Surveys</span>
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed mb-4">
                  A UAV site survey delivers a thorough drone assessment of your development site, documenting everything from perimeters and access routes to existing features and ground conditions. Unlike conventional ground surveys that can require days to finish, our drone approach captures the entire site in hours—providing the complete picture you need for planning, design, and due diligence.
                </p>
                <p className="text-text-secondary text-lg leading-relaxed">
                  At Hire Drone Pilot, we combine high-resolution drone photography with precision photogrammetry to produce detailed orthomosaic maps, <Link href="/services/drone-point-cloud-mapping" className="text-gold hover:underline">3D models</Link>, and CAD-ready site plans. Whether you&apos;re acquiring a site, preparing a planning application, or briefing your design team, our UAV site surveys provide you with accurate, up-to-date information about precisely what exists on the ground.
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
                        Comprehensive Site Data,
                        <span className="text-gold block relative inline-block">
                          Rapidly Delivered
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
                          'High-resolution site orthomosaic',
                          'CAD-ready site plans (DWG/DXF)',
                          'Boundary and feature mapping',
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
                          'Same-week availability',
                          'Latest DJI survey equipment',
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
                        <span>Relied upon by developers, architects & planning consultants throughout the UK.</span>
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

              {/* How much does a drone site survey cost? */}
              <div>
                <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-6">
                  <Image
                    src="/images/services/site/site-cost.avif"
                    alt="Surveyor at development site reviewing drone site survey data on tablet"
                    fill
                    className="object-cover"
                  />
                </div>
                <h2 id="site-survey-cost" className="text-2xl md:text-3xl font-bold text-teal mb-4 scroll-mt-32">
                  <span className="text-gold">Drone Site Survey</span> Pricing Guide
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed mb-6">
                  Pricing varies based on your site dimensions and required outputs. Here&apos;s a reference to assist your budgeting:
                </p>

                {/* Pricing Table */}
                <div className="rounded-xl overflow-hidden border border-border mb-6">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-teal">
                        <th className="text-left text-white font-semibold py-3 px-4">Site Size</th>
                        <th className="text-left text-white font-semibold py-3 px-4">Guide Price</th>
                        <th className="text-left text-white font-semibold py-3 px-4 hidden md:table-cell">Typical Projects</th>
                        <th className="text-left text-white font-semibold py-3 px-4 hidden lg:table-cell">Deliverables</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-white">
                        <td className="py-3 px-4 text-text-primary font-medium">Micro<span className="block text-sm text-text-secondary font-normal">Under 0.5 ha</span></td>
                        <td className="py-3 px-4 text-gold font-bold">£500+</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden md:table-cell">Single plots, small commercial sites, garden developments</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden lg:table-cell">Orthomosaic, basic site plan</td>
                      </tr>
                      <tr className="bg-background-alt">
                        <td className="py-3 px-4 text-text-primary font-medium">Small<span className="block text-sm text-text-secondary font-normal">0.5–2 ha</span></td>
                        <td className="py-3 px-4 text-gold font-bold">£700+</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden md:table-cell">Residential developments, retail sites, school grounds</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden lg:table-cell">Orthomosaic, DTM, site plan</td>
                      </tr>
                      <tr className="bg-white">
                        <td className="py-3 px-4 text-text-primary font-medium">Medium<span className="block text-sm text-text-secondary font-normal">2–5 ha</span></td>
                        <td className="py-3 px-4 text-gold font-bold">£1,000+</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden md:table-cell">Housing estates, industrial parks, farm diversification</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden lg:table-cell">Full deliverable suite</td>
                      </tr>
                      <tr className="bg-background-alt">
                        <td className="py-3 px-4 text-text-primary font-medium">Large<span className="block text-sm text-text-secondary font-normal">5–10 ha</span></td>
                        <td className="py-3 px-4 text-gold font-bold">£1,500+</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden md:table-cell">Mixed-use developments, logistics sites, large estates</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden lg:table-cell">Full suite + 3D model</td>
                      </tr>
                      <tr className="bg-white">
                        <td className="py-3 px-4 text-text-primary font-medium">Enterprise<span className="block text-sm text-text-secondary font-normal">10+ ha</span></td>
                        <td className="py-3 px-4 text-gold font-bold">£2,500+</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden md:table-cell">Strategic land, urban extensions, infrastructure schemes</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden lg:table-cell">Custom deliverables package</td>
                      </tr>
                      <tr className="bg-background-alt">
                        <td className="py-3 px-4 text-text-primary font-medium">Major Projects<span className="block text-sm text-text-secondary font-normal">Multi-site</span></td>
                        <td className="py-3 px-4 text-gold font-bold">POA</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden md:table-cell">Portfolio surveys, regional assessments, land bank reviews</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden lg:table-cell">Bespoke scope & phased delivery</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-text-secondary text-sm mb-6 italic">
                  *Guide prices include standard deliverables. Final quotation based on site complexity, access, and specific requirements.
                </p>

                {/* What affects your quote */}
                <h3 className="font-bold text-teal mb-3">What influences your quotation?</h3>
                <ul className="grid grid-cols-2 gap-2 mb-6">
                  {['Site size & complexity', 'Required deliverables', 'Turnaround time', 'Access arrangements'].map((factor, index) => (
                    <li key={index} className="flex items-center gap-2 text-text-secondary">
                      <svg className="w-4 h-4 text-gold flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm">{factor}</span>
                    </li>
                  ))}
                </ul>

                <p className="text-text-secondary leading-relaxed mb-6">
                  Our UAV site surveys typically cost <span className="text-gold font-semibold">50-70% less</span> than conventional ground surveys whilst providing more thorough data. Share your site details with us and we&apos;ll supply a bespoke quotation within 24 hours.
                </p>

                {/* CTA Banner */}
                <div className="bg-teal rounded-xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-center sm:text-left">
                    <p className="text-white font-semibold">Prepared to receive a quotation for your site?</p>
                    <p className="text-white/70 text-sm">Complimentary, no-obligation quotes within 24 hours</p>
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

              {/* Drone Site Survey vs Traditional Survey */}
              <div>
                <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-6">
                  <Image
                    src="/images/services/site/site-comparison.avif"
                    alt="Drone site survey vs traditional ground survey comparison showing modern efficiency"
                    fill
                    className="object-cover"
                  />
                </div>
                <h2 id="site-survey-vs-traditional" className="text-2xl md:text-3xl font-bold text-teal mb-4 scroll-mt-32">
                  Comparing <span className="text-gold">Drone Site Surveys</span> and Conventional Methods
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed mb-4">
                  Conventional site surveys demand teams of surveyors traversing the ground with total stations and GPS equipment, measuring each feature individually. This approach functions well but consumes time—a complex 5-hectare site might require several days to survey thoroughly.
                </p>
                <p className="text-text-secondary text-lg leading-relaxed mb-4">
                  UAV site surveys capture identical information from above in a fraction of the time. We photograph the entire site at high resolution, then process thousands of overlapping images into accurate maps, models, and plans. The outcome is frequently more thorough than traditional methods—we document everything visible from above, not merely the points a ground team elects to measure.
                </p>
                {/* Technology Comparison Cards */}
                <div className="mt-8">
                  <h3 className="text-center font-bold text-teal text-xl mb-6">Side-by-Side Comparison</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {/* Drone Site Survey Card */}
                    <div className="relative bg-teal rounded-2xl p-6 overflow-hidden group hover:shadow-xl transition-shadow duration-300">
                      {/* Decorative elements */}
                      <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                        <svg viewBox="0 0 100 100" className="w-full h-full">
                          <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="2" className="text-gold" />
                          <circle cx="50" cy="50" r="25" fill="none" stroke="currentColor" strokeWidth="2" className="text-gold" />
                          <circle cx="50" cy="50" r="10" fill="currentColor" className="text-gold" />
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
                            <h4 className="text-white font-bold text-lg">UAV Site Survey</h4>
                            <p className="text-gold text-sm font-medium">Rapid & thorough</p>
                          </div>
                        </div>
                        <div className="space-y-3">
                          {[
                            { text: 'Finished in hours, not days' },
                            { text: 'Documents entire site at once' },
                            { text: '50-70% cost reduction' },
                            { text: 'Visual record of conditions' },
                          ].map((item, i) => (
                            <div key={i} className="flex items-center gap-3 bg-white/10 rounded-lg px-4 py-2.5">
                              <svg className="w-5 h-5 text-gold flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                              <span className="text-white/90 font-medium">{item.text}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Traditional Survey Card */}
                    <div className="relative bg-white border-2 border-border rounded-2xl p-6 overflow-hidden group hover:border-gold hover:shadow-xl transition-all duration-300">
                      <div className="relative z-10">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-12 h-12 bg-teal/10 rounded-xl flex items-center justify-center">
                            <Ruler className="w-6 h-6 text-teal" />
                          </div>
                          <div>
                            <h4 className="text-teal font-bold text-lg">Conventional Survey</h4>
                            <p className="text-text-secondary text-sm font-medium">Ground-based approach</p>
                          </div>
                        </div>
                        <div className="space-y-3">
                          {[
                            { text: 'Requires days for large sites' },
                            { text: 'Point-by-point measurement' },
                            { text: 'Greater labour expenses' },
                            { text: 'Limited visual documentation' },
                          ].map((item, i) => (
                            <div key={i} className="flex items-center gap-3 bg-background-alt rounded-lg px-4 py-2.5">
                              <svg className="w-5 h-5 text-text-secondary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
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
                    <p className="text-text-secondary text-sm mb-2">Uncertain which approach fits your project?</p>
                    <QuoteButton className="text-gold font-semibold hover:underline inline-flex items-center gap-1">
                      Receive professional guidance
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </QuoteButton>
                  </div>
                </div>
              </div>

              {/* What accuracy can a drone site survey achieve? */}
              <div>
                <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-6">
                  <Image
                    src="/images/services/site/site-accuracy.avif"
                    alt="Ground control point on development site for survey accuracy with GPS equipment"
                    fill
                    className="object-cover"
                  />
                </div>
                <h2 id="site-survey-accuracy" className="text-2xl md:text-3xl font-bold text-teal mb-4 scroll-mt-32">
                  <span className="text-gold">Drone Site Survey</span> Precision Levels
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed mb-4">
                  Our UAV site surveys consistently achieve horizontal accuracy of ±2-5cm and vertical accuracy of ±3-5cm when employing ground control points. This level of precision is appropriate for the vast majority of planning, design, and due diligence applications.
                </p>
                <p className="text-text-secondary text-lg leading-relaxed">
                  We utilise RTK-enabled drones with real-time positioning, combined with strategically placed ground control points surveyed to OSGB36 coordinates. This guarantees your site data integrates accurately with Ordnance Survey mapping and can be used alongside other survey data with assurance. For projects demanding higher accuracy, we can deploy additional ground control and enhanced processing workflows.
                </p>
              </div>

              {/* Applications */}
              <div>
                <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-6">
                  <Image
                    src="/images/services/site/site-applications.avif"
                    alt="Various site types from above showing residential commercial and industrial developments"
                    fill
                    className="object-cover"
                  />
                </div>
                <h2 id="site-survey-applications" className="text-2xl md:text-3xl font-bold text-teal mb-4 scroll-mt-32">
                  Common Uses for <span className="text-gold">Drone Site Surveys</span>
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed mb-6">
                  UAV site surveys inform decisions at every stage of the development lifecycle. Here are the principal applications where our clients experience the greatest benefit:
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-background-alt rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <Home className="w-6 h-6 text-gold" />
                      <h3 className="font-bold text-teal">Residential Development</h3>
                    </div>
                    <p className="text-text-secondary text-sm">Site appraisals, capacity assessments, planning submissions, and progress tracking throughout construction.</p>
                  </div>
                  <div className="bg-background-alt rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <Building2 className="w-6 h-6 text-gold" />
                      <h3 className="font-bold text-teal">Commercial Sites</h3>
                    </div>
                    <p className="text-text-secondary text-sm">Retail parks, office developments, and mixed-use schemes demanding thorough site documentation.</p>
                  </div>
                  <div className="bg-background-alt rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <Factory className="w-6 h-6 text-gold" />
                      <h3 className="font-bold text-teal">Industrial Development</h3>
                    </div>
                    <p className="text-text-secondary text-sm">Factories, distribution centres, and manufacturing facilities—frequently with intricate existing infrastructure.</p>
                  </div>
                  <div className="bg-background-alt rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <Warehouse className="w-6 h-6 text-gold" />
                      <h3 className="font-bold text-teal">Logistics & Warehousing</h3>
                    </div>
                    <p className="text-text-secondary text-sm">Large format buildings requiring precise site levels and access route planning.</p>
                  </div>
                  <div className="bg-background-alt rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <MapPin className="w-6 h-6 text-gold" />
                      <h3 className="font-bold text-teal">Land Acquisition</h3>
                    </div>
                    <p className="text-text-secondary text-sm">Due diligence surveys for land purchases, revealing existing conditions and potential constraints.</p>
                  </div>
                  <div className="bg-background-alt rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <FileText className="w-6 h-6 text-gold" />
                      <h3 className="font-bold text-teal">Planning Applications</h3>
                    </div>
                    <p className="text-text-secondary text-sm">Accurate site plans and contextual imagery to support planning submissions and consultations.</p>
                  </div>
                </div>

                {/* CTA after applications */}
                <div className="mt-8 text-center">
                  <p className="text-text-secondary mb-4">Have a site requiring surveying?</p>
                  <div className="flex flex-wrap justify-center gap-3">
                    <QuoteButton className="btn btn-primary btn-shimmer">
                      Talk About Your Project
                    </QuoteButton>
                    <a href="tel:+441334804554" className="btn btn-outline">
                      Phone +44 1334 804554
                    </a>
                  </div>
                </div>
              </div>

              {/* What features can a drone site survey capture? */}
              <div>
                <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-6">
                  <Image
                    src="/images/services/site/site-feature.avif"
                    alt="Complete site overview showing all features boundaries access routes from drone"
                    fill
                    className="object-cover"
                  />
                </div>
                <h2 id="site-survey-features" className="text-2xl md:text-3xl font-bold text-teal mb-4 scroll-mt-32">
                  What Elements Can a <span className="text-gold">Drone Site Survey</span> Document?
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed mb-4">
                  A thorough UAV site survey documents everything visible from above—and that&apos;s typically more than you&apos;d anticipate. Our surveys record the complete picture of your site&apos;s existing conditions:
                </p>
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  {[
                    { title: 'Perimeters & Fencing', desc: 'Property lines, fence positions, walls, and hedgerows' },
                    { title: 'Buildings & Structures', desc: 'Existing buildings, outbuildings, ruins, and foundations' },
                    { title: 'Access & Circulation', desc: 'Roads, paths, tracks, gates, and hardstanding areas' },
                    { title: 'Vegetation', desc: 'Trees (with heights), woodland, scrub, and hedges' },
                    { title: 'Utilities & Services', desc: 'Visible manholes, poles, substations, and infrastructure' },
                    { title: 'Water Features', desc: 'Ponds, streams, ditches, and drainage channels' },
                    { title: 'Levels & Topography', desc: 'Ground levels, slopes, banks, and elevation changes' },
                    { title: 'Current Uses', desc: 'Parking areas, storage, waste, and site activities' },
                  ].map((feature, index) => (
                    <div key={index} className="flex items-start gap-3 bg-background-alt rounded-lg p-4">
                      <svg className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <div>
                        <h4 className="font-semibold text-teal">{feature.title}</h4>
                        <p className="text-text-secondary text-sm">{feature.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-text-secondary text-lg leading-relaxed">
                  The orthomosaic imagery we provide serves as a permanent visual record of site conditions at survey date—invaluable for comparison with future surveys or resolving disputes about what existed before development commenced.
                </p>
              </div>

              {/* What deliverables? */}
              <div>
                <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-6">
                  <Image
                    src="/images/services/site/site-deliverables.avif"
                    alt="Site plan and CAD drawings displayed on computer screen showing professional deliverables"
                    fill
                    className="object-cover"
                  />
                </div>
                <h2 id="site-survey-deliverables" className="text-2xl md:text-3xl font-bold text-teal mb-4 scroll-mt-32">
                  Your <span className="text-gold">Drone Site Survey</span> Outputs
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed mb-6">
                  We customise deliverables to your project requirements, but our standard UAV site survey outputs include:
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-4 bg-background-alt rounded-xl p-4">
                    <div className="w-10 h-10 bg-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-teal">Site Orthomosaic</h4>
                      <p className="text-text-secondary text-sm">High-resolution, georeferenced drone imagery displaying every detail of your site. Typically 2-3cm per pixel resolution.</p>
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
                      <p className="text-text-secondary text-sm">Bare-earth surface model revealing <Link href="/services/drone-topographical-survey" className="text-gold hover:underline">ground levels</Link> across the site. Essential for level design and earthworks planning.</p>
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
                      <p className="text-text-secondary text-sm">Top surface encompassing vegetation and structures. Valuable for visibility analysis and comprehending site context.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4 bg-background-alt rounded-xl p-4">
                    <div className="w-10 h-10 bg-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-teal">Perimeter Mapping</h4>
                      <p className="text-text-secondary text-sm">Precise mapping of physical <Link href="/services/drone-boundary-survey" className="text-gold hover:underline">boundaries</Link>, fence lines, and property extents visible from drone imagery.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4 bg-background-alt rounded-xl p-4">
                    <div className="w-10 h-10 bg-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-teal">CAD Site Plans (DWG/DXF)</h4>
                      <p className="text-text-secondary text-sm">Professional CAD drawings prepared for your design team. Layered format compatible with AutoCAD, Revit, and other software.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4 bg-background-alt rounded-xl p-4">
                    <div className="w-10 h-10 bg-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Box className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <h4 className="font-bold text-teal">3D Site Model</h4>
                      <p className="text-text-secondary text-sm">Textured 3D mesh model for visualisation, design context, and stakeholder presentations.</p>
                    </div>
                  </li>
                </ul>

                {/* CTA after deliverables */}
                <div className="mt-6 p-5 bg-gold/10 border border-gold/20 rounded-xl">
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-teal font-semibold text-center sm:text-left">Require specific deliverables for your project?</p>
                    <QuoteButton className="btn btn-primary btn-shimmer whitespace-nowrap">
                      Share Your Requirements
                    </QuoteButton>
                  </div>
                </div>
              </div>

              {/* How long does it take? */}
              <div>
                <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-6">
                  <Image
                    src="/images/services/site/site-timeline.avif"
                    alt="Drone pilot preparing for site survey flight at UK development with professional equipment"
                    fill
                    className="object-cover"
                  />
                </div>
                <h2 id="site-survey-timeline" className="text-2xl md:text-3xl font-bold text-teal mb-4 scroll-mt-32">
                  <span className="text-gold">Drone Site Survey</span> Duration
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed mb-4">
                  On-site data capture is rapid. Most sites under 10 hectares can be surveyed in a single morning, including ground control setup. Larger sites may require a full day, but we can frequently accomplish what would occupy a ground team for a week in mere hours.
                </p>
                <p className="text-text-secondary text-lg leading-relaxed mb-6">
                  Processing and delivery depends on your required outputs. Standard deliverables are typically prepared within 3-5 working days. For urgent projects, we provide express processing with next-day turnaround available at additional cost.
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
                        <td className="py-3 px-4 text-text-primary font-medium">Booking & Planning</td>
                        <td className="py-3 px-4 text-gold font-bold">1-2 days</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden md:table-cell">Flight planning, airspace checks, access arrangements</td>
                      </tr>
                      <tr className="bg-background-alt">
                        <td className="py-3 px-4 text-text-primary font-medium">On-Site Survey</td>
                        <td className="py-3 px-4 text-gold font-bold">½-1 day</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden md:table-cell">GCP setup, drone flights, data verification</td>
                      </tr>
                      <tr className="bg-white">
                        <td className="py-3 px-4 text-text-primary font-medium">Data Processing</td>
                        <td className="py-3 px-4 text-gold font-bold">1-2 days</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden md:table-cell">Image alignment, georeferencing, model generation</td>
                      </tr>
                      <tr className="bg-background-alt">
                        <td className="py-3 px-4 text-text-primary font-medium">Feature Extraction</td>
                        <td className="py-3 px-4 text-gold font-bold">1-2 days</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden md:table-cell">CAD drafting, boundary mapping, QC checks</td>
                      </tr>
                      <tr className="bg-white">
                        <td className="py-3 px-4 text-text-primary font-medium">Delivery & Handover</td>
                        <td className="py-3 px-4 text-gold font-bold">Same day</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden md:table-cell">File transfer, format checks, support call if needed</td>
                      </tr>
                      <tr className="bg-teal/10">
                        <td className="py-3 px-4 text-teal font-bold">Total (Standard)</td>
                        <td className="py-3 px-4 text-teal font-bold">3-5 working days</td>
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
                    <p className="text-text-secondary text-sm">Require it sooner? Next-day turnaround available for urgent projects.</p>
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
                    Talk To Our Team
                  </a>
                </div>
              </div>

              {/* How to choose a provider */}
              <div>
                <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-6">
                  <Image
                    src="/images/services/site/site-provider.avif"
                    alt="Survey team meeting with developer client on UK construction site"
                    fill
                    className="object-cover"
                  />
                </div>
                <h2 id="choose-provider" className="text-2xl md:text-3xl font-bold text-teal mb-4 scroll-mt-32">
                  Selecting a <span className="text-gold">Drone Site Survey</span> Provider
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed mb-4">
                  The calibre of drone survey providers differs considerably. When assessing options, we recommend verifying these essential factors:
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gold mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-text-primary"><strong>CAA authorisation</strong> – Confirm they possess valid GVC permissions for commercial UAV operations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gold mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-text-primary"><strong>Professional insurance</strong> – Public liability and professional indemnity cover suitable for your project value</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gold mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-text-primary"><strong>Survey expertise</strong> – Comprehension of accuracy requirements, coordinate systems, and deliverable formats</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gold mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-text-primary"><strong>Premium equipment</strong> – RTK-enabled drones and professional processing software</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gold mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-text-primary"><strong>Relevant portfolio</strong> – Examples of comparable site survey projects they&apos;ve completed</span>
                  </li>
                </ul>
                <p className="text-text-secondary text-lg leading-relaxed mb-6">
                  At Hire Drone Pilot, we meet every criterion. We&apos;re CAA authorised, comprehensively insured, and have delivered site surveys for developers, architects, and planning consultants throughout the UK.
                </p>

                {/* CTA after provider section */}
                <div className="bg-teal rounded-xl p-5">
                  <p className="text-white font-semibold mb-3">Prepared to partner with a dependable provider?</p>
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
                  Are <span className="text-gold">Drone Site Surveys</span> More Economical Than Ground Methods?
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed mb-4">
                  In most instances, substantially so. Conventional ground surveys require surveyors to visit every point they need to measure, which consumes time—particularly on larger or more intricate sites. Labour expenses accumulate rapidly when a team spends several days on site.
                </p>
                <p className="text-text-secondary text-lg leading-relaxed mb-6">
                  Our UAV surveys capture everything in hours rather than days, dramatically reducing field time and expenses. Typical savings range from 50-70% compared to equivalent traditional surveys. Beyond cost savings, you also receive comprehensive visual documentation that conventional surveys simply cannot match—high-resolution imagery displaying exactly what was on the ground at survey date.
                </p>

                {/* Final CTA */}
                <div className="bg-gradient-to-r from-teal to-teal-dark rounded-xl p-6 text-center">
                  <h3 className="text-white font-bold text-xl mb-2">Prepared to Survey Your Site?</h3>
                  <p className="text-white/80 text-sm mb-4">Professional guidance • Same-week availability • Avg Response within 5 Mins</p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <QuoteButton className="btn btn-primary btn-shimmer">
                      Compare Quotes
                    </QuoteButton>
                    <a href="tel:+441334804554" className="btn bg-white text-teal hover:bg-white/90 flex items-center justify-center gap-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      Phone Peter Now
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
                  With substantial expertise in surveying and UAV operations, Peter personally manages every site survey to guarantee accurate, professional results you can depend on.
                </p>
              </div>

              {/* Table of Contents */}
              <div className="bg-background-alt border border-border rounded-2xl p-6">
                <h3 className="text-teal font-bold text-lg mb-4">
                  Quick Guide: UAV Site Surveys
                </h3>
                <nav className="space-y-2">
                  {[
                    { id: 'what-is-site-survey', label: 'Understanding UAV Site Surveys' },
                    { id: 'site-survey-cost', label: 'UAV Site Survey Pricing Guide' },
                    { id: 'site-survey-vs-traditional', label: 'Comparing UAV and Conventional Methods' },
                    { id: 'site-survey-accuracy', label: 'UAV Site Survey Precision Levels' },
                    { id: 'site-survey-applications', label: 'Common Uses for UAV Site Surveys' },
                    { id: 'site-survey-features', label: 'Elements a UAV Site Survey Documents' },
                    { id: 'site-survey-deliverables', label: 'Your UAV Site Survey Outputs' },
                    { id: 'site-survey-timeline', label: 'UAV Site Survey Duration' },
                    { id: 'choose-provider', label: 'Selecting a UAV Site Survey Provider' },
                    { id: 'cost-comparison', label: 'Are UAV Site Surveys More Economical?' },
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
                  Your Survey Outputs
                </h3>
                <ul className="space-y-3">
                  {[
                    'Site orthomosaic imagery',
                    'Digital Terrain Model (DTM)',
                    'Digital Surface Model (DSM)',
                    'Boundary mapping',
                    'Feature survey',
                    'CAD site plans (DWG/DXF)',
                    '3D site models',
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
                  Share Your Requirements
                </h3>
                <p className="text-white/70 text-sm mb-4">
                  Receive professional guidance and bespoke pricing.
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
            Explore Similar Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link
              href="/services/drone-topographical-survey"
              className="bg-white border border-border rounded-xl p-6 hover:border-gold hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-teal font-bold text-lg mb-2">UAV Topographic Survey</h3>
              <p className="text-text-secondary text-sm">
                Detailed topographic assessments with contours, spot heights, and elevation data for design and planning.
              </p>
            </Link>
            <Link
              href="/services/drone-lidar-mapping"
              className="bg-white border border-border rounded-xl p-6 hover:border-gold hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-teal font-bold text-lg mb-2">LiDAR Mapping</h3>
              <p className="text-text-secondary text-sm">
                Precision laser scanning for vegetated sites where photogrammetry cannot penetrate tree cover.
              </p>
            </Link>
            <Link
              href="/services/drone-survey"
              className="bg-white border border-border rounded-xl p-6 hover:border-gold hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-teal font-bold text-lg mb-2">UAV Survey</h3>
              <p className="text-text-secondary text-sm">
                Thorough drone surveys providing precise data, 3D models, and orthomosaic imagery.
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
