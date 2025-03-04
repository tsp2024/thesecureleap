import React from "react";
import StoriesForm from "./stories-form";

const page = () => {
  return (
    <div className="p-4">
      <div className="text-2xl font-semibold mb-6">
        <h1>Add Stories</h1>
      </div>
      <StoriesForm />
    </div>
  );
};

export default page;
