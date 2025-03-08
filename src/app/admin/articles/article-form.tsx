"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { useState } from "react";
import { createArticle } from "./_action.ts/articles";
import { useFormStatus } from "react-dom";
import { Button } from "@/components/ui/button";

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

type ArticleFormData = z.infer<typeof articleSchema>;

const ArticleForm = () => {
  const [loading, setLoading] = useState(false);

  const {
    register,
    trigger,
    setValue,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<ArticleFormData>({
    resolver: zodResolver(articleSchema),
  });

  const onSubmit = async (data: ArticleFormData) => {
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("title", data.title);
      formData.append("author", data.author);
      formData.append("pdfFile", data.pdfFile as unknown as Blob);

      await createArticle(formData);
    } catch (error) {
      setError("root", { message: "Failed to submit the form" });
    }
    setLoading(false);
  };

  return (
    <div>
      <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-2">
          <Label htmlFor="title">Title</Label>
          <Input type="text" id="title" {...register("title")} />
          {errors.title && (
            <p className="text-red-500">{errors.title.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="author">Author</Label>
          <Input type="text" id="author" {...register("author")} />
          {errors.author && (
            <p className="text-red-500">{errors.author.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="pdfFile">PDF File</Label>
          <Input
            type="file"
            id="pdfFile"
            accept="application/pdf"
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) {
                setValue("pdfFile", file);
                trigger("pdfFile");
              }
            }}
          />

          {errors.pdfFile && (
            <p className="text-red-500">{errors.pdfFile.message}</p>
          )}
        </div>

        {errors.root && <p className="text-red-500">{errors.root.message}</p>}

        <SubmitButton loading={loading} />
      </form>
    </div>
  );
};

export default ArticleForm;

function SubmitButton({ loading }: { loading: boolean }) {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending || loading}>
      {pending || loading ? "Submitting..." : "Submit"}
    </Button>
  );
}
