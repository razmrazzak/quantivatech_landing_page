import { Link } from 'react-router-dom';
import { brand } from '../data/brand';

export default function LegalLayout({ children }) {
  return (
    <div className="min-h-screen bg-surface">
      <header className="border-b border-white/10 glass-strong">
        <div className="container-narrow mx-auto flex items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link to="/" className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-accent-blue to-accent-purple text-sm font-bold">
              Q
            </span>
            <span className="text-lg font-semibold tracking-tight">
              Quantiva<span className="text-white/60"> Tech</span>
            </span>
          </Link>
          <Link
            to="/"
            className="rounded-lg px-3.5 py-2 text-sm text-white/70 transition-colors hover:bg-white/5 hover:text-white"
          >
            Home
          </Link>
        </div>
      </header>
      <main>{children}</main>
      <footer className="border-t border-white/10 py-8 text-center text-xs text-white/40">
        © {new Date().getFullYear()} {brand.developerName} · {brand.name} brand
      </footer>
    </div>
  );
}
