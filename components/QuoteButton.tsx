'use client';

interface QuoteButtonProps {
  children: React.ReactNode;
  className?: string;
}

export default function QuoteButton({ children, className = 'btn btn-primary' }: QuoteButtonProps) {
  return (
    <button
      onClick={() => window.dispatchEvent(new CustomEvent('openQuoteModal'))}
      className={className}
    >
      {children ?? 'Compare Quotes'}
    </button>
  );
}
