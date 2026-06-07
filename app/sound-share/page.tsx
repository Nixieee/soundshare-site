import type { Metadata } from "next"

import { coreRelatedGuides, SEOGuideLayout } from "@/components/seo-guide-layout"

export const metadata: Metadata = {
  title: "Sound Share on Mac",
  description:
    "Use SoundShare to share sound from one Mac with two AirPods or multiple Bluetooth headphones for movies, music, calls, and podcasts.",
  alternates: {
    canonical: "/sound-share/",
  },
}

const faqs = [
  {
    question: "What is SoundShare?",
    answer:
      "SoundShare is a macOS app that helps you share one Mac's audio with two AirPods or multiple Bluetooth headphones.",
  },
  {
    question: "Can I sound share from a MacBook?",
    answer:
      "Yes. Pair your headphones with the Mac, open SoundShare, select the devices, and start shared playback.",
  },
  {
    question: "Does SoundShare work with videos and music?",
    answer:
      "Yes. SoundShare works with system-wide Mac audio, including Apple Music, Spotify, YouTube, Netflix, podcasts, calls, and browser audio.",
  },
  {
    question: "Is this the same as iPhone Audio Sharing?",
    answer:
      "It solves a similar listening need on macOS: one device playing sound while more than one person listens on Bluetooth headphones.",
  },
]

export default function SoundSharePage() {
  return (
    <SEOGuideLayout
      eyebrow="Sound share"
      title="Sound share on Mac with two AirPods or headphones"
      description="If you are searching for a way to sound share from a MacBook, SoundShare gives macOS a simple way to play one audio stream through multiple Bluetooth listening devices."
      pathname="/sound-share/"
      faqs={faqs}
      relatedGuides={coreRelatedGuides}
    >
      <section className="space-y-4">
        <h2 className="text-2xl font-bold tracking-tighter liquid-blue-text">
          A simple way to share sound from one Mac
        </h2>
        <p className="leading-7 text-muted-foreground">
          SoundShare is made for moments where one Mac is playing the movie, song, call, podcast, or
          browser audio and more than one person wants to listen. Instead of passing headphones back
          and forth or using speakers, you can connect two AirPods or multiple Bluetooth headphones.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold tracking-tighter liquid-blue-text">
          How to sound share on Mac
        </h2>
        <ol className="grid gap-3 text-muted-foreground">
          {[
            "Pair both Bluetooth headphones or AirPods with your Mac.",
            "Open SoundShare.",
            "Select the devices you want to hear the audio.",
            "Start sharing and play sound from any Mac app.",
          ].map((step) => (
            <li key={step} className="rounded-lg border border-primary/20 bg-card p-4">
              {step}
            </li>
          ))}
        </ol>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold tracking-tighter liquid-blue-text">
          When SoundShare helps most
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          {[
            "Two people watching a movie on one MacBook.",
            "Sharing music or podcasts while traveling.",
            "Listening together without turning on speakers.",
            "Using AirPods, Beats, earbuds, headphones, or Bluetooth speakers.",
          ].map((item) => (
            <div key={item} className="rounded-lg border border-primary/20 bg-card p-5 text-muted-foreground">
              {item}
            </div>
          ))}
        </div>
      </section>
    </SEOGuideLayout>
  )
}
