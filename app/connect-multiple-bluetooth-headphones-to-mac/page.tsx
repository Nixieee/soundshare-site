import { coreRelatedGuides, SEOGuideLayout } from "@/components/seo-guide-layout"
import { APPLE_AGGREGATE_SETTINGS_GUIDE, APPLE_BLUETOOTH_GUIDE, createPageMetadata } from "@/lib/site"

export const metadata = createPageMetadata({
  title: "Connect Multiple Bluetooth Headphones to a Mac",
  description:
    "Connect multiple Bluetooth headphones to one Mac with SoundShare, balance each listener, and understand device formats, drift, battery, and latency limits.",
  pathname: "/connect-multiple-bluetooth-headphones-to-mac/",
})

const faqs = [
  {
    question: "Can a Mac play through multiple Bluetooth headphones?",
    answer:
      "Yes. After macOS connects the headphones, SoundShare can select multiple available outputs for one shared-listening session.",
  },
  {
    question: "Can I mix AirPods with non-Apple headphones?",
    answer:
      "SoundShare is not limited to one brand. Compatibility depends on whether macOS exposes each device as an output and whether the selected devices support a workable shared audio format.",
  },
  {
    question: "Does SoundShare support Bluetooth speakers?",
    answer:
      "A Bluetooth speaker can be selected when macOS exposes it as a compatible audio output. The experience may differ from headphones because different hardware can have noticeably different inherent latency.",
  },
  {
    question: "Why does one device sound later than another?",
    answer:
      "Bluetooth devices buffer audio differently. SoundShare compensates for clock drift, but it cannot make two models with very different built-in latency physically identical.",
  },
]

export default function ConnectMultipleBluetoothHeadphonesPage() {
  return (
    <SEOGuideLayout
      eyebrow="Mixed headphone setups"
      title="Connect multiple Bluetooth headphones to a Mac"
      description="SoundShare is not limited to matching AirPods. If macOS exposes your connected headphones as audio outputs, the app can bring compatible devices into one shared listening session."
      pathname="/connect-multiple-bluetooth-headphones-to-mac/"
      demoStage="discover"
      faqs={faqs}
      sources={[
        {
          title: "Apple: Connect a Bluetooth device with your Mac",
          href: APPLE_BLUETOOTH_GUIDE,
          note: "Apple's current pairing and connection guidance for Bluetooth outputs.",
        },
        {
          title: "Apple: Set aggregate-device sample rate and drift correction",
          href: APPLE_AGGREGATE_SETTINGS_GUIDE,
          note: "Why shared devices need a common sample rate and compensation for independent clocks.",
        },
      ]}
      verificationNote="Compatibility logic reviewed against SoundShare 2.2.1 on a MacBook Pro (M2 Pro), macOS 26.5.2. No untested headphone model is presented as verified."
      relatedGuides={coreRelatedGuides.filter(
        (guide) => guide.href !== "/connect-multiple-bluetooth-headphones-to-mac/"
      )}
    >
      <section>
        <h2>Connect the headphones first, then select them in SoundShare</h2>
        <ol>
          <li>Pair every headphone with the Mac in System Settings → Bluetooth.</li>
          <li>Make sure each device says “Connected” and is not actively attached to another nearby device.</li>
          <li>Open SoundShare and select the outputs you want to hear.</li>
          <li>Start the session and set a comfortable volume for each device.</li>
        </ol>
        <p>
          The macOS connection is the prerequisite; SoundShare is the layer that makes those outputs
          useful together for a film, song, podcast, or browser video.
        </p>
      </section>

      <section>
        <h2>What determines compatibility?</h2>
        <p>
          SoundShare asks CoreAudio for the output devices and formats that macOS currently exposes.
          A combination is most likely to work when every device stays connected and supports a
          compatible sample rate. That is more accurate than promising a brand list: firmware,
          macOS, and even the active Bluetooth profile can change what a device reports.
        </p>
        <div className="not-prose mt-5 rounded-2xl border border-amber-300 bg-amber-50 p-5 text-sm leading-6 text-amber-950 dark:border-amber-900 dark:bg-amber-950/35 dark:text-amber-100">
          SoundShare routes output audio only. If a headset switches into a call or microphone mode,
          its available audio format can change. For shared listening, keep microphone input on a
          separate device when possible.
        </div>
      </section>

      <section>
        <h2>Mixed models versus matching models</h2>
        <p>
          You can try mixed devices, but each Bluetooth model has its own buffering and inherent
          latency. SoundShare uses drift compensation so their clocks do not gradually separate.
          Matching or similar models may still feel closer because their built-in delays are more
          alike from the start.
        </p>
      </section>

      <section>
        <h2>Improve stability before a long session</h2>
        <ul>
          <li>Charge every headphone and keep it close to the Mac.</li>
          <li>Disconnect headphones from phones or tablets that may reclaim the connection.</li>
          <li>Turn off Bluetooth accessories you do not need if the wireless environment is crowded.</li>
          <li>Connect all outputs before opening or restarting SoundShare.</li>
          <li>Set individual volume in SoundShare instead of repeatedly changing the system output.</li>
        </ul>
      </section>

      <section>
        <h2>Troubleshooting a device that drops out</h2>
        <p>
          Stop the SoundShare session, reconnect the missing device in Bluetooth settings, and then
          reopen the app so it can refresh the current CoreAudio device list. If the same combination
          fails repeatedly, test each device separately; that distinguishes a connection problem from
          an incompatible multi-device format.
        </p>
      </section>
    </SEOGuideLayout>
  )
}
