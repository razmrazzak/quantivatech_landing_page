import { Link } from 'react-router-dom';
import { brand } from '../data/brand';

export default function LegalLayout({ children }) {
  return (
    <div className="min-h-screen bg-ivory">
      <header className="border-b border-card-border bg-ivory/95 backdrop-blur-xl">
        <div className="container-narrow mx-auto flex items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link to="/" className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-ink text-sm font-bold text-white">
              Q
            </span>
            <span className="font-display text-xl font-semibold tracking-tight text-ink">
              Quantiva<span className="text-muted"> Tech</span>
            </span>
          </Link>
          <Link
            to="/"
            className="rounded-lg px-3.5 py-2 text-sm text-muted transition-colors hover:bg-card-border/30 hover:text-ink"
          >
            Home
          </Link>
        </div>
      </header>
      <main>{children}</main>
      <footer className="border-t border-card-border py-8 text-center text-xs text-muted">
        © {new Date().getFullYear()} {brand.developerName} · {brand.name} brand
      </footer>
    </div>
  );
}
