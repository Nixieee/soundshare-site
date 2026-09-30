import { coreRelatedGuides, SEOGuideLayout } from "@/components/seo-guide-layout"
import { APPLE_AGGREGATE_SETTINGS_GUIDE, APPLE_AUDIO_DEVICE_GUIDE, createPageMetadata } from "@/lib/site"

export const metadata = createPageMetadata({
  title: "Play Mac Audio Through Multiple Devices",
  description:
    "Learn why normal Mac output selection stops at one device and how SoundShare routes audio to multiple headphones with drift compensation and cleanup.",
  pathname: "/mac-audio-output-multiple-devices/",
})

const faqs = [
  {
    question: "Can a Mac use more than one audio output at the same time?",
    answer:
      "Yes. SoundShare creates and manages the multi-device output needed for shared listening, then lets you select and control the available devices from one interface.",
  },
  {
    question: "Why does the Mac Sound menu only let me choose one output?",
    answer:
      "The normal Sound menu controls the system's current default output. Coordinating several devices requires a multi-output audio route, which SoundShare creates for the listening session.",
  },
  {
    question: "Can SoundShare control each device separately?",
    answer:
      "Yes. Each selected output has its own volume control, and battery information appears when the device reports it to macOS.",
  },
  {
    question: "Is SoundShare a studio audio-routing tool?",
    answer:
      "No. It is purpose-built for shared listening on macOS, not microphone mixing, virtual channels, or advanced studio signal routing.",
  },
]

export default function MacAudioOutputMultipleDevicesPage() {
  return (
    <SEOGuideLayout
      eyebrow="Mac audio output"
      title="Play Mac audio through multiple devices"
      description="The regular macOS Sound menu chooses one destination. SoundShare creates the shared route, keeps selected outputs together, and gives each listener a separate volume control."
      pathname="/mac-audio-output-multiple-devices/"
      demoStage="volume"
      faqs={faqs}
      sources={[
        {
          title: "Apple: Set up audio devices on Mac",
          href: APPLE_AUDIO_DEVICE_GUIDE,
          note: "Apple's reference for output-device formats, sample rates, and software volume support.",
        },
        {
          title: "Apple: Set aggregate-device sample rate and drift correction",
          href: APPLE_AGGREGATE_SETTINGS_GUIDE,
          note: "The CoreAudio constraints SoundShare handles behind its shared-listening interface.",
        },
      ]}
      relatedGuides={coreRelatedGuides.filter((guide) => guide.href !== "/mac-audio-output-multiple-devices/")}
    >
      <section>
        <h2>Why one Mac normally means one selected output</h2>
        <p>
          In System Settings, choosing headphones replaces the previous sound output. That model is
          sensible for one listener, but it does not solve a movie night or travel setup where two
          people have their own headphones. SoundShare manages the multi-device route behind a
          purpose-built shared-listening interface.
        </p>
      </section>

      <section>
        <h2>The SoundShare workflow</h2>
        <ol>
          <li>Connect the headphones or speakers to the Mac.</li>
          <li>Open SoundShare from the menu bar and select the available outputs.</li>
          <li>Start sharing and play audio from the Mac.</li>
          <li>Balance each output with its own volume slider.</li>
        </ol>
        <p>
          The app configures the shared output for the current devices and removes the temporary
          route when the session ends. You do not have to rebuild that configuration by hand every
          time the device list changes.
        </p>
      </section>

      <section>
        <h2>What happens behind the interface?</h2>
        <div className="not-prose grid gap-4 sm:grid-cols-3">
          {[
            ["Discover", "SoundShare reads the output devices currently exposed by macOS."],
            ["Route", "It creates a shared CoreAudio output from the compatible devices you select."],
            ["Maintain", "Drift compensation helps device clocks stay aligned during playback."],
          ].map(([title, body]) => (
            <div key={title} className="rounded-2xl border border-border bg-card p-5">
              <h3 className="font-bold">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{body}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2>Shared listening is different from studio routing</h2>
        <p>
          SoundShare intentionally has a smaller job than a professional mixer or virtual-audio
          system. It does not combine microphones or build complex signal chains. Its job is to make
          everyday Mac output—films, music, podcasts, and browser media—available to more than one
          compatible listening device without exposing the technical setup.
        </p>
      </section>

      <section>
        <h2>Set expectations for Bluetooth</h2>
        <p>
          Every Bluetooth output adds some hardware delay, and different models may buffer sound for
          different lengths of time. SoundShare compensates for ongoing clock drift, but cannot erase
          a device&apos;s built-in latency. For the closest perceived sync, use similar models and keep the
          wireless path clear.
        </p>
      </section>

      <section>
        <h2>Common SoundShare failure states</h2>
        <dl className="not-prose grid gap-4">
          {[
            ["A selected output disappeared", "Reconnect it in Bluetooth settings, stop the current session, and reopen SoundShare so the CoreAudio device list refreshes."],
            ["The devices have no common format", "Stop apps using a headset microphone, reconnect the outputs, and try again. Mixed models may expose incompatible sample rates."],
            ["A session was interrupted", "Reopen SoundShare. Launch recovery restores an available normal output and removes a leftover SoundShare route before a new session begins."],
            ["One device has no volume or battery value", "Those controls appear only when the device and macOS expose the corresponding property; SoundShare does not invent unavailable hardware data."],
          ].map(([term, detail]) => (
            <div key={term} className="rounded-2xl border border-border bg-card p-5">
              <dt className="font-bold">{term}</dt>
              <dd className="mt-2 leading-7 text-muted-foreground">{detail}</dd>
            </div>
          ))}
        </dl>
      </section>
    </SEOGuideLayout>
  )
}
