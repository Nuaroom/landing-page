"use client"

const serif: React.CSSProperties = { fontFamily: "var(--font-ibm-plex-serif), serif" }

/* ── Infographic node ── */
function Node({
  label,
  variant = "default",
  className = "",
}: {
  label: string
  variant?: "default" | "danger" | "danger-launch" | "danger-fill" | "gold-fill"
  className?: string
}) {
  const base = "px-4 py-2.5 text-center text-sm font-medium border-[1.5px]"
  const cls: Record<string, string> = {
    default: "text-foreground",
    danger: "text-[#B54A4A] dark:text-[#D47070]",
    "danger-launch": "text-foreground",
    "danger-fill": "text-[#9E3434] dark:text-[#C65A5A]",
    "gold-fill": "",
  }
  const sty: Record<string, React.CSSProperties> = {
    default: { background: "#FDFCF8", borderColor: "#E1E1DE" },
    danger: { background: "#F7EDE9", borderColor: "#E8CAC7" },
    "danger-launch": { background: "#FDFCF8", borderColor: "#E8CAC7" },
    "danger-fill": { background: "#F0D2CA", borderColor: "#D59A93" },
    "gold-fill": { background: "#FFEBC9", borderColor: "#D58600", color: "#D58600" },
  }
  return (
    <div className={`${base} ${cls[variant]} ${className}`} style={{ ...serif, ...sty[variant] }}>
      {label}
    </div>
  )
}

