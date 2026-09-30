import { CalendarCheck, CheckCircle2, UserRound } from "lucide-react"

import { AppStoreBadge } from "@/components/app-store-badge"
import { CTASection } from "@/components/cta-section"
import { ProductDemo, type ProductDemoStage } from "@/components/product-demo"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { US_LIFETIME_PRICE, CONTENT_UPDATED_ISO, CONTENT_UPDATED_LABEL, LAST_VERIFIED_LABEL, SITE_URL } from "@/lib/site"

interface FAQ {
  question: string
  answer: string
}

interface RelatedGuide {
  title: string
  href: string
}

interface SourceLink {
  title: string
  href: string
  note?: string
}

interface SEOGuideLayoutProps {
  title: string
  description: string
  eyebrow: string
  pathname: string
  children: React.ReactNode
  faqs: FAQ[]
  relatedGuides?: RelatedGuide[]
  sources: SourceLink[]
  published?: string
  verificationNote?: string
  demoStage?: ProductDemoStage
}

export function SEOGuideLayout({
  title,
  description,
  eyebrow,
  pathname,
  children,
  faqs,
  relatedGuides = [],
  sources,
  published = "2026-06-07",
  verificationNote = "Content and implementation reviewed against SoundShare 2.2.1 on a MacBook Pro (M2 Pro) running macOS 26.5.2. Device-pair results still depend on the connected hardware.",
  demoStage = "select",
}: SEOGuideLayoutProps) {
  const pageUrl = `${SITE_URL}${pathname}`
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "TechArticle",
        "@id": `${pageUrl}#article`,
        headline: title,
        description,
        datePublished: published,
        dateModified: CONTENT_UPDATED_ISO,
        author: {
          "@type": "Person",
          "@id": `${SITE_URL}/about/#nikolay-kalchev`,
          name: "Nikolay Kalchev",
          url: `${SITE_URL}/about/`,
        },
        publisher: {
          "@type": "Organization",
          "@id": `${SITE_URL}/#organization`,
          name: "SoundShare",
          url: `${SITE_URL}/`,
        },
        mainEntityOfPage: pageUrl,
        image: `${pageUrl}opengraph-image`,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "SoundShare", item: `${SITE_URL}/` },
          { "@type": "ListItem", position: 2, name: title, item: pageUrl },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
      },
    ],
  }

  const campaign = (pathname.replaceAll("/", "-").replace(/^-|-$/g, "") || "homepage").slice(0, 30)
  const publishedLabel = new Intl.DateTimeFormat("en-US", { month: "long", day: "numeric", year: "numeric", timeZone: "UTC" }).format(new Date(`${published}T00:00:00Z`))

  return (
    <div className="guide-page flex min-h-screen flex-col">
      <SiteHeader showStoreBadge={false} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <main id="main-content" className="flex-1">
        <section className="guide-hero border-b border-border/60 bg-[radial-gradient(circle_at_top_left,hsl(216_100%_95%),transparent_48%)] py-12 dark:bg-[radial-gradient(circle_at_top_left,hsl(220_55%_18%),transparent_52%)] md:py-20">
          <div className="container px-4 md:px-6">
            <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[minmax(0,1fr)_390px]">
              <div className="space-y-6">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700 dark:text-blue-300">{eyebrow}</p>
                <h1 className="text-4xl font-medium tracking-[-0.035em] sm:text-5xl md:text-6xl liquid-blue-text">{title}</h1>
                <p className="max-w-3xl text-base leading-7 text-muted-foreground md:text-xl md:leading-8">{description}</p>
                <div className="flex flex-wrap items-center gap-4">
                  <AppStoreBadge campaign={campaign} placement="guide-hero" />
                  <a href="#guide" className="inline-flex min-h-12 items-center rounded-xl border border-border bg-background px-6 text-sm font-semibold shadow-sm hover:bg-accent">Read the guide</a>
                </div>
                <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
                  <span className="flex items-center gap-2"><UserRound className="h-4 w-4 text-blue-600" /> By Nikolay Kalchev</span>
                  <span className="flex items-center gap-2"><CalendarCheck className="h-4 w-4 text-blue-600" /> Published <time dateTime={published}>{publishedLabel}</time></span>
                  <span className="flex items-center gap-2"><CalendarCheck className="h-4 w-4 text-blue-600" /> Source review {LAST_VERIFIED_LABEL}</span>
                </div>
                <details className="guide-verification"><summary>About this guide and its screenshots</summary><p>{verificationNote} Website content updated {CONTENT_UPDATED_LABEL}. Screenshots use sample devices.</p></details>
              </div>
              <ProductDemo compact stage={demoStage} />
            </div>
          </div>
        </section>

        <article id="guide" className="scroll-mt-24 py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[minmax(0,1fr)_300px]">
              <div className="guide-content space-y-12">{children}</div>
              <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
                <div className="rounded-2xl border border-blue-200 bg-blue-50 p-6 dark:border-blue-900 dark:bg-blue-950/40">
                  <h2 className="text-lg font-bold">SoundShare at a glance</h2>
                  <div className="mt-4 space-y-3 text-sm">
                    {["Requires macOS 14+", "30-minute trial", `${US_LIFETIME_PRICE} lifetime in the US`, "No subscription or account"].map((item) => (
                      <div key={item} className="flex gap-2">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-blue-600" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                {relatedGuides.length ? (
                  <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                    <h2 className="text-lg font-bold">Related guides</h2>
                    <div className="mt-4 space-y-4 text-sm">
                      {relatedGuides.map((guide) => (
                        <a key={guide.href} href={guide.href} className="flex min-h-11 items-center leading-6 text-muted-foreground hover:text-blue-700 dark:hover:text-blue-300">
                          {guide.title}
                        </a>
                      ))}
                    </div>
                  </div>
                ) : null}
              </aside>
            </div>
          </div>
        </article>

        <section className="border-t border-border/60 py-12 md:py-16" aria-labelledby="sources-heading">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-4xl">
              <h2 id="sources-heading" className="text-2xl font-bold tracking-tight">Sources and verification</h2>
              <p className="mt-3 leading-7 text-muted-foreground">
                Product behavior is based on the dated source review described above. macOS behavior and terminology are linked to Apple&apos;s documentation below.
              </p>
              <ul className="mt-5 grid gap-3">
                {sources.map((source) => (
                  <li key={source.href} className="rounded-xl border border-border bg-card p-4">
                    <a className="font-semibold text-blue-700 underline-offset-4 hover:underline dark:text-blue-300" href={source.href} rel="noreferrer" target="_blank">
                      {source.title}
                    </a>
                    {source.note ? <p className="mt-1 text-sm leading-6 text-muted-foreground">{source.note}</p> : null}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="guide-faq" className="scroll-mt-24 border-y border-border/60 bg-accent/30 py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-4xl space-y-6">
              <h2 className="text-3xl font-bold tracking-tight liquid-blue-text">Frequently asked questions</h2>
              <div className="grid gap-4">
                {faqs.map((faq) => (
                  <div key={faq.question} className="rounded-2xl border border-border bg-card p-6">
                    <h3 className="font-bold">{faq.question}</h3>
                    <p className="mt-3 leading-7 text-muted-foreground">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <CTASection campaign={campaign} placement="guide-footer" />
      </main>
      <SiteFooter />
    </div>
  )
}

export const coreRelatedGuides = [
  { title: "How to connect two AirPods to one Mac", href: "/connect-two-airpods-to-mac/" },
  { title: "Audio sharing on Mac", href: "/audio-sharing-on-mac/" },
  { title: "Multiple Bluetooth headphones on Mac", href: "/connect-multiple-bluetooth-headphones-to-mac/" },
  { title: "Mac audio through multiple devices", href: "/mac-audio-output-multiple-devices/" },
  { title: "SoundShare vs Multi-Output Device", href: "/soundshare-vs-multi-output-device/" },
]
