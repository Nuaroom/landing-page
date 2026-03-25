"use client"

import { Footer } from "@/components/Footer"
import { HeroCircles } from "@/components/HeroCircles"
import { useLanguage } from "@/components/language-context"

export default function CareersPage() {
  const { t } = useLanguage()

  return (
    <>
      <main className="flex-1">
        {/* Header */}
        <section className="pt-16 sm:pt-20 pb-8 sm:pb-12 overflow-hidden">
          <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 max-w-7xl relative">
            <HeroCircles />
            <div className="px-0 sm:px-8 md:px-10">
              <h1
                className="text-4xl md:text-5xl font-normal mb-4"
                style={{ fontFamily: "var(--font-ibm-plex-serif), serif" }}
              >
                {t("careers.title")}
              </h1>
              <p className="text-muted-foreground">
                {t("careers.subtitle").split("yunbin@heurica.co")[0]}
                <a
                  href="mailto:yunbin@heurica.co"
                  className="hover:text-foreground transition-colors"
                  style={{ color: "var(--accent-gold)" }}
                >
                  yunbin@heurica.co
                </a>
                {t("careers.subtitle").split("yunbin@heurica.co")[1]}
              </p>
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="py-8 sm:py-12">
          <div className="border-t border-b border-border/40">
            <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 max-w-7xl">
              <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
                {/* Job 1 */}
                <div className="h-full p-5 sm:p-8 md:p-10 border border-border/40 md:border-0 md:border-l md:border-r">
                  <h3 className="text-xl font-semibold mb-2">
                    {t("careers.job1.title")}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {t("careers.job1.description")}
                  </p>
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <span className="px-2 py-1 border border-border/50">
                      {t("careers.fulltime")}
                    </span>
                    <span className="px-2 py-1 border border-border/50">
                      {t("careers.location")}
                    </span>
                  </div>
                </div>

                {/* Job 2 */}
                <div className="h-full p-5 sm:p-8 md:p-10 border border-border/40 md:border-0 md:border-l md:border-r">
                  <h3 className="text-xl font-semibold mb-2">
                    {t("careers.job2.title")}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {t("careers.job2.description")}
                  </p>
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <span className="px-2 py-1 border border-border/50">
                      {t("careers.fulltime")}
                    </span>
                    <span className="px-2 py-1 border border-border/50">
                      {t("careers.location")}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </>
  )
}
