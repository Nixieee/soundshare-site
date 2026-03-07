import { Bluetooth, Users, Headphones } from "lucide-react"

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-gradient-to-b from-background to-secondary/30">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm font-medium liquid-blue-text">How It Works</div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight liquid-blue-text">
              Share audio in three simple steps
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Start sharing audio with multiple devices in minutes with our intuitive interface.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
          <div className="flex flex-col items-center space-y-4 rounded-lg border border-primary/20 bg-card p-6 text-center shadow-sm">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/20">
              <Bluetooth className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold liquid-blue-text">1. Connect Devices</h3>
            <p className="text-muted-foreground">
              Open SoundShare and pair your Bluetooth headphones, speakers, or earbuds to your Mac using the familiar macOS Bluetooth interface.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-4 rounded-lg border border-primary/20 bg-card p-6 text-center shadow-sm">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/20">
              <Users className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold liquid-blue-text">2. Enable Audio Sharing</h3>
            <p className="text-muted-foreground">
              Select multiple devices from the connected list and enable audio sharing. SoundShare automatically manages the connections and synchronization.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-4 rounded-lg border border-primary/20 bg-card p-6 text-center shadow-sm">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/20">
              <Headphones className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold liquid-blue-text">3. Enjoy Together</h3>
            <p className="text-muted-foreground">
              Start playing music, videos, or podcasts on your Mac. Everyone connected will hear perfectly synchronized audio in real-time.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
