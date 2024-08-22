/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";

const Templates = () => {
  let [thumbStyle, setThumbStyle] = useState<string[]>([
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ]);

  const selectThumb = (index: number) => {
    const thumbStyleTemp = new Array(thumbStyle.length).fill("");
    thumbStyleTemp[index] = "border-[#175DCC] border-3 border-solid";
    setThumbStyle(thumbStyleTemp);
  };

  return (
    <div className="flex flex-col justify-start items-start gap-y-8 max-w-[50%]">
      <h1 className="text-3xl font-semibold">Slide Template File</h1>
      <div className="flex flex-col justify-start items-start gap-y-0 text-base leading-tight">
        <p className="font-bold">Click and select a slide template!</p>
        <p className="font-normal">
          Specifies the template file for generating slides. Default value is 3
        </p>
      </div>
      <div className="flex flex-row justify-start gap-x-2 gap-y-8 flex-wrap">
        {thumbStyle.map((style, index) => (
          <img
            src={`./assets/thumbnails/thumb-${index + 1}.png`}
            alt={`template ${index + 1} thumbnail`}
            className={`drop-shadow-lg cursor-pointer ${style}`}
            key={index}
            onClick={() => {
              selectThumb(index);
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Templates;
