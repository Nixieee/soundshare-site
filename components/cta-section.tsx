import { AppStoreBadge } from "@/components/app-store-badge"
import { AppIcon } from "@/components/app-icon"
import { APP_STORE_URL } from "@/lib/site"

export function CTASection({ campaign = "homepage", placement = "final-cta", showReview = false }: { campaign?: string; placement?: string; showReview?: boolean }) {
  return (
    <section className="final-cta" aria-labelledby="cta-title">
      <div className="site-shell">
        <AppIcon size={64} />
        <p className="eyebrow">SoundShare for Mac</p>
        <h2 id="cta-title">Good company.<br /><span>Great listening.</span></h2>
        <p>Make your next movie, playlist, or podcast a shared moment.</p>
        <AppStoreBadge campaign={campaign} placement={placement} />
        <p className="cta-fine-print">Free 30-minute trial · macOS 14+ · No subscription</p>
        {showReview ? <a className="customer-review" href={`${APP_STORE_URL}?see-all=reviews`}><span>“Works like a charm.”</span><span>App Store review · May 21, 2025 ↗</span></a> : null}
      </div>
    </section>
  )
}
