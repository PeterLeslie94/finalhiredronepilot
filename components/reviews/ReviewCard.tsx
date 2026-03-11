import Image from 'next/image';
import Link from 'next/link';

import { DroneReview } from '@/data/drone-review-types';

interface ReviewCardProps {
  review: DroneReview;
  href?: string;
}

export default function ReviewCard({ review, href = `/drone-reviews/${review.slug}` }: ReviewCardProps) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-border bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-gold hover:shadow-xl">
      <Link href={href} className="block">
        <div className="relative h-52 bg-background-alt">
          <Image
            src={review.featuredImage}
            alt={review.featuredImageAlt}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-teal-dark/65 to-transparent" />
          <span className="absolute left-4 top-4 rounded-full bg-gold px-3 py-1 text-xs font-semibold uppercase tracking-wide text-teal-dark">
            {review.category}
          </span>
          <div className="absolute bottom-4 right-4 rounded-2xl bg-white/95 px-3 py-2 shadow-lg backdrop-blur">
            <p className="text-xs uppercase tracking-wide text-text-secondary">Overall Score</p>
            <p className="text-2xl font-bold text-teal">{review.overallScore.toFixed(1)}</p>
          </div>
        </div>
        <div className="p-5">
          <div className="flex items-center justify-between gap-3">
            <p className="text-sm font-semibold uppercase tracking-wide text-gold">{review.manufacturer}</p>
            <p className="text-sm text-text-secondary">{review.priceLabel}</p>
          </div>
          <h3 className="mt-2 text-xl font-bold text-teal transition-colors group-hover:text-teal-dark">
            {review.title}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-text-secondary">{review.summary}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {review.useCaseTags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-background-alt px-3 py-1 text-xs font-medium text-text-secondary"
              >
                {tag}
              </span>
            ))}
          </div>
          <span className="mt-5 inline-flex items-center text-sm font-semibold text-gold transition-colors group-hover:text-gold-dark">
            Read Review
          </span>
        </div>
      </Link>
    </article>
  );
}
