export function HeroCircles() {
  return (
    <div className="absolute pointer-events-none inset-0 -z-10" aria-hidden="true">
      {/* Medium circle - top left corner */}
      <div
        className="absolute rounded-full border border-border/25"
        style={{
          width: 280,
          height: 280,
          top: -140,
          left: -40,
        }}
      />
      {/* Large circle - above header */}
      <div
        className="absolute rounded-full border border-border/30"
        style={{
          width: 420,
          height: 420,
          top: -220,
          right: -80,
        }}
      />
      {/* Small circle - higher up */}
      <div
        className="absolute rounded-full border border-border/35"
        style={{
          width: 160,
          height: 160,
          top: -60,
          right: 100,
        }}
      />
      {/* Tiny accent dot - upper left area */}
      <div
        className="absolute rounded-full bg-border/40"
        style={{
          width: 8,
          height: 8,
          top: 60,
          left: 120,
        }}
      />
      {/* Tiny accent dot - right area */}
      <div
        className="absolute rounded-full bg-border/35"
        style={{
          width: 6,
          height: 6,
          top: '35%',
          right: 180,
        }}
      />
      {/* Speed square — bottom left, subtle like circles */}
      <svg
        className="absolute hidden md:block text-border"
        style={{
          width: 280,
          height: 280,
          bottom: -40,
          left: -20,
          opacity: 0.25,
        }}
        viewBox="0 0 280 280"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Right triangle: right angle at bottom-left */}
        <path
          d="M0 0 L0 280 L280 280 Z"
          stroke="currentColor"
          strokeWidth="1"
          fill="none"
        />
        {/* Inner triangle */}
        <path
          d="M0 80 L0 240 L200 240 Z"
          stroke="currentColor"
          strokeWidth="0.6"
          fill="none"
          opacity="0.4"
        />
        {/* Tick marks along bottom edge */}
        <line x1="40" y1="280" x2="40" y2="274" stroke="currentColor" strokeWidth="0.5" opacity="0.35" />
        <line x1="80" y1="280" x2="80" y2="274" stroke="currentColor" strokeWidth="0.5" opacity="0.35" />
        <line x1="120" y1="280" x2="120" y2="274" stroke="currentColor" strokeWidth="0.5" opacity="0.35" />
        <line x1="160" y1="280" x2="160" y2="274" stroke="currentColor" strokeWidth="0.5" opacity="0.35" />
        <line x1="200" y1="280" x2="200" y2="274" stroke="currentColor" strokeWidth="0.5" opacity="0.35" />
        <line x1="240" y1="280" x2="240" y2="274" stroke="currentColor" strokeWidth="0.5" opacity="0.35" />
        {/* Tick marks along left edge */}
        <line x1="0" y1="240" x2="6" y2="240" stroke="currentColor" strokeWidth="0.5" opacity="0.35" />
        <line x1="0" y1="200" x2="6" y2="200" stroke="currentColor" strokeWidth="0.5" opacity="0.35" />
        <line x1="0" y1="160" x2="6" y2="160" stroke="currentColor" strokeWidth="0.5" opacity="0.35" />
        <line x1="0" y1="120" x2="6" y2="120" stroke="currentColor" strokeWidth="0.5" opacity="0.35" />
        <line x1="0" y1="80" x2="6" y2="80" stroke="currentColor" strokeWidth="0.5" opacity="0.35" />
        <line x1="0" y1="40" x2="6" y2="40" stroke="currentColor" strokeWidth="0.5" opacity="0.35" />
        {/* Right-angle indicator at bottom-left */}
        <path
          d="M0 268 L12 268 L12 280"
          stroke="currentColor"
          strokeWidth="0.6"
          fill="none"
          opacity="0.4"
        />
      </svg>
    </div>
  )
}
