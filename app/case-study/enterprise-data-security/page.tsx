"use client"

import Link from "next/link"
import { useEffect, useRef } from "react"
import { HeroCircles } from "@/components/HeroCircles"
import { Footer } from "@/components/Footer"
import { useLanguage } from "@/components/language-context"

export default function EnterpriseDataSecurityCaseStudy() {
  const articleRef = useRef<HTMLElement>(null)
  const { t } = useLanguage()

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible")
          }
        })
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    )

    const fadeElements = articleRef.current?.querySelectorAll(".fade-in")
    fadeElements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <>
      <main className="flex-1" ref={articleRef}>
        {/* Hero */}
        <header className="min-h-[70vh] flex flex-col justify-center py-20 md:py-32 overflow-hidden">
          <div className="container mx-auto px-6 lg:px-12 max-w-3xl relative">
            <HeroCircles />
            <div
              className="text-xs font-mono uppercase tracking-wider mb-8 flex items-center gap-4"
              style={{ color: "var(--accent-gold)" }}
            >
              <span>{t("cs.label")}</span>
              <span className="h-px flex-1 bg-border/40" />
            </div>

            <h1
              className="text-3xl sm:text-4xl md:text-5xl font-normal leading-tight mb-6"
              style={{ fontFamily: "var(--font-ibm-plex-serif), serif" }}
            >
              {t("cs.hero.title")}{" "}
              <em style={{ color: "var(--accent-gold)" }}>{t("cs.hero.titleEmphasis")}</em>
            </h1>

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl mb-6">
              {t("cs.hero.description")}
            </p>

            <p className="text-xs sm:text-sm text-muted-foreground">
              {t("cs.hero.meta")}
            </p>
          </div>
        </header>

        {/* Testimonial */}
        <section className="py-16 sm:py-20">
          <div className="container mx-auto px-6 lg:px-12 max-w-3xl fade-in">
            <div
              className="p-8 sm:p-12 rounded-none border border-border/40 text-center bg-[#FDFCF8] dark:bg-[#1C1917]"
            >
              <p
                className="text-lg sm:text-xl md:text-2xl font-normal leading-relaxed max-w-xl mx-auto mb-4"
                style={{ fontFamily: "var(--font-ibm-plex-serif), serif" }}
              >
                &ldquo;{t("cs.testimonial.quote")}&rdquo;
              </p>
              <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                &mdash; {t("cs.testimonial.role")}
              </span>
            </div>
          </div>
        </section>

        {/* The Problem */}
        <section className="border-t border-border/40 py-16 sm:py-20">
          <div className="container mx-auto px-6 lg:px-12 max-w-3xl">
            <div
              className="text-xs font-mono uppercase tracking-wider mb-3 fade-in"
              style={{ color: "var(--accent-gold)" }}
            >
              {t("cs.problem.label")}
            </div>
            <h2
              className="text-2xl sm:text-3xl font-normal mb-6 fade-in"
              style={{ fontFamily: "var(--font-ibm-plex-serif), serif" }}
            >
              {t("cs.problem.title")}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-10 fade-in">
              {t("cs.problem.description")}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10 fade-in">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="p-5 border border-border/40 rounded-none text-center"
                  style={{ backgroundColor: "var(--case-study-bg)" }}
                >
                  <p
                    className="text-2xl sm:text-3xl font-normal mb-2"
                    style={{ fontFamily: "var(--font-ibm-plex-serif), serif", color: "var(--accent-gold)" }}
                  >
                    {t(`cs.stat.${i}.number`)}
                  </p>
                  <p className="text-xs text-muted-foreground leading-snug">{t(`cs.stat.${i}.label`)}</p>
                </div>
              ))}
            </div>

            {/* Quotes - Row 1: Business Impact */}
            <div className="fade-in mb-6">
              <span className="inline-block text-[11px] font-mono uppercase tracking-wider px-3 py-1 rounded mb-4 bg-muted text-red-500">
                {t("cs.quote.row1.label")}
              </span>
              <div className="grid sm:grid-cols-3 gap-6">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="p-6 border border-border/40 rounded-none flex flex-col justify-between"
                    style={{ backgroundColor: "var(--case-study-bg)" }}
                  >
                    <p
                      className="text-base font-normal mb-4 leading-relaxed"
                      style={{ fontFamily: "var(--font-ibm-plex-serif), serif" }}
                    >
                      &ldquo;{t(`cs.quote.${i}.text`)}&rdquo;
                    </p>
                    <span className="text-xs font-mono text-muted-foreground mt-auto">{t(`cs.quote.${i}.role`)}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quotes - Row 2: UX Problems */}
            <div className="fade-in">
              <span className="inline-block text-[11px] font-mono uppercase tracking-wider px-3 py-1 rounded mb-4 bg-muted text-red-500">
                {t("cs.quote.row2.label")}
              </span>
              <div className="grid sm:grid-cols-3 gap-6">
                {[4, 5, 6].map((i) => (
                  <div
                    key={i}
                    className="p-6 border border-border/40 rounded-none flex flex-col justify-between"
                    style={{ backgroundColor: "var(--case-study-bg)" }}
                  >
                    <p
                      className="text-base font-normal mb-4 leading-relaxed"
                      style={{ fontFamily: "var(--font-ibm-plex-serif), serif" }}
                    >
                      &ldquo;{t(`cs.quote.${i}.text`)}&rdquo;
                    </p>
                    <span className="text-xs font-mono text-muted-foreground mt-auto">{t(`cs.quote.${i}.role`)}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* What We Found */}
        <section className="border-t border-border/40 py-16 sm:py-20">
          <div className="container mx-auto px-6 lg:px-12 max-w-3xl">
            <div
              className="text-xs font-mono uppercase tracking-wider mb-3 fade-in"
              style={{ color: "var(--accent-gold)" }}
            >
              {t("cs.found.label")}
            </div>
            <h2
              className="text-2xl sm:text-3xl font-normal mb-6 fade-in"
              style={{ fontFamily: "var(--font-ibm-plex-serif), serif" }}
            >
              {t("cs.found.title")}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4 fade-in">
              {t("cs.found.p1")}
            </p>
            <p className="text-muted-foreground leading-relaxed mb-10 fade-in">
              {t("cs.found.p2")}
            </p>

            {/* Process cards */}
            <div className="grid sm:grid-cols-2 gap-4 fade-in">
              {[
                { number: "18", key: "1" },
                { number: "77", key: "2" },
                { number: "7", key: "3" },
                { number: "12", key: "4" },
              ].map((card) => (
                <div
                  key={card.number}
                  className="p-6 border border-border/40 rounded-none flex flex-col"
                  style={{ backgroundColor: "var(--case-study-bg)" }}
                >
                  <span className="text-6xl font-normal text-foreground/15 mb-3" style={{ fontFamily: "var(--font-ibm-plex-serif), serif" }}>
                    {card.number}
                  </span>
                  <h3 className="text-base font-semibold mb-3">{t(`cs.process.${card.key}.title`)}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{t(`cs.process.${card.key}.description`)}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* The Result */}
        <section className="border-t border-border/40 py-16 sm:py-20">
          <div className="container mx-auto px-6 lg:px-12 max-w-3xl">
            <div
              className="text-xs font-mono uppercase tracking-wider mb-3 fade-in"
              style={{ color: "var(--accent-gold)" }}
            >
              {t("cs.result.label")}
            </div>
            <h2
              className="text-2xl sm:text-3xl font-normal mb-6 fade-in"
              style={{ fontFamily: "var(--font-ibm-plex-serif), serif" }}
            >
              {t("cs.result.title")}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-10 fade-in">
              {t("cs.result.description")}
            </p>

            {/* What we delivered */}
            <div className="fade-in mb-10">
              <span className="inline-block text-[11px] font-mono uppercase tracking-wider px-3 py-1 rounded mb-4 bg-muted text-green-500">
                {t("cs.result.deliveredLabel")}
              </span>
              <div className="p-6 border border-border/40 rounded-none" style={{ backgroundColor: "var(--case-study-bg)" }}>
                <ul className="space-y-3">
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed">
                      <span className="w-2 h-2 rounded-full bg-green-500 mt-1.5 shrink-0" />
                      {t(`cs.result.delivered.${i}`)}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Outcome cards */}
            <div className="grid sm:grid-cols-3 gap-4 fade-in">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="p-6 border border-border/40 rounded-none"
                  style={{ backgroundColor: "var(--case-study-bg)" }}
                >
                  <h3 className="text-base font-semibold mb-2">{t(`cs.outcome.${i}.title`)}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{t(`cs.outcome.${i}.description`)}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 sm:py-28">
          <div className="container mx-auto px-6 lg:px-12 max-w-3xl text-center fade-in">
            <p
              className="text-lg sm:text-xl md:text-2xl font-normal text-foreground leading-relaxed mb-2"
              style={{ fontFamily: "var(--font-ibm-plex-serif), serif" }}
            >
              {t("cs.cta.line1")}
            </p>
            <p
              className="text-lg sm:text-xl md:text-2xl font-normal text-foreground leading-relaxed mb-8"
              style={{ fontFamily: "var(--font-ibm-plex-serif), serif" }}
            >
              {t("cs.cta.line2")}
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-6 text-base font-semibold h-10 rounded-none transition-colors"
              style={{ backgroundColor: "var(--accent-gold)", color: "var(--background)" }}
            >
              {t("cs.cta.button")} &rsaquo;
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
