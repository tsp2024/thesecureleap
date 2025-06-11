const RefundPolicy = () => {
  return (
    <div className="min-h-full">
      <div className="h-[70vh] gradient-bg-footer flex items-center justify-center">
        <h1 className="text-white font-semibold text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
          Refund Policy
        </h1>
      </div>

      <div className="px-4 py-8 md:px-8 lg:px-12 xl:px-16 max-w-[90rem] mx-auto">
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Returns</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            No Return policy is applicable on the services and or subscriptions
            purchased by the merchant.
          </p>
          <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-4">
            <li>Gift cards</li>
            <li>Downloadable software products</li>
            <li>Some health and personal care items</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Refunds</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            No Refund policy is applicable on the services and or subscriptions
            purchased by the merchant.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Late or Missing Refunds</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            No late or missing refunds is applicable on the services and or
            subscriptions purchased by the merchant.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">
            Sale Items (if applicable)
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            No refunds applicable on the sale of the items available on the
            website – www.thesecureleap.com
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Exchanges</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            No exchange policy is applicable on the services and or
            subscriptions purchased by the merchant.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Gifts</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            No exchange or refund policy is applicable for gifts vouchers or
            certificates. They need to be redeemed within 60 days. They can be
            assigned to another entity who needs to declare the source before
            redemption. The collective redemption time cannot exceed 60 days.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Shipping</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            No Shipping policy is applicable on the services and or
            subscriptions purchased by the merchant.
          </p>
        </section>
      </div>
    </div>
  );
};

export default RefundPolicy;
