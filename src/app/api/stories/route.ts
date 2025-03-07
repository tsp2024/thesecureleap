import { NextResponse } from "next/server";
import db from "@/db/db";

export async function GET() {
  const data = await db.stories.findMany({ orderBy: { id: "asc" } });
  return NextResponse.json(data);
}
