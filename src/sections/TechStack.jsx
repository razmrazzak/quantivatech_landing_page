import { techStack } from '../data/company';
import SectionHeading from '../components/SectionHeading';

const categoryColors = {
  Frontend: 'border-blue-200 bg-blue-50',
  Backend: 'border-green-200 bg-green-50',
  Database: 'border-amber-200 bg-amber-50',
  Cloud: 'border-purple-200 bg-purple-50',
  AI: 'border-pink-200 bg-pink-50',
};

const categoryLabelColors = {
  Frontend: 'text-blue-700',
  Backend: 'text-green-700',
  Database: 'text-amber-700',
  Cloud: 'text-purple-700',
  AI: 'text-pink-700',
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
              className={`rounded-card border p-6 ${categoryColors[category]}`}
            >
              <h3 className={`mb-4 text-sm font-semibold uppercase tracking-wider ${categoryLabelColors[category]}`}>
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {tools.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-lg border border-card-border bg-white px-3 py-1.5 text-sm font-medium text-ink transition-colors hover:border-gold hover:text-gold"
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
