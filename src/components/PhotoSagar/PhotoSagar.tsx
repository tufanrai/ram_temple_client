import React from "react";
import PhotoCards from "../cards/PhotoCards";

const PhotoSagar = () => {
  return (
    <div className=" w-full h-screen overflow-x-hidden flex items-start justify-center">
      <div className="max-w-[1280px] w-full h-screen flex flex-wrap border items-start md:gap-[1px] py-4 overflow-y-auto">
        <PhotoCards />
      </div>
    </div>
  );
};

export default PhotoSagar;
