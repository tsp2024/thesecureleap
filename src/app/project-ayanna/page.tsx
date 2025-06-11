"use client";

import ReactYoutube from "@/components/react-youtube";
import { useEffect } from "react";

const ProjectAyanna = () => {
  useEffect(() => {
    document.title = "Project Ayanna | The Secureleap";
  }, []);

  return (
    <div className="min-h-screen p-3 px-5 py-24">
      <div className="min-h-screen">
        <div className="mt-12">
          <div className="flex flex-col items-center space-y-4">
            <h1 className="font-semibold text-2xl md:text-4xl lg:text-5xl text-center">
              Project Ayanna
            </h1>
            <div className="border border-gray-500 w-full max-w-2xl" />
          </div>
          <ReactYoutube />

          <div className="mt-10">
            <h1 className="font-normal text-center max-w-6xl mx-auto text-gray-800">
              The Project Ayanna is a social transformation joint initiative
              undertaken by Rauch Education and the Billion Steps Foundation.
              Project Ayanna is dedicated to empowering underprivileged children
              through education. This project aims to create lasting societal
              change by ensuring that vulnerable children in rural areas,
              marginalized sectors, particularly girls, have access to quality
              educational resources and support.
            </h1>
            <h1 className="font-normal text-center max-w-6xl mx-auto text-gray-800 mt-10">
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
      </div>
    </div>
  );
};

export default ProjectAyanna;
