import { createOGImage, ogImageContentType, ogImageSize } from "@/lib/og-image"

export const alt = "Play Mac audio through multiple devices with SoundShare"
export const size = ogImageSize
export const contentType = ogImageContentType
export const dynamic = "force-static"

export default function Image() {
  return createOGImage({ title: "Mac audio through multiple devices", eyebrow: "SoundShare guide" })
}
