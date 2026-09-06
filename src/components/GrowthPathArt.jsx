export default function GrowthPathArt() {
  return (
    <svg
      viewBox="0 0 420 360"
      width="100%"
      role="img"
      aria-label="Illustration of a student's learning progress rising step by step, with a progress checklist"
    >
      <defs>
        <linearGradient id="panelGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#243a6f" />
          <stop offset="100%" stopColor="#16264d" />
        </linearGradient>
      </defs>

      <rect x="20" y="20" width="380" height="320" rx="18" fill="url(#panelGrad)" />

      {/* rising progress line */}
      <polyline
        points="56,270 130,230 200,250 260,180 330,120 366,90"
        fill="none"
        stroke="#E79A2C"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {[
        [56, 270],
        [130, 230],
        [200, 250],
        [260, 180],
        [330, 120],
        [366, 90],
      ].map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r={i === 5 ? 8 : 5} fill="#F6DCAE" />
      ))}

      {/* progress checklist card */}
      <g transform="translate(58 52)">
        <rect width="150" height="112" rx="10" fill="#0e1a38" stroke="#3a4f8a" />
        <circle cx="20" cy="24" r="7" fill="none" stroke="#E79A2C" strokeWidth="2.4" />
        <path d="M16 24l3 3 6-7" stroke="#E79A2C" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="34" y="20" width="96" height="7" rx="3" fill="#b9c3d8" />

        <circle cx="20" cy="52" r="7" fill="none" stroke="#E79A2C" strokeWidth="2.4" />
        <path d="M16 52l3 3 6-7" stroke="#E79A2C" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="34" y="48" width="80" height="7" rx="3" fill="#b9c3d8" />

        <circle cx="20" cy="80" r="7" fill="none" stroke="#E79A2C" strokeWidth="2.4" />
        <rect x="34" y="76" width="64" height="7" rx="3" fill="#4d5f8f" />
      </g>
    </svg>
  );
}
