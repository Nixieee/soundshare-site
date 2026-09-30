"use client"

import Image from "next/image"
import type { CSSProperties, ReactNode } from "react"
import { APP_STORE_URL } from "@/lib/site"

interface AppStoreLinkProps {
  children: ReactNode
  className?: string
  style?: CSSProperties
  campaign?: string
  placement?: string
  label?: string
}

export function AppStoreLink({ children, className, style, campaign = "website", placement = "unspecified", label = "Try SoundShare free on the Mac App Store" }: AppStoreLinkProps) {
  const url = new URL(APP_STORE_URL)
  const providerToken = process.env.NEXT_PUBLIC_APP_STORE_PROVIDER_TOKEN
  const placementToken = ({ header: "hdr", "mobile-menu": "menu", hero: "hero", "guide-hero": "top", "guide-footer": "bottom", "final-cta": "bottom", review: "review", footer: "footer" } as Record<string, string>)[placement] ?? placement.replace(/[^a-zA-Z0-9-]/g, "-").slice(0, 8)
  const campaignBase = campaign.replace(/[^a-zA-Z0-9-]/g, "-")
  const campaignToken = `${campaignBase.slice(0, 29 - placementToken.length)}-${placementToken}`
  url.searchParams.set("ct", campaignToken)
  url.searchParams.set("mt", "12")
  if (providerToken) url.searchParams.set("pt", providerToken)

  function trackClick() {
    const detail = { campaign: campaignToken, placement, path: window.location.pathname }
    window.dispatchEvent(new CustomEvent("app_store_click", { detail }))
    const analyticsWindow = window as typeof window & { plausible?: (event: string, options?: { props?: Record<string, string> }) => void }
    analyticsWindow.plausible?.("App Store Click", { props: detail })
  }

  return <a href={url.toString()} className={className} style={style} onClick={trackClick} data-campaign={campaignToken} data-placement={placement} aria-label={label}>{children}</a>
}

interface AppStoreBadgeProps {
  className?: string
  size?: "small" | "medium" | "large"
  priority?: boolean
  campaign?: string
  placement?: string
}

export function AppStoreBadge({ className = "", size = "medium", priority = false, campaign, placement }: AppStoreBadgeProps) {
  const { width, height } = { small: { width: 120, height: 40 }, medium: { width: 170, height: 57 }, large: { width: 200, height: 67 } }[size]
  return (
    <AppStoreLink className={`relative block min-h-11 rounded-lg ${className}`} style={{ width, minHeight: Math.max(height, 44) }} campaign={campaign} placement={placement}>
      <Image src="/app-store-badge.svg" alt="Download SoundShare on the Mac App Store" width={width} height={height} className="block h-auto w-full" loading={priority ? "eager" : "lazy"} unoptimized />
    </AppStoreLink>
  )
}
