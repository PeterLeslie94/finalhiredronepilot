'use client';

import { BlogCategory } from '@/data/blog';

interface CategoryFilterProps {
  categories: BlogCategory[];
  activeCategory: string | null;
  onCategoryChange: (categorySlug: string | null) => void;
}

export default function CategoryFilter({
  categories,
  activeCategory,
  onCategoryChange,
}: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap justify-center gap-2">
      {/* All Articles Button */}
      <button
        onClick={() => onCategoryChange(null)}
        className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
          activeCategory === null
            ? 'bg-gold text-teal-dark shadow-lg shadow-gold/20'
            : 'bg-white border-2 border-border text-text-secondary hover:border-gold hover:text-gold'
        }`}
      >
        All Articles
      </button>

      {/* Category Buttons */}
      {categories.filter((c) => c.slug !== 'uncategorized').map((category) => (
        <button
          key={category.slug}
          onClick={() => onCategoryChange(category.slug)}
          className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
            activeCategory === category.slug
              ? 'bg-gold text-teal-dark shadow-lg shadow-gold/20'
              : 'bg-white border-2 border-border text-text-secondary hover:border-gold hover:text-gold'
          }`}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
}
