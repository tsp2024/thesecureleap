import React from "react";
import { contributingMembers, coreMembers } from "../../constant/teamMembers";
import { cn } from "@/lib/utils";
import Image from "next/image";

const TeamMembers = () => {
  return (
    <div id="teams">
      <div className="mt-28">
        <h1 className="font-semibold text-3xl text-center sm:text-5xl underline underline-offset-8 mb-2 sm:mb-7">
          OUR TEAM
        </h1>
      </div>

      <div className="">
        <h2 className="mx-2 sm:mx-10 font-semibold text-center sm:text-left text-2xl sm:text-4xl">
          Core Members
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-5">
          {coreMembers.map(({ detail, img, name, profession }, index) => (
            <div
              className="max-w-sm mx-auto bg-gray-200/70 rounded-lg shadow-lg overflow-visible relative mt-16 hover:scale-105 transition-all"
              key={name}
            >
              <div className="absolute inset-x-0 top-[-48px] flex justify-center">
                <Image
                  className={cn(
                    "w-24 h-24 rounded-full border-2 border-gray-300",
                    index === 2 ? "object-fill" : "object-cover"
                  )}
                  src={img}
                  alt="Profile"
                  loading="lazy"
                  draggable="false"
                  width={100}
                  height={100}
                />
              </div>
              <div className="pt-16 pb-6 px-6 mb-20">
                <p className="text-gray-700 mb-4">{detail}</p>
              </div>
              <div className="absolute bottom-2 left-4">
                <h3 className="text-lg font-bold text-gray-900 mt-36">
                  {name}
                </h3>
                <p className="text-gray-600">{profession}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16">
        <h2 className="mx-2 sm:mx-10 font-semibold text-center sm:text-left text-2xl sm:text-4xl">
          Contributing Members
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-5">
          {contributingMembers.map(({ detail, img, name, profession }) => (
            <div
              className="max-w-sm mx-auto bg-gray-200/70 rounded-lg shadow-lg overflow-visible relative mt-16 hover:scale-105 transition-all"
              key={name}
            >
              <div className="absolute inset-x-0 top-[-48px] flex justify-center">
                <Image
                  className="w-24 h-24 rounded-full border-2 border-gray-300 object-cover"
                  src={img}
                  alt="Profile"
                  loading="lazy"
                  draggable="false"
                  width={100}
                  height={100}
                />
              </div>
              <div className="pt-16 pb-6 px-6 mb-20">
                <p className="text-black mb-4 text-center">{detail}</p>
              </div>
              <div className="absolute bottom-2 left-4">
                <h3 className="text-lg font-bold text-gray-900 mt-36">
                  {name}
                </h3>
                <p className="text-gray-600">{profession}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamMembers;
