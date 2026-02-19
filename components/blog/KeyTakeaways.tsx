'use client';

interface KeyTakeawaysProps {
  takeaways: string[];
}

export default function KeyTakeaways({ takeaways }: KeyTakeawaysProps) {
  if (!takeaways || takeaways.length === 0) {
    return null;
  }

  return (
    <div className="bg-[rgba(249,115,22,0.06)] p-[30px_40px] my-10">
      {/* Header */}
      <h2 className="text-lg font-bold uppercase tracking-wider text-gray-900 mb-5">
        Key Takeaways
      </h2>

      {/* Takeaways List */}
      <ul className="space-y-3">
        {takeaways.map((takeaway, index) => (
          <li key={index} className="flex items-start gap-3">
            <span className="w-6 h-6 bg-gold/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-gold text-sm font-bold">{index + 1}</span>
            </span>
            <span className="text-gray-700 leading-relaxed">{takeaway}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
