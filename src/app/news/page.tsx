import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import db from "@/db/db";
import Link from "next/link";
import React from "react";

const page = async () => {
  const news = await db.news.findMany();

  if (!news.length)
    return (
      <p className="min-h-screen flex justify-center items-center animate-pulse">
        No News found.
      </p>
    );

  return (
    <div className="min-h-screen p-10">
      <div className="flex items-center space-x-4">
        <Link href="/">
          <img
            src="/main-logo-crop.png"
            className="h-[40px] w-[300px]"
            alt="Logo"
          />
        </Link>
        <div className="h-10 border-2 w-0 border-black" />
        <h1 className="text-2xl font-semibold">TSL News</h1>
      </div>

      <div className="flex flex-col px-5 py-7 my-10 lg:my-16 items-center justify-center bg-zinc-100 mx-12 lg:mx-32 rounded-2xl">
        <h1 className="text-zinc-400 my-3 uppercase">Welcome to TSLNews</h1>
        <p className="text-4xl max-w-3xl text-center font-semibold">
          Explore the Latest <span className="text-[#241e9d]">Headlines</span>{" "}
          and <span className="text-[#241e9d]">Stories</span> That Matter Most
        </p>
      </div>

      {news.map(({ description, id, image, link, source, title }) => (
        <div className="mx-16 lg:mx-32" key={id}>
          <div className="my-20 lg:my-24 flex flex-row space-x-10">
            <div className="">
              <img
                src={image}
                className="h-[300px] w-[500px] rounded-2xl"
                alt={title}
                draggable={false}
              />
            </div>
            <div className="mt-5">
              <h1 className="text-sm">
                Source :{" "}
                <span className="text-white bg-gray-600 p-1 rounded-md">
                  {source}
                </span>
              </h1>
              <h1 className="mb-2 mt-5 text-4xl max-w-3xl font-semibold capitalize">
                {title}
              </h1>
              <p className="font-normal max-w-3xl mb-10">{description}</p>
              <Link href={link} className="">
                <p className="text-red-600 hover:underline hover:underline-offset-4">
                  Read More
                </p>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default page;
