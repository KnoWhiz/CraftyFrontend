import React from "react";
import RoundButton from "../RoundButton";

interface PricingCardProps {
  title: string;
  desc: string;
  price: number;
  onSubscribe: Function;
}

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  desc,
  price,
  onSubscribe,
}) => {
  return (
    <div className="flex flex-col justify-between w-[20rem] h-[25rem] border-solid border-[1px] border-black font-raleway p-6">
      <div>
        <h1 className="text-3xl font-semibold">{title}</h1>
        <p className="text-base leading-6">{desc}</p>
      </div>
      <div>
        <h1 className="text-3xl font-semibold">{price}</h1>
        <p className="text-base leading-6">{desc}</p>
        <RoundButton
          text="Subscribe"
          click={() => {
            onSubscribe();
          }}
          color="blue"
        />
      </div>
    </div>
  );
};

export default PricingCard;
