import { AppStoreBadge } from "@/components/app-store-badge"

export function CTASection() {
  return (
    <section className="bg-primary text-primary-foreground py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20 [background:radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.22),transparent_40%),radial-gradient(circle_at_80%_0%,rgba(255,255,255,0.16),transparent_35%)]"></div>
      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Start sharing audio today
            </h2>
            <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Join Mac users who are bringing iOS audio sharing functionality to macOS. Share music, movies, and podcasts with friends seamlessly.
            </p>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
            <AppStoreBadge size="medium" />
          </div>
          <p className="text-sm text-primary-foreground/80">Available for macOS</p>
        </div>
      </div>
    </section>
  )
}
