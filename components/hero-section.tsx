import { Download } from "lucide-react"
import { AppStoreLink } from "@/components/app-store-badge"
import { ProductPreview } from "@/components/product-preview"
import { US_LIFETIME_PRICE } from "@/lib/site"

export function HeroSection() {
  return (
    <section className="simple-hero" aria-labelledby="hero-title">
      <div className="site-shell">
        <h1 id="hero-title">Share audio.<br />Together on <span>Mac.</span></h1>
        <p className="simple-intro">Two AirPods or multiple headphones.<br className="mobile-break" /> Same audio. Your own volume.</p>
        <div className="simple-actions">
          <AppStoreLink className="download-button" campaign="homepage" placement="hero"><Download size={19} aria-hidden="true" />Download for Mac</AppStoreLink>
          <AppStoreLink className="purchase-button" campaign="homepage" placement="pricing" label="View SoundShare lifetime access on the Mac App Store">Lifetime access <span>{US_LIFETIME_PRICE}</span></AppStoreLink>
        </div>
        <p className="simple-fine-print">30-minute free trial · macOS 14+ · No subscription</p>
        <ProductPreview />
      </div>
    </section>
  )
}
