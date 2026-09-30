import type { Metadata } from "next"

export const SITE_URL = "https://soundshare.app"
export const APP_STORE_URL =
  "https://apps.apple.com/us/app/soundshare-audio-sharing/id6742040464"
export const APP_VERSION = "2.2.2"
export const MINIMUM_MACOS = "macOS 14 or later"
export const US_LIFETIME_PRICE = "$6.99"
export const CONTENT_UPDATED_ISO = "2026-09-30"
export const CONTENT_UPDATED_LABEL = "September 30, 2026"
export const LAST_VERIFIED_ISO = "2026-08-11"
export const LAST_VERIFIED_LABEL = "August 11, 2026"

export const primaryRoutes = [
  "/",
  "/connect-two-airpods-to-mac/",
  "/audio-sharing-on-mac/",
  "/connect-multiple-bluetooth-headphones-to-mac/",
  "/mac-audio-output-multiple-devices/",
  "/soundshare-vs-multi-output-device/",
  "/developer-notes/coreaudio-shared-listening/",
  "/faq/",
  "/support/",
  "/about/",
  "/privacy/",
  "/terms/",
] as const

export const APPLE_BLUETOOTH_GUIDE =
  "https://support.apple.com/guide/mac-help/blth1004/mac"
export const APPLE_AGGREGATE_SETTINGS_GUIDE =
  "https://support.apple.com/guide/audio-midi-setup/ams094c7edb4/mac"
export const APPLE_AUDIO_DEVICE_GUIDE =
  "https://support.apple.com/guide/audio-midi-setup/ams59f301fda/mac"
export const APPLE_REFUND_GUIDE = "https://support.apple.com/118223"
export const APPLE_STANDARD_EULA = "https://www.apple.com/legal/internet-services/itunes/dev/stdeula/"

export function absoluteUrl(pathname: string) {
  return new URL(pathname, SITE_URL).toString()
}

interface PageMetadataOptions {
  title: string
  description: string
  pathname: string
  image?: string
  noIndex?: boolean
}

export function createPageMetadata({
  title,
  description,
  pathname,
  image,
  noIndex = false,
}: PageMetadataOptions): Metadata {
  const url = absoluteUrl(pathname)
  const generatedImagePath = pathname === "/" ? "/opengraph-image" : `${pathname}opengraph-image`
  const imageUrl = absoluteUrl(image ?? generatedImagePath)

  return {
    title: { absolute: title.includes("SoundShare") ? title : `${title} | SoundShare` },
    description,
    alternates: { canonical: pathname },
    robots: noIndex ? { index: false, follow: true } : undefined,
    openGraph: {
      type: "website",
      url,
      siteName: "SoundShare",
      title: title.includes("SoundShare") ? title : `${title} | SoundShare`,
      description,
      images: [{ url: imageUrl, width: 1200, height: 630, alt: `${title} — SoundShare for Mac` }],
    },
    twitter: {
      card: "summary_large_image",
      title: title.includes("SoundShare") ? title : `${title} | SoundShare`,
      description,
      images: [imageUrl],
    },
  }
}
