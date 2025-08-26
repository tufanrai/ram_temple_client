"use client";
import React, { useEffect, useState } from "react";
import QueryPage from "../Query/QueryPage";
import NewsCards from "../cards/NewsCards";
import { Timeline } from "../DarshanTiming/timeline";
import TempleLook from "@/public/TempleLook.jpg";
import { AboutRamTemple } from "@/src/contents/StaticContents";
import Link from "next/link";
import { Events } from "@/src/contents/StaticContents";
import { FounderOfTemple } from "@/src/contents/StaticContents";
import ShreeRamBanner from "@/public/shreeRamChandrarBanner.jpg";
import { Festivals } from "@/src/contents/StaticContents";

const SecondSectionPage = () => {
  const [events, setEvents] = useState(false);

  useEffect(() => {
    typeof Events.at(0) == "undefined" ? setEvents(true) : setEvents(false);
  }, []);
  console.log(events);
  return (
    <div className="max-w-[1280px] w-full border-2 gap-2 bg-white">
      <div className=" w-full px-8 py-4 border-r-2">
        <h1 className="font-semibold text-lg text-white italic px-8 bg-linear-to-r from-green-800 to-green-950 sm:mx-16">
          Temple Timing
        </h1>
        <div className="w-full max-w-111 h-auto mt-4 sm:mx-16 overflow-hidden">
          <Timeline
            data={[
              { title: "6:30", content: "Morning Prayers" },
              { title: "9:00", content: "Voga aarati" },
              { title: "6:30", content: "sandhya aarati" },
              {
                title: "6:45",
                content: "sayana aarati",
              },
            ]}
          />
        </div>
      </div>
      <div className="w-full block overflwo-hidden">
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
      <div className="w-full h-auto block flex items-center py-6">
        <div className="max-w-[1280px] w-full px-8 sm:px-16">
          <h1 className="font-semibold text-lg text-white bg-linear-to-r from-green-800 to-green-950 px-8">
            What's new?
          </h1>
          <div className="w-full flex items-center justify-evenly mt-8 gap-2">
            {events ? (
              <div className="w-full flex flex-col items-center justify-center text-slate-800/32">
                <h1 className="w-full text-center font-bold text-4xl italic">
                  404
                </h1>
                <p className="w-full text-center font-medium text-sm">
                  No events are being organised
                </p>
              </div>
            ) : (
              <>
                {Events.map((value, index) => (
                  <NewsCards
                    key={index}
                    image={value.image}
                    title={value.title}
                    description={value.paragraph}
                    link=""
                  />
                ))}
              </>
            )}
          </div>
        </div>
      </div>
      <div className="w-full block overflwo-hidden">
        <div
          style={{
            backgroundImage: `url('${ShreeRamBanner.src}')`,
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
                {FounderOfTemple.title}
              </h1>
              <div className="max-w-40 max-h-48 w-full h-screen overflow-hidden rounded-md my-4 shadow-md/40 shadow-stone-300">
                <img src={FounderOfTemple.image} width={"100%"} alt="" />
              </div>
              <p className="w-full font-light sm:text-md text-sm text-white p-4 mt-4">
                {FounderOfTemple.paragraphs.at(0)}
              </p>
              <Link href="/about/founder">
                <button className="font-medium sm:w-100 w-full text-white hover:text-black sm:text-lg text-sm border-2 border-white ease duration-300 cursor-pointer hover:bg-white hover:shadow-red-800 px-5 py-1 mt-8 ">
                  Learn More
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-auto block flex items-center py-6">
        <div className="max-w-[1280px] w-full px-8 sm:px-16">
          <h1 className="font-semibold text-lg text-white bg-linear-to-r from-green-800 to-green-950 px-8">
            Festivals
          </h1>
          <div className="w-full flex items-center justify-evenly mt-8 gap-2">
            {Festivals.map((value, index) => (
              <NewsCards
                key={index}
                image={value.image}
                title={value.title}
                description={value.paragraph}
                link={index.toString()}
              />
            ))}
          </div>
        </div>
      </div>
      <QueryPage />
    </div>
  );
};

export default SecondSectionPage;
