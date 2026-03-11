'use client';

import { useEffect, useId, useRef, useState } from 'react';
import { CircleHelp } from 'lucide-react';

interface InlineHelpTooltipProps {
  label: string;
  text: string;
  align?: 'left' | 'right';
}

export default function InlineHelpTooltip({
  label,
  text,
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

  return (
    <span ref={wrapperRef} className="relative inline-flex items-center">
      <button
        type="button"
        aria-label={label}
        aria-expanded={open}
        aria-controls={tooltipId}
        onClick={() => setOpen((current) => !current)}
        className="inline-flex h-5 w-5 items-center justify-center rounded-full text-text-muted transition-colors hover:text-gold focus:outline-none focus:ring-2 focus:ring-gold/40"
      >
        <CircleHelp className="h-4 w-4" />
      </button>
      {open ? (
        <span
          id={tooltipId}
          role="tooltip"
          className={`absolute top-7 z-20 w-72 rounded-2xl border border-border bg-white p-4 text-sm leading-relaxed text-text-secondary shadow-xl ${
            align === 'right' ? 'right-0' : 'left-0'
          }`}
        >
          {text}
        </span>
      ) : null}
    </span>
  );
}
