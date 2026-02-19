import Link from 'next/link';
import {
  ArrowRight,
  BookOpen,
  Calculator,
  CheckCircle2,
  Clock3,
  Home,
  MessageSquare,
  Phone,
  ShieldCheck,
} from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Enquiry Received | HireDronePilot',
  description: 'Your enquiry has been received and is being routed to independent drone pilots for quoting.',
  robots: 'noindex, nofollow',
};

const nextSteps = [
  {
    icon: MessageSquare,
    title: 'Brief review',
    text: 'Our team checks scope quality and strips personal details before distribution.',
  },
  {
    icon: ShieldCheck,
    title: 'Drone pilot matching',
    text: 'We route your brief to independent drone pilots based on service type, availability, and location fit.',
  },
  {
    icon: Clock3,
    title: 'Quotes incoming',
    text: 'You can expect first responses quickly, then compare pricing and delivery terms side by side.',
  },
];

const whileYouWait = [
  {
    href: '/services',
    icon: Home,
    title: 'Explore Services',
    text: 'Review service scopes to tighten your brief before drone pilots respond.',
  },
  {
    href: '/resources',
    icon: BookOpen,
    title: 'Read Guides',
    text: 'Use our planning resources to avoid rework and compare quotes faster.',
  },
  {
    href: '/resources/calculators/survey-cost-estimator',
    icon: Calculator,
    title: 'Use Cost Estimator',
    text: 'Get a quick benchmark range while you wait for fixed drone pilot pricing.',
  },
];

export default function ThankYouPage() {
  return (
    <section className="relative overflow-hidden bg-[#050B15] -mt-[120px] pt-[120px]">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 -left-20 h-[24rem] w-[24rem] rounded-full bg-gold/20 blur-3xl" />
        <div className="absolute top-1/4 -right-24 h-[30rem] w-[30rem] rounded-full bg-sky-400/20 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.14]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.16) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.16) 1px, transparent 1px)',
            backgroundSize: '34px 34px',
          }}
        />
      </div>

      <div className="container relative py-14 md:py-20">
        <div className="mx-auto max-w-6xl space-y-6">
          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="animate-fade-in-up rounded-3xl border border-white/15 bg-white/[0.08] p-6 md:p-10 backdrop-blur-xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-300/40 bg-emerald-300/15 px-4 py-2 text-sm font-semibold text-emerald-100">
                <CheckCircle2 className="h-4 w-4" />
                Enquiry Received
              </div>

              <h1 className="mt-5 text-3xl font-bold text-white md:text-5xl">
                You&apos;re in.
                <span className="block text-gold">We&apos;re routing your brief to drone pilots.</span>
              </h1>

              <p className="mt-4 max-w-2xl text-base text-white/80 md:text-lg">
                Your project is now in the review queue. Once approved, independent drone pilots will receive your brief
                and start submitting quotes for you to compare.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                <div className="rounded-2xl border border-white/15 bg-black/20 p-4">
                  <p className="text-xs uppercase tracking-[0.16em] text-white/60">Status</p>
                  <p className="mt-2 text-lg font-semibold text-white">Queued for review</p>
                </div>
                <div className="rounded-2xl border border-white/15 bg-black/20 p-4">
                  <p className="text-xs uppercase tracking-[0.16em] text-white/60">Average first response</p>
                  <p className="mt-2 text-lg font-semibold text-white">Within hours</p>
                </div>
                <div className="rounded-2xl border border-white/15 bg-black/20 p-4">
                  <p className="text-xs uppercase tracking-[0.16em] text-white/60">Coverage</p>
                  <p className="mt-2 text-lg font-semibold text-white">UK-wide drone pilot network</p>
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href="/" className="btn btn-primary">
                  Back to Homepage
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link href="/services" className="btn btn-outline-white">
                  Browse Services
                </Link>
              </div>

              <div className="mt-8 rounded-2xl border border-gold/35 bg-gold/10 p-4 text-white">
                <p className="flex items-center gap-2 text-sm text-white/80">
                  <Phone className="h-4 w-4 text-gold" />
                  Need to speak to someone now?
                </p>
                <a
                  href="tel:+441334804554"
                  className="mt-1 inline-block text-lg font-bold text-gold hover:text-gold-light transition-colors"
                >
                  +44 1334 804554
                </a>
              </div>
            </div>

            <aside className="animate-fade-in-up animation-delay-200 rounded-3xl border border-white/15 bg-black/30 p-6 md:p-8 backdrop-blur-xl">
              <p className="text-xs uppercase tracking-[0.18em] text-white/60">What happens now</p>
              <div className="mt-5 space-y-5">
                {nextSteps.map((step, index) => {
                  const Icon = step.icon;
                  return (
                    <div key={step.title} className="relative pl-11">
                      {index < nextSteps.length - 1 ? (
                        <span className="absolute left-[15px] top-8 h-[calc(100%-8px)] w-px bg-white/20" />
                      ) : null}
                      <span className="absolute left-0 top-0 inline-flex h-8 w-8 items-center justify-center rounded-full border border-gold/50 bg-gold/20 text-gold">
                        <Icon className="h-4 w-4" />
                      </span>
                      <p className="text-base font-semibold text-white">{step.title}</p>
                      <p className="mt-1 text-sm text-white/70">{step.text}</p>
                    </div>
                  );
                })}
              </div>
            </aside>
          </div>

          <div className="animate-fade-in-up animation-delay-300 grid gap-4 md:grid-cols-3">
            {whileYouWait.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.title}
                  href={item.href}
                  className="group rounded-2xl border border-white/15 bg-white/[0.06] p-5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-gold/50 hover:bg-white/[0.12]"
                >
                  <Icon className="h-5 w-5 text-gold" />
                  <h2 className="mt-3 text-lg font-semibold text-white">{item.title}</h2>
                  <p className="mt-2 text-sm text-white/70">{item.text}</p>
                  <span className="mt-4 inline-flex items-center text-sm font-semibold text-gold">
                    Open
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
