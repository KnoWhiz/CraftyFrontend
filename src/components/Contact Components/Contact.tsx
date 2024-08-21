"use client";
import React, { useState } from "react";
import InputField from "../Pricing Components/InputField";
import RoundButton from "../RoundButton";

const Contact = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const handleSubmit = () => {
    // Handle submit logic here
    console.log("submitted");
    console.log("Current values:", { name, email, message });

    // Reset input fields
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="flex pt-40 pb-10 px-24 items-center gap-x-20">
      <div className="flex flex-col gap-y-6 justify-start items-baseline h-full w-full font-raleway leading-8">
        <h1 className="text-title font-bold mb-3">Contact</h1>
        <h3 className="text-2xl font-medium">
          We would love to answer any questions or concerns you may have{" "}
        </h3>
        <InputField
          value={name}
          onChange={(e) => setName(e.target.value)}
          label="Name"
          width="1/4"
        />
        <InputField
          label="Email"
          width="1/2"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <InputField
          label="Message"
          width="1/2"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          big
        />
        <div className="flex justify-end w-full">
          <RoundButton click={handleSubmit} text={"Submit"} color={"blue"} />
        </div>
      </div>
    </div>
  );
};

export default Contact;
