import { coreRelatedGuides, SEOGuideLayout } from "@/components/seo-guide-layout"
import { US_LIFETIME_PRICE, APPLE_AGGREGATE_SETTINGS_GUIDE, APPLE_AUDIO_DEVICE_GUIDE, createPageMetadata } from "@/lib/site"

export const metadata = createPageMetadata({
  title: "SoundShare vs macOS Multi-Output Device",
  description:
    "Compare SoundShare with a manual macOS Multi-Output Device for setup, individual volume, battery, privacy, cleanup, Bluetooth limits, and lifetime cost.",
  pathname: "/soundshare-vs-multi-output-device/",
})

const faqs = [
  {
    question: "What is the main difference?",
    answer:
      "A Multi-Output Device is a low-level macOS audio configuration. SoundShare is a dedicated shared-listening app that creates and manages the route while adding per-device controls and status.",
  },
  {
    question: "Is the macOS utility free?",
    answer:
      `Yes, the underlying Apple utility is included with macOS. SoundShare includes a 30-minute production trial and a ${US_LIFETIME_PRICE} US lifetime purchase for its focused workflow, controls, and automatic cleanup.`,
  },
  {
    question: "Does SoundShare remove Bluetooth delay?",
    answer:
      "No app can remove the delay inside Bluetooth hardware. SoundShare uses CoreAudio drift compensation to prevent selected outputs from gradually moving farther apart.",
  },
  {
    question: "Who is SoundShare for?",
    answer:
      "It is for Mac users who regularly want two people—or several compatible outputs—to hear the same movie, music, podcast, or browser audio without managing technical audio objects.",
  },
]

export default function SoundShareVsMultiOutputDevicePage() {
  return (
    <SEOGuideLayout
      eyebrow="Honest comparison"
      title="SoundShare vs macOS Multi-Output Device"
      description="Both approaches can send sound to several outputs. The difference is whether you want a technical configuration object or a reusable shared-listening experience."
      pathname="/soundshare-vs-multi-output-device/"
      demoStage="listen"
      faqs={faqs}
      sources={[
        {
          title: "Apple: Set up audio devices on Mac",
          href: APPLE_AUDIO_DEVICE_GUIDE,
          note: "The technical macOS audio-configuration context used for this comparison.",
        },
        {
          title: "Apple: Set aggregate-device sample rate and drift correction",
          href: APPLE_AGGREGATE_SETTINGS_GUIDE,
          note: "Apple's description of the sample-rate and drift controls that a manual configuration exposes.",
        },
      ]}
      relatedGuides={coreRelatedGuides.filter((guide) => guide.href !== "/soundshare-vs-multi-output-device/")}
    >
      <section>
        <h2>Quick recommendation</h2>
        <p>
          Choose SoundShare when the goal is recurring, everyday listening with AirPods or Bluetooth
          headphones and you value separate volume controls, device status, and automatic setup.
          A manual Multi-Output Device remains relevant to technically experienced users working
          with fixed wired or studio hardware who do not need SoundShare&apos;s workflow.
        </p>
      </section>

      <section>
        <h2>Feature-by-feature comparison</h2>
        <div className="overflow-x-auto rounded-2xl border border-border">
          <table>
            <thead>
              <tr><th>Need</th><th>SoundShare</th><th>Manual Multi-Output Device</th></tr>
            </thead>
            <tbody>
              <tr><td data-label="Need">Primary purpose</td><td data-label="SoundShare">Everyday shared listening</td><td data-label="Manual option">General audio-device configuration</td></tr>
              <tr><td data-label="Need">Setup</td><td data-label="SoundShare">Select outputs in one focused app</td><td data-label="Manual option">Build and maintain a technical device object</td></tr>
              <tr><td data-label="Need">Individual volume</td><td data-label="SoundShare">Per-device controls in the app</td><td data-label="Manual option">Limited, device-dependent controls</td></tr>
              <tr><td data-label="Need">Battery visibility</td><td data-label="SoundShare">Shown when a device reports it</td><td data-label="Manual option">Not part of the audio configuration view</td></tr>
              <tr><td data-label="Need">Drift handling</td><td data-label="SoundShare">Managed for selected outputs</td><td data-label="Manual option">Configured manually per device</td></tr>
              <tr><td data-label="Need">Changing headphones</td><td data-label="SoundShare">Choose the current outputs</td><td data-label="Manual option">May require editing or rebuilding configuration</td></tr>
              <tr><td data-label="Need">Cleanup</td><td data-label="SoundShare">Temporary route removed after use</td><td data-label="Manual option">Configuration remains until manually changed</td></tr>
              <tr><td data-label="Need">Installation</td><td data-label="SoundShare">Mac App Store menu-bar app</td><td data-label="Manual option">Included macOS utility</td></tr>
              <tr><td data-label="Need">Privacy</td><td data-label="SoundShare">No account; no listening-history collection</td><td data-label="Manual option">Local macOS configuration</td></tr>
              <tr><td data-label="Need">Price</td><td data-label="SoundShare">30-minute trial; {US_LIFETIME_PRICE} US lifetime</td><td data-label="Manual option">Included with macOS</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2>Where SoundShare earns its place</h2>
        <p>
          The value is not that macOS is incapable of multi-device audio. It is that SoundShare turns
          the capability into a product: the current outputs are visible, each listener has a
          control, device information is close by, and the temporary route follows the listening
          session instead of becoming another system configuration to maintain.
        </p>
      </section>

      <section>
        <h2>Where SoundShare is not the right tool</h2>
        <p>
          SoundShare is not intended for recording studios, microphone aggregation, or elaborate
          virtual audio routing. If the setup is permanent, wired, and managed by an audio engineer,
          a low-level macOS configuration or professional routing tool may be more appropriate. For
          two people opening a MacBook to watch something together, SoundShare is the focused option.
        </p>
      </section>
    </SEOGuideLayout>
  )
}
