import { createOGImage, ogImageContentType, ogImageSize } from "@/lib/og-image"

export const alt = "SoundShare support for Mac"
export const size = ogImageSize
export const contentType = ogImageContentType
export const dynamic = "force-static"

export default function Image() {
  return createOGImage({ title: "SoundShare support", eyebrow: "Troubleshooting and contact" })
}
