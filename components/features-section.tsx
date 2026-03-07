import { Headphones, Users, Bluetooth, Radio } from "lucide-react"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function FeaturesSection() {
  return (
    <section id="features" className="bg-accent/30 py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm font-medium liquid-blue-text">Features</div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight liquid-blue-text">
              Everything you need for seamless audio sharing
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Share your audio with multiple Bluetooth devices simultaneously, just like on iOS, now available on macOS.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-2">
          <Card className="border-primary/20 bg-card/80 backdrop-blur-sm">
            <CardHeader className="pb-2">
              <Bluetooth className="h-6 w-6 text-primary mb-2" />
              <CardTitle className="liquid-blue-text">Multiple Device Support</CardTitle>
              <CardDescription>
                Connect multiple Bluetooth audio devices at once.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Connect up to multiple Bluetooth headphones, speakers, or earbuds simultaneously and share your audio with friends and family.
              </p>
            </CardContent>
          </Card>
          <Card className="border-primary/20 bg-card/80 backdrop-blur-sm">
            <CardHeader className="pb-2">
              <Radio className="h-6 w-6 text-primary mb-2" />
              <CardTitle className="liquid-blue-text">Perfect Synchronization</CardTitle>
              <CardDescription>
                Enjoy perfectly synced audio playback.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Advanced audio synchronization ensures everyone hears the same thing at the same time, without any delays or lag.
              </p>
            </CardContent>
          </Card>
          <Card className="border-primary/20 bg-card/80 backdrop-blur-sm">
            <CardHeader className="pb-2">
              <Users className="h-6 w-6 text-primary mb-2" />
              <CardTitle className="liquid-blue-text">Shared Listening Experience</CardTitle>
              <CardDescription>
                Watch movies and listen to music together.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Perfect for watching movies, listening to podcasts, or enjoying music with friends while maintaining individual audio streams.
              </p>
            </CardContent>
          </Card>
          <Card className="border-primary/20 bg-card/80 backdrop-blur-sm">
            <CardHeader className="pb-2">
              <Headphones className="h-6 w-6 text-primary mb-2" />
              <CardTitle className="liquid-blue-text">Native macOS Integration</CardTitle>
              <CardDescription>
                Seamlessly integrated with macOS.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Designed to match macOS Bluetooth settings, providing a familiar and intuitive interface that feels right at home on your Mac.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
