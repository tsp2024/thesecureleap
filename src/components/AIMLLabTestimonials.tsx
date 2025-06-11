import Link from "next/link";
import { Button } from "./ui/button";

export function AIMLabTestimonials() {
  return (
    <section
      id="testimonials"
      className="flex flex-col items-center justify-center w-full"
    >
      <div className="border-b w-full h-full p-10 md:p-14">
        <div className="max-w-2xl mx-auto flex flex-col items-center justify-center gap-2">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-center text-balance">
            The &quot;AI Futures Institutional Partnership&quot; Program
          </h2>
          <p className="text-muted-foreground text-center text-balance font-medium mt-5">
            Artificial Intelligence (AI) and Machine Learning (ML) are
            transforming industries across the globe by driving efficiency,
            innovation, and smarter decision-making. Apart from being leveraged
            across the industries, these technologies are being leveraged to
            automate repetitive tasks, enhance customer experiences through
            intelligent personalization, optimize supply chains, detect fraud,
            support predictive maintenance and many more functionalities
          </p>

          <div className="mt-5">
            <Button
              className="rounded-3xl bg-purple-100 hover:bg-purple-50 border-purple-400"
              variant="outline"
            >
              <Link href="/aimllabs">Let's Go</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
