const RefundPolicy = () => {
  return (
    <div className="bg-white py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-serif text-[#4A1D1D] text-center mb-16">
          Refund Policy
        </h1>

        <div className="prose prose-sm max-w-none text-gray-600 space-y-8">
          <section>
            <h2 className="text-xl font-bold text-[#002B49] mb-4">Refunds & Returns</h2>
            <p>
              We have a 14-day return policy, which means you have 14 days after receiving your item to request a return.
            </p>
            <p>
              To be eligible for a return, your item must be in the same condition that you received it, unworn or unused, with tags, and in its original packaging. You’ll also need the receipt or proof of purchase.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#002B49] mb-4">Starting a Return</h2>
            <p>
              To start a return, you can contact us at <span className="text-[#002B49] font-medium">support@signaturestroke.com</span>. If your return is accepted, we’ll send you a return shipping label, as well as instructions on how and where to send your package. Items sent back to us without first requesting a return will not be accepted.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#002B49] mb-4">Damages and issues</h2>
            <p>
              Please inspect your order upon reception and contact us immediately if the item is defective, damaged or if you receive the wrong item, so that we can evaluate the issue and make it right.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#002B49] mb-4">Exceptions / non-returnable items</h2>
            <p>
              Certain types of items cannot be returned, like custom products (such as special orders or personalized items). Please get in touch if you have questions or concerns about your specific item.
            </p>
            <p className="mt-2 font-medium italic">
              Unfortunately, we cannot accept returns on sale items or gift cards.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#002B49] mb-4">Exchanges</h2>
            <p>
              The fastest way to ensure you get what you want is to return the item you have, and once the return is accepted, make a separate purchase for the new item.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#002B49] mb-4">Refunds</h2>
            <p>
              We will notify you once we’ve received and inspected your return, and let you know if the refund was approved or not. If approved, you’ll be automatically refunded on your original payment method. Please remember it can take some time for your bank or credit card company to process and post the refund too.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default RefundPolicy;
