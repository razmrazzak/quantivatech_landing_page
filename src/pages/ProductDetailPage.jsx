import { useState, useEffect, useCallback } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProgressTracker, { StatusBadge } from '../components/ProgressTracker';
import { getProductBySlug } from '../data/productsData';
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
    backButton: 'border-orange-500/30 bg-orange-500/10 text-orange-300 hover:border-orange-500/50 hover:bg-orange-500/20',
  },
  purple: {
    badge: 'border-accent-purple/30 bg-accent-purple/10 text-accent-purple',
    featureHover: 'hover:border-accent-purple/30 hover:bg-accent-purple/10',
    dotActive: 'bg-accent-purple',
    shotActive: 'border-accent-purple shadow-glow-purple',
    shotTag: 'bg-accent-purple/20 text-accent-purple',
    progressGlow: 'shadow-glow-purple',
    backButton: 'border-accent-purple/30 bg-accent-purple/10 text-accent-purple hover:border-accent-purple/50 hover:bg-accent-purple/20',
  },
  cyan: {
    badge: 'border-accent-cyan/30 bg-accent-cyan/10 text-accent-cyan',
    featureHover: 'hover:border-accent-cyan/30 hover:bg-accent-cyan/10',
    dotActive: 'bg-accent-cyan',
    shotActive: 'border-accent-cyan shadow-glow',
    shotTag: 'bg-accent-cyan/20 text-accent-cyan',
    progressGlow: 'shadow-glow',
    backButton: 'border-accent-cyan/30 bg-accent-cyan/10 text-accent-cyan hover:border-accent-cyan/50 hover:bg-accent-cyan/20',
  },
};

function AppStoreButton({ href, platform = 'ios' }) {
  if (!href) return null;
  
  const isIOS = platform === 'ios';
  const label = isIOS ? 'App Store' : 'Google Play';
  
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-3 rounded-xl border border-white/15 bg-black px-5 py-3 transition-all hover:border-white/30 hover:bg-white/5"
    >
      {isIOS ? (
        <svg className="h-8 w-8 shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
        </svg>
      ) : (
        <svg className="h-8 w-8 shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
        </svg>
      )}
      <span className="text-left">
        <span className="block text-[10px] leading-none text-white/60">
          {isIOS ? 'Download on the' : 'Get it on'}
        </span>
        <span className="block text-lg font-semibold leading-tight text-white">{label}</span>
      </span>
    </a>
  );
}

function WaitlistButton() {
  return (
    <a
      href="mailto:hello@quantivatech.com?subject=Notify me when available"
      className="inline-flex items-center gap-3 rounded-xl border border-white/15 bg-black px-5 py-3 transition-all hover:border-white/30 hover:bg-white/5"
    >
      <svg className="h-8 w-8 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
      </svg>
      <span className="text-left">
        <span className="block text-[10px] leading-none text-white/60">Notify me when</span>
        <span className="block text-lg font-semibold leading-tight text-white">Available</span>
      </span>
    </a>
  );
}

