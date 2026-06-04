import { contact } from '../data/company';
import SectionHeading from '../components/SectionHeading';

const links = [
  {
    label: 'Email',
    value: contact.email,
    href: `mailto:${contact.email}`,
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    ),
  },
  {
    label: 'LinkedIn',
    value: 'Connect on LinkedIn',
    href: contact.linkedin,
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2V9zm2-6a2 2 0 110 4 2 2 0 010-4z"
      />
    ),
  },
  {
    label: 'GitHub',
    value: 'View our repositories',
    href: contact.github,
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
      />
    ),
  },
  {
    label: 'Upwork',
    value: 'Hire us on Upwork',
    href: contact.upwork,
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    ),
  },
];

export default function Contact() {
  return (
    <section id="contact" className="section-padding scroll-mt-20 bg-surface-elevated/50">
      <div className="container-narrow mx-auto">
        <SectionHeading
          badge="Get in Touch"
          title="Let's Build"
          highlight="Together"
          subtitle="Have a project in mind? Let's build something amazing together."
        />

        <div className="gradient-border mx-auto max-w-2xl rounded-2xl glass-strong p-8 text-center lg:p-12">
          <p className="text-lg text-white/80">
            Have a project in mind?{' '}
            <span className="font-semibold text-white">Let's build something amazing together.</span>
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="group flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-4 text-left transition-all hover:border-accent-blue/40 hover:bg-white/10 hover:shadow-glow"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-accent-blue/30 to-accent-purple/30 text-accent-blue group-hover:text-white">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    {link.icon}
                  </svg>
                </span>
                <span>
                  <span className="block text-xs font-medium uppercase tracking-wider text-white/50">
                    {link.label}
                  </span>
                  <span className="block text-sm font-medium text-white group-hover:text-accent-cyan">
                    {link.value}
                  </span>
                </span>
              </a>
            ))}
          </div>

          <a
            href={`mailto:${contact.email}`}
            className="mt-8 inline-flex rounded-xl bg-gradient-to-r from-accent-blue to-accent-purple px-8 py-3.5 font-semibold text-white shadow-glow transition-all hover:scale-[1.02] hover:opacity-95"
          >
            Start a Conversation
          </a>
        </div>
      </div>
    </section>
  );
}
