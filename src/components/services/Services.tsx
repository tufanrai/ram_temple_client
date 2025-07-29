import React from "react";
import { OfferingsAndServices } from "@/src/contents/StaticContents";

const Services = () => {
  return (
    <div className="w-full h-screen  px-8 py-4 sm:px-16">
      <h1 className="font-semibold text-xl text-red-500 sm:mx-8">
        Daily and Occasional Activities at Śrī Rāmachandra Temple, Battisputali
      </h1>
      <div>
        {OfferingsAndServices.map((value, index) => (
          <div
            className="px-8 py-4 flex flex-col items-center justify-start"
            key={index}
          >
            <h3 className="font-medium text-lg px-4 w-full text-amber-500 sm:mx-8">
              {value.title}
            </h3>
            <div className="w-full sm:px-8">
              {value.paragraph.map((pg, index) => (
                <p
                  className="font-light text-xs/5 sm:text-sm/5 text-neutral-800 py-2"
                  key={index}
                >
                  {pg}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
