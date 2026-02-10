import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { BlogArticle } from '@/data/blog';

interface ArticleHeroProps {
  article: BlogArticle;
}

export default function ArticleHero({ article }: ArticleHeroProps) {
  return (
    <section className="relative -mt-[120px] overflow-hidden bg-white pt-[140px]">
      <div className="container relative py-12 lg:py-16">
        <nav className="mb-6 flex flex-wrap items-center gap-1 text-sm text-text-secondary">
          <Link href="/" className="transition-colors hover:text-teal">
            Home
          </Link>
          <ChevronRight className="h-4 w-4" />
          <Link href="/resources" className="transition-colors hover:text-teal">
            Resources
          </Link>
          <ChevronRight className="h-4 w-4" />
          <Link href="/resources/blog" className="transition-colors hover:text-teal">
            Blog
          </Link>
        </nav>

        <div className="max-w-5xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-gold">
            HireDronePilot Blog
          </p>
          <h1 className="text-3xl font-bold leading-tight text-teal md:text-5xl">
            {article.title}
          </h1>
        </div>
      </div>
    </section>
  );
}
