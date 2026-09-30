import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Audio Sharing on Mac",
  description: "This page has moved to the SoundShare audio sharing guide.",
  alternates: { canonical: "/audio-sharing-on-mac/" },
  robots: { index: false, follow: true },
}

export default function LegacySoundSharePage() {
  return (
    <main id="main-content" className="flex min-h-screen items-center justify-center bg-background p-6 text-center">
      <meta httpEquiv="refresh" content="0;url=/audio-sharing-on-mac/" />
      <div className="max-w-lg space-y-4">
        <h1 className="text-3xl font-bold">This guide has moved</h1>
        <p className="text-muted-foreground">
          Continue to the complete SoundShare guide for sharing Mac audio with multiple headphones.
        </p>
        <Link className="inline-flex min-h-12 items-center rounded-xl bg-blue-600 px-6 font-semibold text-white" href="/audio-sharing-on-mac/">
          Open the audio sharing guide
        </Link>
      </div>
    </main>
  )
}
