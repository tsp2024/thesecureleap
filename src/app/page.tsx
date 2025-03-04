import StoriesSection from "@/components/Data";
import Footer from "@/components/Footer";
import StickyNavbar from "@/components/Navbar";
import Popup from "@/components/Popup";
import ProjectAyanna from "@/components/Project-Ayanna";
import Slider from "@/components/Slider";
import TabsSection from "@/components/TabsSection";
import TeamMembers from "@/components/TeamMembers";

export default function Home() {
  return (
    <div className="">
      <StickyNavbar />
      <Slider />
      <Popup />

      <div className="" id="secure">
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

        <div className="mb-20 lg:mt-[-310px]">
          <h1 className="font-bold text-3xl sm:text-6xl text-center sm:mb-4">
            VISION
          </h1>
          <p className="font-normal leading-8 text-lg md:text-2xl text-center mx-2 md:mx-10 lg:mx-16">
            To empower individuals with skills, knowledge and confidence to
            build a successful career, while fostering a more impartial and
            innovative world by accessing, transformative education
            opportunities.
          </p>
        </div>

        <div className="">
          <h1 className="font-bold text-3xl sm:text-6xl text-center sm:mb-4">
            MISSION
          </h1>
          <p className="font-normal leading-8 text-lg md:text-2xl text-center mx-2 md:mx-10 lg:mx-16">
            Our mission is to equip individuals with skills, strategies and
            techniques to enable them to build a foundation helpful in bridging
            the wide gap between education and confidence needed to thrive in
            the workforce.
          </p>
        </div>

        <TabsSection />
      </div>

      <div className="">
        <h1 className="font-semibold text-3xl text-center sm:text-5xl">
          Stories
        </h1>
        <StoriesSection />
      </div>

      <ProjectAyanna />
      <TeamMembers />

      <Footer />
    </div>
  );
}
