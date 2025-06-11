"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

const Page = () => {
  const [articles, setArticles] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const res = await fetch(`/api/article`, {
          cache: "no-store",
        });
        const data = await res.json();
        setArticles(data);
      } catch (error) {
        console.error("Error fetching articles:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  return (
    <div className="min-h-screen dark:text-black dark:bg-white max-w-[90rem] mx-auto py-10">
      <div className="bg-[#B8ECB6] h-[25vh] md:h-[30vh] lg:h-[50vh] rounded-md">
        <div className="flex items-center ml-4 md:ml-8 lg:ml-12 pt-4 md:pt-8 lg:pt-16 font-semibold"></div>

        <div className="ml-4 md:ml-8 lg:ml-12 mt-4 md:mt-8 lg:mt-16">
          <h1 className="font-extrabold text-2xl md:text-4xl lg:text-6xl uppercase">
            TSL Articles
          </h1>
        </div>

        <div className="ml-3 md:ml-8 lg:ml-12 md:space-x-5 mt-4 lg:mt-12 grid lg:grid-cols-3">
          {loading ? (
            <p className="text-lg animate-pulse">Loading articles...</p>
          ) : articles.length > 0 ? (
            articles.map((article) => (
              <Card
                key={article.id}
                className="dark:bg-white dark:text-black relative h-[18vh] md:h-[23vh] lg:h-[25vh] w-[80vw] md:w-[45vw] lg:w-[30vw] mt-4 rounded-lg"
              >
                <CardHeader className="p-3 md:p-5">
                  <CardTitle className="text-lg my-2 lg:my-2">
                    {article.title}
                  </CardTitle>
                  <CardDescription className="font-semibold">
                    {article.author}
                  </CardDescription>

                  <Button
                    className="w-auto px-4 py-2 rounded-xl absolute right-2 md:right-4 bottom-2 md:bottom-4 dark:bg-black dark:text-white"
                    asChild
                  >
                    <a
                      href={`/api/article/${article.id}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Read
                    </a>
                  </Button>
                </CardHeader>
              </Card>
            ))
          ) : (
            <p className="text-lg animate-pulse">No articles found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
