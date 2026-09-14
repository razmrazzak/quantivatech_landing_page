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
        scrolled ? 'glass-strong shadow-glass' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
        <Link to="/" className="group flex shrink-0 items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-accent-blue to-accent-purple text-sm font-bold shadow-glow">
            Q
          </span>
          <span className="hidden text-lg font-semibold tracking-tight whitespace-nowrap sm:inline">
            Quantiva<span className="text-white/60"> Tech</span>
          </span>
        </Link>

        <ul className="hidden min-w-0 flex-1 flex-nowrap items-center justify-center gap-0.5 lg:flex xl:gap-1">
          {navLinks.map((link) => (
            <li key={link.href} className="shrink-0">
              <Link
                to={link.href}
                className="block whitespace-nowrap rounded-lg px-2 py-2 text-xs text-white/70 transition-colors hover:bg-white/5 hover:text-white xl:px-2.5 xl:text-sm"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex shrink-0 items-center gap-2">
          <Link
            to="/#contact"
            className="hidden whitespace-nowrap rounded-lg bg-gradient-to-r from-accent-blue to-accent-purple px-3 py-2 text-xs font-medium text-white shadow-glow transition-opacity hover:opacity-90 lg:inline-block xl:px-4 xl:text-sm"
          >
            Contact
          </Link>

          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 lg:hidden"
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            <span className="sr-only">Menu</span>
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
        <div className="glass-strong border-t border-white/10 lg:hidden">
          <ul className="flex flex-col gap-1 px-4 py-4">
            {mobileNavLinks.map((link) => (
              <li key={link.href}>
                <Link
                  to={link.href}
                  className="block rounded-lg px-4 py-3 text-white/80 hover:bg-white/5"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                to="/#contact"
                className="mt-2 block rounded-lg bg-gradient-to-r from-accent-blue to-accent-purple px-4 py-3 text-center font-medium"
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
