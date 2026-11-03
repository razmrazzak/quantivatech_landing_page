import { Link } from 'react-router-dom';
import { footerLinks, footerLegalApps } from '../data/company';
import { brand } from '../data/brand';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-card-border bg-ivory">
      <div className="container-narrow mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <Link to="/" className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-ink text-sm font-bold text-white">
                Q
              </span>
              <span className="font-display text-xl font-semibold text-ink">
                Quantiva<span className="text-muted"> Tech</span>
              </span>
            </Link>
            <p className="mt-3 max-w-sm text-sm text-muted leading-relaxed">
              Personal brand by {brand.developerName} — independent developer, not a registered
              company.
            </p>
          </div>

          <div className="flex flex-col gap-6 sm:flex-row sm:gap-12">
            <nav aria-label="Footer">
              <ul className="flex flex-wrap gap-x-6 gap-y-2">
                {footerLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="text-sm text-muted transition-colors hover:text-ink"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {footerLegalApps.length > 0 && (
              <nav aria-label="App legal">
                <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-gold">
                  App legal
                </p>
                <ul className="space-y-2">
                  {footerLegalApps.map((app) => (
                    <li key={app.id} className="text-sm text-muted">
                      <span className="font-medium text-ink">{app.name}</span>
                      <span className="mx-1.5 text-card-border">·</span>
                      <Link to={app.privacyHref} className="hover:text-ink">
                        Privacy
                      </Link>
                      <span className="mx-1 text-card-border">/</span>
                      <Link to={app.termsHref} className="hover:text-ink">
                        Terms
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            )}
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-card-border pt-8 sm:flex-row">
          <p className="text-sm text-muted">
            © {year} {brand.developerName} · {brand.name} brand
          </p>
          <p className="text-xs text-muted/70">Crafted with React & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}
