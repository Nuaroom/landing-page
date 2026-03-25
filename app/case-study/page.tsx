"use client"

import Link from "next/link"
import { Footer } from "@/components/Footer"
import { HeroCircles } from "@/components/HeroCircles"
import { useLanguage } from "@/components/language-context"

export default function CaseStudyPage() {
  const { t } = useLanguage()

  return (
    <>
      <main className="flex-1">
        {/* Header */}
        <section className="pt-16 sm:pt-20 pb-4 sm:pb-6 overflow-hidden">
          <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 max-w-7xl relative">
            <HeroCircles />
            <h1
              className="text-4xl md:text-5xl font-normal"
              style={{ fontFamily: "var(--font-ibm-plex-serif), serif" }}
            >
              {t("csl.title")}
            </h1>
            <p
              className="text-lg sm:text-xl mt-4 font-normal"
              style={{ fontFamily: "var(--font-ibm-plex-serif), serif" }}
            >
              {t("csl.subtitle")}
            </p>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-8 sm:py-12">
          <div className="border-t border-b border-border/40">
            <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 max-w-7xl">
              <div className="flex flex-col gap-6 sm:gap-8">
                {/* Card 1 - Enterprise Data Security */}
                <Link
                  href="/case-study/enterprise-data-security"
                  className="group block border border-border/40"
                  style={{ backgroundColor: "var(--case-study-bg)" }}
                >
                  <article className="h-full flex flex-col">
                    <div className="p-5 sm:p-8 md:p-10 flex flex-col flex-1">
                      <div className="flex items-center gap-2 mb-4">
                        <span className="text-xs text-muted-foreground px-2.5 py-0.5 rounded-full border border-border/60">{t("csl.card1.industry")}</span>
                      </div>
                      <h2 className="text-2xl font-semibold mb-5 group-hover:text-foreground transition-colors leading-tight">
                        {t("csl.card1.title")}
                      </h2>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                        {t("csl.card1.excerpt")}
                      </p>
                      <span
                        className="text-sm font-medium mt-auto"
                        style={{ color: "var(--accent-gold)" }}
                      >
                        {t("csl.readmore")} &rsaquo;
                      </span>
                    </div>
                  </article>
                </Link>

                {/* Coming soon card */}
                <div
                  className="block border border-border/40"
                >
                  <article className="h-full flex flex-col">
                    <div className="p-5 sm:p-8 md:p-10 flex flex-col flex-1">
                      <div className="flex items-center gap-2 mb-4">
                        <span className="text-xs text-muted-foreground px-2.5 py-0.5 rounded-full border border-border/60">{t("csl.card2.industry")}</span>
                      </div>
                      <h2 className="text-2xl font-semibold mb-5 leading-tight">
                        {t("csl.card2.title")}
                      </h2>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                        {t("csl.card2.excerpt")}
                      </p>
                      <span className="text-sm font-medium mt-auto text-muted-foreground">
                        {t("csl.comingsoon")}
                      </span>
                    </div>
                  </article>
                </div>

                {/* Financial card */}
                <div
                  className="block border border-border/40"
                >
                  <article className="h-full flex flex-col">
                    <div className="p-5 sm:p-8 md:p-10 flex flex-col flex-1">
                      <div className="flex items-center gap-2 mb-4">
                        <span className="text-xs text-muted-foreground px-2.5 py-0.5 rounded-full border border-border/60">{t("csl.card3.industry")}</span>
                      </div>
                      <h2 className="text-2xl font-semibold mb-5 leading-tight">
                        {t("csl.card3.title")}
                      </h2>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                        {t("csl.card3.excerpt")}
                      </p>
                      <span className="text-sm font-medium mt-auto text-muted-foreground">
                        {t("csl.comingsoon")}
                      </span>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
