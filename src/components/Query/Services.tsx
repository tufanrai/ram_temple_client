import React from "react";
import { OfferingsAndServices } from "@/src/contents/StaticContents";

const Services = () => {
  return (
    <div className="w-full h-screen">
      <h1>
        Daily and Occasional Activities at Śrī Rāmachandra Temple, Battisputali
      </h1>
      <div>
        {OfferingsAndServices.map((value, index) => (
          <div key={index}>
            <h3>{value.title}</h3>
            <div>
              {value.paragraph.map((pg, index) => (
                <p key={index}>{pg}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
