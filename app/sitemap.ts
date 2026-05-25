import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()
  const routes = [
    { path: '/', priority: 1 },
    { path: '/connect-two-airpods-to-mac/', priority: 0.95 },
    { path: '/connect-multiple-bluetooth-headphones-to-mac/', priority: 0.9 },
    { path: '/audio-sharing-on-mac/', priority: 0.9 },
    { path: '/mac-audio-output-multiple-devices/', priority: 0.85 },
    { path: '/soundshare-vs-multi-output-device/', priority: 0.8 },
  ]

  return routes.map((route) => ({
    url: `https://soundshare.app${route.path}`,
    lastModified,
    changeFrequency: 'weekly',
    priority: route.priority,
  }))
}
