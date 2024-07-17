"use client";

import React from "react";

const Contribute = () => {
  const handleContribute = () => {
    // handle contribute
  };

  return (
    <div className="flex flex-col justify-center items-center h-full gap-y-2 font-Inter">
      <h1 className="text-title font-semibold">Help Shape the Future</h1>
      <h2 className="text-2xl leading-tight">
        Empower educators through our open source project
      </h2>
      <button
        type="button"
        style={{ cursor: "pointer" }}
        onClick={handleContribute}
        className="h-12 w-44 rounded-lg bg-button-blue text-2xl font-medium text-main-white mt-10"
      >
        Contribute
      </button>
    </div>
  );
};

export default Contribute;
