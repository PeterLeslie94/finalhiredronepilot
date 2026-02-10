'use client';

import { useState } from 'react';

export default function QuoteForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData as any).toString(),
      });

      if (response.ok) {
        window.location.href = '/thank-you';
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-teal rounded-2xl p-8 md:p-10">
      <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
        Post Once. Compare Trusted Drone Pilot Quotes.
      </h3>
      <p className="text-white/70 mb-4">
        Submit once and receive competitive quotes from vetted drone pilots.
      </p>

      {/* Trust indicators */}
      <div className="flex flex-wrap gap-4 mb-6 text-sm">
        <div className="flex items-center gap-2 text-white/80">
          <svg className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
          </svg>
          <span>Avg 5 Min Response</span>
        </div>
        <div className="flex items-center gap-2 text-white/80">
          <svg className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          <span>No Obligation</span>
        </div>
        <div className="flex items-center gap-2 text-white/80">
          <svg className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
          </svg>
          <span>Free Quote</span>
        </div>
      </div>

      {/* Phone alternative with online indicator */}
      <div className="bg-teal-dark/50 rounded-xl p-4 mb-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
          </span>
          <span className="text-white/90 text-sm font-medium">We&apos;re Online</span>
        </div>
        <a href="tel:+442046340456" className="flex items-center gap-2 text-gold font-semibold hover:text-gold-light transition-colors">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          020 4634 0456
        </a>
      </div>

      <form
        name="quote"
        method="POST"
        data-netlify="true"
        netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
        className="space-y-5"
      >
        <input type="hidden" name="form-name" value="quote" />
        <div className="hidden">
          <input name="bot-field" />
        </div>

        <input
          type="text"
          name="name"
          placeholder="Your Name *"
          required
          minLength={2}
          maxLength={100}
          className="form-input"
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address *"
          required
          className="form-input"
        />

        <input
          type="tel"
          name="phone"
          placeholder="Phone Number *"
          required
          pattern="[\d\s\+\-\(\)]{7,20}"
          title="Please enter a valid phone number"
          className="form-input"
        />

        <textarea
          name="message"
          placeholder="Tell us about your project..."
          rows={4}
          maxLength={2000}
          className="form-input resize-none"
        />

        <button
          type="submit"
          disabled={isSubmitting}
          className="btn btn-primary btn-shimmer btn-pop-on-scroll w-full disabled:opacity-70"
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center gap-2">
              <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              Submitting...
            </span>
          ) : (
            'Compare Quotes'
          )}
        </button>
      </form>
    </div>
  );
}
