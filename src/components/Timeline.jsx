import ProgressTracker from './ProgressTracker';

export default function Timeline({ project }) {
  const completedCount = project.milestones.filter((m) => m.completed).length;
  const currentIndex = completedCount;

  return (
    <div className="gradient-border rounded-2xl glass p-6 lg:p-8">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 className="text-lg font-semibold text-white">{project.name}</h3>
          <p className="mt-1 text-sm text-white/50">
            Estimated launch:{' '}
            <span className="text-accent-cyan/90">{project.estimatedLaunch}</span>
          </p>
        </div>
        <div className="w-full sm:max-w-xs">
          <ProgressTracker progress={project.progress} size="sm" />
        </div>
      </div>

      <div className="relative">
        <div
          className="absolute left-0 right-0 top-5 hidden h-0.5 bg-white/10 sm:block"
          aria-hidden
        />
        <div
          className="absolute left-0 top-5 hidden h-0.5 bg-gradient-to-r from-accent-blue to-accent-purple sm:block"
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
                      ? 'border-accent-blue bg-gradient-to-br from-accent-blue to-accent-purple text-white shadow-glow'
                      : isActive
                        ? 'border-accent-purple bg-accent-purple/20 text-accent-purple animate-pulse-glow'
                        : 'border-white/20 bg-surface-elevated text-white/30'
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
                    isPast ? 'text-white' : isActive ? 'text-accent-purple' : 'text-white/40'
                  }`}
                >
                  {milestone.name}
                </p>
                <p className="mt-0.5 text-xs text-white/40">{milestone.date}</p>
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}
