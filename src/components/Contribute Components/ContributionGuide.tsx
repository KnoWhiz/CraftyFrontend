/* eslint-disable @next/next/no-img-element */
import React from "react";
import HowToContribute from "./HowToContribute/HowToContribute";
import TypesContributions from "./TypesContributions";
import Incentives from "./Incentives";
import BestPractices from "./BestPractices";
import Contact from "./Contact";

const ContributionGuide = () => {
  return (
    <div className="flex pt-40 pb-20 px-24 items-center gap-x-20">
      <div className="flex flex-col gap-y-20 justify-start items-baseline w-full font-raleway leading-8">
        <div className="flex flex-col gap-y-6">
          <h1 className="text-title font-bold mb-3">Contribution Guide</h1>
          <h3 className="text-2xl font-medium">
            We are thrilled that you are interested in contributing to Crafty!
            Your contributions will help make this project even better and more
            valuable for the community. Below, you&apos;ll find guidelines on
            how to get started, the types of contributions we accept, best
            practices to follow, and incentives for contributing.
          </h3>
        </div>

        <HowToContribute />
        <TypesContributions />
        <Incentives />
        <BestPractices />
        <Contact />
      </div>
    </div>
  );
};

export default ContributionGuide;
