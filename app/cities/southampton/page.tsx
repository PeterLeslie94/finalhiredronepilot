import { safeJsonLd } from '@/lib/utils/safe-json-ld';
import QuoteButton from '@/components/QuoteButton';
import Hero from '@/components/Hero';
import ServiceCard from '@/components/ServiceCard';
import Testimonials from '@/components/Testimonials';
import DiagonalDivider from '@/components/DiagonalDivider';
import EquipmentSection from '@/components/EquipmentSection';
import FAQ from '@/components/FAQ';
import QuoteForm from '@/components/QuoteForm';
import FloatingCTA from '@/components/FloatingCTA';
import { FAQSchema } from '@/components/SchemaMarkup';
import ClientLogoMarquee from '@/components/ClientLogoMarquee';
import {
  Ship,
  Building2,
  GraduationCap,
  Landmark,
  Home as HomeIcon,
  Anchor,
} from 'lucide-react';

const services = [
  {
    title: 'Drone Survey',
    description: 'Comprehensive aerial surveys delivering precise topographic data and 3D models across Southampton.',
    image: '/images/services/service-drone-survey.avif',
    href: '/services/drone-survey',
  },
  {
    title: 'Volumetric Survey',
    description: 'Accurate stockpile measurements and volumetric calculations for Southampton port and construction sites.',
    image: '/images/services/service-volumetric-survey.avif',
    href: '/services/drone-volumetric-survey',
  },
  {
    title: 'LiDAR Mapping',
    description: 'Precision LiDAR scanning for detailed terrain models across Southampton and Hampshire.',
    image: '/images/services/service-lidar-mapping.avif',
    href: '/services/drone-lidar-mapping',
  },
  {
    title: 'Thermal Imaging',
    description: 'Thermal drone inspections for Southampton building diagnostics and energy audits.',
    image: '/images/services/service-thermal-imaging.avif',
    href: '/services/thermal-imaging',
  },
  {
    title: 'Topographic Survey',
    description: 'Detailed topographic surveys for planning, design and construction projects in Southampton.',
    image: '/images/services/service-topographic-survey.avif',
    href: '/services/topographic-survey',
  },
  {
    title: 'Building Inspection',
    description: 'Safe, efficient building and roof inspections across Southampton and surrounding areas.',
    image: '/images/services/service-building-inspection.avif',
    href: '/services/building-inspection',
  },
];

const processSteps = [
  {
    number: '01',
    category: 'Getting Started',
    title: 'Consultation',
    description: 'We discuss your Southampton project requirements and objectives to determine the best survey approach. Our experts will recommend the optimal drone technology and data outputs for your specific needs.',
    image: '/images/process/process-consultation.avif',
  },
  {
    number: '02',
    category: 'Preparation',
    title: 'Planning',
    description: 'Our team plans the flight path, obtains necessary airspace permissions, and prepares all required equipment. We handle all CAA regulations and site-specific risk assessments for Southampton operations.',
    image: '/images/process/process-planning.avif',
  },
  {
    number: '03',
    category: 'On Site',
    title: 'Data Capture',
    description: 'Our CAA-authorised independent drone pilots capture high-quality aerial data across Southampton using professional drone equipment. Survey-grade accuracy is achieved through RTK GPS and ground control points.',
    image: '/images/process/process-data-capture.avif',
  },
  {
    number: '04',
    category: 'Behind the Scenes',
    title: 'Processing',
    description: 'Raw data is processed using industry-leading software to create accurate deliverables. Photogrammetry, LiDAR processing, and quality checks ensure precision results.',
    image: '/images/process/process-processing.avif',
  },
  {
    number: '05',
    category: 'Final Results',
    title: 'Delivery',
    description: 'You receive comprehensive reports, maps, and models in your preferred formats. We provide full support to help you integrate the data into your existing workflows.',
    image: '/images/process/process-delivery.avif',
  },
];

