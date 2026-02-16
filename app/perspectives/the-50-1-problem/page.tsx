"use client"

import Link from "next/link"
import { useEffect, useRef } from "react"
import { HeroCircles } from "@/components/HeroCircles"

export default function The501ProblemPage() {
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

  // Generate ratio dots
  const ratioDots = Array.from({ length: 51 }, (_, i) => (
    <div
      key={i}
      className={`w-2.5 h-2.5 rounded-sm border transition-all duration-300 ${
        i < 50
          ? "bg-neutral-700 border-neutral-500 dark:bg-neutral-600 dark:border-neutral-500"
          : "bg-[var(--accent-gold)] border-[var(--accent-gold)] shadow-[0_0_8px_rgba(212,168,83,0.3)]"
      }`}
      style={{ animationDelay: `${i * 0.02}s` }}
    />
  ))

  return (
    <>
      <main className="flex-1" ref={articleRef}>
        {/* Hero */}
        <header className="min-h-[80vh] flex flex-col justify-center py-20 md:py-32 overflow-hidden">
          <div className="container mx-auto px-6 lg:px-12 max-w-3xl relative">
            <HeroCircles />
            <div
              className="text-xs font-mono uppercase tracking-wider mb-8 flex items-center gap-4 animate-hero-title"
              style={{ color: "var(--accent-gold)" }}
            >
              <span className="w-8 h-px bg-[var(--accent-gold)]" />
              Thought Piece — 2026
            </div>
            <h1
              className="text-3xl md:text-4xl lg:text-5xl font-normal mb-8 leading-tight animate-hero-subtitle"
              style={{ fontFamily: "var(--font-ibm-plex-serif), serif" }}
            >
              <span style={{ color: "var(--accent-gold)" }}>The 50:1 Problem</span>: Engineer-Heavy Teams Don't Ship Bad UX. They Ship{" "}
              <span style={{ color: "var(--accent-gold)" }}>No UX</span>.
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-2xl animate-hero-footer">
              The best-practice ratio is 5 engineers per designer. The reality at most B2B
              companies is 50:1. Some run at 500:1. That gap doesn't produce ugly interfaces.
              It produces interfaces where no one made a design decision at all.
            </p>
            <div className="w-12 h-px bg-border mb-6 animate-hero-footer" />
            <div className="text-xs font-mono text-muted-foreground uppercase tracking-wider animate-hero-footer">
              8 min read
            </div>
          </div>
        </header>

        {/* Article Body */}
        <article className="pb-20">
          <div className="container mx-auto px-6 lg:px-12 max-w-2xl">
            {/* Section 1 */}
            <div className="flex items-center gap-4 mt-12 mb-8 fade-in">
              <span className="text-xs font-mono tracking-wider" style={{ color: "var(--accent-gold)" }}>
                01
              </span>
              <span className="flex-1 h-px bg-border" />
            </div>

            <h2
              className="text-2xl font-normal mb-6 fade-in"
              style={{ fontFamily: "var(--font-ibm-plex-serif), serif" }}
            >
              Salesforce survived. That's not a compliment.
            </h2>

            <p className="text-muted-foreground leading-relaxed mb-6 fade-in">
              Salesforce has run on roughly the same interface paradigm for over two decades.
              SAP, ServiceNow, Splunk. Same story. Enterprise software doesn't die from bad
              UX. Switching costs are too high, contracts too sticky, migrations too painful.
              The product survives.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-6 fade-in">
              But "survived" and "working well" are not the same thing. Behind every enterprise
              product that survived its own interface, there's an 18-month onboarding timeline. A
              support team drowning in "did I do this right?" tickets. A sales org that hides the
              product demo until the last possible moment. A CEO who periodically asks if they
              should just scrap the whole front end and start over.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-6 fade-in">
              These aren't symptoms of a design that went wrong. They're symptoms of a design
              that never happened. And the root cause is almost always the same structural
              condition: an engineering organization that was never set up to make UX decisions
              in the first place.
            </p>

            {/* Section 2 */}
            <div className="flex items-center gap-4 mt-16 mb-8 fade-in">
              <span className="text-xs font-mono tracking-wider" style={{ color: "var(--accent-gold)" }}>
                02
              </span>
              <span className="flex-1 h-px bg-border" />
            </div>

            <h2
              className="text-2xl font-normal mb-6 fade-in"
              style={{ fontFamily: "var(--font-ibm-plex-serif), serif" }}
            >
              The ratio nobody models
            </h2>

            <p className="text-muted-foreground leading-relaxed mb-6 fade-in">
              Industry best practice says 5 to 10 engineers per designer. The actual ratio at
              most B2B SaaS companies, especially in infrastructure, security, and developer
              tooling, is closer to 50:1. We've seen organizations running at 500:1. Five
              hundred engineers. One designer, hired last year, still ramping up on domain
              knowledge.
            </p>

            {/* Ratio Visual */}
            <div
              className="my-10 p-8 rounded-lg text-center fade-in"
              style={{ backgroundColor: "var(--secondary)" }}
            >
              <div className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-4">
                Typical B2B SaaS org — Eng : Design ratio
              </div>
              <div className="flex flex-wrap justify-center gap-1 max-w-md mx-auto mb-4">
                {ratioDots}
              </div>
              <div className="text-xs font-mono text-muted-foreground">
                <span className="text-muted-foreground">■ 50 Engineers</span>
                &nbsp;&nbsp;&nbsp;
                <span style={{ color: "var(--accent-gold)" }}>■ 1 Designer</span>
              </div>
            </div>

            <p className="text-muted-foreground leading-relaxed mb-6 fade-in">
              This ratio doesn't produce "bad design." It produces <span className="font-semibold text-foreground/85">no design</span>. At least not in the way design actually functions. Engineers build every feature the PRD specifies. Every button exists. Every API is connected. Every input field is present. The product is functionally complete.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-6 fade-in">
              What's missing isn't craft or aesthetics. What's missing is the{" "}
              <span className="font-semibold text-foreground/85">layer of decision-making</span> that
              determines how information is structured on a screen, how flows connect to each
              other, what a user should see first versus last, and what happens when something
              goes wrong. Information hierarchy. Flow architecture. Error state design. The
              questions that sound simple, like &apos;what should the user see when they land on this
              page?&apos;, but require deliberate reasoning that no one in the org is tasked with
              doing.
            </p>

            {/* Pullquote */}
            <div
              className="my-10 py-6 pl-6 border-l-2 fade-in"
              style={{ borderColor: "var(--accent-gold)" }}
            >
              <p
                className="text-lg italic leading-relaxed"
                style={{ fontFamily: "var(--font-ibm-plex-serif), serif" }}
              >
                The problem isn't that engineers can't design.
                <br />
                It's that the organization never created the role of making UX decisions;
                and engineers are already busy making engineering decisions.
              </p>
            </div>

            <p className="text-muted-foreground leading-relaxed mb-6 fade-in">
              A PM writes the requirements. An engineer implements them. Between those two steps,
              someone needs to ask: does the information structure on this screen match how users
              actually think about this task? Does this flow guide the user toward the right
              outcome, or just present options? If the user makes a mistake, does the interface
              help them recover — or just fail silently?
            </p>

            <p className="text-muted-foreground leading-relaxed mb-6 fade-in">
              At 50:1, nobody asks those questions. Not because people don't care, but because
              nobody's job is to ask them.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-6 fade-in">
              The result: a product where every feature exists, and nobody can use it correctly.
            </p>

            {/* Section 3 */}
            <div className="flex items-center gap-4 mt-16 mb-8 fade-in">
              <span className="text-xs font-mono tracking-wider" style={{ color: "var(--accent-gold)" }}>
                03
              </span>
              <span className="flex-1 h-px bg-border" />
            </div>

            <h2
              className="text-2xl font-normal mb-6 fade-in"
              style={{ fontFamily: "var(--font-ibm-plex-serif), serif" }}
            >
              Where the cost of "good enough" becomes unacceptable
            </h2>

            <p className="text-muted-foreground leading-relaxed mb-6 fade-in">
              In a consumer product, the cost of bad UX is clean and measurable. Users leave.
              Churn goes up. Revenue goes down. You fix it or you die. The feedback loop is fast
              and honest.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-6 fade-in">
              In enterprise software, users can't leave. The company chose the tool. IT deployed
              it. There's a three-year contract. So instead of leaving, users do something worse:{" "}
              <span className="font-semibold text-foreground/85">they adapt.</span> They build workarounds.
              They skip the intended flow and find their own path. They use the product at 30% of
              its capability and fill the rest with spreadsheets, Slack messages, and tribal
              knowledge passed from one team member to the next.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-6 fade-in">
              In many enterprise contexts, this is annoying but survivable. Internal admin tools,
              project management dashboards, reporting interfaces. Suboptimal UX slows people
              down, but the cost stays contained.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-6 fade-in">
              But there are products where a user workaround isn't just inefficient. It's
              dangerous.
            </p>

            {/* Scenario blocks */}
            <div
              className="my-6 p-5 rounded-r-lg border-l-4 fade-in"
              style={{ backgroundColor: "var(--secondary)", borderColor: "#C45C5C" }}
            >
              <div className="text-xs font-mono uppercase tracking-wider mb-2" style={{ color: "#C45C5C" }}>
                Security
              </div>
              <p className="text-sm text-muted-foreground">
                A security admin configures a data protection policy. The interface doesn't make
                it clear which assets are covered and which aren't. The admin thinks the policy is
                applied globally. It's not. Sensitive data is exposed for weeks before anyone
                notices. The product did exactly what the admin told it to do — the admin just
                couldn't tell what they were telling it to do.
              </p>
            </div>

            <div
              className="my-6 p-5 rounded-r-lg border-l-4 fade-in"
              style={{ backgroundColor: "var(--secondary)", borderColor: "#C45C5C" }}
            >
              <div className="text-xs font-mono uppercase tracking-wider mb-2" style={{ color: "#C45C5C" }}>
                Fintech
              </div>
              <p className="text-sm text-muted-foreground">
                A compliance officer sets up transaction monitoring rules. The rule builder shows
                every parameter but doesn't surface which combinations create gaps in coverage. A
                pattern that should have been flagged passes through. The system worked perfectly.
                The interface just never helped the user understand what "perfectly" meant in
                practice.
              </p>
            </div>

            <div
              className="my-6 p-5 rounded-r-lg border-l-4 fade-in"
              style={{ backgroundColor: "var(--secondary)", borderColor: "#C45C5C" }}
            >
              <div className="text-xs font-mono uppercase tracking-wider mb-2" style={{ color: "#C45C5C" }}>
                Healthcare
              </div>
              <p className="text-sm text-muted-foreground">
                A clinician configures access permissions for patient records. The permission
                model is technically correct but the interface doesn't visually distinguish
                between "this role can view" and "this role can export." A role that should only
                have view access gets export permissions. No error was thrown. The interface just
                failed to make the difference visible at the moment it mattered.
              </p>
            </div>

            <p className="text-muted-foreground leading-relaxed mb-6 fade-in">
              None of these are hypothetical bugs. They're the predictable result of interfaces
              where functional completeness was achieved, but <span className="font-semibold text-foreground/85">UX reasoning</span> was never applied. The deliberate
              structuring of what users see, when, and why.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-6 fade-in">
              In these domains, when a user can't tell if they did something right, they either
              proceed with false confidence or don't act at all. Both outcomes are bad. And
              neither is visible in a bug report, because the product technically worked as
              specified.
            </p>

            {/* Section 4 */}
            <div className="flex items-center gap-4 mt-16 mb-8 fade-in">
              <span className="text-xs font-mono tracking-wider" style={{ color: "var(--accent-gold)" }}>
                04
              </span>
              <span className="flex-1 h-px bg-border" />
            </div>

            <h2
              className="text-2xl font-normal mb-6 fade-in"
              style={{ fontFamily: "var(--font-ibm-plex-serif), serif" }}
            >
              Why "hire a designer" isn't the answer
            </h2>

            <p className="text-muted-foreground leading-relaxed mb-6 fade-in">
              The reflexive response to this problem is: hire designers. Fix the ratio. Get it
              closer to 5:1.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-6 fade-in">
              In theory, correct. In practice, this takes years — and doesn't solve the
              accumulated problem. An organization at 50:1 has dozens of flows, hundreds of
              screens, and thousands of micro-decisions that were made without design reasoning.
              A single designer (or even a small team) joining this organization faces a brutal
              reality: they need to learn a complex domain, audit years of existing product
              decisions, and somehow retrofit reasoning onto interfaces that were built without
              it.
            </p>

            {/* Callout */}
            <div
              className="my-8 p-6 rounded-lg border fade-in"
              style={{ backgroundColor: "var(--secondary)", borderColor: "var(--border)" }}
            >
              <div
                className="text-xs font-mono uppercase tracking-wider mb-3"
                style={{ color: "var(--accent-gold)" }}
              >
                From the field
              </div>
              <p className="text-sm text-muted-foreground">
                We've seen an enterprise security company — 500+ employees, serving Fortune 500
                banks and hospitals — hire their first designer.{" "}
                <span className="font-semibold text-foreground/85">
                  Nine months later, the UX mapping for one feature area still wasn't clean.
                </span>{" "}
                Not because the designer was bad. Because the problem was structural: years of
                accumulated UX decisions (or non-decisions) that no single person could unwind
                manually.
              </p>
            </div>

            <p className="text-muted-foreground leading-relaxed mb-6 fade-in">
              The 50:1 problem isn't solved by changing the ratio alone. It's solved by changing
              how UX decisions get made — making them{" "}
              <span className="font-semibold text-foreground/85">structured, traceable, and systematic</span>{" "}
              rather than dependent on the availability and bandwidth of individual humans.
            </p>

            {/* Section 5 */}
            <div className="flex items-center gap-4 mt-16 mb-8 fade-in">
              <span className="text-xs font-mono tracking-wider" style={{ color: "var(--accent-gold)" }}>
                05
              </span>
              <span className="flex-1 h-px bg-border" />
            </div>

            <h2
              className="text-2xl font-normal mb-6 fade-in"
              style={{ fontFamily: "var(--font-ibm-plex-serif), serif" }}
            >
              The missing layer: UX as reasoning, not decoration
            </h2>

            <p className="text-muted-foreground leading-relaxed mb-6 fade-in">
              Engineering organizations already know how to make structured, traceable decisions.
              Code review exists so that every engineering choice has a reasoning trail: why this
              architecture, why this pattern, why this tradeoff. When something breaks, you can
              trace back through the decision chain and understand what happened.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-6 fade-in">
              UX has no equivalent. There's no "design review" that asks: why is this information
              structured this way? Why does this flow route the user here instead of there?
              What's the reasoning behind this screen's hierarchy? When a user gets confused,
              there's no audit trail to trace — because the decision was never explicitly made.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-6 fade-in">
              This is the actual gap at 50:1 organizations. Not the absence of designers. The{" "}
              <span className="font-semibold text-foreground/85">
                absence of a decision-making framework for UX
              </span>{" "}
              — one that works at the speed engineering already moves, with the traceability
              engineering already demands.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-6 fade-in">
              Requirements come in. Code goes out. The layer between them — the reasoning about
              how information should be structured, how flows should connect, how errors should
              be surfaced — either exists or it doesn't. At 50:1, it doesn't.
            </p>

            {/* Pullquote */}
            <div
              className="my-10 py-6 pl-6 border-l-2 fade-in"
              style={{ borderColor: "var(--accent-gold)" }}
            >
              <p
                className="text-lg italic leading-relaxed"
                style={{ fontFamily: "var(--font-ibm-plex-serif), serif" }}
              >
                If you can't explain why a screen is structured the way it is, you can't maintain
                it, you can't improve it, and you can't onboard anyone to it. You can only rebuild
                it.
              </p>
            </div>

            <p className="text-muted-foreground leading-relaxed mb-6 fade-in">
              That's what happens. Every few years, the org hits a breaking point: Support costs
              too high, sales cycles too long, customer complaints too loud. Someone
              greenlights a redesign. Six months, a year, sometimes longer. And then the same
              cycle starts again, because the new interface was built with the same structural
              gap: features implemented, UX decisions never made.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-6 fade-in">
              The way out isn't more designers or more redesigns. It's building the practice of
              UX reasoning into how products are built in the first place — the same way
              engineering built code review, testing, and CI/CD into how software is shipped. Not
              as a quality gate at the end, but as a structural part of the process.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-6 fade-in">
              If that reasoning can't scale through humans alone at 50:1, then the system itself
              needs to do the reasoning.
            </p>

            {/* End section */}
            <div className="mt-20 pt-10 border-t border-border text-center fade-in">
              <p className="text-muted-foreground leading-relaxed max-w-lg mx-auto mb-8">
                Engineering got 10x faster in the last decade. UX didn't. That's not a design
                problem. It's a structural one. And structural problems need structural solutions.
              </p>
              <div className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
                Yunbin Bae — Founder, Heurica
                <br />
                <a
                  href="mailto:yunbin@heurica.co"
                  className="hover:text-foreground transition-colors"
                  style={{ color: "var(--accent-gold)" }}
                >
                  yunbin@heurica.co
                </a>
              </div>
            </div>
          </div>
        </article>
      </main>

      {/* Footer */}
      <div className="dot-grid-footer pt-32">
        <footer className="flex-shrink-0 cloud-footer relative z-10">
          <div className="container mx-auto px-8 lg:px-20 py-12 relative z-10">
            <div className="flex flex-col md:flex-row mb-12">
              <div className="md:w-1/3">
                <Link
                  href="/"
                  className="text-2xl font-medium"
                  style={{
                    fontFamily: "var(--font-ibm-plex-serif), serif",
                    color: "var(--accent-gold)",
                  }}
                >
                  Heurica
                </Link>
              </div>

              <div className="flex flex-col md:flex-row gap-12 md:gap-24 mt-8 md:mt-0 md:flex-1 md:justify-end">
                <div>
                  <h4 className="text-sm text-muted-foreground mb-4">Pages</h4>
                  <ul className="space-y-3">
                    <li className="transition-transform duration-200 hover:-translate-y-0.5">
                      <Link href="/#solutions" className="text-sm font-medium hover:text-foreground transition-colors">
                        Solutions
                      </Link>
                    </li>
                    <li className="transition-transform duration-200 hover:-translate-y-0.5">
                      <Link href="/#how-it-works" className="text-sm font-medium hover:text-foreground transition-colors">
                        How It Works
                      </Link>
                    </li>
                    <li className="transition-transform duration-200 hover:-translate-y-0.5">
                      <Link href="/perspectives" className="text-sm font-medium hover:text-foreground transition-colors">
                        Perspectives
                      </Link>
                    </li>
                    <li className="transition-transform duration-200 hover:-translate-y-0.5">
                      <Link href="/contact" className="text-sm font-medium hover:text-foreground transition-colors">
                        Start a Project &rsaquo;
                      </Link>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-sm text-muted-foreground mb-4">Company</h4>
                  <ul className="space-y-3">
                    <li className="transition-transform duration-200 hover:-translate-y-0.5">
                      <Link href="/team" className="text-sm font-medium hover:text-foreground transition-colors">
                        About
                      </Link>
                    </li>
                    <li className="transition-transform duration-200 hover:-translate-y-0.5">
                      <Link href="/careers" className="text-sm font-medium hover:text-foreground transition-colors">
                        Careers
                      </Link>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-sm text-muted-foreground mb-4">Legal</h4>
                  <ul className="space-y-3">
                    <li className="transition-transform duration-200 hover:-translate-y-0.5">
                      <Link href="/privacy" className="text-sm font-medium hover:text-foreground transition-colors">
                        Privacy Policy
                      </Link>
                    </li>
                    <li className="transition-transform duration-200 hover:-translate-y-0.5">
                      <Link href="/terms" className="text-sm font-medium hover:text-foreground transition-colors">
                        Terms of Service
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-border/20">
              <div className="text-sm text-muted-foreground">© 2026 Heurica</div>
              <a
                href="mailto:contact@heurica.co?subject=Inquiry%20to%20Heurica%20Team"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                contact@heurica.co
              </a>
            </div>
          </div>
        </footer>
      </div>

      <style jsx>{`
        .fade-in {
          opacity: 0;
          transform: translateY(10px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }
        .fade-in.visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </>
  )
}
