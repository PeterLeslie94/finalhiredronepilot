'use client';

import QuoteButton from '@/components/QuoteButton';

interface ResultItem {
  label: string;
  value: string;
  highlight?: boolean;
  subtext?: string;
}

interface CalculatorResultProps {
  title: string;
  results: ResultItem[];
  disclaimer?: string;
  showQuoteCTA?: boolean;
}

export default function CalculatorResult({
  title,
  results,
  disclaimer,
  showQuoteCTA = true,
}: CalculatorResultProps) {
  return (
    <div className="bg-teal rounded-xl p-6 md:p-8">
      <h3 className="text-lg font-semibold text-white mb-6">{title}</h3>

      <div className="space-y-4">
        {results.map((result, index) => (
          <div
            key={index}
            className={`${
              result.highlight
                ? 'bg-white/10 rounded-lg p-4'
                : 'border-b border-white/20 pb-4 last:border-0'
            }`}
          >
            <p className="text-white/70 text-sm mb-1">{result.label}</p>
            <p
              className={`font-bold ${
                result.highlight
                  ? 'text-3xl md:text-4xl text-gold'
                  : 'text-xl text-white'
              }`}
            >
              {result.value}
            </p>
            {result.subtext && (
              <p className="text-white/60 text-sm mt-1">{result.subtext}</p>
            )}
          </div>
        ))}
      </div>

      {disclaimer && (
        <p className="text-white/60 text-xs mt-6 leading-relaxed">
          {disclaimer}
        </p>
      )}

      {showQuoteCTA && (
        <div className="mt-6 pt-6 border-t border-white/20">
          <p className="text-white/80 text-sm mb-4">
            Want an accurate quote for your project?
          </p>
          <QuoteButton className="btn btn-primary w-full justify-center">
            Compare Quotes
          </QuoteButton>
        </div>
      )}
    </div>
  );
}