const industries = [
  { name: 'Port & Logistics', Icon: Ship, description: 'Port of Southampton, container terminals, logistics hubs' },
  { name: 'Cruise Industry', Icon: Anchor, description: 'Cruise terminals, ship inspections, maritime facilities' },
  { name: 'University & Research', Icon: GraduationCap, description: 'University of Southampton, research facilities, campus surveys' },
  { name: 'Heritage', Icon: Landmark, description: 'Historic walls, medieval buildings, conservation areas' },
  { name: 'Real Estate', Icon: HomeIcon, description: 'Property marketing, roof surveys, boundary mapping' },
  { name: 'Commercial Property', Icon: Building2, description: 'Office developments, Westquay, enterprise areas' },
];

const comparisonData = [
  { feature: 'Survey Time', drone: '1-2 days', traditional: '1-2 weeks' },
  { feature: 'Data Points', drone: 'Millions per hour', traditional: 'Hundreds per day' },
  { feature: 'Accuracy', drone: '±2-5cm', traditional: '±5-10cm' },
  { feature: 'Safety Risk', drone: 'Minimal', traditional: 'High (heights, traffic)' },
  { feature: 'Site Disruption', drone: 'None', traditional: 'Significant' },
  { feature: 'Cost', drone: '40-60% less', traditional: 'Standard rates' },
];

const accreditations = [
  {
    name: 'Civil Aviation Authority (CAA)',
    description: 'Approved for commercial drone operations across Southampton airspace.',
  },
  {
    name: 'Fully Insured',
    description: 'Comprehensive public liability insurance providing complete peace of mind.',
  },
  {
    name: 'Professional Indemnity',
    description: 'Full professional indemnity coverage protecting your project investments.',
  },
];

const southamptonAreas = [
  {
    region: 'Central Southampton',
    boroughs: ['City Centre', 'Ocean Village', 'Westquay', 'Bedford Place', 'Above Bar'],
  },
  {
    region: 'North Southampton',
    boroughs: ['Bassett', 'Chilworth', 'Swaythling', 'Highfield', 'Portswood'],
  },
  {
    region: 'South Southampton',
    boroughs: ['Woolston', 'Itchen', 'Sholing', 'Weston', 'Netley'],
  },
  {
    region: 'East Southampton',
    boroughs: ['Bitterne', 'Thornhill', 'Harefield', 'Townhill Park', 'West End'],
  },
  {
    region: 'West Southampton',
    boroughs: ['Shirley', 'Millbrook', 'Redbridge', 'Totton', 'Marchwood'],
  },
];

const faqs = [
  {
    question: 'Can you fly drones near Southampton Airport?',
    answer: 'Yes, we hold the necessary CAA permissions and can coordinate flights near Southampton Airport. We handle all airspace permissions and liaise with air traffic control where required. Our team is experienced in operating within controlled airspace zones around airports.',
  },
  {
    question: 'How much does a drone survey cost in Southampton?',
    answer: 'Southampton drone survey costs vary based on site size, complexity, and deliverables needed. As a guide, small site surveys start from around £500, while larger commercial or port projects are priced per hectare. Contact us for a free, no-obligation quote tailored to your specific Southampton project.',
  },
  {
    question: 'How quickly can you respond to Southampton projects?',
    answer: 'We can typically mobilise for Southampton projects within 24-48 hours for urgent requirements. Our team covers the entire Hampshire region and has extensive experience working across Southampton and the Solent area. For planned projects, we recommend 1-2 weeks notice.',
  },
  {
    question: 'Do you work with port and maritime clients?',
    answer: 'Yes, we have extensive experience working with port and maritime clients in Southampton, including facilities at the Port of Southampton, cruise terminals, and waterfront developments. We understand the security and operational requirements for these busy commercial environments.',
  },
  {
    question: 'What Southampton projects have you completed?',
    answer: 'We\'ve completed numerous projects across Southampton including port infrastructure surveys, building inspections at Ocean Village, topographic surveys for residential developments, and campus surveys for the University of Southampton. Our experience covers everything from heritage sites to modern commercial developments.',
  },
  {
    question: 'How accurate are your Southampton drone surveys?',
    answer: 'Our Southampton drone surveys achieve accuracies of ±2-5cm when using ground control points (GCPs). For projects requiring higher precision, we can achieve sub-centimeter accuracy using RTK-enabled drones and post-processing techniques. All surveys meet RICS and industry standards.',
  },
  {
    question: 'What areas of Southampton do you cover?',
    answer: 'We provide drone survey services across all of Southampton and the surrounding Hampshire area including Eastleigh, Winchester, Romsey, and the New Forest. From the city centre to the port and beyond, no location is too challenging for our experienced team.',
  },
  {
    question: 'What deliverables do you provide for Southampton projects?',
    answer: 'We provide orthomosaic maps, digital elevation models (DEMs), 3D point clouds, textured 3D models, contour maps, volumetric calculations, and detailed survey reports. All deliverables are provided in industry-standard formats compatible with CAD, GIS, and BIM software.',
  },
];

