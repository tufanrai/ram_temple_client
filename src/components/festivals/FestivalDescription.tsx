"use client";
import React from "react";
import { Festivals } from "@/src/contents/StaticContents";

const FestivalDescription = () => {
  let id;
  if (typeof window !== "undefined") {
    id = sessionStorage.getItem("festivId");
  }
  return (
    <div
      style={{
        backgroundImage: `url('${Festivals.at(parseInt(id ?? ""))?.image}')`,
        backgroundSize: "cover",
        backgroundPosition: "left",
        backgroundRepeat: "no-repeat",
      }}
      className="w-full h-auto"
    >
      <div className="w-full h-auto bg-black/56 sm:bg-linear-to-r from-black/36 to-white/0 flex justify-center">
        <div className="max-w-[1280px] w-full h-auto px-4 sm:px-16 py-4 sm:py-8">
          <h3 className="w-full px-8 py-2 font-bold text-lg mt-16 bg-linear-to-r italic from-green-800 to-green-950 text-white max-w-280 sm:px-16 mb-8 sm:mb-12">
            {Festivals.at(parseInt(id ?? ""))?.title}
          </h3>
          {Festivals.at(parseInt(id ?? ""))?.paragraph?.map((para, index) => (
            <p
              className="px-4 sm:px-16 font-medium text-sm/5 sm:text-md/5 text-white/75 sm:text-white py-2"
              key={index}
            >
              {para}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FestivalDescription;
