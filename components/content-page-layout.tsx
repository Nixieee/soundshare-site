
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"

interface ContentPageLayoutProps {
  eyebrow: string
  title: string
  description: string
  children: React.ReactNode
}

export function ContentPageLayout({ eyebrow, title, description, children }: ContentPageLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main id="main-content" className="simple-document site-shell flex-1">
        <header className="document-header">
          <p className="document-eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          <p className="document-intro">{description}</p>
        </header>
        <div className="document-content">{children}</div>
      </main>
      <SiteFooter />
    </div>
  )
}
