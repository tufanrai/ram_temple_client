import React from "react";
import ShreeRamBanner from "@/public/shreeRamChandrarBanner.jpg";
import { FounderOfTemple } from "../../../contents/StaticContents";

const AboutFounder = () => {
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
        <div className="w-full h-auto flex flex-col items-center justify-start bg-black/64 sm:bg-linear-to-r sm:from-black/75 sm:to-white/0 sm:px-16">
          <h1 className="w-full px-8 py-2 font-bold text-lg mt-16 bg-linear-to-r italic from-green-800 to-green-950 text-white max-w-280 sm:text-center sm:ml-8 sm:px-16">
            {FounderOfTemple.title}
          </h1>
          <div className="flex items-end justify-start gap-1 ml-8 mt-8">
            <div className="w-45 h-58 overflow-hidden rounded-md">
              <img
                src={`${FounderOfTemple.image}`}
                className="object-contain hover:scale-110 ease duration-350"
                width={"100%"}
                alt=""
              />
            </div>
            <span className="text-sm text-slate-300 mb-4">
              -{FounderOfTemple.name}
            </span>
          </div>
          <div className="w-full max-w-150 mt-4 sm:mt-8 sm:max-w-240 px-12 sm:px-16">
            {FounderOfTemple.paragraphs?.map((paragraph, index) => (
              <p
                className="font-medium text-sm/5 sm:text-md/5 text-white/80 py-2"
                key={index}
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutFounder;
