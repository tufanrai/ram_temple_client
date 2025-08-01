import React from "react";
import TempleLook from "@/public/TempleLook.jpg";
import { AboutRamTemple } from "@/src/contents/StaticContents";
import Link from "next/link";

const ThirdSectionPage = () => {
  return (
    <div className="w-full">
      <div
        style={{
          backgroundImage: `url('${TempleLook.src}')`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        className="w-full"
      >
        <div className="bg-black/45 sm:bg-linear-to-r sm:from-black/45 sm:to-white/0 w-full">
          <div className="max-w-280 w-full p-12 flex flex-col items-center justify-center">
            <h1 className="w-full bg-red-600 text-white text-lg font-medium px-8 sm:ml-8">
              {" "}
              {AboutRamTemple.at(0)?.title}
            </h1>
            <p className="w-full font-light sm:text-md text-sm text-white p-4 mt-4">
              {AboutRamTemple.at(0)?.paragraphs.at(0)}
            </p>
            <Link href="/about/about-temple">
              <button className="font-medium sm:w-100 w-full text-red-600 hover:text-white sm:text-md text-sm border-2 border-red-600 ease duration-300 cursor-pointer hover:bg-red-600 hover:shadow-red-800 px-5 py-1 mt-8 ">
                Learn More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdSectionPage;
