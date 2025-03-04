import { Linkedin, TwitterIcon, YoutubeIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-[rgb(3,0,91)] mt-16">
      <div className="py-6 px-4 sm:px-10 flex flex-col sm:flex-row gap-10 items-center justify-center">
        <div className="flex flex-1 justify-center sm:justify-start">
          <Image
            src="/main-logo.jpg"
            width={150}
            height={150}
            alt="Logo"
            draggable="false"
          />
        </div>

        <div className="flex flex-col sm:flex-row space-y-5 sm:space-y-0 sm:space-x-5 text-white text-center sm:text-left text-sm">
          <Link href="/privacy-policy">Privacy & Policy</Link>
          <Link href="/refund-policy">Refund Policy</Link>
          <Link href="/shipping-policy">Shipping Policy</Link>
          <Link href="/terms-condition">Terms of Services</Link>
        </div>
      </div>
      <div className="text-white text-center pb-2">
        <div className="flex items-center justify-center space-x-4 mb-3">
          <Link href="https://x.com/SecureLeap" target="_blank">
            <TwitterIcon className="size-5 text-white hover:text-blue-500" />
          </Link>
          <Link
            href="https://www.linkedin.com/company/the-secure-leap/"
            target="_blank"
          >
            <Linkedin className="size-5 text-white hover:text-blue-800" />
          </Link>
          <Link href="https://www.youtube.com/@TheSecureLeap" target="_blank">
            <YoutubeIcon className="size-5 text-white hover:text-red-500" />
          </Link>
        </div>
        <p className="text-xs text-zinc-400">
          &copy; {new Date().getFullYear()} THESECURELEAP. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
