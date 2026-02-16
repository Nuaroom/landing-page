import { Footer } from "@/components/Footer"
import { HeroCircles } from "@/components/HeroCircles"

export default function ContactPage() {
  return (
    <>
      {/* Main Content */}
      <main className="flex-1">
        <div className="min-h-[calc(100vh-200px)] flex items-center py-10 sm:py-12 md:py-20 overflow-hidden">
          <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 max-w-7xl w-full relative">
            <HeroCircles />
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
              {/* Left - Title */}
              <div className="animate-hero-subtitle">
                <h1
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal mb-4 leading-tight"
                  style={{ fontFamily: "var(--font-ibm-plex-serif), serif" }}
                >
                  Start a Project
                </h1>
                <p className="text-sm text-muted-foreground mb-4">Or reach out directly</p>
                <a
                  href="mailto:yunbin@heurica.co?subject=Inquiry%20to%20Heurica%20Team"
                  className="text-sm hover:text-foreground transition-colors"
                  style={{ color: 'var(--accent-gold)' }}
                >
                  yunbin@heurica.co
                </a>
              </div>

              {/* Right - Calendar */}
              <div className="border border-border/30 rounded-xl bg-card/50 overflow-hidden animate-hero-card">
                <iframe
                  src="https://calendar.notion.so/meet/yunbin-ujrj02gip/heurica"
                  width="100%"
                  height="700"
                  frameBorder="0"
                  className="w-full min-h-[500px] sm:min-h-[600px] lg:min-h-[700px]"
                  title="Book a demo with Heurica"
                />
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </>
  )
}
