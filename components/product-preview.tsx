"use client"

import Image from "next/image"
import { ThemedProductImage } from "@/components/themed-product-image"
import { useEffect, useRef, useState } from "react"
import { BatteryFull, Search, SlidersHorizontal, Wifi } from "lucide-react"

const stages = [
  { label: "Connect", image: "soundshare-select", height: 1332, alt: "Current SoundShare interface with AirPods Pro and Sony headphones selected for sharing Mac audio." },
  { label: "Listen", image: "soundshare-listening", height: 1347, alt: "Current SoundShare interface playing Mac audio through two connected headphones." },
  { label: "Adjust", image: "soundshare-volumes", height: 1491, alt: "Current SoundShare interface with individual volume controls in the AirPods Pro and Sony headphone cards." },
]

export function ProductPreview() {
  const [selected, setSelected] = useState(2)
  const [isOpen, setIsOpen] = useState(true)
  const previewRef = useRef<HTMLElement>(null)
  const menuButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    function dismissWithEscape(event: KeyboardEvent) {
      if (event.key === "Escape" && isOpen && previewRef.current?.contains(document.activeElement)) {
        setIsOpen(false)
        menuButtonRef.current?.focus()
      }
    }
    window.addEventListener("keydown", dismissWithEscape)
    return () => window.removeEventListener("keydown", dismissWithEscape)
  }, [isOpen])

  return (
    <figure className="simple-preview" ref={previewRef}>
      <div className="preview-desktop">
        <div className="preview-menubar">
          <div className="preview-menu-labels" aria-hidden="true">
            <span className="preview-apple"></span><strong>Finder</strong>
            <span className="preview-finder-menus">File <span>Edit</span><span>View</span><span>Go</span><span>Window</span><span>Help</span></span>
          </div>
          <button
            ref={menuButtonRef}
            type="button"
            className="preview-menu-button"
            aria-label="Toggle SoundShare app preview"
            aria-expanded={isOpen}
            aria-controls="app-preview"
            onClick={() => setIsOpen(open => !open)}
          >
            <Image className="preview-menu-icon" src="/images/product/soundshare-menu-icon.svg" width={26} height={26} alt="" />
          </button>
          <div className="preview-status" aria-hidden="true"><Wifi size={16} /><BatteryFull size={20} /><Search size={15} /><SlidersHorizontal size={15} /><span>Thu 9:41</span></div>
        </div>
        {isOpen && <button type="button" className="preview-dismiss" tabIndex={-1} aria-label="Close the app preview" onClick={() => setIsOpen(false)} />}
        <div id="app-preview" className={`preview-captures ${isOpen ? "is-open" : ""}`} aria-hidden={!isOpen}>
          {stages.map((stage, index) => (
            <div key={stage.image} className={`preview-capture ${selected === index ? "is-active" : ""}`} aria-hidden={selected !== index}>
              <ThemedProductImage image={stage.image} width={768} height={stage.height} alt={stage.alt} sizes="(min-width: 768px) 280px, 250px" loading={index === 2 ? "eager" : "lazy"} fetchPriority={index === 2 ? "high" : undefined} />
            </div>
          ))}
        </div>
      </div>
      <div className="preview-selector" aria-label="Explore the SoundShare interface">
        {stages.map((stage, index) => <button key={stage.label} type="button" aria-pressed={selected === index} aria-controls="app-preview" onClick={() => { setSelected(index); setIsOpen(true) }}>{stage.label}</button>)}
      </div>
      <figcaption>Try the menu-bar icon. <span>Sample devices shown.</span></figcaption>
    </figure>
  )
}
