"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

const slides = [
  {
    url: "/sliderImage/Feature2.jpg",
    type: "image",
  },
  {
    url: "/sliderImage/image2.jpg",
    type: "image",
  },
  {
    url: "/sliderImage/project-ayanna.jpg",
    type: "image",
  },
  {
    url: "/sliderImage/image3.jpg",
    type: "image",
  },
  {
    url: "/sliderImage/video.mp4",
    type: "video",
  },
];

export default function Slider() {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false })
  );

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full max-w-[92rem] mx-auto mt-5 sm:mt-16 md:mt-20 mb-[-2rem] md:mb-[-15rem] relative rounded-md"
    >
      <CarouselContent className="rounded-md">
        {slides.map((slide, index) => (
          <CarouselItem key={index} className="flex justify-center relative">
            <div className="p-1 w-full">
              <Card className="w-full h-[80%] md:h-[60%]">
                <CardContent className="flex items-center justify-center w-full h-full p-0.5 dark:bg-white rounded-sm">
                  {slide.type === "image" ? (
                    <Image
                      src={slide.url}
                      alt={`Slide ${index + 1}`}
                      className="object-cover w-full h-full rounded-sm"
                      loading="lazy"
                      width={1920}
                      height={1080}
                    />
                  ) : (
                    <video
                      src={slide.url}
                      autoPlay
                      loop
                      muted
                      className="w-full h-full object-cover"
                    />
                  )}
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute top-1/3 -translate-y-1/2 left-4 bg-white bg-opacity-50 p-2 rounded-full">
        <ChevronLeft size={23} />
      </CarouselPrevious>
      <CarouselNext className="absolute top-1/3 -translate-y-1/2 right-4 bg-white bg-opacity-50 p-2 rounded-full">
        <ChevronRight size={23} />
      </CarouselNext>
    </Carousel>
  );
}
