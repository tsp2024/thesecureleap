"use client";

import Subscriptions from "@/components/Subscriptions";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

interface User {
  id: string;
  email: string;
  phone: string;
  membership: Membership;
  createdAt: Date;
}

enum Membership {
  FREE = "FREE",
  PREMIUM = "PREMIUM",
}

const DashboardContent = () => {
  const { data: session } = useSession();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    if (!session) return;

    const fetchData = async () => {
      try {
        const response = await fetch(
          `/api/fetch-user?email=${session?.user?.email}`
        );
        if (!response.ok) throw new Error("Failed to fetch user");
        const data = await response.json();
        setUser(data);
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };
    fetchData();
  }, [session]);

  return (
    <div>
      <div className="">
        <div className="mt-[-15px] mb-10 text-lg">
          <h1 className="">
            Hello, {session?.user?.name} (
            {user?.membership === "FREE" ? "STANDARD" : "PREMIUM"} Plan)
          </h1>
        </div>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
          Subscriptions
        </h1>
      </div>

      <Subscriptions user={user} />
    </div>
  );
};

export default DashboardContent;
