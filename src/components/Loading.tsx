import Image from "next/image";
import React from "react";

const Loading = () => {
  return (
    <section className="flex  justify-center min-h-fit absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
      <img
        src="/main-logo-crop.png"
        alt="The Secureleap"
        className="animate-pulse w-96 h-16"
      />
    </section>
  );
};

export default Loading;
