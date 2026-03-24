import Link from "next/link"
import { Footer } from "@/components/Footer"
import { HeroCircles } from "@/components/HeroCircles"

const caseStudies = [
  {
    slug: "enterprise-data-security",
    title: "Redesigning a Fortune 100-serving enterprise data security platform.",
    excerpt:
      "Years of engineer-made design left customers unable to finish basic tasks without handholding. Sales hid the demo until the last slide. Their CEO wanted to scrap the whole UI. Heurica shipped the redesign in 2 weeks.",
    meta: {
      industry: "data security",
    },
  },
]

export default function CaseStudyPage() {
  return (
    <>
      <main className="flex-1">
        {/* Header */}
        <section className="pt-16 sm:pt-20 pb-4 sm:pb-6 overflow-hidden">
          <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 max-w-7xl relative">
            <HeroCircles />
            <h1
              className="text-4xl md:text-5xl font-normal"
              style={{ fontFamily: "var(--font-ibm-plex-serif), serif" }}
            >
              Case Study.
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground mt-4">
              Enterprise platforms redesigned, without rebuilding them.
            </p>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-8 sm:py-12">
          <div className="border-t border-b border-border/40">
            <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 max-w-7xl">
              <div className="flex flex-col gap-6 sm:gap-8">
                {caseStudies.map((study) => (
                  <Link
                    key={study.slug}
                    href={`/case-study/${study.slug}`}
                    className="group block border border-border/40"
                    style={{ backgroundColor: "var(--case-study-bg)" }}
                  >
                    <article className="h-full flex flex-col">
                      <div className="p-5 sm:p-8 md:p-10 flex flex-col flex-1">
                        <div className="flex items-center gap-2 mb-4">
                          <span className="text-xs text-muted-foreground px-2.5 py-0.5 rounded-full border border-border/60">{study.meta.industry}</span>
                        </div>
                        <h2 className="text-2xl font-semibold mb-5 group-hover:text-foreground transition-colors leading-tight">
                          {study.title}
                        </h2>
                        <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                          {study.excerpt}
                        </p>
                        <span
                          className="text-sm font-medium mt-auto"
                          style={{ color: "var(--accent-gold)" }}
                        >
                          Read case study &rsaquo;
                        </span>
                      </div>
                    </article>
                  </Link>
                ))}

                {/* Coming soon card */}
                <div
                  className="block border border-border/40"
                  style={{ backgroundColor: "var(--case-study-bg)" }}
                >
                  <article className="h-full flex flex-col">
                    <div className="p-5 sm:p-8 md:p-10 flex flex-col flex-1">
                      <div className="flex items-center gap-2 mb-4">
                        <span className="text-xs text-muted-foreground px-2.5 py-0.5 rounded-full border border-border/60">cybersecurity</span>
                      </div>
                      <h2 className="text-2xl font-semibold mb-5 leading-tight">
                        Redesigning a Fortune 500-serving threat detection platform.
                      </h2>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                        Years of engineering-led design left security operators drowning in alerts they couldn&rsquo;t act on. The product protected major enterprises but its own dashboard needed weeks of training to use.
                      </p>
                      <span className="text-sm font-medium mt-auto text-muted-foreground">
                        Coming soon
                      </span>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
