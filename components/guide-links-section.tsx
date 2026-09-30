import { ArrowUpRight } from "lucide-react"

const guides = [
  {
    title: "Connect two AirPods to one Mac",
    description: "Pair both sets, select them in SoundShare, start listening, and fix the most common connection problems.",
    href: "/connect-two-airpods-to-mac/",
  },
  {
    title: "Audio sharing on Mac",
    description: "Understand what Mac audio sharing does, where SoundShare fits, and what Bluetooth limitations to expect.",
    href: "/audio-sharing-on-mac/",
  },
  {
    title: "Use multiple Bluetooth headphones",
    description: "Plan a mixed-headphone setup and learn what affects compatibility, battery reporting, and latency.",
    href: "/connect-multiple-bluetooth-headphones-to-mac/",
  },
  {
    title: "Mac audio through multiple devices",
    description: "See why repeating manual multi-output setup gets frustrating and how SoundShare simplifies the session.",
    href: "/mac-audio-output-multiple-devices/",
  },
  {
    title: "SoundShare vs Multi-Output Device",
    description: "Compare setup effort, individual volume, battery information, cleanup, and cost before choosing.",
    href: "/soundshare-vs-multi-output-device/",
  },
]

export function GuideLinksSection() {
  return (
    <section id="guides" className="guides-section" aria-labelledby="guides-title">
      <div className="site-shell guides-grid">
        <div className="section-heading"><p className="eyebrow">The listening library</p><h2 id="guides-title">Your setup.<br /><span>Made simpler.</span></h2><p>Practical guides for two AirPods, mixed headphones, and getting more from your Mac’s audio.</p></div>
        <div className="guide-links">
          {guides.map((guide, index) => (
            <a key={guide.href} href={guide.href} className="guide-link"><span className="guide-number">0{index + 1}</span><div><h3>{guide.title}</h3><p>{guide.description}</p></div><ArrowUpRight size={20} aria-hidden="true" /></a>
          ))}
        </div>
      </div>
    </section>
  )
}
