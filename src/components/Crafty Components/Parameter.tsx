import React, { useState } from "react";

interface ParameterProps {
  title: string;
  desc: string;
  isDropdown: boolean;
  getInput?: (e: any) => void;
  defaultValue?: number;
}

const Parameter: React.FC<ParameterProps> = ({
  title,
  desc,
  isDropdown,
  getInput,
  defaultValue,
}) => {
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const [dropdownValue, setDropdownValue] = useState<number>(0);

  return (
    <div className="flex flex-col justify-start items-between w-full">
      <h3 className="font-medium text-2xl">{title}</h3>
      <div className="flex flex-row justify-between items-center gap-x-12">
        <p className="text-base font-normal">{desc}</p>
        {isDropdown ? (
          <div
            className="relative flex flex-col gap-y-1 cursor-pointer"
            onClick={() => {
              showDropdown ? setShowDropdown(false) : setShowDropdown(true);
            }}
          >
            <div className="w-24 h-10 bg-main-white rounded-2xl border-2 border-black px-4 flex items-center justify-center text-xl text-center relative">
              <p>{dropdownValue}</p>
              <div className="absolute top-1/2 right-3">
                <svg
                  width="10"
                  height="4"
                  viewBox="0 0 10 4"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{
                    transform: showDropdown ? "scaleY(-1)" : "scaleY(1)",
                  }}
                >
                  <path
                    d="M4.99967 3.68751L0.833008 0.0416756H9.16634L4.99967 3.68751Z"
                    fill="#1C1B1F"
                  />
                </svg>
              </div>
            </div>
            {showDropdown && (
              <div className="w-24 bg-main-white top-11 z-10 rounded-2xl border-2 border-black flex flex-col items-center justify-center text-xl absolute overflow-hidden">
                {[...Array(11)].map((_, index) => (
                  <div
                    className="relative drop-shadow-lg cursor-pointer w-full text-center hover:bg-main-gray hover:drop-shadow-none"
                    key={index}
                    onClick={() => {
                      setDropdownValue(index);
                      setShowDropdown(false);
                    }}
                  >
                    {index}
                  </div>
                ))}
              </div>
            )}
          </div>
        ) : (
          <input
            className="w-24 h-10 rounded-2xl border-2 border-black px-4 text-center"
            defaultValue={defaultValue}
            onChange={getInput}
          />
        )}
      </div>
    </div>
  );
};

export default Parameter;
