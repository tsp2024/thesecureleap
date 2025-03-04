"use client";

import { Button } from "@/components/ui/button";

import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { Gem } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { pricing, pricingFeatures } from "../../../constant/pricing";
import { useEffect } from "react";

export default function PricingSection() {
  useEffect(() => {
    document.title = "Subscription Plans | The Secureleap";
  }, []);

  return (
    <section className="min-h-fit absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)] select-none">
      <div className="flex items-center space-x-4 mb-20 mt-[-40px]">
        <Link href="/">
          <Image
            src="/main-logo-crop.png"
            draggable="false"
            alt="Logo"
            width={150}
            height={25}
          />
        </Link>
        <div className="h-8 border border-1 w-0 border-white" />
        <h1 className="text-xl font-semibold text-white">Subscription Plans</h1>
      </div>
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-extrabold text-center mb-6 text-white">
          Flexible Subscription for Global Growth
        </h2>
        <p className="text-muted-foreground mt-1 mb-28 max-w-3xl text-center mx-auto select-none">
          "Affordable Plans Designed to Support Students, Professionals, and
          Corporate in Achieving Their Educational and Career Goals" <br /> This
          emphasizes the platform&apos;s versatility in offering tailored
          solutions for various client needs, from individual students to
          professionals and larger organizations
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {pricing.map(({ name, href, color, border, detailsPage }) => (
            <CardContainer
              className="border-none shadow-none mt-[-90px] md:mt-[-20px]"
              key={name}
            >
              <div
                className="rounded-md"
                style={{
                  backgroundColor: `${color}`,
                  backdropFilter: "blur(10px)",
                  border: `1px solid ${border}`,
                }}
              >
                <CardBody className="mt-5 ml-5">
                  <CardItem
                    translateZ="50"
                    className="text-2xl border text-black rounded-xl px-3 py-1 font-semibold"
                    style={{
                      borderColor: `${border}`,
                      backgroundColor: `${border}`,
                    }}
                  >
                    {name}
                  </CardItem>
                  {pricingFeatures.map(({ name }) => (
                    <CardItem
                      key={name}
                      className="text-xl text-white flex justify-center items-center mt-5 space-x-3 ml-10"
                    >
                      <Gem className="size-5" style={{ color: `${color}` }} />
                      <h1>{name}</h1>
                    </CardItem>
                  ))}
                  <CardItem className="my-0.5 mx-auto">
                    {detailsPage === "" ? (
                      <h1 className="text-gray-400 mx-auto text-lg">
                        Subscription Details
                      </h1>
                    ) : (
                      <Link
                        href={detailsPage}
                        target="_blank"
                        className="text-white mx-auto text-lg hover:underline hover:underline-offset-4"
                      >
                        Subscription Details
                      </Link>
                    )}
                  </CardItem>

                  <CardItem className="mx-auto mt-6">
                    {href === "" ? (
                      <Button disabled variant="secondary" size="lg">
                        Coming Soon
                      </Button>
                    ) : (
                      <Link href={href}>
                        <Button
                          variant="outline"
                          className="bg-transparent text-white text-[1rem]"
                          size="lg"
                        >
                          Subscribe
                        </Button>
                      </Link>
                    )}
                  </CardItem>
                </CardBody>
              </div>
            </CardContainer>
          ))}
        </div>
      </div>

      <section className="w-full md:px-20 py-12 md:py-24 lg:py-32 mt-10">
        <div className="container px-4 md:px-6">
          <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none mb-3 text-white">
                  Let's connect and make it happen.
                </h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Ready to take the next step? We're here to help you to get
                  started.
                </p>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <Image
                alt="Connect with us"
                className="aspect-video overflow-hidden object-contain object-center rounded-2xl"
                height="400"
                src="/main-logo-crop.png"
                width="700"
                draggable="false"
              />
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
