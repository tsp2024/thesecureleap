import React from "react";

import db from "@/db/db";
import NewsForm from "./news-form";

const page = async ({ params: { id } }: { params: { id: string } }) => {
  const newsId = parseInt(id, 10);
  const news = await db.news.findUnique({ where: { id: newsId } });

  return (
    <div className="p-4">
      <div className="text-2xl font-semibold mb-6">
        <h1>Edit News</h1>
      </div>
      <NewsForm news={news} />
    </div>
  );
};

export default page;
