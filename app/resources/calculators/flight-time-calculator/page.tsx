'use client';

import Link from 'next/link';
import { useState } from 'react';
import DiagonalDivider from '@/components/DiagonalDivider';
import FlightTimeForm from '@/components/resources/calculators/FlightTimeForm';
import QuoteForm from '@/components/QuoteForm';
import { getCalculatorBySlug, calculators } from '@/data/resources';
import { drones } from '@/data/equipment';
import {
  Clock,
  ChevronRight,
  ChevronDown,
  Calculator,
  TrendingUp,
  Ruler,
  MapPin,
  Battery,
  Wind,
  Gauge,
  Camera,
} from 'lucide-react';

// Get calculator metadata
const calculator = getCalculatorBySlug('flight-time-calculator');

// Related calculators (exclude current)
const relatedCalculators = calculators.filter((c) => c.slug !== 'flight-time-calculator');

// FAQ data
const faqs = [
  {
    question: 'How long does a drone survey take?',
    answer:
      'The duration of a drone survey depends on several factors including site size, required resolution, weather conditions, and the type of drone used. A typical 5-hectare site can be surveyed in approximately 30-45 minutes of flight time, though total project time including setup, ground control placement, and multiple battery changes may be 2-4 hours. Larger sites or those requiring higher resolution imagery will take proportionally longer.',
  },
  {
    question: 'How many batteries do I need for a survey?',
    answer:
      'Battery requirements depend on site size and drone type. As a general rule, plan for one battery per 2-4 hectares for multi-rotor drones at standard settings. Fixed-wing and VTOL drones can cover significantly more area per battery. We always recommend having at least one spare battery for contingencies. Our flight time calculator above provides specific estimates based on your project parameters.',
  },
  {
    question: 'What affects drone flight time?',
    answer:
      'Several factors influence drone flight time: payload weight (heavier sensors reduce flight time), wind conditions (flying into wind drains batteries faster), altitude (higher altitudes require more power), temperature (cold weather reduces battery capacity), and flight pattern (frequent turns and stops use more energy than straight-line flight). Weather conditions can reduce effective flight time by 15-30%.',
  },
  {
    question: 'What altitude should I fly at?',
    answer:
      'Flight altitude depends on your survey requirements. Higher altitudes (100-120m) allow faster coverage and are suitable for large-area mapping where cm-level resolution is not critical. Lower altitudes (50-80m) provide higher resolution imagery essential for detailed inspections or when sub-centimetre accuracy is required. UK regulations limit drone flights to 120m above ground level for most operations.',
  },
  {
    question: 'What image overlap is recommended?',
    answer:
      'For photogrammetry and 3D modelling, we recommend 75% frontal (forward) overlap and 65-75% side overlap as standard. Complex terrain, dense vegetation, or high-accuracy requirements may need 80-85% overlap. Lower overlap (60-65%) can be used for simple orthophoto generation on flat terrain. Higher overlap increases processing time and storage requirements but improves accuracy and model quality.',
  },
  {
    question: 'Can you fly in windy conditions?',
    answer:
      'Professional survey drones can operate in wind speeds up to 10-15 m/s depending on the model. However, wind affects flight efficiency, battery consumption, and image quality. We typically recommend postponing surveys when sustained winds exceed 10 m/s or gusts exceed 15 m/s. Our enterprise drones like the Matrice series have higher wind resistance ratings than consumer models.',
  },
];

// How it works steps
const howItWorksSteps = [
  {
    number: 1,
    title: 'Enter Your Site Details',
    description:
      'Input your site area, select your drone model, and set your desired flight altitude and image overlap percentage.',
    icon: MapPin,
  },
  {
    number: 2,
    title: 'Adjust for Conditions',
    description:
      'Factor in expected weather conditions to get a realistic estimate that accounts for wind resistance and efficiency losses.',
    icon: Wind,
  },
  {
    number: 3,
    title: 'Get Instant Results',
    description:
      'Receive detailed estimates including total flight time, battery requirements, image counts, and recommended flight passes.',
    icon: Clock,
  },
];

// Icon map for related calculators
const iconMap: { [key: string]: React.ComponentType<{ className?: string }> } = {
  Calculator: Calculator,
  Clock: Clock,
  TrendingUp: TrendingUp,
  Ruler: Ruler,
};

