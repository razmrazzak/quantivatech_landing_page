import { buildingInPublic } from '../data/company';
import Timeline from '../components/Timeline';
import SectionHeading from '../components/SectionHeading';

export default function BuildingInPublic() {
  return (
    <section id="building-in-public" className="section-padding scroll-mt-20 bg-surface-elevated/50">
      <div className="container-narrow mx-auto">
        <SectionHeading
          badge="Transparency"
          title="Building in"
          highlight="Public"
          subtitle="Follow our journey — roadmaps, milestones, and launch timelines for every product in development."
        />

        <div className="space-y-8">
          {buildingInPublic.map((project) => (
            <Timeline key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
