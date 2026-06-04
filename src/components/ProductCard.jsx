import ProgressTracker, { StatusBadge } from './ProgressTracker';

function LinkButton({ href, label, icon }) {
  if (!href || href === '#') return null;
  return (
    <a
      href={href}
      className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/70 transition-colors hover:border-white/20 hover:bg-white/10 hover:text-white"
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

  return (
    <article className="gradient-border group flex flex-col rounded-2xl glass p-6 transition-all duration-300 hover:border-white/15 hover:bg-white/[0.05] hover:shadow-glow">
      <div className="mb-4 flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          {product.logoType === 'image' ? (
            <img
              src={product.logo}
              alt=""
              className="h-12 w-12 shrink-0 rounded-xl shadow-inner ring-1 ring-white/10"
              width={48}
              height={48}
            />
          ) : (
            <span
              className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-white/10 to-white/5 text-2xl shadow-inner"
              aria-hidden
            >
              {product.logo}
            </span>
          )}
          <div>
            <h3 className="font-semibold text-white group-hover:text-accent-cyan/90 transition-colors">
              {product.name}
            </h3>
            <p className="text-xs text-accent-purple/80">{product.category}</p>
          </div>
        </div>
        <StatusBadge status={product.status} />
      </div>

      <p className="mb-5 flex-1 text-sm leading-relaxed text-white/60">{product.description}</p>

      <div className="mb-4">
        <ProgressTracker progress={product.progress} />
      </div>

      <div className="mb-4 flex flex-wrap gap-1.5">
        {product.platforms.map((platform) => (
          <span
            key={platform}
            className="inline-flex items-center gap-1 rounded-md bg-white/5 px-2 py-1 text-xs text-white/50"
          >
            {platformIcons[platform]}
            {platform}
          </span>
        ))}
      </div>

      <div className="mb-4 flex flex-wrap gap-2">
        {product.showcaseId && (
          <a
            href={`#${product.showcaseId}`}
            className={`inline-flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-xs font-medium transition-colors ${
              product.status === 'Live'
                ? 'border-accent-purple/30 bg-accent-purple/10 text-accent-purple hover:border-accent-purple/50 hover:bg-accent-purple/20'
                : 'border-orange-500/30 bg-orange-500/10 text-orange-300 hover:border-orange-500/50 hover:bg-orange-500/20'
            }`}
          >
            <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            View Screenshots
          </a>
        )}
        <LinkButton href={product.websiteUrl} label="Website" icon={platformIcons.Web} />
        <LinkButton href={product.iosUrl} label="App Store" icon={platformIcons.iOS} />
        <LinkButton href={product.androidUrl} label="Google Play" icon={platformIcons.Android} />
      </div>

      <p className="text-xs text-white/40">Last updated {formattedDate}</p>
    </article>
  );
}
