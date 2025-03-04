import React from "react";
import Link from "next/link";
import { Home, HomeIcon } from "lucide-react";

const Page = () => {
  return (
    <div className="min-h-full">
      <div className="absolute top-4 left-4">
        <Link href="/">
          <p className="text-gray-700 hover:text-gray-900 flex items-center space-x-2">
            <HomeIcon
              className="text-xl md:text-2xl lg:text-3xl p-1 rounded-full bg-white shadow-lg"
              size={30}
            />
          </p>
        </Link>
      </div>

      <div className="h-[70vh] gradient-bg-footer flex items-center justify-center">
        <h1 className="text-white font-semibold text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
          Privacy Statement
        </h1>
      </div>

      <div className="px-4 py-8 md:px-8 lg:px-12 xl:px-16">
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">
            SECTION 1 - WHAT DO WE DO WITH YOUR INFORMATION?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            When you purchase something from our store, as part of the buying
            and selling process, we collect the personal information you give us
            such as your name, address and email address. When you browse our
            store, we also automatically receive your computer’s internet
            protocol (IP) address in order to provide us with information that
            helps us learn about your browser and operating system. Email
            marketing (if applicable): With your permission, we may send you
            emails about our store, new products and other updates.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">SECTION 2 - CONSENT</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>How do you get my consent?</strong>
            <br />
            When you provide us with personal information to complete a
            transaction, verify your credit card, place an order, arrange for a
            delivery or return a purchase, we imply that you consent to our
            collecting it and using it for that specific reason only.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            If we ask for your personal information for a secondary reason, like
            marketing, we will either ask you directly for your expressed
            consent, or provide you with an opportunity to say no.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>How do I withdraw my consent?</strong>
            <br />
            If after you opt-in, you change your mind, you may withdraw your
            consent for us to contact you, for the continued collection, use or
            disclosure of your information, at any time, by contacting us at{" "}
            <a
              href="mailto:thesecureleap@outlook.com"
              className="text-blue-600 underline"
            >
              thesecureleap@outlook.com
            </a>{" "}
            or mailing us at: D-102, Shivdham Building, off Linking Road, Plot
            No. 62, Kanchpada, Malad West, Mumbai – 400 064.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">SECTION 3 - DISCLOSURE</h2>
          <p className="text-gray-700 leading-relaxed">
            We may disclose your personal information if we are required by law
            to do so or if you violate our Terms of Service.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">SECTION 4 - PAYMENT</h2>
          <p className="text-gray-700 leading-relaxed">
            We use Razorpay for processing payments. We/Razorpay do not store
            your card data on their servers. The data is encrypted through the
            Payment Card Industry Data Security Standard (PCI-DSS) when
            processing payment. Your purchase transaction data is only used as
            long as is necessary to complete your purchase transaction. After
            that is complete, your purchase transaction information is not
            saved.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Our payment gateway adheres to the standards set by PCI-DSS as
            managed by the PCI Security Standards Council, which is a joint
            effort of brands like Visa, MasterCard, American Express and
            Discover.
          </p>
          <p className="text-gray-700 leading-relaxed">
            PCI-DSS requirements help ensure the secure handling of credit card
            information by our store and its service providers. For more
            insight, you may also want to read terms and conditions of Razorpay
            on
            <a href="https://razorpay.com" className="text-blue-600 underline">
              https://razorpay.com
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  );
};

export default Page;
