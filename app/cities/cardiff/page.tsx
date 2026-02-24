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
  Waves,
} from 'lucide-react';

const services = [
  {
    title: 'Drone Survey',
    description: 'Comprehensive aerial surveys delivering precise topographic data and 3D models across Cardiff.',
    image: '/images/services/service-drone-survey.avif',
    href: '/services/drone-survey',
  },
  {
    title: 'Volumetric Survey',
    description: 'Accurate stockpile measurements and volumetric calculations for Cardiff construction sites.',
    image: '/images/services/service-volumetric-survey.avif',
    href: '/services/volumetric-survey',
  },
  {
    title: 'LiDAR Mapping',
    description: 'Precision LiDAR scanning for detailed terrain models across Cardiff and South Wales.',
    image: '/images/services/service-lidar-mapping.avif',
    href: '/services/drone-lidar-mapping',
  },
  {
    title: 'Thermal Imaging',
    description: 'Thermal drone inspections for Cardiff building diagnostics and energy audits.',
    image: '/images/services/service-thermal-imaging.avif',
    href: '/services/thermal-imaging',
  },
  {
    title: 'Topographic Survey',
    description: 'Detailed topographic surveys for planning, design and construction projects in Cardiff.',
    image: '/images/services/service-topographic-survey.avif',
    href: '/services/topographic-survey',
  },
  {
    title: 'Building Inspection',
    description: 'Safe, efficient building and roof inspections across Cardiff and surrounding areas.',
    image: '/images/services/service-building-inspection.avif',
    href: '/services/building-inspection',
  },
];

const processSteps = [
  {
    number: '01',
    category: 'Getting Started',
    title: 'Consultation',
    description: 'We discuss your Cardiff project requirements and objectives to determine the best survey approach. Our experts will recommend the optimal drone technology and data outputs for your specific needs.',
    image: '/images/process/process-consultation.avif',
  },
  {
    number: '02',
    category: 'Preparation',
    title: 'Planning',
    description: 'Our team plans the flight path, obtains Cardiff airspace permissions, and prepares all necessary equipment. We handle all CAA regulations and site-specific risk assessments for your project.',
    image: '/images/process/process-planning.avif',
  },
  {
    number: '03',
    category: 'On Site',
    title: 'Data Capture',
    description: 'Our CAA-authorised independent drone pilots capture high-quality aerial data across Cardiff using professional drone equipment. Survey-grade accuracy is achieved through RTK GPS and ground control points.',
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
    question: 'What drone survey services do you offer in Cardiff?',
    answer: 'We provide a full range of drone survey services in Cardiff including topographic surveys, LiDAR mapping, building inspections, thermal imaging, volumetric surveys, and construction monitoring. All work is carried out by CAA-approved pilots with comprehensive insurance cover.',
  },
  {
    question: 'Do you need special permissions to fly drones in Cardiff?',
    answer: 'Yes, Cardiff has specific airspace considerations including proximity to Cardiff Airport. Our pilots hold all necessary CAA authorisations including A2 CofC and GVC qualifications. We handle all airspace permissions and NOTAM requirements as part of our service.',
  },
  {
    question: 'How much does a drone survey cost in Cardiff?',
    answer: 'Drone survey costs in Cardiff typically range from £300 for a basic roof inspection to £2,000+ for comprehensive topographic surveys. The exact cost depends on site size, survey type, and deliverables required. We provide free, no-obligation quotes for all Cardiff projects.',
  },
  {
    question: 'How quickly can you carry out a drone survey in Cardiff?',
    answer: 'We can typically schedule Cardiff drone surveys within 3-5 working days of booking. For urgent projects we offer expedited scheduling. On-site data capture usually takes a few hours to a full day depending on the survey scope.',
  },
  {
    question: 'Do you cover the whole of South Wales?',
    answer: 'Yes, we cover all of South Wales including Cardiff, Swansea, Newport, the Valleys, and surrounding areas. Our UK-wide network of drone pilots ensures rapid response and competitive pricing wherever your project is located.',
  },
];

export default function CardiffPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />

      <Hero
        subtitle="Cardiff Drone Services"
        title={<>Professional Drone Surveys in <span className="text-gold">Cardiff</span></>}
        description="CAA-approved drone survey services across Cardiff and South Wales. From topographic surveys to building inspections, our certified operators deliver precision aerial data for your projects."
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
              Cardiff Drone Services
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-teal mb-4">
              Our Drone Survey Services in Cardiff
            </h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              Professional drone survey solutions for construction, infrastructure, and environmental projects across Cardiff and South Wales.
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

      {/* Why Cardiff Section */}
      <section className="section bg-teal">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gold font-semibold uppercase tracking-wider mb-3 text-sm">
                Local Expertise
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Why Choose Us for Cardiff Drone Surveys?
              </h2>
              <p className="text-white/80 text-lg mb-8">
                Cardiff presents unique opportunities for drone survey work, from its regenerated Bay area and city centre developments to the surrounding Vale of Glamorgan countryside. Our operators understand local airspace restrictions near Cardiff Airport and have the experience to deliver across diverse project types.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { icon: HardHat, title: 'Construction Sites', desc: 'Progress monitoring and volumetric surveys' },
                  { icon: Building2, title: 'Commercial Property', desc: 'Roof and facade inspections' },
                  { icon: Landmark, title: 'Heritage Sites', desc: 'Castle and monument documentation' },
                  { icon: HomeIcon, title: 'Residential', desc: 'Property surveys and inspections' },
                  { icon: Factory, title: 'Industrial', desc: 'Factory and plant mapping' },
                  { icon: Waves, title: 'Coastal', desc: 'Cardiff Bay and coastline surveys' },
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
              Our Cardiff Survey Process
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
              Cardiff Drone Survey FAQs
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
              Get a Free Cardiff Drone Survey Quote
            </h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              Tell us about your Cardiff project and we&apos;ll provide a competitive quote from experienced local drone operators.
            </p>
          </div>
          <QuoteForm />
        </div>
      </section>

      <FloatingCTA />
    </>
  );
}
