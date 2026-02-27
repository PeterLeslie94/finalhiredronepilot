import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import QuoteButton from '@/components/QuoteButton';
import QuoteForm from '@/components/QuoteForm';
import DiagonalDivider from '@/components/DiagonalDivider';
import Testimonials from '@/components/Testimonials';
import EquipmentSection from '@/components/EquipmentSection';
import FloatingCTA from '@/components/FloatingCTA';
import FAQ from '@/components/FAQ';
import { ServiceSchema, BreadcrumbSchema } from '@/components/SchemaMarkup';
import { ClientLogoMarqueeInline } from '@/components/ClientLogoMarquee';
import { Flame, Factory, ShieldCheck, Clock3, TriangleAlert, MapPinned } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Drone Gas Detection Service UK | Industrial Leak Survey Drones',
  description:
    'Compare quotes for drone gas detection services across the UK. Independent drone pilots for industrial leak surveys, safety checks, and rapid inspection workflows.',
  keywords:
    'drone gas detection uk, gas leak drone survey, industrial drone inspection, methane detection drone, facility safety drone services',
};

const faqs = [
  {
    question: 'What is drone gas detection used for?',
    answer:
      'It is commonly used for industrial leak checks, plant safety surveys, flare stack monitoring, and difficult-access infrastructure where manual inspection introduces delay or risk.',
  },
  {
    question: 'Can drone inspections reduce site disruption?',
    answer:
      'Yes. Drone-based gas detection can reduce requirements for scaffolding, shutdowns, and prolonged manual access to elevated or confined structures.',
  },
  {
    question: 'Do you provide compliance-ready reporting?',
    answer:
      'Yes. Operators can provide structured outputs for maintenance planning and compliance records, including annotated imagery and inspection summaries.',
  },
  {
    question: 'How quickly can we get drone pilot responses?',
    answer:
      'Most projects receive responses quickly after submission. HireDronePilot sends your brief to independent drone pilots so you can compare quotes and timelines side by side.',
  },
];

