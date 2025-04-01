import { NextResponse } from "next/server";
import db from "@/db/db";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function GET() {
  const data = await db.stories.findMany({ orderBy: { id: "desc" } });
  return NextResponse.json(data);
}
