import React from "react";

const Parameters = () => {
  return (
    <div className="flex flex-col justify-start items-start gap-y-4">
      <h1 className="text-3xl font-semibold">Parameters:</h1>
      <div className="flex flex-col justify-start items-start gap-y-0 text-base leading-tight">
        <p className="font-bold">Click and select a slide template!</p>
        <p className="font-normal">
          Specifies the template file for generating slides. Default value is 3
        </p>
      </div>
    </div>
  );
};

export default Parameters;
