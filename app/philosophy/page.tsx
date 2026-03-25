"use client"

import Link from "next/link"
import { Footer } from "@/components/Footer"
import { HeroCircles } from "@/components/HeroCircles"
import { useLanguage } from "@/components/language-context"

export default function PerspectivesPage() {
  const { t } = useLanguage()

  const articles = [
    {
      slug: "the-50-1-problem",
      titleKey: "philosophy.article1.title",
      excerptKey: "philosophy.article1.excerpt",
      dateKey: "philosophy.date1",
      readTimeKey: "philosophy.minread.8",
    },
    {
      slug: "every-screen-is-right",
      titleKey: "philosophy.article2.title",
      excerptKey: "philosophy.article2.excerpt",
      dateKey: "philosophy.date2",
      readTimeKey: "philosophy.minread.7",
    },
  ]

  return (
    <>
      <main className="flex-1">
        {/* Header */}
        <section className="pt-16 sm:pt-20 pb-8 sm:pb-12 overflow-hidden">
          <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 max-w-7xl relative">
            <HeroCircles />
            <h1
              className="text-4xl md:text-5xl font-normal"
              style={{ fontFamily: "var(--font-ibm-plex-serif), serif" }}
            >
              {t("philosophy.title")}
            </h1>
          </div>
        </section>

        {/* Featured Articles */}
        <section className="py-8 sm:py-12">
          <div className="border-t border-b border-border/40">
            <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 max-w-7xl">
              <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
                {articles.map((article, index) => (
                  <Link
                    key={article.slug}
                    href={`/philosophy/${article.slug}`}
                    className="group block border border-border/40 md:border-0 md:border-l md:border-r"
                  >
                    <article className="h-full flex flex-col">
                      {/* Image */}
                      <div className="aspect-[16/9] overflow-hidden bg-neutral-100 dark:bg-neutral-800 relative">
                        <div
                          className="w-full h-full bg-gradient-to-br from-neutral-200 to-neutral-300 dark:from-neutral-700 dark:to-neutral-800"
                          style={{
                            backgroundImage: `url('/${index === 0 ? 'greek-bg2.svg' : 'greek-bg3.svg'}')`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                          }}
                        />
                        <div className="absolute inset-0 hidden dark:block bg-black/40" />
                      </div>

                      {/* Content with padding */}
                      <div className="p-5 sm:p-8 md:p-10 flex flex-col flex-1" style={{ backgroundColor: "var(--case-study-bg)" }}>
                        {/* Meta */}
                        <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                          <span>{t(article.readTimeKey)}</span>
                          <span>·</span>
                          <span>{t(article.dateKey)}</span>
                        </div>

                        {/* Title */}
                        <h2 className="text-2xl font-semibold mb-5 group-hover:text-foreground transition-colors leading-tight">
                          {t(article.titleKey)}
                        </h2>

                        {/* Excerpt */}
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {t(article.excerptKey)}
                        </p>
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
