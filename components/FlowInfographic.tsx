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
    default: "text-foreground bg-[#FDFCF8] border-[#E1E1DE] dark:bg-[#2D2D2D] dark:border-[#404040]",
    danger: "text-[#B54A4A] bg-[#F7EDE9] border-[#E8CAC7] dark:text-[#D47070] dark:bg-[#3A2222] dark:border-[#5A3333]",
    "danger-launch": "text-foreground bg-[#FDFCF8] border-[#E1E1DE] dark:bg-[#2D2D2D] dark:border-[#404040]",
    "danger-fill": "text-[#9E3434] bg-[#F0D2CA] border-[#D59A93] dark:text-[#E08080] dark:bg-[#4A2020] dark:border-[#6A3A3A]",
    "gold-fill": "bg-[#F0E2CB] border-[#D58600] text-[#D58600] dark:bg-[#3A3010] dark:border-[#D4B84A] dark:text-[#F6E05E]",
  }
  return (
    <div className={`${base} ${cls[variant]} ${className}`} style={serif}>
      {label}
    </div>
  )
}

export function FlowInfographic() {
  return (
    <section className="pt-8 pb-20 sm:pt-12 sm:pb-24">
      <div className="container mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 xl:px-16">
        <div className="grid grid-cols-1 gap-[10rem] md:grid-cols-2 md:gap-20 lg:gap-28">

          {/* ═══ LEFT COLUMN: Without Heurica ═══ */}
          <div className="px-6 sm:px-10 md:px-0 animate-on-scroll">
            <h3
              className="mx-auto mb-10 max-w-[400px] text-2xl font-normal leading-relaxed text-foreground md:text-3xl"
              style={serif}
            >
              <span className="font-medium">1 Year</span> rebuilding with
              <br />
              No dedicated expert.
            </h3>

            <div
              className="relative mx-auto"
              style={{ aspectRatio: "568 / 644", maxWidth: "400px" }}
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
                  strokeDasharray="8 8"
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
          <div className="px-6 sm:px-10 md:px-0 animate-on-scroll">
            <h3
              className="mx-auto mb-10 max-w-[400px] text-2xl font-normal leading-relaxed text-foreground md:text-3xl"
              style={serif}
            >
              <span className="font-medium">2 weeks</span> with Heurica.
              <br />
              Then build forward.
            </h3>

            <div
              className="relative mx-auto"
              style={{ aspectRatio: "596 / 644", maxWidth: "400px" }}
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
                fill="none" stroke="var(--accent-gold)"
                  strokeWidth="1" strokeDasharray="8 8"
                />

                {/* Heurica → Growth (dashed vertical) */}
                <line
                  x1="1093" y1="276" x2="1093" y2="701"
                  stroke="#757575" strokeWidth="1.2"
                  strokeDasharray="8 8"
                  markerEnd="url(#inf-arr-gold)"
                />
              </svg>

              {/* Heurica — box restored, invisible border (0px, color matches page bg) */}
              <div
                className="absolute text-center border-0 px-4 pt-2 pb-4 bg-[#FAF8F3] dark:bg-[#2D2D2D]"
                style={{
                  top: "0%",
                  left: "27.35%",
                  width: "45.13%",
                  borderColor: "var(--background)",
                  borderStyle: "solid",
                }}
              >
                <span
                  className="text-lg font-normal sm:text-xl"
                  style={{ ...serif, color: "var(--accent-gold)" }}
                >
                  Heurica
                </span>
                <p className="text-xs mt-1" style={{ color: "var(--accent-gold)", opacity: 0.75 }}>
                  Embedded UX judgement.
                </p>
              </div>

              {/* Build right UX */}
              <div className="absolute" style={{ top: "29.81%", left: "27.35%", width: "45.13%" }}>
                <Node label="Build right UX" className="w-full" />
              </div>

              {/* Launch */}
              <div className="absolute" style={{ top: "46.12%", left: "27.35%", width: "45.13%" }}>
                <Node label="Launch" className="w-full" />
              </div>

              {/* Growth */}
              <div
                className="absolute text-center border px-4 py-3 bg-[#F0E2CB] dark:bg-[#3A3010]"
                style={{
                  top: "83.98%",
                  left: "27.35%",
                  width: "45.13%",
                  borderColor: "color-mix(in srgb, var(--accent-gold) 42%, var(--background))",
                }}
              >
                <span
                  className="text-base font-normal sm:text-lg"
                  style={{ ...serif, color: "var(--accent-gold)" }}
                >
                  Growth
                </span>
                <p
                  className="mt-1 text-xs leading-relaxed"
                  style={{ color: "var(--accent-gold)", opacity: 0.85 }}
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
