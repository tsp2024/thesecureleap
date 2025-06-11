import Image from "next/image";
import Link from "next/link";

export function CTASection() {
  return (
    <section
      id="cta"
      className="flex flex-col items-center justify-center w-full max-w-[90rem] mx-auto mb-10"
    >
      <div className="w-full">
        <div className="h-[400px] md:h-[400px] overflow-hidden shadow-xl w-full border border-border rounded-xl relative z-20 bg-[#03005b]">
          <Image
            src="/svg/cte.svg"
            alt="CTA Background"
            className="absolute inset-0 w-full h-full object-cover object-right md:object-center"
            fill
            priority
          />
          <div className="absolute inset-0 -top-28 flex flex-col items-center justify-center">
            <h1 className="text-white text-4xl md:text-7xl font-medium tracking-tighter max-w-xs md:max-w-xl text-center">
              Let's Connect and make it happen.
            </h1>
            <div className="absolute bottom-10 flex flex-col items-center justify-center gap-2">
              <Link
                href="mailto:info@thesecureleap.net"
                className="bg-white text-black font-semibold text-sm h-10 w-fit px-4 rounded-full flex items-center justify-center shadow-md"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
