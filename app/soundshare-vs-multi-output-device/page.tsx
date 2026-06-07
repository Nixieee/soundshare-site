import type { Metadata } from "next"

import { coreRelatedGuides, SEOGuideLayout } from "@/components/seo-guide-layout"

export const metadata: Metadata = {
  title: "SoundShare vs macOS Multi-Output Device",
  description:
    "Compare SoundShare with macOS Multi-Output Device for sharing Mac audio with AirPods and Bluetooth headphones.",
  alternates: {
    canonical: "/soundshare-vs-multi-output-device/",
  },
}

const faqs = [
  {
    question: "Is SoundShare better than Multi-Output Device?",
    answer:
      "For two AirPods or Bluetooth shared listening, SoundShare is the simpler choice. Multi-Output Device is better for people who want manual macOS audio routing.",
  },
  {
    question: "Is Multi-Output Device free?",
    answer:
      "Audio MIDI Setup is built into macOS. SoundShare is a dedicated app focused on making shared Bluetooth listening easier.",
  },
  {
    question: "Can Multi-Output Device have Bluetooth delay?",
    answer:
      "Yes. Bluetooth latency can vary depending on headphones model, Mac model, codec behavior, and wireless conditions.",
  },
  {
    question: "Who should use SoundShare?",
    answer:
      "People who want a simple way to share Mac audio with two AirPods or multiple Bluetooth headphones should use SoundShare.",
  },
]

export default function SoundShareVsMultiOutputDevicePage() {
  return (
    <SEOGuideLayout
      eyebrow="Comparison"
      title="SoundShare vs macOS Multi-Output Device"
      description="Both can help route Mac audio, but they are built for different people. SoundShare is for simple Bluetooth shared listening; Multi-Output Device is a more manual macOS audio tool."
      pathname="/soundshare-vs-multi-output-device/"
      faqs={faqs}
      relatedGuides={coreRelatedGuides.filter((guide) => guide.href !== "/soundshare-vs-multi-output-device")}
    >
      <section className="space-y-4">
        <h2 className="text-2xl font-bold tracking-tighter liquid-blue-text">
          Quick recommendation
        </h2>
        <p className="leading-7 text-muted-foreground">
          Use SoundShare if you want to connect two AirPods, AirPods plus Beats, or multiple
          Bluetooth headphones to one Mac for everyday listening. Use macOS Multi-Output Device if
          you are comfortable configuring audio devices manually and your setup is more technical.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold tracking-tighter liquid-blue-text">
          Comparison
        </h2>
        <div className="overflow-hidden rounded-lg border border-primary/20">
          <table className="w-full text-left text-sm">
            <thead className="bg-accent/40">
              <tr>
                <th className="p-4 font-semibold">Category</th>
                <th className="p-4 font-semibold">SoundShare</th>
                <th className="p-4 font-semibold">Multi-Output Device</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border text-muted-foreground">
              <tr>
                <td className="p-4">Best for</td>
                <td className="p-4">AirPods and Bluetooth shared listening</td>
                <td className="p-4">Manual audio routing</td>
              </tr>
              <tr>
                <td className="p-4">Setup</td>
                <td className="p-4">App-guided device selection</td>
                <td className="p-4">Audio MIDI Setup configuration</td>
              </tr>
              <tr>
                <td className="p-4">Beginner friendly</td>
                <td className="p-4">Yes</td>
                <td className="p-4">Less so</td>
              </tr>
              <tr>
                <td className="p-4">Everyday use</td>
                <td className="p-4">Movies, music, podcasts, browser audio</td>
                <td className="p-4">Technical routing and device combinations</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold tracking-tighter liquid-blue-text">
          Why honesty about latency matters
        </h2>
        <p className="leading-7 text-muted-foreground">
          Any Bluetooth audio setup can have latency. The exact delay depends on the headphones
          model, Mac model, codec behavior, and wireless environment. SoundShare is designed around
          synchronized shared listening, but it should still be understood as a Bluetooth audio
          solution with real-world Bluetooth limits.
        </p>
      </section>
    </SEOGuideLayout>
  )
}
