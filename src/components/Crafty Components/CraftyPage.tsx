"use client";

import React, { useEffect, useState } from "react";
import Templates from "./Templates";
import Parameters from "./Parameters";

const CraftyPage = () => {
  const [input, setInput] = useState<string>("");
  const [canCraft, setCanCraft] = useState<boolean>(false);
  const [selectedTemplate, setSelectedTemplate] = useState<boolean>(false);
  const [selectedParams, setSelectedParams] = useState<boolean>(false);

  useEffect(() => {
    if (input.trim() !== "" && selectedTemplate && selectedParams) {
      setCanCraft(true);
    } else {
      setCanCraft(false);
    }
  }, [input, selectedParams, selectedTemplate]);

  const handleCrafty = () => {
    // implement video generation stuff
  };

  return (
    <div className="flex pt-40 pb-10 px-24 items-center gap-x-20">
      <div className="flex flex-col gap-y-24 justify-start items-start h-full w-full font-raleway leading-8">
        <div className="flex flex-col justify-start items-start gap-y-6 w-full">
          <h1 className="text-title font-bold mb-3">Craft Content</h1>
          <div className="flex w-full gap-x-12 justify-start items-center">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="w-full rounded-xl h-20 bg-input-gray px-6 placeholder:text-black placeholder:text-opacity-50 text-black font-bold text-xl"
              placeholder='"I would like to learn about..."'
            />
            <button
              type="button"
              style={{ cursor: "pointer" }}
              onClick={canCraft ? handleCrafty : () => {}}
              className={`h-12 w-36 rounded-full text-2xl transition-transform transform hover:scale-105 active:scale-95 ${canCraft ? "bg-button-blue font-bold text-white" : "bg-none border-black border-[1.5px] font-normal text-main-black"}`}
            >
              <div className="flex items-center justify-center gap-x-2">
                <p>Craft</p>
                <svg
                  width="19"
                  height="20"
                  viewBox="0 0 19 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_687_267)">
                    <path
                      d="M8.3125 4.0625L8.90625 2.875L10.0938 2.28125L8.90625 1.6875L8.3125 0.5L7.71875 1.6875L6.53125 2.28125L7.71875 2.875L8.3125 4.0625ZM2.96875 6.4375L3.95809 4.45846L5.9375 3.46875L3.95809 2.47904L2.96875 0.5L1.97941 2.47904L0 3.46875L1.97941 4.45846L2.96875 6.4375ZM16.0312 11.1875L15.0419 13.1665L13.0625 14.1562L15.0419 15.146L16.0312 17.125L17.0206 15.146L19 14.1562L17.0206 13.1665L16.0312 11.1875ZM18.6519 3.99682L15.5032 0.848086C15.2716 0.615781 14.9677 0.5 14.6638 0.5C14.3598 0.5 14.0559 0.615781 13.824 0.848086L0.348086 14.324C-0.115781 14.7878 -0.115781 15.5397 0.348086 16.0032L3.49682 19.1519C3.72875 19.3838 4.03268 19.4996 4.33623 19.4996C4.64016 19.4996 4.94408 19.3838 5.17602 19.1519L18.6519 5.67564C19.1158 5.21252 19.1158 4.46031 18.6519 3.99682ZM13.339 8.05027L11.4497 6.16103L14.6634 2.94736L16.5526 4.8366L13.339 8.05027Z"
                      fill={canCraft ? "white" : "black"}
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_687_267">
                      <rect
                        width="19"
                        height="19"
                        fill="none"
                        transform="translate(0 0.5)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </button>
          </div>
        </div>
        <div className="flex flex-row justify-between w-full">
          <Templates
            onSelect={() => {
              setSelectedTemplate(true);
            }}
          />
          <Parameters
            onValidSelect={() => {
              setSelectedParams(true);
            }}
            onInvalidSelect={() => {
              setSelectedParams(false);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default CraftyPage;
