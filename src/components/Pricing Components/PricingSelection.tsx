import React from "react";
import PricingCard from "./PricingCard";

const PricingSelection = () => {
  const handleSubscribe = () => {
    // handle subscribe
  };

  return (
    <div className="py-6 px-24">
      <PricingCard
        title="Free"
        desc="Starter plan for individual educators and small schools with limited budgets. Get access to basic video generation (limited customization options) for up to 5 videos"
        price={0}
        onSubscribe={() => {
          handleSubscribe();
        }}
      />
    </div>
  );
};

export default PricingSelection;
