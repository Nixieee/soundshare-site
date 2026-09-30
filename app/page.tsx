import type { Metadata } from "next"

import { SimpleFeatures } from "@/components/simple-features"
import { HeroSection } from "@/components/hero-section"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { APP_STORE_URL, APP_VERSION, createPageMetadata, SITE_URL } from "@/lib/site"

export const metadata: Metadata = createPageMetadata({
  title: "Mac Audio Sharing for Two AirPods & Headphones",
  description: "Use SoundShare to listen together on two AirPods or multiple Bluetooth headphones from one Mac, with individual volume and no subscription.",
  pathname: "/",
})

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "SoundShare",
      url: `${SITE_URL}/`,
      founder: {
        "@type": "Person",
        name: "Nikolay Kalchev",
        url: `${SITE_URL}/about/`,
      },
      sameAs: [APP_STORE_URL],
      logo: `${SITE_URL}/apple-touch-icon.png`,
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      name: "SoundShare",
      url: `${SITE_URL}/`,
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
    {
      "@type": "SoftwareApplication",
      "@id": `${SITE_URL}/#app`,
      name: "SoundShare - Audio Sharing",
      applicationCategory: "UtilitiesApplication",
      operatingSystem: "macOS 14 or later",
      softwareVersion: APP_VERSION,
      url: `${SITE_URL}/`,
      downloadUrl: APP_STORE_URL,
      image: `${SITE_URL}/opengraph-image`,
      screenshot: `${SITE_URL}/images/product/soundshare-volumes-dark.webp`,
      description: "A macOS menu-bar app for sharing one Mac audio output across two AirPods or multiple Bluetooth headphones.",
      author: { "@id": `${SITE_URL}/#organization` },
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
        url: APP_STORE_URL,
        description: "Free download with a 30-minute trial; optional lifetime access is sold as an in-app purchase. Regional pricing may vary.",
      },
      featureList: [
        "Multiple Bluetooth audio outputs",
        "Individual device volume controls",
        "Bluetooth battery information when available",
        "macOS drift compensation",
        "Previous output restoration",
      ],
    },
  ],
}

export default function Home() {
  return (
    <div className="simple-home flex min-h-screen flex-col">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <SiteHeader />
      <main id="main-content" className="flex-1">
        <HeroSection />
        <SimpleFeatures />
      </main>
      <SiteFooter />
    </div>
  )
}
