export default function TrustBadge({ animated = true, width = 256 }: { animated?: boolean; width?: number }) {
  const height = Math.round(width * (100 / 320));
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 100" width={width} height={height} className={animated ? '' : 'no-badge-anim'}>
      <defs>
        <filter id="badge-shadow" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="4" stdDeviation="6" floodOpacity="0.08" floodColor="#000000" />
        </filter>
        <linearGradient id="orangeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F98846" />
          <stop offset="100%" stopColor="#E1590C" />
        </linearGradient>
      </defs>

      <g className="badge-container" style={{ cursor: 'pointer' }}>
        {/* Background with shadow */}
        <rect className="shadow-rect badge-bg" x="10" y="10" width="300" height="80" rx="40" fill="#ffffff" filter="url(#badge-shadow)" />

        {/* Border (Animated Draw) */}
        <rect className="badge-bg badge-draw-border" x="10" y="10" width="300" height="80" rx="40" fill="none" stroke="#F36D21" strokeWidth="1.5" strokeOpacity="0.3" />

        {/* Icon Group */}
        <g className="badge-icon-group badge-bg">
          <circle className="badge-pop-circle" cx="50" cy="50" r="32" fill="url(#orangeGrad)" />
          <path className="badge-draw-shield" d="M50 28 L36 34 L36 48 C36 60 42 68 50 72 C58 68 64 60 64 48 L64 34 Z" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinejoin="round" opacity="0.4" />
          <path className="badge-fill-shield" d="M50 28 L36 34 L36 48 C36 60 42 68 50 72 C58 68 64 60 64 48 L64 34 Z" fill="#ffffff" />
          <path className="badge-draw-check" d="M41 51 L47 57 L59 43" fill="none" stroke="#ffffff" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
        </g>

        {/* Text */}
        <text className="badge-bg badge-text-anim badge-text-1" x="96" y="37" fontFamily="system-ui, -apple-system, sans-serif" fontSize="10" fontWeight="700" fill="#6B7280" letterSpacing="1.2">VETTED &amp; VERIFIED</text>
        <text className="badge-bg badge-text-anim badge-text-2" x="94" y="58" fontFamily="system-ui, -apple-system, sans-serif" fontSize="20" fontWeight="900" fill="#111827" letterSpacing="-0.5">DRONE PILOT</text>
        <text className="badge-bg badge-text-anim badge-text-3" x="95" y="76" fontFamily="system-ui, -apple-system, sans-serif" fontSize="13" fontWeight="700" fill="#F36D21">HireDronePilot.uk</text>

        {/* Active pill */}
        <g className="badge-pop-pill badge-bg">
          <rect x="230" y="40" width="65" height="22" rx="11" fill="#ecfdf5" stroke="#d1fae5" strokeWidth="1" />
          <circle className="badge-pulse-ring" cx="242" cy="51" r="4" fill="#10b981" />
          <circle cx="242" cy="51" r="4" fill="#10b981" />
          <text x="252" y="55" fontFamily="system-ui, -apple-system, sans-serif" fontSize="11" fontWeight="700" fill="#059669">Active</text>
        </g>
      </g>
    </svg>
  );
}
