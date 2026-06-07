import Link from "next/link"

const guides = [
  {
    title: "Sound share on Mac",
    description: "A direct answer for people searching how to share sound from one Mac.",
    href: "/sound-share",
  },
  {
    title: "Connect two AirPods to one Mac",
    description: "A practical guide for sharing one MacBook's audio with two AirPods.",
    href: "/connect-two-airpods-to-mac",
  },
  {
    title: "Use multiple Bluetooth headphones on Mac",
    description: "How SoundShare helps with two headphones, AirPods, Beats, speakers, and earbuds.",
    href: "/connect-multiple-bluetooth-headphones-to-mac",
  },
  {
    title: "Audio sharing on Mac",
    description: "What Mac users can do when they want the AirPods Audio Sharing experience from iPhone.",
    href: "/audio-sharing-on-mac",
  },
  {
    title: "Play Mac audio through multiple devices",
    description: "Compare SoundShare with macOS Audio MIDI Setup and Multi-Output Device.",
    href: "/mac-audio-output-multiple-devices",
  },
]

export function GuideLinksSection() {
  return (
    <section id="guides" className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-3xl space-y-3 text-center">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl liquid-blue-text">
            Mac audio sharing guides
          </h2>
          <p className="text-muted-foreground md:text-lg">
            Helpful answers for people trying to share sound, connect two AirPods, or play audio through multiple devices on macOS.
          </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-5xl gap-4 md:grid-cols-2">
          {guides.map((guide) => (
            <Link
              key={guide.href}
              href={guide.href}
              className="rounded-lg border border-primary/20 bg-card p-5 transition-colors hover:border-primary/50"
            >
              <h3 className="font-semibold liquid-blue-text">{guide.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{guide.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
