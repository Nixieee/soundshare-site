import type { MetadataRoute } from "next"

import { CONTENT_UPDATED_ISO, primaryRoutes, SITE_URL } from "@/lib/site"

export const dynamic = "force-static"

export default function sitemap(): MetadataRoute.Sitemap {
  return primaryRoutes.map((pathname) => ({
    url: new URL(pathname, SITE_URL).toString(),
    lastModified: new Date(["/", "/faq/", "/support/", "/privacy/", "/terms/", "/about/"].includes(pathname) ? "2026-10-01" : CONTENT_UPDATED_ISO),
    changeFrequency: pathname === "/" ? "weekly" : "monthly",
    priority: pathname === "/" ? 1 : pathname.includes("airpods") || pathname === "/audio-sharing-on-mac/" ? 0.9 : 0.7,
  }))
}
