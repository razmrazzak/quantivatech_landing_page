import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import ProgressTracker, { StatusBadge } from './ProgressTracker';
import { getLegalApp } from '../data/legal';
import {
  HERO_GALLERY_CLASS,
  PHONE_PREVIEW_MAX_WIDTH,
  PHONE_ASPECT_CLASS,
  THUMB_WIDTH_CLASS,
  HERO_SLIDE_INTERVAL_MS,
} from '../constants/showcase';

const themes = {
  orange: {
    badge: 'border-orange-500/30 bg-orange-500/10 text-orange-400',
    featureHover: 'hover:border-orange-500/20 hover:bg-orange-500/5',
    dotActive: 'bg-orange-400',
    shotActive: 'border-orange-400 shadow-glow',
    shotTag: 'bg-orange-500/20 text-orange-300',
    progressGlow: 'shadow-glow',
  },
  purple: {
    badge: 'border-accent-purple/30 bg-accent-purple/10 text-accent-purple',
    featureHover: 'hover:border-accent-purple/30 hover:bg-accent-purple/10',
    dotActive: 'bg-accent-purple',
    shotActive: 'border-accent-purple shadow-glow-purple',
    shotTag: 'bg-accent-purple/20 text-accent-purple',
    progressGlow: 'shadow-glow-purple',
  },
};

function AppStoreButton({ href }) {
  if (!href) return null;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-3 rounded-xl border border-white/15 bg-black px-5 py-3 transition-all hover:border-white/30 hover:bg-white/5"
    >
      <svg className="h-8 w-8 shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
      </svg>
      <span className="text-left">
        <span className="block text-[10px] leading-none text-white/60">Download on the</span>
        <span className="block text-lg font-semibold leading-tight text-white">App Store</span>
      </span>
    </a>
  );
}

