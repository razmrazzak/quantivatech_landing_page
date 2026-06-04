const statusColors = {
  Planning: 'from-gray-500 to-gray-400',
  Design: 'from-violet-500 to-purple-400',
  Development: 'from-blue-500 to-cyan-400',
  'Beta Testing': 'from-amber-500 to-orange-400',
  'Launching Soon': 'from-emerald-500 to-teal-400',
  Live: 'from-green-500 to-emerald-400',
};

export function StatusBadge({ status }) {
  const styles = {
    Planning: 'bg-white/10 text-white/60',
    Design: 'bg-violet-500/20 text-violet-300',
    Development: 'bg-blue-500/20 text-blue-300',
    'Beta Testing': 'bg-amber-500/20 text-amber-300',
    'Launching Soon': 'bg-emerald-500/20 text-emerald-300',
    Live: 'bg-green-500/20 text-green-300 ring-1 ring-green-500/30',
  };

  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${styles[status] || styles.Planning}`}
    >
      {status === 'Live' && (
        <span className="mr-1.5 h-1.5 w-1.5 animate-pulse rounded-full bg-green-400" />
      )}
      {status}
    </span>
  );
}

export default function ProgressTracker({ progress, showLabel = true, size = 'md' }) {
  const clamped = Math.min(100, Math.max(0, progress));
  const height = size === 'sm' ? 'h-1.5' : 'h-2';

  return (
    <div className="w-full">
      {showLabel && (
        <div className="mb-1.5 flex justify-between text-xs">
          <span className="text-white/50">Progress</span>
          <span className="font-medium text-white/80">{clamped}%</span>
        </div>
      )}
      <div className={`overflow-hidden rounded-full bg-white/10 ${height}`}>
        <div
          className={`h-full rounded-full bg-gradient-to-r from-accent-blue to-accent-purple transition-all duration-700 ease-out`}
          style={{ width: `${clamped}%` }}
          role="progressbar"
          aria-valuenow={clamped}
          aria-valuemin={0}
          aria-valuemax={100}
        />
      </div>
    </div>
  );
}

export function getProgressGradient(status) {
  return statusColors[status] || statusColors.Development;
}
