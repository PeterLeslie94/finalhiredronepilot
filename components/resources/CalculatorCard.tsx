'use client';

import Link from 'next/link';
import { Calculator, Clock, TrendingUp, Ruler, LucideIcon } from 'lucide-react';

interface CalculatorCardProps {
  title: string;
  description: string;
  icon: string;
  href: string;
  features?: string[];
}

const iconMap: Record<string, LucideIcon> = {
  Calculator: Calculator,
  Clock: Clock,
  TrendingUp: TrendingUp,
  Ruler: Ruler,
};

export default function CalculatorCard({
  title,
  description,
  icon,
  href,
  features,
}: CalculatorCardProps) {
  const IconComponent = iconMap[icon] || Calculator;

  return (
    <article className="group relative bg-white border-3 border-border rounded-xl p-6 transition-all duration-300 hover:border-gold hover:-translate-y-1 hover:shadow-xl">
      {/* Icon */}
      <div className="w-14 h-14 rounded-full bg-teal/10 flex items-center justify-center mb-4 group-hover:bg-gold/10 transition-colors">
        <IconComponent className="w-7 h-7 text-teal group-hover:text-gold transition-colors" />
      </div>

      {/* Content */}
      <h3 className="text-xl font-bold text-teal mb-2 group-hover:text-teal-dark transition-colors">
        {title}
      </h3>
      <p className="text-text-secondary mb-4 line-clamp-2">{description}</p>

      {/* Features */}
      {features && features.length > 0 && (
        <ul className="mb-4 space-y-1">
          {features.slice(0, 3).map((feature, index) => (
            <li key={index} className="flex items-center text-sm text-text-secondary">
              <span className="w-1.5 h-1.5 rounded-full bg-gold mr-2 flex-shrink-0" />
              {feature}
            </li>
          ))}
        </ul>
      )}

      {/* CTA */}
      <Link
        href={href}
        className="inline-flex items-center text-gold font-semibold group-hover:text-gold-dark transition-colors"
      >
        Try Calculator
        <svg
          className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </Link>
    </article>
  );
}
