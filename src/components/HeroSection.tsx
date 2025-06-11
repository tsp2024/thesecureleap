import { Globe } from "lucide-react";
import { HeroVideoSection } from "./HeroVideoSection";

export function HeroSection() {
  return (
    <section id="hero" className="w-full relative">
      <div className="relative flex flex-col items-center w-full px-6">
        <div className="absolute inset-0">
          <div className="absolute inset-0 -z-10 h-[600px] md:h-[800px] w-full [background:radial-gradient(125%_125%_at_50%_10%,var(--background)_40%,var(--secondary)_100%)] rounded-b-xl"></div>
        </div>
        <div className="relative z-10 pt-32 max-w-3xl mx-auto h-full w-full flex flex-col gap-10 items-center justify-center">
          <p className="border border-border bg-accent rounded-full text-sm h-8 px-3 flex items-center gap-2">
            <Globe className="size-4 text-primary" />
            Secure your path. Leap forward
          </p>
        </div>
      </div>
      <HeroVideoSection />
    </section>
  );
}
