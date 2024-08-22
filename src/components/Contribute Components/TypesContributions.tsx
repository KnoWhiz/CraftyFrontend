import React from "react";

const TypesContributions = () => {
  return (
    <div className="font-raleway w-full">
      <h1 className="text-3xl font-semibold mb-6">Types of Contributions</h1>
      <div className="flex flex-col gap-y-4">
        <div className="flex flex-col gap-y-1">
          <h3 className="text-[26px] font-semibold">Bug Reports and Fixes</h3>
          <p className="text-xl font-normal leading-6">
            If you find a bug, please report it by opening an issue. If you can,
            submit a pull request with a fix. Make sure to include tests that
            demonstrate the bug and that the fix resolves it.
          </p>
        </div>
        <div className="flex flex-col gap-y-2">
          <h3 className="text-[26px] font-semibold">Feature Requests</h3>
          <p className="text-xl font-normal leading-6">
            We welcome new feature ideas! Open an issue to discuss your proposed
            feature. If you want to implement it, fork the repository and create
            a pull request once you&apos;re done.
          </p>
        </div>
        <div className="flex flex-col gap-y-2">
          <h3 className="text-[26px] font-semibold">Documentation</h3>
          <p className="text-xl font-normal leading-6">
            Good documentation is key to a great project. If you find areas in
            the documentation that can be improved, please submit a pull
            request.
          </p>
        </div>
        <div className="flex flex-col gap-y-2">
          <h3 className="text-[26px] font-semibold">
            Code Quality Improvements
          </h3>
          <p className="text-xl font-normal leading-6">
            Improvements to code readability, performance, and maintainability
            are always appreciated. Just ensure that existing functionality is
            preserved and adequately tested.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TypesContributions;
