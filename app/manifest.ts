import type { MetadataRoute } from "next"

export const dynamic = "force-static"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "SoundShare — Audio Sharing for Mac",
    short_name: "SoundShare",
    description: "Share one Mac's audio across multiple headphones.",
    start_url: "/",
    display: "standalone",
    background_color: "#f9f8f6",
    theme_color: "#296252",
    icons: [
      { src: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { src: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  }
}