export default function SouthamptonPage() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        subtitle="Southampton's Trusted Drone Survey Specialists"
        title={<>Professional <span className="text-gold">Drone Survey</span> Southampton</>}
        description="Expert drone survey services across Southampton and Hampshire. CAA-approved drone operators delivering precision aerial data for port, maritime, and construction projects throughout the region."
        primaryCta={{ text: 'Compare Quotes', href: '#quote' }}
        secondaryCta={{ text: 'Our Services', href: '/services' }}
        backgroundImage="/images/hero-desktop.avif"
        mobileBackgroundImage="/images/hero-mobile.avif"
      />

      {/* Differentiator Section - 2 Column */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column - Expertise Message */}
            <div>
              <p className="text-gold font-semibold uppercase tracking-wider mb-3 text-sm">
                Southampton Drone Survey Experts
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-teal mb-6 leading-tight">
                Professional Kit. <span className="text-wipe-red">Maritime Expertise.</span> <span className="underline-sweep">Port Operations Experience.</span>
              </h2>
              <p className="text-text-secondary text-lg mb-6 leading-relaxed">
                Southampton is one of the UK&apos;s busiest ports and a major cruise hub, with unique
                survey requirements for maritime facilities and waterfront developments.
                You need drone operators who understand these demands.
              </p>
              <p className="text-text-primary text-lg mb-8 leading-relaxed font-medium">
                We&apos;re different. Our team combines <span className="text-teal">CAA-certified drone pilots</span> with
                <span className="text-teal"> maritime sector experience</span> and enterprise-grade equipment.
                Every Southampton project we deliver is fully compliant and professional.
              </p>

              {/* Key differentiators */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-teal/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-teal">Port Sector Experience</p>
                    <p className="text-text-secondary text-sm">Container terminals & cruise facilities</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-teal/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-teal">Enterprise Equipment</p>
                    <p className="text-text-secondary text-sm">Matrice 300/350, LiDAR, multispectral</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-teal/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-teal">Rapid Southampton Response</p>
                    <p className="text-text-secondary text-sm">24-48 hour mobilisation available</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-teal/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-teal">Survey-Grade GPS</p>
                    <p className="text-text-secondary text-sm">RTK/PPK positioning for ±2cm accuracy</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Lead Gen Form */}
            <QuoteForm />
          </div>
        </div>
      </section>

      {/* Client Logos - Compact Trust Bar */}
      <ClientLogoMarquee />

      {/* About Us Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column - Image */}
            <div className="relative flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden shadow-2xl border-4 border-gold/30">
                  <img
                    src="/images/about-surveyor.avif"
                    alt="Hire Drone Pilot drone pilot operating professional survey drone in Southampton"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Overlay badge */}
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gold rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-teal-dark" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-teal font-bold text-lg">150+</p>
                      <p className="text-text-secondary text-sm">Southampton Projects</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Content */}
            <div>
              <p className="text-gold font-semibold uppercase tracking-wider mb-3 text-sm">
                Southampton Coverage
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-teal mb-6 leading-tight">
                Drone Survey <span className="text-wipe-red">Southampton</span> Specialists
              </h2>
              <div className="space-y-4 text-text-secondary text-lg mb-8">
                <p>
                  Hire Drone Pilot provides professional aerial survey solutions across
                  Southampton and Hampshire. From busy port facilities to university campuses,
                  we have the expertise and permissions to operate anywhere.
                </p>
                <p>
                  Our team of CAA-certified drone pilots and qualified surveyors have completed
                  hundreds of projects across the region, from Ocean Village waterfront to
                  major developments at the Port of Southampton.
                </p>
              </div>

              {/* Stats Row */}
              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <p className="text-3xl font-bold text-gold mb-1">±2cm</p>
                  <p className="text-text-secondary text-sm">Survey Accuracy</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-gold mb-1">Hants</p>
                  <p className="text-text-secondary text-sm">Region Covered</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-gold mb-1">24hr</p>
                  <p className="text-text-secondary text-sm">Response Time</p>
                </div>
              </div>


              <a
                href="/about"
                className="inline-flex items-center gap-2 btn btn-primary"
              >
                Learn More About Us
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-gold font-semibold uppercase tracking-wider mb-3">
              Southampton Drone Services
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-teal mb-4">
              Our Hire Drone Pilot in Southampton
            </h3>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              Comprehensive aerial survey solutions for Southampton projects,
              delivered with precision and professionalism.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <ServiceCard key={service.href} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Press/Media Recognition Section */}
      <section className="py-16 bg-background-alt">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-gold font-semibold uppercase tracking-wider mb-3 text-sm">
              As Featured In
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-teal mb-6">
              Recognised by Media & Academia
            </h2>
            <p className="text-text-secondary text-lg mb-10">
              Our expertise in professional drone surveying has been featured across national news and industry publications. Our work has been cited in research by Harvard University and the Scottish Government.
            </p>
          </div>

          {/* Major News Row */}
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 mb-8">
            {['BBC News', 'Sky News', 'ITV News'].map((outlet) => (
              <div
                key={outlet}
                className="text-teal font-bold text-lg md:text-xl opacity-70 hover:opacity-100 transition-opacity"
              >
                {outlet}
              </div>
            ))}
          </div>

          {/* Industry/Tech/Gov Row */}
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
            {['sUAS News', 'IoT For All', 'DroneGuru', 'InvestorPlace', 'gov.scot'].map((outlet) => (
              <div
                key={outlet}
                className="text-teal/60 font-semibold text-sm md:text-base hover:text-teal transition-colors"
              >
                {outlet}
              </div>
            ))}
          </div>

          {/* Academic Citations */}
          <div className="mt-10 pt-8 border-t border-border">
            <p className="text-center text-text-secondary text-sm">
              <span className="font-semibold text-teal">Cited in academic research:</span>{' '}
              Harvard University • Scottish Government
            </p>
          </div>
        </div>
      </section>

      {/* Equipment Section - Drone Fleet & Sensors */}
      <EquipmentSection />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Process Section */}
      <section className="section bg-teal relative overflow-hidden">
        <div className="container relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-gold font-semibold uppercase tracking-wider mb-3">
              How It Works
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Southampton Drone Survey Process
            </h3>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              From initial consultation to final delivery, our streamlined process
              ensures efficient and accurate results for your Southampton project.
            </p>
          </div>

          {/* Stacked Horizontal Cards */}
          <div className="flex flex-col gap-6 max-w-5xl mx-auto">
            {processSteps.map((step, index) => {
              const isEven = index % 2 === 0;
              const delayClass = [
                'animation-delay-100',
                'animation-delay-200',
                'animation-delay-300',
                'animation-delay-400',
                'animation-delay-500',
              ][index];

              return (
                <div
                  key={step.number}
                  className={`group relative animate-fade-in-up ${delayClass}`}
                >
                  {/* Desktop: Horizontal card with alternating image sides */}
                  <div className={`hidden md:flex bg-teal-dark border border-gold/20 rounded-2xl overflow-hidden hover:border-gold/50 transition-all duration-300 hover:shadow-xl hover:shadow-gold/10 ${isEven ? 'flex-row' : 'flex-row-reverse'}`}>
                    {/* Image side (40%) */}
                    <div className="relative w-[40%] min-h-[220px] overflow-hidden">
                      <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                        style={{ backgroundImage: `url(${step.image})` }}
                      />
                      {/* Soft gradient blend into content */}
                      <div
                        className="absolute inset-0"
                        style={{
                          background: isEven
                            ? 'linear-gradient(to right, transparent 0%, transparent 40%, rgba(8,56,68,0.6) 70%, rgba(8,56,68,1) 100%)'
                            : 'linear-gradient(to left, transparent 0%, transparent 40%, rgba(8,56,68,0.6) 70%, rgba(8,56,68,1) 100%)'
                        }}
                      />
                    </div>

                    {/* Content side (60%) */}
                    <div className="w-[60%] p-8 flex flex-col justify-center">
                      <span className="text-gold text-sm font-semibold uppercase tracking-wider mb-2">
                        Step {step.number} · {step.category}
                      </span>
                      <h4 className="text-white font-bold text-2xl mb-3">{step.title}</h4>
                      <p className="text-white/70 leading-relaxed">{step.description}</p>
                    </div>
                  </div>

                  {/* Mobile: Vertical card */}
                  <div className="md:hidden bg-teal-dark border border-gold/20 rounded-2xl overflow-hidden">
                    {/* Image top */}
                    <div className="relative h-40 overflow-hidden">
                      <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                        style={{ backgroundImage: `url(${step.image})` }}
                      />
                      <div
                        className="absolute inset-0"
                        style={{
                          background: 'linear-gradient(to bottom, transparent 0%, transparent 30%, rgba(8,56,68,0.6) 60%, rgba(8,56,68,1) 100%)'
                        }}
                      />
                    </div>
                    {/* Content bottom */}
                    <div className="p-5">
                      <span className="text-gold text-xs font-semibold uppercase tracking-wider mb-1 block">
                        Step {step.number} · {step.category}
                      </span>
                      <h4 className="text-white font-bold text-lg mb-2">{step.title}</h4>
                      <p className="text-white/60 text-sm leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 text-center">
            <p className="text-white/60 mb-4">Ready to start your Southampton project?</p>
            <QuoteButton className="inline-flex items-center gap-2 bg-gold text-teal-dark font-semibold px-6 py-3 rounded-full hover:bg-gold/90 transition-colors btn-shimmer btn-pop-on-scroll">
              Compare Southampton Quotes
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
              </QuoteButton>
          </div>
        </div>
      </section>

      <DiagonalDivider fromColor="teal" toColor="white" />

      {/* Industries Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-gold font-semibold uppercase tracking-wider mb-3">
              Southampton Industries
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-teal mb-4">
              Drone Surveys for Southampton Sectors
            </h3>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              We deliver tailored drone survey solutions across Southampton&apos;s key industries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry) => (
              <div
                key={industry.name}
                className="bg-background-alt border border-border rounded-xl p-6 hover:border-gold hover:shadow-lg transition-all duration-300"
              >
                <div className="w-14 h-14 bg-gold/10 rounded-xl flex items-center justify-center mb-4">
                  <industry.Icon className="w-7 h-7 text-gold" strokeWidth={1.5} />
                </div>
                <h4 className="text-teal font-bold text-xl mb-2">{industry.name}</h4>
                <p className="text-text-secondary">{industry.description}</p>
              </div>
            ))}
          </div>

          {/* Mid-page CTA */}
          <div className="mt-12 text-center bg-teal rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Discuss Your Southampton Project?
            </h3>
            <p className="text-white/70 mb-6 max-w-xl mx-auto">
              Get a free, no-obligation quote for your Southampton drone survey.
              Our team responds within 5 mins on average.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <QuoteButton className="btn btn-primary btn-shimmer btn-pop-on-scroll">
                Compare Southampton Quotes
              </QuoteButton>
              <span className="text-white/50">or</span>
              <a href="tel:+441334804554" className="flex items-center gap-2 text-gold hover:text-gold-light transition-colors font-semibold">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call +44 1334 804554
              </a>
            </div>
          </div>
        </div>
      </section>

      <DiagonalDivider fromColor="white" toColor="teal-dark" />

      {/* Comparison Section */}
      <section className="section bg-teal-dark">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-gold font-semibold uppercase tracking-wider mb-3">
              Why Choose Drone Surveys
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Drone Survey vs Traditional Methods
            </h3>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              See how drone survey technology compares to conventional survey methods for Southampton projects.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white/10 rounded-2xl overflow-hidden">
              <div className="grid grid-cols-3 bg-teal text-white font-bold text-sm md:text-base">
                <div className="p-4">Feature</div>
                <div className="p-4 text-center bg-gold text-teal-dark">Drone Survey</div>
                <div className="p-4 text-center">Traditional Survey</div>
              </div>
              {comparisonData.map((row, index) => (
                <div
                  key={row.feature}
                  className={`grid grid-cols-3 text-sm md:text-base ${
                    index % 2 === 0 ? 'bg-white/5' : ''
                  }`}
                >
                  <div className="p-4 text-white font-medium">{row.feature}</div>
                  <div className="p-4 text-center text-gold font-semibold">{row.drone}</div>
                  <div className="p-4 text-center text-white/60">{row.traditional}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <DiagonalDivider fromColor="teal-dark" toColor="white" />

      {/* Southampton Coverage Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-gold font-semibold uppercase tracking-wider mb-3">
              Southampton Coverage
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-teal mb-4">
              Hire Drone Pilot Across Southampton
            </h3>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              We provide professional drone survey services across all areas of Southampton
              and the surrounding Hampshire region. No location is too challenging.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {southamptonAreas.map((area) => (
              <div
                key={area.region}
                className="bg-background-alt border border-border rounded-xl p-6 hover:border-gold hover:shadow-lg transition-all duration-300"
              >
                <h4 className="text-teal font-bold text-xl mb-4">{area.region}</h4>
                <div className="flex flex-wrap gap-2">
                  {area.boroughs.map((borough) => (
                    <span
                      key={borough}
                      className="text-xs px-3 py-1 bg-white border border-border rounded-full text-text-secondary"
                    >
                      {borough}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Key Business Districts */}
          <div className="bg-teal rounded-2xl p-8 text-center">
            <h4 className="text-white font-bold text-xl mb-4">Key Business Districts</h4>
            <div className="flex flex-wrap justify-center gap-4">
              {['Port of Southampton', 'Ocean Village', 'Westquay', 'Southampton Science Park', 'Eastleigh', 'Chandlers Ford', 'Hedge End', 'Marchwood Industrial'].map((district) => (
                <span
                  key={district}
                  className="px-4 py-2 bg-white/10 text-white rounded-full text-sm font-medium"
                >
                  {district}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <DiagonalDivider fromColor="white" toColor="teal" />

      {/* Accreditations Section - Modern Design */}
      <section className="section bg-teal relative overflow-hidden">
        <div className="container relative z-10">
          {/* Header */}
          <div className="text-center mb-16">
            <p className="text-gold font-semibold uppercase tracking-wider mb-3">
              Trusted & Certified
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Industry Accreditations
            </h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              Maintaining the highest standards of safety, quality, and compliance
              for all Southampton drone operations.
            </p>
          </div>

          {/* Accreditation Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {/* Fully Insured Card */}
            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-br from-gold to-gold/50 rounded-2xl opacity-75 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
              <div className="relative bg-teal-dark rounded-2xl p-8 h-full border-2 border-gold/30 group-hover:border-gold transition-all duration-300">
                <div className="w-16 h-16 bg-gold/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-gold/30 transition-colors duration-300">
                  <svg className="w-9 h-9 text-gold" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Fully Insured
                </h3>
                <p className="text-gold text-sm font-medium mb-4">Public Liability Cover</p>
                <p className="text-white/70 text-sm leading-relaxed">
                  Comprehensive public liability insurance providing complete
                  peace of mind for all Southampton drone operations.
                </p>
                <div className="mt-6 pt-4 border-t border-gold/20">
                  <div className="flex items-center gap-2 text-white/60 text-xs">
                    <svg className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Full Coverage Protection</span>
                  </div>
                </div>
              </div>
            </div>

            {/* CAA Card - Featured/Always Highlighted */}
            <div className="group relative md:-mt-4">
              <div className="absolute -inset-0.5 bg-gradient-to-br from-gold to-gold/50 rounded-2xl opacity-100 blur-sm" />
              <div className="relative bg-teal-dark rounded-2xl p-8 h-full border-2 border-gold">
                <div className="w-16 h-16 bg-gold/30 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-9 h-9 text-gold" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Civil Aviation Authority
                </h3>
                <p className="text-gold text-sm font-medium mb-4">CAA Approved</p>
                <p className="text-white/70 text-sm leading-relaxed">
                  Fully approved for commercial drone operations across
                  Southampton and the Hampshire region.
                </p>
                <div className="mt-6 pt-4 border-t border-gold/20">
                  <div className="flex items-center gap-2 text-white/60 text-xs">
                    <svg className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>GVC Certified Drone Pilots</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Professional Indemnity Card */}
            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-br from-gold to-gold/50 rounded-2xl opacity-75 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
              <div className="relative bg-teal-dark rounded-2xl p-8 h-full border-2 border-gold/30 group-hover:border-gold transition-all duration-300">
                <div className="w-16 h-16 bg-gold/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-gold/30 transition-colors duration-300">
                  <svg className="w-9 h-9 text-gold" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Professional Indemnity
                </h3>
                <p className="text-gold text-sm font-medium mb-4">PI Insurance</p>
                <p className="text-white/70 text-sm leading-relaxed">
                  Full professional indemnity coverage protecting your
                  Southampton project investments and deliverables.
                </p>
                <div className="mt-6 pt-4 border-t border-gold/20">
                  <div className="flex items-center gap-2 text-white/60 text-xs">
                    <svg className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Investment Protected</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Certification Logos Showcase */}
          <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
            <p className="text-center text-teal/60 text-sm uppercase tracking-wider mb-6">Our Certifications & Memberships</p>
            <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
              <img src="/images/licences/Civil_Aviation_Authority_logo.avif" alt="CAA Approved" className="h-12 md:h-14 object-contain opacity-90 hover:opacity-100 transition-opacity" />
              <img src="/images/licences/arpas-uk-drone-association-logo.avif" alt="ARPAS-UK Member" className="h-12 md:h-14 object-contain opacity-90 hover:opacity-100 transition-opacity" />
              <img src="/images/licences/gvc-licence.avif" alt="GVC Licence" className="h-12 md:h-14 object-contain opacity-90 hover:opacity-100 transition-opacity" />
              <img src="/images/licences/drone-a2-cofc.avif" alt="A2 CofC" className="h-12 md:h-14 object-contain opacity-90 hover:opacity-100 transition-opacity" />
              <img src="/images/licences/flyer-id-a1-a3.avif" alt="Flyer ID A1/A3" className="h-12 md:h-14 object-contain opacity-90 hover:opacity-100 transition-opacity" />
              <img src="/images/licences/dundee-chamber-commerce-logo.avif" alt="Dundee Chamber of Commerce" className="h-12 md:h-14 object-contain opacity-90 hover:opacity-100 transition-opacity" />
            </div>
          </div>

          {/* Bottom trust indicators */}
          <div className="mt-12 flex flex-wrap justify-center items-center gap-8 text-white/50 text-sm">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>£10M Public Liability</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>ISO 9001 Quality</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Full Risk Assessments</span>
            </div>
          </div>
        </div>
      </section>

      <DiagonalDivider fromColor="teal" toColor="teal-dark" />

      {/* FAQ Section */}
      <section className="section bg-teal-dark">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-gold font-semibold uppercase tracking-wider mb-3">
              Southampton FAQs
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h3>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              Find answers to common questions about our drone survey services in Southampton.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl p-8">
              <FAQ items={faqs} />
            </div>
          </div>
          <FAQSchema faqs={faqs} />
        </div>
      </section>

      <DiagonalDivider fromColor="teal-dark" toColor="white" />

      {/* Quote Section */}
      <section id="quote" className="section bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-gold font-semibold uppercase tracking-wider mb-3">
                Get Started
              </h2>
              <h3 className="text-3xl md:text-4xl font-bold text-teal mb-4">
                Request a Free Southampton Drone Survey Quote
              </h3>
              <p className="text-text-secondary text-lg mb-6">
                Ready to discuss your Southampton drone survey requirements? Complete the form
                and our team will get back to you within 5 mins on average with a tailored
                quote for your project.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gold/20 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-text-primary">Free no-obligation quote</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gold/20 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-text-primary">Avg Response within 5 Mins</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gold/20 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-text-primary">Maritime sector expertise</span>
                </div>
              </div>
            </div>
            <div>
              <QuoteForm />
            </div>
          </div>
        </div>
      </section>

      {/* Floating CTA - appears after scrolling */}
      <FloatingCTA />

      {/* Schema Markup for Local Business - Southampton */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: safeJsonLd({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: 'Hire Drone Pilot Southampton',
            alternateName: 'HireDronePilot',
            description: 'Professional drone survey services in Southampton and Hampshire. CAA-approved drone operators delivering precision aerial data for port, maritime, and construction projects.',
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Southampton',
              addressRegion: 'Hampshire',
              addressCountry: 'GB',
            },
            telephone: '+441334804554',
            email: 'quotes@hiredronepilot.uk',
            url: 'https://hiredronepilot.uk/cities/southampton',
            areaServed: [
              { '@type': 'City', name: 'Southampton' },
              { '@type': 'AdministrativeArea', name: 'Hampshire' },
              { '@type': 'Place', name: 'Eastleigh' },
              { '@type': 'Place', name: 'Winchester' },
              { '@type': 'Place', name: 'Port of Southampton' },
              { '@type': 'Place', name: 'Ocean Village' },
            ],
            geo: {
              '@type': 'GeoCoordinates',
              latitude: 50.9097,
              longitude: -1.4044,
            },
            priceRange: '££',
            openingHoursSpecification: {
              '@type': 'OpeningHoursSpecification',
              dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
              opens: '08:00',
              closes: '18:00',
            },
            hasOfferCatalog: {
              '@type': 'OfferCatalog',
              name: 'Southampton Hire Drone Pilot',
              itemListElement: [
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'Drone Survey Southampton',
                  },
                },
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'Aerial Survey Southampton',
                  },
                },
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'Topographic Survey Southampton',
                  },
                },
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'LiDAR Mapping Southampton',
                  },
                },
              ],
            },
          }),
        }}
      />
    </>
  );
}
