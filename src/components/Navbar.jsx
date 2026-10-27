import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { navLinks, mobileNavLinks } from '../data/company';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'border-b border-card-border bg-ivory/85 backdrop-blur-xl shadow-sm' 
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-4 sm:px-6 lg:px-8">
        <Link to="/" className="group flex shrink-0 items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-ink text-sm font-bold text-white">
            Q
          </span>
          <span className="hidden font-display text-xl font-semibold tracking-tight whitespace-nowrap sm:inline text-ink">
            Quantiva<span className="text-muted"> Tech</span>
          </span>
        </Link>

        <ul className="hidden min-w-0 flex-1 flex-nowrap items-center justify-center gap-0.5 lg:flex xl:gap-1">
          {navLinks.map((link) => (
            <li key={link.href} className="shrink-0">
              <Link
                to={link.href}
                className="block whitespace-nowrap rounded-lg px-2 py-2 text-sm font-medium text-muted transition-colors hover:text-ink xl:px-3"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex shrink-0 items-center gap-2">
          <Link
            to="/#contact"
            className="hidden whitespace-nowrap rounded-pill bg-ink px-4 py-2.5 text-sm font-semibold text-white transition-opacity hover:bg-ink/90 lg:inline-block"
          >
            Contact
          </Link>

          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-card-border bg-card lg:hidden"
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            <span className="sr-only">Menu</span>
            <svg className="h-5 w-5 text-ink" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-card-border bg-ivory/95 backdrop-blur-xl lg:hidden">
          <ul className="flex flex-col gap-1 px-4 py-4">
            {mobileNavLinks.map((link) => (
              <li key={link.href}>
                <Link
                  to={link.href}
                  className="block rounded-lg px-4 py-3 text-ink hover:bg-card-border/30"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                to="/#contact"
                className="mt-2 block rounded-pill bg-ink px-4 py-3 text-center font-semibold text-white"
                onClick={() => setOpen(false)}
              >
                Get in Touch
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
