import React from "react";
import { AboutRamTemple } from "@/src/contents/StaticContents";
import TempleLook from "@/public/TempleLook.jpg";

const AboutTemple = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="w-full h-screen py-10 flex flex-col items-center justify-center overflow-x-hidden overflow-y-auto">
        <h1 className="font-bold text-lg mt-16 text-red-600 sm:px-16">
          {AboutRamTemple.title}
        </h1>
        <div className="w-full px-8 sm:px-16 mt-4">
          <div className="w-full h-screen md:px-16 md:py-8 md:grid md:grid-col-3 sm:gap-2">
            <div className="max-w-[500px] w-full max-h-56 h-screen col-start-2 row-start-1 shadow-lg shadow-neutral-500 border overflow-hidden ease duration-350">
              <img
                src={`${TempleLook.src}`}
                className="object-fill sm:hover:scale-110 ease duration-400"
                width={"100%"}
                alt=""
              />
            </div>
            <div className="w-full">
              {AboutRamTemple.paragraphs?.map((value, index) => (
                <p
                  key={index}
                  className="font-light text-xs/5 sm:text-sm/5 text-neutral-800 py-2"
                >
                  {value}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutTemple;
