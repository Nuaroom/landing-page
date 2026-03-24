"use client"

import Link from "next/link"
import { useEffect, useRef } from "react"
import { HeroCircles } from "@/components/HeroCircles"
import { Footer } from "@/components/Footer"

export default function EnterpriseDataSecurityCaseStudy() {
  const articleRef = useRef<HTMLElement>(null)

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
              <span>Case Study</span>
              <span className="h-px flex-1 bg-border/40" />
            </div>

            <h1
              className="text-3xl sm:text-4xl md:text-5xl font-normal leading-tight mb-6"
              style={{ fontFamily: "var(--font-ibm-plex-serif), serif" }}
            >
              Redesigning a Fortune 100-serving enterprise data security platform,{" "}
              <em style={{ color: "var(--accent-gold)" }}>without rebuilding it.</em>
            </h1>

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl mb-6">
              Years of engineer-made design left customers unable to finish basic tasks without handholding. Sales hid the demo until the last slide. Their CEO wanted to scrap the whole UI. Heurica shipped the redesign in 2 weeks.
            </p>

            <p className="text-xs sm:text-sm text-muted-foreground">
              Enterprise Data Security &middot; Policy Management Console &middot; 98 user stories &middot; 2 weeks
            </p>
          </div>
        </header>

        {/* The Problem */}
        <section className="border-t border-border/40 py-16 sm:py-20">
          <div className="container mx-auto px-6 lg:px-12 max-w-3xl">
            <div
              className="text-xs font-mono uppercase tracking-wider mb-3 fade-in"
              style={{ color: "var(--accent-gold)" }}
            >
              The Problem
            </div>
            <h2
              className="text-2xl sm:text-3xl font-normal mb-6 fade-in"
              style={{ fontFamily: "var(--font-ibm-plex-serif), serif" }}
            >
              A world-class product nobody could use.
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-10 fade-in">
              The product worked. The technology was best-in-class. The interface was killing them.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10 fade-in">
              {[
                { number: "18 mo", label: "for customer adoption with hand-holding" },
                { number: "2+ hr", label: "to complete basic tasks" },
                { number: "600+", label: "policies created (8 is normal). Nobody could track them." },
                { number: "0", label: "guided workflows in the entire product" },
              ].map((stat) => (
                <div
                  key={stat.number}
                  className="p-5 border border-border/40 rounded-none text-center"
                  style={{ backgroundColor: "var(--case-study-bg)" }}
                >
                  <p
                    className="text-2xl sm:text-3xl font-normal mb-2"
                    style={{ fontFamily: "var(--font-ibm-plex-serif), serif", color: "var(--accent-gold)" }}
                  >
                    {stat.number}
                  </p>
                  <p className="text-xs text-muted-foreground leading-snug">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Quotes */}
            <div className="grid sm:grid-cols-3 gap-6 fade-in">
              {[
                { text: "Tell us how to do things instead of letting us screw up.", role: "Fortune 500 Customer" },
                { text: "I hide the demo till the very last day.", role: "Sales Head" },
                { text: "At this point, just scrap the whole UI.", role: "CEO" },
              ].map((quote) => (
                <div
                  key={quote.role}
                  className="p-6 border border-border/40 rounded-none flex flex-col justify-between"
                  style={{ backgroundColor: "var(--case-study-bg)" }}
                >
                  <p
                    className="text-base font-normal mb-4 leading-relaxed"
                    style={{ fontFamily: "var(--font-ibm-plex-serif), serif" }}
                  >
                    &ldquo;{quote.text}&rdquo;
                  </p>
                  <span className="text-xs font-mono text-muted-foreground mt-auto">{quote.role}</span>
                </div>
              ))}
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
              What We Found
            </div>
            <h2
              className="text-2xl sm:text-3xl font-normal mb-6 fade-in"
              style={{ fontFamily: "var(--font-ibm-plex-serif), serif" }}
            >
              98 user stories. 0 UX decisions.
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4 fade-in">
              The team had written 98 detailed user stories for a single feature. But none of them addressed the questions that actually determine whether users can get their job done: How should the product be organized? What needs to be set up before what? Why does this screen exist here and not there?
            </p>
            <p className="text-muted-foreground leading-relaxed mb-10 fade-in">
              Engineers had been making these calls on the fly for years. Nobody noticed until customers started leaving.
            </p>

            {/* Process cards */}
            <div className="grid sm:grid-cols-2 gap-4 fade-in">
              {[
                {
                  number: "18",
                  title: "Types of things to configure",
                  description:
                    "All treated identically by the interface. No hierarchy, no relationships. Users memorized connections through weeks of training.",
                },
                {
                  number: "77",
                  title: "Tasks with zero guidance",
                  description:
                    "None connected in a logical flow. Complex tasks that required 5 other things to exist first just let you fail silently.",
                },
                {
                  number: "7",
                  title: "Features buried in the wrong place",
                  description:
                    "Organized by how engineers built them, not how admins use them. Users hunted across unrelated sections to find connected capabilities.",
                },
                {
                  number: "12",
                  title: "Invisible steps before you could start",
                  description:
                    "The product never told you what to set up first. Weeks of training were actually teaching an invisible order of operations that existed nowhere in the interface.",
                },
              ].map((card) => (
                <div
                  key={card.number}
                  className="p-6 border border-border/40 rounded-none flex flex-col"
                  style={{ backgroundColor: "var(--case-study-bg)" }}
                >
                  <span className="text-6xl font-normal text-foreground/15 mb-3" style={{ fontFamily: "var(--font-ibm-plex-serif), serif" }}>
                    {card.number}
                  </span>
                  <h3 className="text-base font-semibold mb-3">{card.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{card.description}</p>
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
              The Result
            </div>
            <h2
              className="text-2xl sm:text-3xl font-normal mb-6 fade-in"
              style={{ fontFamily: "var(--font-ibm-plex-serif), serif" }}
            >
              From &ldquo;squirrel-brain sandbox&rdquo; to guided workflows.
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-10 fade-in">
              The product went from a sandbox where users could do anything and screw everything up, to guided workflows where the system tells you what to do and in what order. Every design decision documented and traceable.
            </p>

            {/* What we delivered */}
            <div className="fade-in mb-10">
              <span className="inline-block text-[11px] font-mono uppercase tracking-wider px-3 py-1 rounded mb-4 bg-green-500/10 text-green-500">
                What we delivered
              </span>
              <div className="p-6 border border-border/40 rounded-none" style={{ backgroundColor: "var(--case-study-bg)" }}>
                <ul className="space-y-3">
                  {[
                    "Product reorganized from 19 flat menu items into 5 clear sections that match how admins actually think about their work",
                    "Step-by-step creation flows. The product tells users what to set up first, instead of letting them fail silently.",
                    "Relationships between features visible on screen. No more jumping between 5 different pages to understand how things connect.",
                    "7 misplaced features moved to where users actually look for them.",
                    "Complete screen-by-screen architecture for 75+ pages, ready for engineering to build",
                    "Every decision linked back to the product spec. No opinions, just traceable logic.",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed">
                      <span className="w-2 h-2 rounded-full bg-green-500 mt-1.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Outcome cards */}
            <div className="grid sm:grid-cols-3 gap-4 fade-in">
              {[
                {
                  title: "2 Weeks, Not 12 Months",
                  description:
                    "Full product architecture for an enterprise platform with dozens of features. Their internal team spent a year and got nowhere. Heurica shipped it in 2 weeks.",
                },
                {
                  title: "Explainable Decisions",
                  description:
                    "Every screen, every button, every menu item traces back to a product requirement. No more \"it just felt right.\" Engineering knows exactly what to build and why.",
                },
                {
                  title: "Dev-Ready Output",
                  description:
                    "Not wireframes. Not Figma files. Architecture spec and production-ready front-end code. No interpretation gaps, no handoff meetings.",
                },
              ].map((card) => (
                <div
                  key={card.title}
                  className="p-6 border border-border/40 rounded-none"
                  style={{ backgroundColor: "var(--case-study-bg)" }}
                >
                  <h3 className="text-base font-semibold mb-2">{card.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{card.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <section className="border-t border-border/40 py-16 sm:py-20">
          <div className="container mx-auto px-6 lg:px-12 max-w-3xl fade-in">
            <div
              className="p-8 sm:p-12 rounded-none border border-border/40 text-center bg-[#FDFCF8] dark:bg-[#1C1917]"
            >
              <p
                className="text-lg sm:text-xl md:text-2xl font-normal leading-relaxed max-w-xl mx-auto mb-4"
                style={{ fontFamily: "var(--font-ibm-plex-serif), serif" }}
              >
                &ldquo;We burnt a year trying to fix &lsquo;squirrel-brain sandbox design.&rsquo; Got nowhere. Heurica fixed in 2 weeks.&rdquo;
              </p>
              <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                &mdash; VP of Product
              </span>
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
              Your product deserves better UX decisions.
            </p>
            <p
              className="text-lg sm:text-xl md:text-2xl font-normal text-foreground leading-relaxed mb-8"
              style={{ fontFamily: "var(--font-ibm-plex-serif), serif" }}
            >
              3-day analysis. 2-week redesign.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-6 text-base font-semibold h-10 rounded-none transition-colors"
              style={{ backgroundColor: "var(--accent-gold)", color: "var(--background)" }}
            >
              Start a Project &rsaquo;
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