export default function AppShowcase({ app }) {
  const [activeShot, setActiveShot] = useState(0);
  const [heroVariant, setHeroVariant] = useState(0);
  const [heroPaused, setHeroPaused] = useState(false);
  const heroImages = [app.heroBanner, app.heroAlt].filter(Boolean);
  const t = themes[app.theme] || themes.orange;
  const floatingIndices = app.floatingScreenshots || [0, 2, 4];
  const legal = getLegalApp(app.id);

  const goToHeroSlide = useCallback(
    (index) => {
      setHeroVariant(index % heroImages.length);
    },
    [heroImages.length]
  );

  const nextHeroSlide = useCallback(() => {
    setHeroVariant((v) => (v + 1) % heroImages.length);
  }, [heroImages.length]);

  useEffect(() => {
    if (heroImages.length <= 1 || heroPaused) return undefined;
    const id = setInterval(nextHeroSlide, HERO_SLIDE_INTERVAL_MS);
    return () => clearInterval(id);
  }, [heroImages.length, heroPaused, nextHeroSlide]);

  return (
    <section
      id={app.id}
      className="section-padding scroll-mt-20 overflow-hidden border-y border-white/5 bg-gradient-to-b from-surface via-surface-elevated/30 to-surface"
    >
      <div className="container-narrow mx-auto">
        <div className="mb-10 flex flex-col gap-6 lg:mb-14 lg:flex-row lg:items-end lg:justify-between">
          <div className="flex items-start gap-4">
            <img
              src={app.appIcon}
              alt=""
              className={`h-16 w-16 shrink-0 rounded-2xl ring-1 ring-white/10 sm:h-20 sm:w-20 ${t.progressGlow}`}
              width={80}
              height={80}
            />
            <div>
              <div className="mb-2 flex flex-wrap items-center gap-2">
                <span className={`rounded-full border px-3 py-0.5 text-xs font-medium ${t.badge}`}>
                  {app.badge}
                </span>
                <StatusBadge status={app.status} />
              </div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                <span className="gradient-text">{app.name}</span>
                <span className="text-white/80"> — {app.tagline}</span>
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/60 sm:text-base">
                {app.description}
              </p>
              {app.iosUrl && (
                <div className="mt-5">
                  <AppStoreButton href={app.iosUrl} />
                </div>
              )}
            </div>
          </div>
          <div className="w-full lg:max-w-xs">
            <ProgressTracker progress={app.progress} />
          </div>
        </div>

        {/* Hero gallery — fixed 2:1 frame, same size for all projects */}
        <div
          className="relative mb-12 w-full overflow-hidden rounded-2xl glass-strong lg:mb-16"
          onMouseEnter={() => setHeroPaused(true)}
          onMouseLeave={() => setHeroPaused(false)}
          onFocus={() => setHeroPaused(true)}
          onBlur={() => setHeroPaused(false)}
          role="region"
          aria-label={`${app.name} promotional gallery`}
          aria-roledescription="carousel"
        >
          <div className={`relative ${HERO_GALLERY_CLASS} bg-black/50`}>
            {heroImages.map((src, i) => (
              <img
                key={src}
                src={src}
                alt={`${app.name} — ${app.tagline}`}
                className={`absolute inset-0 h-full w-full object-contain object-center transition-opacity duration-700 ease-in-out ${
                  i === heroVariant ? 'opacity-100' : 'pointer-events-none opacity-0'
                }`}
                loading={i === 0 ? 'eager' : 'lazy'}
                draggable={false}
              />
            ))}
            <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-surface/80 via-transparent to-transparent" />
          </div>

          {heroImages.length > 1 && (
            <div className="absolute bottom-4 right-4 z-20 flex gap-2">
                {heroImages.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => goToHeroSlide(i)}
                    className={`h-2 rounded-full transition-all ${
                      heroVariant === i ? `w-8 ${t.dotActive}` : 'w-2 bg-white/30 hover:bg-white/50'
                    }`}
                    aria-label={`Show hero slide ${i + 1} of ${heroImages.length}`}
                    aria-current={heroVariant === i ? 'true' : undefined}
                  />
                ))}
            </div>
          )}
        </div>

        <div className="mb-12 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4 lg:mb-16">
          {app.features.map((f) => (
            <div
              key={f.title}
              className={`rounded-xl border border-white/8 bg-white/[0.03] p-4 text-center transition-colors ${t.featureHover}`}
            >
              <span className="text-2xl" aria-hidden>
                {f.icon}
              </span>
              <p className="mt-2 text-sm font-semibold text-white">{f.title}</p>
              <p className="mt-0.5 text-xs text-white/50">{f.description}</p>
            </div>
          ))}
        </div>

        <div>
          <h3 className="mb-2 text-center text-lg font-semibold text-white sm:text-xl">
            App Screenshots
          </h3>
          <p className="mb-8 text-center text-sm text-white/50">{app.gallerySubtitle}</p>

          {/* Phone preview — fixed 9:19.5 aspect, same width for all projects */}
          <div className={`mx-auto mb-8 w-full ${PHONE_PREVIEW_MAX_WIDTH}`}>
            <div
              className={`gradient-border overflow-hidden rounded-[1.6rem] bg-black p-2 sm:p-2.5 ${t.progressGlow}`}
            >
              <div
                className={`relative overflow-hidden rounded-[1.3rem] ring-1 ring-white/10 ${PHONE_ASPECT_CLASS} w-full bg-black`}
              >
                <img
                  src={app.screenshots[activeShot].src}
                  alt={app.screenshots[activeShot].alt}
                  className="absolute inset-0 h-full w-full object-cover object-top"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
              <span className={`rounded-full px-3 py-1 text-xs font-medium ${t.shotTag}`}>
                {app.screenshots[activeShot].label}
                {app.screenshots[activeShot].theme && (
                  <> · {app.screenshots[activeShot].theme === 'dark' ? 'Dark' : 'Light'} mode</>
                )}
              </span>
            </div>
          </div>

          <div className="flex gap-3 overflow-x-auto pb-2 sm:flex-wrap sm:justify-center sm:overflow-visible">
            {app.screenshots.map((shot, index) => (
              <button
                key={shot.src}
                type="button"
                onClick={() => setActiveShot(index)}
                className={`group shrink-0 overflow-hidden rounded-xl border-2 transition-all ${THUMB_WIDTH_CLASS} ${PHONE_ASPECT_CLASS} ${
                  activeShot === index
                    ? `${t.shotActive} scale-[1.02]`
                    : 'border-white/10 opacity-70 hover:border-white/25 hover:opacity-100'
                }`}
                aria-label={`View ${shot.label} screenshot`}
                aria-pressed={activeShot === index}
              >
                <img
                  src={shot.src}
                  alt=""
                  className="h-full w-full object-cover object-top"
                  loading="lazy"
                />
              </button>
            ))}
          </div>
        </div>

        <div className="mt-16 hidden items-end justify-center gap-4 lg:flex">
          {floatingIndices.map((idx, i) => {
            const shot = app.screenshots[idx];
            if (!shot) return null;
            return (
              <div
                key={shot.src}
                className={`w-[160px] shrink-0 overflow-hidden rounded-[1.4rem] border border-white/10 bg-black p-1.5 shadow-glass ${
                  i === 1 ? 'z-10 -mt-6 scale-105' : i === 0 ? '-rotate-6' : 'rotate-6'
                }`}
              >
                <div className={`relative ${PHONE_ASPECT_CLASS} w-full overflow-hidden rounded-[1.2rem] bg-black`}>
                  <img
                    src={shot.src}
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover object-top"
                    loading="lazy"
                  />
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 flex flex-col items-center gap-6 lg:mt-16">
          {app.iosUrl && <AppStoreButton href={app.iosUrl} />}
          {legal && (
            <p className="text-center text-xs text-white/40">
              <Link to={`/apps/${app.id}/privacy`} className="hover:text-white/70">
                Privacy Policy
              </Link>
              <span className="mx-2 text-white/20">·</span>
              <Link to={`/apps/${app.id}/terms`} className="hover:text-white/70">
                Terms & Conditions
              </Link>
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
