import InlineHelpTooltip from '@/components/reviews/InlineHelpTooltip';

export interface EditorialMetricTableRow {
  id: string;
  label: string;
  helpText?: string;
  values: string[];
  note?: string;
}

interface EditorialMetricTableProps {
  columnHeaders: string[];
  rows: EditorialMetricTableRow[];
}

export default function EditorialMetricTable({
  columnHeaders,
  rows,
}: EditorialMetricTableProps) {
  if (rows.length === 0) return null;

  return (
    <div className="overflow-x-auto rounded-3xl border border-border bg-white">
      <table className="min-w-full border-collapse">
        <thead className="bg-background-alt">
          <tr className="border-b border-border">
            <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-[0.24em] text-text-secondary">
              Test
            </th>
            {columnHeaders.map((header) => (
              <th
                key={header}
                className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-[0.24em] text-text-secondary"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.id} className="border-b border-border last:border-0">
              <th className="min-w-56 px-5 py-4 text-left align-top">
                <div className="flex items-start gap-2">
                  <span className="text-sm font-semibold text-teal">{row.label}</span>
                  {row.helpText ? <InlineHelpTooltip label={`More about ${row.label}`} text={row.helpText} /> : null}
                </div>
                {row.note ? (
                  <p className="mt-2 max-w-sm text-sm leading-relaxed text-text-secondary">{row.note}</p>
                ) : null}
              </th>
              {row.values.map((value, index) => (
                <td key={`${row.id}-${index}`} className="px-5 py-4 text-sm font-medium text-text-primary align-top">
                  {value}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
