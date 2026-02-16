import { Clock, Video, CheckCircle2 } from "lucide-react"
import Link from "next/link"
import { Footer } from "@/components/Footer"
import { HeroCircles } from "@/components/HeroCircles"

export default function ContactPage() {
  const expectations = [
    {
      title: "Your UX Challenge",
      description: "Bring your messiest PRD. We'll diagnose where UX bottlenecks hit your team."
    },
    {
      title: "Before → After Walkthrough",
      description: "See a real enterprise redesign: from legacy console to dev-ready UI spec."
    },
    {
      title: "How Decisions Get Made",
      description: "Every design choice traced back to your requirements. No black box."
    },
    {
      title: "Fit & Timeline",
      description: "Honest conversation about whether Heurica is right for your team."
    }
  ]

  return (
    <>
      {/* Main Content */}
      <main className="flex-1">
        <div className="min-h-[calc(100vh-200px)] flex items-center py-10 sm:py-12 md:py-20 overflow-hidden">
          <div className="container mx-auto px-6 sm:px-8 lg:px-32 xl:px-40 max-w-7xl w-full relative">
            <HeroCircles />
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-stretch">
            {/* Left Column - Info */}
            <div className="flex flex-col">
              <h1
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal mb-6 sm:mb-8 leading-tight animate-hero-subtitle"
                style={{ fontFamily: "var(--font-ibm-plex-serif), serif" }}
              >
                Start a Project
              </h1>

              {/* What We'll Cover Card */}
              <div className="border border-border/30 rounded-xl bg-card/50 p-6 mb-6 animate-hero-footer">
                <h2 className="font-semibold mb-5">What We'll Cover</h2>
                <div className="space-y-4">
                  {expectations.map((item, index) => (
                    <div key={index} className="flex gap-3">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: 'var(--accent-gold)' }} />
                      <div>
                        <h3 className="font-medium text-sm">{item.title}</h3>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Duration & Format */}
              <div className="grid grid-cols-2 gap-4">
                <div className="border border-border/30 rounded-xl bg-card/50 p-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-muted/50 flex items-center justify-center">
                    <Clock className="w-5 h-5 text-muted-foreground" />
                  </div>
                  <div>
                    <h3 className="font-medium text-sm">Duration</h3>
                    <p className="text-sm text-muted-foreground">45 minutes</p>
                  </div>
                </div>
                <div className="border border-border/30 rounded-xl bg-card/50 p-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-muted/50 flex items-center justify-center">
                    <Video className="w-5 h-5 text-muted-foreground" />
                  </div>
                  <div>
                    <h3 className="font-medium text-sm">Format</h3>
                    <p className="text-sm text-muted-foreground">Video call</p>
                  </div>
                </div>
              </div>

              {/* Spacer to push border to bottom */}
              <div className="flex-1" />

              {/* Border line aligned with bottom of calendar */}
              <div className="border-t border-border/20" />
            </div>

            {/* Right Column - Calendar Embed */}
            <div className="border border-border/30 rounded-xl bg-card/50 overflow-hidden animate-hero-card">
              <iframe
                src="https://calendar.notion.so/meet/yunbin-ujrj02gip/akgy4ok5"
                width="100%"
                height="700"
                frameBorder="0"
                className="w-full min-h-[500px] sm:min-h-[600px] lg:min-h-[700px]"
                title="Book a demo with Heurica"
              />
            </div>
            </div>

            {/* Email Contact - Below the grid */}
            <div className="lg:w-1/2">
              <div className="pt-6">
                <h3 className="text-sm font-semibold mb-2">Or reach out directly</h3>
                <a
                  href="mailto:contact@heurica.co?subject=Inquiry%20to%20Heurica%20Team"
                  className="text-sm hover:text-foreground transition-colors"
                  style={{ color: 'var(--accent-gold)' }}
                >
                  contact@heurica.co
                </a>
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
