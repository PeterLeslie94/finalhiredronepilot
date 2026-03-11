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
    <div className="overflow-x-auto border border-[#d8d8d8] bg-white">
      <table className="min-w-full border-collapse">
        <thead className="bg-[#fafafa]">
          <tr className="border-b border-[#d8d8d8]">
            <th className="px-4 py-3 text-left text-[11px] font-semibold uppercase tracking-[0.18em] text-text-secondary">
              Test
            </th>
            {columnHeaders.map((header) => (
              <th
                key={header}
                className="px-4 py-3 text-left text-[11px] font-semibold uppercase tracking-[0.18em] text-text-secondary"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.id} className="border-b border-[#e6e6e6] last:border-0">
              <th className="min-w-52 px-4 py-3 text-left align-top">
                <div className="flex items-start gap-1.5">
                  <span className="text-[13px] font-semibold text-teal">{row.label}</span>
                  {row.helpText ? <InlineHelpTooltip label={`More about ${row.label}`} text={row.helpText} /> : null}
                </div>
                {row.note ? (
                  <p className="mt-1 max-w-sm text-[12px] leading-relaxed text-text-secondary">{row.note}</p>
                ) : null}
              </th>
              {row.values.map((value, index) => (
                <td key={`${row.id}-${index}`} className="px-4 py-3 text-[13px] font-medium text-text-primary align-top">
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
