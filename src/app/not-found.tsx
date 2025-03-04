import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import Link from "next/link";
import React from "react";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 flex-col space-y-2 relative">
      <h1 className="absolute top-[20px] left-1/2 transform -translate-x-1/2 text-[8rem] lg:text-[25rem] bg-transparent font-bold text-white px-4 hidden lg:block">
        404
      </h1>
      <CardContainer className="border-none shadow-none mt-[-90px] md:mt-[-20px]">
        <div
          className="rounded-md"
          style={{
            backgroundColor: `rgba(179, 200, 207,0.463)`,
            backdropFilter: "blur(15px)",
            border: `1px solid #B3C8CF`,
          }}
        >
          <CardBody className="mt-5 ml-5 flex flex-col items-center justify-center">
            <CardItem
              translateZ="50"
              className="text-gray-950 font-bold text-center text-xl mb-5"
            >
              Page Not Found. It must be hiding !
            </CardItem>
            <CardItem>
              <Link href="/">
                <Button
                  variant="outline"
                  className="flex items-center justify-center"
                >
                  <Home className="size-4 mr-1" />
                  Home
                </Button>
              </Link>
            </CardItem>
          </CardBody>
        </div>
      </CardContainer>
    </div>
  );
};

export default NotFoundPage;
