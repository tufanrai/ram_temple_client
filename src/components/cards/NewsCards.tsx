import React from "react";

interface IProps {
  image: string;
  title: string;
  description: string[];
}

const NewsCards = (props: IProps) => {
  return (
    <div className="w-full max-w-60 border-1 border-green-900/50 grid grid-row-2 h-65 bg-white overflow-hidden rounded-lg">
      <div className="w-full h-40 overflow-hidden row-span-3">
        <img
          src={`${props.image}`}
          width={"100%"}
          className=" object-fill scale-102 hover:scale-110 ease duration-300"
        />
      </div>
      <div className="w-full h-30 row-span-2 border p-4">
        <h3 className="font-medium text-md text-black">{props.title}</h3>
      </div>
    </div>
  );
};

export default NewsCards;
