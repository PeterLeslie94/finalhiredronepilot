import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import DiagonalDivider from '@/components/DiagonalDivider';
import QuoteForm from '@/components/QuoteForm';
import QuoteButton from '@/components/QuoteButton';
import { BreadcrumbSchema } from '@/components/SchemaMarkup';
import { MapPin, Phone, Mail, Clock, CheckCircle, MessageSquare } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact Us | Hire Drone Pilot UK',
  description: 'Get in touch with Hire Drone Pilot for a free quote on your aerial survey requirements. We provide professional drone surveys across the UK.',
};

export default function ContactPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://hiredronepilot.uk" },
        { name: "Contact", url: "https://hiredronepilot.uk/contact" }
      ]} />
      {/* Hero Section */}
      <section className="relative min-h-[800px] md:min-h-[600px] flex items-start bg-teal -mt-[120px] pt-[120px] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/services/service-drone-survey.avif"
            alt="Contact Hire Drone Pilot UK"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-teal-dark via-teal-dark/90 via-40% to-teal-dark/40 z-10" />
        </div>
        <div className="container pt-8 pb-52 lg:pb-40 lg:pt-12 relative z-10">
          <div className="max-w-3xl">
            <p className="text-gold font-semibold uppercase tracking-wider mb-3">
              Contact Us
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Get in Touch
            </h1>
            <p className="text-white/80 text-lg md:text-xl mb-8">
              Ready to discuss your drone survey requirements? Contact our team
              for a free consultation and quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <QuoteButton className="btn btn-primary btn-shimmer">
                Compare Quotes
              </QuoteButton>
              <a href="tel:+441334804554" className="btn btn-outline-white flex items-center justify-center gap-2">
                <Phone className="w-4 h-4" />
                Call Now
              </a>
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

      {/* Contact Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-teal mb-6">
                Contact Information
              </h2>
              <p className="text-text-secondary text-lg mb-8">
                Our team is available Monday to Friday, 8am to 6pm. We aim to
                respond to all enquiries within 5 mins on average during business hours.
              </p>

              <div className="space-y-6">
                {/* Phone - Primary Contact */}
                <div className="flex items-start gap-4 bg-teal/5 rounded-xl p-4 border border-teal/10">
                  <div className="w-12 h-12 bg-gold/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-gold" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-teal font-bold text-lg mb-1">Phone</h3>
                    <a href="tel:+441334804554" className="text-xl font-semibold text-teal hover:text-gold transition-colors">
                      +44 1334 804554
                    </a>
                    <p className="text-text-secondary text-sm mt-1">Speak directly to Peter</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gold/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-gold" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-teal font-bold text-lg mb-1">Email</h3>
                    <a href="mailto:quotes@hiredronepilot.uk" className="text-text-secondary hover:text-gold transition-colors">
                      quotes@hiredronepilot.uk
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gold/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-gold" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-teal font-bold text-lg mb-1">Office Hours</h3>
                    <p className="text-text-secondary">
                      Monday - Friday: 8:00am - 6:00pm<br />
                      Saturday: By appointment<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gold/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-gold" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-teal font-bold text-lg mb-1">Coverage Area</h3>
                    <p className="text-text-secondary">
                      UK-wide service from our central location.<br />
                      We travel to your site anywhere in the UK.
                    </p>
                  </div>
                </div>
              </div>

              {/* What to Expect */}
              <div className="mt-8 bg-background-alt rounded-xl p-6 border border-border">
                <h3 className="text-teal font-bold text-lg mb-4 flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-gold" strokeWidth={1.5} />
                  What to Expect
                </h3>
                <ul className="space-y-3">
                  {[
                    'Avg Response within 5 Mins during business hours',
                    'Free no-obligation consultation',
                    'Detailed quote tailored to your project',
                    'Expert advice on the best survey approach',
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-text-secondary">
                      <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Quote Form */}
            <div>
              <div className="bg-white border border-border rounded-2xl p-6 lg:p-8 shadow-lg">
                <h2 className="text-2xl font-bold text-teal mb-2">Compare Quotes</h2>
                <p className="text-text-secondary mb-6">Fill out the form below and we&apos;ll get back to you within 5 mins on average.</p>
                <QuoteForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* UK Coverage Map Section */}
      <section className="section bg-background-alt">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gold font-semibold uppercase tracking-wider mb-3">
                UK-Wide Coverage
              </p>
              <h2 className="text-3xl font-bold text-teal mb-6">
                We Come to You
              </h2>
              <p className="text-text-secondary text-lg mb-6">
                Based centrally in the UK, we provide professional drone survey services
                nationwide. From Scotland to the South Coast, our team travels to your
                site with all the equipment needed to complete your survey.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { region: 'Scotland', examples: 'Edinburgh, Glasgow, Aberdeen' },
                  { region: 'North', examples: 'Newcastle, Leeds, Manchester' },
                  { region: 'Midlands', examples: 'Birmingham, Nottingham, Leicester' },
                  { region: 'South', examples: 'London, Bristol, Southampton' },
                ].map((area, index) => (
                  <div key={index} className="bg-white rounded-lg p-4 border border-border">
                    <h4 className="font-bold text-teal">{area.region}</h4>
                    <p className="text-text-secondary text-sm">{area.examples}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/uk-coverage-map.avif"
                alt="UK coverage map - Hire Drone Pilot operates nationwide"
                width={600}
                height={600}
                className="rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <DiagonalDivider fromColor="background-alt" toColor="teal" />

      {/* FAQ Section */}
      <section className="section bg-teal">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-gold font-semibold uppercase tracking-wider mb-3">
              Quick Answers
            </h2>
            <h3 className="text-3xl font-bold text-white mb-4">
              Common Questions
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                q: 'How quickly can you start a project?',
                a: 'We can typically mobilise within 1-2 weeks of receiving an order, or sooner for urgent requirements.',
              },
              {
                q: 'Do you cover all of the UK?',
                a: 'Yes, we provide drone survey services nationwide, from Scotland to the South Coast.',
              },
              {
                q: 'What information do you need for a quote?',
                a: 'Site location, approximate area size, type of survey required, and your delivery timescales.',
              },
              {
                q: 'Are you insured for drone operations?',
                a: 'Yes, we carry comprehensive public liability insurance (£10M) and equipment insurance.',
              },
              {
                q: 'What formats do you deliver data in?',
                a: 'We provide deliverables in industry-standard formats including DWG, DXF, PDF, LAS, and GeoTIFF.',
              },
              {
                q: 'Can you work on live construction sites?',
                a: 'Yes, our drone pilots are experienced in working on active sites with appropriate H&S protocols.',
              },
            ].map((item, index) => (
              <div key={index} className="bg-white/10 rounded-xl p-6">
                <h4 className="text-white font-bold mb-2">{item.q}</h4>
                <p className="text-white/70 text-sm">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <DiagonalDivider fromColor="teal" toColor="white" />

      {/* Final CTA */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-teal mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-text-secondary text-lg mb-8">
              Whether you have a question or are ready to book a survey,
              our team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <QuoteButton className="btn btn-primary btn-shimmer">
                Compare Quotes
              </QuoteButton>
              <a href="tel:+441334804554" className="btn btn-outline flex items-center justify-center gap-2">
                <Phone className="w-4 h-4" />
                +44 1334 804554
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
