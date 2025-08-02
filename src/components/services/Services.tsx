import React from "react";
import { OfferingsAndServices } from "@/src/contents/StaticContents";

const Services = () => {
  return (
    <div className="max-w-[1280px] w-full h-screen py-8">
      <h1 className="w-full px-8 py-2 font-bold text-lg mt-16 bg-red-600 text-white max-w-280 sm:ml-8 sm:px-16">
        Daily and Occasional Activities at Śrī Rāmachandra Temple, Battisputali
      </h1>
      <div>
        {OfferingsAndServices.map((value, index) => (
          <div
            className="w-full flex flex-col items-center justify-start"
            key={index}
          >
            <h3 className="w-full px-8 py-1 font-semibold text-lg mt-4 bg-amber-500 text-white">
              {value.title}
            </h3>
            <div className="max-w-1000 w-full px-8 py-4">
              {value.paragraph.map((pg, index) => (
                <p
                  className="font-medium text-sm/5 sm:text-md/5 text-white/75 sm:text-white py-2"
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
