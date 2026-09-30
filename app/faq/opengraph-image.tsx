import { createOGImage, ogImageContentType, ogImageSize } from "@/lib/og-image"
export const alt = "SoundShare — answers about sharing audio on Mac"
export const size = ogImageSize
export const contentType = ogImageContentType
export const dynamic = "force-static"
export default function Image() { return createOGImage({ title: "A few good questions.", eyebrow: "SoundShare for Mac" }) }
