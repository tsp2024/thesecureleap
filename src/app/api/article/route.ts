import { NextResponse } from "next/server";
import db from "@/db/db";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function GET() {
  try {
    const articles = await db.article.findMany();

    return NextResponse.json(articles);
  } catch (error) {
    console.error("Error fetching articles:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
