import React from "react";
import { PlanCard } from "./components/planCard";
import { PlanOptions } from "./data/planOptions";
import { PlanTable } from "./components/PlanTable";

function Pricing() {
  return (
    <section className="flex flex-col justify-center bg-bg">
      <div className="flex flex-col justify-center mt-[90px] relative">
        <div className="h-[200px] bg-white text-center text-black w-full pt-8">
          <p className="text-[2.1rem] font-bold">
            Plans to Suit Your Business Budget
          </p>
          <p className="text-[1.3rem] recoleta text-center text-gray-500 leading-[1.8rem]">
            Our fully organized plans deliver valuable content that showcases
            your services and skills, <br />
            drives Lead, covers all features, and gives customers a clear idea
            to be able to choose your services.
          </p>
        </div>
        <div className="mx-[2.5rem] flex justify-center mt-[4rem] mb-[1rem] gap-8">
          {PlanOptions.map((option, idx) => (
            <PlanCard
              key={idx}
              name={option.name}
              price={option.price}
              duration={option.duration}
              features={option.features}
            />
          ))}
        </div>
        <h2 className="text-[2rem] text-black lg:mx-[18rem] font-[500] my-[5rem]">
          Features Overview
        </h2>
        <div className="flex justify-center mb-32">
          <PlanTable />
        </div>
      </div>
    </section>
  );
}

export default Pricing;
