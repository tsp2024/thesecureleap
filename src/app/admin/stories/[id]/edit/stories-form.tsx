"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Stories } from "@prisma/client";
import Image from "next/image";
import { useFormState, useFormStatus } from "react-dom";
import { updateStories } from "../../_action/stories";

const StoriesForm = ({ stories }: { stories?: Stories | null }) => {
  const [error, action] = useFormState(
    updateStories.bind(null, stories?.id || 0),
    {}
  );

  return (
    <form className="space-y-6" action={action}>
      <div className="space-y-2">
        <Label htmlFor="title">Title</Label>
        <Input
          type="text"
          id="title"
          name="title"
          defaultValue={stories?.title || ""}
          required
        />
        {error.title && <div className="text-destructive">{error.title}</div>}
      </div>
      <div className="space-y-2">
        <Label htmlFor="description">Description</Label>
        <Textarea
          id="description"
          name="description"
          defaultValue={stories?.description || ""}
          required
        />
        {error.description && (
          <div className="text-destructive">{error.description}</div>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="image">Image</Label>
        <Input
          type="file"
          id="image"
          name="image"
          accept="image/*"
          required={stories === null}
        />
        {stories?.image !== null && (
          <Image src={stories?.image ?? ""} alt="" height={400} width={400} />
        )}
        {error.image && <div className="text-destructive">{error.image}</div>}
      </div>

      <SubmitButton />
    </form>
  );
};

export default StoriesForm;

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending}>
      {pending ? "Submitting..." : "Submit"}
    </Button>
  );
}

//1:27
