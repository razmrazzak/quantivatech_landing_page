import { useEffect, useRef, useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { getAppPage } from '../data/appPages';

function AppStoreButton({ href, label = 'Download on the App Store' }) {
  if (!href) return null;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-3 rounded-pill border border-card-border bg-ink px-6 py-3 transition-all hover:shadow-lg"
    >
      <svg className="h-8 w-8 shrink-0 text-white" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
      </svg>
      <span className="text-left">
        <span className="block text-[10px] leading-none text-white/80">{label.split('on the')[0]}</span>
        <span className="block text-lg font-semibold leading-tight text-white">{label.includes('on the') ? label.split('on the')[1] : 'App Store'}</span>
      </span>
    </a>
  );
}

function useReveal(options = { threshold: 0.2 }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;
    if (
      typeof window === 'undefined' ||
      !('IntersectionObserver' in window) ||
      window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
    ) {
      setVisible(true);
      return undefined;
    }
    const observer = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        setVisible(true);
        observer.disconnect();
      }
    }, options);
    observer.observe(node);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return [ref, visible];
}

function PhoneFrame({ src, alt, className = '', loading = 'lazy' }) {
  return (
    <div
      className={`relative rounded-[2.4rem] bg-ink p-[9px] shadow-[0_24px_60px_rgba(20,33,61,0.22)] ring-1 ring-ink/10 ${className}`}
    >
      <div className="pointer-events-none absolute left-1/2 top-[15px] z-10 h-[14px] w-[30%] -translate-x-1/2 rounded-pill bg-ink" aria-hidden />
      <div className="overflow-hidden rounded-[1.9rem] bg-card">
        <img
          src={src}
          alt={alt}
          loading={loading}
          width={473}
          height={1024}
          className="block aspect-[473/1024] w-full object-cover object-top"
        />
      </div>
    </div>
  );
}

