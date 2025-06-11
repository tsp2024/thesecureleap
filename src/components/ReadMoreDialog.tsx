"use client";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useState } from "react";

export const ReadMoreDialog = ({
  title,
  content,
}: {
  title: string;
  content: string;
}) => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button className="text-blue-500 underline text-sm mt-1">
          Read more
        </button>
      </DialogTrigger>
      <DialogContent className="max-w-sm md:max-w-lg bg-white rounded-md">
        <h2 className="text-lg font-semibold">{title}</h2>
        <p className="mt-2 text-sm text-muted-foreground whitespace-pre-wrap">
          {content}
        </p>
      </DialogContent>
    </Dialog>
  );
};
