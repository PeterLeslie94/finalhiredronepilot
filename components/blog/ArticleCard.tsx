'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Clock, Calendar } from 'lucide-react';

interface ArticleCardProps {
  slug: string;
  title: string;
  excerpt: string;
  featuredImage: string;
  featuredImageAlt: string;
  category: { slug: string; name: string };
  author: { name: string; image: string };
  publishedDate: string;
  readingTime: number;
  variant?: 'default' | 'featured' | 'compact';
}

export default function ArticleCard({
  slug,
  title,
  excerpt,
  featuredImage,
  featuredImageAlt,
  category,
  author,
  publishedDate,
  readingTime,
  variant = 'default',
}: ArticleCardProps) {
  const formattedDate = new Date(publishedDate).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });

  if (variant === 'featured') {
    return (
      <article className="group relative bg-white border-3 border-gold rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
        <Link href={`/resources/blog/${slug}`} className="flex flex-col md:flex-row">
          {/* Image */}
          <div className="relative h-64 md:h-auto md:w-1/2">
            <Image
              src={featuredImage}
              alt={featuredImageAlt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-teal-dark/60 to-transparent md:bg-gradient-to-r" />

            {/* Category Badge */}
            <span className="absolute top-4 left-4 bg-gold text-teal-dark text-xs font-semibold uppercase tracking-wide px-3 py-1 rounded-full">
              {category.name}
            </span>
          </div>

          {/* Content */}
          <div className="p-6 md:w-1/2 flex flex-col justify-center">
            <span className="text-gold text-sm font-semibold uppercase tracking-wide mb-2">
              Featured Article
            </span>
            <h3 className="text-2xl font-bold text-teal mb-3 group-hover:text-teal-dark transition-colors">
              {title}
            </h3>
            <p className="text-text-secondary mb-4 line-clamp-3">{excerpt}</p>

            {/* Meta */}
            <div className="flex items-center gap-4 text-sm text-text-secondary">
              <div className="flex items-center gap-2">
                <Image
                  src={author.image}
                  alt={author.name}
                  width={24}
                  height={24}
                  className="rounded-full"
                />
                <span>{author.name}</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span>{formattedDate}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>{readingTime} min read</span>
              </div>
            </div>
          </div>
        </Link>
      </article>
    );
  }

  if (variant === 'compact') {
    return (
      <article className="group">
        <Link href={`/resources/blog/${slug}`} className="flex gap-4">
          {/* Thumbnail */}
          <div className="relative w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden">
            <Image
              src={featuredImage}
              alt={featuredImageAlt}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="96px"
            />
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <span className="text-gold text-xs font-semibold uppercase tracking-wide">
              {category.name}
            </span>
            <h4 className="text-sm font-bold text-teal mt-1 line-clamp-2 group-hover:text-teal-dark transition-colors">
              {title}
            </h4>
            <div className="flex items-center gap-2 mt-2 text-xs text-text-secondary">
              <span>{formattedDate}</span>
              <span>•</span>
              <span>{readingTime} min</span>
            </div>
          </div>
        </Link>
      </article>
    );
  }

  // Default variant
  return (
    <article className="group relative bg-white border-3 border-border rounded-xl overflow-hidden transition-all duration-300 hover:border-gold hover:-translate-y-1 hover:shadow-xl">
      <Link href={`/resources/blog/${slug}`}>
        {/* Image */}
        <div className="relative h-48">
          <Image
            src={featuredImage}
            alt={featuredImageAlt}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-teal-dark/60 to-transparent" />

          {/* Category Badge */}
          <span className="absolute top-3 left-3 bg-gold text-teal-dark text-xs font-semibold uppercase tracking-wide px-2 py-1 rounded-full">
            {category.name}
          </span>
        </div>

        {/* Content */}
        <div className="p-4">
          <h3 className="text-lg font-bold text-teal mb-2 line-clamp-2 group-hover:text-teal-dark transition-colors">
            {title}
          </h3>
          <p className="text-text-secondary text-sm mb-3 line-clamp-2">{excerpt}</p>

          {/* Meta */}
          <div className="flex items-center justify-between text-xs text-text-secondary">
            <div className="flex items-center gap-2">
              <Image
                src={author.image}
                alt={author.name}
                width={20}
                height={20}
                className="rounded-full"
              />
              <span>{author.name}</span>
            </div>
            <div className="flex items-center gap-3">
              <span>{formattedDate}</span>
              <span>{readingTime} min</span>
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
}
