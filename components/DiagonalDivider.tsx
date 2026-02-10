interface DiagonalDividerProps {
  fromColor?: 'white' | 'teal' | 'teal-dark' | 'background-alt';
  toColor?: 'white' | 'teal' | 'teal-dark' | 'background-alt';
  direction?: 'down' | 'up';
  height?: number;
}

const colorMap = {
  white: '#ffffff',
  teal: '#1f2937',        // dark gray (matches --color-teal)
  'teal-dark': '#111827', // darker gray (matches --color-teal-dark)
  'background-alt': '#f8fafc',
};

export default function DiagonalDivider({
  fromColor = 'white',
  toColor = 'teal',
  direction = 'down',
  height = 80,
}: DiagonalDividerProps) {
  const from = colorMap[fromColor];
  const to = colorMap[toColor];

  if (direction === 'down') {
    return (
      <div style={{ height: `${height}px` }} className="relative w-full overflow-hidden">
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
        >
          <polygon points="0,0 1440,0 1440,80 0,0" fill={from} />
          <polygon points="0,0 1440,80 0,80" fill={to} />
        </svg>
      </div>
    );
  }

  return (
    <div style={{ height: `${height}px` }} className="relative w-full overflow-hidden">
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
      >
        <polygon points="0,0 1440,0 0,80" fill={from} />
        <polygon points="1440,0 1440,80 0,80" fill={to} />
      </svg>
    </div>
  );
}
