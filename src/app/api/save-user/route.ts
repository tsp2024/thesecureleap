import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  try {
    const { email, phone } = await req.json();

    if (!email || !phone) {
      return NextResponse.json(
        { error: "Email and phone are required" },
        { status: 400 }
      );
    }

    let user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      user = await prisma.user.create({
        data: {
          email,
          phone,
          membership: "FREE",
        },
      });
    } else {
      if (!user.phone) {
        await prisma.user.update({
          where: { email },
          data: { phone },
        });
      }
    }

    return NextResponse.json({ message: "User saved successfully", user });
  } catch (error) {
    console.error("Error saving user:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
