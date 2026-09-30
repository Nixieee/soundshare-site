import { AppIcon } from "@/components/app-icon"
import { AppStoreLink } from "@/components/app-store-badge"

export function SiteHeader({ showStoreBadge = true }: { showStoreBadge?: boolean }) {
  return (
    <header className="simple-header">
      <a href="#main-content" className="skip-link">Skip to content</a>
      <div className="site-shell simple-header-inner">
        {/* Native page loads reset scroll reliably on the static host. */}
        {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
        <a href="/" className="simple-brand"><AppIcon size={34} priority /><span>SoundShare</span></a>
        <nav aria-label="Main navigation">
          <a href="/faq/">FAQs</a>
          {showStoreBadge ? <AppStoreLink className="header-download" campaign="site-header" placement="header">Download<span className="header-mac-label"> for Mac</span></AppStoreLink> : <a href="/support/">Support</a>}
        </nav>
      </div>
    </header>
  )
}
