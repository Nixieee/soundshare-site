import { createOGImage, ogImageContentType, ogImageSize } from "@/lib/og-image"

export const alt = "SoundShare privacy policy"
export const size = ogImageSize
export const contentType = ogImageContentType
export const dynamic = "force-static"

export default function Image() {
  return createOGImage({ title: "SoundShare privacy", eyebrow: "No account or listening history" })
}
