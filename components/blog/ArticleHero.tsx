import { BlogArticle } from '@/data/blog';

interface ArticleHeroProps {
  article: BlogArticle;
}

export default function ArticleHero({ article }: ArticleHeroProps) {
  const formattedDate = new Date(article.publishedDate).toLocaleDateString(
    'en-GB',
    { day: 'numeric', month: 'long', year: 'numeric' }
  );
  const showCategory =
    Boolean(article.category?.name) &&
    article.category?.slug !== 'uncategorized' &&
    article.category?.name.toLowerCase() !== 'uncategorized';

  return (
    <section className="relative -mt-[120px] overflow-hidden bg-gradient-to-b from-teal via-teal-dark to-teal-darker pt-[88px]">
      <div className="container relative">
        <div className="max-w-4xl mx-auto text-center pt-2 pb-14 lg:pt-3 lg:pb-20">
          {/* Category */}
          <p className="text-sm uppercase tracking-wider text-white/80 font-semibold mb-4">
            {showCategory ? article.category.name : 'HireDronePilot Blog'}
          </p>

          {/* Title */}
          <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight font-heading mb-6">
            {article.title}
          </h1>

          {/* Author + Date */}
          <div className="text-white/80 text-base">
            <span className="text-white">
              By {article.author.name}
            </span>
            <span className="mx-2">&middot;</span>
            <span>{formattedDate}</span>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-px w-24 -translate-x-1/2 bg-gold/70" />
    </section>
  );
}
