import { FAQSection } from "@/components/faq-section"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { createPageMetadata } from "@/lib/site"

export const metadata = createPageMetadata({ title: "SoundShare FAQ — Compatibility, Trial & Audio Sharing", description: "Answers about SoundShare for Mac: connect two AirPods, use separate volume, check Bluetooth compatibility, and understand the free trial and lifetime access.", pathname: "/faq/" })

export default function FAQPage() {
  return <><SiteHeader /><main id="main-content"><FAQSection /></main><SiteFooter /></>
}
