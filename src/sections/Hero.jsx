import { metrics } from '../data/company';
import { brand } from '../data/brand';

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-hero-gradient pt-24 pb-16 sm:pt-28 lg:pt-32">
      <div className="container-narrow relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <div className="animate-fade-in-up mb-6 inline-flex items-center gap-2 rounded-pill border border-card-border bg-card px-4 py-2 text-sm text-muted">
            <span className="h-2 w-2 rounded-full bg-gold animate-pulse" />
            Independent studio · Frankfurt am Main
          </div>

          <h1 className="animate-fade-in-up animation-delay-100 font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Building{' '}
            <em className="gradient-text">AI-Powered Products</em>
            <br />
            That Solve Real Problems
          </h1>

          <p className="animate-fade-in-up animation-delay-200 mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg lg:text-xl">
            {brand.developerName} builds modern mobile apps, SaaS platforms, and AI-powered tools
            under the <span className="text-ink">{brand.name}</span> brand — for businesses,
            creators, and everyday users.
          </p>

          <div className="animate-fade-in-up animation-delay-300 mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#products"
              className="btn-primary w-full sm:w-auto"
            >
              View Products
            </a>
            <a
              href="#contact"
              className="btn-secondary w-full sm:w-auto"
            >
              Contact Us
            </a>
          </div>
        </div>

        <div className="animate-fade-in-up animation-delay-400 mx-auto mt-16 grid max-w-3xl grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6 lg:mt-20">
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="card px-4 py-6 text-center transition-transform hover:scale-[1.02]"
            >
              <p className="font-display text-3xl font-semibold text-ink sm:text-4xl">{metric.value}</p>
              <p className="mt-2 text-sm text-muted">{metric.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
