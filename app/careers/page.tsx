import { Footer } from "@/components/Footer"
import { HeroCircles } from "@/components/HeroCircles"

const openings = [
  {
    title: "Founding Design Engineer",
    type: "Full-time",
    location: "Remote (US)",
    description:
      "Join as our first design engineer to shape the future of enterprise UX. You'll work at the intersection of design and engineering, building the tools that help teams ship better products.",
  },
  {
    title: "Founding UX Researcher",
    type: "Full-time",
    location: "Remote (US)",
    description:
      "Lead user research to deeply understand enterprise workflows and pain points. You'll shape product direction through insights that bridge the gap between complex systems and human needs.",
  },
]

export default function CareersPage() {
  return (
    <>
      <main className="flex-1">
        {/* Header */}
        <section className="pt-20 pb-12 overflow-hidden">
          <div className="container mx-auto px-8 lg:px-32 xl:px-40 max-w-7xl relative">
            <HeroCircles />
            <h1
              className="text-4xl md:text-5xl font-normal mb-4"
              style={{ fontFamily: "var(--font-ibm-plex-serif), serif" }}
            >
              Careers
            </h1>
            <p className="text-muted-foreground">
              To apply, email us at{" "}
              <a
                href="mailto:contact@heurica.co"
                className="hover:text-foreground transition-colors"
                style={{ color: "var(--accent-gold)" }}
              >
                contact@heurica.co
              </a>.
            </p>
          </div>
        </section>

        {/* Open Positions */}
        <section className="py-12">
          <div className="border-t border-b border-border/40">
            <div className="container mx-auto px-8 lg:px-12 xl:px-16 max-w-7xl">
              <div className="grid md:grid-cols-2 animate-hero-footer">
                {openings.map((job, index) => (
                  <div
                    key={index}
                    className={`h-full p-8 md:p-10 ${index > 0 ? 'border-t md:border-t-0 md:border-l border-border/40' : ''}`}
                  >
                    <h3 className="text-xl font-semibold mb-2">
                      {job.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      {job.description}
                    </p>
                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
                      <span className="px-2 py-1 border border-border/50">
                        {job.type}
                      </span>
                      <span className="px-2 py-1 border border-border/50">
                        {job.location}
                      </span>
                    </div>
                  </div>
                ))}
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
