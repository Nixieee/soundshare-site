import Link from "next/link"
import { BookOpen } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="border-t bg-accent/20">
      <div className="container px-4 py-12 md:px-6 md:py-16">
        <div className="flex flex-col items-center space-y-4">
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-bold text-xl liquid-blue-text">SoundShare</span>
          </Link>
          <p className="text-sm text-muted-foreground text-center">
            Share audio with multiple Bluetooth devices on macOS. Seamless, synchronized listening for everyone.
          </p>
        </div>
        <div className="mt-12 border-t border-border pt-6 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} SoundShare. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
