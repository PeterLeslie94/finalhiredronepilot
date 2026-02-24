'use client';

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
  HardHat,
  Building2,
  Landmark,
  Home as HomeIcon,
  Factory,
  Ship,
} from 'lucide-react';

const services = [
  {
    title: 'Drone Survey',
    description: 'Comprehensive aerial surveys delivering precise topographic data and 3D models across Belfast.',
    image: '/images/services/service-drone-survey.avif',
    href: '/services/drone-survey',
  },
  {
    title: 'Volumetric Survey',
    description: 'Accurate stockpile measurements and volumetric calculations for Belfast construction sites.',
    image: '/images/services/service-volumetric-survey.avif',
    href: '/services/volumetric-survey',
  },
  {
    title: 'LiDAR Mapping',
    description: 'Precision LiDAR scanning for detailed terrain models across Belfast and Northern Ireland.',
    image: '/images/services/service-lidar-mapping.avif',
    href: '/services/drone-lidar-mapping',
  },
  {
    title: 'Thermal Imaging',
    description: 'Thermal drone inspections for Belfast building diagnostics and energy audits.',
    image: '/images/services/service-thermal-imaging.avif',
    href: '/services/thermal-imaging',
  },
  {
    title: 'Topographic Survey',
    description: 'Detailed topographic surveys for planning, design and construction projects in Belfast.',
    image: '/images/services/service-topographic-survey.avif',
    href: '/services/topographic-survey',
  },
  {
    title: 'Building Inspection',
    description: 'Safe, efficient building and roof inspections across Belfast and surrounding areas.',
    image: '/images/services/service-building-inspection.avif',
    href: '/services/building-inspection',
  },
];

const processSteps = [
  {
    number: '01',
    category: 'Getting Started',
    title: 'Consultation',
    description: 'We discuss your Belfast project requirements and objectives to determine the best survey approach. Our experts will recommend the optimal drone technology and data outputs for your specific needs.',
    image: '/images/process/process-consultation.avif',
  },
  {
    number: '02',
    category: 'Preparation',
    title: 'Planning',
    description: 'Our team plans the flight path, obtains Belfast airspace permissions, and prepares all necessary equipment. We handle all CAA regulations and site-specific risk assessments for your project.',
    image: '/images/process/process-planning.avif',
  },
  {
    number: '03',
    category: 'On Site',
    title: 'Data Capture',
    description: 'Our CAA-authorised independent drone pilots capture high-quality aerial data across Belfast using professional drone equipment. Survey-grade accuracy is achieved through RTK GPS and ground control points.',
    image: '/images/process/process-data-capture.avif',
  },
  {
    number: '04',
    category: 'Delivery',
    title: 'Processing',
    description: 'Raw data is processed using industry-leading photogrammetry and surveying software. We deliver your outputs in your preferred formats, with full technical support throughout the project.',
    image: '/images/process/process-delivery.avif',
  },
];

const faqs = [
  {
    question: 'What drone survey services do you offer in Belfast?',
    answer: 'We provide a full range of drone survey services in Belfast including topographic surveys, LiDAR mapping, building inspections, thermal imaging, volumetric surveys, and construction monitoring. All work is carried out by CAA-approved pilots with comprehensive insurance cover.',
  },
  {
    question: 'Do you need special permissions to fly drones in Belfast?',
    answer: 'Yes, Belfast has specific airspace considerations including proximity to Belfast City Airport and Belfast International Airport. Our pilots hold all necessary CAA authorisations including A2 CofC and GVC qualifications. We handle all airspace permissions and NOTAM requirements as part of our service.',
  },
  {
    question: 'How much does a drone survey cost in Belfast?',
    answer: 'Drone survey costs in Belfast typically range from £300 for a basic roof inspection to £2,000+ for comprehensive topographic surveys. The exact cost depends on site size, survey type, and deliverables required. We provide free, no-obligation quotes for all Belfast projects.',
  },
  {
    question: 'How quickly can you carry out a drone survey in Belfast?',
    answer: 'We can typically schedule Belfast drone surveys within 3-5 working days of booking. For urgent projects we offer expedited scheduling. On-site data capture usually takes a few hours to a full day depending on the survey scope.',
  },
  {
    question: 'Do you cover the whole of Northern Ireland?',
    answer: 'Yes, we cover all of Northern Ireland including Belfast, Derry/Londonderry, Lisburn, Newry, and surrounding areas. Our UK-wide network of drone pilots ensures rapid response and competitive pricing wherever your project is located.',
  },
];

