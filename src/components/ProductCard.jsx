import { Link } from 'react-router-dom';
import ProgressTracker, { StatusBadge } from './ProgressTracker';

function LinkButton({ href, label, icon }) {
  if (!href || href === '#') return null;
  return (
    <a
      href={href}
      className="inline-flex items-center gap-1.5 rounded-lg border border-card-border bg-card px-3 py-1.5 text-xs text-muted transition-colors hover:border-gold hover:text-gold"
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
    >
      {icon}
      {label}
    </a>
  );
}

const platformIcons = {
  iOS: (
    <svg className="h-3 w-3" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  ),
  Android: (
    <svg className="h-3 w-3" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.6 9.48l1.84-3.18c.16-.31.04-.69-.26-.85-.29-.15-.65-.06-.83.22l-1.88 3.24a11.5 11.5 0 00-8.94 0L5.65 5.67c-.19-.28-.55-.37-.84-.22-.3.16-.42.54-.26.85l1.84 3.18C4.17 11.04 2.5 13.9 2.5 17h19c0-3.1-1.67-5.96-3.9-7.52zM7 15.25a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5zm10 0a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5z" />
    </svg>
  ),
  Web: (
    <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
    </svg>
  ),
};

export default function ProductCard({ product }) {
  const formattedDate = new Date(product.lastUpdated).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
  
  const slug = product.showcaseId || product.name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');

  return (
    <article className="card group flex flex-col p-6 transition-all duration-300 hover:shadow-xl">
      <div className="mb-4 flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          {product.logoType === 'image' ? (
            <img
              src={product.logo}
              alt=""
              className="h-12 w-12 shrink-0 rounded-xl ring-1 ring-card-border"
              width={48}
              height={48}
            />
          ) : (
            <span
              className="flex h-12 w-12 items-center justify-center rounded-xl bg-ivory-alt text-2xl"
              aria-hidden
            >
              {product.logo}
            </span>
          )}
          <div>
            <h3 className="font-semibold text-ink group-hover:text-gold transition-colors">
              {product.name}
            </h3>
            <p className="text-xs text-gold">{product.category}</p>
          </div>
        </div>
        <StatusBadge status={product.status} />
      </div>

      <p className="mb-5 flex-1 text-sm leading-relaxed text-muted">{product.description}</p>

      <div className="mb-4">
        <ProgressTracker progress={product.progress} />
      </div>

      <div className="mb-4 flex flex-wrap gap-1.5">
        {product.platforms.map((platform) => (
          <span
            key={platform}
            className="inline-flex items-center gap-1 rounded-md bg-ivory-alt px-2 py-1 text-xs text-muted"
          >
            {platformIcons[platform]}
            {platform}
          </span>
        ))}
      </div>

      <div className="mb-4 flex flex-wrap gap-2">
        {product.showcaseId && (
          <Link
            to={`/apps/${slug}`}
            className={`inline-flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-xs font-semibold transition-colors ${
              product.status === 'Live'
                ? 'border-gold bg-gold/10 text-gold hover:bg-gold/20'
                : 'border-gold/50 bg-gold/5 text-gold/80 hover:bg-gold/10'
            }`}
          >
            <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
            Learn More
          </Link>
        )}
        <LinkButton href={product.websiteUrl} label="Website" icon={platformIcons.Web} />
        <LinkButton href={product.iosUrl} label="App Store" icon={platformIcons.iOS} />
        <LinkButton href={product.androidUrl} label="Google Play" icon={platformIcons.Android} />
      </div>

      <p className="text-xs text-muted/70">Last updated {formattedDate}</p>
    </article>
  );
}
