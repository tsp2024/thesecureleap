"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader } from "lucide-react";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const phoneSchema = z.object({
  phone: z.string().regex(/^\d{10}$/, "Phone number must be exactly 10 digits"),
});

const Page = () => {
  const { data: session } = useSession();
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(phoneSchema),
  });

  const handleGoogleSignIn = async () => {
    try {
      await signIn("google");
    } catch (error) {
      console.error("Google Sign-In Failed:", error);
    }
  };

  const onSubmit = async (data: { phone: string }) => {
    if (!session?.user?.email) {
      toast.error("Please sign in with Google first!", {
        position: "top-center",
      });
      return;
    }

    try {
      setLoading(true);
      const response = await fetch("/api/save-user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: session.user.email,
          phone: data.phone,
        }),
      });

      router.push("/dashboard");
      setLoading(false);

      if (!response.ok) {
        throw new Error("Failed to save user data");
      }
    } catch (error) {
      console.error("Error saving user:", error);
      toast.error("Something went wrong!", {
        position: "top-center",
      });
    }
  };

  return (
    <section className="min-h-fit absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
      <div className="flex items-center space-x-4 mb-20 mt-[-40px]">
        <Link href="/">
          <Image
            src="/main-logo-crop.png"
            draggable="false"
            alt="Logo"
            width={150}
            height={25}
          />
        </Link>
        <div className="h-8 border border-1 w-0 border-white" />
        <h1 className="text-xl font-semibold text-white">Memberships</h1>
      </div>
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-extrabold text-center mb-6 text-white">
          Elevate Your Membership Experience
        </h2>
      </div>

      <form
        className="mt-10 md:mt-16 lg:mt-24 max-w-md mx-auto"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col space-y-5 mb-5">
          <Label htmlFor="email" className="text-white text-md">
            Email Address:
          </Label>
          {session ? (
            <Button
              variant="outline"
              type="button"
              className="hover:cursor-default"
            >
              {session.user?.email}
              <p
                className="ml-5 hover:cursor-pointer bg-red-500 border-red-700 rounded-lg p-1 text-white"
                onClick={() => signOut()}
              >
                Remove
              </p>
            </Button>
          ) : (
            <Button
              className="flex items-center justify-center space-x-3"
              variant="secondary"
              onClick={handleGoogleSignIn}
              type="button"
            >
              <Image
                src="/svg/google.svg"
                alt="Google"
                width={25}
                height={25}
              />
              <p>Sign in with Google</p>
            </Button>
          )}
        </div>

        <div className="flex flex-col space-y-5">
          <Label htmlFor="phone" className="text-white text-md">
            Phone Number:
          </Label>
          <Input
            id="phone"
            type="text"
            {...register("phone")}
            placeholder="Enter your phone number"
          />

          {errors.phone && (
            <p className="text-red-500 text-sm">{errors.phone.message}</p>
          )}
        </div>

        <div className="flex justify-center">
          <Button
            className="mt-5 mx-auto min-w-full bg-gradient-to-tr from-[#AA60C8] to-[#493D9E] hover:bg-gradient-to-tr hover:from-[#493D9E] hover:to-[#AA60C8] text-[1rem]"
            type="submit"
            disabled={loading}
          >
            {loading ? (
              <p className="flex items-center justify-center">
                <Loader className="mr-2 animate-spin" />
                Loading...
              </p>
            ) : (
              "Dive In"
            )}
          </Button>
        </div>
      </form>
    </section>
  );
};

export default Page;
