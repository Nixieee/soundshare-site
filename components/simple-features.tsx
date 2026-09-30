import { Download } from "lucide-react"
import { AppStoreLink } from "@/components/app-store-badge"
import { FeatureIcon, type FeatureIconName } from "@/components/feature-icon"

const features = [
  { icon: "headphones", first: "Two AirPods.", second: "One Mac." },
  { icon: "volume", first: "Separate", second: "volume." },
  { icon: "battery", first: "Battery", second: "at a glance.*" },
  { icon: "menu", first: "In your", second: "menu bar." },
  { icon: "mac", first: "Made for", second: "macOS." },
  { icon: "lifetime", first: "Pay once.", second: "Keep listening." },
] satisfies { icon: FeatureIconName; first: string; second: string }[]

export function SimpleFeatures() {
  return (
    <section className="simple-features site-shell" aria-label="SoundShare features">
      <div className="simple-feature-grid">{features.map(({ icon, first, second }) => <div className="simple-feature" key={first}><FeatureIcon name={icon} /><h2>{first}<br />{second}</h2></div>)}</div>
      <p className="feature-footnote">*When reported by your headphones. Bluetooth delay varies by device.</p>
      <AppStoreLink className="download-button" campaign="homepage" placement="final-cta"><Download size={19} aria-hidden="true" />Download for Mac</AppStoreLink>
    </section>
  )
}
