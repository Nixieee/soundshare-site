import { ProductDemo } from "@/components/product-demo"
import { coreRelatedGuides, SEOGuideLayout } from "@/components/seo-guide-layout"
import { APPLE_AGGREGATE_SETTINGS_GUIDE, APPLE_BLUETOOTH_GUIDE, createPageMetadata } from "@/lib/site"

export const metadata = createPageMetadata({
  title: "How to Connect Two AirPods to One Mac",
  description:
    "Connect two AirPods to one Mac with SoundShare, use separate volume controls, understand Bluetooth latency, and fix missing-device or format problems.",
  pathname: "/connect-two-airpods-to-mac/",
})

const faqs = [
  {
    question: "Can I connect two AirPods to one MacBook?",
    answer:
      "Yes. Pair both sets with the Mac first, then select both outputs in SoundShare. SoundShare routes the same Mac audio to each selected pair.",
  },
  {
    question: "Can each listener use a different volume?",
    answer:
      "Yes. SoundShare provides a volume control for each selected output, so one listener can turn their pair down without changing the other pair.",
  },
  {
    question: "Can I combine different AirPods models?",
    answer:
      "SoundShare can use audio outputs that macOS exposes to the app, including mixed Bluetooth headphones. Results still depend on the devices, their supported audio formats, and the wireless environment.",
  },
  {
    question: "Will Bluetooth audio have delay?",
    answer:
      "Some Bluetooth latency is unavoidable. SoundShare uses drift compensation to keep selected outputs aligned, but it cannot remove the inherent delay introduced by Bluetooth hardware.",
  },
]

const steps = [
  {
    title: "Pair both sets of AirPods",
    body: "Open System Settings → Bluetooth and connect each pair. Both should appear as connected audio devices before you open SoundShare.",
  },
  {
    title: "Open SoundShare",
    body: "Launch SoundShare from the Applications folder or menu bar. The app lists the audio outputs currently available from macOS.",
  },
  {
    title: "Select both AirPods",
    body: "Choose the two pairs you want to use. Check that both are shown as active before starting playback.",
  },
  {
    title: "Play audio and balance the volume",
    body: "Press Start Listening, then start a movie, song, podcast, or browser video. Adjust each pair independently in SoundShare until both listeners are comfortable.",
  },
]

