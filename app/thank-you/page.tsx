import Link from 'next/link';
import { CheckCircle, ArrowRight, Phone } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Thank You | Skykam Drone Inspections',
  description: 'Thank you for your enquiry. We will be in touch within 5 mins on average.',
  robots: 'noindex, nofollow',
};

export default function ThankYouPage() {
  return (
    <section className="min-h-[80vh] flex items-center bg-gradient-to-br from-teal-dark via-teal to-teal-light -mt-[120px] pt-[120px]">
      <div className="container py-20">
        <div className="max-w-2xl mx-auto text-center">
          {/* Success Icon */}
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gold/20 rounded-full mb-8">
            <CheckCircle className="w-12 h-12 text-gold" />
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Thank You!
          </h1>
          <p className="text-xl text-white/80 mb-8">
            Your quote request has been received successfully.
          </p>

          {/* What happens next */}
          <div className="bg-teal-dark/50 rounded-2xl p-8 mb-8 text-left">
            <h2 className="text-xl font-bold text-white mb-4">What happens next?</h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 bg-gold rounded-full flex items-center justify-center text-teal-dark font-bold text-sm">1</div>
                <p className="text-white/80">Our team will review your project requirements</p>
              </li>
              <li className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 bg-gold rounded-full flex items-center justify-center text-teal-dark font-bold text-sm">2</div>
                <p className="text-white/80">We&apos;ll prepare a tailored quote for your drone survey</p>
              </li>
              <li className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 bg-gold rounded-full flex items-center justify-center text-teal-dark font-bold text-sm">3</div>
                <p className="text-white/80">You&apos;ll receive a response within <strong className="text-gold">5 mins on average</strong></p>
              </li>
            </ul>
          </div>

          {/* Contact alternative */}
          <div className="bg-white/10 rounded-xl p-4 mb-8 inline-flex items-center gap-4">
            <Phone className="w-5 h-5 text-gold" />
            <span className="text-white/80">Need to speak now?</span>
            <a href="tel:+442046340456" className="text-gold font-semibold hover:text-gold-light transition-colors">
              020 4634 0456
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/" className="btn btn-primary">
              Back to Homepage
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            <Link href="/services" className="btn btn-outline-white">
              View Our Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
