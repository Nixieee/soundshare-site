import type { Metadata } from "next"
import Link from "next/link"

import { AppIcon } from "@/components/app-icon"

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The requested SoundShare page could not be found.",
  robots: { index: false, follow: true },
}

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[radial-gradient(circle_at_top,hsl(216_100%_94%),transparent_55%)] p-6 text-center dark:bg-[radial-gradient(circle_at_top,hsl(220_55%_18%),transparent_55%)]">
      <div className="max-w-xl space-y-6">
        <AppIcon size={72} className="mx-auto" priority />
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700 dark:text-blue-300">404 · Page not found</p>
        <h1 className="text-4xl font-bold tracking-tight liquid-blue-text md:text-6xl">This output went missing</h1>
        <p className="text-lg leading-8 text-muted-foreground">
          The page may have moved. Return to SoundShare or open the main guide for sharing Mac audio with multiple headphones.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link className="inline-flex min-h-12 items-center rounded-xl bg-blue-600 px-6 font-semibold text-white hover:bg-blue-700" href="/">
            Go to SoundShare
          </Link>
          <Link className="inline-flex min-h-12 items-center rounded-xl border border-border bg-background px-6 font-semibold hover:bg-accent" href="/audio-sharing-on-mac/">
            Read the main guide
          </Link>
        </div>
      </div>
    </main>
  )
}
