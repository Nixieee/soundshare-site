"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function FAQSection() {
  return (
    <section id="faq" className="bg-accent/30 py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm font-medium liquid-blue-text">FAQ</div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight liquid-blue-text">
              Frequently asked questions
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Everything you need to know about audio sharing on macOS.
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-3xl space-y-8 py-12">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-left text-base font-medium">
                How many devices can I connect simultaneously?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                SoundShare allows you to connect multiple Bluetooth audio devices at once, similar to iOS audio sharing. The exact number depends on your Mac's Bluetooth capabilities and the devices you're using, but typically you can connect 2-4 devices simultaneously for a seamless shared listening experience.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-left text-base font-medium">
                What macOS versions are supported?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                SoundShare is designed for modern macOS versions. For the best experience and full compatibility with Bluetooth audio sharing features, we recommend using macOS Monterey (12.0) or later. The app leverages macOS's native Bluetooth stack to provide reliable multi-device audio streaming.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-left text-base font-medium">
                Will there be any audio delay or lag?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                SoundShare uses advanced audio synchronization technology to minimize delay and ensure all connected devices play audio in perfect sync. While there may be minimal latency inherent to Bluetooth technology, our app optimizes the audio stream to provide the best possible synchronized listening experience across all devices.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-left text-base font-medium">
                What types of Bluetooth devices are compatible?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                SoundShare works with most Bluetooth audio devices including headphones, earbuds, speakers, and soundbars. This includes popular brands like AirPods, Beats, Sony, Bose, and many others. As long as your device can connect to your Mac via Bluetooth, it should work with SoundShare's audio sharing feature.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger className="text-left text-base font-medium">
                Does this work with all audio apps on macOS?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Yes! SoundShare works system-wide with any audio source on your Mac. Whether you're listening to Spotify, Apple Music, watching YouTube, Netflix, or any other media player, the audio will be shared across all connected Bluetooth devices simultaneously with perfect synchronization.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
              <AccordionTrigger className="text-left text-base font-medium">
                How is my privacy protected?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                SoundShare respects your privacy. The app only manages Bluetooth audio connections and doesn't collect, store, or transmit any of your personal data or listening habits. All audio processing happens locally on your Mac, and we don't require any user accounts or track your usage. Your listening experience remains completely private.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  )
} 
