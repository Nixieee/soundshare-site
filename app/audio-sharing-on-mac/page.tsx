import type { Metadata } from "next"

import { coreRelatedGuides, SEOGuideLayout } from "@/components/seo-guide-layout"

export const metadata: Metadata = {
  title: "Audio Sharing on Mac",
  description:
    "SoundShare brings audio sharing to macOS so you can share one Mac's sound with two AirPods or multiple Bluetooth headphones.",
  alternates: {
    canonical: "/audio-sharing-on-mac/",
  },
}

const faqs = [
  {
    question: "Does Mac have built-in AirPods Audio Sharing like iPhone?",
    answer:
      "Not in the same simple shared-listening flow. SoundShare is built to bring that kind of use case to macOS.",
  },
  {
    question: "Is SoundShare an Audio Sharing app for Mac?",
    answer:
      "Yes. SoundShare is a macOS app for sharing one Mac's audio with two AirPods or multiple Bluetooth headphones.",
  },
  {
    question: "What apps can I share audio from?",
    answer:
      "SoundShare works with system-wide Mac audio, including music, video, podcast, browser, and media apps.",
  },
  {
    question: "Does Bluetooth latency matter?",
    answer:
      "Yes. Bluetooth latency can vary by headphone model and wireless conditions, so SoundShare focuses on synchronization while staying realistic about Bluetooth limits.",
  },
]

export default function AudioSharingOnMacPage() {
  return (
    <SEOGuideLayout
      eyebrow="Mac audio sharing"
      title="Audio Sharing on Mac: share sound with two headphones"
      description="iPhone and iPad users know AirPods Audio Sharing. SoundShare gives Mac users a dedicated way to share audio from one Mac with multiple Bluetooth listeners."
      faqs={faqs}
      relatedGuides={coreRelatedGuides.filter((guide) => guide.href !== "/audio-sharing-on-mac")}
    >
      <section className="space-y-4">
        <h2 className="text-2xl font-bold tracking-tighter liquid-blue-text">
          Does macOS have Audio Sharing?
        </h2>
        <p className="leading-7 text-muted-foreground">
          macOS does not present the same simple AirPods Audio Sharing experience that exists on
          iPhone and iPad. Mac users can work around audio routing in a few ways, but SoundShare is
          designed around the shared-listening experience directly.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold tracking-tighter liquid-blue-text">
          How SoundShare brings audio sharing to macOS
        </h2>
        <p className="leading-7 text-muted-foreground">
          SoundShare lets you connect two AirPods or multiple Bluetooth headphones to one Mac and
          listen together. It works with the Mac audio you already use, whether the sound comes from
          Apple Music, Spotify, YouTube, Netflix, podcasts, or another media app.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold tracking-tighter liquid-blue-text">
          Common ways people use Mac audio sharing
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          {[
            "Watch a movie together on a MacBook with two pairs of AirPods.",
            "Share music or podcasts while traveling.",
            "Preview audio with a friend, client, or collaborator.",
            "Listen at night without using speakers.",
          ].map((item) => (
            <div key={item} className="rounded-lg border border-primary/20 bg-card p-5 text-muted-foreground">
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold tracking-tighter liquid-blue-text">
          iPhone Audio Sharing vs SoundShare on Mac
        </h2>
        <p className="leading-7 text-muted-foreground">
          iPhone Audio Sharing is built into iOS for supported Apple headphones. SoundShare is for
          macOS users who want a similar practical result on Mac: one device playing audio, multiple
          people listening on their own Bluetooth headphones.
        </p>
      </section>
    </SEOGuideLayout>
  )
}
