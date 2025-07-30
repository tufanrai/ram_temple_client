import React from "react";

interface IProps {
  image: string;
  description: string;
}

const NewsCards = (props: IProps) => {
  return (
    <div className="w-full max-w-60 xl:max-w-80 xl:h-90 grid grid-row-2 h-65 border overflow-hidden">
      <div className="w-full h-40 xl:h-60 overflow-hidden row-span-3">
        <img
          // @ts-ignore
          src={`${props.image.src}`}
          width={"100%"}
          className=" object-fill scale-102 hover:scale-110 ease duration-300"
          alt=""
        />
      </div>
      <div className="w-full h-30 xl:h-40 row-span-2 border">
        <p className="w-full px-4 py-4 text-start font-light text-black/55 text-sm xl:text-lg">
          {props.description}
        </p>
      </div>
    </div>
  );
};

export default NewsCards;