export default function ConnectTwoAirPodsToMacPage() {
  return (
    <SEOGuideLayout
      eyebrow="Two AirPods, one Mac"
      title="How to connect two AirPods to one Mac"
      description="The short answer: pair both AirPods in macOS, open SoundShare, select both pairs, and press start. Here is the complete SoundShare workflow and what to check if one pair does not appear."
      pathname="/connect-two-airpods-to-mac/"
      demoStage="select"
      faqs={faqs}
      sources={[
        {
          title: "Apple: Connect a Bluetooth device with your Mac",
          href: APPLE_BLUETOOTH_GUIDE,
          note: "Apple's current reference for pairing and connecting headphones in macOS.",
        },
        {
          title: "Apple: Set aggregate-device sample rate and drift correction",
          href: APPLE_AGGREGATE_SETTINGS_GUIDE,
          note: "The underlying macOS concepts SoundShare manages for compatible shared outputs.",
        },
      ]}
      verificationNote="Workflow and failure states reviewed against SoundShare 2.2.1 on a MacBook Pro (M2 Pro) running macOS 26.5.2; two-headphone hardware results still vary by device."
      relatedGuides={coreRelatedGuides.filter((guide) => guide.href !== "/connect-two-airpods-to-mac/")}
    >
      <section>
        <h2>Before you start</h2>
        <ul>
          <li>A Mac running macOS 14 or later</li>
          <li>SoundShare installed from the Mac App Store</li>
          <li>Two charged sets of AirPods paired with the same Mac</li>
          <li>A quiet minute to set a comfortable volume for each listener</li>
        </ul>
        <p>
          Bluetooth pairing alone does not make the Mac play through both pairs. Pairing makes the
          headphones available; SoundShare handles selecting and synchronizing the outputs for the
          shared-listening session.
        </p>
      </section>

      <section>
        <h2>Connect two AirPods with SoundShare</h2>
        <ol className="step-list grid gap-4">
          {steps.map((step, index) => (
            <li key={step.title} className="flex gap-4 rounded-2xl border border-border bg-card p-5 shadow-sm">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-600 font-bold text-white">
                {index + 1}
              </span>
              <div>
                <h3 className="font-bold">{step.title}</h3>
                <p className="mt-2 leading-7 text-muted-foreground">{step.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section>
        <h2>What the SoundShare steps look like</h2>
        <p>
          These SoundShare interface captures were rendered from production views with deterministic sample
          devices. Your AirPods names and battery values will reflect what the connected hardware
          reports to macOS.
        </p>
        <div className="not-prose mt-6 grid gap-6 md:grid-cols-3">
          {[
            {
              stage: "discover" as const,
              title: "1. Confirm the outputs appear",
              text: "SoundShare separates devices that are already connected from outputs that are still available to connect.",
            },
            {
              stage: "select" as const,
              title: "2. Select both listeners",
              text: "Blue device controls show which outputs will join the listening session before you press Start Listening.",
            },
            {
              stage: "volume" as const,
              title: "3. Balance the volumes",
              text: "Expand Main Volume to adjust each listener independently while the shared session is active.",
            },
          ].map((capture) => (
            <figure key={capture.title} className="rounded-3xl border border-border bg-card p-4 shadow-sm">
              <ProductDemo compact stage={capture.stage} />
              <figcaption className="px-1 pb-1 pt-5">
                <h3 className="font-bold">{capture.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{capture.text}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section>
        <h2>What SoundShare adds to the setup</h2>
        <div className="not-prose grid gap-4 sm:grid-cols-2">
          {[
            ["One place to choose outputs", "See the available devices and select the two pairs for this listening session."],
            ["Separate volume controls", "Balance each pair without asking both listeners to accept the same volume."],
            ["Drift compensation", "SoundShare uses CoreAudio drift compensation to help selected outputs stay aligned."],
            ["Battery at a glance", "See battery information when the connected device reports it to macOS."],
          ].map(([title, body]) => (
            <div key={title} className="rounded-2xl border border-border bg-card p-5">
              <h3 className="font-bold">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{body}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2>If one pair does not appear</h2>
        <ol>
          <li>Confirm the missing pair says “Connected” in System Settings → Bluetooth.</li>
          <li>Disconnect it from a nearby iPhone or iPad that may have taken the connection.</li>
          <li>Quit and reopen SoundShare after both pairs are connected.</li>
          <li>Charge both pairs and keep them close to the Mac during setup.</li>
        </ol>
        <p>
          If a device is visible but will not join the session, try two headphones with compatible
          audio formats. Bluetooth models can expose different sample rates, and the exact result
          depends on what macOS reports for each device.
        </p>
      </section>

      <section>
        <h2>Best results for a movie or long listening session</h2>
        <p>
          Start with charged headphones, keep the Mac and both listeners nearby, and reduce crowded
          2.4 GHz wireless traffic when possible. Similar headphone models often have more similar
          inherent latency, although SoundShare still compensates for clock drift between outputs.
        </p>
      </section>

      <section>
        <h2>If a pair disconnects—or the Mac output does not return</h2>
        <p>
          Stop the SoundShare session before reconnecting a dropped pair, confirm it is connected in
          Bluetooth settings, then reopen SoundShare and select both outputs again. SoundShare saves
          the previous system output and restores an available non-SoundShare output during cleanup.
        </p>
        <p>
          If the Mac remains on an unexpected output after a forced quit, reopen and quit SoundShare
          once so launch recovery can remove an interrupted session. You can then choose the intended
          speaker or headphone in the normal Sound menu. Include the Mac, macOS, app version, and both
          AirPods models in a <a href="/support/">support report</a> if the problem repeats.
        </p>
      </section>
    </SEOGuideLayout>
  )
}
