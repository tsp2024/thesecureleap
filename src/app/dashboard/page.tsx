"use client";

import DashboardContent from "@/components/DashboardContent";
import Loading from "@/components/Loading";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { LogOut } from "lucide-react";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Dashboard = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/");
    }
  }, [status]);

  if (status === "loading") {
    return <Loading />;
  }

  if (!session) return null;

  const handleSignOut = async () => {
    await signOut({ callbackUrl: "/" });
    router.push("/");
  };

  return (
    <section className="max-w-[90rem] mx-auto py-10 md:py-28 relative">
      <div className="flex items-center absolute right-2 top-3">
        <div className="pt-16">
          <DropdownMenu modal={false}>
            <DropdownMenuTrigger>
              <Image
                src={session.user?.image || "/profile.png"}
                alt="Profile"
                width={40}
                height={40}
                className="rounded-full"
              />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>{session.user?.name}</DropdownMenuItem>
              <DropdownMenuItem>{session.user?.email}</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="hover:cursor-pointer">
                <div
                  className="flex items-center justify-center mx-auto text-red-500"
                  onClick={handleSignOut}
                >
                  <LogOut className="size-4 mr-1" />
                  <p>Sign Out</p>
                </div>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <DashboardContent />
    </section>
  );
};

export default Dashboard;
