import Link from "next/link"

export default function TeamPage() {
  return (
    <>
      {/* Main Content */}
      <main className="flex-1">
        {/* Section 1: Why Heurica Exists */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-3xl">
              {/* Label with dash */}
              <div className="flex items-center gap-3 mb-6 animate-hero-title">
                <span className="w-8 h-px" style={{ backgroundColor: 'var(--accent-gold)' }}></span>
                <p className="text-xs font-medium uppercase tracking-wider" style={{ color: 'var(--accent-gold)' }}>About</p>
              </div>

              {/* Title */}
              <h1
                className="text-3xl md:text-4xl lg:text-5xl font-normal mb-8 leading-tight animate-hero-subtitle"
                style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
              >
                <span style={{ color: 'var(--accent-gold)' }}>Why</span> Heurica Exists
              </h1>

              {/* Body content */}
              <div className="space-y-6 animate-hero-footer">
                <p className="text-muted-foreground leading-relaxed text-base md:text-lg max-w-2xl">
                  Enterprise UX breaks down long before launch. Decisions get scattered across specs, reviews, and hallway conversations — and by the time engineering ships, nobody can trace why the product looks the way it does.
                </p>
                <p
                  className="text-xl md:text-2xl font-normal max-w-2xl mt-8"
                  style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
                >
                  Heurica brings structure to that process. We help teams make UX decisions that are systematic, explainable, and grounded in how users actually work.
                </p>

                {/* Signature with divider */}
                <div className="mt-12 pt-8">
                  <div className="w-12 h-px bg-border mb-6"></div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Yunbin Bae, Founder</span>
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

      {/* Footer with dot grid */}
      <div className="dot-grid-footer pt-32">
        <footer className="flex-shrink-0 cloud-footer relative z-10">
          <div className="container mx-auto px-8 lg:px-20 py-12 relative z-10">
            <div className="flex flex-col md:flex-row mb-12">
              {/* Logo */}
              <div className="md:w-1/3">
                <Link
                  href="/"
                  className="text-2xl font-medium"
                  style={{
                    fontFamily: "Georgia, 'Times New Roman', serif",
                    color: 'var(--accent-gold)'
                  }}
                >Heurica</Link>
              </div>

              {/* Pages, Industries and Legal grouped together */}
              <div className="flex flex-col md:flex-row gap-12 md:gap-24 mt-8 md:mt-0 md:flex-1 md:justify-end">
                {/* Pages */}
                <div>
                  <h4 className="text-sm text-muted-foreground mb-4">Pages</h4>
                  <ul className="space-y-3">
                    <li className="transition-transform duration-200 hover:-translate-y-0.5">
                      <Link href="/#solutions" className="text-sm font-medium hover:text-foreground transition-colors">Solutions</Link>
                    </li>
                    <li className="transition-transform duration-200 hover:-translate-y-0.5">
                      <Link href="/#how-it-works" className="text-sm font-medium hover:text-foreground transition-colors">How It Works</Link>
                    </li>
                    <li className="transition-transform duration-200 hover:-translate-y-0.5">
                      <Link href="/research" className="text-sm font-medium hover:text-foreground transition-colors">Research Paper</Link>
                    </li>
                    <li className="transition-transform duration-200 hover:-translate-y-0.5">
                      <Link href="/blog" className="text-sm font-medium hover:text-foreground transition-colors">Blog</Link>
                    </li>
                    <li className="transition-transform duration-200 hover:-translate-y-0.5">
                      <Link href="/contact" className="text-sm font-medium hover:text-foreground transition-colors">Book a Demo</Link>
                    </li>
                  </ul>
                </div>

                {/* Industries */}
                <div>
                  <h4 className="text-sm text-muted-foreground mb-4">Industries</h4>
                  <ul className="space-y-3">
                    <li className="transition-transform duration-200 hover:-translate-y-0.5"><span className="text-sm font-medium">Security</span></li>
                    <li className="transition-transform duration-200 hover:-translate-y-0.5"><span className="text-sm font-medium">Healthcare</span></li>
                    <li className="transition-transform duration-200 hover:-translate-y-0.5"><span className="text-sm font-medium">Finance</span></li>
                    <li className="transition-transform duration-200 hover:-translate-y-0.5"><span className="text-sm font-medium">Technology</span></li>
                  </ul>
                </div>

                {/* Company */}
                <div>
                  <h4 className="text-sm text-muted-foreground mb-4">Company</h4>
                  <ul className="space-y-3">
                    <li className="transition-transform duration-200 hover:-translate-y-0.5">
                      <Link href="/team" className="text-sm font-medium hover:text-foreground transition-colors">About</Link>
                    </li>
                    <li className="transition-transform duration-200 hover:-translate-y-0.5">
                      <Link href="/careers" className="text-sm font-medium hover:text-foreground transition-colors">Careers</Link>
                    </li>
                  </ul>
                </div>

                {/* Legal */}
                <div>
                  <h4 className="text-sm text-muted-foreground mb-4">Legal</h4>
                  <ul className="space-y-3">
                    <li className="transition-transform duration-200 hover:-translate-y-0.5">
                      <Link href="/privacy" className="text-sm font-medium hover:text-foreground transition-colors">Privacy Policy</Link>
                    </li>
                    <li className="transition-transform duration-200 hover:-translate-y-0.5">
                      <Link href="/terms" className="text-sm font-medium hover:text-foreground transition-colors">Terms of Service</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Bottom row */}
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
    </>
  )
}
