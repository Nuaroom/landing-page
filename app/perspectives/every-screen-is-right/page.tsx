"use client"

import Link from "next/link"
import { useEffect, useRef } from "react"

export default function EveryScreenIsRightPage() {
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
        <header className="min-h-[80vh] flex flex-col justify-center py-20 md:py-32">
          <div className="container mx-auto px-6 lg:px-12 max-w-3xl">
            <div
              className="text-xs font-mono uppercase tracking-wider mb-8 flex items-center gap-4 animate-hero-title"
              style={{ color: "var(--accent-gold)" }}
            >
              <span className="w-8 h-px bg-[var(--accent-gold)]" />
              Thought Piece — 2026
            </div>
            <h1
              className="text-3xl md:text-4xl lg:text-5xl font-normal mb-8 leading-tight animate-hero-subtitle"
              style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
            >
              <span style={{ color: "var(--accent-gold)" }}>Every Screen Is Right.</span> The Product Is Wrong.
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-2xl animate-hero-footer">
              Enterprise products don't fail on individual screens. They fail in the gaps between them — where no one designed the connections, the sequence, or the logic that ties a workflow together.
            </p>
            <div className="w-12 h-px bg-border mb-6 animate-hero-footer" />
            <div className="text-xs font-mono text-muted-foreground uppercase tracking-wider animate-hero-footer">
              7 min read
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
              style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
            >
              The experience everyone recognizes
            </h2>

            <p className="text-muted-foreground leading-relaxed mb-6 fade-in">
              If you've ever used an enterprise product — really used it, not just watched a demo — you know the feeling. You land on a screen. It makes sense. The fields are there, the buttons are labeled, the data is present. You do what you need to do and move on.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-6 fade-in">
              Then you need to do something that spans three or four screens. Create something here, reference it there, configure a dependency somewhere else, then come back to where you started to activate the whole thing. And suddenly you're lost. Not because any single screen is confusing, but because <strong className="text-foreground">nobody designed the journey between them.</strong>
            </p>

            <p className="text-muted-foreground leading-relaxed mb-6 fade-in">
              You find yourself opening multiple tabs of the same product. You screenshot one screen so you can reference its values on another. You ask a colleague, "Wait — do I set up the rule first, or the data element first?" And your colleague answers from memory, because the product never told either of you.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-6 fade-in">
              Each screen is individually correct. The product, as a whole, is broken.
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
              style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
            >
              How products get built screen-by-screen
            </h2>

            <p className="text-muted-foreground leading-relaxed mb-6 fade-in">
              This isn't a design failure. It's a structural inevitability. Follow the chain of how most enterprise products actually get built:
            </p>

            <p className="text-muted-foreground leading-relaxed mb-6 fade-in">
              A PM writes a requirements document organized by feature. "Policy Management" is one section. "Role Management" is another. "Audit Logging" is a third. Each feature becomes a set of tickets. Each ticket becomes a screen or a set of screens. Each screen gets built to satisfy its own requirements — and it does. Every screen passes its acceptance criteria.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-6 fade-in">
              But at no point in this chain did anyone ask: <strong className="text-foreground">how do these screens relate to each other from the user's perspective?</strong> What needs to exist before this screen makes sense? Where does the user go after they finish here? If they need information from Screen A while they're on Screen C, how do they get it?
            </p>

            <p className="text-muted-foreground leading-relaxed mb-6 fade-in">
              The answer is usually: they figure it out. Or they don't.
            </p>

            {/* Pullquote */}
            <div
              className="my-10 py-6 pl-6 border-l-2 fade-in"
              style={{ borderColor: "var(--accent-gold)" }}
            >
              <p
                className="text-lg italic leading-relaxed"
                style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
              >
                The product mirrors the organization's internal structure — databases, API endpoints, feature tickets — not the user's task structure.
              </p>
            </div>

            <p className="text-muted-foreground leading-relaxed mb-6 fade-in">
              You can see this most clearly in the navigation. Open the sidebar of almost any enterprise product, and the menu is a feature list: Dashboard, Policy Management, Key Management, Data Elements, Roles, Logs, Settings. That's not a navigation designed around what users need to accomplish. That's a list of database tables with human-readable labels.
            </p>

            {/* Nav mockup comparison */}
            <div
              className="my-10 rounded-lg overflow-hidden border fade-in"
              style={{ borderColor: "var(--border)" }}
            >
              <div className="grid md:grid-cols-2">
                <div className="p-6" style={{ backgroundColor: "var(--secondary)" }}>
                  <div className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-4">
                    What most enterprise nav looks like
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm text-muted-foreground py-1.5 px-3">Dashboard</div>
                    <div className="text-sm text-foreground py-1.5 px-3 rounded" style={{ backgroundColor: "var(--background)" }}>Policy Management</div>
                    <div className="text-sm text-muted-foreground py-1.5 px-3">Key Management</div>
                    <div className="text-sm text-muted-foreground py-1.5 px-3">Data Classifications</div>
                    <div className="text-sm text-muted-foreground py-1.5 px-3">Roles &amp; Member Sources</div>
                    <div className="text-sm text-muted-foreground py-1.5 px-3">System</div>
                    <div className="text-sm text-muted-foreground py-1.5 px-3">Logs</div>
                    <div className="text-sm text-muted-foreground py-1.5 px-3">Settings</div>
                  </div>
                </div>
                <div className="p-6 border-t md:border-t-0 md:border-l" style={{ backgroundColor: "var(--card)", borderColor: "var(--border)" }}>
                  <div className="text-xs font-mono uppercase tracking-wider mb-4" style={{ color: "var(--accent-gold)" }}>
                    What it could look like
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm text-muted-foreground py-1.5 px-3">Dashboard</div>
                    <div className="text-sm text-foreground py-1.5 px-3 rounded" style={{ backgroundColor: "var(--secondary)" }}>What to protect</div>
                    <div className="text-sm text-muted-foreground py-1.5 px-3">Where it lives</div>
                    <div className="text-sm text-muted-foreground py-1.5 px-3">Who has access</div>
                    <div className="text-sm text-muted-foreground py-1.5 px-3">How to protect it</div>
                    <div className="text-xs text-muted-foreground py-1.5 px-3 mt-2">Admin</div>
                    <div className="text-sm text-muted-foreground py-1.5 px-3">Audit trail</div>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-muted-foreground leading-relaxed mb-6 fade-in">
              Same entities. Same capabilities. But the left organizes by <strong className="text-foreground">what the system contains</strong>. The right organizes by <strong className="text-foreground">what the user is trying to do</strong>. The left is a map of the database. The right is a map of the workflow.
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
              style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
            >
              Screens vs. workflows: two different design questions
            </h2>

            <p className="text-muted-foreground leading-relaxed mb-6 fade-in">
              Screen-based design asks: <strong className="text-foreground">"What goes on this page?"</strong> It's a natural question. It produces clear, buildable answers. But it's the wrong unit of analysis for complex products.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-6 fade-in">
              Workflow-based design asks a different question: <strong className="text-foreground">"What is the user trying to accomplish, and what sequence of information and actions gets them there?"</strong> The answer might span five screens — or it might collapse three screens into one. The point is that the workflow, not the screen, is the unit of design.
            </p>

            {/* Comparison */}
            <div
              className="my-10 rounded-lg overflow-hidden border fade-in"
              style={{ borderColor: "var(--border)" }}
            >
              <div className="grid md:grid-cols-2">
                <div className="p-6" style={{ backgroundColor: "var(--secondary)" }}>
                  <div className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-4">
                    Screen-based thinking
                  </div>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div>"This page needs a table of policies"</div>
                    <div>"Add a create button at the top"</div>
                    <div>"The form needs these 12 fields"</div>
                    <div>"Put a save button at the bottom"</div>
                  </div>
                </div>
                <div className="p-6 border-t md:border-t-0 md:border-l" style={{ backgroundColor: "var(--card)", borderColor: "var(--border)" }}>
                  <div className="text-xs font-mono uppercase tracking-wider mb-4" style={{ color: "var(--accent-gold)" }}>
                    Workflow-based thinking
                  </div>
                  <div className="space-y-2 text-sm text-foreground">
                    <div>"User needs to define what data to protect"</div>
                    <div>"That requires knowing which assets exist first"</div>
                    <div>"Then selecting a protection method"</div>
                    <div>"Then verifying before deployment"</div>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-muted-foreground leading-relaxed mb-6 fade-in">
              The screen-based version builds a perfectly functional page. The workflow-based version builds a sequence that the user can actually follow to completion. Both result in working software. Only one results in software that users can navigate without tribal knowledge.
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
              style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
            >
              Why enterprise products suffer most
            </h2>

            <p className="text-muted-foreground leading-relaxed mb-6 fade-in">
              Consumer products mostly get away with screen-based design. The flows are short — sign up, set preferences, do the core thing. Three to five screens, linear path, hard to get lost. Even if the connections between screens aren't perfectly designed, the user can brute-force their way through.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-6 fade-in">
              Enterprise products are different in two ways that make screen-based design lethal.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-6 fade-in">
              First, <strong className="text-foreground">the workflows are deep.</strong> A single task might require touching six different entity types across four different sections of the product. Creating a data protection policy might require: defining data elements, configuring protection methods, setting up target data stores, assigning roles, creating the policy itself, then deploying it. Each step depends on the previous one. Miss a step and you won't get an error — you'll get a policy that silently doesn't do what you think it does.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-6 fade-in">
              Second, <strong className="text-foreground">the dependencies are invisible.</strong> Entity A requires Entity B to exist first. Entity B has a configuration that changes the options available in Entity C. But the product doesn't show you these dependencies. Each screen presents its own world, as if it exists in isolation. The user has to carry the dependency map in their head — or learn it through months of trial and error.
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
                The onboarding symptom
              </div>
              <p className="text-sm text-muted-foreground">
                When enterprise products take 6, 12, even 18 months to onboard new users, the problem is rarely the complexity of individual screens. It's the <strong className="text-foreground">invisible dependency structure</strong> between them. Users aren't learning screens. They're learning the unwritten workflow map that the product never made explicit.
              </p>
            </div>

            <p className="text-muted-foreground leading-relaxed mb-6 fade-in">
              This is why documentation doesn't fix it. You can write a 200-page user guide, but you're documenting a structure that should have been visible in the product itself. The need for extensive documentation is a symptom, not a solution.
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
              style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
            >
              From screens to workflows
            </h2>

            <p className="text-muted-foreground leading-relaxed mb-6 fade-in">
              The fix isn't a visual redesign. It's a structural one. Most enterprise products don't need new screens — they need the existing screens reorganized around how users actually accomplish tasks.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-6 fade-in">
              That means making three things explicit that are currently implicit in most enterprise products: <strong className="text-foreground">sequence</strong> (what comes before what), <strong className="text-foreground">dependency</strong> (what needs to exist for this to work), and <strong className="text-foreground">hierarchy</strong> (what matters most on this screen given where the user is in the workflow).
            </p>

            <p className="text-muted-foreground leading-relaxed mb-6 fade-in">
              Engineering organizations already do this for code. Build systems encode dependency order. CI/CD pipelines make sequence explicit. Module architecture makes hierarchy visible. No one would ship a codebase where the only way to understand the build order is to ask the person who wrote it.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-6 fade-in">
              But that's exactly how most enterprise UIs work. The only way to understand the workflow order is to ask someone who's done it before.
            </p>

            {/* Pullquote */}
            <div
              className="my-10 py-6 pl-6 border-l-2 fade-in"
              style={{ borderColor: "var(--accent-gold)" }}
            >
              <p
                className="text-lg italic leading-relaxed"
                style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
              >
                If your product requires tribal knowledge to use correctly, you haven't shipped a product. You've shipped a codebase with a UI layer on top.
              </p>
            </div>

            <p className="text-muted-foreground leading-relaxed mb-6 fade-in">
              The transition from screen-based to workflow-based design doesn't require rebuilding the product from scratch. It requires re-examining the information architecture — how entities are grouped, how flows connect, what the user sees first — through the lens of what users are trying to do, rather than what the system contains.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-6 fade-in">
              That re-examination can be done systematically. It should be.
            </p>

            {/* End section */}
            <div className="mt-20 pt-10 border-t border-border text-center fade-in">
              <p className="text-muted-foreground leading-relaxed max-w-lg mx-auto mb-8">
                Your screens aren't the problem. The space between them is. And that space can be designed — if someone decides to.
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
                    fontFamily: "Georgia, 'Times New Roman', serif",
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
                        Book a Demo
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