export default function ProductDetailPage() {
  const { slug } = useParams();
  const product = getProductBySlug(slug);
  
  const [activeShot, setActiveShot] = useState(0);
  const [heroVariant, setHeroVariant] = useState(0);
  const [heroPaused, setHeroPaused] = useState(false);
  
  if (!product) {
    return <Navigate to="/" replace />;
  }
  
  const heroImages = [product.heroBanner, product.heroAlt].filter(Boolean);
  const t = themes[product.theme] || themes.orange;
  const screenshots = product.screenshots || [];
  const floatingIndices = product.floatingScreenshots || [0, 2, 4];
  const highlights = product.highlights || [];
  
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
  
  const hasStoreLinks = product.iosUrl || product.androidUrl;
  const pageTitle = `${product.name} — ${product.tagline} | Quantiva Tech`;
  const pageDescription = product.description;

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        {product.logo && <meta property="og:image" content={`https://quantivatech-landing-page.onrender.com${product.logo}`} />}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
      </Helmet>

      <Navbar />
      <main className="min-h-screen bg-surface">
        <section className="section-padding overflow-hidden border-b border-white/5 bg-gradient-to-b from-surface via-surface-elevated/30 to-surface">
          <div className="container-narrow mx-auto">
            <Link
              to="/#products"
              className={`mb-8 inline-flex items-center gap-2 rounded-lg border px-4 py-2 text-sm font-medium transition-colors ${t.backButton}`}
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Products
            </Link>

            <div className="mb-10 flex flex-col gap-6 lg:mb-14 lg:flex-row lg:items-end lg:justify-between">
              <div className="flex items-start gap-4">
                <img
                  src={product.logo}
                  alt=""
                  className={`h-16 w-16 shrink-0 rounded-2xl ring-1 ring-white/10 sm:h-20 sm:w-20 ${t.progressGlow}`}
                  width={80}
                  height={80}
                />
                <div>
                  <div className="mb-2 flex flex-wrap items-center gap-2">
                    <span className={`rounded-full border px-3 py-0.5 text-xs font-medium ${t.badge}`}>
                      {product.badge}
                    </span>
                    <StatusBadge status={product.status} />
                  </div>
                  <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
                    <span className="gradient-text">{product.name}</span>
                    <span className="text-white/80"> — {product.tagline}</span>
                  </h1>
                  <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/60 sm:text-base">
                    {product.description}
                  </p>
                  {(hasStoreLinks || !hasStoreLinks) && (
                    <div className="mt-5 flex flex-wrap gap-3">
                      {product.iosUrl && <AppStoreButton href={product.iosUrl} platform="ios" />}
                      {product.androidUrl && <AppStoreButton href={product.androidUrl} platform="android" />}
                      {!hasStoreLinks && <WaitlistButton />}
                    </div>
                  )}
                </div>
              </div>
              <div className="w-full lg:max-w-xs">
                <ProgressTracker progress={product.progress} />
              </div>
            </div>

            {heroImages.length > 0 && (
              <div
                className="relative mb-12 w-full overflow-hidden rounded-2xl glass-strong lg:mb-16"
                onMouseEnter={() => setHeroPaused(true)}
                onMouseLeave={() => setHeroPaused(false)}
                onFocus={() => setHeroPaused(true)}
                onBlur={() => setHeroPaused(false)}
                role="region"
                aria-label={`${product.name} promotional gallery`}
                aria-roledescription="carousel"
              >
                <div className={`relative ${HERO_GALLERY_CLASS} bg-black/50`}>
                  {heroImages.map((src, i) => (
                    <img
                      key={src}
                      src={src}
                      alt={`${product.name} — ${product.tagline}`}
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
            )}

            <div className="mb-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6 lg:mb-16">
              {product.features.map((f) => (
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

            {highlights.length > 0 && (
              <div className="mb-12 grid gap-4 sm:grid-cols-3 lg:mb-16">
                {highlights.map((item) => (
                  <div
                    key={item.title}
                    className="gradient-border rounded-2xl glass p-5 transition-colors hover:bg-white/[0.05]"
                  >
                    <h3 className="font-semibold text-white">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/60">{item.body}</p>
                  </div>
                ))}
              </div>
            )}

            {screenshots.length > 0 && (
              <div>
                <h2 className="mb-2 text-center text-lg font-semibold text-white sm:text-xl">
                  App Screenshots
                </h2>
                <p className="mb-8 text-center text-sm text-white/50">{product.gallerySubtitle}</p>

                <div className={`mx-auto mb-8 w-full ${PHONE_PREVIEW_MAX_WIDTH}`}>
                  <div
                    className={`gradient-border overflow-hidden rounded-[1.6rem] bg-black p-2 sm:p-2.5 ${t.progressGlow}`}
                  >
                    <div
                      className={`relative overflow-hidden rounded-[1.3rem] ring-1 ring-white/10 ${PHONE_ASPECT_CLASS} w-full bg-black`}
                    >
                      <img
                        src={screenshots[activeShot].src}
                        alt={screenshots[activeShot].alt}
                        className="absolute inset-0 h-full w-full object-cover object-top"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
                    <span className={`rounded-full px-3 py-1 text-xs font-medium ${t.shotTag}`}>
                      {screenshots[activeShot].label}
                      {screenshots[activeShot].theme && (
                        <> · {screenshots[activeShot].theme === 'dark' ? 'Dark' : 'Light'} mode</>
                      )}
                    </span>
                  </div>
                </div>

                <div className="flex gap-3 overflow-x-auto pb-2 sm:flex-wrap sm:justify-center sm:overflow-visible">
                  {screenshots.map((shot, index) => (
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

                <div className="mt-16 hidden items-end justify-center gap-4 lg:flex">
                  {floatingIndices.map((idx, i) => {
                    const shot = screenshots[idx];
                    if (!shot) return null;
                    return (
                      <div
                        key={shot.src}
                        className={`w-[160px] shrink-0 overflow-hidden rounded-[1.4rem] border border-white/10 bg-black p-1.5 shadow-glass ${
                          i === 1 ? 'z-10 -mt-6 scale-105' : i === 0 ? '-rotate-6' : 'rotate-6'
                        }`}
                      >
                        <div
                          className={`relative ${PHONE_ASPECT_CLASS} w-full overflow-hidden rounded-[1.2rem] bg-black`}
                        >
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
              </div>
            )}

            <div className="mt-12 flex flex-col items-center gap-6 lg:mt-16">
              {product.iosUrl && <AppStoreButton href={product.iosUrl} platform="ios" />}
              {product.androidUrl && <AppStoreButton href={product.androidUrl} platform="android" />}
              {!hasStoreLinks && <WaitlistButton />}
              
              {(product.privacyUrl || product.termsUrl) && (
                <p className="text-center text-xs text-white/40">
                  {product.privacyUrl && (
                    <Link to={product.privacyUrl} className="hover:text-white/70">
                      Privacy Policy
                    </Link>
                  )}
                  {product.privacyUrl && product.termsUrl && (
                    <span className="mx-2 text-white/20">·</span>
                  )}
                  {product.termsUrl && (
                    <Link to={product.termsUrl} className="hover:text-white/70">
                      Terms & Conditions
                    </Link>
                  )}
                </p>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
