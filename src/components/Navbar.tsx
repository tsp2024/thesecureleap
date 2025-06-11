"use client";

import { navbarLinks } from "../../constant";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion, useScroll } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

const INITIAL_WIDTH = "70rem";
const MAX_WIDTH = "950px";

// Animation variants
const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

const drawerVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    rotate: 0,
    transition: {
      type: "spring",
      damping: 15,
      stiffness: 200,
      staggerChildren: 0.03,
    },
  },
  exit: {
    opacity: 0,
    y: 100,
    transition: { duration: 0.1 },
  },
};

const drawerMenuContainerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const drawerMenuVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export function Navbar() {
  const { scrollY } = useScroll();
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const unsubscribe = scrollY.on("change", (latest) => {
      setHasScrolled(latest > 10);
    });
    return unsubscribe;
  }, [scrollY]);

  const toggleDrawer = () => setIsDrawerOpen((prev) => !prev);
  const handleOverlayClick = () => setIsDrawerOpen(false);

  // Helper function to check if a link is active
  const isLinkActive = (route: any) => {
    // Handle external links (they should never be active)
    if (route.startsWith("http")) {
      return false;
    }

    // Exact match for the current pathname
    return pathname === route;
  };

  return (
    <header
      className={cn(
        "sticky z-50 mx-4 flex justify-center transition-all duration-300 md:mx-0",
        hasScrolled ? "top-6" : "top-4 mx-0"
      )}
    >
      <motion.div
        initial={{ width: INITIAL_WIDTH }}
        animate={{ width: hasScrolled ? MAX_WIDTH : INITIAL_WIDTH }}
        transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <div
          className={cn(
            "mx-auto max-w-7xl rounded-2xl transition-all duration-300 xl:px-0",
            hasScrolled
              ? "px-2 border border-white/10 backdrop-blur-lg bg-[#03005b]/90"
              : "shadow-none px-7"
          )}
        >
          <div className="flex h-[56px] items-center justify-between p-4">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 pt-2">
              <Image
                src="/main-logo-removebg.png"
                className="h-[35px] w-[120px]"
                alt="logo"
                width={200}
                height={200}
                quality={100}
                draggable={false}
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              {navbarLinks.map((link, index) => {
                const isExternal = link.route.startsWith("http");
                const isActive = isLinkActive(link.route);

                return (
                  <Link
                    key={link.label}
                    href={link.route}
                    className={`text-sm font-medium transition-colors relative ${
                      hasScrolled
                        ? "text-white hover:text-white/80"
                        : "text-zinc-900 hover:text-zinc-700"
                    } ${
                      isActive
                        ? hasScrolled
                          ? "font-semibold text-white"
                          : "font-semibold text-zinc-900"
                        : ""
                    }`}
                    target={isExternal ? "_blank" : ""}
                    rel={isExternal ? "noopener noreferrer" : ""}
                  >
                    {link.label}
                    {/* Active indicator */}
                    {isActive && (
                      <span
                        className={`absolute -bottom-1 left-0 right-0 h-0.5 rounded-full ${
                          hasScrolled ? "bg-white" : "bg-zinc-900"
                        }`}
                      />
                    )}
                  </Link>
                );
              })}

              <DropdownMenu modal={false}>
                <DropdownMenuTrigger asChild>
                  <button
                    className={`text-sm font-medium transition-colors cursor-pointer ${
                      hasScrolled
                        ? "text-white hover:text-white/80"
                        : "text-zinc-900 hover:text-zinc-700"
                    }`}
                  >
                    Projects
                  </button>
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

            <div className="flex flex-row items-center gap-1 md:gap-3 shrink-0">
              <button
                className="md:hidden size-8 rounded-md cursor-pointer flex items-center justify-center"
                onClick={toggleDrawer}
              >
                {isDrawerOpen ? (
                  <X
                    className={cn(
                      "size-5",
                      hasScrolled ? "text-white" : "text-zinc-900"
                    )}
                  />
                ) : (
                  <Menu
                    className={cn(
                      "size-5",
                      hasScrolled ? "text-white" : "text-zinc-900"
                    )}
                  />
                )}
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isDrawerOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={overlayVariants}
              transition={{ duration: 0.2 }}
              onClick={handleOverlayClick}
            />

            <motion.div
              className="fixed inset-x-0 w-[95%] mx-auto bottom-3 bg-[#03005bbe] border border-border p-4 rounded-xl shadow-lg"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={drawerVariants}
            >
              {/* Mobile menu content */}
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <Link href="/" className="flex items-center gap-3">
                    <Image
                      src="/main-logo-removebg.png"
                      className="h-[35px] w-[120px]"
                      alt="logo"
                      width={90}
                      height={40}
                      draggable={false}
                    />
                  </Link>
                  <button
                    onClick={toggleDrawer}
                    className=" rounded-md p-1 cursor-pointer"
                  >
                    <X className="size-5 text-white" />
                  </button>
                </div>

                <motion.ul
                  className="flex flex-col text-sm mb-4 border border-border rounded-md"
                  variants={drawerMenuContainerVariants}
                >
                  <AnimatePresence>
                    {navbarLinks.map((item, index) => {
                      const isExternal = item.route.startsWith("http");
                      const isActive = isLinkActive(item.route);

                      return (
                        <motion.li
                          key={item.label}
                          className="p-2.5 border-b border-border last:border-b-0"
                          variants={drawerMenuVariants}
                        >
                          <Link
                            href={item.route}
                            onClick={() => setIsDrawerOpen(false)}
                            className={`underline-offset-4 hover:text-white/80 transition-colors relative ${
                              isActive
                                ? "text-white font-semibold"
                                : "text-white"
                            }`}
                            target={isExternal ? "_blank" : ""}
                            rel={isExternal ? "noopener noreferrer" : ""}
                          >
                            {isActive && (
                              <span className="absolute left-0 top-0 bottom-0 w-1 bg-white rounded-r-full" />
                            )}
                            <span className={isActive ? "ml-3" : ""}>
                              {item.label}
                            </span>
                          </Link>
                        </motion.li>
                      );
                    })}

                    {/* Projects dropdown for mobile */}
                    <motion.li
                      className="p-2.5 border-b border-border last:border-b-0"
                      variants={drawerMenuVariants}
                    >
                      <DropdownMenu modal={false}>
                        <DropdownMenuTrigger asChild>
                          <button className="text-white transition-colors cursor-pointer text-left w-full hover:text-white/80">
                            Projects
                          </button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="start">
                          <Link href="/project-ayanna">
                            <DropdownMenuLabel className="cursor-pointer">
                              Project Ayanna
                            </DropdownMenuLabel>
                          </Link>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </motion.li>
                  </AnimatePresence>
                </motion.ul>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
