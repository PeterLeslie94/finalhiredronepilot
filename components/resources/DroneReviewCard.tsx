'use client';

import Link from 'next/link';
import Image from 'next/image';
import StarRating from './StarRating';

interface DroneReviewCardProps {
  name: string;
  manufacturer: string;
  image: string;
  rating: number;
  shortSummary: string;
  category: string;
  href: string;
  bestFor?: string[];
}

export default function DroneReviewCard({
  name,
  manufacturer,
  image,
  rating,
  shortSummary,
  category,
  href,
  bestFor,
}: DroneReviewCardProps) {
  const categoryLabels: Record<string, string> = {
    enterprise: 'Enterprise',
    prosumer: 'Prosumer',
    compact: 'Compact',
    'fixed-wing': 'Fixed Wing',
  };

  return (
    <article className="group relative bg-white border-3 border-border rounded-xl overflow-hidden transition-all duration-300 hover:border-gold hover:-translate-y-1 hover:shadow-xl">
      {/* Image */}
      <div className="relative h-48 bg-gray-100">
        <Image
          src={image}
          alt={`${name} drone for surveying`}
          fill
          className="object-contain p-4 transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        {/* Manufacturer Badge */}
        <span className="absolute top-3 left-3 bg-teal text-white text-xs font-semibold uppercase tracking-wide px-2 py-1 rounded">
          {manufacturer}
        </span>

        {/* Category Badge */}
        <span className="absolute top-3 right-3 bg-gold text-teal-dark text-xs font-semibold uppercase tracking-wide px-2 py-1 rounded-full">
          {categoryLabels[category] || category}
        </span>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="text-lg font-bold text-teal mb-1 group-hover:text-teal-dark transition-colors">
          {name}
        </h3>

        {/* Rating */}
        <div className="mb-3">
          <StarRating rating={rating} size="sm" showValue />
        </div>

        <p className="text-text-secondary text-sm mb-3 line-clamp-2">{shortSummary}</p>

        {/* Best For Tags */}
        {bestFor && bestFor.length > 0 && (
          <div className="flex flex-wrap gap-1 mb-3">
            {bestFor.slice(0, 2).map((use, index) => (
              <span
                key={index}
                className="text-xs bg-background-alt text-text-secondary px-2 py-0.5 rounded"
              >
                {use}
              </span>
            ))}
          </div>
        )}

        {/* CTA */}
        <Link
          href={href}
          className="inline-flex items-center text-gold font-semibold text-sm group-hover:text-gold-dark transition-colors"
        >
          Read Full Review
          <svg
            className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </article>
  );
}
