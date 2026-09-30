import { createOGImage, ogImageContentType, ogImageSize } from "@/lib/og-image"

export const alt = "SoundShare terms of use"
export const size = ogImageSize
export const contentType = ogImageContentType
export const dynamic = "force-static"

export default function Image() {
  return createOGImage({ title: "SoundShare terms of use", eyebrow: "Clear product terms" })
}
