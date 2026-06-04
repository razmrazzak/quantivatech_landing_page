import { techStack } from '../data/company';
import SectionHeading from '../components/SectionHeading';

const categoryColors = {
  Frontend: 'from-blue-500/20 to-cyan-500/10 border-blue-500/30',
  Backend: 'from-green-500/20 to-emerald-500/10 border-green-500/30',
  Database: 'from-amber-500/20 to-orange-500/10 border-amber-500/30',
  Cloud: 'from-purple-500/20 to-violet-500/10 border-purple-500/30',
  AI: 'from-pink-500/20 to-rose-500/10 border-pink-500/30',
};

export default function TechStack() {
  return (
    <section id="tech-stack" className="section-padding scroll-mt-20">
      <div className="container-narrow mx-auto">
        <SectionHeading
          badge="Engineering"
          title="Technology"
          highlight="Stack"
          subtitle="Modern tools and frameworks we use to build scalable, production-ready software."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Object.entries(techStack).map(([category, tools]) => (
            <div
              key={category}
              className={`gradient-border rounded-2xl border bg-gradient-to-br p-6 glass ${categoryColors[category]}`}
            >
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/80">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {tools.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-sm font-medium text-white/90 transition-colors hover:border-white/20 hover:bg-white/10"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
