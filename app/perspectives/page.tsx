import Link from "next/link"
import { Footer } from "@/components/Footer"
import { HeroCircles } from "@/components/HeroCircles"

// Article data
const articles = [
  {
    slug: "the-50-1-problem",
    title: "The 50:1 Problem.",
    excerpt: "Engineer-Heavy Teams Don't Ship Bad UX. They Ship No UX.",
    titleHighlight: ["The 50:1 Problem", "No UX"],
    description:
      "The best-practice ratio is 5 engineers per designer. The reality at most B2B companies is 50:1. That gap doesn't produce ugly interfaces — it produces interfaces where no one made a design decision at all.",
    date: "Jan 2026",
    readTime: "8 min read",
    author: "Yunbin Bae",
    category: "Thought Piece",
  },
  {
    slug: "every-screen-is-right",
    title: "Each Screen Is Correct. The Product Is Wrong.",
    excerpt: "Enterprise products don't fail on individual screens. They fail in the gaps between them.",
    titleHighlight: ["Each Screen Is Correct."],
    description:
      "Enterprise products don't fail on individual screens. They fail in the gaps between them — where no one designed the connections, the sequence, or the logic that ties a workflow together.",
    date: "Feb 2026",
    readTime: "7 min read",
    author: "Yunbin Bae",
    category: "Thought Piece",
  },
]

export default function PerspectivesPage() {
  return (
    <>
      <main className="flex-1">
        {/* Header */}
        <section className="pt-20 pb-12 overflow-hidden">
          <div className="container mx-auto px-8 lg:px-32 xl:px-40 max-w-7xl relative">
            <HeroCircles />
            <div className="flex items-center justify-between">
              <h1
                className="text-4xl md:text-5xl font-normal"
                style={{ fontFamily: "var(--font-ibm-plex-serif), serif" }}
              >
                Perspectives
              </h1>
            </div>
          </div>
        </section>

        {/* Featured Articles */}
        <section className="py-12">
          <div className="border-t border-b border-border/40">
            <div className="container mx-auto px-8 lg:px-12 xl:px-16 max-w-7xl">
              <div className="grid md:grid-cols-2">
                {articles.map((article, index) => (
                  <Link
                    key={article.slug}
                    href={`/perspectives/${article.slug}`}
                    className={`group block animate-hero-subtitle ${index > 0 ? 'border-t md:border-t-0 md:border-l border-border/40' : ''}`}
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <article className="h-full flex flex-col">
                      {/* Image — edge-to-edge so divider meets image cleanly */}
                      <div className="aspect-[16/9] overflow-hidden bg-neutral-100 dark:bg-neutral-800">
                        <div
                          className="w-full h-full bg-gradient-to-br from-neutral-200 to-neutral-300 dark:from-neutral-700 dark:to-neutral-800"
                          style={{
                            backgroundImage: `url('/${index === 0 ? 'greek-bg2.svg' : 'greek-bg3.svg'}')`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                          }}
                        />
                      </div>

                      {/* Content with padding */}
                      <div className="p-8 md:p-10 flex flex-col flex-1">
                        {/* Meta */}
                        <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                          <span>{article.readTime}</span>
                          <span>·</span>
                          <span>{article.date}</span>
                        </div>

                        {/* Title */}
                        <h2 className="text-2xl font-semibold mb-5 group-hover:text-foreground transition-colors leading-tight">
                          {article.title}
                        </h2>

                        {/* Excerpt */}
                        <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                          {article.excerpt}
                        </p>

                        {/* Footer */}
                        <div className="flex items-center mt-auto">
                          <div className="flex items-center gap-2">
                            <div className="w-6 h-6 rounded-full bg-neutral-200 dark:bg-neutral-700 overflow-hidden flex-shrink-0">
                              <img
                                src="/yunbin-profile.jpg"
                                alt={article.author}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <span className="text-xs text-muted-foreground whitespace-nowrap">{article.author}</span>
                          </div>
                        </div>
                      </div>
                    </article>
                  </Link>
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
