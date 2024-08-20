"use client";

import React from "react";
import RoundButton from "../RoundButton";

const Contribute = () => {
  const handleContribute = () => {
    // handle contribute
  };

  return (
    <div className="flex flex-col justify-center items-center h-[30rem] gap-y-2 font-raleway">
      <h1 className="text-title font-semibold">Help Shape the Future</h1>
      <h2 className="text-2xl leading-tight mb-10">
        Empower educators through our open source project
      </h2>
      <RoundButton text="Contribute" color="blue" click={handleContribute} />
    </div>
  );
};

export default Contribute;
