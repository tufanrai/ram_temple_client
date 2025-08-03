import React from "react";
import NewsCards from "../cards/NewsCards";
import { Timeline } from "../DarshanTiming/timeline";

const SecondSectionPage = () => {
  return (
    <div className="max-w-[1280px] w-full py-4 flex flex-col-reverse sm:grid sm:grid-cols-2 items-center justify-start gap-2 bg-green-100/24">
      <div className=" w-full px-8 py-4">
        <h1 className="font-semibold text-lg text-white italic px-8 bg-linear-to-r from-green-800 to-green-950 sm:mx-16">
          Temple Timing
        </h1>
        <div className="w-full max-w-111 h-80 overflow-y-auto mt-4 sm:mx-16">
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
      <div className="w-full flex flex-col items-center justify-between">
        <div className="w-full px-8 py-4 flex flex-col gap-4">
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
      </div>
    </div>
  );
};

export default SecondSectionPage;
