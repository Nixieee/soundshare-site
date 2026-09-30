import Image from "next/image"

interface AppIconProps {
  size?: number
  className?: string
  priority?: boolean
}

export function AppIcon({ size = 40, className = "", priority = false }: AppIconProps) {
  return (
    <Image
      src="/apple-touch-icon.png"
      alt=""
      width={size}
      height={size}
      loading={priority ? "eager" : "lazy"}
      className={`shrink-0 rounded-[22%] shadow-sm ${className}`}
      unoptimized
    />
  )
}