function VideoEmbed({ youtubeId, appName, poster = [] }) {
  if (youtubeId) {
    const params = `autoplay=1&mute=1&playsinline=1&loop=1&playlist=${youtubeId}&rel=0`;
    return (
      <div className="relative w-full overflow-hidden rounded-card border border-card-border bg-ink shadow-card">
        <div className="relative aspect-video w-full">
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${youtubeId}?${params}`}
            title={`${appName} demo video`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
            className="absolute inset-0 h-full w-full"
          />
        </div>
      </div>
    );
  }

  const [left, center, right] = poster;

  return (
    <figure className="relative w-full overflow-hidden rounded-card border border-card-border bg-gradient-to-br from-ivory via-[#f6eee0] to-[#e9d9bb] shadow-card">
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-gold/20 blur-3xl" aria-hidden />
      <div className="pointer-events-none absolute -bottom-32 -left-16 h-72 w-72 rounded-full bg-white/70 blur-3xl" aria-hidden />

      <div className="relative flex items-end justify-center gap-4 px-6 pt-10 sm:gap-8 sm:pt-14">
        {left && (
          <PhoneFrame src={left} alt="" className="hidden w-36 translate-y-6 -rotate-6 opacity-90 sm:block lg:w-44" />
        )}
        {center && (
          <PhoneFrame src={center} alt={`${appName} app screen`} className="w-44 translate-y-2 sm:w-52 lg:w-60" />
        )}
        {right && (
          <PhoneFrame src={right} alt="" className="hidden w-36 translate-y-6 rotate-6 opacity-90 sm:block lg:w-44" />
        )}

        <div className="absolute inset-0 flex items-center justify-center" aria-hidden>
          <span className="flex h-20 w-20 items-center justify-center rounded-full bg-white/90 shadow-[0_12px_40px_rgba(20,33,61,0.25)] ring-1 ring-gold/40 backdrop-blur sm:h-24 sm:w-24">
            <svg viewBox="0 0 24 24" className="ml-1 h-9 w-9 text-gold sm:h-10 sm:w-10" fill="currentColor">
              <path d="M8 5.14v13.72a1 1 0 0 0 1.52.85l10.97-6.86a1 1 0 0 0 0-1.7L9.52 4.29A1 1 0 0 0 8 5.14z" />
            </svg>
          </span>
        </div>
      </div>

      <figcaption className="relative border-t border-card-border/80 bg-card/80 px-6 py-4 text-center text-sm font-medium text-muted backdrop-blur">
        Video coming soon
      </figcaption>
    </figure>
  );
}

function FlowArrow({ flip }) {
  const [ref, visible] = useReveal({ threshold: 0.6 });
  return (
    <div ref={ref} className="flex justify-center py-2 sm:py-3" aria-hidden>
      <svg
        viewBox="0 0 200 140"
        className={`h-28 w-40 text-gold transition-opacity duration-500 sm:h-36 sm:w-52 ${flip ? '-scale-x-100' : ''} ${visible ? 'opacity-100' : 'opacity-0'}`}
        fill="none"
      >
        <path
          d="M64 14 C 64 74, 136 58, 136 112"
          stroke="currentColor"
          strokeOpacity="0.18"
          strokeWidth="14"
          strokeLinecap="round"
        />
        <path
          d="M64 14 C 64 74, 136 58, 136 112"
          stroke="currentColor"
          strokeWidth="4.5"
          strokeLinecap="round"
          pathLength="1"
          strokeDasharray="1"
          strokeDashoffset={visible ? 0 : 1}
          style={{ transition: 'stroke-dashoffset 900ms ease-out' }}
        />
        <path
          d="M121 106 L136 132 L151 106 Z"
          fill="currentColor"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinejoin="round"
          className={`transition-opacity delay-700 duration-300 ${visible ? 'opacity-100' : 'opacity-0'}`}
        />
        <circle cx="64" cy="14" r="7" fill="currentColor" />
        <circle cx="64" cy="14" r="12" stroke="currentColor" strokeOpacity="0.3" strokeWidth="2" />
      </svg>
    </div>
  );
}

function FlowStep({ step, index }) {
  const [ref, visible] = useReveal({ threshold: 0.15 });
  const reversed = index % 2 === 1;

  return (
    <article
      ref={ref}
      className={`card overflow-hidden transition-all duration-700 ease-out ${visible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}
    >
      <div className="grid items-center gap-8 p-6 sm:p-10 md:grid-cols-2 md:gap-12 lg:p-12">
        <div className={reversed ? 'md:order-2' : ''}>
          <div className="flex items-center gap-3">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gold font-display text-xl font-semibold text-white shadow-md">
              {step.step}
            </span>
            <span className="eyebrow">Step {step.step}</span>
          </div>
          <h3 className="mt-5 font-display text-2xl font-semibold leading-snug text-ink sm:text-3xl">
            {step.title}
          </h3>
          <p className="mt-4 text-lg leading-relaxed text-muted">{step.description}</p>
        </div>

        <div className={`flex justify-center ${reversed ? 'md:order-1' : ''}`}>
          <div className="relative">
            <div className="absolute inset-x-6 bottom-0 top-10 rounded-full bg-gold/15 blur-2xl" aria-hidden />
            <PhoneFrame src={step.screenshot} alt={step.alt || step.title} className="relative w-56 sm:w-64 lg:w-72" />
          </div>
        </div>
      </div>
    </article>
  );
}

function ScreenshotGallery({ screenshots }) {
  return (
    <div className="flex flex-wrap justify-center gap-x-4 gap-y-10 sm:gap-x-6 lg:gap-x-4">
      {screenshots.map((shot) => (
        <figure
          key={shot.src}
          className={`w-36 sm:w-40 ${screenshots.length > 6 ? 'lg:w-[8.5rem]' : 'lg:w-[9.5rem]'}`}
        >
          <PhoneFrame src={shot.src} alt={shot.alt} />
          <figcaption className="mt-3 text-center text-sm font-medium text-muted">{shot.label}</figcaption>
        </figure>
      ))}
    </div>
  );
}

export default function AppDetailPage() {
  const { slug } = useParams();
  const app = getAppPage(slug);

  if (!app) {
    return <Navigate to="/" replace />;
  }

  const canonicalUrl = `https://quantivatech.com/apps/${app.slug}`;
  const pageTitle = `${app.name} — ${app.tagline}`;
  const appType = app.appStoreUrl || app.playStoreUrl ? 'MobileApplication' : 'SoftwareApplication';

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': appType,
    name: app.name,
    description: app.description,
    applicationCategory: 'BusinessApplication',
    operatingSystem: app.appStoreUrl && app.playStoreUrl ? 'iOS, Android' : app.appStoreUrl ? 'iOS' : app.playStoreUrl ? 'Android' : undefined,
    offers: app.appStoreUrl || app.playStoreUrl ? {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
      url: app.appStoreUrl || app.playStoreUrl,
    } : undefined,
  };

  return (
    <HelmetProvider>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={app.description} />
        <meta name="keywords" content={app.keywords.join(', ')} />
        <link rel="canonical" href={canonicalUrl} />
        
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={app.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        {typeof app.appIcon === 'string' && app.appIcon.startsWith('/') && (
          <meta property="og:image" content={`https://quantivatech.com${app.appIcon}`} />
        )}
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={app.description} />
        
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-ivory">
        <Navbar />
        
        <main>
          {/* Hero Section */}
          <section className="bg-hero-gradient pt-24 pb-16">
            <div className="container-narrow mx-auto px-4 sm:px-6 lg:px-8">
              <Link
                to="/#products"
                className="mb-8 inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-ink"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to Products
              </Link>

              <div className="flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-4">
                    {typeof app.appIcon === 'string' && app.appIcon.startsWith('/') ? (
                      <img
                        src={app.appIcon}
                        alt=""
                        className="h-20 w-20 rounded-2xl ring-2 ring-card-border shadow-lg"
                        width={80}
                        height={80}
                      />
                    ) : (
                      <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-ivory-alt text-4xl shadow-lg">
                        {app.appIcon}
                      </div>
                    )}
                    <div>
                      {app.comingSoon && (
                        <span className="inline-block rounded-pill bg-gold/20 px-3 py-1 text-xs font-semibold text-gold mb-2">
                          Coming Soon
                        </span>
                      )}
                      <h1 className="font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
                        {app.name}
                      </h1>
                      <p className="mt-2 text-xl text-gold">{app.tagline}</p>
                    </div>
                  </div>
                  
                  <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
                    {app.description}
                  </p>

                  {!app.comingSoon && (
                    <div className="mt-8 flex flex-wrap gap-4">
                      {app.appStoreUrl && <AppStoreButton href={app.appStoreUrl} />}
                      {app.playStoreUrl && (
                        <AppStoreButton href={app.playStoreUrl} label="Get it on Google Play" />
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </section>

          {/* Video Section */}
          {!app.comingSoon && (
            <section className="section-padding">
              <div className="container-narrow mx-auto px-4 sm:px-6 lg:px-8">
                <VideoEmbed youtubeId={app.youtubeId} appName={app.name} poster={app.videoPoster || []} />
              </div>
            </section>
          )}

          {/* How It Works Section */}
          {!app.comingSoon && app.howItWorks && app.howItWorks.length > 0 && (
            <section className="section-padding bg-ivory-alt">
              <div className="container-narrow mx-auto px-0 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                  <span className="eyebrow">Simple & Intuitive</span>
                  <h2 className="mt-4 font-display text-3xl font-semibold text-ink sm:text-4xl">
                    How It Works
                  </h2>
                  <p className="mt-4 text-lg text-muted">Follow the steps from top to bottom to see what using the app looks like.</p>
                </div>

                <ol className="mx-auto max-w-5xl list-none p-0">
                  {app.howItWorks.map((step, index) => (
                    <li key={step.step}>
                      <FlowStep step={step} index={index} />
                      {index < app.howItWorks.length - 1 && <FlowArrow flip={index % 2 === 1} />}
                    </li>
                  ))}
                </ol>
              </div>
            </section>
          )}

          {/* Screenshots Gallery */}
          {!app.comingSoon && app.screenshots && app.screenshots.length > 0 && (
            <section className="section-padding">
              <div className="container-narrow mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                  <span className="eyebrow">Screenshots</span>
                  <h2 className="mt-4 font-display text-3xl font-semibold text-ink sm:text-4xl">
                    A closer look
                  </h2>
                </div>
                <ScreenshotGallery screenshots={app.screenshots} />
              </div>
            </section>
          )}

          {/* Features Section */}
          {app.features && app.features.length > 0 && (
            <section className="section-padding bg-ivory-alt">
              <div className="container-narrow mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                  <span className="eyebrow">Features</span>
                  <h2 className="mt-4 font-display text-3xl font-semibold text-ink sm:text-4xl">
                    Everything You Need
                  </h2>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {app.features.map((feature) => (
                    <div key={feature.title} className="card p-6 transition-all hover:shadow-xl">
                      <div className="text-4xl mb-4">{feature.icon}</div>
                      <h3 className="font-semibold text-ink mb-2">{feature.title}</h3>
                      <p className="text-sm text-muted">{feature.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* FAQ Section */}
          {!app.comingSoon && app.faq && app.faq.length > 0 && (
            <section className="section-padding">
              <div className="container-narrow mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                  <span className="eyebrow">FAQ</span>
                  <h2 className="mt-4 font-display text-3xl font-semibold text-ink sm:text-4xl">
                    Frequently Asked Questions
                  </h2>
                </div>

                <div className="mx-auto max-w-3xl space-y-6">
                  {app.faq.map((item) => (
                    <div key={item.question} className="card p-6">
                      <h3 className="font-semibold text-ink mb-2">{item.question}</h3>
                      <p className="text-sm text-muted leading-relaxed">{item.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* CTA Section */}
          {!app.comingSoon && (
            <section className="section-padding bg-ivory-alt">
              <div className="container-narrow mx-auto px-4 sm:px-6 lg:px-8">
                <div className="card mx-auto max-w-3xl p-8 text-center lg:p-12">
                  <h2 className="font-display text-3xl font-semibold text-ink">
                    Ready to get started?
                  </h2>
                  <p className="mt-4 text-lg text-muted">
                    {app.appStoreUrl || app.playStoreUrl
                      ? `Download ${app.name} and try it for yourself.`
                      : `${app.name} is launching soon.`}
                  </p>
                  
                  <div className="mt-8 flex flex-wrap justify-center gap-4">
                    {app.appStoreUrl && <AppStoreButton href={app.appStoreUrl} />}
                    {app.playStoreUrl && (
                      <AppStoreButton href={app.playStoreUrl} label="Get it on Google Play" />
                    )}
                  </div>

                  <div className="mt-8 flex justify-center gap-6 text-sm text-muted">
                    <Link to={`/apps/${app.id}/privacy`} className="hover:text-ink">
                      Privacy Policy
                    </Link>
                    <span>·</span>
                    <Link to={`/apps/${app.id}/terms`} className="hover:text-ink">
                      Terms & Conditions
                    </Link>
                    {app.id === 'expense' && (
                      <>
                        <span>·</span>
                        <Link to="/apps/expense/delete-account" className="hover:text-ink">
                          Delete Account
                        </Link>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </section>
          )}
        </main>

        <Footer />
      </div>
    </HelmetProvider>
  );
}
