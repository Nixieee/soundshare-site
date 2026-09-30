import { createOGImage, ogImageContentType, ogImageSize } from "@/lib/og-image"

export const alt = "About SoundShare and developer Nikolay Kalchev"
export const size = ogImageSize
export const contentType = ogImageContentType
export const dynamic = "force-static"

export default function Image() {
  return createOGImage({ title: "About SoundShare", eyebrow: "Independent Mac app" })
}
