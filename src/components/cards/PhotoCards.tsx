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
          className="sm:max-w-90 sm:max-h-78 w-full h-56 sm:h-screen m-2 border-1 border-green-900 shadow shadow-xl/75 shadow-green-700 rounded-md overflow-hidden"
        ></div>
      ))}
    </>
  );
};
export default PhotoCards;