export function FlowInfographic() {
  return (
    <section className="py-8 sm:py-12">
      <div className="container mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 xl:px-16">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-2 md:gap-20 lg:gap-28">

          {/* ═══ LEFT COLUMN: Without Heurica ═══ */}
          <div className="pl-6 sm:pl-10 md:pl-14">
            <h3
              className="mb-10 text-2xl font-normal leading-relaxed text-foreground md:text-3xl"
              style={serif}
            >
              <span className="font-medium">1 Year</span> rebuilding with
              <br />
              No dedicated expert.
            </h3>

            <div
              className="relative"
              style={{ aspectRatio: "568 / 644" }}
            >
              {/* SVG connectors */}
              <svg
                className="absolute inset-0 h-full w-full"
                viewBox="128 163 568 644"
                fill="none"
                aria-hidden
              >
                <defs>
                  <marker id="inf-arr-r" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
                    <path d="M1,1 L7,4 L1,7 Z" fill="#757575" />
                  </marker>
                  <marker id="inf-arr-l" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto-start-reverse">
                    <path d="M1,1 L7,4 L1,7 Z" fill="#757575" />
                  </marker>
                </defs>

                {/* Scope left → elbow down → Frankenstein left */}
                <path
                  d="M343,194 H263 V488 H343"
                  stroke="#757575" strokeWidth="1.2" fill="none"
                  strokeDasharray="8 8"
                  markerEnd="url(#inf-arr-r)"
                />

                {/* Above Frankenstein → elbow up → Review right */}
                <path
                  d="M478,454 V291 H397"
                  stroke="#757575" strokeWidth="1.2" fill="none"
                  strokeDasharray="8 8"
                  markerEnd="url(#inf-arr-l)"
                />

                {/* Dashed: below Launch → No Growth */}
                <line
                  x1="478" y1="523" x2="478" y2="742"
                  stroke="#757575" strokeWidth="1.2"
                  strokeDasharray="8 8" opacity="0.72"
                  markerEnd="url(#inf-arr-r)"
                />

                {/* Pink dashed right-edge loop (No Growth ↔ Scope) */}
                <path
                  d="M612,194 H696 V776 H616"
                  fill="none"
                  stroke="#757575" strokeWidth="1.2"
                  strokeDasharray="8 8"
                  markerStart="url(#inf-arr-l)"
                />
              </svg>

              {/* Positioned boxes */}
              <div className="absolute" style={{ top: "0%", left: "37.85%", width: "45.13%" }}>
                <Node label="Scope" className="w-full" />
              </div>

              <div className="absolute" style={{ top: "15.06%", left: "0%", width: "45.13%" }}>
                <Node label="Review" className="w-full" />
              </div>

              <div className="absolute" style={{ top: "29.81%", left: "0%", width: "45.13%" }}>
                <Node label="Build" className="w-full" />
              </div>

              <div className="absolute" style={{ top: "45.65%", left: "37.85%", width: "45.13%" }}>
                <Node label="Frankenstein UX" variant="danger" className="w-full" />
              </div>

              <div className="absolute" style={{ top: "62.73%", left: "37.85%", width: "45.13%" }}>
                <Node label="Launch" variant="danger-launch" className="w-full" />
              </div>

              <div className="absolute" style={{ top: "90.37%", left: "37.85%", width: "45.13%" }}>
                <Node label="No Growth" variant="danger-fill" className="w-full" />
              </div>
            </div>
          </div>

          {/* ═══ RIGHT COLUMN: With Heurica ═══ */}
          <div className="pr-6 sm:pr-10 md:pr-14">
            <h3
              className="mb-10 text-2xl font-normal leading-relaxed text-foreground md:text-3xl"
              style={serif}
            >
              <span className="font-medium">3 Weeks</span> with Heurica.
              <br />
              Then build what&#8217;s next with clarity.
            </h3>

            <div
              className="relative"
              style={{ aspectRatio: "596 / 644" }}
            >
              {/* SVG connectors */}
              <svg
                className="absolute inset-0 h-full w-full"
                viewBox="795 163 596 644"
                fill="none"
                aria-hidden
              >
                <defs>
                <marker id="inf-arr-gold" markerWidth="10" markerHeight="10" refX="5" refY="5" orient="auto">
                  <path d="M1,1 L9,5 L1,9 Z" fill="#757575" />
                  </marker>
                </defs>

                {/* Dashed amber zone border */}
                <rect
                  x="795.5" y="210.5" width="595" height="361"
                fill="none" stroke="#D58600"
                  strokeWidth="1" strokeDasharray="8 8"
                />

                {/* Heurica → Growth (dashed vertical) */}
                <line
                  x1="1093" y1="276" x2="1093" y2="701"
                  stroke="#757575" strokeWidth="1.2"
                  strokeDasharray="8 8" opacity="0.72"
                  markerEnd="url(#inf-arr-gold)"
                />
              </svg>

              {/* Heurica — straddles dashed zone top */}
              <div
                className="absolute text-center border-[1.5px] px-6 py-4"
                style={{
                  top: "0%",
                  left: "27.35%",
                  width: "45.13%",
                  background: "#FDFCF8",
                  borderColor: "#E1E1DE",
                }}
              >
                <span
                  className="text-lg font-normal sm:text-xl"
                  style={{ ...serif, color: "#D58600" }}
                >
                  Heurica
                </span>
                <p className="text-xs mt-1" style={{ color: "#D58600", opacity: 0.75 }}>
                  Embedded UX judgement.
                </p>
              </div>

              {/* Review */}
              <div className="absolute" style={{ top: "29.81%", left: "27.35%", width: "45.13%" }}>
                <Node label="Review" className="w-full" />
              </div>

              {/* Build right UX */}
              <div className="absolute" style={{ top: "46.12%", left: "27.35%", width: "45.13%" }}>
                <Node label="Build right UX" className="w-full" />
              </div>

              {/* Growth */}
              <div
                className="absolute text-center border px-4 py-3"
                style={{
                  top: "83.98%",
                  left: "27.35%",
                  width: "45.13%",
                  background: "#FFEBC9",
                  borderColor: "#D58600",
                }}
              >
                <span
                  className="text-base font-normal sm:text-lg"
                  style={{ ...serif, color: "#D58600" }}
                >
                  Growth
                </span>
                <p
                  className="mt-1 text-xs leading-relaxed"
                  style={{ color: "#D58600", opacity: 0.85 }}
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
