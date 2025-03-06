"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

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

const SidebarTabs = () => {
  const pathname = usePathname();

  return (
    <div className="flex flex-col space-y-6">
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
  );
};

export default SidebarTabs;
