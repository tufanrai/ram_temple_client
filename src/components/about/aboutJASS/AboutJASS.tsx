import React from "react";
import { AboutJass } from "@/src/contents/StaticContents";
import Chairperson from "@/public/Chairperson.png";

const AboutJASS = () => {
  return (
    <div className="w-full h-screen py-4 px-16 overflow-y-auto">
      {AboutJass.map((value, index) => (
        <div
          className="w-full flex flex-col items-start justify-start"
          key={index}
        >
          <h1 className="font-semibold text-lg text-red-600 text-center w-full py-2">
            {value.title}
          </h1>
          <div className="flex items-end justify-center gap-1">
            <div className="w-45 h-58 overflow-hidden rounded-md">
              <img
                src={`${Chairperson.src}`}
                className="object-contain hover:scale-110 ease duration-350"
                width={"100%"}
                alt=""
              />
            </div>
            <span className="text-sm text-slate-500 mb-4">
              - Dr. Goinda Tandon
            </span>
          </div>
          <div className="w-full py-4">
            {value.paragraphs?.map((paragraph, index) => (
              <p
                className="font-light text-xs/5 sm:text-sm/5 text-neutral-800"
                key={index}
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default AboutJASS;
