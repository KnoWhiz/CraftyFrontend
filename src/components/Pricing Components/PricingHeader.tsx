import React from "react";

const PricingHeader = () => {
  return (
    <div className="flex flex-col items-baseline pt-40 pb-10 px-24">
      <div className="flex flex-col gap-y-6 justify-start items-baseline w-1/2 font-raleway leading-8">
        <h1 className="text-title font-bold mb-3">Pricing</h1>
        <p className="text-2xl">Choose the best plan for your own needs</p>
      </div>
    </div>
  );
};

export default PricingHeader;