export default function BelfastPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />

      <Hero
        subtitle="Belfast Drone Services"
        title={<>Professional Drone Surveys in <span className="text-gold">Belfast</span></>}
        description="CAA-approved drone survey services across Belfast and Northern Ireland. From topographic surveys to building inspections, our certified operators deliver precision aerial data for your projects."
        primaryCta={{ text: 'Compare Quotes', href: '/quote' }}
        secondaryCta={{ text: 'Call Us', href: 'tel:+441334804554' }}
        backgroundImage="/images/hero-desktop.avif"
        mobileBackgroundImage="/images/hero-mobile.avif"
      />

      <ClientLogoMarquee />

      {/* Services Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <p className="text-gold font-semibold uppercase tracking-wider mb-3 text-sm">
              Belfast Drone Services
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-teal mb-4">
              Our Drone Survey Services in Belfast
            </h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              Professional drone survey solutions for construction, infrastructure, and environmental projects across Belfast and Northern Ireland.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      <DiagonalDivider fromColor="white" toColor="teal" />

      {/* Why Belfast Section */}
      <section className="section bg-teal">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gold font-semibold uppercase tracking-wider mb-3 text-sm">
                Local Expertise
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Why Choose Us for Belfast Drone Surveys?
              </h2>
              <p className="text-white/80 text-lg mb-8">
                Belfast is experiencing significant regeneration with major developments across the Titanic Quarter, city centre, and waterfront areas. Our operators understand local airspace restrictions near Belfast City and International airports and have the experience to deliver across diverse project types.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { icon: HardHat, title: 'Construction Sites', desc: 'Progress monitoring and volumetric surveys' },
                  { icon: Building2, title: 'Commercial Property', desc: 'Roof and facade inspections' },
                  { icon: Landmark, title: 'Heritage Sites', desc: 'Historical building documentation' },
                  { icon: HomeIcon, title: 'Residential', desc: 'Property surveys and inspections' },
                  { icon: Factory, title: 'Industrial', desc: 'Factory and plant mapping' },
                  { icon: Ship, title: 'Maritime', desc: 'Belfast harbour and dockland surveys' },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold text-sm">{item.title}</h3>
                      <p className="text-white/60 text-xs">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <EquipmentSection />
            </div>
          </div>
        </div>
      </section>

      <DiagonalDivider fromColor="teal" toColor="white" />

      {/* Process Steps */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <p className="text-gold font-semibold uppercase tracking-wider mb-3 text-sm">
              How It Works
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-teal mb-4">
              Our Belfast Survey Process
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step) => (
              <div key={step.number} className="text-center">
                <div className="w-16 h-16 bg-gold/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-gold">{step.number}</span>
                </div>
                <p className="text-gold text-xs font-semibold uppercase tracking-wider mb-1">{step.category}</p>
                <h3 className="text-xl font-bold text-teal mb-2">{step.title}</h3>
                <p className="text-text-secondary text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />

      {/* FAQ Section */}
      <section className="section bg-background-alt">
        <div className="container">
          <div className="text-center mb-12">
            <p className="text-gold font-semibold uppercase tracking-wider mb-3 text-sm">
              FAQs
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-teal mb-4">
              Belfast Drone Survey FAQs
            </h2>
          </div>
          <FAQ items={faqs} />
        </div>
      </section>

      {/* Quote Form Section */}
      <section className="section bg-white" id="quote">
        <div className="container max-w-4xl">
          <div className="text-center mb-12">
            <p className="text-gold font-semibold uppercase tracking-wider mb-3 text-sm">
              Get Started
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-teal mb-4">
              Get a Free Belfast Drone Survey Quote
            </h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              Tell us about your Belfast project and we&apos;ll provide a competitive quote from experienced local drone operators.
            </p>
          </div>
          <QuoteForm />
        </div>
      </section>

      <FloatingCTA />
    </>
  );
}
