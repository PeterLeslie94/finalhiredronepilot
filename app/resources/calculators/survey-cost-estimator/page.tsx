'use client';

import { safeJsonLd } from '@/lib/utils/safe-json-ld';
import { useState } from 'react';
import Link from 'next/link';
import { Calculator, Clock, TrendingUp, Ruler, ChevronDown, MapPin, FileText, Settings } from 'lucide-react';
import SurveyCostForm from '@/components/resources/calculators/SurveyCostForm';
import DiagonalDivider from '@/components/DiagonalDivider';
import QuoteForm from '@/components/QuoteForm';
import { FAQSchema, BreadcrumbSchema } from '@/components/SchemaMarkup';

const faqs = [
  {
    question: 'How much does a drone survey cost in the UK?',
    answer: 'Drone survey costs in the UK typically range from £400 for small sites (under 5 hectares) to £3,500+ for large or complex projects. The base rate is approximately £80 per hectare for the first 5 hectares, with volume discounts for larger sites. Factors like terrain complexity, required deliverables, and turnaround time all affect the final price.',
  },
  {
    question: 'What factors affect drone survey pricing?',
    answer: 'Several factors influence drone survey pricing: site size (larger sites get volume discounts), terrain complexity (urban or heavily vegetated areas require more flight time), deliverable requirements (3D models and point clouds cost more than basic orthomosaics), turnaround time (express delivery adds 30%), and whether ground control points are needed for survey-grade accuracy (+£150).',
  },
  {
    question: 'Is an orthomosaic included in the base price?',
    answer: 'Yes, a high-resolution orthomosaic map is included in the base price of every drone survey. This geo-referenced aerial map is created by stitching together hundreds of overlapping drone photographs. Additional deliverables like Digital Surface Models (DSM), Digital Terrain Models (DTM), contour lines, 3D textured models, and point clouds are available for an additional percentage of the base cost.',
  },
  {
    question: 'How accurate is this cost estimate?',
    answer: 'This calculator provides an indicative price range within ±15% of typical project costs. The actual quote may vary based on specific site conditions, access requirements, airspace restrictions, and detailed project specifications. We recommend requesting a formal quote for accurate pricing tailored to your exact requirements.',
  },
  {
    question: 'Do I need ground control points?',
    answer: 'Ground Control Points (GCPs) are surveyed markers placed on site that significantly improve the absolute accuracy of your survey data to ±2-3cm. You need GCPs if your project requires survey-grade accuracy, integration with existing survey data, or compliance with engineering specifications. For relative measurements, marketing imagery, or general site monitoring, GCPs may not be necessary.',
  },
  {
    question: "What's included in the different deliverables?",
    answer: 'Each deliverable serves different purposes: Orthomosaics provide a seamless, geo-referenced aerial map. Digital Surface Models (DSM) show elevations including buildings and vegetation. Digital Terrain Models (DTM) show bare-earth elevations. Contour lines provide topographic mapping. 3D textured models create photorealistic site reconstructions. Point clouds provide dense 3D data for CAD integration and detailed measurements.',
  },
];

const relatedCalculators = [
  {
    slug: 'flight-time-calculator',
    title: 'Flight Time Calculator',
    description: 'Estimate flight duration and battery requirements',
    icon: Clock,
  },
  {
    slug: 'roi-calculator',
    title: 'ROI Calculator',
    description: 'Compare drone vs traditional survey costs',
    icon: TrendingUp,
  },
  {
    slug: 'area-measurement-tool',
    title: 'Area Measurement Tool',
    description: 'Measure your site area on an interactive map',
    icon: Ruler,
  },
];

const howItWorksSteps = [
  {
    number: 1,
    icon: MapPin,
    title: 'Enter Site Details',
    description: 'Specify your site area in hectares and select the terrain complexity level.',
  },
  {
    number: 2,
    icon: Settings,
    title: 'Choose Options',
    description: 'Select your required deliverables, turnaround time, and whether you need ground control points.',
  },
  {
    number: 3,
    icon: FileText,
    title: 'Get Your Estimate',
    description: 'Receive an instant price range. Request a formal quote for exact pricing.',
  },
];

