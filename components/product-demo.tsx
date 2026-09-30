import { ThemedProductImage } from "@/components/themed-product-image"

export type ProductDemoStage = "discover" | "select" | "listen" | "volume"

const screenshots: Record<ProductDemoStage, { image: string; width: number; height: number; alt: string }> = {
  discover: {
    image: "soundshare-discover",
    width: 768,
    height: 1263,
    alt: "SoundShare interface showing a connected AirPods Pro pair, an available Bose headset, battery levels, and the Start Listening control.",
  },
  select: {
    image: "soundshare-select",
    width: 768,
    height: 1332,
    alt: "SoundShare interface showing AirPods Pro and Sony headphones selected, their battery levels, and the Start Listening button.",
  },
  listen: {
    image: "soundshare-listening",
    width: 768,
    height: 1347,
    alt: "SoundShare listening interface showing two connected headphones, battery levels, the main volume control, and Stop Listening.",
  },
  volume: {
    image: "soundshare-volumes",
    width: 768,
    height: 1491,
    alt: "SoundShare interface showing AirPods Pro and Sony headphones with individual volume controls and battery levels.",
  },
}

export function ProductDemo({ compact = false, stage = "volume" }: { compact?: boolean; stage?: ProductDemoStage }) {
  const screenshot = screenshots[stage]

  return (
    <div className={`relative isolate mx-auto w-full min-w-0 ${compact ? "max-w-[390px]" : "max-w-[520px]"}`}>
      <div className="absolute inset-8 -z-10 rounded-full bg-blue-500/25 blur-3xl dark:bg-blue-400/20" />
      <div className="overflow-hidden rounded-[2rem] border border-white/70 bg-gradient-to-br from-blue-100/75 via-white/50 to-indigo-100/75 p-2 shadow-[0_30px_80px_-30px_rgba(30,64,175,0.5)] dark:border-white/10 dark:from-slate-900 dark:via-blue-950/40 dark:to-slate-950">
        <ThemedProductImage
          image={screenshot.image}
          width={screenshot.width}
          height={screenshot.height}
          alt={screenshot.alt}
          className="h-auto w-full"
          sizes={compact ? "(min-width: 1280px) 360px, (min-width: 640px) 60vw, 88vw" : "(min-width: 1024px) 480px, 92vw"}
          loading={!compact && stage === "volume" ? "eager" : "lazy"}
        />
      </div>
      <span className="sr-only">
        Captured from SoundShare production views using sample-device data.
      </span>
    </div>
  )
}
