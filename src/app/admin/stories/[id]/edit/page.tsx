import React from "react";
import db from "@/db/db";
import StoriesForm from "./stories-form";

const page = async ({ params: { id } }: { params: { id: string } }) => {
  const storiesId = parseInt(id, 10);
  const stories = await db.stories.findUnique({ where: { id: storiesId } });

  return (
    <div className="p-4">
      <div className="text-2xl font-semibold mb-6">
        <h1>Edit Stories</h1>
      </div>
      <StoriesForm stories={stories} />
    </div>
  );
};

export default page;
