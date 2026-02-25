import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Hero from '@/components/Hero';
import ServiceCard from '@/components/ServiceCard';
import Testimonials from '@/components/Testimonials';
import DiagonalDivider from '@/components/DiagonalDivider';
import EquipmentSection from '@/components/EquipmentSection';
import FAQ from '@/components/FAQ';
import QuoteForm from '@/components/QuoteForm';
import FloatingCTA from '@/components/FloatingCTA';
import TrustBadge from '@/components/TrustBadge';
import { FAQSchema } from '@/components/SchemaMarkup';
import ClientLogoMarquee from '@/components/ClientLogoMarquee';
import QuoteButton from '@/components/QuoteButton';
import { getLatestArticles } from '@/lib/contentful/blog';
import { canonicalUrl } from '@/lib/seo/metadata';
import {
  HardHat,
  Wheat,
  Zap,
  Mountain,
  Home as HomeIcon,
  TreePine,
  MessageSquareText,
  Send,
  FileCheck2
} from 'lucide-react';

export const metadata: Metadata = {
  alternates: {
    canonical: canonicalUrl('/'),
  },
};

const services = [
  {
    title: 'LiDAR Mapping',
    description: 'Precision LiDAR scanning for detailed terrain models and vegetation analysis.',
    image: '/images/services/service-lidar-mapping.avif',
    href: '/services/drone-lidar-mapping',
    ctaText: 'Explore LiDAR Mapping Services',
  },
  {
    title: 'Building Inspection',
    description: 'Safe, efficient building and roof inspections using drone technology.',
    image: '/images/services/service-building-inspection.avif',
    href: '/services/building-inspection',
    ctaText: 'Explore Building Inspection Services',
  },
  {
    title: 'Topographic Survey',
    description: 'Detailed topographic surveys for planning, design and construction projects.',
    image: '/images/services/service-topographic-survey.avif',
    href: '/services/topographic-survey',
    ctaText: 'Explore Topographic Survey Services',
  },
  {
    title: 'Drone Survey',
    description: 'Comprehensive aerial surveys delivering precise topographic data and 3D models.',
    image: '/images/services/service-drone-survey.avif',
    href: '/services/drone-survey',
    ctaText: 'Explore Drone Survey Services',
  },
  {
    title: 'Thermal Imaging',
    description: 'Thermal drone inspections for building diagnostics and energy audits.',
    image: '/images/services/service-thermal-imaging.avif',
    href: '/services/thermal-imaging',
    ctaText: 'Explore Thermal Imaging Services',
  },
  {
    title: 'Volumetric Survey',
    description: 'Accurate stockpile measurements and volumetric calculations for quarries and construction sites.',
    image: '/images/services/service-volumetric-survey.avif',
    href: '/services/drone-volumetric-survey',
    ctaText: 'Explore Volumetric Survey Services',
  },
];

const industries = [
  { name: 'Energy & Utilities', Icon: Zap, description: 'Infrastructure inspection, solar farm surveys' },
  { name: 'Construction', Icon: HardHat, description: 'Progress monitoring, volumetric analysis, site surveys' },
  { name: 'Real Estate', Icon: HomeIcon, description: 'Property marketing, boundary surveys, roof inspections' },
  { name: 'Environmental', Icon: TreePine, description: 'Habitat mapping, flood modelling, conservation' },
  { name: 'Mining & Quarrying', Icon: Mountain, description: 'Stockpile volumes, pit surveys, reclamation' },
  { name: 'Agriculture', Icon: Wheat, description: 'Crop health mapping, irrigation planning, yield analysis' },
];

