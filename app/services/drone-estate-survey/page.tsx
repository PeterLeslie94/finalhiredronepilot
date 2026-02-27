import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import QuoteButton from '@/components/QuoteButton';
import Testimonials from '@/components/Testimonials';
import FloatingCTA from '@/components/FloatingCTA';
import EquipmentSection from '@/components/EquipmentSection';
import { ServiceSchema, BreadcrumbSchema } from '@/components/SchemaMarkup';
import { ClientLogoMarqueeInline } from '@/components/ClientLogoMarquee';
import { Home, TreePine, Fence, Map, Building2, Landmark, FileText, Camera } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Drone Estate Survey Services | Country Estate Mapping UK | HireDronePilot',
  description: 'Expert drone estate survey services throughout the UK. Thorough estate mapping, boundary assessments, and building documentation. CAA certified drone operators.',
  keywords: 'drone estate survey, drone estate mapping, drone estate survey uk, drone boundary survey, drone property survey, drone land survey, drone estate management',
};

export default function DroneEstateSurveyPage() {
  return (
    <>
      <ServiceSchema
        name="Drone Estate Survey Services"
        description="Expert drone estate survey services throughout the UK. Thorough estate mapping, boundary assessments, and building documentation. CAA certified drone operators."
        url="https://hiredronepilot.uk/services/drone-estate-survey"
      />
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://hiredronepilot.uk" },
        { name: "Services", url: "https://hiredronepilot.uk/services" },
        { name: "Drone Estate Survey Services", url: "https://hiredronepilot.uk/services/drone-estate-survey" }
      ]} />

      {/* Hero Section */}
      <section className="relative min-h-[800px] md:min-h-[600px] flex items-start bg-teal -mt-[120px] pt-[120px] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/services/estate/estate-hero.avif"
            alt="Drone view of UK country estate with manor house and grounds"
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
              Drone Estate Survey Service
            </h1>
            <p className="text-white/80 text-lg md:text-xl mb-8">
              Thorough drone assessments for country estates, manor houses, and landed properties. Chart boundaries, buildings, woodland, and every feature across your landholding.
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

              {/* Understanding Drone Estate Assessment */}
              <div>
                <h2 id="what-is-estate-survey" className="text-2xl md:text-3xl font-bold text-teal mb-4 scroll-mt-32">
                  Understanding <span className="text-gold">Drone Estate Assessment</span>
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed mb-4">
                  A drone estate assessment furnishes thorough documentation of country estates, manor houses, and substantial landed properties from above. Employing professional-grade UAVs fitted with high-resolution cameras, we gather detailed imagery of every facet of your estate - from the principal residence and outbuildings to parkland, woodland, and boundary features.
                </p>
                <p className="text-text-secondary text-lg leading-relaxed">
                  At HireDronePilot, we recognise that estates are complex properties demanding careful, methodical documentation. Our assessments yield accurate <Link href="/services/drone-boundary-survey" className="text-gold hover:underline">boundary mapping</Link>, comprehensive <Link href="/services/drone-measured-building-survey" className="text-gold hover:underline">building surveys</Link>, <Link href="/services/drone-forestry-survey" className="text-gold hover:underline">woodland evaluations</Link>, and complete orthomosaic imagery providing a full picture of your landholding. Whether you are planning enhancements, managing succession, or simply require current records of your estate, our drone surveys furnish the data you need.
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
                        Thorough Estate Documentation,
                        <span className="text-gold block relative inline-block">
                          Efficiently Delivered
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
                          'Estate orthomosaic & drone imagery',
                          'Boundary mapping & verification',
                          'Building condition surveys',
                          'Woodland & landscape assessment',
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
                          'CAA approved & fully insured',
                          'Experience with historic estates',
                          'Latest DJI drone technology',
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
                        <span>Relied upon by estate owners, land agents & surveyors throughout the UK.</span>
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

              {/* Estate Assessment Pricing Guide */}
              <div>
                <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-6">
                  <Image
                    src="/images/services/estate/estate-cost.avif"
                    alt="Surveyor reviewing drone estate survey data on tablet near manor house"
                    fill
                    className="object-cover"
                  />
                </div>
                <h2 id="estate-cost" className="text-2xl md:text-3xl font-bold text-teal mb-4 scroll-mt-32">
                  <span className="text-gold">Estate Assessment</span> Pricing Guide
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed mb-6">
                  Estate survey investment varies according to the size and complexity of your property. Here is a reference to assist with budgeting:
                </p>

                {/* Pricing Table */}
                <div className="rounded-xl overflow-hidden border border-border mb-6">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-teal">
                        <th className="text-left text-white font-semibold py-3 px-4">Estate Size</th>
                        <th className="text-left text-white font-semibold py-3 px-4">Guide Price</th>
                        <th className="text-left text-white font-semibold py-3 px-4 hidden md:table-cell">Typical Estates</th>
                        <th className="text-left text-white font-semibold py-3 px-4 hidden lg:table-cell">Deliverables</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-white">
                        <td className="py-3 px-4 text-text-primary font-medium">Small<span className="block text-sm text-text-secondary font-normal">Under 10 ha</span></td>
                        <td className="py-3 px-4 text-gold font-bold">£800+</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden md:table-cell">Country houses, farmsteads, small manor properties</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden lg:table-cell">Orthomosaic, boundary map, building photos</td>
                      </tr>
                      <tr className="bg-background-alt">
                        <td className="py-3 px-4 text-text-primary font-medium">Medium<span className="block text-sm text-text-secondary font-normal">10–50 ha</span></td>
                        <td className="py-3 px-4 text-gold font-bold">£1,500+</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden md:table-cell">Manor houses, small estates, equestrian properties</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden lg:table-cell">Full orthomosaic, CAD plans, woodland assessment</td>
                      </tr>
                      <tr className="bg-white">
                        <td className="py-3 px-4 text-text-primary font-medium">Large<span className="block text-sm text-text-secondary font-normal">50–100 ha</span></td>
                        <td className="py-3 px-4 text-gold font-bold">£2,800+</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden md:table-cell">Country estates, multiple farm units, parkland</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden lg:table-cell">Comprehensive survey package</td>
                      </tr>
                      <tr className="bg-background-alt">
                        <td className="py-3 px-4 text-text-primary font-medium">Major<span className="block text-sm text-text-secondary font-normal">100+ ha</span></td>
                        <td className="py-3 px-4 text-gold font-bold">POA</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden md:table-cell">Large landed estates, multiple holdings</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden lg:table-cell">Bespoke scope & phased delivery</td>
                      </tr>
                      <tr className="bg-white">
                        <td className="py-3 px-4 text-text-primary font-medium">Building Surveys<span className="block text-sm text-text-secondary font-normal">Add-on</span></td>
                        <td className="py-3 px-4 text-gold font-bold">+£400</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden md:table-cell">Detailed roof & facade inspections per building</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden lg:table-cell">Close-range imagery, condition report</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-text-secondary text-sm mb-6 italic">
                  *Guide prices include standard deliverables. Final quote based on site complexity, number of buildings, and specific requirements.
                </p>

                {/* Factors influencing your estimate */}
                <h3 className="font-bold text-teal mb-3">Factors influencing your estimate</h3>
                <ul className="grid grid-cols-2 gap-2 mb-6">
                  {['Estate size & terrain', 'Number of buildings', 'Woodland coverage', 'Required deliverables'].map((factor, index) => (
                    <li key={index} className="flex items-center gap-2 text-text-secondary">
                      <svg className="w-4 h-4 text-gold flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm">{factor}</span>
                    </li>
                  ))}
                </ul>

                <p className="text-text-secondary leading-relaxed mb-6">
                  Our UAV-based approach typically delivers <span className="text-gold font-semibold">40-60% savings</span> compared to conventional ground surveys, whilst providing considerably more thorough documentation. Reach out with your estate specifications and we will furnish a bespoke estimate within 24 hours.
                </p>

                {/* CTA Banner */}
                <div className="bg-teal rounded-xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-center sm:text-left">
                    <p className="text-white font-semibold">Prepared to receive an estimate for your estate?</p>
                    <p className="text-white/70 text-sm">Complimentary, obligation-free quotes within 24 hours</p>
                  </div>
                  <div className="flex gap-3">
                    <a href="tel:+441334804554" className="flex items-center gap-2 px-4 py-2.5 rounded-full border border-white/30 text-white hover:bg-white/10 transition-colors text-sm font-medium">
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
                    src="/images/services/estate/estate-comparison.avif"
                    alt="Comparison of drone estate survey versus traditional ground survey methods"
                    fill
                    className="object-cover"
                  />
                </div>
                <h2 id="estate-vs-traditional" className="text-2xl md:text-3xl font-bold text-teal mb-4 scroll-mt-32">
                  <span className="text-gold">Drone Assessment</span> vs Conventional Methods
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed mb-4">
                  Conventional estate surveys typically entail ground-based surveying teams traversing the complete property over multiple days, supplemented by limited drone photography from manned aircraft. Whilst thorough, this approach proves time-intensive, costly, and frequently overlooks features visible only from above.
                </p>
                <p className="text-text-secondary text-lg leading-relaxed mb-4">
                  A drone estate assessment transforms this process. We can capture comprehensive coverage of even the most extensive estates in a single day, generating detailed orthomosaic imagery that exposes every feature of your land. From concealed drainage patterns and archaeological remains to boundary anomalies and building defects - drone surveys capture particulars that ground teams simply cannot observe.
                </p>
                {/* Technology Comparison Cards */}
                <div className="mt-8">
                  <h3 className="text-center font-bold text-teal text-xl mb-6">Selecting the Right Methodology</h3>
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
                            <h4 className="text-white font-bold text-lg">Select Drone Estate Assessment</h4>
                            <p className="text-gold text-sm font-medium">Thorough coverage</p>
                          </div>
                        </div>
                        <div className="space-y-3">
                          {[
                            { Icon: Map, text: 'Large area coverage needed' },
                            { Icon: Building2, text: 'Multiple buildings to inspect' },
                            { Icon: TreePine, text: 'Woodland & landscape assessment' },
                            { Icon: Camera, text: 'Visual documentation required' },
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
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                          </div>
                          <div>
                            <h4 className="text-teal font-bold text-lg">Select Conventional Survey</h4>
                            <p className="text-text-secondary text-sm font-medium">Ground-level particulars</p>
                          </div>
                        </div>
                        <div className="space-y-3">
                          {[
                            { Icon: Fence, text: 'Legal boundary disputes' },
                            { Icon: FileText, text: 'Title registration requirements' },
                            { Icon: Landmark, text: 'Listed building details' },
                            { Icon: Home, text: 'Internal building surveys' },
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
                    <p className="text-text-secondary text-sm mb-2">Uncertain which methodology fits your estate?</p>
                    <QuoteButton className="text-gold font-semibold hover:underline inline-flex items-center gap-1">
                      Compare Quotes
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </QuoteButton>
                  </div>
                </div>
              </div>

              {/* Precision Standards for Estate Assessment */}
              <div>
                <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-6">
                  <Image
                    src="/images/services/estate/estate-accuracy.avif"
                    alt="Ground control point marker on estate grounds for survey accuracy"
                    fill
                    className="object-cover"
                  />
                </div>
                <h2 id="estate-accuracy" className="text-2xl md:text-3xl font-bold text-teal mb-4 scroll-mt-32">
                  Precision Standards for <span className="text-gold">Estate Assessment</span>
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed mb-4">
                  Our drone estate assessments routinely attain horizontal accuracy of 2-5cm and vertical accuracy of 3-8cm when employing ground control points. This surpasses the specifications for most estate management, planning, and documentation requirements.
                </p>
                <p className="text-text-secondary text-lg leading-relaxed">
                  We deploy RTK/PPK-enabled aircraft with professional-grade cameras to guarantee precise positioning of all imagery. For boundary verification and planning submissions, we establish ground control networks spanning your estate. The outcome is survey-grade data that land agents, solicitors, and planning authorities can depend on with assurance.
                </p>
              </div>

              {/* Key Uses for Estate Assessment */}
              <div>
                <h2 id="estate-applications" className="text-2xl md:text-3xl font-bold text-teal mb-4 scroll-mt-32">
                  Key Uses for <span className="text-gold">Estate Assessment</span>
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed mb-6">
                  Drone estate assessments support estate owners, land agents, solicitors, and property professionals across an extensive array of applications:
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-background-alt rounded-xl p-6">
                    <h3 className="font-bold text-teal mb-2">Estate Administration</h3>
                    <p className="text-text-secondary text-sm">Thorough documentation for daily management, maintenance scheduling, and long-term stewardship of your property.</p>
                  </div>
                  <div className="bg-background-alt rounded-xl p-6">
                    <h3 className="font-bold text-teal mb-2">Succession Preparation</h3>
                    <p className="text-text-secondary text-sm">Comprehensive records for inheritance tax planning, estate division, and wealth transfer across generations.</p>
                  </div>
                  <div className="bg-background-alt rounded-xl p-6">
                    <h3 className="font-bold text-teal mb-2">Property Transactions</h3>
                    <p className="text-text-secondary text-sm">High-quality drone imagery and accurate mapping for marketing materials and due diligence documentation.</p>
                  </div>
                  <div className="bg-background-alt rounded-xl p-6">
                    <h3 className="font-bold text-teal mb-2">Planning Submissions</h3>
                    <p className="text-text-secondary text-sm">Supporting documentation for development proposals, change of use applications, and Listed Building consents.</p>
                  </div>
                  <div className="bg-background-alt rounded-xl p-6">
                    <h3 className="font-bold text-teal mb-2">Insurance Records</h3>
                    <p className="text-text-secondary text-sm">Thorough visual documentation of buildings, structures, and land for insurance valuations and claims.</p>
                  </div>
                  <div className="bg-background-alt rounded-xl p-6">
                    <h3 className="font-bold text-teal mb-2">Environmental Stewardship</h3>
                    <p className="text-text-secondary text-sm">Baseline surveys for environmental schemes, woodland management plans, and habitat documentation.</p>
                  </div>
                </div>

                {/* CTA after applications */}
                <div className="mt-8 text-center">
                  <p className="text-text-secondary mb-4">Have an estate requiring assessment?</p>
                  <div className="flex flex-wrap justify-center gap-3">
                    <QuoteButton className="btn btn-primary btn-shimmer">
                      Talk Through Your Estate
                    </QuoteButton>
                    <a href="tel:+441334804554" className="btn btn-outline">
                      Ring +44 1334 804554
                    </a>
                  </div>
                </div>
              </div>

              {/* Features a Drone Estate Assessment Can Capture */}
              <div>
                <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-6">
                  <Image
                    src="/images/services/estate/estate-feature.avif"
                    alt="Complete drone overview of UK country estate with all features mapped"
                    fill
                    className="object-cover"
                  />
                </div>
                <h2 id="estate-capture" className="text-2xl md:text-3xl font-bold text-teal mb-4 scroll-mt-32">
                  Features an <span className="text-gold">Drone Estate Assessment</span> Can Capture
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed mb-4">
                  A thorough drone estate assessment captures every facet of your property, furnishing documentation that would require weeks to compile using conventional methods. Our assessments typically encompass:
                </p>
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-background-alt rounded-xl p-5">
                    <h4 className="font-bold text-teal mb-2">Buildings & Structures</h4>
                    <ul className="space-y-1 text-text-secondary text-sm">
                      <li>• Principal residence & wings</li>
                      <li>• Estate cottages & lodges</li>
                      <li>• Farm buildings & barns</li>
                      <li>• Walled gardens & glasshouses</li>
                      <li>• Stables & outbuildings</li>
                    </ul>
                  </div>
                  <div className="bg-background-alt rounded-xl p-5">
                    <h4 className="font-bold text-teal mb-2">Land & Landscape</h4>
                    <ul className="space-y-1 text-text-secondary text-sm">
                      <li>• Parkland & formal gardens</li>
                      <li>• Woodland blocks & plantations</li>
                      <li>• Agricultural land & fields</li>
                      <li>• Water features & lakes</li>
                      <li>• Boundaries & hedgerows</li>
                    </ul>
                  </div>
                  <div className="bg-background-alt rounded-xl p-5">
                    <h4 className="font-bold text-teal mb-2">Infrastructure</h4>
                    <ul className="space-y-1 text-text-secondary text-sm">
                      <li>• Driveways & access roads</li>
                      <li>• Gates, walls & fencing</li>
                      <li>• Drainage & water courses</li>
                      <li>• Utilities & services</li>
                      <li>• Rights of way & paths</li>
                    </ul>
                  </div>
                  <div className="bg-background-alt rounded-xl p-5">
                    <h4 className="font-bold text-teal mb-2">Special Features</h4>
                    <ul className="space-y-1 text-text-secondary text-sm">
                      <li>• Historic features & monuments</li>
                      <li>• Archaeological remains</li>
                      <li>• Tree preservation orders</li>
                      <li>• Wildlife habitats</li>
                      <li>• Views & vistas</li>
                    </ul>
                  </div>
                </div>
                <p className="text-text-secondary text-lg leading-relaxed">
                  Every feature is recorded in high-resolution imagery and charted to precise coordinates, generating a complete digital record of your estate that serves for years to come.
                </p>
              </div>

              {/* Survey Outputs & Deliverable Packages */}
              <div>
                <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-6">
                  <Image
                    src="/images/services/estate/estate-deliverables.avif"
                    alt="Computer screen displaying estate survey plans and CAD drawings"
                    fill
                    className="object-cover"
                  />
                </div>
                <h2 id="estate-deliverables" className="text-2xl md:text-3xl font-bold text-teal mb-4 scroll-mt-32">
                  <span className="text-gold">Survey Outputs</span> & Deliverable Packages
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed mb-6">
                  We customise deliverables to match your estate requirements, though our standard survey outputs comprise:
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-4 bg-background-alt rounded-xl p-4">
                    <div className="w-10 h-10 bg-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-teal">Estate Orthomosaic Imagery</h4>
                      <p className="text-text-secondary text-sm">High-resolution, georeferenced drone imagery encompassing your complete estate, assembled into a single seamless map. Ideal for estate records and management scheduling.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4 bg-background-alt rounded-xl p-4">
                    <div className="w-10 h-10 bg-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-teal">Boundary Documentation</h4>
                      <p className="text-text-secondary text-sm">Accurate mapping of all estate boundaries, encompassing hedgerows, walls, fencing, and watercourses. Cross-referenced to title plans where obtainable.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4 bg-background-alt rounded-xl p-4">
                    <div className="w-10 h-10 bg-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-teal">Building Assessments</h4>
                      <p className="text-text-secondary text-sm">Comprehensive drone photography of all buildings from multiple vantage points, including roof condition evaluation and facade documentation.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4 bg-background-alt rounded-xl p-4">
                    <div className="w-10 h-10 bg-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-teal">Woodland Evaluation</h4>
                      <p className="text-text-secondary text-sm">Drone mapping of woodland areas with tree canopy coverage analysis. Beneficial for forestry management and environmental scheme submissions.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4 bg-background-alt rounded-xl p-4">
                    <div className="w-10 h-10 bg-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-teal">CAD Plans & Three-Dimensional Models</h4>
                      <p className="text-text-secondary text-sm">Professional CAD drawings in DWG/DXF format, accompanied by 3D <Link href="/services/drone-topographical-survey" className="text-gold hover:underline">terrain models</Link> for design and visualisation applications.</p>
                    </div>
                  </li>
                </ul>

                {/* CTA after deliverables */}
                <div className="mt-6 p-5 bg-gold/10 border border-gold/20 rounded-xl">
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-teal font-semibold text-center sm:text-left">Require particular deliverables for your estate?</p>
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
                    src="/images/services/estate/estate-timeline.avif"
                    alt="Drone pilot preparing for estate survey flight at UK manor house"
                    fill
                    className="object-cover"
                  />
                </div>
                <h2 id="survey-timeline" className="text-2xl md:text-3xl font-bold text-teal mb-4 scroll-mt-32">
                  Project Timelines & <span className="text-gold">Delivery Schedules</span>
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed mb-4">
                  On-site data capture proves remarkably efficient. A typical 50-hectare estate can be surveyed in a single day, encompassing all buildings and landscape features. Larger estates may necessitate 2-3 days of flying, contingent on the detail level demanded.
                </p>
                <p className="text-text-secondary text-lg leading-relaxed mb-6">
                  Processing and delivery hinges on estate size and your specified outputs. Standard deliverables are typically prepared within 5-10 working days. For pressing projects, we provide expedited processing with swifter turnaround available at supplementary cost.
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
                        <td className="py-3 px-4 text-text-secondary text-sm hidden md:table-cell">Flight planning, airspace clearance, access arrangements</td>
                      </tr>
                      <tr className="bg-background-alt">
                        <td className="py-3 px-4 text-text-primary font-medium">On-Site Survey</td>
                        <td className="py-3 px-4 text-gold font-bold">1-3 days</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden md:table-cell">GCP setup, drone flights, building photography</td>
                      </tr>
                      <tr className="bg-white">
                        <td className="py-3 px-4 text-text-primary font-medium">Data Processing</td>
                        <td className="py-3 px-4 text-gold font-bold">3-5 days</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden md:table-cell">Orthomosaic generation, 3D modelling, georeferencing</td>
                      </tr>
                      <tr className="bg-background-alt">
                        <td className="py-3 px-4 text-text-primary font-medium">Deliverable Production</td>
                        <td className="py-3 px-4 text-gold font-bold">2-4 days</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden md:table-cell">CAD plans, reports, feature mapping, QC checks</td>
                      </tr>
                      <tr className="bg-teal/10">
                        <td className="py-3 px-4 text-teal font-bold">Total (Standard)</td>
                        <td className="py-3 px-4 text-teal font-bold">5-10 working days</td>
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
                    <p className="text-text-secondary text-sm">Require faster delivery? Expedited processing available for time-critical projects.</p>
                  </div>
                </div>

                {/* CTA after timeline */}
                <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
                  <QuoteButton className="btn btn-primary btn-shimmer">
                    Begin Your Survey
                  </QuoteButton>
                  <a href="tel:+441334804554" className="btn btn-outline flex items-center justify-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Ring Peter
                  </a>
                </div>
              </div>

              {/* Selecting an Estate Survey Provider */}
              <div>
                <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-6">
                  <Image
                    src="/images/services/estate/estate-provider.avif"
                    alt="Survey team meeting with estate owner client discussing plans"
                    fill
                    className="object-cover"
                  />
                </div>
                <h2 id="choose-provider" className="text-2xl md:text-3xl font-bold text-teal mb-4 scroll-mt-32">
                  Selecting an <span className="text-gold">Estate Survey Provider</span>
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed mb-4">
                  When choosing a provider to assess your estate, we recommend examining these essential factors:
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
                    <span className="text-text-primary"><strong>Comprehensive insurance</strong> - Public liability and professional indemnity coverage suitable for operating on private estates</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gold mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-text-primary"><strong>Estate track record</strong> - Seek evidence of prior work on comparable properties and appreciation of estate management requirements</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gold mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-text-primary"><strong>Discretion</strong> - Estates are private properties; confirm your provider appreciates confidentiality requirements</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gold mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-text-primary"><strong>Quality deliverables</strong> - Request examples of their mapping and documentation standards</span>
                  </li>
                </ul>
                <p className="text-text-secondary text-lg leading-relaxed mb-6">
                  At HireDronePilot, we satisfy every criterion. We are CAA certified, comprehensively insured, and have executed surveys for estates spanning from modest manor houses to substantial landed properties throughout the UK.
                </p>

                {/* CTA after provider section */}
                <div className="bg-teal rounded-xl p-5">
                  <p className="text-white font-semibold mb-3">Prepared to collaborate with a dependable estate survey provider?</p>
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

              {/* Cost Comparison with Conventional Methods */}
              <div>
                <h2 id="cost-comparison" className="text-2xl md:text-3xl font-bold text-teal mb-4 scroll-mt-32">
                  <span className="text-gold">Drone Assessment</span> vs Conventional Survey Costs
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed mb-4">
                  In virtually every instance, yes - considerably. Conventional estate surveys demand teams of surveyors operating over multiple days or weeks, frequently supplemented by costly manned aircraft photography. Expenses accumulate swiftly, particularly for larger estates with extensive woodland or numerous buildings.
                </p>
                <p className="text-text-secondary text-lg leading-relaxed mb-6">
                  Our drone estate assessments capture equivalent or superior data in a fraction of the duration. An estate that might occupy a ground team for a fortnight can be flown in 1-3 days. Cost reductions typically span 40-60% compared to conventional methods, whilst furnishing more thorough drone coverage and frequently superior quality imagery. For estates of any substantial size, drone surveys present compelling value.
                </p>

                {/* Final CTA */}
                <div className="bg-gradient-to-r from-teal to-teal-dark rounded-xl p-6 text-center">
                  <h3 className="text-white font-bold text-xl mb-2">Prepared to Explore Your Estate Survey?</h3>
                  <p className="text-white/80 text-sm mb-4">Specialist guidance - Bespoke pricing - Avg Response within 5 Mins</p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <QuoteButton className="btn btn-primary btn-shimmer">
                      Obtain Estate Pricing
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
                  With extensive experience surveying estates across the UK, Peter personally oversees every project to ensure comprehensive documentation and professional delivery.
                </p>
              </div>

              {/* Table of Contents */}
              <div className="bg-background-alt border border-border rounded-2xl p-6">
                <h3 className="text-teal font-bold text-lg mb-4">
                  TLDR: Drone Estate Assessments Explained
                </h3>
                <nav className="space-y-2">
                  {[
                    { id: 'what-is-estate-survey', label: 'Understanding Drone Estate Assessment' },
                    { id: 'estate-cost', label: 'Estate Assessment Pricing Guide' },
                    { id: 'estate-vs-traditional', label: 'Drone Assessment vs Conventional Methods' },
                    { id: 'estate-accuracy', label: 'Precision Standards for Estate Assessment' },
                    { id: 'estate-applications', label: 'Key Uses for Estate Assessment' },
                    { id: 'estate-capture', label: 'Features a Drone Estate Assessment Can Capture' },
                    { id: 'estate-deliverables', label: 'Survey Outputs & Deliverable Packages' },
                    { id: 'survey-timeline', label: 'Project Timelines & Delivery Schedules' },
                    { id: 'choose-provider', label: 'Selecting an Estate Survey Provider' },
                    { id: 'cost-comparison', label: 'Drone Assessment vs Conventional Survey Costs' },
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
                  Estate Survey Outputs
                </h3>
                <ul className="space-y-3">
                  {[
                    'Estate orthomosaic imagery',
                    'Boundary mapping & plans',
                    'Building surveys & photography',
                    'Woodland assessment',
                    'CAD plans (DWG/DXF)',
                    '3D terrain models',
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
                  Talk Through Your Estate
                </h3>
                <p className="text-white/70 text-sm mb-4">
                  Receive specialist guidance and bespoke pricing.
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
                    placeholder="Tell us about your estate..."
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

      {/* Related Services */}
      <section className="py-16 bg-background-alt">
        <div className="container">
          <h2 className="text-2xl font-bold text-teal mb-8 text-center">
            Complementary Survey Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link
              href="/services/drone-topographical-survey"
              className="bg-white border border-border rounded-xl p-6 hover:border-gold hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-teal font-bold text-lg mb-2">Drone Topographic Survey</h3>
              <p className="text-text-secondary text-sm">
                Detailed terrain mapping with contours and elevation data for planning and design.
              </p>
            </Link>
            <Link
              href="/services/drone-lidar-mapping"
              className="bg-white border border-border rounded-xl p-6 hover:border-gold hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-teal font-bold text-lg mb-2">LiDAR Mapping</h3>
              <p className="text-text-secondary text-sm">
                Precision LiDAR scanning for woodland and vegetated areas where cameras cannot see.
              </p>
            </Link>
            <Link
              href="/services/drone-surveys"
              className="bg-white border border-border rounded-xl p-6 hover:border-gold hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-teal font-bold text-lg mb-2">Drone Survey</h3>
              <p className="text-text-secondary text-sm">
                Comprehensive drone surveys delivering precise data and 3D models.
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
