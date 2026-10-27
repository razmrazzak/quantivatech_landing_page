import { Link } from 'react-router-dom';

const URL_PATTERN = /(https?:\/\/[^\s<>"')\]]+)/g;

function normalizeUrlMatch(raw) {
  const trimmed = raw.replace(/[.,;:!?]+$/g, '');
  const trailing = raw.slice(trimmed.length);
  return { href: trimmed, trailing };
}

function linkifyText(text) {
  if (!text) return null;
  const parts = text.split(URL_PATTERN);
  return parts.map((part, index) => {
    if (!part.match(/^https?:\/\//)) {
      return <span key={index}>{part}</span>;
    }

    const { href, trailing } = normalizeUrlMatch(part);

    try {
      const url = new URL(href);
      const isInternal =
        typeof window !== 'undefined' && url.origin === window.location.origin;

      if (isInternal) {
        return (
          <span key={index}>
            <Link
              to={`${url.pathname}${url.search}${url.hash}`}
              className="break-all text-gold hover:underline"
            >
              {href}
            </Link>
            {trailing}
          </span>
        );
      }
    } catch {
      // fall through to external anchor
    }

    return (
      <span key={index}>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="break-all text-gold hover:underline"
        >
          {href}
        </a>
        {trailing}
      </span>
    );
  });
}

function renderBody(text) {
  if (!text?.trim()) return null;
  return text.split('\n\n').map((paragraph) => (
    <p key={paragraph.slice(0, 40)} className="mt-3 text-sm leading-relaxed text-muted">
      {paragraph.split('\n').map((line, i, arr) => (
        <span key={i}>
          {linkifyText(line)}
          {i < arr.length - 1 && <br />}
        </span>
      ))}
    </p>
  ));
}

export default function LegalSection({ section }) {
  return (
    <section>
      <h2 className="font-display text-lg font-semibold text-ink">{section.title}</h2>
      {renderBody(section.body)}

      {section.list?.length > 0 && (
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-muted">
          {section.list.map((item) => (
            <li key={item.slice(0, 48)}>{linkifyText(item)}</li>
          ))}
        </ul>
      )}

      {section.table && (
        <div className="mt-4 overflow-x-auto rounded-xl border border-card-border">
          <table className="w-full min-w-[280px] text-left text-sm">
            <thead>
              <tr className="border-b border-card-border bg-ivory-alt">
                {section.table.headers.map((h) => (
                  <th key={h} className="px-4 py-3 font-medium text-ink">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {section.table.rows.map((row) => (
                <tr key={row[0]} className="border-b border-card-border/50 last:border-0">
                  {row.map((cell) => (
                    <td key={cell} className="px-4 py-3 text-muted">
                      {linkifyText(cell)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {section.bodyAfterList && renderBody(section.bodyAfterList)}

      {section.subsections?.map((sub) => (
        <div key={sub.title} className="mt-6 border-l-2 border-card-border pl-4">
          <h3 className="text-base font-medium text-ink/90">{sub.title}</h3>
          {renderBody(sub.body)}
          {sub.list?.length > 0 && (
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-muted">
              {sub.list.map((item) => (
                <li key={item.slice(0, 48)}>{linkifyText(item)}</li>
              ))}
            </ul>
          )}
          {sub.bodyAfterList && renderBody(sub.bodyAfterList)}
        </div>
      ))}
    </section>
  );
}
