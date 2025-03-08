"use client";

import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { useTransition } from "react";
import { useRouter } from "next/navigation";
import { deleteArticle } from "./_action.ts/articles";

interface Props {
  id: string;
  disabled?: boolean;
}

export function DeleteArticleAction({ id, disabled }: Props) {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  return (
    <DropdownMenuItem
      disabled={isPending || disabled}
      onClick={() => {
        if (window.confirm("Are you sure you want to delete ?")) {
          startTransition(async () => {
            await deleteArticle(id);
            router.refresh();
          });
        }
      }}
      className="text-red-500 hover:bg-red-500 hover:text-white"
    >
      Delete
    </DropdownMenuItem>
  );
}
