/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState } from "react";
import SignUpPopup from "./SignUpPopup";
import RoundButton from "../RoundButton";

const Introduction = () => {
  const [showPopup, setShowPopup] = useState<boolean>(false);

  const handleSignUp = () => {
    setShowPopup(true);
  };

  return (
    <div className="relative font-raleway bg-gradient-to-b from-main-blue to-white from-60% to-0%">
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col mb-1 mt-48 items-center justify-center text-main-black">
          <h1 className="text-title font-bold text-main-black">
            Craft Compelling Courses with Ease
          </h1>
          <h2 className="mb-4 text-3xl font-semibold">
            Turn learning objectives into AI-powered videos that empower your
            students
          </h2>
        </div>
        <img
          src="assets/illustrations/landingpage-placeholder.png"
          alt="Placeholder"
          className="mt-3 w-4/5 mb-16"
        />
        <div className="flex flex-row items-center justify-center gap-x-6">
          <h1 className="text-3xl font-bold">Get early access today!</h1>
          <RoundButton text="Sign Up" color="blue" click={handleSignUp} />
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

export default Introduction;
