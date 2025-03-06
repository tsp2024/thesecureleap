import db from "@/db/db";
import Stories from "./Stories";

const StoriesSection = async () => {
  const data = await db.stories.findMany({ orderBy: { id: "asc" } });

  return <Stories data={data} />;
};

export default StoriesSection;
