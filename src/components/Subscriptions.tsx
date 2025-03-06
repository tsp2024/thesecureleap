"use client";

import React, { useEffect, useState } from "react";
import { Card, CardContent, CardHeader } from "./ui/card";
import { freePlan, notIncluded, premiumPlan } from "../../constant/subcription";
import { Button } from "./ui/button";
import { Ban, CircleCheck, Star } from "lucide-react";
import { useSession } from "next-auth/react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

type Membership = "FREE" | "PREMIUM";

interface User {
  email: string;
  phone: string;
  membership: Membership;
  createdAt: Date;
}

interface SubscriptionsProps {
  user: User | null;
}

const Subscriptions = ({ user }: SubscriptionsProps) => {
  const { data: session } = useSession();
  const [loading, setLoading] = useState(false);
  const [membership, setMembership] = useState<Membership | null>(null);
  const router = useRouter();

  useEffect(() => {
    if (user) {
      setMembership(user.membership);
    }
  }, [user]);

  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      if ((window as any).Razorpay) {
        resolve(true);
        return;
      }

      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.async = true;
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handlePayment = async () => {
    if (!session?.user?.email) {
      toast.error("Please sign in first!");
      return;
    }

    const isPremium = user?.membership === "PREMIUM";

    if (isPremium) {
      toast.error("You are already subscribed to PREMIUM plan.");
      return;
    }

    setLoading(true);

    const isScriptLoaded = await loadRazorpayScript();
    if (!isScriptLoaded) {
      toast.error("Razorpay SDK failed to load. Please try again.");
      setLoading(false);
      return;
    }

    try {
      const res = await fetch("/api/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: session.user.email }),
      });

      const { order } = await res.json();

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: order.amount,
        currency: order.currency,
        name: "Premium Plan",
        description:
          "Upgrade to premium for exclusive benefits (Inclusive of all taxes)",
        order_id: order.id,
        handler: async (response: any) => {
          toast.success("Payment successful! Your membership is now PREMIUM.", {
            position: "top-center",
          });

          setMembership("PREMIUM");

          setTimeout(() => {
            router.refresh();
          }, 3000);
        },
        prefill: {
          email: session.user.email,
        },
      };

      const razor = new (window as any).Razorpay({ ...options });
      razor.open();
    } catch (error) {
      console.error("❌ Payment error:", error);
      toast.error("Payment failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-10 grid sm:grid-cols-2 gap-10">
      <div>
        <Card className="">
          <CardHeader>
            <div className="flex items-center mb-5">
              <p className="flex-1">FREE PLAN</p>
              <div className="flex items-center space-x-1 border border-zinc-500 rounded-lg w-fit p-1">
                <div className="size-3 bg-blue-500 rounded-full animate-pulse" />
                <p className="text-xs">FREE</p>
              </div>
            </div>
            <Button
              className="uppercase disabled:text-white disabled:bg-black"
              disabled
            >
              Subscribed
            </Button>
          </CardHeader>

          {freePlan.map(({ title }) => (
            <CardContent key={title} className="flex items-center space-x-2">
              <CircleCheck />
              <p>{title}</p>
            </CardContent>
          ))}
          {notIncluded.map(({ title }) => (
            <CardContent key={title} className="flex items-center space-x-2">
              <Ban />
              <p>{title}</p>
            </CardContent>
          ))}
        </Card>
      </div>
      <div>
        <Card className="bg-zinc-800 border-zinc-950 text-white">
          <CardHeader>
            <div className="flex items-center mb-5">
              <p className="flex-1">PREMIUM PLAN</p>
              <div className="flex items-center space-x-1 border border-zinc-100 rounded-lg w-fit p-1">
                <Star
                  className="size-3 animate-pulse"
                  fill="#FF9D23"
                  stroke="#E9762B"
                />
                <p className="text-xs">PREMIUM</p>
              </div>
            </div>
            <Button
              className="uppercase bg-blue-500 hover:bg-blue-500 text-white disabled:select-none"
              disabled={user?.membership === "PREMIUM" || !membership}
              onClick={handlePayment}
            >
              {user?.membership === "PREMIUM" ? "Subscribed" : "Subscribe Now"}
            </Button>
          </CardHeader>

          {premiumPlan.map(({ title }) => (
            <CardContent key={title} className="flex items-center space-x-2">
              <CircleCheck />
              <p>{title}</p>
            </CardContent>
          ))}
        </Card>
      </div>
    </div>
  );
};

export default Subscriptions;
