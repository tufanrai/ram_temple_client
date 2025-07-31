import React from "react";
import { AboutRamTemple } from "@/src/contents/StaticContents";
import TempleLook from "@/public/TempleLook.jpg";
import { url } from "inspector";

const AboutTemple = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center overflow-hidden">
      <div
        style={{
          backgroundImage: `url('${TempleLook.src}')`,
          backgroundSize: "cover",
          backgroundBlendMode: "overlay",
          backgroundRepeat: "no-repeat",
        }}
        className="w-full h-screen py-10 flex flex-col items-center justify-center"
      >
        <div className="w-full h-screen bg-black/45 sm:bg-linear-to-r sm:from-black/75 sm:to-white/0">
          <h1 className="w-full px-8 py-2 font-bold text-lg mt-16 bg-red-600 text-white max-w-280 sm:ml-8 sm:px-16">
            {AboutRamTemple.title}
          </h1>
          <div className="w-full h-screen max-w-150 mt-4 sm:mt-8 sm:max-w-240 px-12 sm:px-16">
            {AboutRamTemple.paragraphs?.map((value, index) => (
              <p
                key={index}
                className="font-medium text-sm/5 sm:text-md/5 text-white/75 sm:text-white py-2"
              >
                {value}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutTemple;
