import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import QuoteButton from '@/components/QuoteButton';
import Testimonials from '@/components/Testimonials';
import FloatingCTA from '@/components/FloatingCTA';
import EquipmentSection from '@/components/EquipmentSection';
import { ServiceSchema, BreadcrumbSchema } from '@/components/SchemaMarkup';
import { ClientLogoMarqueeInline } from '@/components/ClientLogoMarquee';
import { Box, Cpu, Building2, Landmark, Mountain, ShieldCheck, Clock, PoundSterling } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Drone Point Cloud Mapping UK | 3D LiDAR & Photogrammetry | Hire Drone Pilot',
  description: 'Professional drone point cloud mapping services across the UK. High-density 3D point clouds from photogrammetry and LiDAR for BIM, heritage recording and terrain modelling. CAA certified.',
  keywords: 'drone point cloud, point cloud mapping, lidar point cloud, drone 3d mapping, photogrammetry point cloud, bim point cloud, drone point cloud survey',
};

export default function DronePointCloudMappingPage() {
  return (
    <>
      <ServiceSchema
        name="Drone Point Cloud Mapping Services"
        description="Professional drone point cloud mapping services across the UK. High-density 3D point clouds from photogrammetry and LiDAR for BIM, heritage recording and terrain modelling. CAA certified."
        url="https://hiredronepilot.uk/services/drone-point-cloud-mapping"
      />
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://hiredronepilot.uk" },
        { name: "Services", url: "https://hiredronepilot.uk/services" },
        { name: "Drone Point Cloud Mapping", url: "https://hiredronepilot.uk/services/drone-point-cloud-mapping" }
      ]} />

      {/* Hero Section */}
      <section className="relative min-h-[800px] md:min-h-[600px] flex items-start bg-teal -mt-[120px] pt-[120px] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/services/service-drone-survey.avif"
            alt="Drone capturing high-density point cloud data over UK terrain"
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
              Drone Point Cloud Mapping
            </h1>
            <p className="text-white/80 text-lg md:text-xl mb-8">
              Generate high-density 3D point clouds from aerial photogrammetry and LiDAR sensors. Millions of precisely positioned data points delivering BIM-ready models, heritage records, and detailed terrain surfaces.
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

              {/* What is Drone Point Cloud Mapping? */}
              <div>
                <h2 id="what-is-point-cloud-mapping" className="text-2xl md:text-3xl font-bold text-teal mb-4 scroll-mt-32">
                  What Is <span className="text-gold">Drone Point Cloud Mapping</span>?
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed mb-4">
                  A point cloud is a collection of millions of individual 3D data points, each with precise X, Y, and Z coordinates, that together form a detailed digital representation of a physical environment. Drone point cloud mapping uses UAVs equipped with cameras or <Link href="/services/drone-lidar-mapping" className="text-gold hover:underline">LiDAR sensors</Link> to capture the data needed to generate these dense 3D datasets from above.
                </p>
                <p className="text-text-secondary text-lg leading-relaxed">
                  At Hire Drone Pilot, we produce point clouds through two primary methods: <Link href="/services/drone-photogrammetry-survey" className="text-gold hover:underline">photogrammetry</Link> (using overlapping aerial photographs processed through specialised software) and LiDAR (using laser scanning to directly measure distances). The resulting point clouds can contain hundreds of millions of points, providing an extraordinarily detailed 3D record of <Link href="/services/drone-measured-building-survey" className="text-gold hover:underline">buildings</Link>, <Link href="/services/drone-topographical-survey" className="text-gold hover:underline">terrain</Link>, vegetation, and infrastructure.
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
                        Millions of Data Points,
                        <span className="text-gold block relative inline-block">
                          One Precise 3D Model
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
                          'Dense classified point clouds',
                          'Textured 3D mesh models',
                          'BIM-ready deliverables',
                          'Cross-sections & elevation data',
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

                    <div>
                      <h3 className="text-gold font-bold text-sm uppercase tracking-wider mb-3">
                        Why Use HireDronePilot
                      </h3>
                      <ul className="space-y-2.5">
                        {[
                          'CAA certified & fully insured',
                          'Photogrammetry & LiDAR capability',
                          'In-house point cloud processing',
                          'Nationwide UK coverage',
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
                        <span>Trusted by architects, BIM managers, heritage professionals & engineers across the UK.</span>
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
                        Request Point Cloud Quote
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

              {/* How Much Does Point Cloud Mapping Cost? */}
              <div>
                <h2 id="point-cloud-cost" className="text-2xl md:text-3xl font-bold text-teal mb-4 scroll-mt-32">
                  How Much Does <span className="text-gold">Point Cloud Mapping</span> Cost?
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed mb-6">
                  Point cloud mapping pricing depends on the site area, required density, capture method, and deliverable formats. Here is a guide to assist with budgeting:
                </p>

                {/* Pricing Table */}
                <div className="rounded-xl overflow-hidden border border-border mb-6">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-teal">
                        <th className="text-left text-white font-semibold py-3 px-4">Project Scope</th>
                        <th className="text-left text-white font-semibold py-3 px-4">Guide Price</th>
                        <th className="text-left text-white font-semibold py-3 px-4 hidden md:table-cell">Typical Projects</th>
                        <th className="text-left text-white font-semibold py-3 px-4 hidden lg:table-cell">Deliverables</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-white">
                        <td className="py-3 px-4 text-text-primary font-medium">Small Site<span className="block text-sm text-text-secondary font-normal">Single building or plot</span></td>
                        <td className="py-3 px-4 text-gold font-bold">£500+</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden md:table-cell">Individual buildings, small sites</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden lg:table-cell">Point cloud, basic 3D model</td>
                      </tr>
                      <tr className="bg-background-alt">
                        <td className="py-3 px-4 text-text-primary font-medium">Medium Site<span className="block text-sm text-text-secondary font-normal">1-5 hectares</span></td>
                        <td className="py-3 px-4 text-gold font-bold">£900+</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden md:table-cell">Development sites, heritage complexes</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden lg:table-cell">Classified point cloud, mesh model</td>
                      </tr>
                      <tr className="bg-white">
                        <td className="py-3 px-4 text-text-primary font-medium">Large/Complex Site<span className="block text-sm text-text-secondary font-normal">5+ hectares or complex geometry</span></td>
                        <td className="py-3 px-4 text-gold font-bold">£1,500+</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden md:table-cell">Infrastructure, industrial facilities</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden lg:table-cell">Full point cloud package</td>
                      </tr>
                      <tr className="bg-background-alt">
                        <td className="py-3 px-4 text-text-primary font-medium">Heritage Building<span className="block text-sm text-text-secondary font-normal">Detailed recording</span></td>
                        <td className="py-3 px-4 text-gold font-bold">POA</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden md:table-cell">Listed buildings, churches, monuments</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden lg:table-cell">Heritage-grade recording</td>
                      </tr>
                      <tr className="bg-teal/10">
                        <td className="py-3 px-4 text-teal font-bold">LiDAR Upgrade</td>
                        <td className="py-3 px-4 text-teal font-bold">+50%</td>
                        <td className="py-3 px-4 text-teal text-sm font-medium hidden md:table-cell">Add to any project above</td>
                        <td className="py-3 px-4 text-teal text-sm font-medium hidden lg:table-cell">Higher density, vegetation penetration</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-text-secondary text-sm mb-6 italic">
                  *Guide prices include standard deliverables. Final quotation depends on project complexity, required density, and output formats.
                </p>

                {/* What affects your quote */}
                <h3 className="font-bold text-teal mb-3">Factors Influencing Your Quote</h3>
                <ul className="grid grid-cols-2 gap-2 mb-6">
                  {['Site area & geometric complexity', 'Photogrammetry vs LiDAR method', 'Required point density', 'Output format & BIM requirements'].map((factor, index) => (
                    <li key={index} className="flex items-center gap-2 text-text-secondary">
                      <svg className="w-4 h-4 text-gold flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm">{factor}</span>
                    </li>
                  ))}
                </ul>

                <p className="text-text-secondary leading-relaxed mb-6">
                  Compared to terrestrial laser scanning which requires multiple station setups and extensive site access, drone point cloud mapping typically saves <span className="text-gold font-semibold">30-50%</span> on costs while capturing data from angles that ground-based scanners cannot reach. Send us your project details and we will provide a tailored quotation within 24 hours.
                </p>

                {/* CTA Banner */}
                <div className="bg-teal rounded-xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-center sm:text-left">
                    <p className="text-white font-semibold">Ready to receive a quote for point cloud mapping?</p>
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

              {/* Photogrammetry vs LiDAR Point Clouds */}
              <div>
                <h2 id="photogrammetry-vs-lidar" className="text-2xl md:text-3xl font-bold text-teal mb-4 scroll-mt-32">
                  <span className="text-gold">Photogrammetry vs LiDAR</span> Point Clouds
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed mb-4">
                  Photogrammetry generates point clouds by analysing overlapping photographs from multiple angles, producing coloured (RGB) point clouds ideal for open terrain and buildings. LiDAR fires laser pulses to calculate distances directly, producing extremely dense point clouds at hundreds of thousands of points per second. Crucially, LiDAR can penetrate vegetation canopy, making it essential for mapping ground surfaces beneath tree cover—something photogrammetry cannot achieve.
                </p>
                {/* Comparison Cards */}
                <div className="mt-8">
                  <h3 className="text-center font-bold text-teal text-xl mb-6">Which Method Suits Your Project?</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {/* Photogrammetry Card */}
                    <div className="relative bg-teal rounded-2xl p-6 overflow-hidden group hover:shadow-xl transition-shadow duration-300">
                      <div className="relative z-10">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-12 h-12 bg-gold/20 rounded-xl flex items-center justify-center">
                            <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                          </div>
                          <div>
                            <h4 className="text-white font-bold text-lg">Photogrammetry</h4>
                            <p className="text-gold text-sm font-medium">RGB colour, lower cost</p>
                          </div>
                        </div>
                        <div className="space-y-3">
                          {[
                            { Icon: PoundSterling, text: 'More affordable option' },
                            { Icon: Box, text: 'Full colour RGB point clouds' },
                            { Icon: Building2, text: 'Excellent for buildings & terrain' },
                            { Icon: Cpu, text: 'Textured 3D mesh models' },
                          ].map((item, i) => (
                            <div key={i} className="flex items-center gap-3 bg-white/10 rounded-lg px-4 py-2.5">
                              <item.Icon className="w-5 h-5 text-gold flex-shrink-0" strokeWidth={1.5} />
                              <span className="text-white/90 font-medium">{item.text}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* LiDAR Card */}
                    <div className="relative bg-teal rounded-2xl p-6 overflow-hidden group hover:shadow-xl transition-shadow duration-300">
                      <div className="relative z-10">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-12 h-12 bg-gold/20 rounded-xl flex items-center justify-center">
                            <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                          </div>
                          <div>
                            <h4 className="text-white font-bold text-lg">LiDAR</h4>
                            <p className="text-gold text-sm font-medium">Higher density, vegetation penetration</p>
                          </div>
                        </div>
                        <div className="space-y-3">
                          {[
                            { Icon: Mountain, text: 'Penetrates tree canopy' },
                            { Icon: Box, text: 'Ultra-high point density' },
                            { Icon: Clock, text: 'Works in low light conditions' },
                            { Icon: ShieldCheck, text: 'Ground classification built-in' },
                          ].map((item, i) => (
                            <div key={i} className="flex items-center gap-3 bg-white/10 rounded-lg px-4 py-2.5">
                              <item.Icon className="w-5 h-5 text-gold flex-shrink-0" strokeWidth={1.5} />
                              <span className="text-white/90 font-medium">{item.text}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 text-center">
                    <p className="text-text-secondary text-sm mb-2">Not sure which method suits your project?</p>
                    <QuoteButton className="text-gold font-semibold hover:underline inline-flex items-center gap-1">
                      Get expert advice
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </QuoteButton>
                  </div>
                </div>
              </div>

              {/* What Point Density Can Be Achieved? */}
              <div>
                <h2 id="point-density" className="text-2xl md:text-3xl font-bold text-teal mb-4 scroll-mt-32">
                  What Point Density Can <span className="text-gold">Drone Point Cloud Mapping</span> Achieve?
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed mb-4">
                  Photogrammetric point clouds from our drone surveys typically achieve densities of 100-500 points per square metre, depending on flight altitude and camera resolution. LiDAR point clouds achieve even higher densities, typically 100-1,000+ points per square metre with multiple returns per pulse. This multi-return capability is what enables ground surface extraction beneath vegetation. Positional accuracy of 1-3cm is routinely achieved with RTK GPS corrections and ground control points, ensuring the point cloud aligns precisely with real-world coordinates.
                </p>
              </div>

              {/* Where is Point Cloud Mapping Used? */}
              <div>
                <h2 id="point-cloud-applications" className="text-2xl md:text-3xl font-bold text-teal mb-4 scroll-mt-32">
                  Where Is <span className="text-gold">Point Cloud Mapping</span> Used?
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed mb-6">
                  Point cloud data serves a wide range of industries where precise 3D spatial information is essential. Here are the primary applications where our clients derive the greatest value:
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-background-alt rounded-xl p-6">
                    <Building2 className="w-8 h-8 text-gold mb-3" strokeWidth={1.5} />
                    <h3 className="font-bold text-teal mb-2">BIM & Construction</h3>
                    <p className="text-text-secondary text-sm"><Link href="/services/drone-as-built-survey" className="text-gold hover:underline">As-built</Link> point clouds imported into Revit, ArchiCAD, or other BIM platforms for clash detection, progress tracking, and digital twin creation.</p>
                  </div>
                  <div className="bg-background-alt rounded-xl p-6">
                    <Landmark className="w-8 h-8 text-gold mb-3" strokeWidth={1.5} />
                    <h3 className="font-bold text-teal mb-2">Heritage Recording</h3>
                    <p className="text-text-secondary text-sm">Detailed 3D records of listed buildings, monuments, and archaeological sites for conservation, restoration planning, and Historic England submissions.</p>
                  </div>
                  <div className="bg-background-alt rounded-xl p-6">
                    <Mountain className="w-8 h-8 text-gold mb-3" strokeWidth={1.5} />
                    <h3 className="font-bold text-teal mb-2">Terrain & Landscape</h3>
                    <p className="text-text-secondary text-sm">Ground surface extraction beneath vegetation for forestry management, flood modelling, and landscape architecture design work.</p>
                  </div>
                  <div className="bg-background-alt rounded-xl p-6">
                    <Cpu className="w-8 h-8 text-gold mb-3" strokeWidth={1.5} />
                    <h3 className="font-bold text-teal mb-2">Infrastructure Assessment</h3>
                    <p className="text-text-secondary text-sm">Detailed 3D records of bridges, pylons, pipelines, and utilities for condition assessment, design verification, and asset management.</p>
                  </div>
                  <div className="bg-background-alt rounded-xl p-6">
                    <Box className="w-8 h-8 text-gold mb-3" strokeWidth={1.5} />
                    <h3 className="font-bold text-teal mb-2">Volumetric Analysis</h3>
                    <p className="text-text-secondary text-sm">Precise stockpile measurements, cut-and-fill calculations, and earthworks quantification from dense point cloud surfaces.</p>
                  </div>
                  <div className="bg-background-alt rounded-xl p-6">
                    <ShieldCheck className="w-8 h-8 text-gold mb-3" strokeWidth={1.5} />
                    <h3 className="font-bold text-teal mb-2">Deformation Monitoring</h3>
                    <p className="text-text-secondary text-sm">Repeat surveys comparing point clouds over time to detect structural movement, subsidence, or terrain changes with millimetre precision.</p>
                  </div>
                </div>

                {/* CTA after applications */}
                <div className="mt-8 text-center">
                  <p className="text-text-secondary mb-4">Need point cloud data for your project?</p>
                  <QuoteButton className="btn btn-primary btn-shimmer">
                    Discuss Your Requirements
                  </QuoteButton>
                </div>
              </div>

              {/* What Deliverables Do You Receive? */}
              <div>
                <h2 id="point-cloud-deliverables" className="text-2xl md:text-3xl font-bold text-teal mb-4 scroll-mt-32">
                  What Deliverables Do You Receive From <span className="text-gold">Point Cloud Mapping</span>?
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed mb-6">
                  We tailor outputs to your workflow requirements, but our standard point cloud mapping packages include:
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-4 bg-background-alt rounded-xl p-4">
                    <div className="w-10 h-10 bg-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Box className="w-5 h-5 text-gold" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h4 className="font-bold text-teal">Classified Point Cloud</h4>
                      <p className="text-text-secondary text-sm">Dense point cloud with automatic classification (ground, vegetation, buildings, noise) in LAS/LAZ format for use in any compatible software.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4 bg-background-alt rounded-xl p-4">
                    <div className="w-10 h-10 bg-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-teal">Textured 3D Mesh Model</h4>
                      <p className="text-text-secondary text-sm">Photorealistic 3D model generated from the point cloud, suitable for visualisation, stakeholder presentations, and virtual walkthroughs.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4 bg-background-alt rounded-xl p-4">
                    <div className="w-10 h-10 bg-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-teal">Digital Surface & Terrain Models</h4>
                      <p className="text-text-secondary text-sm">DSM and DTM rasters derived from the point cloud for contour generation, cross-sections, and integration with GIS platforms.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4 bg-background-alt rounded-xl p-4">
                    <div className="w-10 h-10 bg-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-teal">BIM-Ready Exports</h4>
                      <p className="text-text-secondary text-sm">Point clouds exported in E57 or RCP format for direct import into Revit, Navisworks, or other BIM authoring software.</p>
                    </div>
                  </li>
                </ul>

                {/* CTA after deliverables */}
                <div className="mt-6 p-4 bg-gold/10 border border-gold/20 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4">
                  <p className="text-teal font-semibold text-center sm:text-left">Need specific output formats?</p>
                  <QuoteButton className="btn btn-primary btn-shimmer whitespace-nowrap">Discuss Requirements</QuoteButton>
                </div>
              </div>

              {/* How Long Does Processing Take? */}
              <div>
                <h2 id="processing-timeline" className="text-2xl md:text-3xl font-bold text-teal mb-4 scroll-mt-32">
                  How Long Does <span className="text-gold">Point Cloud Processing</span> Take?
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed mb-4">
                  On-site data capture is rapid—a typical building or small site can be flown in 30-60 minutes. Medium sites of several hectares require 2-4 hours including ground control establishment. The processing phase takes considerably longer due to the computational intensity of generating dense point clouds.
                </p>
                <p className="text-text-secondary text-lg leading-relaxed mb-6">
                  Photogrammetric point cloud generation involves aligning hundreds or thousands of images, computing depth maps, and building the dense cloud. This typically takes 3-5 days for standard projects. LiDAR datasets require less processing time but still need classification, filtering, and quality checks. Complex projects requiring BIM integration may take 7-10 working days.
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
                        <td className="py-3 px-4 text-gold font-bold">1-3 days</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden md:table-cell">Flight planning, GCP coordination, airspace checks</td>
                      </tr>
                      <tr className="bg-background-alt">
                        <td className="py-3 px-4 text-text-primary font-medium">On-Site Data Capture</td>
                        <td className="py-3 px-4 text-gold font-bold">30 mins - 4 hrs</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden md:table-cell">GCP setup, drone flights, data validation</td>
                      </tr>
                      <tr className="bg-white">
                        <td className="py-3 px-4 text-text-primary font-medium">Point Cloud Generation</td>
                        <td className="py-3 px-4 text-gold font-bold">2-5 days</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden md:table-cell">Image alignment, dense cloud computation, classification</td>
                      </tr>
                      <tr className="bg-background-alt">
                        <td className="py-3 px-4 text-text-primary font-medium">Deliverable Production</td>
                        <td className="py-3 px-4 text-gold font-bold">1-3 days</td>
                        <td className="py-3 px-4 text-text-secondary text-sm hidden md:table-cell">Mesh generation, BIM export, quality report</td>
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
                  How to Choose a <span className="text-gold">Point Cloud Mapping</span> Provider
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed mb-4">
                  Point cloud mapping demands specialist skills in both data capture and processing. When evaluating providers, we recommend checking these essential criteria:
                </p>
                <ul className="space-y-3 mb-6">
                  {[
                    { bold: 'CAA certification', text: ' – Valid GVC permissions for commercial drone operations' },
                    { bold: 'Processing expertise', text: ' – In-house photogrammetry and point cloud processing capability, not outsourced' },
                    { bold: 'Software proficiency', text: ' – Experience with industry-standard tools such as Pix4D, Agisoft, CloudCompare, and RealityCapture' },
                    { bold: 'BIM knowledge', text: ' – Understanding of BIM workflows and formats if integration is required' },
                    { bold: 'Quality assurance', text: ' – Documented QA processes including accuracy verification against control points' },
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
                  <p className="text-white font-semibold mb-3">Ready to work with a specialist point cloud provider?</p>
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

              {/* Integrating Point Clouds with BIM */}
              <div>
                <h2 id="bim-integration" className="text-2xl md:text-3xl font-bold text-teal mb-4 scroll-mt-32">
                  Integrating <span className="text-gold">Point Clouds</span> with BIM
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed mb-6">
                  One of the most valuable applications of drone point cloud data is integration with BIM platforms. Importing a georeferenced point cloud into Revit, ArchiCAD, or Navisworks provides architects and engineers with an accurate 3D reference of existing conditions. We deliver in E57 and RCP formats optimised for BIM software. For as-built verification, overlaying the point cloud against design models reveals discrepancies immediately, enabling rapid identification of construction errors before they become costly to rectify.
                </p>

                {/* Cost Comparison Visual */}
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-background-alt border border-border rounded-xl p-6">
                    <h4 className="font-bold text-teal mb-4">Terrestrial Laser Scanning</h4>
                    <ul className="space-y-2 text-text-secondary text-sm">
                      <li className="flex justify-between">
                        <span>Scanner hire & crew (2-3 days)</span>
                        <span className="font-semibold">£2,000-£5,000</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Registration & processing</span>
                        <span className="font-semibold">£500-£1,500</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Limited aerial coverage</span>
                        <span className="font-semibold text-red-500">Additional cost</span>
                      </li>
                      <li className="flex justify-between border-t border-border pt-2 mt-2">
                        <span className="font-bold text-teal">Typical Total</span>
                        <span className="font-bold text-red-500">£2,500-£6,500</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-teal/10 border border-teal/20 rounded-xl p-6">
                    <h4 className="font-bold text-teal mb-4">Drone Point Cloud Mapping</h4>
                    <ul className="space-y-2 text-text-secondary text-sm">
                      <li className="flex justify-between">
                        <span>Full drone survey & processing</span>
                        <span className="font-semibold">£500-£1,500</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Aerial coverage included</span>
                        <span className="font-semibold text-green-600">Included</span>
                      </li>
                      <li className="flex justify-between">
                        <span>BIM export (E57/RCP)</span>
                        <span className="font-semibold text-green-600">Included</span>
                      </li>
                      <li className="flex justify-between border-t border-teal/20 pt-2 mt-2">
                        <span className="font-bold text-teal">Typical Total</span>
                        <span className="font-bold text-gold">£500-£1,500</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Final CTA */}
                <div className="bg-gradient-to-r from-teal to-teal-dark rounded-xl p-6 text-center">
                  <h3 className="text-white font-bold text-xl mb-2">Ready for 3D Point Cloud Data?</h3>
                  <p className="text-white/80 text-sm mb-4">Expert guidance • Tailored pricing • Avg Response within 5 Mins</p>
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
                  With deep expertise in photogrammetry and 3D data processing, Peter personally manages every point cloud project to ensure the data meets your accuracy and format requirements.
                </p>
              </div>

              {/* Table of Contents */}
              <div className="bg-background-alt border border-border rounded-2xl p-6">
                <h3 className="text-teal font-bold text-lg mb-4">
                  Quick Guide: Point Cloud Mapping
                </h3>
                <nav className="space-y-2">
                  {[
                    { id: 'what-is-point-cloud-mapping', label: 'What Is Point Cloud Mapping?' },
                    { id: 'point-cloud-cost', label: 'How Much Does It Cost?' },
                    { id: 'photogrammetry-vs-lidar', label: 'Photogrammetry vs LiDAR' },
                    { id: 'point-density', label: 'What Point Density Can Be Achieved?' },
                    { id: 'point-cloud-applications', label: 'Where Is It Used?' },
                    { id: 'point-cloud-deliverables', label: 'What Deliverables Do You Receive?' },
                    { id: 'processing-timeline', label: 'How Long Does Processing Take?' },
                    { id: 'choose-provider', label: 'How to Choose a Provider' },
                    { id: 'bim-integration', label: 'Integrating Point Clouds with BIM' },
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
                  Project Deliverables
                </h3>
                <ul className="space-y-3">
                  {[
                    'Classified point clouds (LAS/LAZ)',
                    'Textured 3D mesh models',
                    'Digital surface & terrain models',
                    'BIM-ready exports (E57/RCP)',
                    'Cross-sections & profiles',
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
                  Discuss Your Project
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
                Comprehensive aerial surveys delivering topographic data, orthomosaics, and terrain models.
              </p>
            </Link>
            <Link
              href="/services/drone-lidar-mapping"
              className="bg-white border border-border rounded-xl p-6 hover:border-gold hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-teal font-bold text-lg mb-2">LiDAR Mapping</h3>
              <p className="text-text-secondary text-sm">
                Laser scanning from drone platforms for vegetation penetration and ultra-dense 3D data.
              </p>
            </Link>
            <Link
              href="/services/drone-construction-monitoring"
              className="bg-white border border-border rounded-xl p-6 hover:border-gold hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-teal font-bold text-lg mb-2">Construction Monitoring</h3>
              <p className="text-text-secondary text-sm">
                Regular progress surveys with point cloud comparison against BIM design models.
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
