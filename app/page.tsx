"use client"

import React, { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, ClipboardCheck, Eye, ShieldCheck, Layers, UserCheck, Target, TrendingUp, HeartPulse, Blocks, Scale, Zap, Users } from "lucide-react"
import Link from "next/link"
import { useTheme } from "next-themes"
import { FlowDiagram } from "@/components/FlowDiagram"
import { ComparisonDiagram } from "@/components/ComparisonDiagram"
import { FlowInfographic } from "@/components/FlowInfographic"
import { useLanguage } from "@/components/language-context"
import { Footer } from "@/components/Footer"
import { HeroCircles } from "@/components/HeroCircles"

/** Hero + mid-page CTA character typing interval (ms); lower = faster */
const HERO_TYPE_MS = 18

const MID_CTA_LINE_1 = "Is your product designed by engineers, hated by users?"
const MID_CTA_LINE_2 = "2 weeks to redesign what your team couldn't fix in a year."

function ThemedImage({ lightSrc, darkSrc, alt, className }: { lightSrc: string; darkSrc: string; alt: string; className?: string }) {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) {
    // Return light image during SSR to prevent hydration mismatch
    return <img src={lightSrc || "/placeholder.svg"} alt={alt} className={className} />
  }

  return <img src={resolvedTheme === "dark" ? darkSrc : lightSrc} alt={alt} className={className} />
}

function RotatingText() {
  const { t } = useLanguage()
  const [displayText, setDisplayText] = useState("")
  const textIndexRef = useRef(0)
  const phaseRef = useRef<"typing" | "pausing" | "deleting">("typing")
  const charIndexRef = useRef(0)
  const textsRef = useRef([t("home.cta.text1"), t("home.cta.text2")])

  useEffect(() => {
    textsRef.current = [t("home.cta.text1"), t("home.cta.text2")]
    charIndexRef.current = 0
    textIndexRef.current = 0
    phaseRef.current = "typing"
    setDisplayText("")
  }, [t])

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>

    const tick = () => {
      const currentText = textsRef.current[textIndexRef.current]

      if (phaseRef.current === "typing") {
        charIndexRef.current++
        setDisplayText(currentText.slice(0, charIndexRef.current))
        if (charIndexRef.current >= currentText.length) {
          phaseRef.current = "pausing"
          timeout = setTimeout(tick, 2500)
        } else {
          timeout = setTimeout(tick, 50)
        }
      } else if (phaseRef.current === "pausing") {
        phaseRef.current = "deleting"
        timeout = setTimeout(tick, 0)
      } else if (phaseRef.current === "deleting") {
        charIndexRef.current--
        setDisplayText(currentText.slice(0, charIndexRef.current))
        if (charIndexRef.current <= 0) {
          textIndexRef.current = (textIndexRef.current + 1) % textsRef.current.length
          phaseRef.current = "typing"
          timeout = setTimeout(tick, 300)
        } else {
          timeout = setTimeout(tick, 20)
        }
      }
    }

    timeout = setTimeout(tick, 50)
    return () => clearTimeout(timeout)
  }, [t])

  return (
    <div className="h-[2em] flex items-center justify-center min-w-0 sm:min-w-[300px]">
      <p
        className="text-lg sm:text-xl md:text-2xl font-normal whitespace-nowrap"
        style={{ fontFamily: "var(--font-ibm-plex-serif), serif" }}
      >
        {displayText}
        <span
          className="inline-block w-[2px] h-[1.1em] bg-current ml-0.5 align-middle"
          style={{ animation: 'blink 1s step-end infinite' }}
        />
      </p>
    </div>
  )
}

