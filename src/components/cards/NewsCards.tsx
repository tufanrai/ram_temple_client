"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";

interface IProps {
  image: string;
  title: string;
  description: string[];
  link: string;
}

const NewsCards = (props: IProps) => {
  const router = useRouter();
  const redirectPage = (id: string) => {
    router.replace(`festivals/${id}`);
  };
  return (
    <div
      onClick={() => redirectPage(props.link)}
      className="w-full max-w-60 border-1 border-green-900/50 grid grid-row-2 h-65 bg-white overflow-hidden rounded-lg"
    >
      <div className="w-full h-40 overflow-hidden row-span-3">
        <img
          src={`${props.image}`}
          width={"100%"}
          className=" object-fill scale-102 hover:scale-110 ease duration-300"
        />
      </div>
      <div className="w-full h-30 row-span-2 border bg-slate-600/13 p-4 flex flex-col items-center justify-center">
        <h3 className="w-full font-medium text-lg text-black text-center">
          {props.title}
        </h3>
      </div>
    </div>
  );
};

export default NewsCards;
