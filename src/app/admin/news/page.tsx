import React from "react";
import NewsForm from "./news-form";

const page = () => {
  return (
    <div className="p-4">
      <div className="text-2xl font-semibold mb-6">
        <h1>Add News</h1>
      </div>
      <NewsForm />
    </div>
  );
};

export default page;
