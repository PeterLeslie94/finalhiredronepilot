import { permanentRedirect } from 'next/navigation';

import { getArticleSlugs } from '@/lib/contentful/blog';

interface Props {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

export async function generateStaticParams() {
  const slugs = await getArticleSlugs();
  return slugs.map((slug) => ({ slug }));
}

export default async function LegacyBlogArticleRedirect({ params }: Props) {
  const { slug } = await params;
  permanentRedirect(`/blog/${slug}`);
}
