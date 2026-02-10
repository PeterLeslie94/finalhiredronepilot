'use client';

import { useState } from 'react';
import Link from 'next/link';
import { TrendingUp, Clock, Shield, Target, Calculator, Ruler, ChevronDown } from 'lucide-react';
import ROIForm from '@/components/resources/calculators/ROIForm';
import DiagonalDivider from '@/components/DiagonalDivider';
import QuoteForm from '@/components/QuoteForm';
import { getCalculatorBySlug, calculators } from '@/data/resources';

// FAQ Data
const faqs = [
  {
    question: 'How much can I save with drone surveys?',
    answer: 'Savings vary depending on site size and complexity, but most clients see 30-50% cost reductions compared to traditional surveying methods. Larger sites typically see greater percentage savings due to economies of scale with drone operations. Additional savings come from reduced project timelines and fewer personnel requirements.',
  },
  {
    question: 'Are drone surveys faster than traditional methods?',
    answer: 'Yes, significantly. A drone survey can typically cover the same area in about 20% of the time required for traditional ground-based methods. A 10-hectare site that might take 5 days with traditional methods can often be completed in just 1 day with drone surveying, including data processing.',
  },
  {
    question: 'What are the safety benefits of drone surveys?',
    answer: 'Drone surveys dramatically reduce the need for personnel to work in hazardous environments. This includes construction sites, rooftops, industrial facilities, and areas with difficult terrain. By keeping surveyors safely on the ground while the drone captures data, you reduce workplace accidents and associated liability.',
  },
  {
    question: 'How accurate is this ROI estimate?',
    answer: 'This calculator provides indicative estimates based on typical project parameters. Actual costs may vary based on factors including site accessibility, required deliverables, weather conditions, and project complexity. We recommend requesting a formal quote for accurate pricing tailored to your specific requirements.',
  },
  {
    question: 'When is a traditional survey better?',
    answer: 'Traditional surveys may be preferable for very small sites (under 1 hectare), areas with significant tree canopy cover, projects requiring sub-centimetre accuracy for specific points, or sites where drone flight is restricted. In many cases, a hybrid approach combining both methods delivers the best results.',
  },
  {
    question: 'How do I get started with drone surveys?',
    answer: 'Getting started is simple. Contact us with your project details and we will provide a tailored quote. We handle all flight permissions, planning, and data processing. Most projects can be scheduled within 2-4 weeks, with deliverables provided shortly after the survey is completed.',
  },
];

// Benefits data
const benefits = [
  {
    icon: Clock,
    title: 'Time Savings',
    description: 'Complete surveys up to 5x faster than traditional methods, reducing project delays and accelerating decision-making.',
  },
  {
    icon: Shield,
    title: 'Safety Improvement',
    description: 'Keep personnel safely on the ground while drones capture data from hazardous or hard-to-reach areas.',
  },
  {
    icon: Target,
    title: 'Enhanced Accuracy',
    description: 'Achieve survey-grade accuracy with RTK-enabled drones and photogrammetric processing.',
  },
];

// Related calculators (excluding current one)
const relatedCalculators = calculators.filter((c) => c.slug !== 'roi-calculator').slice(0, 3);

