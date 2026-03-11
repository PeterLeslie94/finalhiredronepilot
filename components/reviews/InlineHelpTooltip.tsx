'use client';

import { useEffect, useId, useRef, useState } from 'react';
import { CircleHelp } from 'lucide-react';

interface TooltipSummaryRow {
  label: string;
  value: string;
  tone?: 'average' | 'best' | 'worst';
}

interface InlineHelpTooltipProps {
  label: string;
  text: string;
  whatIsThis?: string;
  whyItMatters?: string;
  summaryTitle?: string;
  summaryRows?: TooltipSummaryRow[];
  explanationLink?: {
    href: string;
    label: string;
  };
  align?: 'left' | 'right';
}

export default function InlineHelpTooltip({
  label,
  text,
  whatIsThis,
  whyItMatters,
  summaryTitle,
  summaryRows = [],
  explanationLink,
  align = 'left',
}: InlineHelpTooltipProps) {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLSpanElement | null>(null);
  const tooltipId = useId();

  useEffect(() => {
    if (!open) return;

    function handlePointerDown(event: MouseEvent) {
      if (!wrapperRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    function handleEscape(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setOpen(false);
      }
    }

    document.addEventListener('mousedown', handlePointerDown);
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('mousedown', handlePointerDown);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [open]);

  const hasStructuredContent = Boolean(whatIsThis || whyItMatters || summaryRows.length > 0 || explanationLink);

  const toneClassName = (tone?: TooltipSummaryRow['tone']) => {
    if (tone === 'best') return 'bg-lime-500 text-white';
    if (tone === 'worst') return 'bg-red-500 text-white';
    return 'bg-lime-400 text-white';
  };

  return (
    <span
      ref={wrapperRef}
      className="relative inline-flex items-center"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onFocusCapture={() => setOpen(true)}
      onBlurCapture={() => {
        window.requestAnimationFrame(() => {
          if (!wrapperRef.current?.contains(document.activeElement)) {
            setOpen(false);
          }
        });
      }}
    >
      <button
        type="button"
        aria-label={label}
        aria-expanded={open}
        aria-controls={tooltipId}
        onClick={() => setOpen((current) => !current)}
        className="inline-flex h-5 w-5 items-center justify-center rounded-full text-gold transition-colors hover:text-gold-hover focus:outline-none focus:ring-2 focus:ring-gold/30"
      >
        <CircleHelp className="h-[15px] w-[15px]" />
      </button>
      {open ? (
        <span
          id={tooltipId}
          role="tooltip"
          className={`absolute top-7 z-20 w-[21rem] border border-[#d8d8d8] bg-white p-4 text-[15px] leading-relaxed text-text-primary shadow-[0_10px_30px_rgba(0,0,0,0.15)] ${
            align === 'right' ? 'right-0' : 'left-1/2 -translate-x-1/2'
          }`}
        >
          <span className="absolute -top-2 left-1/2 h-4 w-4 -translate-x-1/2 rotate-45 border-l border-t border-[#d8d8d8] bg-white" />

          {hasStructuredContent ? (
            <span className="relative block space-y-5">
              <span className="block">
                <strong className="font-bold text-text-primary">What is this?</strong>{' '}
                <span className="text-text-secondary">{whatIsThis ?? text}</span>
              </span>

              {whyItMatters ? (
                <span className="block">
                  <strong className="font-bold text-text-primary">Why does this matter?</strong>{' '}
                  <span className="text-text-secondary">{whyItMatters}</span>
                </span>
              ) : null}

              {summaryRows.length > 0 ? (
                <span className="block">
                  <strong className="block font-bold text-text-primary">
                    {summaryTitle ?? 'Score Summary'}
                  </strong>
                  <span className="mt-3 block space-y-3">
                    {summaryRows.map((row) => (
                      <span key={`${row.label}-${row.value}`} className="flex items-center gap-3">
                        <span className={`inline-flex min-w-10 justify-center px-2 py-1 text-base font-bold ${toneClassName(row.tone)}`}>
                          {row.value}
                        </span>
                        <span className="text-text-primary">{row.label}</span>
                      </span>
                    ))}
                  </span>
                </span>
              ) : null}

              {explanationLink ? (
                <a
                  href={explanationLink.href}
                  className="inline-flex text-[15px] text-gold transition-colors hover:text-gold-hover"
                >
                  {explanationLink.label}
                </a>
              ) : null}
            </span>
          ) : (
            <span className="relative block text-text-secondary">{text}</span>
          )}
        </span>
      ) : null}
    </span>
  );
}
