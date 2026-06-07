import type { Metadata } from "next"

import { coreRelatedGuides, SEOGuideLayout } from "@/components/seo-guide-layout"

export const metadata: Metadata = {
  title: "Connect Multiple Bluetooth Headphones to a Mac",
  description:
    "Use SoundShare to play Mac audio through multiple Bluetooth headphones, AirPods, earbuds, or speakers at the same time.",
  alternates: {
    canonical: "/connect-multiple-bluetooth-headphones-to-mac/",
  },
}

const faqs = [
  {
    question: "Can a Mac play audio through multiple Bluetooth headphones?",
    answer:
      "Yes. SoundShare is made to share Mac audio with multiple Bluetooth headphones at the same time.",
  },
  {
    question: "Can I mix AirPods, Beats, Sony, Bose, and other headphones?",
    answer:
      "SoundShare is designed for mixed Bluetooth audio setups. Compatibility and latency can vary depending on the exact headphones and Mac.",
  },
  {
    question: "Can I use Bluetooth speakers too?",
    answer:
      "SoundShare is designed for Bluetooth audio devices, including headphones, earbuds, and speakers, depending on how those devices behave with your Mac.",
  },
  {
    question: "How do I get the best sync?",
    answer:
      "Keep devices near the Mac, charge them first, disconnect unused Bluetooth accessories, and use similar headphones when possible.",
  },
]

export default function ConnectMultipleBluetoothHeadphonesPage() {
  return (
    <SEOGuideLayout
      eyebrow="Bluetooth audio on Mac"
      title="How to connect multiple Bluetooth headphones to a Mac"
      description="Pairing multiple Bluetooth devices is not the same as playing synchronized audio through all of them. SoundShare gives Mac users a clearer way to share one audio stream with multiple Bluetooth headphones."
      pathname="/connect-multiple-bluetooth-headphones-to-mac/"
      faqs={faqs}
      relatedGuides={coreRelatedGuides.filter(
        (guide) => guide.href !== "/connect-multiple-bluetooth-headphones-to-mac"
      )}
    >
      <section className="space-y-4">
        <h2 className="text-2xl font-bold tracking-tighter liquid-blue-text">
          Why this is difficult on macOS
        </h2>
        <p className="leading-7 text-muted-foreground">
          macOS can remember and connect to many Bluetooth accessories, but the normal sound output
          picker is built around choosing one output device. When two people want to listen from one
          Mac, you need a way to route and synchronize the same audio across more than one device.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold tracking-tighter liquid-blue-text">
          Use SoundShare for multiple Bluetooth headphones
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          {[
            "Pair each Bluetooth headphone, earbud, or speaker with the Mac.",
            "Open SoundShare and choose the devices you want to use.",
            "Start audio sharing from the app.",
            "Play sound from Apple Music, Spotify, YouTube, Netflix, podcasts, or browser tabs.",
          ].map((item) => (
            <div key={item} className="rounded-lg border border-primary/20 bg-card p-5 text-muted-foreground">
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold tracking-tighter liquid-blue-text">
          Supported listening setups
        </h2>
        <p className="leading-7 text-muted-foreground">
          SoundShare is useful for AirPods, AirPods Pro, Beats, Bluetooth earbuds, Bluetooth
          headphones, and Bluetooth speakers. It is especially helpful when two people want to watch
          a movie on a MacBook, listen to music while traveling, or share a podcast without disturbing
          people nearby.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold tracking-tighter liquid-blue-text">
          A realistic note about Bluetooth latency
        </h2>
        <p className="leading-7 text-muted-foreground">
          Bluetooth latency can vary depending on the headphones model, codec behavior, Mac model,
          battery level, and wireless environment. SoundShare is built to keep the connected devices
          synchronized, but any Bluetooth setup can still have some inherent delay.
        </p>
      </section>
    </SEOGuideLayout>
  )
}
