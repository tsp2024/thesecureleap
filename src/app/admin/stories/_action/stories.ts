"use server";

import db from "@/db/db";
import { z } from "zod";
import { notFound, redirect } from "next/navigation";
import { del, put } from "@vercel/blob";

const fileSchema = z.instanceof(File, { message: "Required" });
const imageSchema = fileSchema.refine(
  (file) => file.size === 0 || file.type.startsWith("image/")
);

const addSchema = z.object({
  title: z.string().min(3),
  description: z.string().min(10),
  image: imageSchema.refine((file) => file.size > 0, "Required"),
});

export async function addStories(prevState: unknown, formData: FormData) {
  const result = addSchema.safeParse(Object.fromEntries(formData.entries()));

  if (result.success === false) {
    return result.error.formErrors.fieldErrors;
  }

  const data = result.data;

  const blob = await put(
    `stories/${crypto.randomUUID()}-${data.image.name}`,
    data.image,
    {
      access: "public",
      token: process.env.BLOB_READ_WRITE_TOKEN,
    }
  );

  await db.stories.create({
    data: {
      title: data.title,
      description: data.description,
      image: blob.url,
    },
  });

  redirect("/admin");
}

const editSchema = addSchema.extend({
  image: imageSchema.optional(),
});

export async function updateStories(
  id: number,
  prevState: unknown,
  formData: FormData
) {
  const result = editSchema.safeParse(Object.fromEntries(formData.entries()));

  if (result.success === false) {
    return result.error.formErrors.fieldErrors;
  }

  const data = result.data;
  const stories = await db.stories.findUnique({ where: { id } });

  if (stories === null) return notFound();

  let image = stories.image;

  if (data.image && data.image.size > 0) {
    const blob = await put(
      `stories/${crypto.randomUUID()}-${data.image.name}`,
      data.image,
      {
        access: "public",
      }
    );
    image = blob.url;
  }

  await db.stories.update({
    where: { id },
    data: {
      title: data.title,
      description: data.description,
      image,
    },
  });

  redirect("/admin");
}

export async function deleteStories(id: number) {
  const stories = await db.stories.findUnique({ where: { id } });

  if (!stories) return notFound();

  try {
    await del(stories.image);
  } catch (error) {
    console.error("Error deleting image from Vercel Blob:", error);
  }

  await db.stories.delete({ where: { id } });
}
