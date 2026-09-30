export type FeatureIconName = "headphones" | "volume" | "battery" | "menu" | "mac" | "lifetime"

export function FeatureIcon({ name }: { name: FeatureIconName }) {
  return (
    <svg className={`feature-icon feature-icon-${name}`} width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {name === "headphones" && <>
        <path className="headphone-band" d="M3 14v-3a9 9 0 0 1 18 0v3" />
        <rect className="headphone-left" x="3" y="12" width="4" height="9" rx="2" />
        <rect className="headphone-right" x="17" y="12" width="4" height="9" rx="2" />
      </>}
      {name === "volume" && <>
        <path className="wave-bar wave-1" d="M3 10v4" />
        <path className="wave-bar wave-2" d="M7.5 6v12" />
        <path className="wave-bar wave-3" d="M12 3v18" />
        <path className="wave-bar wave-4" d="M16.5 8v8" />
        <path className="wave-bar wave-5" d="M21 10v4" />
      </>}
      {name === "battery" && <>
        <rect x="2" y="6" width="18" height="12" rx="2" />
        <path d="M23 10v4" />
        <path className="battery-cell battery-cell-1" d="M6 9v6" />
        <path className="battery-cell battery-cell-2" d="M10 9v6" />
        <path className="battery-cell battery-cell-3" d="M14 9v6" />
        <path className="battery-cell battery-cell-4" d="M17 9v6" />
      </>}
      {name === "menu" && <>
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 8h18" />
        <path className="menu-indicator" d="M17 5.5h1" />
        <g className="menu-popover"><rect x="11" y="10.5" width="7" height="7" rx="1" /><path d="M13 13h3m-3 2h2" /></g>
      </>}
      {name === "mac" && <>
        <g className="mac-screen"><rect x="2" y="3" width="20" height="14" rx="2" /><path className="mac-glint" d="m6 8 3-2m-3 5 6-4" /></g>
        <path d="M12 17v4m-4 0h8" />
      </>}
      {name === "lifetime" && <path className="lifetime-loop" d="M6 6c5 0 7 12 12 12a6 6 0 0 0 0-12C13 6 11 18 6 18A6 6 0 0 1 6 6Z" />}
    </svg>
  )
}
