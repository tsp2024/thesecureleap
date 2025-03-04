"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { navbarLinks } from "../../constant";
import { MobileNav } from "./MobileNav";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import Image from "next/image";
const StickyNavbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div>
        <nav
          className={`fixed top-0 left-0 right-0 bg-[#03005B] backdrop-blur-lg text-center shadow-md transition-all duration-300 ease-in-out hidden z-50 sm:block ${
            scrolled &&
            "top-5 w-11/12 my-0 mx-auto shadow-md rounded-full transition-all z-50"
          }`}
        >
          <div className="flex items-center justify-center space-x-4">
            <div className="flex-1">
              <a href="#">
                <Image
                  src="/main-logo.jpg"
                  className="h-[70px] w-[140px] mx-8"
                  alt="logo"
                  width={140}
                  height={70}
                  draggable={false}
                />
              </a>
            </div>
            <div className="flex items-center justify-center pr-4">
              {navbarLinks.map((link, index) => (
                <Link
                  key={link.label}
                  href={link.route}
                  className="text-white mx-1 sm:mr-2 md:mr-3 xl:mr-4 hover:underline hover:underline-offset-4 transition-all"
                  target={index === 3 ? "_blank" : ""}
                >
                  {link.label}
                </Link>
              ))}

              <DropdownMenu modal={false}>
                <DropdownMenuTrigger asChild>
                  <h1 className="text-white mx-1 sm:mr-2 md:mr-3 xl:mr-4 hover:underline hover:underline-offset-4 transition-all cursor-pointer">
                    Projects
                  </h1>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start">
                  <Link href="/project-ayanna">
                    <DropdownMenuLabel className="cursor-pointer">
                      Project Ayanna
                    </DropdownMenuLabel>
                  </Link>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </nav>
      </div>
      <MobileNav />
    </>
  );
};

export default StickyNavbar;
