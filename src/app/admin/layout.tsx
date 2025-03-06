import Image from "next/image";
import React from "react";
import SidebarTabs from "./components/sidebarTabs";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
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
            <SidebarTabs />
          </div>
        </div>
        <div className="bg-white overflow-y-scroll overflow-x-hidden flex-1 text-black rounded-xl p-2">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
