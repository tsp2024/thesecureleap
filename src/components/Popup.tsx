"use client";
import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import Image from "next/image";
const Popup = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="p-0">
        <DialogHeader>
          <DialogTitle className=""></DialogTitle>
          <DialogDescription className="mx-auto">
            <Image
              src="/poster.jpg"
              alt="TechFest"
              width={450}
              height={450}
              draggable={false}
            />
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
export default Popup;
