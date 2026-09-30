import { ContentPageLayout } from "@/components/content-page-layout"
import { APPLE_REFUND_GUIDE, APPLE_STANDARD_EULA, createPageMetadata } from "@/lib/site"

export const metadata = createPageMetadata({
  title: "SoundShare Terms and Purchases",
  description:
    "Find the Apple standard license agreement for SoundShare, plus information about the trial, lifetime purchase, restoring access, and Apple-managed refunds.",
  pathname: "/terms/",
})

export default function TermsPage() {
  return (
    <ContentPageLayout
      eyebrow="Terms"
      title="Terms & purchases"
      description="The license and purchase information for SoundShare, in one place."
    >
      <section>
        <h2>App license</h2>
        <p>
          SoundShare is distributed through the Mac App Store under
          {" "}<a href={APPLE_STANDARD_EULA}>Apple’s Standard Licensed Application End User License Agreement</a>.
          That agreement governs your use of the app. This page provides links and purchase
          information; it does not replace the license agreement.
        </p>
      </section>

      <section>
        <h2>Try it, then keep it</h2>
        <p>
          SoundShare includes one 30-minute trial. Lifetime access is a one-time in-app purchase
          for SoundShare. There is no subscription. Apple shows your local price and applicable
          taxes before you confirm a purchase.
        </p>
      </section>

      <section>
        <h2>Restore access or request a refund</h2>
        <p>
          Purchases use the Apple Account signed into the Mac App Store. To recover an existing
          purchase, choose Restore Purchases in SoundShare while using the same Apple Account.
          Apple handles billing and refund decisions. Visit
          {" "}<a href={APPLE_REFUND_GUIDE}>Apple’s refund instructions</a> to make a request.
        </p>
      </section>

      <section>
        <h2>Compatibility</h2>
        <p>
          SoundShare requires macOS 14 or later. Bluetooth performance depends on your Mac,
          headphones, firmware, and wireless conditions. Try your own devices during the trial;
          different headphones can have different latency.
        </p>
      </section>

      <section>
        <h2>Questions?</h2>
        <p>
          Visit <a href="/support/">SoundShare support</a> for help with purchases or the app.
          Our <a href="/privacy/">privacy policy</a> explains how data is handled.
        </p>
      </section>
    </ContentPageLayout>
  )
}
