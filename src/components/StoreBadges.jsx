/**
 * Official-style App Store / Google Play badges.
 * Pass store URLs; missing URLs are omitted.
 */
export function AppStoreBadge({ href, className = '' }) {
  if (!href) return null;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-block transition-opacity hover:opacity-90 ${className}`}
      aria-label="Download on the App Store"
    >
      <img
        src="/images/badges/app-store.svg"
        alt="Download on the App Store"
        width={135}
        height={45}
        className="h-[45px] w-auto"
      />
    </a>
  );
}

export function GooglePlayBadge({ href, className = '' }) {
  if (!href) return null;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-block transition-opacity hover:opacity-90 ${className}`}
      aria-label="Get it on Google Play"
    >
      <img
        src="/images/badges/google-play.svg"
        alt="Get it on Google Play"
        width={152}
        height={45}
        className="h-[45px] w-auto"
      />
    </a>
  );
}

export default function StoreBadges({
  appStoreUrl,
  playStoreUrl,
  iosUrl,
  androidUrl,
  className = '',
}) {
  const ios = appStoreUrl || iosUrl;
  const android = playStoreUrl || androidUrl;
  if (!ios && !android) return null;

  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      <AppStoreBadge href={ios} />
      <GooglePlayBadge href={android} />
    </div>
  );
}
