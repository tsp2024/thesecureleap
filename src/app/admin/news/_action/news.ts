"use server";

import db from "@/db/db";
import { z } from "zod";
import { put, del } from "@vercel/blob";
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

  const blob = await put(
    `newsImages/${crypto.randomUUID()}-${data.image.name}`,
    data.image,
    {
      access: "public",
      token: process.env.BLOB_READ_WRITE_TOKEN,
    }
  );

  await db.news.create({
    data: {
      title: data.title,
      description: data.description,
      source: data.source,
      link: data.link,
      image: blob.url,
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

  if (data.image !== undefined && data.image.size > 0) {
    try {
      await del(news.image);
    } catch (error) {
      console.error("Error deleting old image from Vercel Blob:", error);
    }

    const blob = await put(
      `newsImages/${crypto.randomUUID()}-${data.image.name}`,
      data.image,
      {
        access: "public",
      }
    );

    image = blob.url;
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
  const news = await db.news.findUnique({ where: { id } });
  if (!news) return notFound();

  try {
    await del(news.image);
  } catch (error) {
    console.error("Error deleting image from Vercel Blob:", error);
  }

  await db.news.delete({ where: { id } });

  redirect("/admin");
}
