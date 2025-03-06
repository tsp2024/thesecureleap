import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import db from "@/db/db";
import { MoreVertical } from "lucide-react";
import Link from "next/link";
import { DeleteDropDownItem } from "./news/newsActions";

const page = () => {
  return (
    <>
      <div className="mt-5">
        <div className="p-4 flex items-center gap-4">
          <div className="flex-1">
            <h1 className="font-semibold text-4xl">News</h1>
          </div>
          <div className="">
            <Button asChild>
              <Link href="/admin/news">Add News</Link>
            </Button>
          </div>
        </div>

        <NewsTable />
      </div>

      <div className="mt-10">
        <div className="p-4 flex items-center gap-4">
          <div className="flex-1">
            <h1 className="font-semibold text-4xl">Stories</h1>
          </div>
          <div className="">
            <Button asChild>
              <Link href="/admin/stories">Add Stories</Link>
            </Button>
          </div>
        </div>

        <StoriesTable />
      </div>
    </>
  );
};

export default page;

async function NewsTable() {
  const news = await db.news.findMany();

  if (!news.length) return <p className="ml-4 mt-1">No News found.</p>;

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Title</TableHead>
          <TableHead>Description</TableHead>
          <TableHead>Image</TableHead>
          <TableHead>Link</TableHead>
          <TableHead>Source</TableHead>
          <TableHead className="w-0">
            <span>Actions</span>
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {news.map((news) => (
          <TableRow key={news.id}>
            <TableCell>{news.title}</TableCell>
            <TableCell className="line-clamp-1">{news.description}</TableCell>
            <TableCell>{news.image}</TableCell>
            <TableCell>{news.link}</TableCell>
            <TableCell>{news.source}</TableCell>
            <TableCell>
              <DropdownMenu>
                <DropdownMenuTrigger className="hover:bg-zinc-200 rounded-full p-1">
                  <MoreVertical />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem asChild>
                    <Link href={`/admin/news/${news.id}/edit`}>Edit</Link>
                  </DropdownMenuItem>
                  <DeleteDropDownItem id={news.id} />
                </DropdownMenuContent>
              </DropdownMenu>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
async function StoriesTable() {
  const stories = await db.stories.findMany({ orderBy: { id: "asc" } });

  if (!stories.length) return <p className="ml-4 mt-1">No Stories found.</p>;

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Title</TableHead>
          <TableHead>Description</TableHead>
          <TableHead>Image</TableHead>
          <TableHead className="w-0">
            <span>Actions</span>
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {stories.map((story) => (
          <TableRow key={story.id}>
            <TableCell>{story.title}</TableCell>
            <TableCell className="line-clamp-2">{story.description}</TableCell>
            <TableCell>{story.image}</TableCell>

            <TableCell>
              <DropdownMenu>
                <DropdownMenuTrigger className="hover:bg-zinc-200 rounded-full p-1">
                  <MoreVertical />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem asChild>
                    <Link href={`/admin/stories/${story.id}/edit`}>Edit</Link>
                  </DropdownMenuItem>
                  <DeleteDropDownItem id={story.id} />
                </DropdownMenuContent>
              </DropdownMenu>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
