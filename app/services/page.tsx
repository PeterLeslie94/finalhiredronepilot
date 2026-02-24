import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { services, serviceCategories } from '@/data/services';
import ServiceCard from '@/components/ServiceCard';
import DiagonalDivider from '@/components/DiagonalDivider';
import QuoteForm from '@/components/QuoteForm';
import QuoteButton from '@/components/QuoteButton';
import { BreadcrumbSchema } from '@/components/SchemaMarkup';
import { Crosshair, Zap, ShieldCheck, PoundSterling } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Hire Drone Pilot | Professional Drone Survey Solutions UK',
  description: 'Comprehensive drone survey services including drone photography, LiDAR mapping, thermal imaging, topographic surveys and building inspections. CAA-approved drone operators serving the UK.',
  keywords: 'drone survey services, drone survey, drone mapping, drone LiDAR survey, drone thermal imaging, drone building inspection, UK',
};

export default function ServicesPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://hiredronepilot.uk" },
        { name: "Services", url: "https://hiredronepilot.uk/services" }
      ]} />
      {/* Hero Section */}
      <section className="relative min-h-[800px] md:min-h-[600px] flex items-start bg-teal -mt-[120px] pt-[120px] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/services/service-drone-survey.avif"
            alt="Professional drone survey services across the UK"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-teal-dark via-teal-dark/90 via-40% to-teal-dark/40 z-10" />
        </div>
        <div className="container pt-8 pb-52 lg:pb-40 lg:pt-12 relative z-10">
          <div className="max-w-3xl">
            <p className="text-gold font-semibold uppercase tracking-wider mb-3">
              Our Services
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Professional Drone Services
            </h1>
            <p className="text-white/80 text-lg md:text-xl mb-8">
              Comprehensive drone survey solutions for construction, infrastructure,
              and land management projects across the UK.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <QuoteButton className="btn btn-primary btn-shimmer">
                Compare Quotes
              </QuoteButton>
              <Link href="/contact" className="btn btn-outline-white">
                Contact Us
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

      {/* Services by Category */}
      {serviceCategories.map((category) => {
        const categoryServices = services.filter((s) => s.category === category);
        if (categoryServices.length === 0) return null;

        return (
          <section key={category} className="section bg-white">
            <div className="container">
              <div className="mb-12">
                <h2 className="text-gold font-semibold uppercase tracking-wider mb-3">
                  {category}
                </h2>
                <h3 className="text-3xl font-bold text-teal">
                  {category} Services
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categoryServices.map((service) => (
                  <ServiceCard
                    key={service.slug}
                    title={service.title}
                    description={service.shortDescription}
                    image={service.image}
                    href={`/services/${service.slug}`}
                  />
                ))}
              </div>
            </div>
          </section>
        );
      })}

      <DiagonalDivider fromColor="white" toColor="teal" />

      {/* Why Choose Us */}
      <section className="section bg-teal">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-gold font-semibold uppercase tracking-wider mb-3">
              Why Choose Us
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              The Hire Drone Pilot Advantage
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                Icon: Crosshair,
                title: 'Precision',
                description: 'High-accuracy data capture with ±2-5cm precision using RTK/PPK technology.',
              },
              {
                Icon: Zap,
                title: 'Speed',
                description: 'Complete surveys in a fraction of the time compared to traditional methods.',
              },
              {
                Icon: ShieldCheck,
                title: 'Safety',
                description: 'Eliminate working-at-height risks with CAA-approved drone operations.',
              },
              {
                Icon: PoundSterling,
                title: 'Value',
                description: 'Cost-effective solutions delivering 40-60% savings on typical survey projects.',
              },
            ].map((item) => (
              <div key={item.title} className="bg-white/10 rounded-xl p-6 text-center">
                <div className="w-12 h-12 bg-gold/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <item.Icon className="w-6 h-6 text-gold" strokeWidth={1.5} />
                </div>
                <h4 className="text-white font-bold text-lg mb-2">{item.title}</h4>
                <p className="text-white/70 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <DiagonalDivider fromColor="teal" toColor="white" />

      {/* Quote Section */}
      <section id="quote" className="section bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-gold font-semibold uppercase tracking-wider mb-3">
                Get Started
              </h2>
              <h3 className="text-3xl font-bold text-teal mb-4">
                Request a Free Quote
              </h3>
              <p className="text-text-secondary text-lg mb-6">
                Tell us about your project and we&apos;ll provide a tailored quote
                within 24 hours.
              </p>
              <ul className="space-y-3">
                {['Free no-obligation quote', 'Avg Response within 5 Mins', 'Expert consultation included'].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-gold flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
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
