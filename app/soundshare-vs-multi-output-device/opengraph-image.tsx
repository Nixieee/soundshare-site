import { createOGImage, ogImageContentType, ogImageSize } from "@/lib/og-image"

export const alt = "SoundShare versus a manual macOS Multi-Output Device"
export const size = ogImageSize
export const contentType = ogImageContentType
export const dynamic = "force-static"

export default function Image() {
  return createOGImage({ title: "SoundShare vs Multi-Output Device", eyebrow: "Honest comparison" })
}
