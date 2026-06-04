function renderBody(text) {
  if (!text?.trim()) return null;
  return text.split('\n\n').map((paragraph) => (
    <p key={paragraph.slice(0, 40)} className="mt-3 text-sm leading-relaxed text-white/60">
      {paragraph.split('\n').map((line, i, arr) => (
        <span key={i}>
          {line}
          {i < arr.length - 1 && <br />}
        </span>
      ))}
    </p>
  ));
}

export default function LegalSection({ section }) {
  return (
    <section>
      <h2 className="text-lg font-semibold text-white">{section.title}</h2>
      {renderBody(section.body)}

      {section.list?.length > 0 && (
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-white/60">
          {section.list.map((item) => (
            <li key={item.slice(0, 48)}>{item}</li>
          ))}
        </ul>
      )}

      {section.table && (
        <div className="mt-4 overflow-x-auto rounded-xl border border-white/10">
          <table className="w-full min-w-[280px] text-left text-sm">
            <thead>
              <tr className="border-b border-white/10 bg-white/5">
                {section.table.headers.map((h) => (
                  <th key={h} className="px-4 py-3 font-medium text-white/80">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {section.table.rows.map((row) => (
                <tr key={row[0]} className="border-b border-white/5 last:border-0">
                  {row.map((cell) => (
                    <td key={cell} className="px-4 py-3 text-white/60">
                      {cell}
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
        <div key={sub.title} className="mt-6 border-l-2 border-white/10 pl-4">
          <h3 className="text-base font-medium text-white/90">{sub.title}</h3>
          {renderBody(sub.body)}
          {sub.list?.length > 0 && (
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-white/60">
              {sub.list.map((item) => (
                <li key={item.slice(0, 48)}>{item}</li>
              ))}
            </ul>
          )}
          {sub.bodyAfterList && renderBody(sub.bodyAfterList)}
        </div>
      ))}
    </section>
  );
}
