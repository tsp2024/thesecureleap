import { SquareArrowOutUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

const TabsSection = () => {
  return (
    <div className="my-10 md:my-20 lg:my-28 flex items-center justify-center">
      <Tabs defaultValue="student" className="text-center">
        <TabsList className="h-14 p-2 bg-gray-700 text-white rounded-lg">
          <TabsTrigger
            value="student"
            className="w-28 uppercase md:w-52 lg:w-64"
          >
            Student
          </TabsTrigger>
          <TabsTrigger
            value="enterprise"
            className="w-28 uppercase md:w-52 lg:w-64"
          >
            Enterprise
          </TabsTrigger>
          <TabsTrigger
            value="professional"
            className="w-28 uppercase md:w-52 lg:w-64"
          >
            Professional
          </TabsTrigger>
        </TabsList>
        <TabsContent value="student">
          <div className="flex items-center justify-center px-4 sm:px-0">
            <div className="grid grid-cols-1 my-10 sm:grid-cols-2 gap-3 items-center max-w-6xl w-full">
              <div className="sm:pr-5">
                <h1 className="px-2 py-1 bg-green-400 text-gray-100 rounded-xl w-fit my-2 font-semibold text-lg">
                  Student
                </h1>
                <p className="text-justify">
                  Students who aspire to higher education abroad often encounter
                  numerous challenges and need help with their ‘Study Abroad’
                  journey. Without expert guidance, it becomes overwhelming for
                  students to map their journey and make the right choices while
                  selecting a university and career, which is a crucial
                  decision.
                </p>
                <p className="text-justify">
                  THESEECURELEAP provides students with technical support and
                  assists them in preparing for entrance exams to get admission
                  to the right university and post- university admission
                  support. With tailored advice on selecting the right course
                  and university, students can navigate the complexities of
                  international education. Our experienced consultants provide
                  insights into the application process, scholarship
                  opportunities and cultural adjustments, ensuring a seamless
                  transition.
                </p>
                <p className="text-justify mt-2">
                  Don&apos;t let uncertainty hold you back- rather internalize
                  it!
                </p>
                <Link
                  href="https://sway.cloud.microsoft/CzICy2rGO6zga4Hi?ref=Link&loc=play"
                  className="flex items-center mt-2 text-blue-800 underline underline-offset-4"
                  target="_blank"
                >
                  <h1>Student Plan</h1>
                  <SquareArrowOutUpRight className="ml-1 size-3" />
                </Link>
              </div>
              <div className="flex justify-center sm:justify-end">
                <Image
                  src="/international.jpg"
                  alt="International Education"
                  width={450}
                  height={400}
                  className="object-cover rounded-xl pointer-events-none"
                />
              </div>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="enterprise">
          <div className="flex items-center justify-center px-4 sm:px-0">
            <div className="grid grid-cols-1 my-10 sm:grid-cols-2 gap-5 items-center max-w-6xl w-full">
              <div className="flex justify-center sm:justify-start">
                <Image
                  src="/complex.jpg"
                  alt="International Education"
                  width={450}
                  height={400}
                  className="object-cover rounded-xl pointer-events-none"
                />
              </div>
              <div className="sm:pr-5">
                <h1 className="px-2 py-1 bg-green-400 text-gray-100 rounded-xl w-fit my-2 font-semibold text-lg">
                  Enterprises
                </h1>
                <p className="text-justify">
                  THESECURELEAP believes that quality education can empower
                  employees by enhancing their skills, confidence, and
                  decision-making abilities. It fosters a culture of continuous
                  learning, enabling employees to adapt to changing workplace
                  demands and technologies, ultimately leading to increased job
                  satisfaction and achieving the objectives of the organization.
                  Hence, The Secure Leap platform emphasizes personalized
                  training for the employees that aligns with the organization’s
                  goals and ensures that employees can grow both personally and
                  professionally through tailored courses and assessments.
                </p>
                <p className="text-justify mt-2">
                  Be successful by making your employees successful!
                </p>
                <Link
                  href="https://sway.cloud.microsoft/LlC2bZU02vLwGF5N?ref=Link"
                  className="flex items-center mt-2 text-blue-800 underline underline-offset-4"
                  target="_blank"
                >
                  <h1>Enterprise Plan</h1>
                  <SquareArrowOutUpRight className="ml-1 size-3" />
                </Link>
              </div>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="professional">
          <div className="flex items-center justify-center px-4 sm:px-0">
            <div className="grid grid-cols-1 my-10 sm:grid-cols-2 gap-3 items-center max-w-6xl w-full">
              <div className="sm:pr-5">
                {/* <h1 className="px-2 py-2 bg-green-400 text-gray-100 rounded-xl w-fit my-2 font-semibold">
                  Professional
                </h1> */}
                <p className="text-center font-semibold text-3xl animate-pulse">
                  Coming Soon...
                </p>
              </div>
              <div className="flex justify-center sm:justify-end">
                <Image
                  src="/roadMapping.jpg"
                  alt="International Education"
                  width={450}
                  height={400}
                  className="object-cover rounded-xl pointer-events-none"
                />
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default TabsSection;
