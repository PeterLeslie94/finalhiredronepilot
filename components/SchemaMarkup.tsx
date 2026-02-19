import { services } from '@/data/services';

export function LocalBusinessSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://hiredronepilot.uk/#organization',
    name: 'HireDronePilot',
    alternateName: 'HireDronePilot',
    image: 'https://hiredronepilot.uk/images/logo.png',
    description: 'Professional drone survey services across the UK. CAA approved aerial surveys for construction, infrastructure, and land management.',
    url: 'https://hiredronepilot.uk',
    telephone: '+44-1334-804554',
    email: 'quotes@hiredronepilot.uk',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Castlecroft Business Centre, Tom Johnston Road',
      addressLocality: 'Dundee',
      postalCode: 'DD4 8XD',
      addressCountry: 'GB',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 56.4620,
      longitude: -2.9173,
    },
    areaServed: {
      '@type': 'Country',
      name: 'United Kingdom',
    },
    priceRange: '££',
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '00:00',
      closes: '23:59',
    },
    hasCredential: [
      {
        '@type': 'EducationalOccupationalCredential',
        name: 'CAA GVC Certified',
        credentialCategory: 'Professional Certification',
      },
      {
        '@type': 'EducationalOccupationalCredential',
        name: 'ARPAS-UK Member',
        credentialCategory: 'Professional Membership',
      },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'HireDronePilot',
      itemListElement: services.map((service) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: service.title,
          description: service.shortDescription,
        },
      })),
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function WebSiteSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'HireDronePilot',
    alternateName: 'HireDronePilot',
    url: 'https://hiredronepilot.uk',
    description: 'Professional drone survey services across the UK. CAA approved aerial surveys for construction, infrastructure, and land management.',
    publisher: {
      '@id': 'https://hiredronepilot.uk/#organization',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function PersonSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Peter Leslie',
    jobTitle: 'Founder',
    description:
      'CAA-authorised drone professional and founder of HireDronePilot, connecting UK clients with independent drone pilots.',
    worksFor: {
      '@id': 'https://hiredronepilot.uk/#organization',
    },
    knowsAbout: ['Drone Operations', 'Drone Surveys', 'Aerial Imaging', 'Commercial Drone Services', 'UK Drone Compliance'],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function FAQSchema({ faqs }: { faqs: { question: string; answer: string }[] }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function BreadcrumbSchema({ items }: { items: { name: string; url: string }[] }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ServiceSchema({
  name,
  description,
  url
}: {
  name: string;
  description: string;
  url: string;
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    url,
    provider: {
      '@type': 'LocalBusiness',
      name: 'HireDronePilot',
      '@id': 'https://hiredronepilot.uk/#organization',
    },
    areaServed: {
      '@type': 'Country',
      name: 'United Kingdom',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function BlogListingSchema({
  articles
}: {
  articles: Array<{
    title: string;
    url: string;
    datePublished: string;
    author: string;
    image: string;
    description: string;
  }>;
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'HireDronePilot Blog',
    url: 'https://hiredronepilot.uk/blog',
    publisher: {
      '@type': 'Organization',
      name: 'HireDronePilot',
    },
    blogPost: articles.map((a) => ({
      '@type': 'BlogPosting',
      headline: a.title,
      url: a.url,
      datePublished: a.datePublished,
      author: {
        '@type': 'Person',
        name: a.author,
      },
      image: a.image,
      description: a.description,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function BlogPostingSchema({
  article
}: {
  article: {
    title: string;
    excerpt: string;
    featuredImage: string;
    publishedDate: string;
    author: {
      name: string;
      role: string;
    };
    tags: string[];
    slug: string;
    category: {
      name: string;
    };
  };
}) {
  const schemaImage = article.featuredImage.startsWith('http')
    ? article.featuredImage
    : `https://hiredronepilot.uk${article.featuredImage}`;

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: article.title,
    description: article.excerpt,
    image: schemaImage,
    datePublished: article.publishedDate,
    author: {
      '@type': 'Person',
      name: article.author.name,
      jobTitle: article.author.role,
    },
    publisher: {
      '@type': 'Organization',
      name: 'HireDronePilot',
    },
    mainEntityOfPage: `https://hiredronepilot.uk/blog/${article.slug}`,
    keywords: article.tags.join(', '),
    articleSection: article.category.name,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
