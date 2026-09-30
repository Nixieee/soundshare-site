import { createOGImage, ogImageContentType, ogImageSize } from "@/lib/og-image"

export const alt = "SoundShare — share Mac audio across multiple headphones"
export const size = ogImageSize
export const contentType = ogImageContentType
export const dynamic = "force-static"

export default function Image() {
  return createOGImage({ title: "Share audio. Together on Mac.", eyebrow: "SoundShare for Mac" })
}
