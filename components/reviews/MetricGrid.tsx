interface MetricGridProps {
  items: Array<{
    label: string;
    value: string;
    notes?: string;
  }>;
}

export default function MetricGrid({ items }: MetricGridProps) {
  if (items.length === 0) return null;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {items.map((item) => (
        <article key={item.label} className="rounded-2xl border border-border bg-white p-5 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-wide text-gold">{item.label}</p>
          <p className="mt-2 text-2xl font-bold text-teal">{item.value}</p>
          {item.notes ? (
            <p className="mt-2 text-sm leading-relaxed text-text-secondary">{item.notes}</p>
          ) : null}
        </article>
      ))}
    </div>
  );
}
