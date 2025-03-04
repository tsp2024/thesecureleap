import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function constructMetadata({
  title = "The Secureleap",
  description = "Global education era with diverse opportunities and challenges.",
  image = "/fav/thumbnail.jpg",
  icons = "/fav/favicon.ico",
  noIndex = false,
}: {
  title?: string;
  description?: string;
  image?: string;
  icons?: string;
  noIndex?: boolean;
} = {}) {
  const metadataBase = new URL(process.env.BASE_URL || "http://localhost:3000");

  return {
    metadataBase,
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: new URL(image, metadataBase).toString(),
        },
      ],
    },
    icons: new URL(icons, metadataBase).toString(),
  };
}
