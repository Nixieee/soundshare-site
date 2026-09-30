import { ImageResponse } from "next/og"
import { readFile } from "node:fs/promises"
import { join } from "node:path"

interface OGImageOptions { title: string; eyebrow: string }
export const ogImageSize = { width: 1200, height: 630 }
export const ogImageContentType = "image/png"

export async function createOGImage({ title, eyebrow }: OGImageOptions) {
  const [iconData, appData] = await Promise.all([
    readFile(join(process.cwd(), "public/apple-touch-icon.png"), "base64"),
    readFile(join(process.cwd(), "public/images/product/soundshare-volumes-light.png"), "base64"),
  ])
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", padding: "58px", gap: "38px", background: "#f9f8f6", color: "#1d2428", fontFamily: "Arial, Helvetica, sans-serif" }}>
      <div style={{ display: "flex", flexDirection: "column", width: "680px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
          {/* ImageResponse requires an img element with embedded pixels. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img alt="" src={`data:image/png;base64,${iconData}`} width={48} height={48} style={{ borderRadius: "12px" }} />
          <span style={{ fontSize: "26px", fontWeight: 700 }}>SoundShare</span>
        </div>
        <div style={{ display: "flex", marginTop: "65px", color: "#8479ba", fontSize: "17px", letterSpacing: ".1em", textTransform: "uppercase" }}>{eyebrow}</div>
        <div style={{ display: "flex", marginTop: "24px", fontSize: title.length > 48 ? "53px" : "64px", lineHeight: 1.08, letterSpacing: "-.045em", fontWeight: 700 }}>{title}</div>
        <div style={{ display: "flex", marginTop: "30px", fontSize: "21px", lineHeight: 1.5, color: "#747078", maxWidth: "590px" }}>Two AirPods or multiple headphones. One Mac. Your own volume.</div>
        <div style={{ display: "flex", marginTop: "auto", fontSize: "16px", color: "#8479ba" }}>soundshare.app · Made for listening together</div>
      </div>
      <div style={{ display: "flex", flex: 1, alignItems: "center", justifyContent: "center", borderRadius: "26px", background: "linear-gradient(135deg, #e7dded, #d6d9e9)" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img alt="SoundShare app interface with separate headphone volume controls" src={`data:image/png;base64,${appData}`} width={244} height={474} style={{ borderRadius: "16px", boxShadow: "0 18px 32px #27213025" }} />
      </div>
    </div>, ogImageSize
  )
}
