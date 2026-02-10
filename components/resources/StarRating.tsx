'use client';

import { Star } from 'lucide-react';

interface StarRatingProps {
  rating: number;
  maxStars?: number;
  size?: 'sm' | 'md' | 'lg';
  showValue?: boolean;
}

export default function StarRating({
  rating,
  maxStars = 5,
  size = 'md',
  showValue = false,
}: StarRatingProps) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
  };

  const gapClasses = {
    sm: 'gap-0.5',
    md: 'gap-1',
    lg: 'gap-1.5',
  };

  const textClasses = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
  };

  const renderStar = (index: number) => {
    const fillPercentage = Math.min(Math.max(rating - index, 0), 1) * 100;

    if (fillPercentage === 100) {
      // Full star
      return (
        <Star
          key={index}
          className={`${sizeClasses[size]} fill-gold text-gold`}
        />
      );
    } else if (fillPercentage === 0) {
      // Empty star
      return (
        <Star
          key={index}
          className={`${sizeClasses[size]} fill-transparent text-gray-300`}
        />
      );
    } else {
      // Partial star (half star)
      return (
        <div key={index} className={`relative ${sizeClasses[size]}`}>
          <Star className={`absolute ${sizeClasses[size]} fill-transparent text-gray-300`} />
          <div
            className="absolute overflow-hidden"
            style={{ width: `${fillPercentage}%` }}
          >
            <Star className={`${sizeClasses[size]} fill-gold text-gold`} />
          </div>
        </div>
      );
    }
  };

  return (
    <div className={`flex items-center ${gapClasses[size]}`}>
      <div className={`flex ${gapClasses[size]}`}>
        {Array.from({ length: maxStars }, (_, i) => renderStar(i))}
      </div>
      {showValue && (
        <span className={`${textClasses[size]} font-semibold text-text-primary ml-2`}>
          {rating.toFixed(1)}
        </span>
      )}
    </div>
  );
}
