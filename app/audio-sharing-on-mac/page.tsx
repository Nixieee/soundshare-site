import { coreRelatedGuides, SEOGuideLayout } from "@/components/seo-guide-layout"
import { US_LIFETIME_PRICE, APPLE_AGGREGATE_SETTINGS_GUIDE, APPLE_BLUETOOTH_GUIDE, createPageMetadata } from "@/lib/site"

export const metadata = createPageMetadata({
  title: "Audio Sharing on Mac with SoundShare",
  description:
    "Learn how Mac audio sharing works with SoundShare, when to use it for two AirPods or multiple headphones, and what Bluetooth limitations to expect.",
  pathname: "/audio-sharing-on-mac/",
})

const faqs = [
  {
    question: "Does a Mac have the same AirPods Audio Sharing button as iPhone?",
    answer:
      "No. macOS does not provide the same shared-listening flow shown on supported iPhones and iPads. SoundShare is a dedicated Mac app for selecting multiple audio outputs.",
  },
  {
    question: "What audio can SoundShare share?",
    answer:
      "SoundShare works with the Mac's output audio, so it is suited to music, films, podcasts, and browser video. It does not route microphone input.",
  },
  {
    question: "How many headphones can I select?",
    answer:
      "SoundShare is designed for multiple output devices. Practical limits depend on the Mac, the devices, their audio formats, and Bluetooth conditions.",
  },
  {
    question: "What does SoundShare cost?",
    answer:
      `The app includes a 30-minute production trial. The lifetime in-app purchase is ${US_LIFETIME_PRICE} in the US, with regional App Store pricing shown before purchase. There is no subscription.`,
  },
]

export default function AudioSharingOnMacPage() {
  return (
    <SEOGuideLayout
      eyebrow="Mac audio sharing"
      title="Audio Sharing on Mac with SoundShare"
      description="SoundShare turns a common Mac frustration into a short workflow: connect your headphones, select the outputs in the app, and listen together with individual volume controls."
      pathname="/audio-sharing-on-mac/"
      demoStage="listen"
      faqs={faqs}
      sources={[
        {
          title: "Apple: Connect a Bluetooth device with your Mac",
          href: APPLE_BLUETOOTH_GUIDE,
          note: "How macOS exposes connected Bluetooth headphones before SoundShare can select them.",
        },
        {
          title: "Apple: Set aggregate-device sample rate and drift correction",
          href: APPLE_AGGREGATE_SETTINGS_GUIDE,
          note: "Apple's explanation of the shared sample-rate and clock-drift constraints managed by SoundShare.",
        },
      ]}
      relatedGuides={coreRelatedGuides.filter((guide) => guide.href !== "/audio-sharing-on-mac/")}
    >
      <section>
        <h2>The practical answer</h2>
        <p>
          A Mac can remember several Bluetooth devices, but its normal Sound menu expects one output
          at a time. SoundShare is built for the moment when two people want to hear the same Mac:
          choose the connected outputs, start the session, and control each listener separately.
        </p>
      </section>

      <section>
        <h2>How to share Mac audio</h2>
        <ol>
          <li>Connect each AirPods set or Bluetooth headphone in macOS Bluetooth settings.</li>
          <li>Open SoundShare and select the outputs for the listening session.</li>
          <li>Start sharing, then play the movie, music, podcast, or browser audio.</li>
          <li>Use SoundShare&apos;s per-device sliders to balance the volume.</li>
        </ol>
        <p>
          SoundShare lives in the menu bar, so the controls remain close without taking over your
          screen. When you stop sharing, it cleans up the temporary audio route it created.
        </p>
      </section>

      <section>
        <h2>When Mac audio sharing is useful</h2>
        <div className="not-prose grid gap-4 sm:grid-cols-2">
          {[
            ["A film on one MacBook", "Two people listen on their own headphones without using the speakers."],
            ["Travel", "Share music or a downloaded show in a plane, train, hotel, or waiting area."],
            ["Late-night listening", "Keep the room quiet while both listeners hear the same audio."],
            ["Reviewing media", "Let a friend or collaborator hear the same edit without passing headphones around."],
          ].map(([title, body]) => (
            <div key={title} className="rounded-2xl border border-border bg-card p-5">
              <h3 className="font-bold">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{body}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2>What the app does—and does not do</h2>
        <div className="overflow-x-auto rounded-2xl border border-border">
          <table>
            <thead>
              <tr><th>SoundShare does</th><th>SoundShare does not</th></tr>
            </thead>
            <tbody>
              <tr><td data-label="SoundShare does">Route Mac output to selected devices</td><td data-label="SoundShare does not">Route or combine microphones</td></tr>
              <tr><td data-label="SoundShare does">Give each output a volume control</td><td data-label="SoundShare does not">Remove all inherent Bluetooth latency</td></tr>
              <tr><td data-label="SoundShare does">Apply CoreAudio drift compensation</td><td data-label="SoundShare does not">Guarantee every possible device combination</td></tr>
              <tr><td data-label="SoundShare does">Show battery when devices report it</td><td data-label="SoundShare does not">Require a SoundShare account</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2>Why SoundShare instead of a manual audio route?</h2>
        <p>
          macOS includes technical audio utilities, but they are organized around device
          configuration rather than two people listening together. SoundShare puts device
          selection, sync status, battery information, and separate volume controls in one focused
          interface—and recreates the route for you the next time you need it.
        </p>
      </section>

      <section>
        <h2>Choose the guide for your setup</h2>
        <div className="not-prose grid gap-4 sm:grid-cols-2">
          {[
            ["Two AirPods", "/connect-two-airpods-to-mac/", "Follow the complete SoundShare workflow for two pairs on one Mac."],
            ["Mixed headphones", "/connect-multiple-bluetooth-headphones-to-mac/", "Understand device discovery, formats, and mixed-model limitations."],
            ["How multi-device output works", "/mac-audio-output-multiple-devices/", "Read the product-level CoreAudio and cleanup explanation."],
            ["SoundShare or a manual configuration", "/soundshare-vs-multi-output-device/", "Compare repeat setup, volume, battery, privacy, cleanup, and cost."],
          ].map(([title, href, detail]) => (
            <a key={href} href={href} className="rounded-2xl border border-border bg-card p-5 no-underline transition hover:border-blue-300">
              <h3 className="font-bold text-foreground">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{detail}</p>
            </a>
          ))}
        </div>
      </section>
    </SEOGuideLayout>
  )
}
