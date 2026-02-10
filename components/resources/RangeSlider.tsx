'use client';

import { useId } from 'react';

interface RangeSliderProps {
  label: string;
  value: number;
  min: number;
  max: number;
  step?: number;
  unit?: string;
  onChange: (value: number) => void;
  formatValue?: (value: number) => string;
  helpText?: string;
}

export default function RangeSlider({
  label,
  value,
  min,
  max,
  step = 1,
  unit = '',
  onChange,
  formatValue,
  helpText,
}: RangeSliderProps) {
  const id = useId();
  const displayValue = formatValue ? formatValue(value) : `${value}${unit}`;
  const percentage = ((value - min) / (max - min)) * 100;

  return (
    <div className="mb-6">
      <div className="flex items-center justify-between mb-2">
        <label htmlFor={id} className="block text-sm font-semibold text-teal">
          {label}
        </label>
        <span className="text-lg font-bold text-gold">{displayValue}</span>
      </div>
      <div className="relative">
        <input
          type="range"
          id={id}
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="range-slider w-full h-3 bg-gray-200 rounded-full appearance-none cursor-pointer"
          style={{
            background: `linear-gradient(to right, #f5b800 0%, #f5b800 ${percentage}%, #e5e7eb ${percentage}%, #e5e7eb 100%)`,
          }}
        />
      </div>
      <div className="flex justify-between mt-1 text-xs text-text-secondary">
        <span>{formatValue ? formatValue(min) : `${min}${unit}`}</span>
        <span>{formatValue ? formatValue(max) : `${max}${unit}`}</span>
      </div>
      {helpText && (
        <p className="mt-2 text-xs text-text-secondary">{helpText}</p>
      )}
    </div>
  );
}
