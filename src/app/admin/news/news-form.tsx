"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import React from "react";
import { addNews, updateNews } from "./_action/news";
import { useFormState, useFormStatus } from "react-dom";
import { news } from "@prisma/client";
import Image from "next/image";

const NewsForm = ({ news }: { news?: news | null }) => {
  const [error, action] = useFormState(addNews, {});

  return (
    <form className="space-y-6" action={action}>
      <div className="space-y-2">
        <Label htmlFor="title">Title</Label>
        <Input
          type="text"
          id="title"
          name="title"
          defaultValue={news?.title || ""}
          required
        />
        {error.title && <div className="text-destructive">{error.title}</div>}
      </div>
      <div className="space-y-2">
        <Label htmlFor="description">Description</Label>
        <Textarea
          id="description"
          name="description"
          defaultValue={news?.description || ""}
          required
        />
        {error.description && (
          <div className="text-destructive">{error.description}</div>
        )}
      </div>
      <div className="space-y-2">
        <Label htmlFor="link">Link</Label>
        <Input
          type="text"
          id="link"
          name="link"
          defaultValue={news?.link || ""}
          required
        />
        {error.link && <div className="text-destructive">{error.link}</div>}
      </div>
      <div className="space-y-2">
        <Label htmlFor="source">Source</Label>
        <Input
          type="text"
          id="source"
          name="source"
          defaultValue={news?.source || ""}
        />
        {error.source && <div className="text-destructive">{error.source}</div>}
      </div>
      <div className="space-y-2">
        <Label htmlFor="image">Image</Label>
        <Input
          type="file"
          id="image"
          name="image"
          accept="image/*"
          required={news === null}
        />
        {error.image && <div className="text-destructive">{error.image}</div>}
      </div>

      <SubmitButton />
    </form>
  );
};

export default NewsForm;

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending}>
      {pending ? "Submitting..." : "Submit"}
    </Button>
  );
}

//1:27
