import Link from "next/link"
import { CheckCircle2 } from "lucide-react"

import { AppStoreBadge } from "@/components/app-store-badge"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"

interface FAQ {
  question: string
  answer: string
}

interface RelatedGuide {
  title: string
  href: string
}

interface SEOGuideLayoutProps {
  title: string
  description: string
  eyebrow: string
  children: React.ReactNode
  faqs: FAQ[]
  relatedGuides?: RelatedGuide[]
}

export function SEOGuideLayout({
  title,
  description,
  eyebrow,
  children,
  faqs,
  relatedGuides = [],
}: SEOGuideLayoutProps) {
  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />
      <main className="flex-1">
        <section className="bg-gradient-to-b from-secondary/50 to-background py-12 md:py-20">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-4xl space-y-6">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm font-medium liquid-blue-text">
                {eyebrow}
              </div>
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl liquid-blue-text">
                  {title}
                </h1>
                <p className="max-w-3xl text-muted-foreground text-base md:text-xl">
                  {description}
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <AppStoreBadge size="medium" priority />
                <Link
                  href="/#faq"
                  className="inline-flex h-11 items-center justify-center rounded-md border border-primary/50 bg-background px-8 text-sm font-medium transition-colors hover:bg-primary/10 hover:text-primary"
                >
                  Read FAQ
                </Link>
              </div>
            </div>
          </div>
        </section>

        <article className="py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[minmax(0,1fr)_280px]">
              <div className="space-y-10">{children}</div>
              <aside className="space-y-6">
                <div className="rounded-lg border border-primary/20 bg-card p-5 shadow-sm">
                  <h2 className="text-lg font-semibold liquid-blue-text">Quick answer</h2>
                  <p className="mt-3 text-sm text-muted-foreground">
                    SoundShare helps Mac users play one Mac&apos;s audio through two AirPods or multiple Bluetooth headphones at the same time.
                  </p>
                  <div className="mt-4 space-y-2 text-sm">
                    {[
                      "Built for macOS",
                      "Works system-wide",
                      "Made for AirPods and Bluetooth headphones",
                    ].map((item) => (
                      <div key={item} className="flex gap-2">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {relatedGuides.length > 0 ? (
                  <div className="rounded-lg border border-primary/20 bg-card p-5 shadow-sm">
                    <h2 className="text-lg font-semibold liquid-blue-text">Related guides</h2>
                    <div className="mt-3 space-y-3 text-sm">
                      {relatedGuides.map((guide) => (
                        <Link
                          key={guide.href}
                          href={guide.href}
                          className="block text-muted-foreground transition-colors hover:text-primary"
                        >
                          {guide.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : null}
              </aside>
            </div>
          </div>
        </article>

        <section className="bg-accent/30 py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-4xl space-y-6">
              <h2 className="text-2xl font-bold tracking-tighter md:text-3xl liquid-blue-text">
                Frequently asked questions
              </h2>
              <div className="grid gap-4">
                {faqs.map((faq) => (
                  <div key={faq.question} className="rounded-lg border border-primary/20 bg-card p-5">
                    <h3 className="font-semibold">{faq.question}</h3>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}

export const coreRelatedGuides = [
  {
    title: "How to connect two AirPods to one Mac",
    href: "/connect-two-airpods-to-mac",
  },
  {
    title: "How to connect multiple Bluetooth headphones to a Mac",
    href: "/connect-multiple-bluetooth-headphones-to-mac",
  },
  {
    title: "Audio Sharing on Mac",
    href: "/audio-sharing-on-mac",
  },
  {
    title: "Play Mac audio through multiple devices",
    href: "/mac-audio-output-multiple-devices",
  },
  {
    title: "SoundShare vs Multi-Output Device",
    href: "/soundshare-vs-multi-output-device",
  },
]
