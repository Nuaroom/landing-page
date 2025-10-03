"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Moon, Sun, Menu } from "lucide-react"
import { useTheme } from "next-themes"

export function WaitlistForm() {
  const [error, setError] = useState("")
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")
    setSuccess(false)

    const form = e.target
    const data = new FormData(form)

    // --- Simple front-end validation ---
    if (!data.get("entry.1451818773")) {
      setError("Name is required.")
      return
    }
    if (!data.get("entry.605252520")) {
      setError("Email is required.")
      return
    }
    if (!data.get("entry.686287728")) {
      setError("Company is required.")
      return
    }
    if (!data.get("entry.1656959376")) {
      setError("Job title is required.")
      return
    }

    try {
      await fetch(
        "https://docs.google.com/forms/d/e/1FAIpQLScTGA_pVUQDd_FQ1nEOf3o3tK6_-9E5nMyxiV2qp3g2BmAaKg/formResponse",
        {
          method: "POST",
          body: data,
          mode: "no-cors", // Google Forms requires no-cors
        },
      )
      setSuccess(true)
      form.reset()
    } catch (err) {
      setError("Something went wrong. Please try again.")
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="name-header">Name*</Label>
        <Input id="name-header" name="entry.1451818773" placeholder="Enter your name" className="mt-1" />
      </div>

      <div>
        <Label htmlFor="email-header">Email*</Label>
        <Input
          id="email-header"
          name="entry.605252520"
          type="email"
          placeholder="Enter your email address"
          className="mt-1"
        />
      </div>

      <div>
        <Label htmlFor="company-header">Company name*</Label>
        <Input id="company-header" name="entry.686287728" placeholder="Enter your company name" className="mt-1" />
      </div>

      <div>
        <Label htmlFor="job-title-header">Job title*</Label>
        <Input id="job-title-header" name="entry.1656959376" placeholder="Enter your job title" className="mt-1" />
      </div>

      {error && <p className="text-red-500">{error}</p>}
      {success && <p className="text-green-500">✅ Thanks! You've been added to the waitlist.</p>}

      <Button type="submit" className="w-full mt-6">
        Join Waitlist
      </Button>
    </form>
  )
}

export function ThemedImage({ lightSrc, darkSrc, alt, className }) {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) {
    // Return light image during SSR to prevent hydration mismatch
    return <img src={lightSrc || "/placeholder.svg"} alt={alt} className={className} />
  }

  return <img src={resolvedTheme === "dark" ? darkSrc : lightSrc} alt={alt} className={className} />
}

export function ThemedIcons({ className }) {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) {
    // Return Sun icon during SSR
    return <Moon className={className} />
  }

  return resolvedTheme === "dark" ? <Sun className={className} /> : <Moon className={className} />
}

