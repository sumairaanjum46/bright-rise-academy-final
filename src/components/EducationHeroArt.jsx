export default function EducationHeroArt() {
  return (
    <svg
      viewBox="0 0 440 400"
      width="100%"
      role="img"
      aria-label="Illustration of a student learning online, surrounded by math, science, and reading icons"
    >
      <defs>
        <linearGradient id="glow" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2c4680" />
          <stop offset="100%" stopColor="#16264d" />
        </linearGradient>
      </defs>

      {/* soft backdrop */}
      <circle cx="220" cy="190" r="168" fill="url(#glow)" opacity="0.55" />

      {/* floating subject chips */}
      <g opacity="0.95">
        <rect x="34" y="56" width="72" height="52" rx="12" fill="#1c2f5e" stroke="#3a4f8a" />
        <text x="70" y="88" textAnchor="middle" fontFamily="Fraunces, serif" fontSize="22" fill="#E79A2C">π</text>

        <rect x="330" y="46" width="72" height="52" rx="12" fill="#1c2f5e" stroke="#3a4f8a" />
        <path d="M358 62h16M358 70h16M358 78h10" stroke="#E79A2C" strokeWidth="2.4" strokeLinecap="round" transform="translate(-2 0)" />

        <rect x="24" y="270" width="72" height="52" rx="12" fill="#1c2f5e" stroke="#3a4f8a" />
        <circle cx="60" cy="296" r="13" fill="none" stroke="#E79A2C" strokeWidth="2.4" />
        <path d="M60 283v13l9 9" stroke="#E79A2C" strokeWidth="2.2" strokeLinecap="round" />

        <rect x="336" y="284" width="72" height="52" rx="12" fill="#1c2f5e" stroke="#3a4f8a" />
        <path d="M356 300h32M356 308h32M356 316h20" stroke="#E79A2C" strokeWidth="2.4" strokeLinecap="round" />
      </g>

      {/* desk + laptop */}
      <rect x="120" y="300" width="200" height="10" rx="4" fill="#0e1a38" />
      <g>
        {/* laptop base */}
        <path d="M150 296 L290 296 L300 284 L140 284 Z" fill="#0e1a38" />
        {/* laptop screen */}
        <rect x="152" y="196" width="136" height="90" rx="6" fill="#0e1a38" stroke="#3a4f8a" strokeWidth="2" />
        <rect x="160" y="204" width="120" height="74" rx="3" fill="#e9edf6" />
        {/* screen content: simple lesson layout */}
        <rect x="168" y="212" width="50" height="6" rx="3" fill="#E79A2C" />
        <rect x="168" y="224" width="104" height="4" rx="2" fill="#b9c3d8" />
        <rect x="168" y="232" width="90" height="4" rx="2" fill="#b9c3d8" />
        <rect x="168" y="240" width="70" height="4" rx="2" fill="#b9c3d8" />
        <circle cx="252" cy="258" r="12" fill="#16264d" />
        <path d="M247 258l4 4 7-8" stroke="#E79A2C" strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </g>

      {/* student silhouette */}
      <g>
        <circle cx="220" cy="150" r="22" fill="#F6DCAE" />
        <path
          d="M182 210c4-24 18-38 38-38s34 14 38 38v14h-76v-14Z"
          fill="#E79A2C"
        />
      </g>

      {/* open book beside laptop */}
      <g transform="translate(96 250)">
        <path d="M0 10 Q18 0 36 10 V32 Q18 22 0 32 Z" fill="#F6DCAE" />
        <path d="M36 10 Q54 0 72 10 V32 Q54 22 36 32 Z" fill="#ecc884" />
      </g>
    </svg>
  );
}
