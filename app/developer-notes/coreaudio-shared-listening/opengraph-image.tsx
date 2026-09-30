import { createOGImage, ogImageContentType, ogImageSize } from "@/lib/og-image"

export const alt = "How SoundShare manages shared Mac audio with CoreAudio"
export const size = ogImageSize
export const contentType = ogImageContentType
export const dynamic = "force-static"

export default function Image() {
  return createOGImage({ title: "How SoundShare manages shared Mac audio", eyebrow: "Developer notes" })
}
