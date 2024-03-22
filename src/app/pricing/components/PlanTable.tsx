import React from "react";
import { planData, PlanOptions } from "../data/planOptions";
import { SecondaryButton } from "@/components/Button";
import { IoCheckmarkSharp } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";

export const PlanTable = () => {
  return (
    <table className="w-full max-w-[1312px] px-4">
      <thead className="w-full">
        <tr className="text-price_text text-left">
          <th className="text-[1.5rem]">Features & Services</th>
          {PlanOptions.map((plan, idx) => (
            <th key={idx} className=" px-8">
              {plan.name}
              <SecondaryButton className="w-[244px] h-[51px] my-[1rem]">
                Get Started
              </SecondaryButton>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {Object.entries(planData).map(([feature, values], index) => (
          <tr
            key={index}
            className={`text-black ${
              index % 2 === 0 ? "bg-white" : "bg-transparent"
            } h-[58px] rounded-md`}
          >
            <td className="w-[32.5%] text-price_text text-[1.25rem]">
              {feature}
            </td>

            {values.map((included, index) => (
              <td key={index} className="w-[22.5%] text-center">
                {included === true ? (
                  <span className="flex justify-center items-center">
                    <IoCheckmarkSharp className="text-primary " size={30} />
                  </span>
                ) : included === false ? (
                  <span className="flex justify-center items-center">
                    <IoMdClose className="text-disabled_text " size={28} />
                  </span>
                ) : (
                  included.toString()
                )}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
