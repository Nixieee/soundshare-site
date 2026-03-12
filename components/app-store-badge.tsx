import Image from "next/image"
import Link from "next/link"

interface AppStoreBadgeProps {
  className?: string
  size?: "small" | "medium" | "large"
  priority?: boolean
}

export function AppStoreBadge({ className, size = "medium", priority = false }: AppStoreBadgeProps) {
  const dimensions = {
    small: { width: 120, height: 40 },
    medium: { width: 170, height: 50 },
    large: { width: 200, height: 60 }
  }
  
  const { width, height } = dimensions[size]
  
  return (
    <Link
      href="https://apps.apple.com/us/app/soundshare-audio-sharing/id6742040464"
      className={`relative block ${className}`}
      style={{ width, height }}
    >
      <Image
        src="/app-store-badge.svg"
        alt="Download on the App Store"
        width={width}
        height={height}
        className="h-full w-full object-contain"
        priority={priority}
        unoptimized
      />
    </Link>
  )
} 
