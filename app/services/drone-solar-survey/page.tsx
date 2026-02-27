import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import QuoteButton from '@/components/QuoteButton';
import Testimonials from '@/components/Testimonials';
import FloatingCTA from '@/components/FloatingCTA';
import EquipmentSection from '@/components/EquipmentSection';
import { Zap, ThermometerSun, BarChart3, Wrench, Clock, Shield, Sun, Battery } from 'lucide-react';
import { ServiceSchema, BreadcrumbSchema } from '@/components/SchemaMarkup';
import { ClientLogoMarqueeInline } from '@/components/ClientLogoMarquee';

export const metadata: Metadata = {
  title: 'Drone Solar Farm Survey Solutions | Solar Panel Inspection UK | Hire Drone Pilot',
  description: 'Expert UAV solar farm survey services throughout the UK. Thermal imaging inspection, panel fault identification, and performance assessment. CAA certified drone operators.',
  keywords: 'drone solar farm survey, drone solar panel inspection, drone thermal imaging solar, solar farm drone survey uk, drone pv panel inspection, drone solar asset management',
};

export default function DroneSolarFarmSurveyPage() {
  return (
    <>
      <ServiceSchema
        name="Drone Solar Farm Survey Services"
        description="Professional drone solar farm survey services across the UK. Thermal imaging inspection, panel defect detection, and performance analysis. CAA approved drone operators."
        url="https://hiredronepilot.uk/services/drone-solar-survey"
      />
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://hiredronepilot.uk" },
        { name: "Services", url: "https://hiredronepilot.uk/services" },
        { name: "Drone Solar Farm Survey Services", url: "https://hiredronepilot.uk/services/drone-solar-survey" }
      ]} />
      {/* Hero Section */}
      <section className="relative min-h-[800px] md:min-h-[600px] flex items-start bg-teal -mt-[120px] pt-[120px] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/services/solar-farm/solar-farm-hero.avif"
            alt="Drone surveying solar farm with thermal imaging camera in UK"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-teal-dark via-teal-dark/90 via-40% to-teal-dark/40 z-10" />
        </div>
        <div className="container pt-8 pb-52 lg:pb-40 lg:pt-12 relative z-10">
          <div className="max-w-3xl">
            <p className="text-gold font-semibold uppercase tracking-wider mb-3">
              Solar Asset Management
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Drone Solar Farm Survey Service
            </h1>
            <p className="text-white/80 text-lg md:text-xl mb-8">
              High-precision thermal imaging and inspection services for solar installations. Identify faulty panels, enhance performance, and maximise your energy output.
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

              {/* What is a drone solar farm survey? */}
              <div>
                <h2 id="what-is-solar-survey" className="text-2xl md:text-3xl font-bold text-teal mb-4 scroll-mt-32">
                  Understanding <span className="text-gold">Drone Solar Farm Surveys</span>
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed mb-4">
                  A UAV solar farm survey employs <Link href="/services/drone-thermal-imaging" className="text-gold hover:underline">thermal imaging</Link> cameras fitted to our aircraft to inspect solar panel installations swiftly and precisely. Unlike conventional ground-based inspections, our drones can survey complete solar farms in hours instead of days, gathering detailed thermal data that uncovers panel faults invisible to the unaided eye.
                </p>
                <p className="text-text-secondary text-lg leading-relaxed">
                  At Hire Drone Pilot, we merge high-resolution RGB imagery with radiometric thermal sensors capable of detecting temperature variations as minute as 0.05 degrees Celsius. This precision enables us to pinpoint hotspots, bypass diode failures, cell fractures, and soiling problems that diminish your energy output and can cause expensive damage if left unaddressed.
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
                        Thorough Solar Farm Inspection,
                        <span className="text-gold block relative inline-block">
                          Rapid Delivery
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
                          'Thermal imagery of each panel',
                          'Panel fault report with coordinates',
                          'High-resolution orthomosaic',
                          'Maintenance priority schedule',
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
                          'CAA certified & comprehensively insured',
                          'Radiometric thermal cameras',
                          'Advanced DJI & sensor technology',
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
                        <span>Relied upon by solar farm operators, asset managers & O&M providers throughout Britain.</span>
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
                    <p className="text-white/50 text-xs uppercase tracking-wider text-center mb-4">Relied upon by industry leaders</p>
                    <ClientLogoMarqueeInline />
                  </div>
                </div>
              </div>

              {/* How much does a drone solar farm survey cost? */}
              <div>
                <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-6">
                  <Image
                    src="/images/services/solar-farm/solar-farm-cost.avif"
                    alt="Surveyor reviewing drone solar farm survey data on tablet"
                    fill
                    className="object-cover"
                  />
                </div>
                <h2 id="solar-cost" className="text-2xl md:text-3xl font-bold text-teal mb-4 scroll-mt-32">
                  What&apos;s the Investment for <span className="text-gold">Drone Solar Farm Surveys</span>?
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed mb-6">
                  Costs vary based on your site capacity and inspection specifications. Here&apos;s a pricing overview to assist your planning:
                </p>

                {/* Pricing Table */}
                <div className="rounded-xl overflow-hidden border border-border mb-6">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-teal">
                        <th className="text-left text-white font-semibold py-3 px-4">Site Capacity</th>
                        <th className="text-left text-white font-semibold py-3 px-4">Starting From</th>
                        <th className="text-left text-white font-semibold py-3 px-4 hidden md:table-cell">Common Uses</th>
                        <th className="text-left text-white font-semibold py-3 px-4 hidden lg:table-cell">Outputs</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-white">
                        <td className="py-3 px-4 text-text-primary font-medium">Compact<span className="block text-sm text-text-secondary font-normal">Under 5MW</span></td>
                        <td className="py-3 px-4 text-gold font-bold">£800+</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden md:table-cell">Community solar, commercial rooftop installations</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden lg:table-cell">Thermal report, fault register</td>
                      </tr>
                      <tr className="bg-background-alt">
                        <td className="py-3 px-4 text-text-primary font-medium">Mid-Size<span className="block text-sm text-text-secondary font-normal">5-20MW</span></td>
                        <td className="py-3 px-4 text-gold font-bold">£1,500+</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden md:table-cell">Medium-scale ground mount, portfolio facilities</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden lg:table-cell">Complete thermal + RGB + fault report</td>
                      </tr>
                      <tr className="bg-white">
                        <td className="py-3 px-4 text-text-primary font-medium">Extensive<span className="block text-sm text-text-secondary font-normal">20-50MW</span></td>
                        <td className="py-3 px-4 text-gold font-bold">£2,500+</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden md:table-cell">Major solar installations, asset acquisitions</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden lg:table-cell">Thorough inspection package</td>
                      </tr>
                      <tr className="bg-background-alt">
                        <td className="py-3 px-4 text-text-primary font-medium">Utility Scale<span className="block text-sm text-text-secondary font-normal">50+ MW</span></td>
                        <td className="py-3 px-4 text-gold font-bold">POA</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden md:table-cell">Large utility-scale installations</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden lg:table-cell">Tailored scope & phased delivery</td>
                      </tr>
                      <tr className="bg-white">
                        <td className="py-3 px-4 text-text-primary font-medium">Scheduled Inspection<span className="block text-sm text-text-secondary font-normal">Annual agreement</span></td>
                        <td className="py-3 px-4 text-gold font-bold">POA</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden md:table-cell">O&M contracts, warranty adherence</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden lg:table-cell">Periodic inspections + trend analysis</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-text-secondary text-sm mb-6 italic">
                  *Indicative prices cover standard outputs. Final quotation reflects site layout, accessibility, and particular needs.
                </p>

                {/* What affects your quote */}
                <h3 className="font-bold text-teal mb-3">Factors influencing your quotation?</h3>
                <ul className="grid grid-cols-2 gap-2 mb-6">
                  {['Site capacity (MW)', 'Panel arrangement', 'Turnaround timeframe', 'Report comprehensiveness'].map((factor, index) => (
                    <li key={index} className="flex items-center gap-2 text-text-secondary">
                      <svg className="w-4 h-4 text-gold flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm">{factor}</span>
                    </li>
                  ))}
                </ul>

                <p className="text-text-secondary leading-relaxed mb-6">
                  Our UAV-based approach generally achieves <span className="text-gold font-semibold">60-80%</span> cost savings versus manual panel-by-panel inspection. Get in touch with your site specifics and we&apos;ll supply a customised quotation within 24 hours.
                </p>

                {/* CTA Banner */}
                <div className="bg-teal rounded-xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-center sm:text-left">
                    <p className="text-white font-semibold">Prepared to receive pricing for your solar farm?</p>
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
                      Compare Quotes
                    </QuoteButton>
                  </div>
                </div>
              </div>

              {/* Drone vs Manual Inspection */}
              <div>
                <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-6">
                  <Image
                    src="/images/services/solar-farm/solar-farm-comparison.avif"
                    alt="Comparison of drone solar inspection versus manual panel inspection"
                    fill
                    className="object-cover"
                  />
                </div>
                <h2 id="drone-vs-manual" className="text-2xl md:text-3xl font-bold text-teal mb-4 scroll-mt-32">
                  How Do <span className="text-gold">Drone Solar Farm Surveys</span> Compare to Manual Inspection?
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed mb-4">
                  Conventional manual inspection demands that technicians physically access each panel, examining for visible damage and utilising handheld thermal cameras. This method proves slow, labour-intensive, and can overlook faults that aren&apos;t apparent at panel level.
                </p>
                <p className="text-text-secondary text-lg leading-relaxed mb-4">
                  Our UAV solar farm survey captures thermal and visual data from an optimal drone vantage point, examining thousands of panels per hour. The uniform viewing angle and automated flight paths guarantee no panel is missed, whilst our calibrated thermal sensors detect anomalies that handheld devices simply cannot match regarding coverage and consistency.
                </p>
                {/* Technology Comparison Cards */}
                <div className="mt-8">
                  <h3 className="text-center font-bold text-teal text-xl mb-6">Selecting the Optimal Method</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {/* Drone Card */}
                    <div className="relative bg-teal rounded-2xl p-6 overflow-hidden group hover:shadow-xl transition-shadow duration-300">
                      {/* Decorative pattern */}
                      <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                        <svg viewBox="0 0 100 100" className="w-full h-full">
                          <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="1" fill="none" className="text-gold" />
                          <circle cx="50" cy="50" r="25" stroke="currentColor" strokeWidth="1" fill="none" className="text-gold" />
                          <circle cx="50" cy="50" r="10" stroke="currentColor" strokeWidth="1" fill="none" className="text-gold" />
                        </svg>
                      </div>
                      <div className="relative z-10">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-12 h-12 bg-gold/20 rounded-xl flex items-center justify-center">
                            <Zap className="w-6 h-6 text-gold" />
                          </div>
                          <div>
                            <h4 className="text-white font-bold text-lg">UAV Solar Farm Survey</h4>
                            <p className="text-gold text-sm font-medium">Swift & thorough</p>
                          </div>
                        </div>
                        <div className="space-y-3">
                          {[
                            { Icon: Clock, text: 'Survey 50MW+ daily' },
                            { Icon: ThermometerSun, text: 'Radiometric thermal imaging' },
                            { Icon: BarChart3, text: 'Uniform, reproducible data' },
                            { Icon: Shield, text: 'No panel access necessary' },
                          ].map((item, i) => (
                            <div key={i} className="flex items-center gap-3 bg-white/10 rounded-lg px-4 py-2.5">
                              <item.Icon className="w-5 h-5 text-gold flex-shrink-0" strokeWidth={1.5} />
                              <span className="text-white/90 font-medium">{item.text}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Manual Card */}
                    <div className="relative bg-white border-2 border-border rounded-2xl p-6 overflow-hidden group hover:border-gold hover:shadow-xl transition-all duration-300">
                      {/* Decorative pattern */}
                      <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
                        <svg viewBox="0 0 100 100" className="w-full h-full">
                          <rect x="10" y="10" width="80" height="80" fill="currentColor" className="text-teal" />
                        </svg>
                      </div>
                      <div className="relative z-10">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-12 h-12 bg-teal/10 rounded-xl flex items-center justify-center">
                            <Wrench className="w-6 h-6 text-teal" />
                          </div>
                          <div>
                            <h4 className="text-teal font-bold text-lg">Manual Inspection</h4>
                            <p className="text-text-secondary text-sm font-medium">Conventional approach</p>
                          </div>
                        </div>
                        <div className="space-y-3">
                          {[
                            { Icon: Clock, text: '1-2MW daily typically' },
                            { Icon: ThermometerSun, text: 'Handheld thermal cameras' },
                            { Icon: BarChart3, text: 'Variable viewing angles' },
                            { Icon: Shield, text: 'H&S hazards from panel access' },
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
                    <p className="text-text-secondary text-sm mb-2">Uncertain which method fits your site?</p>
                    <QuoteButton className="text-gold font-semibold hover:underline inline-flex items-center gap-1">
                      Receive professional guidance
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </QuoteButton>
                  </div>
                </div>
              </div>

              {/* What accuracy can a drone solar farm survey achieve? */}
              <div>
                <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-6">
                  <Image
                    src="/images/services/solar-farm/solar-farm-accuracy.avif"
                    alt="Thermal image showing temperature accuracy on solar panels"
                    fill
                    className="object-cover"
                  />
                </div>
                <h2 id="solar-accuracy" className="text-2xl md:text-3xl font-bold text-teal mb-4 scroll-mt-32">
                  What Precision Levels Do <span className="text-gold">Drone Solar Farm Surveys</span> Attain?
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed mb-4">
                  Our radiometric thermal cameras achieve temperature measurement precision surpassing ±2 degrees Celsius, with thermal sensitivity detecting variations as minute as 0.05 degrees. This accuracy enables us to pinpoint hotspots and anomalies that signal cell damage, bypass diode failures, or connection problems.
                </p>
                <p className="text-text-secondary text-lg leading-relaxed">
                  Geospatial precision proves equally vital for positioning faults. Utilising RTK-enabled drones, we locate each thermal anomaly to within centimetres, allowing your maintenance team to find faulty panels rapidly. Every fault is mapped with precise GPS coordinates and cross-referenced to your panel layout, guaranteeing efficient remediation.
                </p>
              </div>

              {/* Applications */}
              <div>
                <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-6">
                  <Image
                    src="/images/services/solar-farm/solar-farm-applications.avif"
                    alt="Solar farm drone view showing various panel configurations"
                    fill
                    className="object-cover"
                  />
                </div>
                <h2 id="solar-applications" className="text-2xl md:text-3xl font-bold text-teal mb-4 scroll-mt-32">
                  Where Are <span className="text-gold">Drone Solar Farm Surveys</span> Applied?
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed mb-6">
                  UAV solar farm surveys support the complete lifecycle of solar assets, from pre-acquisition due diligence to continuing O&M programmes. These are the principal applications:
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-background-alt rounded-xl p-6">
                    <h3 className="font-bold text-teal mb-2">Asset Acquisition</h3>
                    <p className="text-text-secondary text-sm">Independent condition evaluation for investors and purchasers. Pinpoint faults and warranty claims prior to transaction completion.</p>
                  </div>
                  <div className="bg-background-alt rounded-xl p-6">
                    <h3 className="font-bold text-teal mb-2">Performance Enhancement</h3>
                    <p className="text-text-secondary text-sm">Identify underperforming panels reducing string or inverter output. Prioritise maintenance for optimal yield improvement.</p>
                  </div>
                  <div className="bg-background-alt rounded-xl p-6">
                    <h3 className="font-bold text-teal mb-2">Warranty Adherence</h3>
                    <p className="text-text-secondary text-sm">Document panel faults for manufacturer warranty submissions. Our reports supply the evidence required for successful claims.</p>
                  </div>
                  <div className="bg-background-alt rounded-xl p-6">
                    <h3 className="font-bold text-teal mb-2">O&M Contract Transition</h3>
                    <p className="text-text-secondary text-sm">Baseline condition surveys when switching O&M providers. Clear documentation of existing faults and maintenance requirements.</p>
                  </div>
                  <div className="bg-background-alt rounded-xl p-6">
                    <h3 className="font-bold text-teal mb-2">Insurance Documentation</h3>
                    <p className="text-text-secondary text-sm">Post-event damage evaluation following storms, hail, or vandalism. Evidence for insurance claims with georeferenced fault mapping.</p>
                  </div>
                  <div className="bg-background-alt rounded-xl p-6">
                    <h3 className="font-bold text-teal mb-2">Regulatory Adherence</h3>
                    <p className="text-text-secondary text-sm">Support for periodic inspection requirements under subsidy programmes. Documented evidence of ongoing asset maintenance.</p>
                  </div>
                </div>

                {/* CTA after applications */}
                <div className="mt-8 text-center">
                  <p className="text-text-secondary mb-4">Prepared to inspect your solar farm?</p>
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

              {/* Can drones detect faulty solar panels? */}
              <div>
                <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-6">
                  <Image
                    src="/images/services/solar-farm/solar-farm-feature.avif"
                    alt="Thermal anomaly detection showing hotspots on solar panels"
                    fill
                    className="object-cover"
                  />
                </div>
                <h2 id="faulty-panel-detection" className="text-2xl md:text-3xl font-bold text-teal mb-4 scroll-mt-32">
                  Can UAVs Identify <span className="text-gold">Defective Solar Panels</span>?
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed mb-4">
                  Yes - thermal imaging proves exceptionally effective at detecting a broad spectrum of solar panel faults. When panels have problems, they produce excess heat that appears distinctly on thermal imagery. Our radiometric cameras can pinpoint:
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gold mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-text-primary"><strong>Hotspots</strong> - Concentrated heating signalling cell damage, faulty connections, or shading impacts</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gold mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-text-primary"><strong>Bypass diode failures</strong> - Overheating bypass diodes visible as heated thirds of panels</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gold mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-text-primary"><strong>Cell fractures</strong> - Cracked cells appearing as linear or irregular heated zones</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gold mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-text-primary"><strong>PID (Potential Induced Degradation)</strong> - Patterns of diminished output across modules</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gold mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-text-primary"><strong>Contamination & vegetation</strong> - Bird droppings, debris, and vegetation shadows impacting performance</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gold mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-text-primary"><strong>String failures</strong> - Complete strings displaying as uniformly cold versus neighbouring strings</span>
                  </li>
                </ul>
                <p className="text-text-secondary text-lg leading-relaxed">
                  Early identification of these problems prevents energy loss and circumvents the safety hazards linked to severely overheating panels. Our comprehensive fault reports categorise each anomaly by severity, enabling you to prioritise maintenance strategically.
                </p>
              </div>

              {/* What deliverables? */}
              <div>
                <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-6">
                  <Image
                    src="/images/services/solar-farm/solar-farm-deliverables.avif"
                    alt="Solar farm inspection reports and thermal analysis displayed on screen"
                    fill
                    className="object-cover"
                  />
                </div>
                <h2 id="solar-deliverables" className="text-2xl md:text-3xl font-bold text-teal mb-4 scroll-mt-32">
                  What Outputs Do You Receive From a <span className="text-gold">Drone Solar Farm Survey</span>?
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed mb-6">
                  We customise outputs to match your particular requirements, though our standard UAV solar farm survey deliverables encompass:
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-4 bg-background-alt rounded-xl p-4">
                    <div className="w-10 h-10 bg-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <ThermometerSun className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <h4 className="font-bold text-teal">Thermal Imagery</h4>
                      <p className="text-text-secondary text-sm">High-resolution radiometric thermal images of each panel. Calibrated temperature data for precise fault classification.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4 bg-background-alt rounded-xl p-4">
                    <div className="w-10 h-10 bg-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-teal">Panel Fault Reports</h4>
                      <p className="text-text-secondary text-sm">Thorough fault register with GPS coordinates, fault type classification, severity ratings, and recommended remedial actions.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4 bg-background-alt rounded-xl p-4">
                    <div className="w-10 h-10 bg-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-teal">Site Orthomosaic</h4>
                      <p className="text-text-secondary text-sm">High-resolution drone imagery spanning your complete site. Ideal for site management, vegetation monitoring, and visual condition evaluation.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4 bg-background-alt rounded-xl p-4">
                    <div className="w-10 h-10 bg-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-teal">Site Mapping</h4>
                      <p className="text-text-secondary text-sm">GIS-compatible mapping featuring panel locations. Integration with your asset management system for streamlined maintenance planning.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4 bg-background-alt rounded-xl p-4">
                    <div className="w-10 h-10 bg-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <BarChart3 className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <h4 className="font-bold text-teal">Performance Assessment</h4>
                      <p className="text-text-secondary text-sm">Statistical summary of faults by type and severity. Projected energy loss computations and comparison with prior inspections.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4 bg-background-alt rounded-xl p-4">
                    <div className="w-10 h-10 bg-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-teal">Maintenance Prioritisation</h4>
                      <p className="text-text-secondary text-sm">Ranked action list based on fault severity and potential energy impact. Clear direction for your maintenance team or O&M provider.</p>
                    </div>
                  </li>
                </ul>

                {/* CTA after deliverables */}
                <div className="mt-6 p-5 bg-gold/10 border border-gold/20 rounded-xl">
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-teal font-semibold text-center sm:text-left">Require particular outputs for your project?</p>
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
                    src="/images/services/solar-farm/solar-farm-timeline.avif"
                    alt="Drone pilot preparing for solar farm survey"
                    fill
                    className="object-cover"
                  />
                </div>
                <h2 id="survey-timeline" className="text-2xl md:text-3xl font-bold text-teal mb-4 scroll-mt-32">
                  What&apos;s the Duration of a <span className="text-gold">Drone Solar Farm Survey</span>?
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed mb-4">
                  On-site data acquisition is remarkably efficient. We can survey 50-100MW daily depending on site layout and weather conditions. A typical 20MW solar farm requires just 3-4 hours of flight time, capturing both thermal and RGB imagery of each panel.
                </p>
                <p className="text-text-secondary text-lg leading-relaxed mb-6">
                  Processing and report generation varies with site size and your specified outputs. Standard deliverables are typically prepared within 5-7 working days. For pressing projects requiring rapid turnaround, we provide expedited processing with 48-72 hour delivery available at supplementary cost.
                </p>

                {/* Timeline Table */}
                <div className="rounded-xl overflow-hidden border border-border">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-teal">
                        <th className="text-left text-white font-semibold py-3 px-4">Stage</th>
                        <th className="text-left text-white font-semibold py-3 px-4">Timeframe</th>
                        <th className="text-left text-white font-semibold py-3 px-4 hidden md:table-cell">Activities</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-white">
                        <td className="py-3 px-4 text-text-primary font-medium">Planning & Organisation</td>
                        <td className="py-3 px-4 text-gold font-bold">1-2 days</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden md:table-cell">Site evaluation, flight planning, weather window scheduling</td>
                      </tr>
                      <tr className="bg-background-alt">
                        <td className="py-3 px-4 text-text-primary font-medium">On-Site Data Acquisition</td>
                        <td className="py-3 px-4 text-gold font-bold">½-1 day</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden md:table-cell">UAV flights capturing thermal & RGB imagery</td>
                      </tr>
                      <tr className="bg-white">
                        <td className="py-3 px-4 text-text-primary font-medium">Image Processing</td>
                        <td className="py-3 px-4 text-gold font-bold">1-2 days</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden md:table-cell">Orthorectification, thermal calibration, stitching</td>
                      </tr>
                      <tr className="bg-background-alt">
                        <td className="py-3 px-4 text-text-primary font-medium">Fault Assessment</td>
                        <td className="py-3 px-4 text-gold font-bold">2-3 days</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden md:table-cell">Panel-by-panel evaluation, fault classification, mapping</td>
                      </tr>
                      <tr className="bg-white">
                        <td className="py-3 px-4 text-text-primary font-medium">Report Compilation</td>
                        <td className="py-3 px-4 text-gold font-bold">1 day</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden md:table-cell">Fault report, executive summary, deliverables package</td>
                      </tr>
                      <tr className="bg-teal/10">
                        <td className="py-3 px-4 text-teal font-bold">Overall (Standard)</td>
                        <td className="py-3 px-4 text-teal font-bold">5-7 working days</td>
                        <td className="py-3 px-4 text-teal text-sm font-medium hidden md:table-cell">From site attendance to final delivery</td>
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
                    <p className="text-teal font-semibold text-sm">Expedited Processing Offered</p>
                    <p className="text-text-secondary text-sm">Require faster delivery? 48-72 hour turnaround accessible for pressing projects and acquisitions.</p>
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
                    Chat With Peter
                  </a>
                </div>
              </div>

              {/* How to choose a provider */}
              <div>
                <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-6">
                  <Image
                    src="/images/services/solar-farm/solar-farm-provider.avif"
                    alt="Survey team meeting with solar farm operator"
                    fill
                    className="object-cover"
                  />
                </div>
                <h2 id="choose-provider" className="text-2xl md:text-3xl font-bold text-teal mb-4 scroll-mt-32">
                  How Should I Select a <span className="text-gold">Drone Solar Farm Survey</span> Provider?
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed mb-4">
                  Not every UAV solar inspection service is equivalent. When assessing providers, we suggest verifying these essential criteria:
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gold mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-text-primary"><strong>CAA certification</strong> - Confirm they possess valid GVC or legacy PfCO authorisations for commercial work</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gold mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-text-primary"><strong>Radiometric thermal cameras</strong> - Not all thermal cameras supply calibrated temperature data essential for precise analysis</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gold mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-text-primary"><strong>Solar sector expertise</strong> - Comprehension of PV fault types and their operational consequences</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gold mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-text-primary"><strong>Comprehensive insurance</strong> - Public liability and professional indemnity coverage suited to solar asset work</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gold mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-text-primary"><strong>Transparent reporting</strong> - Reports that integrate with your asset management systems and O&M workflows</span>
                  </li>
                </ul>
                <p className="text-text-secondary text-lg leading-relaxed mb-6">
                  At Hire Drone Pilot, we satisfy every criterion. We&apos;re CAA certified, comprehensively insured, and have completed solar farm inspections for asset owners, investors, and O&M providers throughout Britain.
                </p>

                {/* CTA after provider section */}
                <div className="bg-teal rounded-xl p-5">
                  <p className="text-white font-semibold mb-3">Prepared to partner with a dependable solar inspection provider?</p>
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
                  Are <span className="text-gold">Drone Solar Farm Surveys</span> More Cost-Effective Than Manual Inspection?
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed mb-4">
                  Considerably more economical in nearly every scenario. Conventional manual inspection of a 20MW solar farm might require a team of technicians an entire week, with associated labour, equipment hire, and health & safety expenditure. Our UAV survey captures the same site in hours.
                </p>
                <p className="text-text-secondary text-lg leading-relaxed mb-6">
                  The cost savings typically range from 60-80% compared to conventional panel-by-panel inspection, while producing more thorough data. Every panel is inspected from a consistent angle with calibrated thermal sensors - something manual inspection simply cannot replicate. For portfolio owners with multiple sites, the economics become even more attractive with multi-site contracts.
                </p>

                {/* Final CTA */}
                <div className="bg-gradient-to-r from-teal to-teal-dark rounded-xl p-6 text-center">
                  <h3 className="text-white font-bold text-xl mb-2">Ready to Talk About Your Solar Farm Inspection?</h3>
                  <p className="text-white/80 text-sm mb-4">Professional guidance - Bespoke pricing - Avg Response within 5 Mins</p>
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
                  With considerable expertise in surveying and UAV operations, Peter personally manages every solar farm inspection to ensure precise fault identification and professional delivery.
                </p>
              </div>

              {/* Table of Contents */}
              <div className="bg-background-alt border border-border rounded-2xl p-6">
                <h3 className="text-teal font-bold text-lg mb-4">
                  TLDR: UAV Solar Farm Survey Explained
                </h3>
                <nav className="space-y-2">
                  {[
                    { id: 'what-is-solar-survey', label: 'Understanding UAV Solar Farm Surveys' },
                    { id: 'solar-cost', label: 'What\'s the Investment for UAV Solar Farm Surveys?' },
                    { id: 'drone-vs-manual', label: 'How Do UAV Solar Farm Surveys Compare to Manual Inspection?' },
                    { id: 'solar-accuracy', label: 'What Precision Levels Do UAV Solar Farm Surveys Attain?' },
                    { id: 'solar-applications', label: 'Where Are UAV Solar Farm Surveys Applied?' },
                    { id: 'faulty-panel-detection', label: 'Can UAVs Identify Defective Solar Panels?' },
                    { id: 'solar-deliverables', label: 'What Outputs Do You Receive From a UAV Solar Farm Survey?' },
                    { id: 'survey-timeline', label: 'What\'s the Duration of a UAV Solar Farm Survey?' },
                    { id: 'choose-provider', label: 'How Should I Select a UAV Solar Farm Survey Provider?' },
                    { id: 'cost-comparison', label: 'Are UAV Solar Farm Surveys More Cost-Effective Than Manual Inspection?' },
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
                  Solar Survey Outputs
                </h3>
                <ul className="space-y-3">
                  {[
                    'Thermal imaging data',
                    'Panel fault reports',
                    'Orthomosaic mapping',
                    'Site documentation',
                    'Performance assessment',
                    'Maintenance scheduling',
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
                  Receive professional guidance and bespoke pricing.
                </p>
                <form name="sidebar-quote-solar" method="POST" className="space-y-3">
                  <input type="hidden" name="form-name" value="sidebar-quote-solar" />
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
              href="/services/drone-topographical-survey"
              className="bg-white border border-border rounded-xl p-6 hover:border-gold hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-teal font-bold text-lg mb-2">Topographic Survey</h3>
              <p className="text-text-secondary text-sm">
                High-precision topographic surveys for solar farm site evaluation and development planning.
              </p>
            </Link>
            <Link
              href="/services/drone-lidar-mapping"
              className="bg-white border border-border rounded-xl p-6 hover:border-gold hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-teal font-bold text-lg mb-2">LiDAR Mapping</h3>
              <p className="text-text-secondary text-sm">
                Detailed terrain models for solar farm site selection and drainage assessment.
              </p>
            </Link>
            <Link
              href="/services/drone-surveys"
              className="bg-white border border-border rounded-xl p-6 hover:border-gold hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-teal font-bold text-lg mb-2">Drone Survey</h3>
              <p className="text-text-secondary text-sm">
                Thorough drone surveys for construction monitoring and site documentation.
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
