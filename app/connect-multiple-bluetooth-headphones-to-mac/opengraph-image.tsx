import { createOGImage, ogImageContentType, ogImageSize } from "@/lib/og-image"

export const alt = "Connect multiple Bluetooth headphones to a Mac with SoundShare"
export const size = ogImageSize
export const contentType = ogImageContentType
export const dynamic = "force-static"

export default function Image() {
  return createOGImage({ title: "Multiple Bluetooth headphones on one Mac", eyebrow: "SoundShare guide" })
}
