import SectionHeading from '../components/SectionHeading';
import { brand } from '../data/brand';

const expertise = [
  {
    title: 'Software Development',
    description:
      'Full-stack web and mobile applications with clean architecture and maintainable codebases.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    ),
  },
  {
    title: 'Mobile Applications',
    description:
      'Native-quality iOS and Android apps with React Native and platform-specific optimizations.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
    ),
  },
  {
    title: 'AI Integrations',
    description:
      'OpenAI, Claude, and Gemini integrations for intelligent features, automation, and copilots.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    ),
  },
  {
    title: 'SaaS Products',
    description:
      'Subscription apps, dashboards, and product foundations built for real-world use.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
    ),
  },
  {
    title: 'Cloud-Native Architecture',
    description:
      'AWS, Docker, and Kubernetes deployments designed for reliability, scale, and cost efficiency.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
    ),
  },
  {
    title: 'Automation Solutions',
    description:
      'Workflow automation, API integrations, and intelligent pipelines that save time and reduce errors.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
    ),
  },
];

export default function About() {
  return (
    <section id="about" className="section-padding scroll-mt-20 bg-surface-elevated/50">
      <div className="container-narrow mx-auto">
        <SectionHeading
          badge="Brand"
          title="About"
          highlight={brand.name}
          subtitle="Independent software products published under a personal tech brand."
        />

        <div className="mb-12 rounded-2xl glass-strong p-8 lg:p-10">
          <p className="rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white/50">
            {brand.legalNotice}
          </p>
          <p className="mt-6 text-lg leading-relaxed text-white/70">
            <span className="font-semibold text-white">{brand.name}</span> is the brand{' '}
            <span className="font-semibold text-white">{brand.developerName}</span> uses to publish
            mobile apps, SaaS tools, and AI-powered software as an independent developer.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-white/70">
            From idea to App Store, I design, build, and ship products for clients on Upwork, direct
            collaborations, and my own portfolio — combining modern engineering with thoughtful product
            design.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {expertise.map((item) => (
            <div
              key={item.title}
              className="gradient-border group rounded-2xl glass p-6 transition-all hover:bg-white/[0.05]"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-accent-blue/20 to-accent-purple/20 text-accent-blue">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {item.icon}
                </svg>
              </div>
              <h3 className="mb-2 font-semibold text-white">{item.title}</h3>
              <p className="text-sm leading-relaxed text-white/60">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
