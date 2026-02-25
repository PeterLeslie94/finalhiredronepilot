import type { Metadata } from 'next';

const SITE_ORIGIN = 'https://hiredronepilot.uk';

export function canonicalUrl(path: string): string {
  const normalizedPath = path === '/' ? '/' : `/${path.replace(/^\/+|\/+$/g, '')}`;
  return new URL(normalizedPath, SITE_ORIGIN).toString();
}

type PageMetadataInput = {
  title: Metadata['title'];
  description: string;
  path: string;
  keywords?: Metadata['keywords'];
  robots?: Metadata['robots'];
};

export function pageMetadata({
  title,
  description,
  path,
  keywords,
  robots,
}: PageMetadataInput): Metadata {
  return {
    title,
    description,
    ...(keywords ? { keywords } : {}),
    ...(robots ? { robots } : {}),
    alternates: {
      canonical: canonicalUrl(path),
    },
  };
}

export const noIndexMetadata: Metadata = {
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
      'max-video-preview': -1,
      'max-image-preview': 'none',
      'max-snippet': -1,
    },
  },
};
