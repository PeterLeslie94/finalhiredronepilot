import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import QuoteButton from '@/components/QuoteButton';
import Testimonials from '@/components/Testimonials';
import FloatingCTA from '@/components/FloatingCTA';
import EquipmentSection from '@/components/EquipmentSection';
import { Wheat, Droplets, Map, Bug, Tractor, TreeDeciduous, BarChart3, Camera } from 'lucide-react';
import { ServiceSchema, BreadcrumbSchema } from '@/components/SchemaMarkup';
import { ClientLogoMarqueeInline } from '@/components/ClientLogoMarquee';

export const metadata: Metadata = {
  title: 'Drone Farm Surveying & Crop Analysis | Agricultural Drone Mapping UK | HireDronePilot',
  description: 'Advanced drone agricultural surveys throughout the UK. NDVI vegetation analysis, field drainage mapping, and precision farming insights. Fully CAA certified drone pilots.',
  keywords: 'drone agricultural survey, drone farm mapping, drone crop health mapping, NDVI drone survey, agricultural drone uk, precision agriculture, farm survey drone',
};

export default function DroneAgriculturalSurveyPage() {
  return (
    <>
      <ServiceSchema
        name="Drone Farm Surveying & Crop Analysis"
        description="Advanced drone agricultural surveys throughout the UK. NDVI vegetation analysis, field drainage mapping, and precision farming insights. Fully CAA certified drone pilots."
        url="https://hiredronepilot.uk/services/drone-agricultural-survey"
      />
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://hiredronepilot.uk" },
        { name: "Services", url: "https://hiredronepilot.uk/services" },
        { name: "Drone Agricultural Survey Services", url: "https://hiredronepilot.uk/services/drone-agricultural-survey" }
      ]} />
      {/* Hero Section */}
      <section className="relative min-h-[800px] md:min-h-[600px] flex items-start bg-teal -mt-[120px] pt-[120px] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/services/agricultural/agricultural-hero.avif"
            alt="Drone photography of UK farmland and agricultural fields"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-teal-dark via-teal-dark/90 via-40% to-teal-dark/40 z-10" />
        </div>
        <div className="container pt-8 pb-52 lg:pb-40 lg:pt-12 relative z-10">
          <div className="max-w-3xl">
            <p className="text-gold font-semibold uppercase tracking-wider mb-3">
              Smart Farming Technology
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Drone Agricultural Survey Service
            </h1>
            <p className="text-white/80 text-lg md:text-xl mb-8">
              Advanced field mapping, vegetation health monitoring, and agricultural intelligence gathering to boost productivity and cut expenses.
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
              Quick reply guaranteed • Phone us at{' '}
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

              {/* What is a Drone Agricultural Survey? */}
              <div>
                <h2 id="what-is-agricultural" className="text-2xl md:text-3xl font-bold text-teal mb-4 scroll-mt-32">
                  Understanding <span className="text-gold">Drone Farm Surveys</span>
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed mb-4">
                  A drone farm survey deploys unmanned aircraft fitted with specialised imaging equipment to gather comprehensive data about your land, crops, and agricultural infrastructure. While conventional ground walks and satellite pictures have limitations, our UAVs operate at low altitudes to achieve centimetre-accurate measurements across your complete property.
                </p>
                <p className="text-text-secondary text-lg leading-relaxed">
                  Hire Drone Pilot utilises cutting-edge multispectral and standard RGB cameras to produce detailed farm imagery, spot crop issues before they become visible, examine water flow patterns, and create precise perimeter measurements. These insights enable you to take action based on solid evidence, ultimately increasing harvest quality while lowering operational spending.
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
                        Accurate Agricultural Insights,
                        <span className="text-gold block relative inline-block">
                          Rapid Turnaround
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
                          'Detailed farm drone composite',
                          'NDVI vegetation health imagery',
                          'Water flow pattern mapping',
                          'Precise perimeter measurements',
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
                        Ready within 5-7 business days
                      </p>
                    </div>

                    {/* Right: Why choose us */}
                    <div>
                      <h3 className="text-gold font-bold text-sm uppercase tracking-wider mb-3">
                        Why Use HireDronePilot
                      </h3>
                      <ul className="space-y-2.5">
                        {[
                          'CAA certified & comprehensively insured',
                          'Farming survey experts',
                          'State-of-the-art multispectral sensors',
                          'Service across all UK regions',
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
                        <span>Relied upon by growers, crop consultants & rural agents throughout Britain.</span>
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
                        Request Specialist Guidance
                      </QuoteButton>
                    </div>
                  </div>

                  {/* Client Logo Marquee */}
                  <div className="mt-6 pt-6 border-t border-white/10">
                    <p className="text-white/50 text-xs uppercase tracking-wider text-center mb-4">Chosen by prominent businesses</p>
                    <ClientLogoMarqueeInline />
                  </div>
                </div>
              </div>

              {/* How much does a drone agricultural survey cost? */}
              <div>
                <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-6">
                  <Image
                    src="/images/services/agricultural/agricultural-cost.avif"
                    alt="British farmer reviewing drone agricultural survey data on tablet in farm field"
                    fill
                    className="object-cover"
                  />
                </div>
                <h2 id="agricultural-cost" className="text-2xl md:text-3xl font-bold text-teal mb-4 scroll-mt-32">
                  Pricing for <span className="text-gold">Drone Farm Surveys</span>
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed mb-6">
                  Costs vary based on your holding size and the outputs you need. Below is a pricing guide to assist your planning:
                </p>

                {/* Pricing Table */}
                <div className="rounded-xl overflow-hidden border border-border mb-6">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-teal">
                        <th className="text-left text-white font-semibold py-3 px-4">Farm Size</th>
                        <th className="text-left text-white font-semibold py-3 px-4">Guide Price</th>
                        <th className="text-left text-white font-semibold py-3 px-4 hidden md:table-cell">Typical Applications</th>
                        <th className="text-left text-white font-semibold py-3 px-4 hidden lg:table-cell">Deliverables</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-white">
                        <td className="py-3 px-4 text-text-primary font-medium">Small Farm<span className="block text-sm text-text-secondary font-normal">Under 20 ha</span></td>
                        <td className="py-3 px-4 text-gold font-bold">£500+</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden md:table-cell">Smallholdings, market gardens, specialist crops</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden lg:table-cell">Orthomosaic, NDVI map</td>
                      </tr>
                      <tr className="bg-background-alt">
                        <td className="py-3 px-4 text-text-primary font-medium">Medium Farm<span className="block text-sm text-text-secondary font-normal">20–100 ha</span></td>
                        <td className="py-3 px-4 text-gold font-bold">£1,000+</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden md:table-cell">Mixed farms, arable operations, livestock holdings</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden lg:table-cell">Full mapping suite + NDVI</td>
                      </tr>
                      <tr className="bg-white">
                        <td className="py-3 px-4 text-text-primary font-medium">Large Farm<span className="block text-sm text-text-secondary font-normal">100–500 ha</span></td>
                        <td className="py-3 px-4 text-gold font-bold">£2,500+</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden md:table-cell">Large arable, dairy farms, multi-site operations</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden lg:table-cell">Complete analysis package</td>
                      </tr>
                      <tr className="bg-background-alt">
                        <td className="py-3 px-4 text-text-primary font-medium">Estate<span className="block text-sm text-text-secondary font-normal">500+ ha</span></td>
                        <td className="py-3 px-4 text-gold font-bold">POA</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden md:table-cell">Large estates, farm portfolios, contract farming</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden lg:table-cell">Bespoke deliverables</td>
                      </tr>
                      <tr className="bg-white">
                        <td className="py-3 px-4 text-text-primary font-medium">Seasonal Package<span className="block text-sm text-text-secondary font-normal">Multiple visits</span></td>
                        <td className="py-3 px-4 text-gold font-bold">POA</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden md:table-cell">Crop monitoring throughout growing season</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden lg:table-cell">Regular NDVI tracking</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-text-secondary text-sm mb-6 italic">
                  *Indicative rates cover standard outputs. Your final quotation reflects property complexity, site access, and particular needs.
                </p>

                {/* What affects your quote */}
                <h3 className="font-bold text-teal mb-3">Factors influencing your estimate</h3>
                <ul className="grid grid-cols-2 gap-2 mb-6">
                  {['Property size & landscape', 'Required outputs', 'Deadline urgency', 'Frequency of visits'].map((factor, index) => (
                    <li key={index} className="flex items-center gap-2 text-text-secondary">
                      <svg className="w-4 h-4 text-gold flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm">{factor}</span>
                    </li>
                  ))}
                </ul>

                <p className="text-text-secondary leading-relaxed mb-6">
                  Our drone farm surveys generally run <span className="text-gold font-semibold">50-70% below</span> conventional ground-based surveying approaches whilst providing richer, more extensive data. Share your property details and receive a customised quotation within a day.
                </p>

                {/* CTA Banner */}
                <div className="bg-teal rounded-xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-center sm:text-left">
                    <p className="text-white font-semibold">Interested in pricing for your holding?</p>
                    <p className="text-white/70 text-sm">Complimentary, obligation-free estimates within 24 hours</p>
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

              {/* Drone Agricultural Survey vs Traditional Methods */}
              <div>
                <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-6">
                  <Image
                    src="/images/services/agricultural/agricultural-comparison.avif"
                    alt="Comparison of drone agricultural survey versus traditional farm surveying methods"
                    fill
                    className="object-cover"
                  />
                </div>
                <h2 id="agricultural-vs-traditional" className="text-2xl md:text-3xl font-bold text-teal mb-4 scroll-mt-32">
                  How Do <span className="text-gold">Drone Farm Surveys</span> Compare to Conventional Approaches?
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed mb-4">
                  Conventional farm assessment depends on physical field inspection, spot-check evaluations, and periodic satellite photos. Though these techniques have supported agriculture for generations, they demand significant time, offer restricted scope, and frequently fail to identify developing issues until symptoms are plainly visible.
                </p>
                <p className="text-text-secondary text-lg leading-relaxed mb-4">
                  Drone farm surveys capture total coverage of your complete property in one flying session. Our imaging equipment identifies crop stress, nutritional shortfalls, and pest problems days or weeks ahead of visible symptoms appearing—providing vital opportunity to act and safeguard your harvest.
                </p>
                {/* Technology Comparison Cards */}
                <div className="mt-8">
                  <h3 className="text-center font-bold text-teal text-xl mb-6">Selecting the Right Method</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {/* Drone Survey Card */}
                    <div className="relative bg-teal rounded-2xl p-6 overflow-hidden group hover:shadow-xl transition-shadow duration-300">
                      {/* Decorative lines */}
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
                            <h4 className="text-white font-bold text-lg">Select Drone Farm Surveying</h4>
                            <p className="text-gold text-sm font-medium">Full coverage & advance warning</p>
                          </div>
                        </div>
                        <div className="space-y-3">
                          {[
                            { Icon: Wheat, text: 'Complete property vegetation mapping' },
                            { Icon: Droplets, text: 'Water flow & saturation assessment' },
                            { Icon: Map, text: 'Precise perimeter documentation' },
                            { Icon: Bug, text: 'Advance pest & illness identification' },
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
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                          </div>
                          <div>
                            <h4 className="text-teal font-bold text-lg">Conventional Techniques</h4>
                            <p className="text-text-secondary text-sm font-medium">Physical inspection & spot-checking</p>
                          </div>
                        </div>
                        <div className="space-y-3">
                          {[
                            { Icon: Tractor, text: 'Long-established farming practice' },
                            { Icon: TreeDeciduous, text: 'Single plant examination' },
                            { Icon: BarChart3, text: 'Spot-check evaluations' },
                            { Icon: Camera, text: 'On-foot field inspection' },
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
                    <p className="text-text-secondary text-sm mb-2">Uncertain which method fits your property?</p>
                    <QuoteButton className="text-gold font-semibold hover:underline inline-flex items-center gap-1">
                      Compare Quotes
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </QuoteButton>
                  </div>
                </div>
              </div>

              {/* What accuracy can a drone agricultural survey achieve? */}
              <div>
                <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-6">
                  <Image
                    src="/images/services/agricultural/agricultural-accuracy.avif"
                    alt="Ground control point marker for drone survey accuracy on UK farmland"
                    fill
                    className="object-cover"
                  />
                </div>
                <h2 id="agricultural-accuracy" className="text-2xl md:text-3xl font-bold text-teal mb-4 scroll-mt-32">
                  Precision Levels in <span className="text-gold">Drone Farm Surveys</span>
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed mb-4">
                  Our drone agricultural surveys deliver ground sample distances (GSD) as detailed as 1-2cm per pixel—sufficient resolution to enumerate individual plants or spot minor weed clusters. For cartography and perimeter documentation, we achieve positional precision of ±2-5cm through RTK/PPK GPS systems and ground reference markers.
                </p>
                <p className="text-text-secondary text-lg leading-relaxed">
                  Such precision substantially surpasses satellite pictures (usually 30cm-10m resolution) and produces variable rate prescription maps compatible with your spraying or spreading equipment. Our NDVI vegetation health imagery can pinpoint stressed areas as compact as several square metres, enabling genuinely focused treatments.
                </p>
              </div>

              {/* Applications */}
              <div>
                <h2 id="agricultural-applications" className="text-2xl md:text-3xl font-bold text-teal mb-4 scroll-mt-32">
                  Uses for <span className="text-gold">Drone Farm Surveys</span>
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed mb-6">
                  Drone agricultural surveys enable smart farming throughout every branch of British agriculture. These are the primary uses where our customers achieve maximum value:
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-background-alt rounded-xl p-6">
                    <h3 className="font-bold text-teal mb-2">Vegetation Health Tracking</h3>
                    <p className="text-text-secondary text-sm">NDVI and multispectral evaluation to detect stress, illness, and nutritional gaps before outward signs develop.</p>
                  </div>
                  <div className="bg-background-alt rounded-xl p-6">
                    <h3 className="font-bold text-teal mb-2">Water Flow Evaluation</h3>
                    <p className="text-text-secondary text-sm">Pinpoint saturation patterns, clogged channels, and zones needing corrective work to enhance field output.</p>
                  </div>
                  <div className="bg-background-alt rounded-xl p-6">
                    <h3 className="font-bold text-teal mb-2">Perimeter & Field Documentation</h3>
                    <p className="text-text-secondary text-sm">Precise field boundaries supporting BPS submissions, lease documentation, and farm software compatibility.</p>
                  </div>
                  <div className="bg-background-alt rounded-xl p-6">
                    <h3 className="font-bold text-teal mb-2">Variable Rate Prescriptions</h3>
                    <p className="text-text-secondary text-sm">Create application maps for targeted distribution of nutrients, seed, and plant protection products.</p>
                  </div>
                  <div className="bg-background-alt rounded-xl p-6">
                    <h3 className="font-bold text-teal mb-2">Animals & Structures</h3>
                    <p className="text-text-secondary text-sm">Observe livestock, evaluate building status, design new facilities, and map tracks and yards.</p>
                  </div>
                  <div className="bg-background-alt rounded-xl p-6">
                    <h3 className="font-bold text-teal mb-2">Conservation Programmes</h3>
                    <p className="text-text-secondary text-sm">Record habitat zones, forest areas, hedges, and streams for Countryside Stewardship and SFI submissions.</p>
                  </div>
                </div>

                {/* CTA after applications */}
                <div className="mt-8 text-center">
                  <p className="text-text-secondary mb-4">Planning a farming project requiring drone assessment?</p>
                  <div className="flex flex-wrap justify-center gap-3">
                    <QuoteButton className="btn btn-primary btn-shimmer">
                      Talk About Your Needs
                    </QuoteButton>
                    <a href="tel:+441334804554" className="btn btn-outline">
                      Ring +44 1334 804554
                    </a>
                  </div>
                </div>
              </div>

              {/* Can drones assess crop health? - NDVI Feature Section */}
              <div>
                <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-6">
                  <Image
                    src="/images/services/agricultural/agricultural-feature.avif"
                    alt="NDVI crop health mapping with color overlay showing plant health variation"
                    fill
                    className="object-cover"
                  />
                </div>
                <h2 id="crop-health" className="text-2xl md:text-3xl font-bold text-teal mb-4 scroll-mt-32">
                  Are UAVs Capable of Evaluating <span className="text-gold">Vegetation Condition</span>?
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed mb-4">
                  Absolutely—this represents one of the most valuable capabilities of drone agricultural surveys. Our multispectral imaging captures wavelengths beyond what eyes can see to compute the Normalised Difference Vegetation Index (NDVI). This research-backed measurement uncovers plant vitality and chlorophyll levels that remain hidden from human observation.
                </p>
                <p className="text-text-secondary text-lg leading-relaxed mb-6">
                  Vigorous, actively-developing crops bounce back more near-infrared light while absorbing red wavelengths. By analysing this proportion across your full property, we generate precise maps revealing exactly which areas flourish and which struggle. Results appear as colour-graded imagery—green sections signify robust growth, whereas red and amber patches flag stress requiring attention.
                </p>

                {/* NDVI Benefits Box */}
                <div className="bg-gold/10 border border-gold/20 rounded-xl p-6">
                  <h3 className="font-bold text-teal mb-4">Insights From NDVI Analysis</h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {[
                      'Nutritional shortage areas',
                      'Moisture stress & drought harm',
                      'Pest & illness concentrations',
                      'Soil compaction & wetness problems',
                      'Seeding density inconsistencies',
                      'Chemical application damage',
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-text-primary">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* What deliverables? */}
              <div>
                <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-6">
                  <Image
                    src="/images/services/agricultural/agricultural-deliverables.avif"
                    alt="Agricultural survey reports and crop analysis displayed on computer screen"
                    fill
                    className="object-cover"
                  />
                </div>
                <h2 id="agricultural-deliverables" className="text-2xl md:text-3xl font-bold text-teal mb-4 scroll-mt-32">
                  Outputs Provided With <span className="text-gold">Drone Farm Surveys</span>
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed mb-6">
                  We customise outputs according to your property needs, though our standard agricultural survey package encompasses:
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-4 bg-background-alt rounded-xl p-4">
                    <div className="w-10 h-10 bg-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-teal">Property Drone Composite</h4>
                      <p className="text-text-secondary text-sm">Detailed, location-referenced overhead imagery spanning your complete holding. Ideal for strategy development, documentation, and integration with agricultural management platforms.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4 bg-background-alt rounded-xl p-4">
                    <div className="w-10 h-10 bg-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-teal">NDVI Vegetation Condition Maps</h4>
                      <p className="text-text-secondary text-sm">Colour-graded plant index imagery displaying crop vitality throughout all fields. Locate trouble spots and monitor progression across the cultivation period.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4 bg-background-alt rounded-xl p-4">
                    <div className="w-10 h-10 bg-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-teal">Water Flow Assessment</h4>
                      <p className="text-text-secondary text-sm">Digital elevation models and surface runoff evaluation to locate drainage concerns, pooling zones, and best positions for additional channels.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4 bg-background-alt rounded-xl p-4">
                    <div className="w-10 h-10 bg-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-teal">Perimeter Documentation & CAD Data</h4>
                      <p className="text-text-secondary text-sm">Precise field edges in DXF/DWG format compatible with agricultural software, BPS applications, and business documentation.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4 bg-background-alt rounded-xl p-4">
                    <div className="w-10 h-10 bg-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-teal">Vegetation Evaluation Reports</h4>
                      <p className="text-text-secondary text-sm">Documented assessment including suggestions pinpointing zones needing attention and recommended measures to enhance your farming operation.</p>
                    </div>
                  </li>
                </ul>

                {/* CTA after deliverables */}
                <div className="mt-6 p-5 bg-gold/10 border border-gold/20 rounded-xl">
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-teal font-semibold text-center sm:text-left">Require particular outputs for your holding?</p>
                    <QuoteButton className="btn btn-primary btn-shimmer whitespace-nowrap">
                      Talk Through Your Needs
                    </QuoteButton>
                  </div>
                </div>
              </div>

              {/* How long does it take? */}
              <div>
                <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-6">
                  <Image
                    src="/images/services/agricultural/agricultural-timeline.avif"
                    alt="Professional drone pilot at UK farm preparing agricultural drone for survey flight"
                    fill
                    className="object-cover"
                  />
                </div>
                <h2 id="survey-timeline" className="text-2xl md:text-3xl font-bold text-teal mb-4 scroll-mt-32">
                  Duration of an <span className="text-gold">Drone Farm Survey</span>
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed mb-4">
                  Field data collection proceeds surprisingly quickly. We can cover 100-200 hectares daily based on resolution needs and atmospheric conditions. A standard 50-hectare mixed property requires merely 2-3 hours of flying, alongside preparation and ground marker positioning.
                </p>
                <p className="text-text-secondary text-lg leading-relaxed mb-6">
                  Data processing and handover timing depends on your chosen outputs. Standard packages typically arrive within 5-7 business days. For urgent growing-season choices, we provide accelerated 48-72 hour completion for an added fee. We&apos;ll establish achievable deadlines when preparing your quotation.
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
                        <td className="py-3 px-4 text-text-primary font-medium">Planning & Weather</td>
                        <td className="py-3 px-4 text-gold font-bold">1-3 days</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden md:table-cell">Flight planning, airspace clearance, weather window</td>
                      </tr>
                      <tr className="bg-background-alt">
                        <td className="py-3 px-4 text-text-primary font-medium">On-Farm Data Capture</td>
                        <td className="py-3 px-4 text-gold font-bold">½-1 day</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden md:table-cell">GCP setup, drone flights, data verification</td>
                      </tr>
                      <tr className="bg-white">
                        <td className="py-3 px-4 text-text-primary font-medium">Image Processing</td>
                        <td className="py-3 px-4 text-gold font-bold">2-3 days</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden md:table-cell">Orthomosaic creation, georeferencing, NDVI calculation</td>
                      </tr>
                      <tr className="bg-background-alt">
                        <td className="py-3 px-4 text-text-primary font-medium">Analysis & QC</td>
                        <td className="py-3 px-4 text-gold font-bold">1-2 days</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden md:table-cell">Crop health analysis, boundary extraction, quality checks</td>
                      </tr>
                      <tr className="bg-white">
                        <td className="py-3 px-4 text-text-primary font-medium">Report & Delivery</td>
                        <td className="py-3 px-4 text-gold font-bold">1 day</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden md:table-cell">Final deliverables in your preferred formats</td>
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
                    <p className="text-teal font-semibold text-sm">Rapid Delivery Option</p>
                    <p className="text-text-secondary text-sm">Pressed for time? 48-72 hour completion offered for pressing crop choices.</p>
                  </div>
                </div>

                {/* CTA after timeline */}
                <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
                  <QuoteButton className="btn btn-primary btn-shimmer">
                    Launch Your Survey
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
                <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-6">
                  <Image
                    src="/images/services/agricultural/agricultural-provider.avif"
                    alt="Professional drone survey team meeting with farmer client on UK farm"
                    fill
                    className="object-cover"
                  />
                </div>
                <h2 id="choose-provider" className="text-2xl md:text-3xl font-bold text-teal mb-4 scroll-mt-32">
                  Selecting an <span className="text-gold">Drone Farm Survey</span> Company
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed mb-4">
                  Many UAV survey operators lack agricultural knowledge. During your assessment, we suggest verifying these essential criteria:
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gold mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-text-primary"><strong>CAA certification</strong> – Confirm they possess current GVC or previous PfCO approvals for commercial flying</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gold mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-text-primary"><strong>Farming knowledge</strong> – Enquire about their grasp of agricultural practices and cultivation cycles</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gold mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-text-primary"><strong>Multispectral sensors</strong> – Standard RGB cameras cannot produce NDVI vegetation analysis</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gold mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-text-primary"><strong>Practical outputs</strong> – Information must integrate with your application machinery and management tools</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gold mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-text-primary"><strong>Agricultural portfolio</strong> – Ask for case studies from farming assignments they have accomplished</span>
                  </li>
                </ul>
                <p className="text-text-secondary text-lg leading-relaxed mb-6">
                  Hire Drone Pilot satisfies all requirements. We hold CAA approval, maintain comprehensive insurance, and have completed agricultural surveys for arable producers, dairy enterprises, mixed farms, and estate managers across Britain.
                </p>

                {/* CTA after provider section */}
                <div className="bg-teal rounded-xl p-5">
                  <p className="text-white font-semibold mb-3">Keen to partner with a dependable farm survey specialist?</p>
                  <div className="flex flex-wrap gap-3">
                    <QuoteButton className="px-5 py-2.5 rounded-full bg-gold text-teal-dark font-semibold hover:bg-gold/90 transition-colors text-sm btn-shimmer">
                      Compare Quotes
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
                  Do <span className="text-gold">Drone Farm Surveys</span> Cost Less Than Conventional Methods?
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed mb-4">
                  In the majority of cases, yes—plus you receive substantially more information for your expenditure. Conventional crop inspection and manual sampling can only ever assess a portion of your land. Satellite imagery subscriptions demand hundreds of pounds monthly whilst providing much coarser detail than UAV surveys.
                </p>
                <p className="text-text-secondary text-lg leading-relaxed mb-6">
                  Our drone agricultural surveys achieve total coverage of your complete property in one attendance. Investment returns stem from precise interventions—distributing inputs solely where necessary instead of blanket-treating entire fields. The majority of customers recover costs within their initial season via decreased input expenditure and safeguarded harvests.
                </p>

                {/* Final CTA */}
                <div className="bg-gradient-to-r from-teal to-teal-dark rounded-xl p-6 text-center">
                  <h3 className="text-white font-bold text-xl mb-2">Prepared to Explore Your Farm Survey Options?</h3>
                  <p className="text-white/80 text-sm mb-4">Specialist guidance • Personalised quotes • Avg Response within 5 Mins</p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <QuoteButton className="btn btn-primary btn-shimmer">
                      Obtain Agricultural Survey Rates
                    </QuoteButton>
                    <a href="tel:+441334804554" className="btn bg-white text-teal hover:bg-white/90 flex items-center justify-center gap-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      Ring Peter Today
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
                  Bringing deep expertise in surveying and unmanned aircraft operations, Peter directs every farming assignment personally to guarantee precise, practical information for your property.
                </p>
              </div>

              {/* Table of Contents */}
              <div className="bg-background-alt border border-border rounded-2xl p-6">
                <h3 className="text-teal font-bold text-lg mb-4">
                  Quick Guide: Drone Farm Surveys
                </h3>
                <nav className="space-y-2">
                  {[
                    { id: 'what-is-agricultural', label: 'Understanding Drone Farm Surveys' },
                    { id: 'agricultural-cost', label: 'Pricing for Drone Farm Surveys' },
                    { id: 'agricultural-vs-traditional', label: 'How Do Drone Farm Surveys Compare to Conventional Approaches?' },
                    { id: 'agricultural-accuracy', label: 'Precision Levels in Drone Farm Surveys' },
                    { id: 'agricultural-applications', label: 'Uses for Drone Farm Surveys' },
                    { id: 'crop-health', label: 'Are UAVs Capable of Evaluating Vegetation Condition?' },
                    { id: 'agricultural-deliverables', label: 'Outputs Provided With Drone Farm Surveys' },
                    { id: 'survey-timeline', label: 'Duration of a Drone Farm Survey' },
                    { id: 'choose-provider', label: 'Selecting a Drone Farm Survey Company' },
                    { id: 'cost-comparison', label: 'Do Drone Farm Surveys Cost Less Than Conventional Methods?' },
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
                  Farm Survey Outputs
                </h3>
                <ul className="space-y-3">
                  {[
                    'Property drone composite',
                    'NDVI vegetation health imagery',
                    'Water flow assessment',
                    'Perimeter documentation',
                    'CAD data (DXF/DWG)',
                    'Vegetation evaluation reports',
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
                  Talk About Your Agricultural Needs
                </h3>
                <p className="text-white/70 text-sm mb-4">
                  Receive specialist guidance and customised rates.
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
                    placeholder="Short property description..."
                    rows={3}
                    className="w-full px-4 py-2.5 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 text-sm focus:outline-none focus:border-gold resize-none"
                  />
                  <button
                    type="submit"
                    className="btn btn-primary btn-shimmer w-full"
                  >
                    Request Rates
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
            Connected Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link
              href="/services/drone-topographical-survey"
              className="bg-white border border-border rounded-xl p-6 hover:border-gold hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-teal font-bold text-lg mb-2">UAV Terrain Surveying</h3>
              <p className="text-text-secondary text-sm">
                Comprehensive land profiling for water management design, groundworks, and agricultural facility development.
              </p>
            </Link>
            <Link
              href="/services/drone-lidar-mapping"
              className="bg-white border border-border rounded-xl p-6 hover:border-gold hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-teal font-bold text-lg mb-2">Laser Scanning Services</h3>
              <p className="text-text-secondary text-sm">
                Accurate elevation models capable of seeing through canopy for forested areas and challenging landscapes.
              </p>
            </Link>
            <Link
              href="/services/drone-survey"
              className="bg-white border border-border rounded-xl p-6 hover:border-gold hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-teal font-bold text-lg mb-2">Drone Survey Solutions</h3>
              <p className="text-text-secondary text-sm">
                Full-scope overhead surveys supporting land evaluation, development strategy, and archive documentation.
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
