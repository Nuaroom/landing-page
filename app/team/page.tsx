import { Footer } from "@/components/Footer"
import { HeroCircles } from "@/components/HeroCircles"

export default function TeamPage() {
  return (
    <>
      {/* Main Content */}
      <main className="flex-1">
        {/* Section 1: Why Heurica Exists */}
        <section className="min-h-[calc(100vh-200px)] flex items-center py-14 sm:py-20 md:py-32 overflow-hidden relative">
          {/* Container-aligned grid */}
          <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
            <div className="max-w-7xl mx-auto px-8 lg:px-12 xl:px-16 h-full">
              <div
                className="h-full"
                style={{
                  backgroundImage: 'linear-gradient(to right, rgba(160,160,160,0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(160,160,160,0.12) 1px, transparent 1px)',
                  backgroundSize: '48px 48px',
                }}
              />
            </div>
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, transparent 60%, var(--background) 100%)' }} />
          </div>
          <div className="container mx-auto px-6 sm:px-8 lg:px-32 xl:px-40 max-w-7xl relative z-10">
            <div className="max-w-3xl mx-auto text-center relative">
              <HeroCircles />
              {/* Title */}
              <h1
                className="text-3xl md:text-4xl lg:text-5xl font-normal mb-8 leading-tight animate-hero-title"
                style={{ fontFamily: "var(--font-ibm-plex-serif), serif" }}
              >
                <span style={{ color: 'var(--accent-gold)' }}>Why</span> Heurica Exists;
              </h1>

              {/* Body content */}
              <div className="space-y-6">
                <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl mx-auto animate-hero-subtitle">
                  Enterprise UX doesn't break at launch. It breaks in the decisions that were never made. Features get built exactly as specced — but users still can't figure out how to complete tasks. Not because engineers made bad decisions, but because no one was set up to make UX decisions at all.
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl mx-auto animate-hero-footer">
                  Heurica brings structure to that gap.
                </p>
                <p
                  className="text-xl md:text-2xl font-normal max-w-2xl mx-auto mt-8 animate-hero-footer"
                  style={{ fontFamily: "var(--font-ibm-plex-serif), serif" }}
                >
                  We make UX decisions systematic, explainable, and grounded in how users actually work.
                </p>

                {/* Signature with divider */}
                <div className="mt-12 pt-8">
                  <div className="w-12 h-px bg-border mb-6 mx-auto"></div>
                  <div className="flex items-center justify-center gap-3">
                    <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">Yunbin Bae — Founder, Heurica</span>
                    <a
                      href="https://www.linkedin.com/in/yunbinbae/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </a>
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
