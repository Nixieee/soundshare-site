import { AudioLines, BatteryMedium, PanelTop, Clapperboard, Music2, Plane, ArrowUpRight, Check } from "lucide-react"
import { ProductWalkthrough } from "@/components/product-walkthrough"
import { AppStoreBadge } from "@/components/app-store-badge"
import { US_LIFETIME_PRICE } from "@/lib/site"

const features = [
  { icon: AudioLines, title: "Same audio. Your own volume.", text: "Turn your headphones up. Let theirs stay low. Separate controls keep every listener comfortable." },
  { icon: PanelTop, title: "Right there in your menu bar.", text: "Choose your headphones, start listening, and get back to what’s playing. SoundShare stays close without getting in the way." },
  { icon: BatteryMedium, title: "A little less guessing.", text: "See battery levels when your headphones report them to macOS. Keep an eye on the charge before the next episode." },
]
const moments = [
  { icon: Clapperboard, number: "01", title: "Make it a movie night.", text: "Two pairs of headphones. One screen. Watch together without waking the rest of the house.", className: "moment-movie", detail: "THE NEXT EPISODE IS BETTER TOGETHER" },
  { icon: Plane, number: "02", title: "Take the moment with you.", text: "Turn a long journey into a shared film or podcast. Just your Mac and your favourite headphones.", className: "moment-travel", detail: "SOMEWHERE BETWEEN HERE AND THERE" },
  { icon: Music2, number: "03", title: "Share your next favourite.", text: "Press play on a new album, a familiar playlist, or a podcast you can’t stop talking about.", className: "moment-music", detail: "ONE MORE SONG BEFORE YOU GO" },
]

export function ProductProofSection() {
  return (
    <>
      <section id="product" className="home-section site-shell" aria-labelledby="product-title">
        <div className="section-heading"><p className="eyebrow">Small app. Thoughtful details.</p><h2 id="product-title">Share Mac audio.<br /><span>Keep your own comfort.</span></h2><p>SoundShare brings multiple Bluetooth headphones together around one Mac, with the controls you need and a place that feels familiar.</p></div>
        <div className="feature-grid">{features.map(({ icon: Icon, title, text }) => <div className="feature-item" key={title}><div className="feature-icon"><Icon size={23} aria-hidden="true" /></div><h3>{title}</h3><p>{text}</p></div>)}</div>
      </section>
      <ProductWalkthrough />
      <section className="home-section site-shell" aria-labelledby="moments-title">
        <div className="section-heading"><p className="eyebrow">For the moments worth sharing</p><h2 id="moments-title">A little closer.<br /><span>Wherever you listen.</span></h2></div>
        <div className="moments-grid">{moments.map(({ icon: Icon, ...item }) => <article key={item.title} className={`moment-card ${item.className}`}><div className="moment-art" aria-hidden="true"><span className="moment-number">{item.number}</span><div className="moment-circle"><Icon size={44} strokeWidth={1.25} /></div><span className="moment-detail">{item.detail}</span></div><div className="moment-copy"><h3>{item.title}</h3><p>{item.text}</p></div></article>)}</div>
      </section>
      <section id="pricing" className="home-section site-shell" aria-labelledby="pricing-title">
        <div className="pricing-panel"><div><p className="eyebrow">Yours for the long listen</p><h2 id="pricing-title">One small purchase.<br /><span>Many shared moments.</span></h2><p>Try SoundShare with your own headphones for 30 minutes. If it fits your setup, unlock lifetime access with a one-time in-app purchase.</p><ul className="pricing-includes">{["Individual volume controls", "No subscription", "No account to create"].map(item => <li key={item}><Check size={17} aria-hidden="true" />{item}</li>)}</ul></div><div className="price-card"><p className="eyebrow">Lifetime access</p><p className="price-amount">{US_LIFETIME_PRICE}<span>USD</span></p><p className="price-description">Pay once. Listen together.</p><AppStoreBadge campaign="homepage" placement="pricing" /><p className="price-note">Free download · 30-minute trial<br />US price. Your local price appears in the app.</p></div></div>
        <div className="compatibility-note"><p><strong>A note on your setup.</strong> Requires macOS 14+ and compatible headphones connected to your Mac. Bluetooth delay varies by device; SoundShare uses drift compensation to help outputs stay aligned. For music and video output, with battery levels where supported.</p><a href="/support/">Check compatibility <ArrowUpRight size={16} aria-hidden="true" /></a></div>
      </section>
    </>
  )
}
