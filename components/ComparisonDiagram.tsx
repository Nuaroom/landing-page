"use client"

const serif: React.CSSProperties = { fontFamily: "var(--font-ibm-plex-serif), serif" }

/* ── Flow node box ── */
function FlowNode({
  label,
  variant = "default",
  className = "",
}: {
  label: string
  variant?: "default" | "danger" | "danger-fill" | "gold" | "gold-fill"
  className?: string
}) {
  const base = "px-4 py-2.5 text-center text-sm font-medium border"
  const cls: Record<string, string> = {
    default: "border-border/50 bg-muted/25 text-foreground dark:bg-muted/15",
    danger: "text-[#B54A4A] dark:text-[#D47070]",
    "danger-fill": "text-[#B54A4A] dark:text-[#D47070]",
    gold: "text-foreground",
    "gold-fill": "",
  }
  const sty: Record<string, React.CSSProperties> = {
    default: {},
    danger: { background: "#F7EDE9", borderColor: "#E8CAC7" },
    "danger-fill": { background: "#FFDDD0", borderColor: "#E0ADA7" },
    gold: { borderColor: "color-mix(in srgb, var(--accent-gold) 40%, transparent)", background: "transparent" },
    "gold-fill": {
      background: "var(--accent-gold-muted)",
      borderColor: "color-mix(in srgb, var(--accent-gold) 40%, transparent)",
      color: "var(--accent-gold-dark)",
    },
  }
  return (
    <div className={`${base} ${cls[variant]} ${className}`} style={{ ...serif, ...sty[variant] }}>
      {label}
    </div>
  )
}

