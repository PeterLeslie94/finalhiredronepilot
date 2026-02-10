import Link from 'next/link';
import Image from 'next/image';

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  href: string;
  ctaText?: string;
}

export default function ServiceCard({ title, description, image, href, ctaText }: ServiceCardProps) {
  const buttonText = ctaText || `Explore ${title} Services`;

  return (
    <article className="service-card group" itemScope itemType="https://schema.org/Service">
      <div className="service-card-image">
        {/* Background - use image if available, otherwise gradient placeholder */}
        {image ? (
          <Image
            src={image}
            alt={`${title} - Professional drone survey service in the UK`}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <>
            <div className="absolute inset-0 bg-gradient-to-br from-teal-light to-teal-dark" />
            <div className="absolute inset-0 flex items-center justify-center">
              <svg className="w-16 h-16 text-white/20" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </div>
          </>
        )}
        <div className="service-card-overlay">
          <h3 className="service-card-title" itemProp="name">{title}</h3>
          <p className="service-card-description line-clamp-2" itemProp="description">{description}</p>
          <Link href={href} className="btn btn-outline text-sm py-2 px-4" aria-label={buttonText}>
            {buttonText}
          </Link>
        </div>
      </div>
    </article>
  );
}
