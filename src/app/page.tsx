import { AIMLabTestimonials } from "@/components/AIMLLabTestimonials";
import { CTASection } from "@/components/CTASection";
import StoriesSection from "@/components/Data";
import { HeroSection } from "@/components/HeroSection";
import { Testimonials } from "@/components/Testimonials";
export default function Home() {
  return (
    <div className="">
      <HeroSection />
      {/* <Popup /> */}

      {/* <h1 className="font-semibold text-3xl sm:text-4xl underline underline-offset-8">
          WHY THESECURELEAP?
        </h1>
        <p className="font-normal max-w-7xl leading-8">
          21st Century education ushered the new era of global education. Today,
          we try to explore our education opportunities across various countries
          like the US, Canada, European Countries, Australia, and New Zealand
          along with Singapore. These are interesting times, in which there is
          no dearth of the professional education avenues. However, while
          exploring these opportunities, it is critical to understand various
          challenges.
        </p> */}

      <AIMLabTestimonials />

      <div className="mb-10">
        <h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-center text-balance my-10">
          STORIES
        </h2>
        <StoriesSection />
      </div>

      <Testimonials />
      <CTASection />
    </div>
  );
}
