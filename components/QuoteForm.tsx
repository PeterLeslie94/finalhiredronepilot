'use client';

import QuoteMultiStepForm from '@/components/QuoteMultiStepForm';

export default function QuoteForm() {
  return (
    <div className="bg-teal rounded-2xl p-8 md:p-10">
      <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
        Post Once. Compare Independent Drone Pilot Quotes.
      </h3>
      <p className="text-white/70 mb-6">
        Submit once and receive competitive quotes from independent drone pilots.
      </p>

      <QuoteMultiStepForm
        sourceForm="quote-form"
        submitLabel="Compare Quotes"
      />
    </div>
  );
}
