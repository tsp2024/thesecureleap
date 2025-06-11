import { cn } from "@/lib/utils";
import { projectAyannaMembers } from "../../constant/projectAyannaMembers";
import { Marquee } from "./magicui/marquee";
import { SocialProofTestimonials, TestimonialCard } from "./TestimonialsProof";

export function Testimonials() {
  return (
    <section>
      <div className="border-b w-full h-full p-10 md:p-14"></div>
      <div className="mb-5 mt-10">
        <h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-center text-balance">
          Our Star Contributor
        </h2>
      </div>
      <div className="relative max-h-[700px] overflow-hidden max-w-[85rem] mx-auto my-10">
        <div className="gap-0 md:columns-2 xl:columns-3">
          {Array(Math.ceil(projectAyannaMembers.length / 3))
            .fill(0)
            .map((_, i) => (
              <Marquee
                vertical
                key={i}
                className={cn({
                  "[--duration:60s]": i === 1,
                  "[--duration:30s]": i === 2,
                  "[--duration:70s]": i === 3,
                })}
              >
                {projectAyannaMembers
                  .slice(i * 3, (i + 1) * 3)
                  .map((card, idx) => (
                    <TestimonialCard {...card} key={idx} />
                  ))}
              </Marquee>
            ))}
        </div>

        <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-gray-50 via-white/70 to-transparent dark:from-background dark:via-background/70 z-10" />

        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-gray-50 via-white/70 to-transparent dark:from-background dark:via-background/70 z-10" />
      </div>
      <div className="border-b w-full h-full my-10"></div>
    </section>
  );
}
