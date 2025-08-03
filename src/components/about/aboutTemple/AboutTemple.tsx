import React from "react";
import { AboutRamTemple } from "@/src/contents/StaticContents";
import TempleLook from "@/public/TempleLook.jpg";

const AboutTemple = () => {
  return (
    <div
      style={{
        backgroundImage: `url('${TempleLook.src}')`,
        backgroundSize: "cover",
        backgroundBlendMode: "overlay",
        backgroundRepeat: "no-repeat",
      }}
      className="w-full h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="w-full h-screen overflow-y-auto bg-black/45 sm:bg-linear-to-r sm:from-black/75 sm:to-white/0">
        {AboutRamTemple.map((value, index) => (
          <div key={index} className="mb-8">
            <h1 className="w-full px-8 py-2 font-bold text-lg mt-16 bg-linear-to-r italic from-green-800 to-green-950 text-white max-w-280 sm:ml-8 sm:px-16">
              {value.title}
            </h1>
            <div className="w-full max-w-150 mt-4 sm:mt-8 sm:max-w-240 px-12 sm:px-16">
              {value?.paragraphs.map((paragraph, key) => (
                <p
                  key={key}
                  className="font-medium text-sm/5 sm:text-md/5 text-white/75 sm:text-white py-2"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutTemple;
