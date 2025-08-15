export function Logo({ size = 50 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="shieldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: 'hsl(var(--primary))', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: 'hsl(var(--accent))', stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      <path
        d="M100 10L20 50V120C20 158.66 100 190 100 190C100 190 180 158.66 180 120V50L100 10Z"
        stroke="url(#shieldGradient)"
        strokeWidth="12"
        strokeLinejoin="round"
      />
      <text
        x="100"
        y="125"
        fontFamily="Roboto Mono, monospace"
        fontSize="80"
        fill="hsl(var(--foreground))"
        textAnchor="middle"
        dy=".3em"
      >
        CS
      </text>
    </svg>
  );
}
