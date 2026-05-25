import type { Metadata } from "next"

import { coreRelatedGuides, SEOGuideLayout } from "@/components/seo-guide-layout"

export const metadata: Metadata = {
  title: "How to Connect Two AirPods to One Mac",
  description:
    "Learn how to connect two AirPods to one MacBook or Mac and share synchronized audio with SoundShare.",
  alternates: {
    canonical: "/connect-two-airpods-to-mac/",
  },
}

const faqs = [
  {
    question: "Can I connect two AirPods to one MacBook?",
    answer:
      "Yes. Pair both AirPods with your Mac, then use SoundShare to select both devices and share the Mac audio between them.",
  },
  {
    question: "Can I use AirPods Pro and regular AirPods together?",
    answer:
      "SoundShare is designed for mixed Bluetooth listening setups, including AirPods and other Bluetooth headphones. Actual behavior can depend on the Mac, macOS version, and headphones.",
  },
  {
    question: "Will there be audio delay?",
    answer:
      "Bluetooth latency can vary depending on the headphones model, Mac model, and wireless conditions. SoundShare focuses on keeping connected devices synchronized, but Bluetooth delay can never be removed completely.",
  },
  {
    question: "Does this work with Spotify, YouTube, Netflix, and Apple Music?",
    answer:
      "Yes. SoundShare works with system-wide Mac audio, so it can share sound from music, video, browser, podcast, and media apps.",
  },
]

const structuredData = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to connect two AirPods to one Mac",
  description:
    "Use SoundShare to share one Mac's audio with two AirPods or multiple Bluetooth headphones.",
  step: [
    {
      "@type": "HowToStep",
      name: "Pair both AirPods",
      text: "Pair both sets of AirPods with your Mac from Bluetooth settings.",
    },
    {
      "@type": "HowToStep",
      name: "Open SoundShare",
      text: "Launch SoundShare on your Mac.",
    },
    {
      "@type": "HowToStep",
      name: "Select both devices",
      text: "Choose both AirPods from the connected audio device list.",
    },
    {
      "@type": "HowToStep",
      name: "Start shared playback",
      text: "Play music, video, podcasts, or browser audio and listen together.",
    },
  ],
}

export default function ConnectTwoAirPodsToMacPage() {
  return (
    <SEOGuideLayout
      eyebrow="AirPods on Mac"
      title="How to connect two AirPods to one Mac"
      description="macOS can pair with more than one Bluetooth device, but sharing synchronized audio with two AirPods is the part that usually gets frustrating. SoundShare gives Mac users a simple shared-listening flow for AirPods and other Bluetooth headphones."
      faqs={faqs}
      relatedGuides={coreRelatedGuides.filter((guide) => guide.href !== "/connect-two-airpods-to-mac")}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <section className="space-y-4">
        <h2 className="text-2xl font-bold tracking-tighter liquid-blue-text">
          Can a Mac share audio with two AirPods?
        </h2>
        <p className="leading-7 text-muted-foreground">
          A Mac can pair with multiple Bluetooth devices, but macOS does not offer the same simple
          AirPods Audio Sharing flow that people know from iPhone and iPad. SoundShare is built for
          this exact Mac use case: connect two AirPods, choose them in the app, and play the same Mac
          audio through both pairs.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold tracking-tighter liquid-blue-text">
          The easiest way to connect two AirPods to a Mac
        </h2>
        <ol className="grid gap-3 text-muted-foreground">
          {[
            "Install SoundShare on your Mac.",
            "Pair both sets of AirPods in macOS Bluetooth settings.",
            "Open SoundShare and select both connected AirPods.",
            "Enable audio sharing.",
            "Start playing music, video, podcasts, calls, or browser audio.",
          ].map((step) => (
            <li key={step} className="rounded-lg border border-primary/20 bg-card p-4">
              {step}
            </li>
          ))}
        </ol>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold tracking-tighter liquid-blue-text">
          SoundShare vs macOS Audio MIDI Setup
        </h2>
        <div className="overflow-hidden rounded-lg border border-primary/20">
          <table className="w-full text-left text-sm">
            <thead className="bg-accent/40">
              <tr>
                <th className="p-4 font-semibold">Need</th>
                <th className="p-4 font-semibold">SoundShare</th>
                <th className="p-4 font-semibold">Audio MIDI Setup</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border text-muted-foreground">
              <tr>
                <td className="p-4">Two AirPods for a movie</td>
                <td className="p-4">Simple device selection</td>
                <td className="p-4">Manual multi-output setup</td>
              </tr>
              <tr>
                <td className="p-4">Beginner-friendly sharing</td>
                <td className="p-4">Designed for shared listening</td>
                <td className="p-4">More technical</td>
              </tr>
              <tr>
                <td className="p-4">Bluetooth sync</td>
                <td className="p-4">Focused on synchronized playback</td>
                <td className="p-4">Can drift depending on devices</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm leading-6 text-muted-foreground">
          Audio MIDI Setup is useful for some wired or studio audio setups. For AirPods and casual
          shared listening, SoundShare is the more direct option.
        </p>
      </section>
    </SEOGuideLayout>
  )
}
