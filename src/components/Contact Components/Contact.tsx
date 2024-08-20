"use client";
import React from "react";
import InputField from "../Pricing Components/InputField";
import RoundButton from "../RoundButton";

const Contact = () => {
  const handleSubmit = () => {
    // handle submit
  };

  return (
    <div className="flex pt-40 pb-10 px-24 items-center gap-x-20 h-full">
      <div className="flex flex-col gap-y-6 justify-start items-baseline h-full w-1/2 font-raleway leading-8">
        <h1 className="text-title font-bold mb-3">Contact</h1>
        <h3 className="text-2xl font-medium">
          We would love to answer any questions or concerns you may have{" "}
        </h3>
        <InputField label="Name" width="1/2" />
        <InputField label="Email" width="full" />
        <InputField label="Message" width="full" height="64" />
      </div>
      <div className="flex flex-col-reverse justify-start items-end h-full w-1/2">
        <RoundButton click={handleSubmit} text={"Submit"} color={"blue"} />
      </div>
    </div>
  );
};

export default Contact;
