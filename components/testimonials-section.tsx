import Image from "next/image"

import {
  Card,
  CardContent,
} from "@/components/ui/card"

export function TestimonialsSection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-secondary/30 to-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm font-medium liquid-blue-text">Testimonials</div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight liquid-blue-text">
              Loved by Mac users everywhere
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              See what our users are saying about their experience with SoundShare.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
          <Card className="border-0 bg-accent/40">
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className="relative h-10 w-10 overflow-hidden rounded-full border border-primary/20">
                  <Image
                    src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop"
                    alt="Margaret T."
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold liquid-blue-text">Emily R.</p>
                  <p className="text-sm text-muted-foreground">Content Creator</p>
                </div>
              </div>
              <blockquote className="mt-4 border-l-2 border-primary/30 pl-4 italic text-muted-foreground">
                "Finally! I've been waiting for this feature on Mac. Now my partner and I can watch movies together with our own AirPods. The synchronization is perfect, and it's so much better than using a splitter or sharing a single pair of headphones."
              </blockquote>
            </CardContent>
          </Card>
          <Card className="border-0 bg-accent/40">
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className="relative h-10 w-10 overflow-hidden rounded-full border border-primary/20">
                  <Image
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop"
                    alt="David K."
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold liquid-blue-text">David K.</p>
                  <p className="text-sm text-muted-foreground">Music Producer</p>
                </div>
              </div>
              <blockquote className="mt-4 border-l-2 border-primary/30 pl-4 italic text-muted-foreground">
                "SoundShare is a game-changer for my workflow. I can share audio previews with clients using multiple headphones during review sessions. The audio stays perfectly in sync, making collaboration so much easier. Exactly what macOS was missing!"
              </blockquote>
            </CardContent>
          </Card>
          <Card className="border-0 bg-accent/40">
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className="relative h-10 w-10 overflow-hidden rounded-full border border-primary/20">
                  <Image
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop"
                    alt="Sarah L."
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold liquid-blue-text">Sarah L.</p>
                  <p className="text-sm text-muted-foreground">Student</p>
                </div>
              </div>
              <blockquote className="mt-4 border-l-2 border-primary/30 pl-4 italic text-muted-foreground">
                "Love this app! My roommate and I use it to watch shows together on my MacBook without disturbing others. The setup is super simple and it works with all our different Bluetooth headphones. Highly recommend for anyone sharing a Mac!"
              </blockquote>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
