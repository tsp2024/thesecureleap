import { NextRequest, NextResponse } from "next/server";
import db from "@/db/db";

export const GET = async (
  req: NextRequest,
  { params }: { params: { id: string } }
) => {
  console.log("Received ID:", params.id);
  try {
    const article = await db.article.findUnique({
      where: { id: params.id },
    });

    if (!article || !article.pdfData) {
      return new NextResponse("Article or PDF not found", { status: 404 });
    }

    return new NextResponse(article.pdfData, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": "inline",
      },
    });
  } catch (error) {
    console.error("Error fetching article:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
};