function UseCasesSection() {
  const { t } = useLanguage()
  const useCaseItems = [
    { nameKey: "home.builtfor.security", descKey: "home.builtfor.security.desc", Icon: ShieldCheck },
    { nameKey: "home.builtfor.fintech", descKey: "home.builtfor.fintech.desc", Icon: TrendingUp },
    { nameKey: "home.builtfor.healthcare", descKey: "home.builtfor.healthcare.desc", Icon: HeartPulse },
    { nameKey: "home.builtfor.platforms", descKey: "home.builtfor.platforms.desc", Icon: Blocks },
  ]

  return (
    <div className="animate-on-scroll">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 max-w-7xl">
        <div className="overflow-hidden bg-[#FDFCF8] dark:bg-[#1E1E1E]">
          <div className="grid md:grid-cols-2">
            {/* Left: Title + Description */}
            <div className="p-6 sm:p-10 md:p-14 flex flex-col justify-center">
              <p
                className="text-xs font-mono tracking-wider mb-3"
                style={{ color: 'var(--accent-gold)' }}
              >
                {t("home.builtfor.label")}
              </p>
              <h3
                className="text-2xl md:text-3xl font-normal mb-4 leading-tight text-foreground"
                style={{ fontFamily: "var(--font-ibm-plex-serif), serif" }}
              >
                {t("home.builtfor.title1")}
              </h3>
              <p className="text-sm md:text-base text-muted-foreground max-w-md leading-relaxed">
                {t("home.builtfor.desc1")}<br />
                {t("home.builtfor.desc2")}
              </p>
              <Button size="sm" className="px-4 py-1.5 text-xs font-semibold h-8 mt-6 w-fit rounded-none" asChild>
                <Link href="/contact">
                  {t("home.builtfor.cta")} &rsaquo;
                </Link>
              </Button>
            </div>

            {/* Right: 2x2 category grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2">
              {useCaseItems.map((uc, idx) => (
                <div
                  key={uc.nameKey}
                  className={
                    idx < 2
                      ? "p-4 sm:p-8 border-l border-neutral-300/40 dark:border-white/10"
                      : "p-4 sm:p-8 border-l border-t border-neutral-300/40 dark:border-white/10"
                  }
                >
                  <div className="w-10 h-10 border border-neutral-300/60 dark:border-white/15 flex items-center justify-center mb-4">
                    <uc.Icon className="w-5 h-5 text-muted-foreground" />
                  </div>
                  <h4 className="text-sm font-medium text-foreground">{t(uc.nameKey)}</h4>
                  <p className="text-sm text-muted-foreground mt-1">{t(uc.descKey)}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


export default function LandingPage() {
  const { t } = useLanguage()
  const [isMounted, setIsMounted] = useState(false)
  const [typedText, setTypedText] = useState("")
  const [heroTyped, setHeroTyped] = useState(false)
  const [subtitleTyped, setSubtitleTyped] = useState(false)
  const [activeQuote, setActiveQuote] = useState(0)
  const midCtaRef = useRef<HTMLDivElement | null>(null)
  const [midCtaActive, setMidCtaActive] = useState(false)
  const [midCtaLine1, setMidCtaLine1] = useState("")
  const [midCtaLine1Done, setMidCtaLine1Done] = useState(false)
  const [midCtaLine2, setMidCtaLine2] = useState("")
  const [midCtaLine2Done, setMidCtaLine2Done] = useState(false)
  const heroTitle = t("home.hero.title")

  // Handle hash scrolling when navigating from other pages
  useEffect(() => {
    if (window.location.hash) {
      const hash = window.location.hash
      const element = document.querySelector(hash)
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }, 100)
      }
    }
  }, [])

  useEffect(() => {
    setIsMounted(true)
  }, [])

  // Typing animation for hero title
  useEffect(() => {
    if (!isMounted) return
    setTypedText("")
    setHeroTyped(false)
    let i = 0
    const interval = setInterval(() => {
      i++
      setTypedText(heroTitle.slice(0, i))
      if (i >= heroTitle.length) {
        clearInterval(interval)
        setTimeout(() => setHeroTyped(true), 300)
      }
    }, HERO_TYPE_MS)
    return () => clearInterval(interval)
  }, [isMounted, heroTitle])

  useEffect(() => {
    if (!heroTyped) return
    setTimeout(() => setSubtitleTyped(true), 300)
  }, [heroTyped])

  // Mid-page CTA: start typing when section scrolls into view (independent of hero)
  useEffect(() => {
    if (!isMounted) return
    const el = midCtaRef.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setMidCtaActive(true)
          obs.disconnect()
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [isMounted])

  useEffect(() => {
    if (!midCtaActive) return
    setMidCtaLine1("")
    setMidCtaLine1Done(false)
    setMidCtaLine2("")
    setMidCtaLine2Done(false)
    let i = 0
    const id = setInterval(() => {
      i++
      setMidCtaLine1(MID_CTA_LINE_1.slice(0, i))
      if (i >= MID_CTA_LINE_1.length) {
        clearInterval(id)
        setTimeout(() => setMidCtaLine1Done(true), 220)
      }
    }, HERO_TYPE_MS)
    return () => clearInterval(id)
  }, [midCtaActive])

  useEffect(() => {
    if (!midCtaLine1Done) return
    setMidCtaLine2("")
    setMidCtaLine2Done(false)
    let i = 0
    const id = setInterval(() => {
      i++
      setMidCtaLine2(MID_CTA_LINE_2.slice(0, i))
      if (i >= MID_CTA_LINE_2.length) {
        clearInterval(id)
        setTimeout(() => setMidCtaLine2Done(true), 220)
      }
    }, HERO_TYPE_MS)
    return () => clearInterval(id)
  }, [midCtaLine1Done])

  // Scroll animation observer - starts after hero subtitle/CTA appear
  useEffect(() => {
    if (!subtitleTyped) return

    // Delay so sections appear after subtitle/CTA, not simultaneously
    const timeout = setTimeout(() => {
      const elements = document.querySelectorAll('.animate-on-scroll')
      let delay = 0

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              // Stagger elements that are already in view
              const el = entry.target as HTMLElement
              el.style.transitionDelay = `${delay}ms`
              delay += 150
              el.classList.add('is-visible')
              // Reset delay after a pause (for elements that scroll into view later)
              setTimeout(() => { delay = 0 }, 300)
            }
          })
        },
        { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
      )

      elements.forEach((el) => observer.observe(el))

      return () => observer.disconnect()
    }, 600)

    return () => clearTimeout(timeout)
  }, [subtitleTyped])

  // Don't render until mounted to prevent hydration issues
  if (!isMounted) {
    return null
  }

  return (
    <div className="relative">
      {/* Vertical guide lines at container edges */}
      <div
        className="hidden sm:block absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{ zIndex: 1 }}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 h-full">
          <div className="h-full border-l border-r border-border/60" />
        </div>
      </div>

      {/* Hero Section - Keep center-aligned */}
      <section className="flex flex-col relative" style={{ backgroundColor: 'var(--background)' }}>
        {/* Full-width grid */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div
            className="h-full"
            style={{
              backgroundImage: 'linear-gradient(to right, rgba(160,160,160,0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(160,160,160,0.12) 1px, transparent 1px)',
              backgroundSize: '48px 48px',
            }}
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, transparent 60%, var(--background) 100%)' }} />
        </div>
        <div className="relative z-10 px-6 sm:px-8 lg:px-20 pt-16 sm:pt-24 md:pt-32">
          <div className="relative mx-auto flex w-full max-w-4xl flex-col items-center text-center">
            <HeroCircles />

            <h1
              className="text-xl sm:text-2xl md:text-3xl lg:text-[2.25rem] font-normal mb-5 sm:mb-6 leading-tight w-fit max-w-full text-balance"
              style={{ fontFamily: "var(--font-ibm-plex-serif), serif" }}
            >
              {typedText.split('\n').map((line, i) => (
                <span key={i} className={i > 0 ? "block mt-2" : ""}>
                  {line}
                </span>
              ))}
              {!heroTyped && (
                <span className="inline-block ml-1 h-[0.9em] w-[2px] align-middle animate-blink bg-foreground" />
              )}
            </h1>

            <div
              className="mb-8 flex w-full flex-col items-center gap-1 sm:mb-10"
              style={{
                opacity: subtitleTyped ? 1 : 0,
                transform: subtitleTyped ? 'translateY(0)' : 'translateY(20px)',
                transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
              }}
            >
              <p className="max-w-2xl text-sm md:text-base leading-relaxed text-muted-foreground">
                {t("home.hero.subtitle")}
                <br /> {t("home.hero.subtitle2")}
                <br /> {t("home.hero.subtitle3")}
              </p>
            </div>

            <div
              className="flex w-full justify-center"
              style={{
                opacity: subtitleTyped ? 1 : 0,
                transform: subtitleTyped ? 'translateY(0)' : 'translateY(20px)',
                transition: 'opacity 0.6s ease-out 0.2s, transform 0.6s ease-out 0.2s',
              }}
            >
              <Button size="default" className="h-10 rounded-none px-6 py-2.5 text-base font-semibold" asChild>
                <Link href="/contact">
                  {t("home.hero.cta")} &rsaquo;
                </Link>
              </Button>
            </div>
          </div>
        </div>

      </section>

      {/* Case Study Section */}
      <section className="py-10 sm:py-14 border-b border-border/60">
        <div className="border-t border-b border-border/60 animate-on-scroll">
          <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 max-w-7xl">
            <div className="overflow-hidden" style={{ backgroundColor: 'var(--case-study-bg)' }}>
            <div className="grid sm:grid-cols-2">
              {/* Left: Content */}
              <div className="flex flex-col justify-between px-6 py-5 sm:px-10 sm:py-8 md:px-14 md:py-10">
                <div>
                  <p
                    className="text-xs font-mono tracking-wider mb-8 sm:mb-10"
                    style={{ color: 'var(--accent-gold)' }}
                  >
                    CASE STUDY — FORTUNE 100-SERVING SECURITY ENTERPRISE
                  </p>
                  <div className="relative min-h-[140px] sm:min-h-[160px]">
                    <div
                      className="transition-all duration-500 ease-in-out"
                      style={{
                        opacity: activeQuote === 0 ? 1 : 0,
                        transform: activeQuote === 0 ? 'translateX(0)' : 'translateX(-20px)',
                        position: activeQuote === 0 ? 'relative' : 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        pointerEvents: activeQuote === 0 ? 'auto' : 'none',
                      }}
                    >
                      <h2
                        className="mb-3 text-lg font-normal leading-relaxed text-foreground sm:text-xl md:text-2xl"
                        style={{ fontFamily: "var(--font-ibm-plex-serif), serif" }}
                      >
                        &ldquo;{t("home.casestudy.quote.highlight1")}{t("home.casestudy.quote.2")} Heurica fixed in {t("home.casestudy.quote.highlight2")}{t("home.casestudy.quote.3")}&rdquo;
                      </h2>
                      <p className="text-sm md:text-base leading-relaxed text-muted-foreground">&mdash; {t("home.casestudy.role")}</p>
                    </div>
                    <div
                      className="transition-all duration-500 ease-in-out"
                      style={{
                        opacity: activeQuote === 1 ? 1 : 0,
                        transform: activeQuote === 1 ? 'translateX(0)' : 'translateX(20px)',
                        position: activeQuote === 1 ? 'relative' : 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        pointerEvents: activeQuote === 1 ? 'auto' : 'none',
                      }}
                    >
                      <h2
                        className="mb-3 text-lg font-normal leading-relaxed text-foreground sm:text-xl md:text-2xl"
                        style={{ fontFamily: "var(--font-ibm-plex-serif), serif" }}
                      >
                        &ldquo;{t("home.casestudy.quote2.1")}{" "}
                        {t("home.casestudy.quote2.2a")}
                        {t("home.casestudy.quote2.highlight")}
                        {t("home.casestudy.quote2.2b")}&rdquo;
                      </h2>
                      <p className="text-sm md:text-base leading-relaxed text-muted-foreground">&mdash; {t("home.casestudy.quote2.role")}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 mt-6">
                    <button
                      onClick={() => setActiveQuote(activeQuote === 0 ? 1 : 0)}
                      className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                      aria-label={activeQuote === 0 ? "Next testimonial" : "Previous testimonial"}
                    >
                      <span className="tabular-nums">{activeQuote + 1} / 2</span>
                      <span className="inline-flex items-center justify-center w-7 h-7 border border-current/20 rounded-full">
                        {activeQuote === 0 ? "\u2192" : "\u2190"}
                      </span>
                    </button>
                  </div>
                </div>

              </div>

              {/* Right: Image */}
              <div className="relative overflow-hidden flex items-center justify-center">
                <div
                  className="absolute inset-0 hidden md:block"
                  style={{
                    background: 'linear-gradient(to right, var(--case-study-bg) 0%, var(--case-study-bg) 5%, transparent 40%)',
                    zIndex: 2,
                  }}
                />
                <div
                  className="absolute inset-0 md:hidden"
                  style={{
                    background: 'linear-gradient(to bottom, var(--case-study-bg) 0%, var(--case-study-bg) 5%, transparent 40%)',
                    zIndex: 2,
                  }}
                />
                <div className="absolute inset-0 dark:bg-black/30" style={{ zIndex: 1 }} />
                <img
                  src="/golden-ratio.svg"
                  alt="Golden ratio design system"
                  className="w-full h-full object-cover"
                  style={{ opacity: 0.55 }}
                />
                <div
                  className="absolute inset-x-0 bottom-0 h-1/2"
                  style={{
                    background: 'linear-gradient(to top, var(--case-study-bg) 0%, var(--case-study-bg) 10%, transparent 100%)',
                    zIndex: 2,
                  }}
                />
                <div className="absolute bottom-7 right-5 flex flex-col items-end sm:bottom-10 sm:right-8 md:bottom-12 md:right-10" style={{ zIndex: 3 }}>
                  <Link
                    href="/case-study/enterprise-data-security"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-10 items-center justify-center rounded-none px-6 py-2.5 text-base font-semibold transition-opacity hover:opacity-80"
                    style={{ color: "#f5c542", backgroundColor: "#333" }}
                  >
                    {t("home.casestudy.readmore")} &rsaquo;
                  </Link>
                </div>
              </div>
            </div>
            {/* Case Study Impact Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 border-t border-border/60" style={{ backgroundColor: 'var(--case-study-bg)' }}>
              {[
                { metric: "2 weeks \u2192 1 hour", label: "Onboard faster" },
                { metric: "Hide \u2192 Demo first", label: "Sell more" },
                { metric: "100+ \u2192 8 tickets", label: "Reduce support tickets" },
                { metric: "2 hrs \u2192 10 mins", label: "User confidence" },
              ].map((card, i) => (
                <div
                  key={i}
                  className={`px-3 py-8 text-center sm:px-4 sm:py-9 md:px-5 md:py-10${i > 0 ? " border-l border-border/60" : ""}${i >= 2 ? " border-t border-border/60 md:border-t-0" : ""}`}
                >
                  <p
                    className="mb-1.5 text-lg font-normal leading-snug text-foreground sm:mb-1 sm:whitespace-nowrap sm:text-xl md:text-2xl"
                    style={{ fontFamily: "var(--font-ibm-plex-serif), serif" }}
                  >
                    {card.metric}
                  </p>
                  <p className="text-sm md:text-base leading-relaxed text-muted-foreground">{card.label}</p>
                </div>
              ))}
            </div>
            </div>
          </div>
        </div>
      </section>

      {/* Built for → spacer → mid CTA; bottom edge is FlowInfographic border-t (avoid duplicate with section border-b) */}
      <section>
        <UseCasesSection />
        <div className="h-10 sm:h-14 border-t border-border/60" aria-hidden="true" />
        <div ref={midCtaRef} className="border-t border-border/60">
          <div className="container mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 xl:px-16">
            <div className="px-6 py-6 sm:px-10 sm:py-8 md:px-14">
              <h3
                className="max-w-4xl text-2xl font-normal leading-tight text-foreground md:text-3xl"
                style={{ fontFamily: "var(--font-ibm-plex-serif), serif" }}
              >
                {midCtaLine1}
                {midCtaActive && !midCtaLine1Done && (
                  <span className="inline-block ml-1 h-[0.9em] w-[2px] align-middle animate-blink bg-foreground" />
                )}
              </h3>
              <h3
                className="mt-3 max-w-4xl text-2xl font-normal leading-tight sm:mt-4 md:text-3xl"
                style={{ fontFamily: "var(--font-ibm-plex-serif), serif", visibility: midCtaLine1Done ? 'visible' : 'hidden' }}
              >
                {midCtaLine1Done ? midCtaLine2 : '\u00A0'}
                {midCtaLine1Done && !midCtaLine2Done && (
                  <span className="inline-block ml-1 h-[0.9em] w-[2px] align-middle animate-blink bg-foreground" />
                )}
              </h3>
            </div>
          </div>
        </div>
      </section>

      <FlowInfographic />

      {/* No border-t: FlowInfographic already has border-b (avoids double line with spacer) */}
      <div className="h-10 sm:h-14" aria-hidden="true" />

      {/* UX Reasoning Engine Section */}
      <section id="how-it-works" className="pt-10 sm:pt-14 border-t border-border/60">
        <div className="container mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 xl:px-16">
          <div className="px-6 sm:px-10 md:px-14 pb-10 sm:pb-14">
            <div className="mb-10 animate-on-scroll">
              <p
                className="text-xs font-mono tracking-wider mb-3"
                style={{ color: 'var(--accent-gold)' }}
              >
                {t("home.engine.label")}
              </p>
              <h2
                className="text-xl md:text-2xl lg:text-3xl font-normal mb-4 leading-tight"
                style={{ fontFamily: "var(--font-ibm-plex-serif), serif" }}
              >
                {t("home.engine.title")}<em>{t("home.engine.title.italic")}</em>{t("home.engine.title.suffix")}
              </h2>
              <p className="text-sm md:text-base text-muted-foreground max-w-xl leading-relaxed">
                Expert UX judgment, embedded at the speed your team ships.
              </p>
            </div>
            <div className="animate-on-scroll">
              <FlowDiagram />
            </div>
          </div>
        </div>
      </section>
      <div className="h-10 sm:h-14 border-t border-border/60" aria-hidden="true" />
      {/* Enterprise-Ready from Day 1 Section */}
      <section className="pt-10 sm:pt-14 pb-10 sm:pb-14">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 max-w-7xl">
          <div className="text-center mb-6 animate-on-scroll">
            <h2
              className="text-xl md:text-2xl lg:text-3xl font-normal mb-3 leading-tight"
              style={{ fontFamily: "var(--font-ibm-plex-serif), serif" }}
            >
              {t("home.enterprise.title")}
            </h2>
            <p className="text-base text-muted-foreground max-w-xl mx-auto">
              {t("home.enterprise.subtitle")}
            </p>
          </div>
        </div>

        {/* Cards grid - border lines extend full width */}
        <div className="border-t border-b border-border/60 animate-on-scroll">
          <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 max-w-7xl">
            <div className="grid sm:grid-cols-3">
              {/* Card 1: Traceable Decisions */}
              <div className="border-b border-border/60 p-5 sm:p-8 md:p-10 sm:border-b-0 sm:border-r">
                <div className="mb-4">
                  <Scale className="w-6 h-6 text-muted-foreground" />
                </div>
                <h3 className="text-sm font-medium mb-2">{t("home.enterprise.card1.title")}</h3>
                <p className="text-sm text-muted-foreground">
                  {t("home.enterprise.card1.desc")}
                </p>
              </div>

              {/* Card 2: No Customer Data Required */}
              <div className="border-b border-border/60 p-5 sm:p-8 md:p-10 sm:border-b-0 sm:border-r">
                <div className="mb-4">
                  <Zap className="w-6 h-6 text-muted-foreground" />
                </div>
                <h3 className="text-sm font-medium mb-2">{t("home.enterprise.card2.title")}</h3>
                <p className="text-sm text-muted-foreground">
                  {t("home.enterprise.card2.desc")}
                </p>
              </div>

              {/* Card 3: Works With Your Stack */}
              <div className="p-5 sm:p-8 md:p-10">
                <div className="mb-4">
                  <Users className="w-6 h-6 text-muted-foreground" />
                </div>
                <h3 className="text-sm font-medium mb-2">{t("home.enterprise.card3.title")}</h3>
                <p className="text-sm text-muted-foreground">
                  {t("home.enterprise.card3.desc")}
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>
      <div className="hidden">

        {/* Features Section - Left-align title and increase margins */}
        <section className="py-20 px-8 lg:px-20">
          <div className="container mx-auto px-8 lg:px-20 max-w-6xl">
            <div className="mb-5">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
                Fast-moving teams deserve UX that keeps up.
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="border-border/60 bg-card/50 backdrop-blur-sm p-0">
                <CardContent className="p-6">
                  <div className="relative w-full mb-6 flex items-center justify-center overflow-hidden">
                    <ThemedImage
                      lightSrc="/spot-usability-gaps-light.png"
                      darkSrc="/spot-usability-gaps-dark.png"
                      alt="Spot usability gaps interface"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <h3 className="font-semibold mb-1">Spot usability gaps</h3>
                  <p className="text-sm text-muted-foreground">Ship without blind spots. Avoid costly design debt.</p>
                </CardContent>
              </Card>

              <Card className="border-border/60 bg-card/50 backdrop-blur-sm p-0">
                <CardContent className="p-6">
                  <div className="relative w-full mb-6 flex items-center justify-center overflow-hidden">
                    <ThemedImage
                      lightSrc="/accelerate-ab-insights-light.png"
                      darkSrc="/accelerate-ab-insights-dark.png"
                      alt="Spot usability gaps interface"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <h3 className="font-semibold mb-1">Accelerate A/B insights</h3>
                  <p className="text-sm text-muted-foreground">
                    Get rationale-backed answers aligned with business goals — before investing in full tests.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border/60 bg-card/50 backdrop-blur-sm p-0">
                <CardContent className="p-6">
                  <div className="relative w-full mb-6 flex items-center justify-center overflow-hidden">
                    <ThemedImage
                      lightSrc="/scale-without-duct-taping-light.png"
                      darkSrc="/scale-without-duct-taping-dark.png"
                      alt="Spot usability gaps interface"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <h3 className="font-semibold mb-1">Scale without duct taping</h3>
                  <p className="text-sm text-muted-foreground">
                    Turn every decision into a reusable UX pattern. Grow without redesigning from scratch.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Principle-backed Section - Redesigned with scroll animations */}
        <section className="py-20 px-8 lg:px-20 bg-muted/20">
          <div className="container mx-auto px-8 lg:px-20 max-w-6xl">
            <div className="space-y-16">
              {/* Row 1: Intro title and paragraph */}
              <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-start">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-balance leading-tight">
                    Make every design decision UX principle-backed.
                  </h2>
                </div>
                <div>
                  <p className="text-muted-foreground text-pretty leading-relaxed">
                    Lean teams move fast, but vibe-coded UX piles up design debt.
                    <br />
                    Heurica.ai applies UX principles, clarifies trade-offs,
                    <br />
                    and builds reusable design systems — so your product scales smoothly.
                  </p>
                </div>
              </div>

              {/* Row 2: UX Design Audit */}
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">UX Design Audit</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Like Chrome Inspect,
                    <br className="lg:block hidden" />
                    but backed with suggestions
                    <br />
                    based on UX principles.
                  </p>
                </div>
                <div className="flex justify-center lg:justify-end">
                  <div
                    className="aspect-[4/2] w-full rounded-lg border p-3 relative shadow-sm"
                    style={{
                      backgroundColor: "var(--mockup-bg)",
                      borderColor: "var(--mockup-border)",
                    }}
                  >
                    {/* Browser chrome */}
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "var(--mockup-chrome)" }}></div>
                      <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "var(--mockup-chrome)" }}></div>
                      <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "var(--mockup-chrome)" }}></div>
                      <div className="ml-3 h-4 rounded flex-1" style={{ backgroundColor: "var(--mockup-bar)" }}></div>
                    </div>
                    {/* Page content */}
                    <div className="space-y-2">
                      <div
                        className="h-4 rounded w-3/4"
                        style={{ backgroundColor: "var(--mockup-content-primary)" }}
                      ></div>
                      <div
                        className="h-3 rounded w-full"
                        style={{ backgroundColor: "var(--mockup-content-secondary)" }}
                      ></div>
                      <div
                        className="h-3 rounded w-5/6"
                        style={{ backgroundColor: "var(--mockup-content-secondary)" }}
                      ></div>
                      <div className="grid grid-cols-2 gap-2 mt-3">
                        <div
                          className="h-12 rounded"
                          style={{ backgroundColor: "var(--mockup-content-secondary)" }}
                        ></div>
                        <div
                          className="h-12 rounded"
                          style={{ backgroundColor: "var(--mockup-content-secondary)" }}
                        ></div>
                      </div>
                    </div>
                    {/* UX inspection overlays */}
                    <div
                      className="absolute top-10 right-2 text-xs px-2 py-1 rounded border"
                      style={{
                        backgroundColor: "var(--overlay-blue-bg)",
                        color: "var(--overlay-blue-text)",
                        borderColor: "var(--overlay-blue-border)",
                      }}
                    >
                      Low contrast
                    </div>
                    <div
                      className="absolute bottom-6 left-2 text-xs px-2 py-1 rounded border"
                      style={{
                        backgroundColor: "var(--overlay-orange-bg)",
                        color: "var(--overlay-orange-text)",
                        borderColor: "var(--overlay-orange-border)",
                      }}
                    >
                      Missing alt
                    </div>
                  </div>
                </div>
              </div>

              {/* Row 3: Clear Design Trade-offs */}
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">Clear Design Trade-offs</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Design options comparisons like
                    <br className="lg:block hidden" />
                    business vs. usability trade-offs,
                    <br />
                    to move fast without blind guesses.
                  </p>
                </div>
                <div className="flex justify-center lg:justify-end">
                  <div
                    className="aspect-[4/2] w-full rounded-lg border p-3 relative shadow-sm"
                    style={{
                      backgroundColor: "var(--mockup-bg)",
                      borderColor: "var(--mockup-border)",
                    }}
                  >
                    <div className="text-xs font-medium mb-2 text-center" style={{ color: "var(--mockup-text)" }}>
                      Design Options
                    </div>
                    <div className="grid grid-cols-2 gap-2 h-full">
                      <div
                        className="rounded border p-2 relative"
                        style={{
                          backgroundColor: "var(--option-bg)",
                          borderColor: "var(--option-border)",
                        }}
                      >
                        <div className="text-xs font-medium mb-2" style={{ color: "var(--option-text)" }}>
                          Option A
                        </div>
                        <div className="space-y-2">
                          <div
                            className="h-2 rounded w-full"
                            style={{ backgroundColor: "var(--mockup-content-secondary)" }}
                          ></div>
                          <div
                            className="h-2 rounded w-3/4"
                            style={{ backgroundColor: "var(--mockup-content-secondary)" }}
                          ></div>
                          <div
                            className="h-6 rounded w-full mt-2"
                            style={{ backgroundColor: "var(--option-button)" }}
                          ></div>
                        </div>
                        <div className="absolute bottom-1 left-2 right-2">
                          <div className="text-xs" style={{ color: "var(--option-score)" }}>
                            Score: 6/10
                          </div>
                        </div>
                      </div>
                      <div
                        className="rounded border-2 p-2 relative"
                        style={{
                          backgroundColor: "var(--option-bg)",
                          borderColor: "var(--option-border-selected)",
                        }}
                      >
                        <div className="text-xs font-medium mb-2" style={{ color: "var(--option-text)" }}>
                          Option B
                        </div>
                        <div className="space-y-2">
                          <div
                            className="h-2 rounded w-full"
                            style={{ backgroundColor: "var(--mockup-content-secondary)" }}
                          ></div>
                          <div
                            className="h-2 rounded w-4/5"
                            style={{ backgroundColor: "var(--mockup-content-secondary)" }}
                          ></div>
                          <div
                            className="h-6 rounded w-full mt-2"
                            style={{ backgroundColor: "var(--option-button-selected)" }}
                          ></div>
                        </div>
                        <div className="absolute bottom-1 left-2 right-2">
                          <div className="text-xs" style={{ color: "var(--option-score-selected)" }}>
                            Score: 9/10
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="absolute -top-1 right-2 text-xs px-2 py-1 rounded border"
                      style={{
                        backgroundColor: "var(--overlay-blue-bg)",
                        color: "var(--overlay-blue-text)",
                        borderColor: "var(--overlay-blue-border)",
                      }}
                    >
                      Best
                    </div>
                  </div>
                </div>
              </div>

              {/* Row 4: Reusable UX Library */}
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">Reusable UX Library</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    UX flows, components, design guidelines
                    <br className="lg:block hidden" />
                    available for instant Figma export.
                    <br />
                    Decisions turned into reusable patterns & flows.
                  </p>
                </div>
                <div className="flex justify-center lg:justify-end">
                  <div
                    className="aspect-[4/2] w-full rounded-lg border p-3 relative shadow-sm"
                    style={{
                      backgroundColor: "var(--mockup-bg)",
                      borderColor: "var(--mockup-border)",
                    }}
                  >
                    <div
                      className="text-xs font-medium mb-2"
                      style={{ color: "var(--option-score)" }} // Reusing option-score for component text
                    >
                      Component Library
                    </div>
                    <div className="grid grid-cols-3 gap-2 mb-3">
                      <div
                        className="rounded border p-2"
                        style={{
                          backgroundColor: "var(--option-bg)", // Reusing option-bg
                          borderColor: "var(--option-border)", // Reusing option-border
                        }}
                      >
                        <div
                          className="h-3 rounded mb-1"
                          style={{ backgroundColor: "var(--option-button-selected)" }} // Blue accent for button
                        ></div>
                        <div
                          className="h-1 rounded mb-1"
                          style={{ backgroundColor: "var(--mockup-content-secondary)" }} // Reusing mockup content
                        ></div>
                        <div
                          className="text-xs"
                          style={{ color: "var(--option-score)" }} // Reusing option-score
                        >
                          Button
                        </div>
                      </div>
                      <div
                        className="rounded border p-2"
                        style={{
                          backgroundColor: "var(--option-bg)",
                          borderColor: "var(--option-border)",
                        }}
                      >
                        <div
                          className="h-3 rounded mb-1"
                          style={{ backgroundColor: "var(--mockup-content-secondary)" }}
                        ></div>
                        <div
                          className="h-1 rounded mb-1"
                          style={{ backgroundColor: "var(--mockup-content-secondary)" }}
                        ></div>
                        <div className="text-xs" style={{ color: "var(--option-score)" }}>
                          Card
                        </div>
                      </div>
                      <div
                        className="rounded border p-2"
                        style={{
                          backgroundColor: "var(--option-bg)",
                          borderColor: "var(--option-border)",
                        }}
                      >
                        <div
                          className="h-3 rounded mb-1"
                          style={{ backgroundColor: "var(--mockup-content-secondary)" }}
                        ></div>
                        <div
                          className="h-1 rounded mb-1"
                          style={{ backgroundColor: "var(--mockup-content-secondary)" }}
                        ></div>
                        <div className="text-xs" style={{ color: "var(--option-score)" }}>
                          Input
                        </div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <div
                          className="w-4 h-4 rounded-full"
                          style={{ backgroundColor: "var(--mockup-content-primary)" }} // Reusing mockup content
                        ></div>
                        <div
                          className="h-2 rounded flex-1"
                          style={{ backgroundColor: "var(--mockup-content-secondary)" }}
                        ></div>
                        <div className="text-xs" style={{ color: "var(--option-score)" }}>
                          Login
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div
                          className="w-4 h-4 rounded-full"
                          style={{ backgroundColor: "var(--mockup-content-primary)" }} // Reusing mockup content
                        ></div>
                        <div
                          className="h-2 rounded flex-1"
                          style={{ backgroundColor: "var(--mockup-content-secondary)" }}
                        ></div>
                        <div className="text-xs" style={{ color: "var(--option-score)" }}>
                          Checkout
                        </div>
                      </div>
                    </div>
                    <div
                      className="absolute bottom-2 right-2 text-xs px-2 py-1 rounded border"
                      style={{
                        backgroundColor: "var(--mockup-content-secondary)", // Reusing for export button bg
                        color: "var(--option-text)", // Reusing option-text
                        borderColor: "var(--option-border)", // Reusing option-border
                      }}
                    >
                      Export
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ROI Section - Left-align title and increase margins */}
        <section className="py-20 px-8 lg:px-20">
          <div className="container mx-auto px-8 lg:px-20 max-w-6xl">
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Every $1 invested in UX brings $100 ROI.</h2>
              <p className="text-muted-foreground">— Forrester, 2017</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="bg-muted/50 border-border/60">
                <CardContent className="p-8 text-center">
                  <div className="text-xl font-semibold mb-2">"This saved us 4 weeks of UX/UI design iteration."</div>
                  <p className="text-sm text-muted-foreground">CEO & Founder @Heurica</p>
                </CardContent>
              </Card>

              <Card className="bg-muted/50 border-border/60">
                <CardContent className="p-8 text-center">
                  <div className="text-xl font-semibold mb-2">"This saved us 4 weeks of UX/UI design iteration."</div>
                  <p className="text-sm text-muted-foreground">CEO & Founder @Heurica</p>
                </CardContent>
              </Card>

              <Card className="bg-muted/50 border-border/60">
                <CardContent className="p-8 text-center">
                  <div className="text-xl font-semibold mb-2">"This saved us 4 weeks of UX/UI design iteration."</div>
                  <p className="text-sm text-muted-foreground">CEO & Founder @Heurica</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Final CTA - Keep center-aligned */}
        <section className="py-20 px-8 lg:px-20 bg-muted/20">
          <div className="container mx-auto px-8 lg:px-20 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-balance leading-none relative">
              <span>Don't </span>
              <span className="relative inline-block">
                <div
                  className="absolute inset-0 shadow-lg"
                  style={{
                    background: `
                      repeating-linear-gradient(
                        0deg,
                        var(--duct-tape-color-1) 0px,
                        var(--duct-tape-color-1) 2px,
                        var(--duct-tape-color-2) 2px,
                        var(--duct-tape-color-2) 4px,
                        var(--duct-tape-color-1) 4px,
                        var(--duct-tape-color-1) 6px,
                        var(--duct-tape-color-2) 6px,
                        var(--duct-tape-color-2) 8px
                      )
                    `,
                    clipPath: "polygon(2% 15%, 98% 8%, 96% 85%, 4% 92%)",
                    transform: "rotate(-0.5deg) scale(1.1)",
                    zIndex: 1,
                    opacity: "var(--duct-tape-opacity)",
                  }}
                ></div>
                <span className="relative z-10">duct tape</span>
              </span>
              <span> UX. Scale it.</span>
            </h2>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="px-8 py-3 text-base font-medium" asChild>
                <a href="https://tally.so/r/44a68o" target="_blank" rel="noopener noreferrer">
                  Join Waitlist
                </a>
              </Button>

              <Button variant="outline" size="lg" className="px-8 py-3 text-base bg-transparent">
                See Example Audit
              </Button>
            </div>
          </div>
        </section>
      </div>
      {/* CTA Section */}
      <section className="pt-8 pb-32 relative z-10">
        <div className="container mx-auto px-8 lg:px-20 text-center flex flex-col items-center">
          <RotatingText />
          <Button size="default" className="px-6 py-2.5 text-base font-semibold h-10 mt-6 rounded-none" asChild>
            <Link href="/contact">
              {t("home.cta.button")} &rsaquo;
            </Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
