import { ReactNode } from 'react';

type KpiCardProps = {
  label: string;
  value: number | string;
  icon?: ReactNode;
  highlight?: boolean;
};

export default function KpiCard({ label, value, icon, highlight = false }: KpiCardProps) {
  return (
    <div
      className={`bg-white rounded-lg border p-4 flex items-center gap-4 ${
        highlight ? 'border-orange-300 bg-orange-50' : 'border-gray-200'
      }`}
    >
      <div className="border-l-4 border-[#f97316] pl-4 flex-1">
        <p className="text-xs text-gray-500 font-medium uppercase tracking-wide">{label}</p>
        <p className="text-2xl font-bold text-gray-900">{value}</p>
      </div>
      {icon && <div className="text-gray-400">{icon}</div>}
    </div>
  );
}
