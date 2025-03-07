"use client";

import { useEffect, useState } from "react";
import Stories from "./Stories";

const StoriesSection = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

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

  return <Stories data={data} />;
};

export default StoriesSection;
