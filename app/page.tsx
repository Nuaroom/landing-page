"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { FileText, Code, Users, Palette, Monitor, ClipboardCheck, Eye, ShieldCheck, Layers, UserCheck, Target } from "lucide-react"
import Link from "next/link"
import { useTheme } from "next-themes"
import { FlowDiagram } from "@/components/FlowDiagram"
import { Footer } from "@/components/Footer"

export function ThemedImage({ lightSrc, darkSrc, alt, className }: { lightSrc: string; darkSrc: string; alt: string; className?: string }) {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) {
    // Return light image during SSR to prevent hydration mismatch
    return <img src={lightSrc || "/placeholder.svg"} alt={alt} className={className} />
  }

  return <img src={resolvedTheme === "dark" ? darkSrc : lightSrc} alt={alt} className={className} />
}


export default function LandingPage() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  // Scroll animation observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    const elements = document.querySelectorAll('.animate-on-scroll')
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [isMounted])

  // Don't render until mounted to prevent hydration issues
  if (!isMounted) {
    return null
  }

  return (
    <>
      {/* Hero Section - Keep center-aligned */}
      <section className="flex flex-col dot-grid-bg">
        <div className="flex items-start justify-center pt-20 md:pt-32 pb-20 relative z-10">
          <div className="container mx-auto px-8 lg:px-20 text-center max-w-4xl">
            <h1
              className="text-3xl md:text-4xl lg:text-5xl font-normal mb-6 leading-tight relative animate-hero-title"
              style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
            >
              Enterprise UX in<br className="hidden md:block" /> weeks, not quarters.
            </h1>

            <div className="flex flex-col gap-1 mb-12 md:mb-16 animate-hero-subtitle text-sm text-muted-foreground">
              <p>PRDs in, dev-ready UI out.</p>
              <p>Best-Practice UX through systematic UX reasoning.</p>
              <p>No more 6-month redesign cycles.</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-hero-button mb-12 md:mb-16">
              <Button size="sm" className="px-4 py-1.5 text-xs font-semibold h-8" asChild>
                <Link href="/contact">
                  Book a Demo
                </Link>
              </Button>
            </div>

            <div className="text-center animate-hero-footer">
              <p className="text-sm text-muted-foreground mb-8">Designed for trust-sensitive domains.</p>
              <div className="flex items-center justify-center gap-12 opacity-70 mb-6 md:mb-8">
                <ThemedImage lightSrc="/mtbank.svg" darkSrc="/mtbank_dark.svg" alt="M&T Bank" className="h-4 md:h-5 object-contain" />
                <ThemedImage lightSrc="/athenahealth.svg" darkSrc="/athenahealth_dark.svg" alt="athenahealth" className="h-4 md:h-5 object-contain" />
                <ThemedImage lightSrc="/servicenow.svg" darkSrc="/servicenow_dark.svg" alt="ServiceNow" className="h-4 md:h-5 object-contain" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* The Solution + Value Proposition Sections */}
      <section id="solutions" className="py-28">
        <div className="container mx-auto px-8 lg:px-32 xl:px-40 max-w-7xl">
          <div className="text-center mb-12 animate-on-scroll">
            <h2
              className="text-xl md:text-2xl lg:text-3xl font-normal leading-relaxed"
              style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
            >
              Enterprise workflows are complex. <br className="hidden md:block" />We get the UX right.
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Section 1: No More Waiting on Designers */}
            <div className="rounded-2xl border px-8 py-6 dot-grid-header overflow-hidden animate-on-scroll h-full value-prop-card">
              <div className="relative z-10 flex flex-col h-full">
                <h3 className="text-lg md:text-xl font-normal mb-3 leading-tight">
                  No More Waiting on Designers
                </h3>
                <p className="text-sm text-muted-foreground">
                  No Figma. No mockup handoffs.
                </p>
                <div className="flex items-center justify-center gap-3 pt-6 mt-auto">
                  {/* PRD Document */}
                  <div className="flex flex-col items-center gap-2">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: 'var(--secondary)' }}
                    >
                      <FileText className="w-6 h-6 text-muted-foreground" />
                    </div>
                    <span className="text-xs text-muted-foreground font-medium whitespace-nowrap">PRD</span>
                  </div>

                  {/* Arrow */}
                  <svg width="32" height="12" viewBox="0 0 32 12" fill="none" className="text-muted-foreground/50 mb-5">
                    <path d="M0 6H28M28 6L23 1M28 6L23 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>

                  {/* Dev-ready UI */}
                  <div className="flex flex-col items-center gap-2">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: 'var(--secondary)' }}
                    >
                      <Code className="w-6 h-6 text-muted-foreground" />
                    </div>
                    <span className="text-xs text-muted-foreground font-medium whitespace-nowrap">Dev-ready UI</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 2: Unblock Your Team */}
            <div className="rounded-2xl border px-8 py-6 dot-grid-header overflow-hidden animate-on-scroll animate-on-scroll-delay-1 h-full value-prop-card">
              <div className="relative z-10 flex flex-col h-full">
                <h3 className="text-lg md:text-xl font-normal mb-3 leading-tight">
                  Unblock Your Team
                </h3>
                <p className="text-sm text-muted-foreground">
                  PMs and engineers collaborate directly on UX.
                </p>
                <div className="flex items-center justify-center gap-3 pt-6 mt-auto">
                  {/* PM + Engineer */}
                  <div className="flex flex-col items-center gap-2">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: 'var(--secondary)' }}
                    >
                      <Users className="w-6 h-6 text-muted-foreground" />
                    </div>
                    <span className="text-xs text-muted-foreground font-medium whitespace-nowrap">PM + Eng</span>
                  </div>

                  {/* Arrow */}
                  <svg width="32" height="12" viewBox="0 0 32 12" fill="none" className="text-muted-foreground/50 mb-5">
                    <path d="M0 6H28M28 6L23 1M28 6L23 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>

                  {/* Design Output */}
                  <div className="flex flex-col items-center gap-2">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: 'var(--secondary)' }}
                    >
                      <Palette className="w-6 h-6 text-muted-foreground" />
                    </div>
                    <span className="text-xs text-muted-foreground font-medium whitespace-nowrap">Design</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 3: Demo On Day 1 */}
            <div className="rounded-2xl border px-8 py-6 dot-grid-header overflow-hidden animate-on-scroll animate-on-scroll-delay-2 h-full value-prop-card">
              <div className="relative z-10 flex flex-col h-full">
                <h3 className="text-lg md:text-xl font-normal mb-3 leading-tight">
                  Demo On Day 1
                </h3>
                <p className="text-sm text-muted-foreground">
                  Stop hiding the demo till the last day.
                </p>
                <div className="flex items-center justify-center pt-6 mt-auto">
                  <div className="flex flex-col items-center gap-2">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: 'var(--secondary)' }}
                    >
                      <Monitor className="w-6 h-6 text-muted-foreground" />
                    </div>
                    <span className="text-xs text-muted-foreground font-medium whitespace-nowrap">Live Demo</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Configuration Panels Section */}
      <section className="pt-16 pb-16" style={{ background: 'linear-gradient(to bottom, transparent 0%, rgba(251, 191, 36, 0.08) 30%, rgba(251, 191, 36, 0.08) 70%, transparent 100%)' }}>
        <div className="container mx-auto px-8 lg:px-20">
          <div className="text-center animate-on-scroll">
            <h2
              className="text-xl md:text-2xl lg:text-3xl font-normal leading-relaxed"
              style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
            >
              Configuration panels. Role-based views. Approval workflows.
            </h2>
            <p className="text-sm text-muted-foreground mt-4 max-w-xl mx-auto">
              The interfaces no one wants to touch. Finally designed right.
            </p>
          </div>
        </div>

        {/* Before and After Image Boxes - Full width */}
        <div className="px-2 md:px-4 lg:px-8 mt-12">
          <div className="grid md:grid-cols-2 gap-4 md:gap-6 animate-on-scroll">
            {/* Before */}
            <div className="flex flex-col">
              <span className="text-lg text-muted-foreground mb-3 text-center font-medium">Before</span>
              <div className="rounded-2xl border overflow-hidden">
                <img
                  src="/ux-before.svg"
                  alt="Before - Complex enterprise interface"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>

            {/* After */}
            <div className="flex flex-col relative">
              <div
                className="absolute inset-0 blur-3xl -z-10 rounded-2xl animate-pulse-glow"
                style={{
                  background: 'radial-gradient(ellipse at center, rgba(251, 191, 36, 0.35) 0%, rgba(245, 158, 11, 0.25) 30%, rgba(251, 191, 36, 0.15) 50%, transparent 75%)',
                  opacity: 0.7
                }}
              ></div>
              <span className="text-lg mb-3 text-center font-medium relative animate-after-label" style={{ color: 'var(--accent-gold)', textShadow: '0 0 20px rgba(202, 138, 4, 0.3)' }}>After</span>
              <div className="border-[3px] border-dashed rounded-lg overflow-hidden animate-after-image" style={{ borderColor: 'var(--accent-gold)' }}>
                <img
                  src="/ux-after.svg"
                  alt="After - Clean redesigned interface"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Case Study CTA */}
        <div className="container mx-auto px-8 lg:px-20">
          <div className="text-center mt-16 md:mt-20 animate-on-scroll">
            <p
              className="text-xl md:text-2xl font-normal mb-4"
              style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
            >
              See how enterprise workflows get redesigned.
            </p>
            <Button size="lg" className="px-6 py-3 text-base font-semibold" asChild>
              <Link href="/contact">
                Book a Demo
              </Link>
            </Button>
          </div>
        </div>
      </section>
      {/* Built on UX Science Section */}
      <section id="how-it-works" className="pt-40 pb-28">
        <div className="container mx-auto px-8 lg:px-32 xl:px-40 max-w-7xl">
          <div className="grid md:grid-cols-3 gap-4 md:gap-6 items-start animate-on-scroll">
            {/* Left: Title + Description (1/3 width) */}
            <div className="md:col-span-1">
              <h2
                className="text-xl md:text-2xl lg:text-3xl font-normal mb-6 leading-tight"
                style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
              >
                Built on UX Science,<br />Not Guesswork.
              </h2>
              <p className="text-sm text-muted-foreground max-w-xs">
                Grounded in applied Human-Computer Interaction (HCI) research.
              </p>
              <div className="flex items-center gap-4 mt-6 opacity-70">
                <img src="/hcil.svg" alt="Human-Computer Interaction Lab" className="h-14 object-contain" />
                <img src="/umd.svg" alt="University of Maryland" className="h-14 object-contain" />
              </div>
            </div>

            {/* Right: Flow Diagram (2/3 width) */}
            <div className="md:col-span-2">
              <FlowDiagram />
            </div>
          </div>
        </div>
      </section>
      {/* Enterprise-Ready from Day 1 Section */}
      <section className="py-28">
        <div className="container mx-auto px-8 lg:px-32 xl:px-40 max-w-7xl">
          <div className="text-center mb-16 animate-on-scroll">
            <h2
              className="text-xl md:text-2xl lg:text-3xl font-normal mb-4 leading-tight"
              style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
            >
              Enterprise-Ready from Day 1.
            </h2>
            <p className="text-sm text-muted-foreground max-w-xl mx-auto">
              UX intelligence that fits your security and compliance requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {/* Card 1: Traceable Decisions */}
            <div className="rounded-2xl p-6 animate-on-scroll" style={{ backgroundColor: 'var(--secondary)' }}>
              <div className="mb-6">
                <ClipboardCheck className="w-6 h-6 text-muted-foreground" />
              </div>
              <h3 className="text-base font-semibold mb-2">Traceable Decisions</h3>
              <p className="text-sm text-muted-foreground">
                Every UX decision comes with rationale. Full audit trail for compliance reviews.
              </p>
            </div>

            {/* Card 2: No Black Box */}
            <div className="rounded-2xl p-6 animate-on-scroll animate-on-scroll-delay-1" style={{ backgroundColor: 'var(--secondary)' }}>
              <div className="mb-6">
                <Eye className="w-6 h-6 text-muted-foreground" />
              </div>
              <h3 className="text-base font-semibold mb-2">No Black Box</h3>
              <p className="text-sm text-muted-foreground">
                Not a prompt-to-UI generator. Systematic reasoning you can review and verify.
              </p>
            </div>

            {/* Card 3: Your Data Stays Yours */}
            <div className="rounded-2xl p-6 animate-on-scroll animate-on-scroll-delay-2" style={{ backgroundColor: 'var(--secondary)' }}>
              <div className="mb-6">
                <ShieldCheck className="w-6 h-6 text-muted-foreground" />
              </div>
              <h3 className="text-base font-semibold mb-2">No Customer Data Required</h3>
              <p className="text-sm text-muted-foreground">
                We work from PRDs and specs only. No sensitive customer data needed, simplifying your security review.
              </p>
            </div>

            {/* Card 4: Works With Your Stack */}
            <div className="rounded-2xl p-6 animate-on-scroll" style={{ backgroundColor: 'var(--secondary)' }}>
              <div className="mb-6">
                <Layers className="w-6 h-6 text-muted-foreground" />
              </div>
              <h3 className="text-base font-semibold mb-2">Works With Your Stack</h3>
              <p className="text-sm text-muted-foreground">
                Output integrates with your existing component library and design system.
              </p>
            </div>

            {/* Card 5: Human in the Loop */}
            <div className="rounded-2xl p-6 animate-on-scroll animate-on-scroll-delay-1" style={{ backgroundColor: 'var(--secondary)' }}>
              <div className="mb-6">
                <UserCheck className="w-6 h-6 text-muted-foreground" />
              </div>
              <h3 className="text-base font-semibold mb-2">Human in the Loop</h3>
              <p className="text-sm text-muted-foreground">
                AI-assisted, human-verified. Your team reviews before anything ships.
              </p>
            </div>

            {/* Card 6: Consistent Output */}
            <div className="rounded-2xl p-6 animate-on-scroll animate-on-scroll-delay-2" style={{ backgroundColor: 'var(--secondary)' }}>
              <div className="mb-6">
                <Target className="w-6 h-6 text-muted-foreground" />
              </div>
              <h3 className="text-base font-semibold mb-2">Consistent Output</h3>
              <p className="text-sm text-muted-foreground">
                Same input, same quality. No hallucination, no random variations.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Quote Section */}
      <section className="py-28 border-t border-border/20">
        <div className="container mx-auto px-8 lg:px-20 max-w-3xl text-center">
          <blockquote
            className="text-xl md:text-2xl font-normal text-balance leading-relaxed mb-4"
            style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
          >
            "After 9 months with our designer,<br />users still couldn't tell if they did it right.<br />Heurica fixed it in 2 weeks."
          </blockquote>
          <p className="text-sm text-muted-foreground">
            — Product Director, Data Security Enterprise serving Fortune 500
          </p>
        </div>
      </section>
      <div className="hidden">
        {/* Trust Section */}
        <section className="py-12 px-8 lg:px-20 border-t border-border/40">
          <div className="container mx-auto px-8 lg:px-20 text-center">
            <p className="text-sm text-muted-foreground mb-8">We are trusted by top UX and HCI organizations.</p>
            <div className="flex items-center justify-center gap-8 md:gap-12 opacity-60">
              <div className="flex items-center">
                <ThemedImage
                  lightSrc="/university-of-maryland-light.png"
                  darkSrc="/uom-dark.png"
                  alt="Spot usability gaps interface"
                  className="h-15"
                />
              </div>
              <div className="flex items-center">
                <ThemedImage
                  lightSrc="/hcil-logo.png"
                  darkSrc="/hcil-logo-dark.png"
                  alt="Spot usability gaps interface"
                  className="h-17"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section - Left-align title and increase margins */}
        <section className="py-20 px-8 lg:px-20">
          <div className="container mx-auto px-8 lg:px-20 max-w-6xl">
            <div className="mb-5">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
                Fast-moving teams deserve UX that keeps up.
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="border-border/40 bg-card/50 backdrop-blur-sm p-0">
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

              <Card className="border-border/40 bg-card/50 backdrop-blur-sm p-0">
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

              <Card className="border-border/40 bg-card/50 backdrop-blur-sm p-0">
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
              <Card className="bg-muted/50 border-border/40">
                <CardContent className="p-8 text-center">
                  <div className="text-xl font-semibold mb-2">"This saved us 4 weeks of UX/UI design iteration."</div>
                  <p className="text-sm text-muted-foreground">CEO & Founder @Heurica</p>
                </CardContent>
              </Card>

              <Card className="bg-muted/50 border-border/40">
                <CardContent className="p-8 text-center">
                  <div className="text-xl font-semibold mb-2">"This saved us 4 weeks of UX/UI design iteration."</div>
                  <p className="text-sm text-muted-foreground">CEO & Founder @Heurica</p>
                </CardContent>
              </Card>

              <Card className="bg-muted/50 border-border/40">
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
      <section className="pt-8 pb-48 relative z-10">
        <div className="container mx-auto px-8 lg:px-20 text-center">
          <p
            className="text-xl md:text-2xl font-normal mb-4"
            style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
          >
            You wrote the spec. Ship it already.
          </p>
          <Button size="lg" className="px-6 py-3 text-base font-semibold mt-4" asChild>
            <Link href="/contact">
              Contact Sales
            </Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </>
  )
}
