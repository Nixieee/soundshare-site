import Link from "next/link"

const guides = [
  {
    title: "Sound share on Mac",
    href: "/sound-share",
  },
  {
    title: "Connect two AirPods to Mac",
    href: "/connect-two-airpods-to-mac",
  },
  {
    title: "Multiple Bluetooth headphones",
    href: "/connect-multiple-bluetooth-headphones-to-mac",
  },
  {
    title: "Audio Sharing on Mac",
    href: "/audio-sharing-on-mac",
  },
  {
    title: "Mac audio through multiple devices",
    href: "/mac-audio-output-multiple-devices",
  },
  {
    title: "SoundShare vs Multi-Output Device",
    href: "/soundshare-vs-multi-output-device",
  },
]

export function SiteFooter() {
  return (
    <footer className="border-t bg-accent/20">
      <div className="container px-4 py-12 md:px-6 md:py-16">
        <div className="grid gap-10 md:grid-cols-[1fr_1fr]">
          <div className="flex flex-col items-center space-y-4 md:items-start">
            <Link href="/" className="flex items-center space-x-2">
              <span className="font-bold text-xl liquid-blue-text">SoundShare</span>
            </Link>
            <p className="max-w-md text-sm text-muted-foreground text-center md:text-left">
              Share audio with multiple Bluetooth devices on macOS. Seamless, synchronized listening for everyone.
            </p>
          </div>
          <div className="space-y-3 text-center md:text-left">
            <h2 className="text-sm font-semibold liquid-blue-text">Guides</h2>
            <div className="grid gap-2 text-sm text-muted-foreground">
              {guides.map((guide) => (
                <Link key={guide.href} href={guide.href} className="transition-colors hover:text-primary">
                  {guide.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-border pt-6 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} SoundShare. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
