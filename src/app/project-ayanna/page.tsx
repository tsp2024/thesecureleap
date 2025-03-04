"use client";

import ReactYoutube from "@/components/react-youtube";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useEffect } from "react";
import { projectAyannaMembers } from "../../../constant/projectAyannaMembers";
import Image from "next/image";

const ProjectAyanna = () => {
  useEffect(() => {
    document.title = "Project Ayanna | The Secureleap";
  }, []);

  return (
    <div className="min-h-screen p-3 px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)] select-none">
      <div className="min-h-screen">
        <div className="flex items-center space-x-4 mb-20 mt-[-60px]">
          <Link href="/">
            <Image
              src="/main-logo-crop.png"
              draggable="false"
              alt="Logo"
              width={150}
              height={25}
            />
          </Link>
          <div className="h-8 border border-1 w-0 border-white" />
          <h1 className="text-xl font-semibold text-white">Project Ayanna</h1>
        </div>

        <div className="mt-12">
          <div className="flex flex-col items-center space-y-4">
            <h1 className="font-semibold text-2xl md:text-4xl lg:text-5xl text-center text-white">
              Project Ayanna
            </h1>
            <div className="border border-gray-500 w-full max-w-2xl" />
          </div>
          <ReactYoutube />

          <div className="mt-10">
            <h1 className="font-normal text-center max-w-6xl mx-auto text-gray-100">
              The Project Ayanna is a social transformation joint initiative
              undertaken by Rauch Education and the Billion Steps Foundation.
              Project Ayanna is dedicated to empowering underprivileged children
              through education. This project aims to create lasting societal
              change by ensuring that vulnerable children in rural areas,
              marginalized sectors, particularly girls, have access to quality
              educational resources and support.
            </h1>
            <h1 className="font-normal text-center max-w-6xl mx-auto text-gray-100 mt-10">
              Young students play a crucial role in the Project Ayanna. By
              applying their knowledge and skills to facilitate the holistic
              academic development of these children through hands-on
              involvement in various educational initiatives, they not only
              enhance their own learning experience but also contribute to the
              empowerment of marginalized communities. Project Ayanna is a
              win-win for such young students. Our young students who help these
              children develop a strong sense of societal empathy. This lifelong
              learning transforms them to be better leaders in any field of
              interest they choose. What will be the world if technology,
              policy, healthcare and other collective societal benefits are not
              accessed by certain sections of society? Our leaders will make
              sure they are!!
            </h1>
          </div>
        </div>

        <div className="mt-10">
          <div className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0">
            <h1 className="font-semibold text-2xl sm:text-4xl max-w-[250px] sm:max-w-[200px] text-center sm:text-left text-white">
              Our Star Contributers
            </h1>
            <div className="border border-gray-50 w-full sm:my-1" />
          </div>

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-7">
            {projectAyannaMembers.map(({ name, college, details }) => (
              <Card
                className={cn(
                  "border-none shadow-none relative bg-gradient-to-t from-[#000] to-[#1A1A1D] text-white rounded-2xl",
                  "h-[310px]"
                )}
                key={name}
              >
                <CardHeader className="flex flex-row items-center space-x-1">
                  <CardTitle className="font-medium capitalize text-lg mb-[-22px]">
                    {name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-400">
                    {details}
                  </CardDescription>
                  <CardFooter className="absolute bottom-[-5px] right-1">
                    <h1 className="text-sm">{college}</h1>
                  </CardFooter>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectAyanna;