export default function DroneGasDetectionPage() {
  return (
    <>
      <ServiceSchema
        name="Drone Gas Detection Service"
        description="Industrial drone gas detection and leak inspection for UK facilities with rapid deployment and compliance-focused reporting."
        url="https://hiredronepilot.uk/services/drone-gas-detection"
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://hiredronepilot.uk' },
          { name: 'Services', url: 'https://hiredronepilot.uk/services' },
          {
            name: 'Drone Gas Detection',
            url: 'https://hiredronepilot.uk/services/drone-gas-detection',
          },
        ]}
      />

      <section className="relative min-h-[760px] md:min-h-[580px] flex items-start bg-teal -mt-[120px] pt-[120px] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/services/industrial/industrial-hero.avif"
            alt="Industrial drone gas detection inspection in the UK"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-teal-dark via-teal-dark/90 via-40% to-teal-dark/40 z-10" />
        </div>
        <div className="container pt-8 pb-48 lg:pb-36 lg:pt-12 relative z-10">
          <div className="max-w-3xl">
            <p className="text-gold font-semibold uppercase tracking-wider mb-3">
              Industrial Safety & Inspection
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Drone Gas Detection Service
            </h1>
            <p className="text-white/80 text-lg md:text-xl mb-8">
              Source competitive quotes from independent drone pilots for gas detection and leak-focused
              inspections across industrial and infrastructure assets.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <QuoteButton className="btn btn-primary">Compare Quotes</QuoteButton>
              <Link href="/services" className="btn btn-outline-white">
                All Services
              </Link>
            </div>
            <p className="mt-4 text-white/70 text-sm flex items-center gap-2">
              <Clock3 className="w-4 h-4 text-gold" />
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

      <section className="section bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-10">
              <div>
                <h2 className="text-3xl font-bold text-teal mb-4">Safer Gas Inspection Workflows</h2>
                <p className="text-text-secondary text-lg leading-relaxed mb-4">
                  Drone gas detection supports faster visual and sensor-led checks on <Link href="/services/drone-industrial-survey" className="text-gold hover:underline">industrial sites</Link>,
                  reducing exposure in high-risk zones and improving inspection coverage in complex environments.
                </p>
                <p className="text-text-secondary text-lg leading-relaxed">
                  HireDronePilot helps you compare independent drone pilots equipped for industrial projects, from
                  elevated assets and process areas to <Link href="/services/drone-confined-space-inspection" className="text-gold hover:underline">hard-to-access infrastructure</Link>.
                </p>
              </div>

              <div className="bg-teal rounded-2xl p-6 md:p-8 overflow-hidden">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-gold font-bold text-sm uppercase tracking-wider mb-3">
                      What You Receive
                    </h3>
                    <ul className="space-y-2.5">
                      {[
                        'Leak-focused inspection planning',
                        'Visual and sensor-driven survey outputs',
                        'Asset-tagged findings and annotations',
                        'Compliance-ready summary deliverables',
                      ].map((item) => (
                        <li key={item} className="flex items-start gap-2 text-white/90">
                          <ShieldCheck className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-gold font-bold text-sm uppercase tracking-wider mb-3">
                      Why HireDronePilot
                    </h3>
                    <ul className="space-y-2.5">
                      {[
                        'Independent drone pilots',
                        'Industrial inspection project experience',
                        'No platform cut on drone pilot pricing',
                        'UK-wide operator network',
                      ].map((item) => (
                        <li key={item} className="flex items-start gap-2 text-white/90">
                          <Factory className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="mt-8 pt-6 border-t border-white/10">
                  <ClientLogoMarqueeInline />
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-teal mb-4">Common Deployment Scenarios</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    'Process plant and refinery assets',
                    'Tank farms and storage terminals',
                    'Industrial roofline and vent checks',
                    'Utility and energy infrastructure',
                  ].map((item) => (
                    <div key={item} className="rounded-xl border border-border bg-background-alt p-4">
                      <p className="font-semibold text-teal">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <div className="bg-background-alt border border-border rounded-2xl p-6 lg:sticky lg:top-24">
                <h3 className="text-teal font-bold text-xl mb-4">Project Snapshot</h3>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <Flame className="w-5 h-5 text-gold mt-0.5" />
                    <span className="text-text-secondary">Leak-focused inspections around critical assets</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <TriangleAlert className="w-5 h-5 text-gold mt-0.5" />
                    <span className="text-text-secondary">Reduced exposure in elevated or difficult-access zones</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPinned className="w-5 h-5 text-gold mt-0.5" />
                    <span className="text-text-secondary">Fast deployment across UK industrial sites</span>
                  </li>
                </ul>
                <QuoteButton className="btn btn-primary w-full justify-center">
                  Compare Quotes
                </QuoteButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      <DiagonalDivider fromColor="white" toColor="teal" />

      <section className="section bg-teal">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-gold font-semibold uppercase tracking-wider mb-3">FAQs</h2>
            <h3 className="text-3xl font-bold text-white">Drone Gas Detection Questions</h3>
          </div>
          <div className="max-w-3xl mx-auto bg-white rounded-2xl p-8">
            <FAQ items={faqs} />
          </div>
        </div>
      </section>

      <DiagonalDivider fromColor="teal" toColor="white" />

      <EquipmentSection />

      <section className="section bg-white">
        <div className="container">
          <div className="text-center mb-10">
            <h2 className="text-gold font-semibold uppercase tracking-wider mb-3">Client Feedback</h2>
            <h3 className="text-3xl font-bold text-teal">Trusted by UK Businesses</h3>
          </div>
          <Testimonials />
        </div>
      </section>

      <DiagonalDivider fromColor="white" toColor="teal" />

      <section id="quote" className="section bg-teal">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-gold font-semibold uppercase tracking-wider mb-3">Get Started</h2>
              <h3 className="text-3xl font-bold text-white mb-4">
                Compare Drone Gas Detection Quotes
              </h3>
              <p className="text-white/80 text-lg mb-6">
                Send one project brief and compare independent drone pilot responses for your gas detection and industrial inspection requirements.
              </p>
              <ul className="space-y-3">
                {[
                  'One form to compare multiple drone pilots',
                  'Share certification requirements upfront',
                  'Fast response and transparent quotes',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-white">
                    <ShieldCheck className="w-5 h-5 text-gold flex-shrink-0" />
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

      <FloatingCTA />
    </>
  );
}
