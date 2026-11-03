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
    Planning: 'bg-muted/10 text-muted',
    Design: 'bg-violet-100 text-violet-700',
    Development: 'bg-blue-100 text-blue-700',
    'Beta Testing': 'bg-amber-100 text-amber-700',
    'Launching Soon': 'bg-gold/20 text-gold ring-1 ring-gold/30',
    Live: 'bg-green-100 text-green-700 ring-1 ring-green-200',
  };

  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${styles[status] || styles.Planning}`}
    >
      {status === 'Live' && (
        <span className="mr-1.5 h-1.5 w-1.5 animate-pulse rounded-full bg-green-500" />
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
          <span className="text-muted">Progress</span>
          <span className="font-semibold text-ink">{clamped}%</span>
        </div>
      )}
      <div className={`overflow-hidden rounded-full bg-card-border ${height}`}>
        <div
          className={`h-full rounded-full bg-ink transition-all duration-700 ease-out`}
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
