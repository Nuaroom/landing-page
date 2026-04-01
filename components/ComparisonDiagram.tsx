"use client"

import { useLanguage } from "@/components/language-context"

export function ComparisonDiagram() {
  const { t } = useLanguage()

  return (
    <section>
      <div className="border-t border-b border-border/40">
        <div className="container mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 xl:px-16">
          <div className="bg-[#FDFCF8] px-6 py-7 sm:px-10 sm:py-9 md:px-14 dark:bg-[#1C1917]">
            <div className="relative grid grid-cols-1 gap-10 md:grid-cols-2 md:items-stretch md:gap-16">
              {/* Center divider — desktop only */}
              <div className="absolute left-1/2 top-0 bottom-0 hidden -translate-x-1/2 md:block">
                <div className="h-full w-px bg-border/40" />
              </div>
              {/* Left — without dedicated UX */}
              <div className="flex min-h-0 flex-col self-stretch md:pr-8">
                <h3
                  className="mb-6 text-lg font-normal leading-relaxed text-foreground sm:text-xl md:text-2xl"
                  style={{ fontFamily: "var(--font-ibm-plex-serif), serif" }}
                >
                  {t("home.compare.without.title1")}
                  <br />
                  {t("home.compare.without.title2")}
                </h3>

                <div className="flex min-h-0 flex-1 items-center justify-center py-4">
                  <div className="flex w-full items-stretch gap-0">
                    <div className="flex min-h-0 flex-1 flex-col items-center justify-start gap-3 border border-border/50 bg-muted/25 p-4 text-center dark:bg-muted/15 sm:p-5 md:min-h-[7.25rem]">
                      <div className="flex min-h-[1.75rem] w-full items-center justify-center sm:min-h-[2rem]">
                        <span
                          className="text-sm font-normal text-foreground sm:text-base"
                          style={{ fontFamily: "var(--font-ibm-plex-serif), serif" }}
                        >
                          {t("home.compare.buildv1")}
                        </span>
                      </div>
                      <p className="w-full text-balance text-center text-xs leading-relaxed text-muted-foreground">
                        {t("home.compare.without.noDirection")}
                      </p>
                    </div>

                    <div
                      className="flex shrink-0 flex-col items-center justify-center self-center gap-0 px-2 sm:px-3"
                      aria-hidden
                    >
                      <span
                        className="text-base font-normal leading-none sm:text-lg"
                        style={{ fontFamily: "var(--font-ibm-plex-serif), serif", color: "#B54A4A" }}
                      >
                        &rarr;
                      </span>
                      <span
                        className="-mt-1 text-base font-normal leading-none sm:text-lg"
                        style={{ fontFamily: "var(--font-ibm-plex-serif), serif", color: "#B54A4A", opacity: 0.75 }}
                      >
                        &larr;
                      </span>
                    </div>

                    <div
                      className="flex min-h-0 flex-1 flex-col items-center justify-start gap-2 border p-4 text-center sm:p-5 md:min-h-[7.25rem]"
                      style={{
                        background: "rgba(181, 74, 74, 0.08)",
                        borderColor: "rgba(181, 74, 74, 0.2)",
                      }}
                    >
                      <div className="flex min-h-[1.75rem] w-full items-center justify-center sm:min-h-[2rem]">
                        <span
                          className="text-sm font-normal sm:text-base"
                          style={{ fontFamily: "var(--font-ibm-plex-serif), serif", color: "#B54A4A" }}
                        >
                          {t("home.compare.without.uxBreaks")}
                        </span>
                      </div>
                      <p
                        className="w-full text-balance text-center text-xs leading-relaxed"
                        style={{ color: "#B54A4A", opacity: 0.85 }}
                      >
                        {t("home.compare.without.uxBreaksCaption")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right — with Heurica */}
              <div className="flex min-h-0 flex-col self-stretch md:pl-8">
                <h3
                  className="mb-6 text-lg font-normal leading-relaxed text-foreground sm:text-xl md:text-2xl"
                  style={{ fontFamily: "var(--font-ibm-plex-serif), serif" }}
                >
                  {t("home.compare.with.title1")}
                  <br />
                  {t("home.compare.with.title2")}
                </h3>

                <div className="flex min-h-0 flex-1 items-center justify-center py-4">
                  <div className="flex w-full items-stretch gap-0">
                    <div className="flex min-h-0 flex-1 flex-col items-center justify-start gap-3 border border-border/50 bg-muted/25 p-4 text-center dark:bg-muted/15 sm:p-5 md:min-h-[7.25rem]">
                      <div className="flex min-h-[1.75rem] w-full items-center justify-center sm:min-h-[2rem]">
                        <span
                          className="text-sm font-normal text-foreground sm:text-base"
                          style={{ fontFamily: "var(--font-ibm-plex-serif), serif" }}
                        >
                          {t("home.compare.buildv1")}
                        </span>
                      </div>
                      <div className="flex items-center justify-center gap-1">
                        <span className="text-xs text-muted-foreground">{t("home.compare.with.withWord")}</span>
                        <span
                          className="text-xs font-medium"
                          style={{ fontFamily: "var(--font-ibm-plex-serif), serif", color: "var(--accent-gold)" }}
                        >
                          Heurica
                        </span>
                      </div>
                    </div>

                    <div
                      className="flex shrink-0 items-center justify-center self-center px-2 sm:px-3"
                      aria-hidden
                    >
                      <span
                        className="text-lg font-normal leading-none sm:text-xl"
                        style={{
                          fontFamily: "var(--font-ibm-plex-serif), serif",
                          color: "var(--accent-gold)",
                        }}
                      >
                        &rarr;
                      </span>
                    </div>

                    <div
                      className="flex min-h-0 flex-1 flex-col items-center justify-start gap-2 border p-4 text-center sm:p-5 md:min-h-[7.25rem]"
                      style={{
                        background: "var(--accent-gold-muted)",
                        borderColor: "color-mix(in srgb, var(--accent-gold) 30%, transparent)",
                      }}
                    >
                      <div className="flex min-h-[1.75rem] w-full items-center justify-center sm:min-h-[2rem]">
                        <span
                          className="text-sm font-normal sm:text-base"
                          style={{ fontFamily: "var(--font-ibm-plex-serif), serif", color: "var(--accent-gold-dark)" }}
                        >
                          {t("home.compare.with.buildNext")}
                        </span>
                      </div>
                      <p className="w-full text-balance text-center text-xs leading-relaxed">
                        <span
                          className="text-xs font-medium"
                          style={{ fontFamily: "var(--font-ibm-plex-serif), serif", color: "var(--accent-gold)" }}
                        >
                          Heurica
                        </span>
                        <span style={{ color: "var(--accent-gold-dark)", opacity: 0.85 }}>
                          {t("home.compare.with.phase2Line1Tail")}
                        </span>
                        <br />
                        <span style={{ color: "var(--accent-gold-dark)", opacity: 0.85 }}>
                          {t("home.compare.with.phase2Line2")}
                        </span>
                      </p>
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
