import { metrics } from '../data/company';
import { brand } from '../data/brand';

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden pt-24 pb-16 sm:pt-28 lg:pt-32">
      <div className="pointer-events-none absolute inset-0 bg-hero-glow" aria-hidden />
      <div
        className="pointer-events-none absolute -left-40 top-1/4 h-96 w-96 rounded-full bg-accent-blue/20 blur-[120px] animate-pulse-glow"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-40 top-1/3 h-96 w-96 rounded-full bg-accent-purple/20 blur-[120px] animate-pulse-glow animation-delay-200"
        aria-hidden
      />

      <div className="container-narrow relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <div className="animate-fade-in-up mb-6 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-sm text-white/70">
            <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
            Building the future of software
          </div>

          <h1 className="animate-fade-in-up animation-delay-100 text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Building{' '}
            <span className="gradient-text">AI-Powered Products</span>
            <br />
            That Solve Real Problems
          </h1>

          <p className="animate-fade-in-up animation-delay-200 mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/60 sm:text-lg">
            {brand.developerName} builds modern mobile apps, SaaS platforms, and AI-powered tools
            under the <span className="text-white/80">{brand.name}</span> brand — for businesses,
            creators, and everyday users.
          </p>

          <div className="animate-fade-in-up animation-delay-300 mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#products"
              className="w-full rounded-xl bg-gradient-to-r from-accent-blue to-accent-purple px-8 py-3.5 text-center font-semibold text-white shadow-glow transition-all hover:scale-[1.02] hover:opacity-95 sm:w-auto"
            >
              View Products
            </a>
            <a
              href="#contact"
              className="w-full rounded-xl border border-white/15 bg-white/5 px-8 py-3.5 text-center font-semibold text-white backdrop-blur transition-all hover:border-white/25 hover:bg-white/10 sm:w-auto"
            >
              Contact Us
            </a>
          </div>
        </div>

        <div className="animate-fade-in-up animation-delay-400 mx-auto mt-16 grid max-w-3xl grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6 lg:mt-20">
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="gradient-border rounded-2xl glass px-4 py-5 text-center transition-transform hover:scale-[1.02]"
            >
              <p className="text-2xl font-bold gradient-text sm:text-3xl">{metric.value}</p>
              <p className="mt-1 text-xs text-white/50 sm:text-sm">{metric.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float" aria-hidden>
        <a href="#products" className="flex flex-col items-center gap-2 text-white/30 hover:text-white/50">
          <span className="text-xs">Scroll</span>
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  );
}