export default function FlightTimeCalculatorPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  // FAQ Schema Markup
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  // SoftwareApplication Schema
  const softwareSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: calculator?.title || 'Drone Flight Time Calculator',
    description: calculator?.seoDescription || 'Calculate drone flight times for survey operations',
    applicationCategory: 'UtilitiesApplication',
    operatingSystem: 'Web Browser',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'GBP',
    },
    provider: {
      '@type': 'Organization',
      name: 'Hire Drone Pilot',
      url: 'https://hiredronepilot.uk',
    },
  };

  return (
    <>
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />

      {/* Mini Hero Section */}
      <section className="bg-teal -mt-[120px] pt-[120px]">
        <div className="container py-12 md:py-16">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-6">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/resources" className="hover:text-white transition-colors">
              Resources
            </Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/resources#calculators" className="hover:text-white transition-colors">
              Calculators
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">Flight Time Calculator</span>
          </nav>

          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gold/20 rounded-lg flex items-center justify-center">
                <Clock className="w-6 h-6 text-gold" />
              </div>
              <span className="text-gold font-semibold uppercase tracking-wider text-sm">
                Free Tool
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Drone Flight Time Calculator
            </h1>
            <p className="text-white/80 text-lg md:text-xl leading-relaxed">
              {calculator?.description ||
                'Calculate estimated flight time, battery requirements, and coverage rates for your drone survey project.'}
            </p>
          </div>
        </div>

        {/* Diagonal Divider */}
        <div className="h-16 md:h-20 relative">
          <svg
            className="absolute bottom-0 w-full h-16 md:h-20"
            viewBox="0 0 1440 80"
            preserveAspectRatio="none"
            fill="white"
          >
            <path d="M0,80 L1440,80 L1440,0 L0,80 Z" />
          </svg>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="section bg-white">
        <div className="container">
          <FlightTimeForm />
        </div>
      </section>

      {/* How It Works Section */}
      <section className="section bg-background-alt">
        <div className="container">
          <div className="text-center mb-12">
            <p className="text-gold font-semibold uppercase tracking-wider mb-3 text-sm">
              Simple Process
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-teal mb-4">How It Works</h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              Get accurate flight time estimates in three simple steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {howItWorksSteps.map((step) => (
              <div
                key={step.number}
                className="bg-white rounded-xl p-6 border-2 border-border hover:border-gold transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="calc-step-number">{step.number}</div>
                  <div>
                    <h3 className="text-lg font-bold text-teal mb-2">{step.title}</h3>
                    <p className="text-text-secondary text-sm">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Drone Comparison Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <p className="text-gold font-semibold uppercase tracking-wider mb-3 text-sm">
              Equipment Options
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-teal mb-4">
              Drone Fleet Comparison
            </h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              Compare flight times and capabilities across our professional drone fleet
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {drones.slice(0, 4).map((drone) => (
              <div
                key={drone.id}
                className="bg-white border-2 border-border rounded-xl overflow-hidden hover:border-gold hover:shadow-lg transition-all duration-300 group"
              >
                {/* Drone Image */}
                <div className="relative h-40 bg-gradient-to-br from-slate-100 to-slate-200 overflow-hidden">
                  <img
                    src={drone.image}
                    alt={drone.name}
                    className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                  />
                  <span className="absolute top-3 right-3 bg-teal text-white text-xs px-2 py-1 rounded-full">
                    {drone.typeLabel}
                  </span>
                </div>
                {/* Content */}
                <div className="p-4">
                  <h3 className="text-teal font-bold mb-2">{drone.name}</h3>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-text-secondary flex items-center gap-1">
                        <Clock className="w-4 h-4 text-gold" />
                        Flight Time
                      </span>
                      <span className="font-semibold text-teal">{drone.specs.flightTime}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-text-secondary flex items-center gap-1">
                        <Wind className="w-4 h-4 text-gold" />
                        Wind Resistance
                      </span>
                      <span className="font-semibold text-teal">{drone.specs.windResistance}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-text-secondary flex items-center gap-1">
                        <Gauge className="w-4 h-4 text-gold" />
                        Accuracy
                      </span>
                      <span className="font-semibold text-teal text-xs">{drone.specs.accuracy}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/about" className="btn btn-outline">
              View Full Equipment List
            </Link>
          </div>
        </div>
      </section>

      <DiagonalDivider fromColor="white" toColor="background-alt" />

      {/* FAQ Section */}
      <section className="section bg-background-alt">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-gold font-semibold uppercase tracking-wider mb-3 text-sm">
                Common Questions
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-teal mb-4">
                Flight Planning FAQs
              </h2>
              <p className="text-text-secondary text-lg">
                Everything you need to know about drone survey flight planning
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl border-2 border-border overflow-hidden hover:border-gold/50 transition-colors"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full flex items-center justify-between p-5 text-left"
                  >
                    <span className="font-semibold text-teal pr-4">{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-gold flex-shrink-0 transition-transform duration-300 ${
                        openFaq === index ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openFaq === index ? 'max-h-96' : 'max-h-0'
                    }`}
                  >
                    <p className="px-5 pb-5 text-text-secondary leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related Calculators Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <p className="text-gold font-semibold uppercase tracking-wider mb-3 text-sm">
              More Tools
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-teal mb-4">Related Calculators</h2>
            <p className="text-text-secondary text-lg">
              Explore our other free tools to help plan your drone survey project
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {relatedCalculators.map((calc) => {
              const IconComponent = iconMap[calc.icon] || Calculator;
              return (
                <Link
                  key={calc.slug}
                  href={`/resources/calculators/${calc.slug}`}
                  className="group bg-white border-2 border-border rounded-xl p-6 hover:border-gold hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-teal/10 group-hover:bg-gold/20 rounded-lg flex items-center justify-center transition-colors">
                      <IconComponent className="w-6 h-6 text-teal group-hover:text-gold transition-colors" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-teal mb-2 group-hover:text-gold transition-colors">
                        {calc.title}
                      </h3>
                      <p className="text-text-secondary text-sm">{calc.shortDescription}</p>
                    </div>
                  </div>
                  <div className="mt-4 flex items-center gap-2 text-gold font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                    Try Calculator
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <DiagonalDivider fromColor="white" toColor="teal" />

      {/* CTA Section */}
      <section className="section bg-teal">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gold font-semibold uppercase tracking-wider mb-3 text-sm">
                Ready to Get Started?
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Need Professional Flight Planning?
              </h2>
              <p className="text-white/80 text-lg mb-6 leading-relaxed">
                Our expert team handles all flight planning, regulatory compliance, and mission
                execution. Get a free quote for your drone survey project and let us take care of
                the details.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'Detailed mission planning',
                  'CAA regulatory compliance',
                  'Optimal flight parameters',
                  'Professional execution',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-white">
                    <svg
                      className="w-5 h-5 text-gold flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <QuoteForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
