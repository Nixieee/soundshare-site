import { createOGImage, ogImageContentType, ogImageSize } from "@/lib/og-image"

export const alt = "How to connect two AirPods to one Mac with SoundShare"
export const size = ogImageSize
export const contentType = ogImageContentType
export const dynamic = "force-static"

export default function Image() {
  return createOGImage({ title: "Connect two AirPods to one Mac", eyebrow: "SoundShare guide" })
}
