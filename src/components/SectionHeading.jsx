export default function SectionHeading({ badge, title, highlight, subtitle }) {
  return (
    <div className="mb-12 text-center lg:mb-16">
      {badge && (
        <span className="eyebrow mb-4 inline-block">
          {badge}
        </span>
      )}
      <h2 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl lg:text-5xl">
        {title}
        {highlight && (
          <>
            {' '}
            <span className="gradient-text">{highlight}</span>
          </>
        )}
      </h2>
      {subtitle && (
        <p className="mx-auto mt-4 max-w-2xl text-base text-muted sm:text-lg">{subtitle}</p>
      )}
    </div>
  );
}
