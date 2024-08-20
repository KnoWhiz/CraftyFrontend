"use client";

import React from "react";

interface RoundButtonProps {
  click: Function;
  text: string;
  color: string;
}

const RoundButton: React.FC<RoundButtonProps> = ({ click, text, color }) => {
  const handleClick = () => {
    click();
  };

  return (
    <button
      type="button"
      style={{ cursor: "pointer" }}
      onClick={handleClick}
      className={`h-12 w-44 rounded-full text-2xl font-medium text-main-white transition-transform transform hover:scale-105 active:scale-95 ${
        color === "green"
          ? "bg-button-green"
          : color === "blue"
            ? "bg-button-blue"
            : "bg-button-blue"
      }`}
    >
      {text}
    </button>
  );
};

export default RoundButton;
