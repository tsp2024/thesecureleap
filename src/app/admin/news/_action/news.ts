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
  source: z.string().min(1),
  link: z.string().min(1),
  image: imageSchema.refine((file) => file.size > 0, "Required"),
});

export async function addNews(prevState: unknown, formData: FormData) {
  const result = addSchema.safeParse(Object.fromEntries(formData.entries()));

  if (result.success === false) {
    return result.error.formErrors.fieldErrors;
  }

  const data = result.data;

  await fs.mkdir("public/newsImages", { recursive: true });
  const image = `/newsImages/${crypto.randomUUID()}-${data.image.name}`;
  await fs.writeFile(
    `public${image}`,
    new Uint8Array(await data.image.arrayBuffer())
  );

  await db.news.create({
    data: {
      title: data.title,
      description: data.description,
      source: data.source,
      link: data.link,
      image,
    },
  });

  redirect("/admin");
}

const editSchema = addSchema.extend({
  image: imageSchema.optional(),
});

export async function updateNews(
  id: number,
  prevState: unknown,
  formData: FormData
) {
  const result = editSchema.safeParse(Object.fromEntries(formData.entries()));

  if (result.success === false) {
    return result.error.formErrors.fieldErrors;
  }

  const data = result.data;
  const news = await db.news.findUnique({ where: { id } });

  if (news === null) return notFound();

  let image = news.image;

  //@ts-ignore
  if (data.image !== null && data.image.size > 0) {
    await fs.unlink(`public${news.image}`);
    //@ts-ignore
    const image = `/newsImages/${crypto.randomUUID()}-${data.image.name}`;
    await fs.writeFile(
      `public${image}`,
      //@ts-ignore
      new Uint8Array(await data.image.arrayBuffer())
    );
  }
  await db.news.update({
    where: { id },
    data: {
      title: data.title,
      description: data.description,
      source: data.source,
      link: data.link,
      image,
    },
  });

  redirect("/admin");
}

export async function deleteNews(id: number) {
  const news = await db.news.delete({ where: { id } });
  if (news === null) return notFound();
}
