const ShippingPolicy = () => {
  return (
    <div className="bg-white py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-serif text-[#4A1D1D] text-center mb-16">
          Shipping Policy
        </h1>

        <div className="prose prose-sm max-w-none text-gray-600 space-y-8">
          <section>
            <h2 className="text-xl font-bold text-[#002B49] mb-4">Shipping Coverage</h2>
            <p>
              Signature Stroke is proud to offer worldwide shipping. We have successfully delivered authentic cricket equipment to cricketers in over 50 countries across the globe.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#002B49] mb-4">Processing Time</h2>
            <p>
              Orders are typically processed within 1-2 business days (excluding weekends and holidays) after receiving your order confirmation email. You will receive another notification when your order has shipped.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#002B49] mb-4">Shipping Rates & Estimates</h2>
            <p>
              Shipping charges for your order will be calculated and displayed at checkout. We offer several tiers of shipping, from standard to express, to suit your needs and budget.
            </p>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full border-collapse border border-gray-100 text-left">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="p-4 border border-gray-100 font-bold text-[#002B49]">Region</th>
                    <th className="p-4 border border-gray-100 font-bold text-[#002B49]">Estimated Delivery</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-4 border border-gray-100">India</td>
                    <td className="p-4 border border-gray-100">3-5 business days</td>
                  </tr>
                  <tr>
                    <td className="p-4 border border-gray-100">International (Express)</td>
                    <td className="p-4 border border-gray-100">5-7 business days</td>
                  </tr>
                  <tr>
                    <td className="p-4 border border-gray-100">International (Standard)</td>
                    <td className="p-4 border border-gray-100">10-15 business days</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#002B49] mb-4">Customs, Duties, and Taxes</h2>
            <p>
              Signature Stroke is not responsible for any customs and taxes applied to your order. All fees imposed during or after shipping are the responsibility of the customer (tariffs, taxes, etc.).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#002B49] mb-4">Damages</h2>
            <p>
              Signature Stroke is not liable for any products damaged or lost during shipping. If you received your order damaged, please contact the shipment carrier to file a claim. Please save all packaging materials and damaged goods before filing a claim.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ShippingPolicy;
