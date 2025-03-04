"use client";

import React, { useState } from "react";
import Stories from "./Stories";
import Image from "next/image";

const ProjectAyannaData = [
  {
    image: "/events/projectAyanna/image1.jpg",
  },
  {
    image: "/events/projectAyanna/image2.jpg",
  },
  {
    image: "/events/projectAyanna/image3.jpg",
  },
  {
    image: "/events/projectAyanna/image4.jpg",
  },
  ,
  {
    image: "/events/projectAyanna/image5.jpg",
  },
  {
    image: "/events/projectAyanna/image6.jpg",
  },
];

const ProjectAyanna = () => {
  const [activeIndex, setActiveIndex] = useState(2);

  return (
    <div>
      <div className="mb-6 md:mb-12 mt-10 md:mt-28">
        <h1 className="font-semibold text-3xl text-center sm:text-5xl">
          Project Ayanna
        </h1>
      </div>

      <div className="">
        <div className="grid place-items-center mt-6 mb-12 w-full overflow-hidden">
          <div className="flex lg:flex-row flex-col gap-4 max-w-[90rem] sm:max-w-7xl w-full mx-auto px-4 overflow-hidden">
            {ProjectAyannaData.map((item: any, index: number) => (
              <div
                key={index}
                className={`relative overflow-hidden rounded-lg transition-all duration-500 ease-[cubic-bezier(0.05,0.61,0.41,0.95)] ${
                  activeIndex === index
                    ? "w-full lg:w-full lg:h-96 h-[500px] sm:h-60 shadow-md drop-shadow-md"
                    : "lg:w-16 w-full lg:h-96 h-14 sm:h-16 shadow-md"
                } cursor-pointer`}
                onClick={() => {
                  setTimeout(() => setActiveIndex(index), 50);
                }}
              >
                <Image
                  src={item.image}
                  alt={item.title || ""}
                  title={item.title || ""}
                  className="object-cover w-full h-full transition-transform duration-500 ease-[cubic-bezier(0.05,0.61,0.41,0.95)]"
                  loading="lazy"
                  width={1920}
                  height={1080}
                />
                {item.title && (
                  <span
                    className={`absolute left-2 top-2 bg-black text-white text-sm md:text-md px-2 py-1 rounded-md md:rounded-full transition-transform duration-500 ease-[cubic-bezier(0.05,0.61,0.41,0.95)] ${
                      activeIndex === index ? "scale-100 delay-300" : "scale-0"
                    }`}
                  >
                    {item.title}
                  </span>
                )}
                {item.data && (
                  <span
                    className={`absolute left-2 top-14 mt-0 md:mt-2 backdrop-blur-md rounded-md text-white text-sm lg:text-lg p-2 transition-transform duration-500 ease-[cubic-bezier(0.05,0.61,0.41,0.95)] ${
                      activeIndex === index ? "scale-100 delay-300" : "scale-0"
                    }`}
                  >
                    {item.data}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectAyanna;
