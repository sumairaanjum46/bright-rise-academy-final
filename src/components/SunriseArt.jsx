export default function SunriseArt() {
  return (
    <svg
      viewBox="0 0 420 380"
      width="100%"
      role="img"
      aria-label="Illustration of a rising sun over ascending steps, representing academic growth"
    >
      <defs>
        <linearGradient id="sunGradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#F6DCAE" />
          <stop offset="100%" stopColor="#E79A2C" />
        </linearGradient>
      </defs>

      <circle cx="210" cy="150" r="86" fill="url(#sunGradient)">
        <animate
          attributeName="cy"
          values="165;150;165"
          dur="6s"
          repeatCount="indefinite"
        />
      </circle>

      {/* horizon */}
      <rect x="0" y="230" width="420" height="150" fill="#0e1a38" />

      {/* ascending steps rising toward the sun, echoing "BrightRise" */}
      <rect x="30" y="300" width="60" height="80" fill="#1c2f5e" />
      <rect x="110" y="270" width="60" height="110" fill="#243a6f" />
      <rect x="190" y="235" width="60" height="145" fill="#2c4680" />
      <rect x="270" y="255" width="60" height="125" fill="#243a6f" />
      <rect x="350" y="290" width="40" height="90" fill="#1c2f5e" />

      {/* subtle rays */}
      <g stroke="#F6DCAE" strokeWidth="3" strokeLinecap="round" opacity="0.7">
        <line x1="210" y1="34" x2="210" y2="10" />
        <line x1="266" y1="52" x2="284" y2="34" />
        <line x1="154" y1="52" x2="136" y2="34" />
      </g>
    </svg>
  );
}
