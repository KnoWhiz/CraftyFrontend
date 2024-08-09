/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState } from "react";
import SignUpPopup from "./SignUpPopup";

const Demo = () => {
  const [showPopup, setShowPopup] = useState<boolean>(false);

  const handleSignUp = () => {
    setShowPopup(true);
  };

  return (
    <div className="h-full font-Inter">
      <div className="bg-main-blue w-full h-1/2 mt-24">
        <div className="flex flex-col justify-center items-center">
          <div
            id="demo text"
            className="flex flex-col mb-1 mt-20 items-center justify-center text-main-black"
          >
            <h1 className="text-title font-semibold text-main-black">
              Craft Compelling Courses with Ease
            </h1>
            <h2 className="mb-4 text-2xl font-medium">
              Turn learning objectives into AI-powered videos that empower your
              students
            </h2>
          </div>
          <img
            src="assets/LandingPagePlaceholder.png"
            alt="Placeholder"
            className="mt-3 w-4/5 mb-16"
          />
          <button
            type="button"
            style={{ cursor: "pointer" }}
            onClick={handleSignUp}
            className="h-12 w-44 rounded-lg bg-button-blue text-2xl font-medium text-main-white mb-24"
          >
            Sign Up
          </button>
        </div>
      </div>
      {showPopup && (
        <SignUpPopup
          onClose={() => {
            setShowPopup(false);
          }}
          onSubmit={() => {
            setShowPopup(false);
          }}
        />
      )}
    </div>
  );
};

export default Demo;
