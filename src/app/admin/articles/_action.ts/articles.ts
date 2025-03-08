"use server";

import db from "@/db/db";
import { notFound, redirect } from "next/navigation";
import { z } from "zod";

const articleSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters long"),
  author: z.string().min(3, "Author must be at least 3 characters long"),
  pdfFile: z
    .custom<File>((file) => file instanceof File, "PDF file is required")
    .refine(
      (file) => file.type === "application/pdf",
      "Only PDF files are allowed"
    )
    .refine((file) => file.size <= 5 * 1024 * 1024, "File must be under 5MB"),
});

export const createArticle = async (formData: FormData) => {
  try {
    const title = formData.get("title");
    const author = formData.get("author");
    const pdfFile = formData.get("pdfFile");

    const validatedData = articleSchema.parse({ title, author, pdfFile });

    const arrayBuffer = await validatedData.pdfFile.arrayBuffer();
    const pdfBuffer = Buffer.from(arrayBuffer);

    await db.article.create({
      data: {
        title: validatedData.title,
        author: validatedData.author,
        pdfData: pdfBuffer,
      },
    });

    redirect("/admin");
  } catch (error) {
    console.error("Validation or database error:", error);
    throw error;
  }
};

export async function deleteArticle(id: string) {
  const article = await db.article.findUnique({ where: { id } });

  if (!article) {
    throw new Error("Article not found");
  }

  await db.article.delete({ where: { id } });

  return { message: "Article deleted successfully" };
}
