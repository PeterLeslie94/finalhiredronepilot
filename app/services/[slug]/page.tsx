import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { services, getServiceBySlug } from '@/data/services';
import DiagonalDivider from '@/components/DiagonalDivider';
import FAQ from '@/components/FAQ';
import QuoteForm from '@/components/QuoteForm';
import QuoteButton from '@/components/QuoteButton';
import Testimonials from '@/components/Testimonials';
import { ServiceSchema, BreadcrumbSchema } from '@/components/SchemaMarkup';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: 'Service Not Found',
    };
  }

  return {
    title: `${service.title} | Skykam Drone Inspections UK`,
    description: service.shortDescription,
    keywords: `${service.title.toLowerCase()}, drone ${service.title.toLowerCase()}, ${service.category.toLowerCase()}, UK drone services`,
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <ServiceSchema
        name={service.title}
        description={service.shortDescription}
        url={`https://skykam.co.uk/services/${slug}`}
      />
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://skykam.co.uk" },
        { name: "Services", url: "https://skykam.co.uk/services" },
        { name: service.title, url: `https://skykam.co.uk/services/${slug}` }
      ]} />
      {/* Hero Section */}
      <section className="relative min-h-[500px] flex items-center bg-teal -mt-[120px] pt-[120px] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-teal via-teal/95 to-teal/80" />
        </div>
        <div className="container py-16 lg:py-20 relative z-10">
          <div className="max-w-3xl">
            <p className="text-gold font-semibold uppercase tracking-wider mb-3">
              {service.category}
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {service.title}
            </h1>
            <p className="text-white/80 text-lg md:text-xl mb-8">
              {service.shortDescription}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <QuoteButton className="btn btn-primary">
                Compare Quotes
              </QuoteButton>
              <Link href="/services" className="btn btn-outline-white">
                All Services
              </Link>
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

      {/* Description Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-teal mb-6">Overview</h2>
              <p className="text-text-secondary text-lg leading-relaxed mb-8">
                {service.description}
              </p>

              {/* Features */}
              <h3 className="text-2xl font-bold text-teal mb-4">Key Features</h3>
              <ul className="space-y-3 mb-8">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gold mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-text-primary">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Applications */}
              <h3 className="text-2xl font-bold text-teal mb-4">Applications</h3>
              <ul className="space-y-3 mb-8">
                {service.applications.map((application, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gold mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    <span className="text-text-primary">{application}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Sidebar */}
            <div>
              {/* Deliverables Card */}
              <div className="bg-teal rounded-2xl p-6 mb-6">
                <h3 className="text-gold font-bold text-lg mb-4 uppercase tracking-wide">
                  Deliverables
                </h3>
                <ul className="space-y-3">
                  {service.deliverables.map((deliverable, index) => (
                    <li key={index} className="flex items-start gap-3 text-white/80">
                      <svg className="w-4 h-4 text-gold mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>{deliverable}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Card */}
              <div className="bg-background-alt border border-border rounded-2xl p-6">
                <h3 className="text-teal font-bold text-lg mb-2">
                  Ready to get started?
                </h3>
                <p className="text-text-secondary text-sm mb-4">
                  Contact us for a free consultation and quote for your {service.title.toLowerCase()} project.
                </p>
                <QuoteButton className="btn btn-primary w-full">
                  Compare Quotes
                </QuoteButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      <DiagonalDivider fromColor="white" toColor="teal" />

      {/* FAQ Section */}
      {service.faqs.length > 0 && (
        <>
          <section className="section bg-teal">
            <div className="container">
              <div className="text-center mb-12">
                <h2 className="text-gold font-semibold uppercase tracking-wider mb-3">
                  Common Questions
                </h2>
                <h3 className="text-3xl font-bold text-white mb-4">
                  {service.title} FAQs
                </h3>
              </div>
              <div className="max-w-3xl mx-auto">
                <div className="bg-white rounded-2xl p-8">
                  <FAQ items={service.faqs} />
                </div>
              </div>
            </div>
          </section>
          <DiagonalDivider fromColor="teal" toColor="white" />
        </>
      )}

      {/* Testimonials Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-gold font-semibold uppercase tracking-wider mb-3">
              Client Feedback
            </h2>
            <h3 className="text-3xl font-bold text-teal mb-4">
              What Our Clients Say
            </h3>
          </div>
          <Testimonials />
        </div>
      </section>

      <DiagonalDivider fromColor="white" toColor="teal" />

      {/* Trust Badges Section */}
      <section className="py-12 bg-teal">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* CAA Approved */}
            <div className="flex items-center gap-4 bg-white/10 rounded-xl p-5">
              <div className="w-12 h-12 bg-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-gold" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                </svg>
              </div>
              <div>
                <h4 className="text-white font-bold">CAA Approved</h4>
                <p className="text-white/70 text-sm">Licensed commercial drone operators</p>
              </div>
            </div>

            {/* Fully Insured */}
            <div className="flex items-center gap-4 bg-white/10 rounded-xl p-5">
              <div className="w-12 h-12 bg-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-gold" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
                </svg>
              </div>
              <div>
                <h4 className="text-white font-bold">Fully Insured</h4>
                <p className="text-white/70 text-sm">Public liability coverage</p>
              </div>
            </div>

            {/* Professional Indemnity */}
            <div className="flex items-center gap-4 bg-white/10 rounded-xl p-5">
              <div className="w-12 h-12 bg-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-gold" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z" />
                </svg>
              </div>
              <div>
                <h4 className="text-white font-bold">Professional Indemnity</h4>
                <p className="text-white/70 text-sm">PI insurance coverage</p>
              </div>
            </div>
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
                Compare Quotes for {service.title}
              </h3>
              <p className="text-text-secondary text-lg mb-6">
                Complete the form and our team will provide a tailored quote for your {service.title.toLowerCase()} requirements within 24 hours.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gold/20 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-text-primary">Free consultation</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gold/20 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-text-primary">CAA-approved drone operators</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gold/20 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-text-primary">UK-wide coverage</span>
                </div>
              </div>
            </div>
            <div>
              <QuoteForm />
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 bg-background-alt">
        <div className="container">
          <h2 className="text-2xl font-bold text-teal mb-8 text-center">
            Related Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services
              .filter((s) => s.slug !== service.slug)
              .slice(0, 3)
              .map((relatedService) => (
                <Link
                  key={relatedService.slug}
                  href={`/services/${relatedService.slug}`}
                  className="bg-white border border-border rounded-xl p-6 hover:border-gold hover:shadow-lg transition-all duration-300"
                >
                  <h3 className="text-teal font-bold text-lg mb-2">
                    {relatedService.title}
                  </h3>
                  <p className="text-text-secondary text-sm">
                    {relatedService.shortDescription}
                  </p>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </>
  );
}
