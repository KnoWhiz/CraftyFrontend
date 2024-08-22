/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect, useState } from "react";

interface TemplatesProps {
  onSelect: () => void;
}

const Templates: React.FC<TemplatesProps> = ({ onSelect }) => {
  const [selectedIndex, setSelectedIndex] = useState<number>(-1);

  const handleSelectThumb = (index: number) => {
    setSelectedIndex(index);
    onSelect();
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
        {[...Array(8)].map((_, index) => (
          <div
            className="relative drop-shadow-lg cursor-pointer"
            key={index}
            onClick={() => {
              handleSelectThumb(index);
            }}
          >
            <img
              src={`./assets/thumbnails/thumb-${index + 1}.png`}
              alt={`template ${index + 1} thumbnail`}
            />
            <div
              className={`absolute inset-0 ${
                selectedIndex === index
                  ? "border-[3px] border-[#175DCC] border-solid"
                  : ""
              }`}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Templates;
