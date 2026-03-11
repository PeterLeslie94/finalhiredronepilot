'use client';

interface SectionNavProps {
  title?: string;
  sections: Array<{ id: string; label: string }>;
  compact?: boolean;
}

export default function SectionNav({
  title = 'On This Page',
  sections,
  compact = false,
}: SectionNavProps) {
  if (sections.length === 0) return null;

  return (
    <nav
      className={compact
        ? 'rounded-2xl border border-white/10 bg-white/[0.04] p-4'
        : 'rounded-2xl border border-border bg-white p-5 shadow-sm'}
      aria-label={title}
    >
      <p className={compact ? 'text-sm font-semibold text-white' : 'text-sm font-semibold text-teal'}>
        {title}
      </p>
      <ul className="mt-3 space-y-2">
        {sections.map((section) => (
          <li key={section.id}>
            <a
              href={`#${section.id}`}
              className={compact
                ? 'text-sm text-white/75 hover:text-gold transition-colors'
                : 'text-sm text-text-secondary hover:text-gold transition-colors'}
            >
              {section.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
