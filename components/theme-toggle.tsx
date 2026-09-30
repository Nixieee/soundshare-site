"use client"

import { Moon, Sun } from "lucide-react"

export function ThemeToggle() {
  function toggleTheme() {
    const root = document.documentElement
    const nextTheme = root.classList.contains("dark") ? "light" : "dark"
    root.classList.toggle("dark", nextTheme === "dark")
    root.style.colorScheme = nextTheme
    try { localStorage.setItem("soundshare-theme", nextTheme) } catch { /* The theme still works when storage is unavailable. */ }
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="relative grid h-11 w-11 place-items-center rounded-lg hover:bg-accent"
      aria-label="Toggle light and dark theme"
    >
      <Sun className="h-5 w-5 scale-100 transition-all dark:scale-0" aria-hidden="true" />
      <Moon className="absolute h-5 w-5 scale-0 transition-all dark:scale-100" aria-hidden="true" />
    </button>
  )
}
