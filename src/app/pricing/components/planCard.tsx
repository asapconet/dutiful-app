import React from "react";
import { SecondaryButton } from "@/components/Button";
import { IoCheckmarkSharp } from "react-icons/io5";
import { PlanOption } from "../data/planOptions";

export const PlanCard = ({ name, ...rest }: PlanOption) => {
  return (
    <div className="max-w-[414px] w-full rounded-xl pt-16 bg-white px-6 h-auto">
      <h2 className="text-[1.4rem] font-[500] text-black">{name}</h2>
      <p className="font-[600] my-[1rem] text-black relative">
        {rest.duration !== null ? (
          <>
            <span className="text-[1rem] top-4 absolute">NGN</span>
            <span className="text-[2.9rem] ml-10">{rest.price}</span>
            <span className="text-[1.2rem]">/year</span>
          </>
        ) : (
          <span className="text-[2.9rem] ">{rest.price} </span>
        )}
      </p>

      <SecondaryButton className="w-full h-[78px] ">Get Started</SecondaryButton>

      <div className="flex flex-col gap-6 my-[1rem]">
        {rest.features.map((feature, index) => (
          <div key={index} className="flex items-center gap-6">
            <IoCheckmarkSharp className="text-black" />
            <p className="text-price_text">{feature}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
