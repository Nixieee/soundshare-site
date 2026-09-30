import { ContentPageLayout } from "@/components/content-page-layout"
import { createPageMetadata } from "@/lib/site"

export const metadata = createPageMetadata({
  title: "SoundShare Privacy Policy",
  description:
    "How SoundShare handles local audio, Apple and RevenueCat purchases, website preferences, and support emails. No SoundShare account is required.",
  pathname: "/privacy/",
})

export default function PrivacyPage() {
  return (
    <ContentPageLayout
      eyebrow="Updated October 1, 2026"
      title="Privacy policy"
      description="SoundShare is designed without an account system or listening-history collection. This policy explains the limited services around the app and website."
    >
      <section>
        <h2>The SoundShare app</h2>
        <p>
          SoundShare does not collect your listening history, the names or contents of media you
          play, microphone audio, contacts, precise location, or advertising identifiers. The app
          does not require a SoundShare account. Device discovery and audio routing happen on the Mac.
        </p>
      </section>

      <section>
        <h2>Purchases and entitlement checks</h2>
        <p>
          Apple processes App Store downloads, payments, refunds, and Apple Account information.
          SoundShare connects to RevenueCat to check and restore lifetime access. RevenueCat
          processes an anonymous app-user identifier, purchase history, and technical information
          such as device type and operating system to provide purchase validation and entitlement
          checks. This includes transaction information supplied by the App Store. Your audio is not sent to
          RevenueCat, and SoundShare does not receive your payment-card details. See
          {" "}<a href="https://www.revenuecat.com/privacy/">RevenueCat’s privacy policy</a> and
          {" "}<a href="https://www.apple.com/legal/privacy/">Apple’s privacy policy</a> for their practices.
        </p>
      </section>

      <section>
        <h2>This website</h2>
        <p>
          The SoundShare website is a static site and does not set advertising or analytics cookies.
          It saves your light or dark appearance preference in your browser’s local storage.
          Hosting and network providers may process standard request information, such as your IP
          address, to deliver the site and maintain reliability and security. Outbound App Store
          links can include a campaign label and Apple provider token so Apple can attribute the visit.
        </p>
        {process.env.NEXT_PUBLIC_PLAUSIBLE_SCRIPT_URL ? (
          <p>
            This site uses Plausible for aggregate visit statistics. It receives the page URL,
            referrer, browser and device summary, and approximate location derived from the request.
            App Store click events include the landing page, button placement, and campaign label.
            These events do not include your audio or a SoundShare account identifier. See
            {" "}<a href="https://plausible.io/data-policy">Plausible’s data policy</a>.
          </p>
        ) : null}
      </section>

      <section>
        <h2>Support email</h2>
        <p>
          If you contact support, the developer receives the email address and information you choose
          to include. It is used to answer the request and investigate the reported issue. Do not send
          passwords, payment-card numbers, or unrelated personal information.
        </p>
      </section>

      <section>
        <h2>Children, retention, and changes</h2>
        <p>
          SoundShare is not directed at collecting information from children. Support messages are
          retained only as reasonably needed to resolve requests, maintain service records, and meet
          legal obligations. Material policy changes will be published on this page with a new
          effective date.
        </p>
      </section>

      <section>
        <h2>Contact</h2>
        <p>
          SoundShare is developed by Nikolay Kalchev. Questions about this policy or requests to
          access, correct, or delete information handled for support or purchases can be sent to
          {" "}<a href="mailto:nikolay.a.kalchev@gmail.com?subject=SoundShare%20Privacy">nikolay.a.kalchev@gmail.com</a>.
        </p>
      </section>
    </ContentPageLayout>
  )
}
