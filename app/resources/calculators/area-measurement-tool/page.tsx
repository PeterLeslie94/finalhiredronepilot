'use client';

import { useState } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { getCalculatorBySlug, calculators } from '@/data/resources';
import DiagonalDivider from '@/components/DiagonalDivider';
import QuoteForm from '@/components/QuoteForm';
import { Calculator, Clock, TrendingUp, Ruler, ChevronRight, ChevronDown } from 'lucide-react';

// Dynamic import of the form component to avoid SSR issues with Leaflet
const AreaMeasurementForm = dynamic(
  () => import('@/components/resources/calculators/AreaMeasurementForm'),
  {
    ssr: false,
    loading: () => (
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        <div className="lg:col-span-3">
          <div className="bg-white border-2 border-border rounded-xl overflow-hidden">
            <div className="p-3 border-b border-border bg-background-alt">
              <div className="h-10 bg-gray-200 rounded animate-pulse w-32"></div>
            </div>
            <div className="w-full h-[400px] md:h-[500px] bg-gray-100 flex items-center justify-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-teal"></div>
            </div>
          </div>
        </div>
        <div className="lg:col-span-2">
          <div className="bg-white border-2 border-border rounded-xl p-6 h-full">
            <div className="h-6 bg-gray-200 rounded animate-pulse w-32 mb-6"></div>
            <div className="space-y-4">
              <div className="h-20 bg-gray-100 rounded animate-pulse"></div>
              <div className="h-16 bg-gray-100 rounded animate-pulse"></div>
              <div className="h-16 bg-gray-100 rounded animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    ),
  }
);

const calculator = getCalculatorBySlug('area-measurement-tool');

// FAQ data
const faqs = [
  {
    question: 'How accurate is the area measurement?',
    answer: 'The area measurement tool uses geodesic calculations that account for the curvature of the Earth, providing accuracy within a few percent for most practical purposes. For survey planning, this is more than sufficient to get accurate cost estimates. For legal or official purposes, we recommend using our professional survey services.',
  },
  {
    question: 'Can I measure irregularly shaped sites?',
    answer: 'Yes! The polygon drawing tool allows you to add as many points as needed to accurately outline your site boundary, no matter how irregular the shape. Simply click to add points around your site perimeter and the tool will calculate the enclosed area.',
  },
  {
    question: 'What units are available?',
    answer: 'The tool provides measurements in three units: square metres (m²), hectares, and acres. Perimeter is shown in metres, and for larger sites, also in kilometres. You can copy any individual measurement or all measurements at once.',
  },
  {
    question: 'Can I export my measurements?',
    answer: 'Yes, you can copy individual measurements or all measurements at once using the copy buttons. The measurements are formatted in a clear text format that you can paste into emails, documents, or quote requests.',
  },
  {
    question: 'Does this work on mobile devices?',
    answer: 'Yes, the area measurement tool is fully responsive and works on mobile devices. You can tap on the map to add polygon points just like clicking on desktop. For the best experience with detailed mapping, we recommend using a tablet or desktop.',
  },
  {
    question: 'How do I use this for my drone survey quote?',
    answer: 'After measuring your site area, click the "Calculate Survey Cost" button in the results panel or navigate to our Survey Cost Estimator. Enter your measured area to get an instant price estimate for your drone survey project. For a formal quote, use the contact form with your site details.',
  },
];

// Icon map for related calculators
const iconMap: Record<string, React.ElementType> = {
  Calculator: Calculator,
  Clock: Clock,
  TrendingUp: TrendingUp,
  Ruler: Ruler,
};

export default function AreaMeasurementToolPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Get other calculators for "Related" section
  const relatedCalculators = calculators.filter(
    (c) => c.slug !== 'area-measurement-tool'
  );

  return (
    <>
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'SoftwareApplication',
            name: calculator?.title || 'Site Area Measurement Tool',
            applicationCategory: 'UtilitiesApplication',
            operatingSystem: 'Web Browser',
            offers: {
              '@type': 'Offer',
              price: '0',
              priceCurrency: 'GBP',
            },
            description: calculator?.description,
            provider: {
              '@type': 'Organization',
              name: 'Hire Drone Pilot',
              url: 'https://hiredronepilot.uk',
            },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
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
          }),
        }}
      />

      {/* Mini Hero Section */}
      <section className="bg-teal -mt-[120px] pt-[120px] pb-12 relative overflow-hidden">
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
            <ChevronRight className="w-4 h-4" />
            <Link href="/resources" className="hover:text-white transition-colors">
              Resources
            </Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/resources#calculators" className="hover:text-white transition-colors">
              Calculators
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-gold">Area Measurement Tool</span>
          </nav>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 mb-4">
              <Ruler className="w-5 h-5 text-gold" />
              <span className="text-white/90 text-sm font-medium">Free Online Tool</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Site Area Measurement Tool
            </h1>
            <p className="text-white/80 text-lg">
              Draw your site boundary on an interactive map and instantly calculate area in square metres, hectares, and acres. Perfect for planning your drone survey project.
            </p>
          </div>
        </div>
      </section>

      {/* Tool Section */}
      <section className="section bg-white">
        <div className="container">
          <AreaMeasurementForm />
        </div>
      </section>

      <DiagonalDivider fromColor="white" toColor="background-alt" />

      {/* How to Use Section */}
      <section className="section bg-background-alt">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-teal mb-8 text-center">
              How to Use the Area Measurement Tool
            </h2>

            <div className="space-y-6">
              {[
                {
                  step: 1,
                  title: 'Navigate to Your Site',
                  description: 'Use the map controls to zoom and pan to your site location. You can switch between street and satellite views for better visibility.',
                },
                {
                  step: 2,
                  title: 'Start Drawing',
                  description: 'Click the "Draw Polygon" button to enter drawing mode. Your cursor will change to a crosshair.',
                },
                {
                  step: 3,
                  title: 'Add Points',
                  description: 'Click on the map to add points around your site boundary. Add at least 3 points to form a polygon. You can add as many points as needed for irregular shapes.',
                },
                {
                  step: 4,
                  title: 'Complete the Polygon',
                  description: 'When you\'ve outlined your site, click "Complete" to close the polygon and calculate the area.',
                },
                {
                  step: 5,
                  title: 'Review Measurements',
                  description: 'View your site area in multiple units (m², hectares, acres) along with perimeter and vertex count. Copy individual values or all measurements.',
                },
                {
                  step: 6,
                  title: 'Compare Quotes',
                  description: 'Use the measured area in our Survey Cost Estimator or contact us directly for a detailed quote.',
                },
              ].map((item) => (
                <div key={item.step} className="calc-step">
                  <div className="calc-step-number">{item.step}</div>
                  <div>
                    <h3 className="font-bold text-teal mb-1">{item.title}</h3>
                    <p className="text-text-secondary">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <DiagonalDivider fromColor="background-alt" toColor="white" />

      {/* Use Cases Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-teal mb-4">
              When to Use This Tool
            </h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              Our area measurement tool is perfect for planning drone survey projects across a variety of applications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Construction Site Surveys',
                description: 'Measure your construction site area to estimate survey costs and plan progress monitoring.',
              },
              {
                title: 'Agricultural Land',
                description: 'Calculate field sizes for crop monitoring, drainage surveys, or precision agriculture planning.',
              },
              {
                title: 'Property Development',
                description: 'Assess land parcels for development feasibility studies and planning applications.',
              },
              {
                title: 'Estate & Land Management',
                description: 'Map estate boundaries, woodland areas, and open spaces for management purposes.',
              },
              {
                title: 'Solar Farm Planning',
                description: 'Measure potential solar installation sites to estimate capacity and survey requirements.',
              },
              {
                title: 'Environmental Surveys',
                description: 'Define survey boundaries for ecological assessments, flood risk areas, or habitat mapping.',
              },
            ].map((useCase, index) => (
              <div
                key={index}
                className="bg-background-alt border border-border rounded-xl p-6 hover:border-gold transition-colors"
              >
                <h3 className="font-bold text-teal mb-2">{useCase.title}</h3>
                <p className="text-text-secondary text-sm">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <DiagonalDivider fromColor="white" toColor="teal" />

      {/* FAQ Section */}
      <section className="section bg-teal">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
              Frequently Asked Questions
            </h2>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white/10 rounded-xl overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full flex items-center justify-between p-5 text-left"
                  >
                    <span className="font-semibold text-white pr-4">{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-gold flex-shrink-0 transition-transform ${
                        openFaq === index ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {openFaq === index && (
                    <div className="px-5 pb-5">
                      <p className="text-white/80">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <DiagonalDivider fromColor="teal" toColor="white" />

      {/* Related Calculators Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-teal mb-4">
              Related Calculators
            </h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              Explore our other free tools to help plan your drone survey project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedCalculators.map((calc) => {
              const IconComponent = iconMap[calc.icon] || Calculator;
              return (
                <Link
                  key={calc.slug}
                  href={`/resources/calculators/${calc.slug}`}
                  className="group bg-white border-2 border-border rounded-xl p-6 hover:border-gold hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-full bg-teal/10 flex items-center justify-center mb-4 group-hover:bg-gold/10 transition-colors">
                    <IconComponent className="w-6 h-6 text-teal group-hover:text-gold transition-colors" />
                  </div>
                  <h3 className="text-lg font-bold text-teal mb-2 group-hover:text-teal-dark transition-colors">
                    {calc.title}
                  </h3>
                  <p className="text-text-secondary text-sm mb-4">
                    {calc.shortDescription}
                  </p>
                  <span className="inline-flex items-center text-gold font-semibold text-sm group-hover:text-gold-dark transition-colors">
                    Try Calculator
                    <ChevronRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              );
            })}
          </div>

          {/* Highlighted CTA to Cost Estimator */}
          <div className="mt-8 bg-gold/10 border-2 border-gold/30 rounded-xl p-6 md:p-8 text-center">
            <h3 className="text-xl font-bold text-teal mb-2">
              Know Your Area? Calculate Survey Costs
            </h3>
            <p className="text-text-secondary mb-4 max-w-xl mx-auto">
              Now that you&apos;ve measured your site area, use our Survey Cost Estimator to get an instant price range for your drone survey project.
            </p>
            <Link
              href="/resources/calculators/survey-cost-estimator"
              className="btn btn-primary"
            >
              <Calculator className="w-4 h-4 mr-2" />
              Get Cost Estimate
            </Link>
          </div>
        </div>
      </section>

      <DiagonalDivider fromColor="white" toColor="teal" />

      {/* CTA Section */}
      <section className="section bg-teal">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-gold font-semibold uppercase tracking-wider mb-3">
                Ready to Get Started?
              </h2>
              <h3 className="text-3xl font-bold text-white mb-4">
                Get a Professional Quote for Your Survey
              </h3>
              <p className="text-white/80 text-lg mb-6">
                Now that you know your site area, let us provide a detailed quote tailored to your specific requirements. Our team responds within 5 mins on average.
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  'Free no-obligation quote',
                  'Avg Response within 5 Mins',
                  'Expert consultation included',
                  'UK-wide coverage',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-white/90">
                    <svg className="w-5 h-5 text-gold flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>{item}</span>
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
