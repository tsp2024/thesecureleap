"use server";

import db from "@/db/db";
import { z } from "zod";
import fs from "fs/promises";
import { notFound, redirect } from "next/navigation";

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

  await fs.mkdir("public/storiesImages", { recursive: true });
  const image = `/storiesImages/${crypto.randomUUID()}-${data.image.name}`;
  await fs.writeFile(
    `public${image}`,
    //@ts-ignore
    new Uint8Array(await data.image.arrayBuffer())
  );

  await db.stories.create({
    data: {
      title: data.title,
      description: data.description,
      image,
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

  //@ts-ignore
  if (data.image !== null && data.image.size > 0) {
    await fs.unlink(`public${stories.image}`).catch(() => {});

    //@ts-ignore
    image = `/storiesImages/${crypto.randomUUID()}-${data.image.name}`;
    await fs.writeFile(
      `public${image}`,
      //@ts-ignore
      new Uint8Array(await data.image.arrayBuffer())
    );
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

  await fs.unlink(`public${stories.image}`).catch(() => {});

  await db.stories.delete({ where: { id } });
}
