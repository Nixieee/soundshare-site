import type { Metadata } from "next"

import { coreRelatedGuides, SEOGuideLayout } from "@/components/seo-guide-layout"

export const metadata: Metadata = {
  title: "Play Mac Audio Through Multiple Devices",
  description:
    "Compare SoundShare and macOS Audio MIDI Setup for playing Mac audio through multiple Bluetooth headphones or audio devices.",
  alternates: {
    canonical: "/mac-audio-output-multiple-devices/",
  },
}

const faqs = [
  {
    question: "Can I play Mac audio through multiple devices?",
    answer:
      "Yes. SoundShare is the easiest option for Bluetooth headphones and AirPods. Audio MIDI Setup can also help with some multi-output setups.",
  },
  {
    question: "Should I use SoundShare or Audio MIDI Setup?",
    answer:
      "Use SoundShare for two AirPods or Bluetooth headphones. Use Audio MIDI Setup if you are comfortable configuring native macOS audio devices manually.",
  },
  {
    question: "Why do Bluetooth devices drift or lag?",
    answer:
      "Bluetooth latency can vary by headphones model, codec, battery level, Mac model, and wireless conditions.",
  },
  {
    question: "Does SoundShare replace every audio routing tool?",
    answer:
      "No. SoundShare is focused on shared listening with Bluetooth audio devices on Mac, not advanced studio routing.",
  },
]

export default function MacAudioOutputMultipleDevicesPage() {
  return (
    <SEOGuideLayout
      eyebrow="Mac audio output"
      title="How to play Mac audio through multiple devices"
      description="There are two common paths: use SoundShare for AirPods and Bluetooth headphones, or use macOS Audio MIDI Setup for more manual audio routing."
      faqs={faqs}
      relatedGuides={coreRelatedGuides.filter((guide) => guide.href !== "/mac-audio-output-multiple-devices")}
    >
      <section className="space-y-4">
        <h2 className="text-2xl font-bold tracking-tighter liquid-blue-text">
          Option 1: SoundShare
        </h2>
        <p className="leading-7 text-muted-foreground">
          SoundShare is the direct option when your goal is shared listening: two AirPods, AirPods
          plus Beats, or multiple Bluetooth headphones connected to one Mac. It is made for music,
          movies, podcasts, browser audio, and other everyday Mac sound.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold tracking-tighter liquid-blue-text">
          Option 2: macOS Audio MIDI Setup
        </h2>
        <p className="leading-7 text-muted-foreground">
          macOS includes Audio MIDI Setup, which can create a Multi-Output Device. This can be useful
          for some wired speakers, interfaces, and technical audio setups, but it can feel confusing
          if all you want is two people listening from one MacBook.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold tracking-tighter liquid-blue-text">
          Which option should you use?
        </h2>
        <div className="overflow-hidden rounded-lg border border-primary/20">
          <table className="w-full text-left text-sm">
            <thead className="bg-accent/40">
              <tr>
                <th className="p-4 font-semibold">Situation</th>
                <th className="p-4 font-semibold">Best choice</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border text-muted-foreground">
              <tr>
                <td className="p-4">Two AirPods on one Mac</td>
                <td className="p-4">SoundShare</td>
              </tr>
              <tr>
                <td className="p-4">Multiple Bluetooth headphones</td>
                <td className="p-4">SoundShare</td>
              </tr>
              <tr>
                <td className="p-4">Studio interface and wired speakers</td>
                <td className="p-4">Audio MIDI Setup</td>
              </tr>
              <tr>
                <td className="p-4">Fast shared movie watching</td>
                <td className="p-4">SoundShare</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </SEOGuideLayout>
  )
}
