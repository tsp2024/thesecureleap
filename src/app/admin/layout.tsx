"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface Props {
  children: React.ReactNode;
}

const Links = [
  {
    label: "Home",
    href: "/admin",
  },
  {
    label: "News",
    href: "/admin/news",
  },
  {
    label: "Stories",
    href: "/admin/stories",
  },
  {
    label: "Users",
    href: "/admin/users",
  },
];

const Layout = ({ children }: Props) => {
  const pathname = usePathname();

  return (
    <div className="p-8 min-h-screen bg-[#04005C] dark:bg-[#04005C]">
      <div className="bg-black h-[630px] overflow-hidden dark:bg-black rounded-xl text-white dark:text-white flex p-4">
        <div className="w-[20%]">
          <div className="px-5 py-2 flex flex-col space-y-6">
            <Image
              src="/main-logo-removebg.png"
              alt="Logo"
              className="w-full h-[70%] mb-10"
              width={300}
              height={300}
              draggable={false}
            />

            {Links.map(({ href, label }) => (
              <Link
                className={`text-xl font-normal px-3 ${
                  pathname === href && "text-black bg-white rounded-sm py-2"
                }`}
                href={href}
                key={href}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
        <div className="bg-white overflow-y-scroll overflow-x-hidden flex-1 text-black rounded-xl p-2">
          {/* <h1 className="text-2xl text-center font-semibold">Admin Panel</h1> */}
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
