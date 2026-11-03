import ProgressTracker from './ProgressTracker';

export default function Timeline({ project }) {
  const completedCount = project.milestones.filter((m) => m.completed).length;
  const currentIndex = completedCount;

  return (
    <div className="card p-6 lg:p-8">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 className="text-lg font-semibold text-ink">{project.name}</h3>
          <p className="mt-1 text-sm text-muted">
            Estimated launch:{' '}
            <span className="text-gold font-semibold">{project.estimatedLaunch}</span>
          </p>
        </div>
        <div className="w-full sm:max-w-xs">
          <ProgressTracker progress={project.progress} size="sm" />
        </div>
      </div>

      <div className="relative">
        <div
          className="absolute left-0 right-0 top-5 hidden h-0.5 bg-card-border sm:block"
          aria-hidden
        />
        <div
          className="absolute left-0 top-5 hidden h-0.5 bg-ink sm:block"
          style={{
            width: `${((completedCount) / (project.milestones.length - 1)) * 100}%`,
          }}
          aria-hidden
        />

        <ol className="grid gap-6 sm:grid-cols-5 sm:gap-2">
          {project.milestones.map((milestone, index) => {
            const isActive = index === currentIndex && !milestone.completed;
            const isPast = milestone.completed;

            return (
              <li key={milestone.name} className="relative flex flex-col items-center text-center">
                <div
                  className={`relative z-10 flex h-10 w-10 items-center justify-center rounded-full border-2 transition-all ${
                    isPast
                      ? 'border-gold bg-gold text-white shadow-md'
                      : isActive
                        ? 'border-gold bg-gold/20 text-gold animate-pulse'
                        : 'border-card-border bg-card text-muted/30'
                  }`}
                >
                  {isPast ? (
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    <span className="text-xs font-semibold">{index + 1}</span>
                  )}
                </div>
                <p
                  className={`mt-3 text-sm font-medium ${
                    isPast ? 'text-ink' : isActive ? 'text-gold' : 'text-muted/60'
                  }`}
                >
                  {milestone.name}
                </p>
                <p className="mt-0.5 text-xs text-muted/60">{milestone.date}</p>
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}
