import { coreRelatedGuides, SEOGuideLayout } from "@/components/seo-guide-layout"
import {
  APPLE_AGGREGATE_SETTINGS_GUIDE,
  APPLE_AUDIO_DEVICE_GUIDE,
  createPageMetadata,
} from "@/lib/site"

export const metadata = createPageMetadata({
  title: "How SoundShare Manages Shared Mac Audio",
  description:
    "Engineering notes on SoundShare's CoreAudio routing, common sample-rate selection, drift compensation, volume controls, and session cleanup.",
  pathname: "/developer-notes/coreaudio-shared-listening/",
})

const faqs = [
  {
    question: "Does SoundShare stream or copy the media being played?",
    answer:
      "No. SoundShare manages the Mac's output devices. It does not inspect the movie, song, podcast, or browser media being played.",
  },
  {
    question: "Why must selected outputs share a sample rate?",
    answer:
      "CoreAudio needs a rate supported by every output in the shared route. SoundShare checks the devices and stops with a clear incompatible-format error when no common rate is available.",
  },
  {
    question: "What does drift compensation solve?",
    answer:
      "Independent audio devices have independent clocks. Drift compensation corrects their gradual timing difference, but it does not remove the fixed buffering delay built into Bluetooth hardware.",
  },
  {
    question: "What happens when a SoundShare session ends?",
    answer:
      "The app restores an available previous system output, removes its temporary shared route, and clears the saved recovery state.",
  },
]

export default function CoreAudioSharedListeningNotesPage() {
  return (
    <SEOGuideLayout
      eyebrow="Developer notes"
      title="How SoundShare manages shared Mac audio"
      description="SoundShare's small interface sits on top of several careful CoreAudio decisions. These notes explain the implementation boundaries, failure handling, and cleanup that make a repeat listening session feel simple."
      pathname="/developer-notes/coreaudio-shared-listening/"
      demoStage="volume"
      published="2026-08-11"
      faqs={faqs}
      sources={[
        {
          title: "Apple: Set up audio devices on Mac",
          href: APPLE_AUDIO_DEVICE_GUIDE,
          note: "Apple's reference for device formats, sample rates, and device-dependent software volume.",
        },
        {
          title: "Apple: Set aggregate-device sample rate and drift correction",
          href: APPLE_AGGREGATE_SETTINGS_GUIDE,
          note: "The CoreAudio timing constraints discussed in these implementation notes.",
        },
        {
          title: "Apple Developer: kAudioSubDeviceDriftCompensationKey",
          href: "https://developer.apple.com/documentation/coreaudio/kaudiosubdevicedriftcompensationkey",
          note: "The CoreAudio property SoundShare uses for non-clock devices in its temporary route.",
        },
      ]}
      verificationNote="Written from a source review of SoundShare 2.2.1 on August 11, 2026; checked on a MacBook Pro (M2 Pro) running macOS 26.5.2."
      relatedGuides={coreRelatedGuides}
    >
      <section>
        <h2>The product problem is repeated configuration</h2>
        <p>
          Shared listening is not only a question of whether macOS can address several outputs. The
          product problem is making a changing set of Bluetooth devices predictable every time two
          people sit down to listen. SoundShare therefore treats the shared route as a temporary
          session, not a permanent audio object the user has to maintain.
        </p>
        <p>
          The app first works from the output devices macOS currently exposes. A headphone that is
          merely remembered by Bluetooth is not enough: it must resolve to a live CoreAudio output
          before SoundShare can include it.
        </p>
      </section>

      <section>
        <h2>1. Resolve the exact outputs selected by the listener</h2>
        <p>
          Device names are useful in the interface but are not reliable identifiers. SoundShare
          resolves each selected item to a CoreAudio device identifier and rejects the session when
          a choice has disappeared or resolves twice. This prevents the app from quietly starting
          with fewer listeners than the user selected.
        </p>
      </section>

      <section>
        <h2>2. Find one sample rate every output can support</h2>
        <p>
          SoundShare reads the current clock device rate and the available rate ranges for every
          selected output. It prefers the current rate, then checks common 48 kHz and 44.1 kHz
          candidates. The first candidate supported by all outputs becomes the session rate.
        </p>
        <p>
          If there is no common value—or a device refuses the selected value—the app reports an
          incompatible-format problem instead of creating a partially working route. This is why a
          headset changing into a call-oriented microphone profile can affect a shared session.
        </p>
      </section>

      <section>
        <h2>3. Use one clock and compensate for the others</h2>
        <p>
          The first selected output becomes the clock source. SoundShare enables high-quality drift
          compensation for the remaining outputs. That corrects the gradual separation caused by
          independent device clocks. It is intentionally described as drift compensation—not
          “zero latency”—because each Bluetooth model can still add a different fixed buffer delay.
        </p>
      </section>

      <section>
        <h2>4. Preserve individual control where the device allows it</h2>
        <p>
          The shared route carries the same Mac output to every selected listener, while SoundShare
          addresses each device&apos;s software volume property separately. A volume slider only works
          where the device and macOS expose software volume control; the interface does not claim to
          override hardware that withholds it.
        </p>
        <p>
          Battery status follows the same rule. SoundShare displays left, right, case, or combined
          values when the Bluetooth device reports them and leaves the information absent when it
          does not.
        </p>
      </section>

      <section>
        <h2>5. Make cleanup part of correctness</h2>
        <p>
          Before switching the system output, SoundShare stores the previous output&apos;s stable UID.
          When listening stops, it looks for that device, falls back to another live non-SoundShare
          output when necessary, restores the system destination, destroys the temporary route, and
          clears recovery state.
        </p>
        <p>
          The same cleanup runs before a new session and after an interrupted one. This matters
          because a menu-bar utility should leave the Mac usable even if a headphone disconnects or
          the app closes between sessions.
        </p>
      </section>

      <section>
        <h2>What these decisions do not promise</h2>
        <ul>
          <li>They do not make every Bluetooth model expose a compatible format.</li>
          <li>They do not remove fixed codec and hardware latency.</li>
          <li>They do not aggregate microphones or create studio signal chains.</li>
          <li>They do not make unreported battery or volume properties available.</li>
        </ul>
        <p>
          Those boundaries are part of the product: SoundShare focuses on repeat shared listening,
          surfaces a useful error when the current devices cannot form a session, and restores the
          Mac&apos;s previous output when the session is over.
        </p>
      </section>
    </SEOGuideLayout>
  )
}
