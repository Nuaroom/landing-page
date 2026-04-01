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
                className="text-lg sm:text-xl md:text-2xl font-normal mb-8 text-foreground leading-relaxed"
                style={{ fontFamily: "var(--font-ibm-plex-serif), serif" }}
              >
                {t("home.compare.without.title1")} <br className="hidden lg:block" />{t("home.compare.without.title2")}
              </h3>

              {/* Container */}
              <div className="border border-border/40 rounded-none p-6 sm:p-8 bg-background">
                <div className="flex items-center justify-center">
                  <svg viewBox="0 0 300 240" width="300" height="240" fill="none" className="w-full max-w-[300px] h-auto">
                    {/* Circular dashed path */}
                    <ellipse
                      cx="150" cy="120" rx="120" ry="90"
                      stroke="var(--accent-pink)"
                      strokeWidth="1"
                      strokeDasharray="6 4"
                      strokeOpacity="0.25"
                      fill="none"
                    />

                    {/* Rebuild — top */}
                    <rect x="104" y="8" width="92" height="32" rx="0" fill="var(--background)" stroke="currentColor" strokeWidth="1" strokeOpacity="0.15" />
                    <text
                      x="150"
                      y="29"
                      textAnchor="middle"
                      className="text-[11px] font-mono tracking-wider fill-muted-foreground"
                    >
                      REBUILD
                    </text>

                    {/* Rework — right */}
                    <rect x="214" y="96" width="80" height="32" rx="0" fill="var(--background)" stroke="var(--accent-pink)" strokeWidth="1" strokeOpacity="0.25" />
                    <text
                      x="254"
                      y="117"
                      textAnchor="middle"
                      className="text-[11px] font-mono tracking-wider fill-[var(--accent-pink)]"
                      style={{ opacity: 0.7 }}
                    >
                      REWORK
                    </text>

                    {/* Rebuild — bottom */}
                    <rect x="104" y="200" width="92" height="32" rx="0" fill="var(--background)" stroke="currentColor" strokeWidth="1" strokeOpacity="0.15" />
                    <text
                      x="150"
                      y="221"
                      textAnchor="middle"
                      className="text-[11px] font-mono tracking-wider fill-muted-foreground"
                    >
                      REBUILD
                    </text>

                    {/* Rework — left */}
                    <rect x="6" y="96" width="80" height="32" rx="0" fill="var(--background)" stroke="var(--accent-pink)" strokeWidth="1" strokeOpacity="0.25" />
                    <text
                      x="46"
                      y="117"
                      textAnchor="middle"
                      className="text-[11px] font-mono tracking-wider fill-[var(--accent-pink)]"
                      style={{ opacity: 0.7 }}
                    >
                      REWORK
                    </text>

                    {/* Center label */}
                    <text
                      x="150"
                      y="125"
                      textAnchor="middle"
                      className="text-[11px] font-mono tracking-widest fill-muted-foreground opacity-30"
                    >
                      REPEAT
                    </text>
                  </svg>
                </div>
              </div>
            </div>

            {/* Right: With Heurica */}
            <div className="md:border-l md:border-border/40 md:pl-16 flex flex-col">
              <h3
                className="text-lg sm:text-xl md:text-2xl font-normal mb-8 text-foreground leading-relaxed"
                style={{ fontFamily: "var(--font-ibm-plex-serif), serif" }}
              >
                {t("home.compare.with.title1")} <br className="hidden lg:block" />{t("home.compare.with.title2")}
              </h3>

              {/* Container */}
              <div className="border border-border/40 rounded-none p-6 sm:p-8 flex-1 flex items-center bg-background">
                <div className="flex flex-row items-center w-full">
                  {/* Step 1 */}
                  <div
                    className="px-4 py-2.5 text-[11px] font-mono tracking-wider whitespace-nowrap rounded-none text-muted-foreground bg-background border border-border/40"
                  >
                    MAP
                  </div>

                  {/* Connecting line */}
                  <div className="flex-1 min-w-3 h-[1px] bg-border/40" />

                  {/* Step 2 */}
                  <div
                    className="px-4 py-2.5 text-[11px] font-mono tracking-wider whitespace-nowrap rounded-none text-muted-foreground bg-background border border-border/40"
                  >
                    BUILD
                  </div>

                  {/* Connecting line */}
                  <div className="flex-1 min-w-3 h-[1px] bg-border/40" />

                  {/* Step 3 — highlighted */}
                  <div
                    className="px-4 py-2.5 text-[11px] font-mono tracking-wider whitespace-nowrap rounded-none border"
                    style={{
                      color: "var(--accent-gold-dark)",
                      background: "var(--accent-gold-muted)",
                      borderColor: "color-mix(in srgb, var(--accent-gold) 40%, transparent)",
                    }}
                  >
                    SHIP
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