export function ComparisonDiagram() {
  return (
    <section>
      <div className="border-t border-border/60" />
      <div className="container mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 xl:px-16">
        <div className="relative grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16">
            {/* Center divider — desktop only */}
            <div className="absolute bottom-0 left-1/2 top-0 hidden -translate-x-1/2 md:block">
              <div className="h-full w-px bg-border/40" />
            </div>

            {/* ════ LEFT: Without dedicated UX ════ */}
            <div className="md:pr-8">
              <h3 className="mb-10 text-lg font-normal leading-relaxed text-foreground sm:text-xl md:text-2xl" style={serif}>
                <span className="font-medium">1 Year</span> rebuilding with
                <br />
                No dedicated expert.
              </h3>

              <div className="relative mx-auto" style={{ maxWidth: "26rem", aspectRatio: "599 / 645" }}>
                {/* ── SVG connecting lines ── */}
                <svg
                  className="absolute inset-0 h-full w-full"
                  viewBox="0 0 599 645"
                  fill="none"
                  style={{ overflow: "visible" }}
                  aria-hidden
                >
                  <defs>
                    <marker id="arr-l" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
                      <path d="M1,1 L7,4 L1,7 Z" fill="color-mix(in srgb, var(--foreground) 35%, transparent)" />
                    </marker>
                  </defs>

                  {/* Scope left → elbow down left side → Frankenstein left (rounded corners) */}
                  <path
                    d="M215,31 H159 Q135,31 135,55 V301 Q135,325 159,325 H215"
                    stroke="var(--border)" strokeWidth="1.2"
                    markerEnd="url(#arr-l)"
                  />

                  {/* Above Frankenstein → elbow up → Review right */}
                  <path
                    d="M350,294 V152 Q350,128 326,128 H269"
                    stroke="var(--border)" strokeWidth="1.2"
                    markerEnd="url(#arr-l)"
                  />

                  {/* Frankenstein bottom → dashed down through Launch → No Growth */}
                  <line
                    x1="350" y1="356" x2="350" y2="582"
                    stroke="var(--border)" strokeWidth="1.2"
                    strokeDasharray="5 4"
                    opacity="0.5"
                    markerEnd="url(#arr-l)"
                  />

                  {/* No Growth ↔ Scope (dashed right-edge loop with rounded corners) */}
                  <path
                    d="M484,31 H544 Q568,31 568,55 V589 Q568,613 544,613 H484"
                    fill="none"
                    stroke="#E8CAC7"
                    strokeWidth="1.2"
                    strokeDasharray="6 4"
                    markerEnd="url(#arr-l)"
                  />
                </svg>

                {/* ── Positioned boxes ── */}

                {/* Scope — top right */}
                <div className="absolute" style={{ top: "0%", left: "36%", right: "19%" }}>
                  <FlowNode label="Scope" className="w-full" />
                </div>

                {/* Review — left */}
                <div className="absolute" style={{ top: "15.1%", left: "0%", right: "55%" }}>
                  <FlowNode label="Review" className="w-full" />
                </div>

                {/* Build — left */}
                <div className="absolute" style={{ top: "29.8%", left: "0%", right: "55%" }}>
                  <FlowNode label="Build" className="w-full" />
                </div>

                {/* Frankenstein UX — right */}
                <div className="absolute" style={{ top: "45.6%", left: "36%", right: "19%" }}>
                  <FlowNode label="Frankenstein UX" variant="danger" className="w-full" />
                </div>

                {/* Launch — right */}
                <div className="absolute" style={{ top: "62.7%", left: "36%", right: "19%" }}>
                  <FlowNode label="Launch" className="w-full" />
                </div>

                {/* No Growth — right */}
                <div className="absolute" style={{ top: "90.3%", left: "36%", right: "19%" }}>
                  <FlowNode label="No Growth" variant="danger-fill" className="w-full" />
                </div>
              </div>
            </div>

            {/* ════ RIGHT: With Heurica ════ */}
            <div className="md:pl-8">
              <h3 className="mb-10 text-lg font-normal leading-relaxed text-foreground sm:text-xl md:text-2xl" style={serif}>
                <span className="font-medium">2 weeks</span> with Heurica.
                <br />
                Then build what&#8217;s next with clarity.
              </h3>

              <div className="relative mx-auto" style={{ maxWidth: "18rem", aspectRatio: "288 / 500" }}>
                {/* ── Dashed gold: Heurica + Build right UX + Launch (Growth stays outside) ── */}
                <div
                  className="absolute rounded-sm border border-dashed"
                  style={{
                    borderColor: "color-mix(in srgb, var(--accent-gold) 50%, transparent)",
                    top: "-12px",
                    left: "-20px",
                    right: "-20px",
                    height: "60%",
                  }}
                  aria-hidden
                />

                {/* ── SVG connecting lines ── */}
                <svg
                  className="absolute inset-0 h-full w-full"
                  viewBox="0 0 288 500"
                  fill="none"
                  aria-hidden
                >
                  <defs>
                    <marker id="arr-r" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
                      <path d="M1,1 L7,4 L1,7 Z" fill="var(--accent-gold)" />
                    </marker>
                  </defs>

                  {/* Heurica → Build right UX */}
                  <line
                    x1="144" y1="75" x2="144" y2="125"
                    stroke="var(--accent-gold)" strokeWidth="1.2"
                    strokeDasharray="5 4" opacity="0.6"
                    markerEnd="url(#arr-r)"
                  />

                  {/* Build right UX → Launch */}
                  <line
                    x1="144" y1="163" x2="144" y2="218"
                    stroke="var(--accent-gold)" strokeWidth="1.2"
                    strokeDasharray="5 4"
                    markerEnd="url(#arr-r)"
                  />

                  {/* Launch → Growth */}
                  <line
                    x1="144" y1="256" x2="144" y2="400"
                    stroke="var(--accent-gold)" strokeWidth="1"
                    strokeDasharray="5 4" opacity="0.6"
                    markerEnd="url(#arr-r)"
                  />
                </svg>

                {/* ── Positioned boxes ── */}

                {/* Heurica label — straddles the dashed border */}
                <div
                  className="absolute z-10 text-center border px-6 py-3"
                  style={{
                    top: "3px",
                    left: "211px",
                    transform: "translate(-50%, -50%)",
                    borderColor: "color-mix(in srgb, var(--accent-gold) 40%, transparent)",
                    background: "var(--accent-gold-muted, #FDFCF8)",
                  }}
                >
                  <span
                    className="text-xl font-normal"
                    style={{ ...serif, color: "var(--accent-gold)" }}
                  >
                    Heurica
                  </span>
                  <p className="text-xs mt-1" style={{ color: "var(--accent-gold)", opacity: 0.75 }}>
                    embedded UX judgment
                  </p>
                </div>

                {/* Build right UX */}
                <div className="absolute" style={{ top: "25%", left: "10%", right: "10%" }}>
                  <FlowNode label="Build right UX" variant="gold" className="w-full" />
                </div>

                {/* Launch */}
                <div className="absolute" style={{ top: "43.6%", left: "10%", right: "10%" }}>
                  <FlowNode label="Launch" variant="gold" className="w-full" />
                </div>

                {/* Growth — below dashed border */}
                <div className="absolute" style={{ top: "80%", left: "10%", right: "10%" }}>
                  <FlowNode label="Growth" variant="gold-fill" className="w-full" />
                  <p
                    className="mt-2 text-center text-xs leading-relaxed"
                    style={{ color: "var(--accent-gold-dark)", opacity: 0.85 }}
                  >
                    Your team keeps building
                    <br />
                    with UX clarity.
                  </p>
                </div>
              </div>
            </div>
        </div>
      </div>
    </section>
  )
}
