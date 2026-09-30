import { ContentPageLayout } from "@/components/content-page-layout"
import { AppStoreBadge } from "@/components/app-store-badge"
import { createPageMetadata, SITE_URL } from "@/lib/site"

export const metadata = createPageMetadata({
  title: "About SoundShare and Its Developer",
  description:
    "Meet Nikolay Kalchev, the independent developer behind SoundShare, and learn how the Mac app handles shared audio, device limits, privacy, and support.",
  pathname: "/about/",
})

export default function AboutPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${SITE_URL}/about/#nikolay-kalchev`,
        name: "Nikolay Kalchev",
        url: `${SITE_URL}/about/`,
        jobTitle: "Independent software developer",
      },
      {
        "@type": "AboutPage",
        "@id": `${SITE_URL}/about/#page`,
        url: `${SITE_URL}/about/`,
        name: "About SoundShare and Its Developer",
        about: { "@id": `${SITE_URL}/about/#nikolay-kalchev` },
      },
    ],
  }

  return (
    <ContentPageLayout
      eyebrow="About"
      title="A focused Mac app for listening together"
      description="SoundShare is developed by Nikolay Kalchev as an independent macOS utility with one clear purpose: make one Mac useful to more than one listener."
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <section>
        <h2>Why SoundShare exists</h2>
        <p>
          Connecting two pairs of headphones to a Mac should feel like a listening feature, not an
          audio-engineering task. SoundShare puts the controls needed for that moment—device
          selection, individual volume, sync status, and available battery information—into a small
          menu-bar app.
        </p>
      </section>

      <section>
        <h2>Built around a narrow promise</h2>
        <p>
          SoundShare routes Mac output audio to multiple compatible devices. It is designed for
          films, music, podcasts, and browser media. It does not route microphones or try to replace
          professional studio software. Keeping the scope clear makes the app easier to understand,
          support, and improve.
        </p>
      </section>

      <section>
        <h2>Independent and transparent</h2>
        <p>
          Nikolay Kalchev is the developer and seller listed for SoundShare on the Mac App Store.
          The app requires macOS 14 or later, includes a 30-minute production trial, and offers
          lifetime access as a one-time in-app purchase. There is no SoundShare subscription or
          account to create.
        </p>
        <div className="not-prose mt-6">
          <AppStoreBadge size="medium" campaign="about" placement="about-story" />
        </div>
      </section>

      <section>
        <h2>How the app handles shared audio</h2>
        <p>
          The <a href="/developer-notes/coreaudio-shared-listening/">CoreAudio developer notes</a>{" "}
          explain how SoundShare selects a common sample rate, compensates for independent device
          clocks, preserves device-level controls, and restores the previous system output. The
          article is based on the SoundShare 2.2.1 source review from August 2026 rather than a generic
          product claim.
        </p>
      </section>

      <section>
        <h2>Questions or feedback</h2>
        <p>
          Device reports are especially useful because Bluetooth behavior varies by Mac, headphone,
          and firmware. Visit the <a href="/support/">support page</a> for troubleshooting and a direct
          way to contact the developer.
        </p>
      </section>
    </ContentPageLayout>
  )
}
