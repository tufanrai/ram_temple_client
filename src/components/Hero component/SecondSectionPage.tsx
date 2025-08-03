import React from "react";
import NewsCards from "../cards/NewsCards";
import { Timeline } from "../DarshanTiming/timeline";
import TempleLook from "@/public/TempleLook.jpg";
import { AboutRamTemple } from "@/src/contents/StaticContents";
import Link from "next/link";

const SecondSectionPage = () => {
  return (
    <div className="max-w-[1280px] w-full py-4 flex flex-col-reverse sm:grid sm:grid-cols-2 items-center justify-start border-2 gap-2 bg-white">
      <div className=" w-full px-8 py-4 border-r-2">
        <h1 className="font-semibold text-lg text-white italic px-8 bg-linear-to-r from-green-800 to-green-950 sm:mx-16">
          Temple Timing
        </h1>
        <div className="w-full max-w-111 h-auto mt-4 sm:mx-16">
          <Timeline
            data={[
              { title: "6:30", content: "Morning Prayers" },
              { title: "9:00", content: "Voga aarati" },
              { title: "6:30", content: "sandhya aarati" },
              { title: "6:45", content: "sayana aarati" },
            ]}
          />
        </div>
      </div>
      <div className="w-full h-screen flex flex-col items-center justify-evenly gap-4">
        <div className="w-full px-8 py-4 flex flex-col  gap-4">
          <h1 className="font-semibold text-lg text-white bg-linear-to-r from-green-800 to-green-950 px-8">
            What's new?
          </h1>
          <div className="w-full flex items-center justify-evenly gap-2">
            <NewsCards
              image="str"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt ratione
          omnis a at voluptates"
            />
            <NewsCards
              image="str"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt ratione
          omnis a at voluptates"
            />
          </div>
        </div>
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
                <h1 className="w-full bg-linear-to-r from-green-800 to-green-950 text-white text-lg font-medium italic px-8 sm:ml-8">
                  {" "}
                  {AboutRamTemple.at(0)?.title}
                </h1>
                <p className="w-full font-light sm:text-md text-sm text-white p-4 mt-4">
                  {AboutRamTemple.at(0)?.paragraphs.at(0)}
                </p>
                <Link href="/about/about-temple">
                  <button className="font-medium sm:w-100 w-full text-white hover:text-black sm:text-lg text-sm border-2 border-white ease duration-300 cursor-pointer hover:bg-white hover:shadow-red-800 px-5 py-1 mt-8 ">
                    Learn More
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondSectionPage;
