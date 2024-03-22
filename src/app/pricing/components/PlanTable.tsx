import React from "react";
import { planData, PlanOptions } from "../data/planOptions";
import { SecondaryButton } from "@/components/Button";
import { IoCheckmarkSharp } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";

export const PlanTable = () => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full">
        <thead>
          <tr className="text-price_text text-left">
            <th className="py-4 px-6 text-[1.5rem]">Features & Services</th>
            {PlanOptions.map((plan, idx) => (
              <th key={idx} className="py-4 px-6">
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
              <td className="py-4 px-6 text-price_text text-[1.25rem]">
                {feature}
              </td>

              {values.map((included, index) => (
                <td key={index} className="py-4 px-6 text-center">
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
    </div>
  );
};