export default function SurveyCostEstimatorPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const breadcrumbItems = [
    { name: 'Home', url: 'https://hiredronepilot.uk' },
    { name: 'Resources', url: 'https://hiredronepilot.uk/resources' },
    { name: 'Calculators', url: 'https://hiredronepilot.uk/resources/calculators' },
    { name: 'Survey Cost Estimator', url: 'https://hiredronepilot.uk/resources/calculators/survey-cost-estimator' },
  ];

  const softwareApplicationSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Drone Survey Cost Estimator',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'GBP',
    },
    description: 'Free online calculator to estimate drone survey costs in the UK based on site size, terrain complexity, and deliverable requirements.',
    provider: {
      '@type': 'Organization',
      name: 'Hire Drone Pilot',
      url: 'https://hiredronepilot.uk',
    },
  };

  return (
    <>
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema items={breadcrumbItems} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(softwareApplicationSchema) }}
      />

      {/* Mini Hero */}
      <section className="relative bg-teal -mt-[104px] pt-[104px] pb-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-teal-dark via-teal to-teal-light" />
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <defs>
                <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                  <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>
        </div>
        <div className="container relative z-10">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-6">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/resources" className="hover:text-white transition-colors">
              Resources
            </Link>
            <span>/</span>
            <span className="text-white">Survey Cost Estimator</span>
          </nav>

          <div className="flex items-start gap-4 mb-4">
            <div className="p-3 bg-gold rounded-xl">
              <Calculator className="w-8 h-8 text-teal-dark" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3">
                Drone Survey Cost Calculator
              </h1>
              <p className="text-white/80 text-lg max-w-2xl">
                Get an instant estimate for your drone survey project. Enter your site details
                to receive an indicative price range, then request a formal quote for accurate pricing.
              </p>
            </div>
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

      {/* Calculator Section */}
      <section className="section bg-white">
        <div className="container">
          <SurveyCostForm />
        </div>
      </section>

      <DiagonalDivider fromColor="white" toColor="background-alt" />

      {/* How It Works Section */}
      <section className="section bg-background-alt">
        <div className="container">
          <div className="text-center mb-12">
            <p className="text-gold font-semibold uppercase tracking-wider mb-3">
              Simple Process
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-teal mb-4">
              How It Works
            </h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              Get your drone survey cost estimate in three easy steps
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {howItWorksSteps.map((step) => (
              <div key={step.number} className="text-center">
                <div className="calc-step-number mx-auto mb-4 text-xl">
                  {step.number}
                </div>
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-teal/10 mb-4">
                  <step.icon className="w-8 h-8 text-teal" />
                </div>
                <h3 className="text-xl font-bold text-teal mb-2">{step.title}</h3>
                <p className="text-text-secondary">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <DiagonalDivider fromColor="background-alt" toColor="white" />

      {/* FAQ Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-gold font-semibold uppercase tracking-wider mb-3">
                Common Questions
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-teal mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-text-secondary text-lg">
                Everything you need to know about drone survey pricing in the UK
              </p>
            </div>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="border border-border rounded-xl overflow-hidden">
                  <button
                    onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                    className="w-full flex items-center justify-between p-5 text-left bg-white hover:bg-background-alt transition-colors"
                  >
                    <span className="font-semibold text-teal pr-4">{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-gold flex-shrink-0 transition-transform ${
                        openFaqIndex === index ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {openFaqIndex === index && (
                    <div className="px-5 pb-5 text-text-secondary leading-relaxed">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <DiagonalDivider fromColor="white" toColor="teal" />

      {/* Related Calculators Section */}
      <section className="section bg-teal">
        <div className="container">
          <div className="text-center mb-12">
            <p className="text-gold font-semibold uppercase tracking-wider mb-3">
              More Tools
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Related Calculators
            </h2>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              Explore our other free tools to help plan your drone survey project
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedCalculators.map((calc) => (
              <Link
                key={calc.slug}
                href={`/resources/calculators/${calc.slug}`}
                className="bg-white/10 hover:bg-white/20 rounded-xl p-6 transition-all group"
              >
                <div className="flex items-center gap-4 mb-3">
                  <div className="p-3 bg-gold rounded-lg">
                    <calc.icon className="w-6 h-6 text-teal-dark" />
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-gold transition-colors">
                    {calc.title}
                  </h3>
                </div>
                <p className="text-white/70">{calc.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <DiagonalDivider fromColor="teal" toColor="white" />

      {/* CTA Quote Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gold font-semibold uppercase tracking-wider mb-3">
                Ready for Accurate Pricing?
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-teal mb-4">
                Get a Free Formal Quote
              </h2>
              <p className="text-text-secondary text-lg mb-6">
                Our cost estimator gives you a starting point. For exact pricing tailored
                to your specific project requirements, request a free no-obligation quote
                from our team of drone survey experts.
              </p>
              <ul className="space-y-3">
                {[
                  'Detailed breakdown of all costs',
                  'Site-specific considerations included',
                  'Avg Response within 5 Mins',
                  'No obligation to proceed',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
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
                    <span className="text-text-primary">{item}</span>
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
