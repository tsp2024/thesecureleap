"use client";

import { useEffect, useState } from "react";
import { Feature } from "./ui/feature-slideshow";

const StoriesSection = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch("/api/stories", { cache: "no-store" });
        const newData = await response.json();
        setData(newData);
      } catch (error) {
        console.error("Error fetching data: ", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="text-center mt-10 text-lg animate-pulse">Loading...</div>
    );
  }

  return <Feature featureItems={data} />;
};

export default StoriesSection;