// FAQ Accordion Item
function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-border last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-5 text-left group"
      >
        <span className="text-lg font-semibold text-text-primary group-hover:text-teal transition-colors pr-4">
          {question}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-gold flex-shrink-0 transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 pb-5' : 'max-h-0'
        }`}
      >
        <p className="text-text-secondary leading-relaxed">{answer}</p>
      </div>
    </div>
  );
}

export default function ROICalculatorPage() {
  const calculator = getCalculatorBySlug('roi-calculator');

  return (
    <>
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'SoftwareApplication',
            name: calculator?.title || 'Drone Survey ROI Calculator',
            description: calculator?.description,
            applicationCategory: 'BusinessApplication',
            operatingSystem: 'Web Browser',
            offers: {
              '@type': 'Offer',
              price: '0',
              priceCurrency: 'GBP',
            },
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: '4.8',
              ratingCount: '156',
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
      <section className="bg-teal -mt-[120px] pt-[120px] pb-16 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-teal-dark via-teal to-teal-light" />
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <defs>
                <pattern id="grid-roi" width="10" height="10" patternUnits="userSpaceOnUse">
                  <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid-roi)" />
            </svg>
          </div>
        </div>

        <div className="container relative z-10">
          {/* Breadcrumb */}
          <nav className="mb-6">
            <ol className="flex items-center gap-2 text-sm text-white/60">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>/</li>
              <li>
                <Link href="/resources" className="hover:text-white transition-colors">
                  Resources
                </Link>
              </li>
              <li>/</li>
              <li>
                <Link href="/resources#calculators" className="hover:text-white transition-colors">
                  Calculators
                </Link>
              </li>
              <li>/</li>
              <li className="text-gold">ROI Calculator</li>
            </ol>
          </nav>

          <div className="max-w-3xl">
            <div className="w-16 h-16 rounded-full bg-gold/20 flex items-center justify-center mb-6">
              <TrendingUp className="w-8 h-8 text-gold" />
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Drone Survey ROI Calculator
            </h1>
            <p className="text-white/80 text-lg md:text-xl">
              Compare the cost of drone surveys versus traditional methods and discover your potential savings
              in time, money, and safety.
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-16">
          <svg
            className="absolute bottom-0 w-full h-16"
            viewBox="0 0 1440 64"
            preserveAspectRatio="none"
            fill="white"
          >
            <path d="M0,64 L1440,64 L1440,0 L0,64 Z" />
          </svg>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="section bg-white">
        <div className="container">
          <ROIForm />
        </div>
      </section>

      <DiagonalDivider fromColor="white" toColor="background-alt" />

      {/* Benefits Beyond Cost Section */}
      <section className="section bg-background-alt">
        <div className="container">
          <div className="text-center mb-12">
            <p className="text-gold font-semibold uppercase tracking-wider mb-3">
              More Than Just Cost Savings
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-teal mb-4">
              Benefits Beyond the Numbers
            </h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              While cost savings are significant, drone surveys offer additional advantages
              that transform how you approach surveying projects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl p-8 border-2 border-border hover:border-gold transition-colors"
                >
                  <div className="w-14 h-14 rounded-full bg-teal/10 flex items-center justify-center mb-6">
                    <IconComponent className="w-7 h-7 text-teal" />
                  </div>
                  <h3 className="text-xl font-bold text-teal mb-3">{benefit.title}</h3>
                  <p className="text-text-secondary">{benefit.description}</p>
                </div>
              );
            })}
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
            </div>

            <div className="bg-white rounded-xl border-2 border-border p-6 md:p-8">
              {faqs.map((faq, index) => (
                <FAQItem key={index} question={faq.question} answer={faq.answer} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <DiagonalDivider fromColor="white" toColor="background-alt" />

      {/* Related Calculators Section */}
      <section className="section bg-background-alt">
        <div className="container">
          <div className="text-center mb-12">
            <p className="text-gold font-semibold uppercase tracking-wider mb-3">
              More Tools
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-teal mb-4">
              Related Calculators
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedCalculators.map((calc) => {
              const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
                Calculator: Calculator,
                Clock: Clock,
                TrendingUp: TrendingUp,
                Ruler: Ruler,
              };
              const IconComponent = iconMap[calc.icon] || Calculator;

              return (
                <Link
                  key={calc.slug}
                  href={`/resources/calculators/${calc.slug}`}
                  className="group bg-white rounded-xl p-6 border-2 border-border hover:border-gold transition-all hover:-translate-y-1"
                >
                  <div className="w-12 h-12 rounded-full bg-teal/10 flex items-center justify-center mb-4 group-hover:bg-gold/10 transition-colors">
                    <IconComponent className="w-6 h-6 text-teal group-hover:text-gold transition-colors" />
                  </div>
                  <h3 className="text-lg font-bold text-teal mb-2 group-hover:text-teal-dark transition-colors">
                    {calc.title}
                  </h3>
                  <p className="text-text-secondary text-sm">{calc.shortDescription}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <DiagonalDivider fromColor="background-alt" toColor="teal" />

      {/* CTA Section */}
      <section className="section bg-teal">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gold font-semibold uppercase tracking-wider mb-3">
                Ready to Save?
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Get an Accurate Quote for Your Project
              </h2>
              <p className="text-white/80 text-lg mb-6">
                Our calculator provides estimates, but every project is unique. Tell us about your
                specific requirements and we will provide a tailored quote within 24 hours.
              </p>
              <ul className="space-y-3">
                {[
                  'Free no-obligation quote',
                  'Avg Response within 5 Mins',
                  'Expert consultation included',
                  'CAA-approved drone operators',
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
                    <span className="text-white">{item}</span>
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

      <DiagonalDivider fromColor="teal" toColor="white" />
    </>
  );
}
