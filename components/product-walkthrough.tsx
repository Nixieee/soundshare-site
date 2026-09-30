"use client"

import { ThemedProductImage } from "@/components/themed-product-image"
import { useState } from "react"
import { ArrowRight } from "lucide-react"

const steps = [
  { title: "Choose your headphones.", text: "Connect your headphones in macOS Bluetooth settings, then select the listeners in SoundShare.", image: "soundshare-select", width: 768, height: 1332, alt: "SoundShare showing two selected headphones and the Start Listening button." },
  { title: "Start listening together.", text: "Click Start Listening and play something on your Mac. SoundShare sends the same audio to your selected headphones.", image: "soundshare-listening", width: 768, height: 1347, alt: "SoundShare with a shared listening session active and the Stop Listening button." },
  { title: "Find your happy volume.", text: "Open Individual Volumes to adjust each listener separately. When you stop, SoundShare returns to your previous available output.", image: "soundshare-volumes", width: 768, height: 1491, alt: "SoundShare with the individual volume controls expanded for two headphones." },
]

export function ProductWalkthrough() {
  const [selected, setSelected] = useState(0)
  return (
    <section id="how-it-works" className="walkthrough-section" aria-labelledby="walkthrough-title">
      <div className="site-shell walkthrough-grid">
        <div className="walkthrough-copy"><p className="eyebrow">From paired to playing</p><h2 id="walkthrough-title">Less setup.<br /><span>More play.</span></h2><p className="section-description">Three small steps. Then it’s just you, your headphones, and whatever you’re into.</p>
          <div className="walkthrough-controls" aria-label="Explore the SoundShare workflow">{steps.map((step, index) => <button key={step.title} type="button" className={`walkthrough-step ${selected === index ? "is-selected" : ""}`} aria-pressed={selected === index} aria-controls="walkthrough-preview" onClick={() => setSelected(index)}><span className="step-number">0{index + 1}</span><span className="step-copy"><strong>{step.title}</strong><span>{step.text}</span></span><ArrowRight size={18} className="step-arrow" aria-hidden="true" /></button>)}</div>
        </div>
        <figure id="walkthrough-preview" className="walkthrough-preview"><div className="walkthrough-screen">{steps.map((step, index) => <div key={step.image} className={`walkthrough-capture ${selected === index ? "is-selected" : ""}`} aria-hidden={selected !== index}><ThemedProductImage image={step.image} width={step.width} height={step.height} alt={step.alt} sizes="(min-width: 1024px) 280px, (min-width: 640px) 300px, 70vw" /></div>)}</div><figcaption><span>0{selected + 1} / 03</span> The SoundShare interface · sample devices</figcaption></figure>
      </div>
    </section>
  )
}
