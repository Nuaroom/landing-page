export function HeroCircles() {
  return (
    <div className="absolute pointer-events-none inset-0 -z-10" aria-hidden="true">
      {/* Medium circle - top left corner */}
      <div
        className="absolute rounded-full border border-border/25"
        style={{
          width: 280,
          height: 280,
          top: -40,
          left: -40,
        }}
      />
      {/* Large circle - skewed right */}
      <div
        className="absolute rounded-full border border-border/30"
        style={{
          width: 420,
          height: 420,
          top: '30%',
          right: -80,
        }}
      />
      {/* Small circle - skewed right, lower */}
      <div
        className="absolute rounded-full border border-border/35"
        style={{
          width: 160,
          height: 160,
          bottom: 20,
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
          top: '55%',
          right: 180,
        }}
      />
    </div>
  )
}
