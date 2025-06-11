import ConditionalLayout from "@/components/ConditionalLayout";
import SessionProviders from "@/components/SessionProvider";
import { constructMetadata } from "@/lib/utils";
import { Lexend } from "next/font/google";
import "./globals.css";

const inter = Lexend({ subsets: ["latin"], weight: ["400"] });

export const metadata = constructMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SessionProviders>
      <html lang="en" suppressHydrationWarning>
        <body
          className={`${inter.className} antialiased font-sans bg-background`}
        >
          <div className="mx-auto border-x relative bg-gray-50">
            <div className="block w-px h-full border-l border-border absolute top-0 left-6 z-10"></div>
            <div className="block w-px h-full border-r border-border absolute top-0 right-6 z-10"></div>
            <ConditionalLayout>{children}</ConditionalLayout>
          </div>
        </body>
      </html>
    </SessionProviders>
  );
}
