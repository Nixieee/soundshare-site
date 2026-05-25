import Link from "next/link"

import { Button } from "@/components/ui/button"
import { AppStoreBadge } from "@/components/app-store-badge"

export function HeroSection() {
  return (
    <section className="relative py-12 md:py-20 lg:py-28 overflow-hidden bg-gradient-to-b from-secondary/50 to-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col gap-8 lg:grid lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-2xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-6xl/none liquid-blue-text">
                Connect multiple AirPods to one Mac
              </h1>
              <p className="max-w-[600px] text-muted-foreground text-sm sm:text-base md:text-xl">
                SoundShare brings seamless audio sharing to macOS, letting you connect two AirPods or multiple Bluetooth headphones to one MacBook at once. Share music, podcasts, calls, or videos with friends and enjoy synchronized audio with ease.
              </p>
            </div>
            <div className="flex flex-row flex-wrap gap-3">
              <AppStoreBadge size="medium" priority />
              <Button size="lg" variant="outline" asChild className="border-primary/50 hover:bg-primary/10 hover:text-primary">
                <Link href="#features">
                  Learn More
                </Link>
              </Button>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-xs sm:text-sm">
              <div className="flex items-center gap-1">
                <div className="h-2 w-2 rounded-full bg-primary" />
                <span>macOS exclusive</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="h-2 w-2 rounded-full bg-primary" />
                <span>Perfectly synchronized audio</span>
              </div>
            </div>
          </div>
          <div className="relative mt-4 lg:mt-0 mx-auto lg:mx-0 max-w-[350px] lg:max-w-none">
            <div className="relative rounded-xl overflow-hidden">
              <picture>
                <source
                  type="image/webp"
                  srcSet="/soundshare-hero-800.webp 800w, /soundshare-hero-1200.webp 1200w, /soundshare-hero-1600.webp 1600w"
                  sizes="(max-width: 1023px) min(90vw, 350px), 600px"
                />
                <img
                  src="/soundshare-hero-1200.jpg"
                  alt="SoundShare app interface showing audio sharing on macOS"
                  width={1200}
                  height={780}
                  className="object-cover w-full h-auto"
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                />
              </picture>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
