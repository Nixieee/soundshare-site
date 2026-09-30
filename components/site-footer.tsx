import { ThemeToggle } from "@/components/theme-toggle"

export function SiteFooter() {
  return (
    <footer className="simple-footer site-shell">
      <nav className="simple-footer-links" aria-label="Support and policies">
        <a href="/support/">Support</a>
        <a href="/privacy/">Privacy</a>
        <a href="/terms/">Terms</a>
        <ThemeToggle />
      </nav>
      <p>© {new Date().getFullYear()} Nikolay Kalchev</p>
    </footer>
  )
}
