import React from "react";
import PhotoCards from "../cards/PhotoCards";

const PhotoSagar = () => {
  return (
    <div className=" w-full h-screen overflow-x-hidden bg-linear-to-r from-green-800 to-green-950 flex items-start justify-center">
      <div className="max-w-[1280px] w-full h-screen flex flex-wrap items-start justify-start sm:gap-1 px-8 py-4 overflow-y-auto">
        <PhotoCards />
      </div>
    </div>
  );
};

export default PhotoSagar;
