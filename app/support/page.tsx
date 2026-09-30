import { ContentPageLayout } from "@/components/content-page-layout"
import { US_LIFETIME_PRICE, APPLE_REFUND_GUIDE, APP_STORE_URL, APP_VERSION, createPageMetadata } from "@/lib/site"

export const metadata = createPageMetadata({
  title: "SoundShare Support",
  description:
    "Install SoundShare and troubleshoot missing headphones, incompatible formats, Bluetooth dropouts, trial access, purchases, restores, refunds, and bug reports.",
  pathname: "/support/",
})

const contactUrl =
  "mailto:nikolay.a.kalchev@gmail.com?subject=SoundShare%20Support&body=Mac%20model%3A%0AmacOS%20version%3A%0ASoundShare%20version%3A%0AHeadphone%20models%3A%0A%0AWhat%20happened%3A%0A"
const supportAppStoreUrl = new URL(APP_STORE_URL)
supportAppStoreUrl.searchParams.set("ct", "support-install")
supportAppStoreUrl.searchParams.set("mt", "12")
if (process.env.NEXT_PUBLIC_APP_STORE_PROVIDER_TOKEN) {
  supportAppStoreUrl.searchParams.set("pt", process.env.NEXT_PUBLIC_APP_STORE_PROVIDER_TOKEN)
}

export default function SupportPage() {
  return (
    <ContentPageLayout
      eyebrow="Support"
      title="Here to help."
      description="A few quick checks for smoother listening. Still stuck? Get in touch with the developer."
    >
      <section className="support-facts">
        <div><p className="text-sm text-muted-foreground">Current version</p><p className="mt-1 text-xl font-bold">{APP_VERSION}</p></div>
        <div><p className="text-sm text-muted-foreground">Requires</p><p className="mt-1 text-xl font-bold">macOS 14+</p></div>
        <div><p className="text-sm text-muted-foreground">Access</p><p className="mt-1 text-xl font-bold">30-minute trial</p></div>
      </section>

      <section className="support-contact">
        <h2 className="text-2xl font-bold">Contact the developer</h2>
        <p className="mt-3 leading-7 text-muted-foreground">
          Tell me what happened and which Mac and headphones you use.
        </p>
        <a className="download-button" href={contactUrl}>
          Email support
        </a>
      </section>

      <section>
        <h2>Install and open SoundShare</h2>
        <ol>
          <li><a href={supportAppStoreUrl.toString()}>Install SoundShare from the Mac App Store</a>.</li>
          <li>Open the app from Applications. SoundShare places its icon in the menu bar at the top of the screen.</li>
          <li>If you cannot see the icon, check any menu-bar management app you use, or quit and reopen SoundShare.</li>
          <li>Connect the intended headphones in System Settings → Bluetooth before selecting them in the app.</li>
        </ol>
      </section>

      <section>
        <h2>Trial and lifetime access</h2>
        <p>
          The production app includes one 30-minute trial. Lifetime access is a one-time in-app
          purchase—currently {US_LIFETIME_PRICE} in the US, with the local price shown by Apple before purchase.
          There is no SoundShare subscription or account.
        </p>
      </section>

      <section>
        <h2>A headphone does not appear</h2>
        <ol>
          <li>Open System Settings → Bluetooth and confirm the device says “Connected.”</li>
          <li>Disconnect it from nearby phones or tablets that may have taken the connection.</li>
          <li>Quit SoundShare, connect every intended output, and reopen the app.</li>
          <li>Test whether macOS can play normal audio through the device by itself.</li>
        </ol>
      </section>

      <section>
        <h2>“The selected devices do not support a compatible audio format”</h2>
        <p>
          The selected outputs must share an audio format that CoreAudio can use together. Stop any
          call or app using a headset microphone, reconnect the devices, and try again. If mixed
          models continue to fail, test a different combination or matching headphone models.
        </p>
      </section>

      <section>
        <h2>One device drops out or sounds unstable</h2>
        <ul>
          <li>Charge the headphones and keep them close to the Mac.</li>
          <li>Reduce unnecessary Bluetooth connections and crowded 2.4 GHz wireless traffic.</li>
          <li>Stop sharing before reconnecting a dropped device, then restart the session.</li>
          <li>Remember that different Bluetooth models can have different built-in latency.</li>
        </ul>
      </section>

      <section>
        <h2>Purchase or restore access</h2>
        <p>
          Purchases are tied to the Apple Account used in the Mac App Store. Open SoundShare&apos;s
          purchase screen and use Restore Purchases while signed into the same Apple Account. If a
          completed purchase is not recognized, include the purchase date and storefront country in
          your support email—never send a password or full payment-card number.
        </p>
        <p>
          Apple processes payment and refund requests. To request a refund, follow
          {" "}<a href={APPLE_REFUND_GUIDE} rel="noreferrer" target="_blank">Apple&apos;s refund instructions</a>;
          SoundShare cannot approve or promise a refund directly.
        </p>
      </section>

      <section>
        <h2>Include these details in a bug report</h2>
        <ul>
          <li>Mac model and year</li>
          <li>macOS version</li>
          <li>SoundShare version</li>
          <li>Exact headphone or speaker models</li>
          <li>The step where the problem appears and any on-screen error text</li>
        </ul>
      </section>

      <section>
        <h2>Listening guides</h2>
        <nav className="support-guides" aria-label="Listening guides">
          <a href="/connect-two-airpods-to-mac/">Connect two AirPods to your Mac <span aria-hidden="true">↗</span></a>
          <a href="/connect-multiple-bluetooth-headphones-to-mac/">Use multiple Bluetooth headphones <span aria-hidden="true">↗</span></a>
          <a href="/audio-sharing-on-mac/">Audio Sharing on Mac <span aria-hidden="true">↗</span></a>
          <a href="/mac-audio-output-multiple-devices/">Play Mac audio through multiple devices <span aria-hidden="true">↗</span></a>
          <a href="/soundshare-vs-multi-output-device/">SoundShare and Multi-Output Device <span aria-hidden="true">↗</span></a>
          <a href="/developer-notes/coreaudio-shared-listening/">How SoundShare works with CoreAudio <span aria-hidden="true">↗</span></a>
        </nav>
        <p>SoundShare is made by <a href="/about/">Nikolay Kalchev</a>, an independent Mac app developer.</p>
      </section>
    </ContentPageLayout>
  )
}
