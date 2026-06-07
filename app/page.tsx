import { SiteHeader } from "@/components/site-header"
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { PricingSection } from "@/components/pricing-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { FAQSection } from "@/components/faq-section"
import { CTASection } from "@/components/cta-section"
import { SiteFooter } from "@/components/site-footer"
import { GuideLinksSection } from "@/components/guide-links-section"

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      "@id": "https://soundshare.app/#app",
      name: "SoundShare",
      applicationCategory: "MultimediaApplication",
      operatingSystem: "macOS",
      url: "https://soundshare.app/",
      downloadUrl: "https://apps.apple.com/us/app/soundshare-audio-sharing/id6742040464",
      description:
        "SoundShare is a macOS app that helps users connect two AirPods or multiple Bluetooth headphones to one Mac with synchronized system-wide audio.",
      offers: {
        "@type": "Offer",
        availability: "https://schema.org/InStock",
        url: "https://apps.apple.com/us/app/soundshare-audio-sharing/id6742040464",
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://soundshare.app/#website",
      name: "SoundShare",
      url: "https://soundshare.app/",
      description:
        "SoundShare helps Mac users share audio with two AirPods or multiple Bluetooth headphones.",
      publisher: {
        "@id": "https://soundshare.app/#app",
      },
    },
    {
      "@type": "FAQPage",
      "@id": "https://soundshare.app/#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "How do I connect two AirPods to one MacBook?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Install SoundShare, pair both AirPods with your Mac, open SoundShare, select the connected devices, and enable audio sharing. SoundShare manages synchronized playback so both listeners hear the same Mac audio.",
          },
        },
        {
          "@type": "Question",
          name: "Can I use two Bluetooth headphones at the same time on Mac?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. SoundShare lets you play Mac audio through multiple Bluetooth headphones at the same time, including two AirPods, AirPods plus Beats, or other Bluetooth earbuds and speakers.",
          },
        },
        {
          "@type": "Question",
          name: "Does SoundShare work with Spotify, YouTube, Netflix, and Apple Music?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. SoundShare works system-wide with Mac audio, so shared listening works with music, video, podcast, browser, and media apps.",
          },
        },
      ],
    },
  ],
}

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <GuideLinksSection />
        <TestimonialsSection />
        <FAQSection />
        <CTASection />
      </main>
      <SiteFooter />
    </div>
  );
}
