import { permanentRedirect } from 'next/navigation';
import { getArticleSlugs } from '@/lib/contentful/blog';

interface Props {
  params: Promise<{ slug: string }>;
}

const isContentfulConfigured = Boolean(
  process.env.CONTENTFUL_SPACE_ID && process.env.CONTENTFUL_ACCESS_TOKEN
);

export async function generateStaticParams() {
  if (!isContentfulConfigured) {
    return [];
  }

  try {
    const slugs = await getArticleSlugs();
    return slugs.map((slug) => ({ slug }));
  } catch (error) {
    console.warn('Contentful fetch failed for legacy blog redirects static params:', error);
    return [];
  }
}

export default async function LegacyResourcesBlogArticleRedirect({ params }: Props) {
  const { slug } = await params;
  permanentRedirect(`/blog/${slug}`);
}
