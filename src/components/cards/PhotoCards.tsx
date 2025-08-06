import React from "react";
import { Gallery } from "@/src/contents/StaticContents";

const PhotoCards = () => {
  return (
    <>
      {Gallery.map((value, index) => (
        <div
          key={index}
          style={{
            backgroundImage: `url('${value.url}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
          className="sm:max-w-90 sm:max-h-78 w-full h-56 sm:h-screen m-2 shadow shadow-xl/75 shadow-green-700 sm:rounded-md sm:overflow-hidden"
        ></div>
      ))}
    </>
  );
};
export default PhotoCards;
