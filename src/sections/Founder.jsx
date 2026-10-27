import { founder } from '../data/company';
import SectionHeading from '../components/SectionHeading';

export default function Founder() {
  return (
    <section id="founder" className="section-padding scroll-mt-20">
      <div className="container-narrow mx-auto">
        <SectionHeading
          badge="Developer"
          title="Meet"
          highlight="the Developer"
          subtitle="The person behind the Quantiva Tech brand and its products."
        />

        <div className="card mx-auto max-w-3xl overflow-hidden lg:flex">
          <div className="relative flex shrink-0 items-center justify-center bg-ivory-alt p-8 lg:w-72">
            <div className="relative h-48 w-48 overflow-hidden rounded-2xl border border-card-border bg-card shadow-md lg:h-56 lg:w-56">
              <div className="flex h-full w-full flex-col items-center justify-center text-muted/30">
                <svg className="h-20 w-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
                <span className="mt-2 text-xs">Photo placeholder</span>
              </div>
            </div>
          </div>

          <div className="flex flex-1 flex-col justify-center p-8 lg:p-10">
            <h3 className="font-display text-2xl font-semibold text-ink">{founder.name}</h3>
            <p className="mt-1 text-gold">{founder.role}</p>
            <p className="mt-4 text-sm leading-relaxed text-muted">{founder.bio}</p>

            <ul className="mt-6 flex flex-wrap gap-2">
              {founder.expertise.map((skill) => (
                <li
                  key={skill}
                  className="rounded-lg border border-card-border bg-ivory-alt px-3 py-1.5 text-xs font-medium text-ink"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
