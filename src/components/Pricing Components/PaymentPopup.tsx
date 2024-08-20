import React, { useEffect, useState } from "react";
import InputField from "./InputField";
import RoundButton from "../RoundButton";

interface PaymentPopupProps {
  close: () => void;
  submit: () => void;
}

const PaymentPopup: React.FC<PaymentPopupProps> = ({ close, submit }) => {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [input3, setInput3] = useState("");
  const [input4, setInput4] = useState("");
  const [input5, setInput5] = useState("");
  const [canPay, setCanPay] = useState(false);

  useEffect(() => {
    // Check if all inputs are filled
    if (input1 && input2 && input3 && input4 && input5) {
      setCanPay(true);
    } else {
      setCanPay(false);
    }
  }, [input1, input2, input3, input4, input5]);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center font-raleway">
      <div className="fixed bg-main-white w-[60rem] h-[40rem] px-24 py-12">
        <svg
          width="21"
          height="19"
          viewBox="0 0 21 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={close}
          cursor="pointer"
          className="absolute top-6 left-6"
        >
          <path
            d="M10.5 11.3973L3.35421 18.2361C3.08685 18.492 2.74657 18.6199 2.33337 18.6199C1.92018 18.6199 1.5799 18.492 1.31254 18.2361C1.04518 17.9802 0.911499 17.6546 0.911499 17.2591C0.911499 16.8637 1.04518 16.538 1.31254 16.2822L8.45837 9.44338L1.31254 2.60459C1.04518 2.34872 0.911499 2.02306 0.911499 1.62762C0.911499 1.23218 1.04518 0.906528 1.31254 0.650655C1.5799 0.394782 1.92018 0.266846 2.33337 0.266846C2.74657 0.266846 3.08685 0.394782 3.35421 0.650655L10.5 7.48944L17.6459 0.650655C17.9132 0.394782 18.2535 0.266846 18.6667 0.266846C19.0799 0.266846 19.4202 0.394782 19.6875 0.650655C19.9549 0.906528 20.0886 1.23218 20.0886 1.62762C20.0886 2.02306 19.9549 2.34872 19.6875 2.60459L12.5417 9.44338L19.6875 16.2822C19.9549 16.538 20.0886 16.8637 20.0886 17.2591C20.0886 17.6546 19.9549 17.9802 19.6875 18.2361C19.4202 18.492 19.0799 18.6199 18.6667 18.6199C18.2535 18.6199 17.9132 18.492 17.6459 18.2361L10.5 11.3973Z"
            fill="#1C1B1F"
          />
        </svg>
        <div className="flex flex-col justify-start items-start w-full h-full gap-y-10">
          <h1 className="text-3xl font-semibold">Payment</h1>
          <InputField
            value={input1}
            onChange={(e) => setInput1(e.target.value)}
            label="Cardholder Name"
            width="full"
          />
          <div className="flex flex-row justify-start items-start gap-x-6 w-full">
            <InputField
              value={input2}
              onChange={(e) => setInput2(e.target.value)}
              label="Card Number"
              width="1/2"
            />
            <InputField
              value={input3}
              onChange={(e) => setInput3(e.target.value)}
              label="Expiration"
              width="1/4"
            />
            <InputField
              value={input4}
              onChange={(e) => setInput4(e.target.value)}
              label="CVV"
              width="1/4"
            />
          </div>
          <div className="flex flex-row justify-start items-center gap-x-6 w-full">
            <InputField
              value={input5}
              onChange={(e) => setInput5(e.target.value)}
              label="Zip Code"
              width="1/2"
            />
            {/* vvv to get same spacing on zip code & card number fields vvv */}
            <div className="w-1/4 h-2" />
            <div className="w-1/4 h-2" />
          </div>
        </div>
        <div className="absolute bottom-12 right-24">
          <RoundButton
            click={submit}
            text="Purchase"
            color={canPay ? "green" : "none"}
            {...(canPay ? {} : { border: true, textColor: "main-black" })}
          />
        </div>
      </div>
    </div>
  );
};

export default PaymentPopup;