export default function HeuricaLanding() {
  const { theme, setTheme } = useTheme()

  const [isHeaderWaitlistOpen, setIsHeaderWaitlistOpen] = useState(false)
  const [isHeroWaitlistOpen, setIsHeroWaitlistOpen] = useState(false)
  const [isCTAWaitlistOpen, setIsCTAWaitlistOpen] = useState(false)

  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const handleDialogOpenChange = (open: boolean, setOpen: (open: boolean) => void) => {
    if (!open) {
      // Prevent any scroll restoration when closing
      setTimeout(() => {
        setOpen(false)
      }, 0)
    } else {
      setOpen(true)
    }
  }

  // Common dialog content component to avoid duplication
  const WaitlistDialogContent = () => (
    <DialogContent className="sm:max-w-md">
      <DialogHeader>
        <DialogTitle className="text-2xl font-bold text-center mb-2">Scale with Heurica.</DialogTitle>
      </DialogHeader>
      <form className="space-y-4">
        <div>
          <Label htmlFor="name">Name*</Label>
          <Input id="name" placeholder="Enter your name" className="mt-1" />
        </div>
        <div>
          <Label htmlFor="email">Email*</Label>
          <Input id="email" type="email" placeholder="Enter your email address" className="mt-1" />
        </div>
        <div>
          <Label htmlFor="company">Company name</Label>
          <Input id="company" placeholder="Enter your company name" className="mt-1" />
        </div>
        <div>
          <Label htmlFor="job-title">Job title</Label>
          <Input id="job-title" placeholder="Enter your job title" className="mt-1" />
        </div>
        <Button type="submit" className="w-full mt-6">
          Join Waitlist
        </Button>
      </form>
    </DialogContent>
  )

  // Don't render until mounted to prevent hydration issues
  if (!isMounted) {
    return null
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border/40 backdrop-blur-sm sticky top-0 z-50 bg-background/80">
        <div className="container mx-auto px-6 lg:px-12 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-lg font-semibold">AI UX Copilot</span>
          </div>

          <div className="flex items-center gap-4">
            <Dialog
              open={isHeaderWaitlistOpen}
              onOpenChange={(open) => handleDialogOpenChange(open, setIsHeaderWaitlistOpen)}
            >
              <DialogTrigger asChild>
                <Button size="sm" className="hidden md:inline-flex px-4 py-2 text-sm font-semibold">
                  Join Waitlist
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold text-center mb-2">Scale with Heurica.</DialogTitle>
                </DialogHeader>
                <WaitlistForm />
              </DialogContent>
            </Dialog>

            <Button variant="ghost" size="sm" className="hidden">
              See Example Audit
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="w-9 h-9"
            >
              <ThemedIcons className="h-4 w-4" />
              <span className="sr-only">Toggle theme</span>
            </Button>
            <Button variant="ghost" size="icon" className="hidden">
              <Menu className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section - Keep center-aligned */}
      <section className="min-h-screen flex items-center justify-center px-6 lg:px-12">
        <div className="container mx-auto text-center max-w-4xl">
          <div className="mb-6 inline-block">
            <div
              className="text-sm px-3 py-1.5 rounded-full"
              style={{ backgroundColor: "var(--waitlist-bg)", color: "var(--waitlist-bubble)" }}
            >
              Get early access — join the waitlist now
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance leading-tight relative">
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
            <span> UX. </span>
            <br className="hidden md:block" />
            Scale with principles.
          </h1>

          <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
            Your lean AI UX Designer. Scale smarter - Systematic UX design, not just vibes.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Dialog
              open={isHeroWaitlistOpen}
              onOpenChange={(open) => handleDialogOpenChange(open, setIsHeroWaitlistOpen)}
            >
              <DialogTrigger asChild>
                <Button size="lg" className="px-8 py-3 text-base font-semibold">
                  Join Waitlist
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold text-center mb-2">Scale with Heurica.</DialogTitle>
                </DialogHeader>
                <WaitlistForm />
              </DialogContent>
            </Dialog>

            <Button variant="outline" size="lg" className="hidden px-8 py-3 text-base bg-transparent">
              See Example Audit
            </Button>
          </div>
        </div>
      </section>

      <div className="hidden">
        {/* Trust Section */}
        <section className="py-12 px-6 lg:px-12 border-t border-border/40">
          <div className="container mx-auto text-center">
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
        <section className="py-20 px-6 lg:px-12">
          <div className="container mx-auto max-w-6xl">
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
        <section className="py-20 px-6 lg:px-12 bg-muted/20">
          <div className="container mx-auto max-w-6xl">
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
        <section className="py-20 px-6 lg:px-12">
          <div className="container mx-auto max-w-6xl">
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
        <section className="py-20 px-6 lg:px-12 bg-muted/20">
          <div className="container mx-auto text-center">
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
              <Dialog
                open={isCTAWaitlistOpen}
                onOpenChange={(open) => handleDialogOpenChange(open, setIsCTAWaitlistOpen)}
              >
                <DialogTrigger asChild>
                  <Button size="lg" className="px-8 py-3 text-base font-medium">
                    Join Waitlist
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md">
                  <DialogHeader>
                    <DialogTitle className="text-2xl font-bold text-center mb-2">Scale with Heurica.</DialogTitle>
                  </DialogHeader>
                  <WaitlistForm />
                </DialogContent>
              </Dialog>

              <Button variant="outline" size="lg" className="px-8 py-3 text-base bg-transparent">
                See Example Audit
              </Button>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="py-8 px-6 lg:px-12 border-t border-border/40">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-muted-foreground">© 2025 Nuaroom, Inc.</div>
          <a
            href="mailto:contact@nuaroom.com?subject=Inquiry%20to%20Heurica%20Team"
            className="text-sm text-muted-foreground"
          >
            contact@nuaroom.com
          </a>
        </div>
      </footer>
    </div>
  )
}
