export default function SectionHeading({ badge, title, highlight, subtitle }) {
  return (
    <div className="mb-12 text-center lg:mb-16">
      {badge && (
        <span className="mb-4 inline-block rounded-full border border-accent-blue/30 bg-accent-blue/10 px-4 py-1 text-xs font-medium uppercase tracking-wider text-accent-blue">
          {badge}
        </span>
      )}
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
        {title}
        {highlight && (
          <>
            {' '}
            <span className="gradient-text">{highlight}</span>
          </>
        )}
      </h2>
      {subtitle && (
        <p className="mx-auto mt-4 max-w-2xl text-base text-white/60 sm:text-lg">{subtitle}</p>
      )}
    </div>
  );
}