const accreditations = [
  {
    name: 'Civil Aviation Authority (CAA)',
    description: 'Approved for commercial drone operations, ensuring compliance with aviation regulations.',
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

const certificationLogos = [
  {
    src: '/images/licences/Civil_Aviation_Authority_logo.avif',
    alt: 'Civil Aviation Authority',
    label: 'Civil Aviation Authority',
    shape: 'wide',
  },
  {
    src: '/images/licences/arpas-uk-drone-association-logo.avif',
    alt: 'ARPAS-UK Drone Association Member',
    label: 'ARPAS-UK Drone Association Member',
    shape: 'small',
  },
  {
    src: '/images/licences/gvc-licence.avif',
    alt: 'GVC Operational Authorisation',
    label: 'GVC Operational Authorisation',
    shape: 'square',
  },
  {
    src: '/images/licences/drone-a2-cofc.avif',
    alt: 'A2 CofC Certification',
    label: 'A2 CofC Certification',
    shape: 'square',
  },
  {
    src: '/images/licences/flyer-id-a1-a3.avif',
    alt: 'CAA Flyer ID',
    label: 'CAA Flyer ID',
    shape: 'square',
  },
  {
    src: '/images/licences/dundee-chamber-commerce-logo.avif',
    alt: 'Dundee & Angus Chamber of Commerce Member',
    label: 'Dundee & Angus Chamber of Commerce Member',
    shape: 'wide',
  },
];

const faqs = [
  {
    question: 'How does HireDronePilot work?',
    answer: 'You post your project once, then receive multiple quotes from independent drone pilots. Compare pricing, capability, and availability before selecting the best fit for your brief.',
  },
  {
    question: 'How quickly will I get quotes?',
    answer: 'Most projects receive initial responses within hours, and many receive multiple qualified quotes within 24 hours depending on location, scope, and timeline.',
  },
  {
    question: 'Are drone pilots independent and insured?',
    answer:
      'Drone pilots on HireDronePilot are independent providers. We may run basic document checks, but clients should perform their own due diligence before appointing a provider.',
  },
  {
    question: 'What deliverables do you provide from a drone survey?',
    answer: 'We provide orthomosaic maps, digital elevation models (DEMs), 3D point clouds, textured 3D models, contour maps, volumetric calculations, and detailed survey reports. All deliverables are provided in industry-standard formats.',
  },
  {
    question: 'How long does a drone survey take in the UK?',
    answer: 'On-site data capture typically takes a few hours to a full day depending on site size. Processing and delivery of final deliverables usually takes 3-7 working days depending on the complexity and type of outputs required.',
  },
  {
    question: 'Do you provide drone survey services across the UK?',
    answer:
      'HireDronePilot operates as an intro marketplace across the UK, connecting clients with independent drone pilots by location, availability, and service fit.',
  },
  {
    question: 'What types of drones do you use for surveys?',
    answer: 'We operate a fleet of professional survey drones including DJI Matrice series with RTK positioning, multi-rotor platforms for detailed inspection work, and fixed-wing aircraft for large area mapping. All drones are equipped with high-resolution cameras or LiDAR sensors.',
  },
  {
    question: 'Can you fly drones in restricted airspace?',
    answer:
      'Some independent drone pilots can operate in controlled or restricted airspace where permissions are required. Confirm permissions and operational responsibility directly with your selected provider.',
  },
  {
    question: 'What is the difference between photogrammetry and LiDAR?',
    answer: 'Photogrammetry uses overlapping photographs to create 3D models and is ideal for most survey applications. LiDAR uses laser pulses to measure distances and can penetrate vegetation to capture ground surfaces, making it better for forestry and densely vegetated sites.',
  },
  {
    question: 'How much does a drone survey cost in the UK?',
    answer: 'Costs vary based on site size, complexity, and deliverables required. As a guide, small site surveys start from around £500, while larger projects are priced per hectare. Contact us for a free, no-obligation quote tailored to your specific requirements.',
  },
  {
    question: 'Do you need access to my site for a drone survey?',
    answer: 'We typically need access to place ground control points and launch/land the drone safely. However, for some projects we can operate from adjacent land or public areas. We will discuss access requirements during the planning stage.',
  },
  {
    question: 'What weather is needed for a drone survey?',
    answer: 'We can fly in light winds (up to 20mph) and dry conditions. Rain, fog, and strong winds prevent safe operations. We monitor weather forecasts closely and will reschedule if conditions are unsuitable to ensure data quality and safety.',
  },
];

function formatBlogDate(value: string): string {
  const parsed = new Date(value);
  if (Number.isNaN(parsed.getTime())) return value;
  return parsed.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
}

export default async function HomePage() {
  const latestArticles = await getLatestArticles(4);

  return (
    <>
      {/* Hero Section */}
      <Hero
        subtitle="Nationwide UK"
        title={<>Compare Quotes. <span className="text-gold">Hire Independent Drone Pilots.</span></>}
        description="Post your project once and receive competitive quotes from independent drone pilots across the United Kingdom."
        primaryCta={{ text: 'Compare Quotes', href: '#quote' }}
        secondaryCta={{ text: 'Explore Services', href: '/services' }}
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
                Built For Serious Projects
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-teal mb-6 leading-tight">
                Post Once. <span className="text-wipe-red">Compare Multiple Quotes.</span>{' '}
                <span className="underline-sweep">Hire With Clarity.</span>
              </h2>
              <p className="text-text-secondary text-lg mb-6 leading-relaxed">
                HireDronePilot removes the chaos of finding reliable drone operators.
                Instead of contacting drone pilots one by one, you receive multiple qualified responses in one streamlined workflow.
              </p>
              <p className="text-text-primary text-lg mb-8 leading-relaxed font-medium">
                Every quote comes from <span className="text-teal">independent drone pilots</span> and is backed by a platform designed for
                <span className="text-teal"> speed, transparency, and dependable delivery</span>.
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
                    <p className="font-semibold text-teal">Independent Drone Pilot Network</p>
                    <p className="text-text-secondary text-sm">Only qualified, insured drone operators can quote</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-teal/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-teal">Fast Quote Turnaround</p>
                    <p className="text-text-secondary text-sm">First qualified responses usually within hours</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-teal/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-teal">Transparent Comparison</p>
                    <p className="text-text-secondary text-sm">Review pricing, capability, and fit side-by-side</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-teal/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-teal">Nationwide Coverage</p>
                    <p className="text-text-secondary text-sm">Trusted drone operators across the UK</p>
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
                <div className="w-96 h-96 md:w-[28rem] md:h-[28rem] rounded-full overflow-hidden shadow-2xl border-4 border-gold/30">
                  <Image
                    src="/images/photos/professional-drone-pilot-uk-028.webp"
                    alt="Professional UK drone pilot with DJI Matrice 350 RTK and multi-sensor payload for aerial surveying"
                    width={448}
                    height={448}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
                {/* Overlay badge */}
                <div className="absolute -bottom-2 -right-2 md:-bottom-4 md:-right-4 bg-white/95 backdrop-blur-sm rounded-lg md:rounded-xl p-2.5 md:p-4 shadow-lg">
                  <div className="flex items-center gap-2 md:gap-3">
                    <div className="w-9 h-9 md:w-12 md:h-12 bg-gold rounded-md md:rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 md:w-6 md:h-6 text-teal-dark" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-teal font-bold text-sm md:text-lg">Peter Leslie</p>
                      <p className="text-text-secondary text-xs md:text-sm">Owner &amp; GVC Drone Pilot</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Content */}
            <div>
              <p className="text-gold font-semibold uppercase tracking-wider mb-3 text-sm">
                About HireDronePilot
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-teal mb-6 leading-tight">
                Meet <span className="text-wipe-red">HireDronePilot</span>, The UK&apos;s Best Drone Pilot Marketplace
              </h2>
              <div className="space-y-4 text-text-secondary text-lg mb-8">
                <p>
                  HireDronePilot is a UK-based platform that connects clients needing drone services
                  with independent drone pilots.
                </p>
                <p>
                  The service works by having clients submit project details through a single form, which is then sent to relevant operators for them to provide quotes.
                </p>
                <p>
                  This makes it a fast and efficient way for businesses and individuals to hire drone professionals for aerial photography, surveys, and inspections.
                </p>
              </div>

              <div className="mb-8">
                <div className="flex flex-wrap items-center gap-x-8 gap-y-6 md:gap-x-10 md:gap-y-8">
                  <div className="flex items-center">
                    <TrustBadge />
                  </div>
                  {certificationLogos.map((logo) => (
                    <div key={logo.label} className="flex items-center">
                      {logo.shape === 'square' ? (
                        <Image
                          src={logo.src}
                          alt={logo.alt}
                          width={160}
                          height={160}
                          className="h-20 md:h-24 w-auto object-contain"
                        />
                      ) : logo.shape === 'small' ? (
                        <Image
                          src={logo.src}
                          alt={logo.alt}
                          width={160}
                          height={60}
                          className="h-10 md:h-14 w-auto object-contain"
                        />
                      ) : (
                        <Image
                          src={logo.src}
                          alt={logo.alt}
                          width={240}
                          height={88}
                          className="h-14 md:h-20 w-auto object-contain"
                        />
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <QuoteButton className="btn btn-primary">
                  Compare Quotes
                </QuoteButton>
                <a
                  href="/about"
                  className="inline-flex items-center justify-center gap-2 btn bg-transparent text-teal border-teal hover:bg-teal hover:text-white"
                >
                  Learn More About Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-gold font-semibold uppercase tracking-wider mb-3">
              Our Drone Pilot Network
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-teal mb-4">
              A Full Range of Drone Services
            </h3>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              Our independent drone pilot network supplies a wide range of services, from inspections and mapping to surveying and aerial media.
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
            {['BBC', 'Scottish Government'].map((outlet) => (
              <div
                key={outlet}
                className="text-teal font-bold text-lg md:text-xl opacity-70 hover:opacity-100 transition-opacity"
              >
                {outlet}
              </div>
            ))}
          </div>

          {/* Industry Publications Row */}
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10 mb-6">
            {['sUAS News', 'InvestorPlace', 'Xataka', 'Vision Systems', 'Automation.com', 'ZephyrNet'].map((outlet) => (
              <div
                key={outlet}
                className="text-teal/60 font-semibold text-sm md:text-base hover:text-teal transition-colors"
              >
                {outlet}
              </div>
            ))}
          </div>

          {/* More Publications Row */}
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
            {['Unmanned Airspace', 'Drone News Africa', 'Mavic Pilots', 'Get Licensed', 'Tweakers', 'Data Insights Market'].map((outlet) => (
              <div
                key={outlet}
                className="text-teal/60 font-semibold text-sm md:text-base hover:text-teal transition-colors"
              >
                {outlet}
              </div>
            ))}
          </div>

          {/* Academic/Research Citations */}
          <div className="mt-10 pt-8 border-t border-border">
            <p className="text-center text-text-secondary text-sm">
              <span className="font-semibold text-teal">Cited in academic research:</span>{' '}
              MDPI • ASCE Library • Medical Xpress • The Journal of mHealth • Archive of Transport
            </p>
          </div>
        </div>
      </section>

      {/* Equipment Section - Drone Fleet & Sensors */}
      <EquipmentSection />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Workflow Section */}
      <section className="section bg-teal relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 -left-24 h-64 w-64 rounded-full bg-gold/10 blur-3xl" />
          <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        </div>
        <div className="container relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-gold font-semibold uppercase tracking-wider mb-3">
              How The Marketplace Works
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              One Brief. Targeted Invites. Direct Appointment.
            </h3>
            <p className="text-white/75 text-lg max-w-3xl mx-auto">
              HireDronePilot is an intro marketplace connecting clients with independent drone pilots.
              We are a facilitator and record keeper only.
            </p>
          </div>

          <div className="max-w-6xl mx-auto mb-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { step: '01', title: 'Submit Brief', subtitle: 'Multi-step enquiry + legal consent' },
              { step: '02', title: 'Get Introduced', subtitle: 'Hand-picked drone pilots reach out to you directly' },
              { step: '03', title: 'Appoint Directly', subtitle: 'Client and drone pilot contract directly' },
            ].map((item) => (
              <div
                key={item.step}
                className="rounded-2xl border border-white/20 bg-white/5 px-4 py-4 backdrop-blur-sm"
              >
                <p className="text-gold text-xs font-bold tracking-[0.2em] mb-1">STEP {item.step}</p>
                <h4 className="text-white font-semibold text-lg">{item.title}</h4>
                <p className="text-white/65 text-sm mt-1">{item.subtitle}</p>
              </div>
            ))}
          </div>

          <div className="max-w-6xl mx-auto grid grid-cols-1 xl:grid-cols-12 gap-6">
            <div className="xl:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-5">
              <article className="rounded-3xl border border-gold/25 bg-teal-dark/95 p-5">
                <div className="w-11 h-11 rounded-xl bg-gold/15 border border-gold/40 flex items-center justify-center mb-4">
                  <MessageSquareText className="w-5 h-5 text-gold" />
                </div>
                <p className="text-gold font-semibold uppercase tracking-wider text-xs mb-2">Step 1</p>
                <h4 className="text-white text-xl font-bold mb-3">Submit Project Brief</h4>
                <p className="text-white/80 text-sm leading-relaxed mb-3">
                  Use the guided form to submit contact details, service type, timeline preference,
                  location (optional), and job details.
                </p>
                <ul className="space-y-2 text-sm text-white/75">
                  <li>Admin reviews each enquiry before any invite is sent.</li>
                  <li>Client identifiers can be removed from the brief where needed.</li>
                  <li>Invite scope can include or exclude specific drone pilots.</li>
                </ul>
              </article>

              <article className="rounded-3xl border border-gold/25 bg-teal-dark/95 p-5">
                <div className="w-11 h-11 rounded-xl bg-gold/15 border border-gold/40 flex items-center justify-center mb-4">
                  <Send className="w-5 h-5 text-gold" />
                </div>
                <p className="text-gold font-semibold uppercase tracking-wider text-xs mb-2">Step 2</p>
                <h4 className="text-white text-xl font-bold mb-3">Get Matched & Introduced</h4>
                <p className="text-white/80 text-sm leading-relaxed mb-3">
                  We hand-pick the best-fit drone pilots for your project and introduce
                  them to you. They reach out directly to discuss your requirements and
                  provide a tailored quote — no middleman, no delay.
                </p>
                <ul className="space-y-2 text-sm text-white/75">
                  <li>Every introduction is hand-selected — no spam, no irrelevant responses.</li>
                  <li>Talk scope, pricing, and timing one-to-one with each pilot.</li>
                  <li>No platform fees or commissions added to any quote.</li>
                </ul>
              </article>

              <article className="rounded-3xl border border-gold/25 bg-teal-dark/95 p-5">
                <div className="w-11 h-11 rounded-xl bg-gold/15 border border-gold/40 flex items-center justify-center mb-4">
                  <FileCheck2 className="w-5 h-5 text-gold" />
                </div>
                <p className="text-gold font-semibold uppercase tracking-wider text-xs mb-2">Step 3</p>
                <h4 className="text-white text-xl font-bold mb-3">Appoint and Deliver</h4>
                <p className="text-white/80 text-sm leading-relaxed mb-3">
                  Once appointed, the client and independent drone pilot agree service terms directly.
                </p>
                <ul className="space-y-2 text-sm text-white/75">
                  <li>HireDronePilot is not party to the service contract.</li>
                  <li>Payment and delivery are handled directly between both parties.</li>
                  <li>We keep enquiry and quote records for traceability.</li>
                </ul>
              </article>
            </div>

            <aside className="xl:col-span-4 rounded-3xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm">
              <h4 className="text-white text-xl font-bold mb-4">Data Sharing + Role Boundaries</h4>
              <div className="space-y-4 text-sm">
                <div className="rounded-2xl border border-white/15 bg-teal/45 px-4 py-3">
                  <p className="text-gold text-xs uppercase tracking-wider font-semibold mb-1">
                    When Data Is Shared
                  </p>
                  <p className="text-white/80">
                    After admin review and approval, your brief is sent to selected independent drone
                    pilots invited to quote.
                  </p>
                </div>
                <div className="rounded-2xl border border-white/15 bg-teal/45 px-4 py-3">
                  <p className="text-gold text-xs uppercase tracking-wider font-semibold mb-1">
                    What Is Shared
                  </p>
                  <p className="text-white/80">
                    Project scope, timeline, location context, and delivery requirements needed for
                    quoting. Not all personal contact details are required in every brief.
                  </p>
                </div>
                <div className="rounded-2xl border border-white/15 bg-teal/45 px-4 py-3">
                  <p className="text-gold text-xs uppercase tracking-wider font-semibold mb-1">
                    Platform Position
                  </p>
                  <p className="text-white/80">
                    Facilitator and record keeper only. We do not guarantee performance, workmanship,
                    or payment outcomes.
                  </p>
                </div>
              </div>
            </aside>
          </div>

          <div className="mt-14 text-center">
            <h4 className="text-2xl md:text-3xl font-bold text-white mb-2">
              Start Your Project Brief
            </h4>
            <p className="text-white/70 mb-6">
              Submit once and get introduced to trusted independent drone pilots.
            </p>
            <QuoteButton className="btn btn-primary btn-shimmer btn-pop-on-scroll">
              Receive Multiple Quotes
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
              Industries We Serve
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-teal mb-4">
              Drone Surveys for Every Sector
            </h3>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              We deliver tailored drone survey solutions across a wide range of industries.
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
              Ready to Discuss Your Project?
            </h3>
            <p className="text-white/70 mb-6 max-w-xl mx-auto">
              Get a free, no-obligation quote tailored to your specific requirements.
              Our team responds within 5 mins on average.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <QuoteButton className="btn btn-primary btn-shimmer btn-pop-on-scroll">
                Compare Quotes
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

      {/* Blog Grid Section */}
      <section className="section bg-teal-dark">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-gold font-semibold uppercase tracking-wider mb-3">
              Insights & Guides
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Latest from HireDronePilot
            </h3>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              Fresh insights, explainers, and practical guidance from our latest drone survey articles.
            </p>
          </div>

          {latestArticles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
              {latestArticles.map((article) => (
                <article
                  key={article.slug}
                  className="group bg-white/10 rounded-2xl border border-white/10 overflow-hidden hover:border-gold/40 transition-all duration-300"
                >
                  <div className="relative h-40">
                    <Image
                      src={article.featuredImage}
                      alt={article.featuredImageAlt || article.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-teal-dark/80 via-teal-dark/30 to-transparent" />
                    {article.category.slug !== 'uncategorized' && (
                      <span className="absolute bottom-3 left-3 text-xs bg-gold/20 text-gold px-2.5 py-1 rounded-full font-semibold">
                        {article.category.name}
                      </span>
                    )}
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-3 text-white/60 text-xs mb-3">
                      <span>{formatBlogDate(article.publishedDate)}</span>
                      <span>•</span>
                      <span>{article.readingTime} min read</span>
                    </div>
                    <h4 className="text-white font-bold text-lg leading-snug mb-3">
                      {article.title}
                    </h4>
                    <p className="text-white/70 text-sm leading-relaxed mb-4">
                      {article.excerpt}
                    </p>
                    <Link
                      href={`/blog/${article.slug}`}
                      className="inline-flex items-center gap-2 text-gold font-semibold hover:text-gold-light transition-colors"
                    >
                      Read Article
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border border-white/20 bg-white/5 p-8 text-center text-white/80">
              No articles are available yet. Rebuild the site after content sync to publish the latest posts.
            </div>
          )}

          <div className="mt-10 text-center">
            <a href="/blog" className="btn btn-primary btn-shimmer">
              View All Articles
            </a>
          </div>
        </div>
      </section>

      <DiagonalDivider fromColor="teal-dark" toColor="white" />

      {/* Coverage Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-gold font-semibold uppercase tracking-wider mb-3">
                UK Coverage
              </h2>
              <h3 className="text-3xl md:text-4xl font-bold text-teal mb-4">
                HireDronePilot Nationwide
              </h3>
              <p className="text-text-secondary text-lg mb-6">
                Our drone pilot network covers projects across the country. From city-centre inspections in London to remote assets in Scotland, we route your brief to qualified drone operators who can deliver on scope and timeline.
              </p>
              <ul className="space-y-3 mb-8">
                {['Scotland & Northern England', 'Midlands & Wales', 'South East & London', 'South West & East Anglia'].map((region) => (
                  <li key={region} className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-gold flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-text-primary">{region}</span>
                  </li>
                ))}
              </ul>
              <a href="/contact" className="btn btn-primary">
                Find Your Local Team
              </a>
            </div>
            <div className="relative">
              <div className="bg-background-alt rounded-2xl p-4 border border-border">
                <img
                  src="/images/uk-coverage-map.avif"
                  alt="UK drone survey coverage map showing nationwide service areas"
                  className="w-full h-auto rounded-xl"
                />
                <p className="text-center text-text-secondary text-sm mt-4">500+ projects completed across the UK</p>
              </div>
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
              with industry-leading certifications.
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
                  peace of mind for all commercial drone operations.
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
                  Fully approved for commercial drone operations with comprehensive
                  compliance to UK aviation regulations and safety standards.
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
                  project investments and deliverables.
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
              Got Questions?
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h3>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              Find answers to common questions about our drone survey services.
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
          <div className="relative overflow-hidden rounded-3xl border border-teal/15 bg-gradient-to-br from-background-alt via-white to-background-alt p-6 md:p-10 lg:p-12 shadow-[0_18px_50px_rgba(8,56,68,0.10)]">
            <div className="absolute -top-20 -left-16 w-64 h-64 rounded-full bg-gold/10 blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -right-16 w-72 h-72 rounded-full bg-teal/10 blur-3xl pointer-events-none" />

            <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-start">
              <div>
                <h2 className="text-gold font-semibold uppercase tracking-wider mb-3">
                  Get Started
                </h2>
                <h3 className="text-3xl md:text-4xl font-bold text-teal mb-4">
                  Request a Free Drone Survey Quote
                </h3>
                <p className="text-text-secondary text-lg mb-8 leading-relaxed">
                  Ready to discuss your drone survey requirements? Complete the form and compare independent drone pilot quotes for your project from one submission.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
                  <div className="rounded-xl border border-teal/20 bg-white p-4">
                    <div className="w-9 h-9 bg-gold/20 rounded-full flex items-center justify-center mb-3">
                      <svg className="w-4 h-4 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-teal font-semibold text-sm">Free no-obligation quote</p>
                  </div>
                  <div className="rounded-xl border border-teal/20 bg-white p-4">
                    <div className="w-9 h-9 bg-gold/20 rounded-full flex items-center justify-center mb-3">
                      <svg className="w-4 h-4 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <p className="text-teal font-semibold text-sm">Avg Response within 5 Mins</p>
                  </div>
                  <div className="rounded-xl border border-teal/20 bg-white p-4">
                    <div className="w-9 h-9 bg-gold/20 rounded-full flex items-center justify-center mb-3">
                      <svg className="w-4 h-4 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M12 6.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11z" />
                      </svg>
                    </div>
                    <p className="text-teal font-semibold text-sm">Expert consultation included</p>
                  </div>
                </div>

                <div className="rounded-2xl border border-teal/20 bg-teal text-white p-5 mb-4">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                    <div>
                      <p className="font-semibold">Need to speak with us now?</p>
                      <p className="text-white/70 text-sm">Call and talk through your scope before submitting.</p>
                    </div>
                    <a
                      href="tel:+441334804554"
                      className="inline-flex items-center justify-center gap-2 rounded-xl bg-gold text-teal-dark font-semibold px-4 py-2.5 hover:bg-gold/90 transition-colors"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      +44 1334 804554
                    </a>
                  </div>
                </div>

                <p className="text-text-secondary text-sm">
                  No account required. Submit once and compare quotes at your own pace.
                </p>
              </div>

              <div className="lg:pl-2">
                <QuoteForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Floating CTA - appears after scrolling */}
      <FloatingCTA />
    </>
  );
}
