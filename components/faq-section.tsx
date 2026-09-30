import { US_LIFETIME_PRICE } from "@/lib/site"
const questions = [
  {
    question: "How do I use two AirPods with one Mac?",
    answer: "Pair both sets in macOS System Settings, open SoundShare from the menu bar, select both connected AirPods, and press Start Listening. SoundShare creates the shared output session and restores your previous Mac output when you stop.",
  },
  {
    question: "Which macOS versions are supported?",
    answer: "SoundShare requires macOS 14 or later. ",
  },
  {
    question: "Will both headphones be perfectly delay-free?",
    answer: "No Bluetooth setup can promise zero latency in every combination. SoundShare enables macOS drift compensation to reduce device-to-device drift, while remaining latency depends on the headphones, codec behavior, Mac, battery level, and wireless conditions.",
  },
  {
    question: "Can I mix AirPods with other Bluetooth headphones?",
    answer: "Often, yes, when macOS exposes both devices as compatible audio outputs with a shared sample rate. Mixed models can behave differently, so similar headphones usually give the most predictable result.",
  },
  {
    question: "Does SoundShare work with music and video apps?",
    answer: "SoundShare works with Mac system output from media and browser apps such as Apple Music, Spotify, YouTube, Netflix, and podcast players. It does not route microphones or create separate app-by-app mixes.",
  },
  {
    question: "How much does SoundShare cost?",
    answer: `The app is free to download and includes a 30-minute trial. Lifetime access is currently ${US_LIFETIME_PRICE} in the US Mac App Store, with no recurring subscription. Regional prices can vary.`,
  },
  {
    question: "What data does SoundShare collect?",
    answer: "SoundShare does not require an account or inspect what you listen to. Audio routing occurs on the Mac. Apple currently lists the app as Data Not Collected; purchase processing is handled through the Mac App Store and RevenueCat.",
  },
]

export function FAQSection() {
  return (
    <section id="faq" className="simple-faq site-shell" aria-labelledby="faq-title">
      <h1 id="faq-title">A few good questions.</h1>
      <div className="faq-list">{questions.map(item => <details key={item.question} className="faq-item"><summary>{item.question}<span aria-hidden="true">+</span></summary><p>{item.answer}</p></details>)}</div>
      <a className="text-action" href="/support/">Still need a hand? Contact support ↗</a>
    </section>
  )
}
