import Link from 'next/link';

import { DroneBestPage } from '@/data/drone-review-types';

interface BestPageCardProps {
  page: DroneBestPage;
}

export default function BestPageCard({ page }: BestPageCardProps) {
  return (
    <article className="rounded-2xl border border-border bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-gold hover:shadow-xl">
      <p className="text-xs font-semibold uppercase tracking-wide text-gold">Best Page</p>
      <h3 className="mt-3 text-2xl font-bold text-teal">{page.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-text-secondary">{page.excerpt}</p>
      <p className="mt-4 rounded-2xl bg-background-alt p-4 text-sm leading-relaxed text-text-secondary">
        {page.methodologySummary}
      </p>
      <Link
        href={`/best-drones/${page.slug}`}
        className="mt-5 inline-flex text-sm font-semibold text-gold hover:text-gold-dark transition-colors"
      >
        View Ranking
      </Link>
    </article>
  );
}
