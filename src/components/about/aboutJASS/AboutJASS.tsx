import React from "react";
import { AboutJass } from "@/src/contents/StaticContents";
import ShreeRamBanner from "@/public/shreeRamChandrarBanner.jpg";

const AboutJASS = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center block">
      <div
        style={{
          backgroundImage: `url('${ShreeRamBanner.src}')`,
          backgroundSize: "cover",
          backgroundBlendMode: "overlay",
          backgroundRepeat: "no-repeat",
        }}
        className="w-full h-screen flex"
      >
        {AboutJass.map((value, index) => (
          <div
            className="w-full h-screen flex flex-col items-center justify-start overflow-hidden overflow-y-auto bg-black/45 sm:bg-linear-to-r sm:from-black/75 sm:to-white/0 sm:px-16"
            key={index}
          >
            <h1 className="w-full px-8 py-2 font-bold text-lg mt-16 bg-linear-to-r italic from-green-800 to-green-950 text-white max-w-280 sm:text-center sm:ml-8 sm:px-16">
              {value.title}
            </h1>
            <div className="flex items-end justify-start gap-1 ml-8 mt-8">
              <div className="w-45 h-58 overflow-hidden rounded-md">
                <img
                  src={`${value.image}`}
                  className="object-contain hover:scale-110 ease duration-350"
                  width={"100%"}
                  alt=""
                />
              </div>
              <span className="text-sm text-slate-300 mb-4">{value.name}</span>
            </div>
            <div className="w-full max-w-150 mt-4 sm:mt-8 sm:max-w-240 px-12 sm:px-16">
              {value.paragraphs?.map((paragraph, index) => (
                <p
                  className="font-medium text-sm/5 sm:text-md/5 text-white/75 sm:text-white py-2"
                  key={index}
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

export default AboutJASS;
