"use client"

import { useLanguage } from "@/components/language-context"

export function ComparisonDiagram() {
  const { t } = useLanguage()

  return (
    <section>
      <div className="border-t border-b border-border/40">
        <div className="container mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 xl:px-16">
          <div className="bg-[#FDFCF8] dark:bg-[#1C1917] px-6 sm:px-10 md:px-14 py-10 sm:py-14">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">

            {/* Left: Without dedicated UX — circular loop */}
            <div>
              <h3
                className="text-lg sm:text-xl md:text-2xl font-normal mb-2 text-foreground leading-relaxed"
                style={{ fontFamily: "var(--font-ibm-plex-serif), serif" }}
              >
                {t("home.compare.without.title1")}
              </h3>
              <p className="text-sm text-muted-foreground mb-8">
                {t("home.compare.without.title2")}
              </p>

              {/* Horizontal circular loop */}
              <div className="flex items-center justify-center py-8">
                <div className="relative w-full max-w-[360px] h-[180px]">
                  {/* Ellipse loop path */}
                  <svg
                    className="absolute inset-0 w-full h-full"
                    viewBox="0 0 360 180"
                    fill="none"
                    preserveAspectRatio="xMidYMid meet"
                  >
                    <ellipse
                      cx="180" cy="90" rx="160" ry="70"
                      stroke="currentColor"
                      strokeWidth="1"
                      strokeDasharray="6 4"
                      strokeOpacity="0.15"
                      fill="none"
                    />
                  </svg>

                  {/* Eng builds — left */}
                  <div className="absolute top-1/2 left-0 -translate-y-1/2">
                    <div className="px-3 py-2 text-[10px] sm:text-[11px] font-mono tracking-wider text-muted-foreground bg-background border border-border/40 whitespace-nowrap">
                      ENG BUILDS
                    </div>
                  </div>

                  {/* No UX direction — top */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1">
                    <div
                      className="px-3 py-2 text-[10px] sm:text-[11px] font-mono tracking-wider whitespace-nowrap border"
                      style={{
                        color: "var(--accent-pink)",
                        opacity: 0.7,
                        borderColor: "color-mix(in srgb, var(--accent-pink) 25%, transparent)",
                        background: "var(--background)",
                      }}
                    >
                      NO UX DIRECTION
                    </div>
                  </div>

                  {/* Rebuild — right */}
                  <div className="absolute top-1/2 right-0 -translate-y-1/2">
                    <div className="px-3 py-2 text-[10px] sm:text-[11px] font-mono tracking-wider text-muted-foreground bg-background border border-border/40 whitespace-nowrap">
                      REBUILD
                    </div>
                  </div>

                  {/* REPEAT — center */}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1 text-[10px] font-mono tracking-widest text-muted-foreground opacity-25">
                    REPEAT
                  </span>
                </div>
              </div>
            </div>

            {/* Right: With Heurica — horizontal linear flow */}
            <div className="md:border-l md:border-border/40 md:pl-16 flex flex-col">
              <h3
                className="text-lg sm:text-xl md:text-2xl font-normal mb-2 text-foreground leading-relaxed"
                style={{ fontFamily: "var(--font-ibm-plex-serif), serif" }}
              >
                {t("home.compare.with.title1")}
              </h3>
              <p className="text-sm text-muted-foreground mb-8">
                {t("home.compare.with.title2")}
              </p>

              {/* Horizontal linear flow */}
              <div className="flex items-center justify-center py-8">
                <div className="flex flex-col gap-3 w-full">
                  {/* Main flow row */}
                  <div className="flex flex-row items-center w-full">
                    {/* Eng builds */}
                    <div className="px-3 py-2 text-[10px] sm:text-[11px] font-mono tracking-wider text-muted-foreground bg-background border border-border/40 whitespace-nowrap shrink-0">
                      ENG BUILDS
                    </div>

                    {/* Arrow */}
                    <div className="flex-1 min-w-2 h-[1px]" style={{ background: "var(--accent-gold)", opacity: 0.4 }} />

                    {/* Heurica */}
                    <div
                      className="px-3 py-2 text-center border whitespace-nowrap shrink-0"
                      style={{
                        color: "var(--accent-gold-dark)",
                        background: "var(--accent-gold-muted)",
                        borderColor: "color-mix(in srgb, var(--accent-gold) 40%, transparent)",
                      }}
                    >
                      <span className="block text-[10px] sm:text-[11px] font-mono tracking-wider font-medium">HEURICA</span>
                      <span className="block text-[9px] sm:text-[10px] font-mono tracking-wider opacity-70 mt-0.5">UX DIRECTION</span>
                    </div>

                    {/* Arrow */}
                    <div className="flex-1 min-w-2 h-[1px]" style={{ background: "var(--accent-gold)", opacity: 0.4 }} />

                    {/* Ship */}
                    <div
                      className="px-3 py-2 text-[10px] sm:text-[11px] font-mono tracking-wider border whitespace-nowrap shrink-0"
                      style={{
                        color: "var(--accent-gold-dark)",
                        background: "var(--accent-gold-muted)",
                        borderColor: "color-mix(in srgb, var(--accent-gold) 40%, transparent)",
                      }}
                    >
                      SHIP
                    </div>

                    {/* Dashed arrow */}
                    <div className="flex-1 min-w-2 h-[1px] border-t border-dashed border-border/40" />

                    {/* Next feature */}
                    <div className="px-3 py-2 text-[10px] sm:text-[11px] font-mono tracking-wider text-muted-foreground bg-background border border-border/40 whitespace-nowrap shrink-0">
                      NEXT FEATURE
                    </div>
                  </div>

                  {/* Annotations row */}
                  <div className="flex flex-row items-start w-full">
                    {/* Spacer for first 3 items */}
                    <div className="flex-1" />
                    <span className="text-[9px] sm:text-[10px] font-mono tracking-wider text-muted-foreground opacity-50 whitespace-nowrap text-center" style={{ flexBasis: "25%" }}>
                      Heurica exits
                    </span>
                    <div className="flex-1" />
                    <span className="text-[9px] sm:text-[10px] font-mono tracking-wider text-muted-foreground opacity-50 whitespace-nowrap text-right">
                      Your team continues
                    </span>
                  </div>
                </div>
              </div>
            </div>

          </div>
          </div>
        </div>
      </div>
    </section>
  )
}
