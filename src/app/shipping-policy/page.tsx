import React from "react";
import Link from "next/link";
import { HomeIcon } from "lucide-react";

const ShippingPolicy = () => {
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
          Shipping Policy
        </h1>
      </div>

      <div className="px-4 py-8 md:px-8 lg:px-12 xl:px-16">
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Shipping Policy Overview</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            It's important to start by clarifying to customers that the purchase
            of the subscriptions from{" "}
            <a
              href="https://www.thesecureleap.com"
              className="text-blue-600 underline"
            >
              www.thesecureleap.com
            </a>{" "}
            does not account to the shipping policy.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Customers will be provided with an exclusive username and password
            within 2 working days to access the programs, features, and gift
            vouchers available based on their respective subscription type.
            After the first login, the customer must change the password to
            continue accessing the programs, features, and services applicable
            to the respective subscription option purchased by the merchant.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Shipping Rates</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            For calculated shipping rates: No shipping rates are applicable to
            subscriptions and services provided on the website{" "}
            <a
              href="https://www.thesecureleap.com"
              className="text-blue-600 underline"
            >
              www.thesecureleap.com
            </a>
            .
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            For simple flat rate shipping: No simple flat rate shipping is
            applicable to subscriptions and services provided on the website{" "}
            <a
              href="https://www.thesecureleap.com"
              className="text-blue-600 underline"
            >
              www.thesecureleap.com
            </a>
            .
          </p>
        </section>

        {/* Subscription Table Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">
            Subscription Shipping Details
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white shadow-lg rounded-lg">
              <thead>
                <tr className="bg-gray-800 text-white text-left">
                  <th className="py-3 px-6">Subscription Option</th>
                  <th className="py-3 px-6">Estimated Delivery Time</th>
                  <th className="py-3 px-6">Shipping Price</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-3 px-6">Basic</td>
                  <td className="py-3 px-6">1 Year</td>
                  <td className="py-3 px-6">Not Applicable</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-6">Standard</td>
                  <td className="py-3 px-6">1 Year</td>
                  <td className="py-3 px-6">Not Applicable</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-6">Premium</td>
                  <td className="py-3 px-6">1 Year</td>
                  <td className="py-3 px-6">Not Applicable</td>
                </tr>
                <tr>
                  <td className="py-3 px-6">Elite</td>
                  <td className="py-3 px-6">1 Year</td>
                  <td className="py-3 px-6">Not Applicable</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ShippingPolicy;
