import React from "react";
import NewsCards from "../cards/NewsCards";

const SecondSectionPage = () => {
  return (
    <div className="w-full py-4 flex flex-col-reverse sm:grid sm:grid-cols-2 items-center justify-start gap-2 bg-red-300/20">
      <div className="w-full px-8 py-4">
        <h1 className="font-semibold text-lg text-red-500 sm:mx-16">
          Temple Timing
        </h1>
        <div className="w-full max-w-125 px-24 py-8">
          Here will be the image of the arati timing.
        </div>
      </div>
      <div className="w-full flex flex-col items-center justify-between">
        <div className="w-full px-8 py-4 flex flex-col gap-4">
          <h1 className="font-semibold text-lg text-red-500">What's new?</h1>
          <div className="w-full flex items-center justify-start gap-2">
            {/* New Events new card sectin */}{" "}
            <NewsCards
              image="str"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt ratione
          omnis a at voluptates"
            />{" "}
            <NewsCards
              image="str"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt ratione
          omnis a at voluptates"
            />{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondSectionPage;
