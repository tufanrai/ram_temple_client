import React from "react";
import { AboutRamTemple } from "@/src/contents/HistoryOfTemple";
import TempleLook from "@/public/TempleLook.jpg";

const AboutTemple = () => {
  return (
    <div className="w-full h-screen px-8 py-10 flex flex-col items-center justify-center overflow-hidden">
      <h1 className="font-bold text-lg mt-6 text-red-600 sm:px-16">
        {AboutRamTemple.title}
      </h1>
      <div className="w-full h-screen sm:px-16 sm:py-8 flex flex-col-reverse items-start justify-center sm:flex-row sm:items-start sm:justify-start gap-2">
        <div className="sm:max-w-110 w-full mt-4 sm:px-10">
          {AboutRamTemple.paragraphs?.map((value, index) => (
            <span
              className="font-light text-xs/5 sm:text-sm/5 text-neutral-800"
              key={index}
            >
              <p className="w-full py-2">{value}</p>
            </span>
          ))}
        </div>
        <div className="sm:max-w-134 w-full shadow-lg shadow-neutral-500 rounded-md sm:border overflow-hidden ease duration-350 sm:hover:rotate-[-2deg] sm:hover:rotate-0">
          <img
            src={`${TempleLook.src}`}
            className="object-fill sm:hover:scale-110 ease duration-400"
            width={"100%"}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default AboutTemple;
