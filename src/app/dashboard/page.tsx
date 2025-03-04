"use client";

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
import DashboardContent from "@/components/DashboardContent";

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
    <section className="min-h-fit absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)] text-white">
      <div className="flex items-center mb-20 mt-[-40px]">
        <div className="flex flex-1 items-center space-x-4">
          <Image
            src="/main-logo-crop.png"
            draggable="false"
            alt="Logo"
            width={150}
            height={25}
          />

          <div className="h-8 border border-1 w-0 border-white" />
          <h1 className="text-xl font-semibold">Dashboard</h1>
        </div>

        <div className="">
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
