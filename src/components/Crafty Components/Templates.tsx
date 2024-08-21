/* eslint-disable @next/next/no-img-element */
import React from "react";

const Templates = () => {
  return (
    <div className="flex flex-col justify-start items-start gap-y-4">
      <h1 className="text-3xl font-semibold">Slide Template File</h1>
      <div className="flex flex-col justify-start items-start gap-y-0 text-base leading-tight">
        <p className="font-bold">Click and select a slide template!</p>
        <p className="font-normal">
          Specifies the template file for generating slides. Default value is 3
        </p>
      </div>
      <div className="flex flex-row justify-start gap-x-10">
        <img src="./assets/thumbnails/template-1.png" alt="template 1 thumb" />
        <img src="./assets/thumbnails/template-2.png" alt="template 1 thumb" />
        <img src="./assets/thumbnails/template-3.png" alt="template 1 thumb" />
        <img src="./assets/thumbnails/template-4.png" alt="template 1 thumb" />
      </div>
      <div className="flex flex-row justify-start gap-x-10">
        <img src="./assets/thumbnails/template-5.png" alt="template 1 thumb" />
        <img src="./assets/thumbnails/template-6.png" alt="template 1 thumb" />
        <img src="./assets/thumbnails/template-7.png" alt="template 1 thumb" />
        <img src="./assets/thumbnails/template-8.png" alt="template 1 thumb" />
      </div>
    </div>
  );
};

export default Templates;
