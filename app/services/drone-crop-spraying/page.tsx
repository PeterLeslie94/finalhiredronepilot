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
import { SprayCan, Wheat, ShieldCheck, Clock3, MapPinned, Droplets } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Drone Crop Spraying Service UK | Precision Agricultural Spraying',
  description:
    'Hire independent drone pilots for targeted crop spraying across the UK. Precision application, reduced chemical waste, and fast turnaround for modern farm operations.',
  keywords:
    'drone crop spraying uk, agricultural drone spraying, precision crop spraying, farm drone services, pesticide drone application',
};

const faqs = [
  {
    question: 'What crops can be treated with drone spraying?',
    answer:
      'Drone spraying supports arable, horticultural, and specialist crops where precision application is required. Drone pilots can adjust flow rate, spray width, and flight height by field conditions.',
  },
  {
    question: 'How accurate is drone crop spraying?',
    answer:
      'With mission planning, RTK positioning, and variable-rate controls, drone spraying enables highly targeted coverage and reduced overlap compared with many traditional approaches.',
  },
  {
    question: 'Can drone spraying reduce input costs?',
    answer:
      'Yes. Targeted application can reduce over-spraying and unnecessary chemical usage while improving timing and consistency, especially in difficult terrain and smaller field segments.',
  },
  {
    question: 'Is drone crop spraying compliant in the UK?',
    answer:
      'Yes, when completed by qualified operators with the correct permissions, risk assessments, and operational controls. HireDronePilot connects clients with independent drone pilots.',
  },
];

export default function DroneCropSprayingPage() {
  return (
    <>
      <ServiceSchema
        name="Drone Crop Spraying Service"
        description="Targeted drone crop spraying for UK farms with precision application, faster deployment, and reduced chemical waste."
        url="https://hiredronepilot.uk/services/drone-crop-spraying"
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://hiredronepilot.uk' },
          { name: 'Services', url: 'https://hiredronepilot.uk/services' },
          {
            name: 'Drone Crop Spraying',
            url: 'https://hiredronepilot.uk/services/drone-crop-spraying',
          },
        ]}
      />

      <section className="relative min-h-[760px] md:min-h-[580px] flex items-start bg-teal -mt-[120px] pt-[120px] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/services/agricultural/agricultural-hero.avif"
            alt="Drone crop spraying across UK farmland"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-teal-dark via-teal-dark/90 via-40% to-teal-dark/40 z-10" />
        </div>
        <div className="container pt-8 pb-48 lg:pb-36 lg:pt-12 relative z-10">
          <div className="max-w-3xl">
            <p className="text-gold font-semibold uppercase tracking-wider mb-3">
              Agricultural Drone Operations
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Drone Crop Spraying Service
            </h1>
            <p className="text-white/80 text-lg md:text-xl mb-8">
              Compare quotes from independent drone pilots for precision crop spraying with
              targeted application, reduced drift, and faster deployment.
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
                <h2 className="text-3xl font-bold text-teal mb-4">Precision Spraying for Modern Farms</h2>
                <p className="text-text-secondary text-lg leading-relaxed mb-4">
                  Drone crop spraying allows targeted treatment across specific zones instead of
                  blanket application. This improves control, reduces input waste, and helps teams
                  respond quickly to changing <Link href="/services/drone-land-survey" className="text-gold hover:underline">field conditions</Link>.
                </p>
                <p className="text-text-secondary text-lg leading-relaxed">
                  HireDronePilot connects you with UK drone pilots operating compliant <Link href="/services/drone-agricultural-survey" className="text-gold hover:underline">agricultural workflows</Link>
                  for small and large sites, including hard-to-reach areas where ground equipment is slower
                  or less practical.
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
                        'Targeted spray mission planning',
                        'Application records and coverage evidence',
                        'Field-by-field operational reporting',
                        'Fast mobilisation from independent drone pilots',
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
                        'No platform cut added to drone pilot pricing',
                        'Compare multiple quotes from one form',
                        'Nationwide UK drone pilot network',
                      ].map((item) => (
                        <li key={item} className="flex items-start gap-2 text-white/90">
                          <Wheat className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
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
                <h3 className="text-2xl font-bold text-teal mb-4">Typical Use Cases</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    'Spot treatment for pest outbreaks',
                    'Variable-rate application by field zones',
                    'Post-rain access where machinery is limited',
                    'Targeted treatment near difficult boundaries',
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
                <h3 className="text-teal font-bold text-xl mb-4">Quick Project Snapshot</h3>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <SprayCan className="w-5 h-5 text-gold mt-0.5" />
                    <span className="text-text-secondary">Targeted coverage with reduced overlap</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Droplets className="w-5 h-5 text-gold mt-0.5" />
                    <span className="text-text-secondary">Lower chemical waste through precision application</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPinned className="w-5 h-5 text-gold mt-0.5" />
                    <span className="text-text-secondary">Suitable for varied terrain and awkward access</span>
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
            <h3 className="text-3xl font-bold text-white">Drone Crop Spraying Questions</h3>
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
                Compare Drone Crop Spraying Quotes
              </h3>
              <p className="text-white/80 text-lg mb-6">
                Submit your brief once and compare multiple independent drone pilot responses for your crop spraying project.
              </p>
              <ul className="space-y-3">
                {[
                  'One form to reach multiple drone pilots',
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
