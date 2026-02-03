import { Footer } from "@/components/Footer"

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
        <section className="pt-20 pb-12">
          <div className="container mx-auto px-8 lg:px-32 xl:px-40 max-w-7xl">
            <h1
              className="text-4xl md:text-5xl font-normal mb-4"
              style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
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
              </a>
            </p>
          </div>
        </section>

        {/* Open Positions */}
        <section className="py-12">
          <div className="container mx-auto px-8 lg:px-32 xl:px-40 max-w-7xl">
            <div className="grid md:grid-cols-2 gap-6 animate-hero-footer">
              {openings.map((job, index) => (
                <div
                  key={index}
                  className="h-full border border-border/50 rounded-lg p-6"
                >
                  <h3 className="text-xl font-semibold mb-2">
                    {job.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {job.description}
                  </p>
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <span className="px-2 py-1 rounded border border-border/50">
                      {job.type}
                    </span>
                    <span className="px-2 py-1 rounded border border-border/50">
                      {job.location}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </>
  )
}
