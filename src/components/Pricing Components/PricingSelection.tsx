"use client";

import React from "react";
import PricingCard from "./PricingCard";

const PricingSelection = () => {
  const handleFreeSubscribe = () => {
    // handle subscribe
  };

  const handleBasicSubscribe = () => {
    // handle subscribe
  };

  const handleProSubscribe = () => {
    // handle subscribe
  };

  return (
    <div className="py-6 px-24 flex flex-row justify-evenly items-center">
      <PricingCard
        title="Free"
        desc="Starter plan for individual educators and small schools with limited budgets. Get access to basic video generation (limited customization options) for up to 5 videos"
        price={0}
        onSubscribe={handleFreeSubscribe}
      />
      <PricingCard
        title="Basic"
        desc="Basic plan for individual educators and small to medium-sized schools. Get access to expanded customization options (video length, style, format) and higher video quality for up to 20 videos"
        price={4.99}
        onSubscribe={handleBasicSubscribe}
      />
      <PricingCard
        title="Pro"
        desc="Pro plan for schools, districts, and larger educational institutions. Get access to unlimited video creation and advanced customization options"
        price={9.99}
        onSubscribe={handleProSubscribe}
      />
    </div>
  );
};

export default PricingSelection;
