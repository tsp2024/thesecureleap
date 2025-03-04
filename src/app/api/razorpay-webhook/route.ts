import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const prisma = new PrismaClient();

  try {
    const body = await req.json();

    if (body.event === "payment.captured") {
      const payment = body.payload.payment.entity;
      const email = payment.notes?.email;

      if (!email) {
        console.error("❌ Email not found in payment notes");
        return NextResponse.json({ success: false }, { status: 400 });
      }

      if (payment.amount === 24900) {
        console.log("💰 Payment of ₹249 successful for:", email);

        await prisma.user.update({
          where: { email },
          data: { membership: "PREMIUM" },
        });

        return NextResponse.json({ success: true }, { status: 200 });
      }
    }

    return NextResponse.json({ success: false }, { status: 400 });
  } catch (error) {
    console.error("❌ Webhook error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
