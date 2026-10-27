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

function VideoEmbed({ youtubeId, appName }) {
  if (!youtubeId) {
    return (
      <div className="aspect-video w-full overflow-hidden rounded-card border border-card-border bg-ivory-alt">
        <div className="flex h-full flex-col items-center justify-center text-center p-8">
          <svg className="h-16 w-16 text-muted/30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <p className="mt-4 text-sm text-muted">Video demo coming soon</p>
        </div>
      </div>
    );
  }

  return (
    <div className="aspect-video w-full overflow-hidden rounded-card border border-card-border">
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&mute=1&playsinline=1&loop=1&rel=0`}
        title={`${appName} demo video`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="h-full w-full"
      />
    </div>
  );
}

function HowItWorksStep({ step, index, total }) {
  const hasScreenshot = step.screenshot && !step.screenshot.includes('placeholder');
  
  return (
    <div className="relative">
      {index < total - 1 && (
        <div className="absolute left-8 top-20 bottom-0 w-0.5 bg-gold/30" aria-hidden />
      )}
      <div className="relative flex gap-6">
        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-gold/10 text-2xl font-bold text-gold ring-4 ring-ivory">
          {step.step}
        </div>
        <div className="flex-1 pb-12">
          <h3 className="font-display text-xl font-semibold text-ink">{step.title}</h3>
          <p className="mt-2 text-muted">{step.description}</p>
          {hasScreenshot && (
            <img 
              src={step.screenshot} 
              alt={step.title}
              className="mt-4 w-48 rounded-lg border border-card-border shadow-md"
            />
          )}
        </div>
      </div>
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
                <VideoEmbed youtubeId={app.youtubeId} appName={app.name} />
              </div>
            </section>
          )}

          {/* How It Works Section */}
          {!app.comingSoon && app.howItWorks && app.howItWorks.length > 0 && (
            <section className="section-padding bg-ivory-alt">
              <div className="container-narrow mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                  <span className="eyebrow">Simple & Intuitive</span>
                  <h2 className="mt-4 font-display text-3xl font-semibold text-ink sm:text-4xl">
                    How It Works
                  </h2>
                  <p className="mt-4 text-lg text-muted">Get started in minutes with our easy workflow</p>
                </div>

                <div className="mx-auto max-w-3xl">
                  {app.howItWorks.map((step, index) => (
                    <HowItWorksStep
                      key={step.step}
                      step={step}
                      index={index}
                      total={app.howItWorks.length}
                    />
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* Features Section */}
          {app.features && app.features.length > 0 && (
            <section className="section-padding">
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
            <section className="section-padding bg-ivory-alt">
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
            <section className="section-padding">
              <div className="container-narrow mx-auto px-4 sm:px-6 lg:px-8">
                <div className="card mx-auto max-w-3xl p-8 text-center lg:p-12">
                  <h2 className="font-display text-3xl font-semibold text-ink">
                    Ready to get started?
                  </h2>
                  <p className="mt-4 text-lg text-muted">
                    Join thousands of users who love {app.name}
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
