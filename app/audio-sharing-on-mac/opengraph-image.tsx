import { createOGImage, ogImageContentType, ogImageSize } from "@/lib/og-image"

export const alt = "Audio sharing on Mac with SoundShare"
export const size = ogImageSize
export const contentType = ogImageContentType
export const dynamic = "force-static"

export default function Image() {
  return createOGImage({ title: "Audio sharing on Mac", eyebrow: "SoundShare guide" })
}
