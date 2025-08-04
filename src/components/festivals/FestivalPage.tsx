"use client";
import React from "react";
import { Festivals } from "@/src/contents/StaticContents";
import { useRouter } from "next/navigation";

const FestivalPage = () => {
  const router = useRouter();
  const SaveFestivalId = (id: number) => {
    sessionStorage.setItem("festivId", id.toString());
    router.replace(`/festivals/${id.toString()}`);
  };
  return (
    <div className="max-w-[1280px] w-full h-auto border">
      <div className="w-full h-auto px-8 sm:px-16 py-4 sm:py-8">
        <h1 className="font-semibold text-lg text-white italic bg-linear-to-r from-green-800 to-green-950 px-8 sm:px-16 py-1">
          Festivals!
        </h1>
        <div className="w-full border-b-1 border-slate-500 p-4">
          {Festivals.map((value, index) => (
            <div
              className="w-full flex items-center justify-between cursor-pointer"
              onClick={() => SaveFestivalId(index)}
              key={index}
            >
              <div className="max-w-[25%] h-26 px-4 py-1 overflow-hidden">
                <h3 className="font-bold text-lg">{value.title}</h3>
                <p className="font-light text-sm text-slate-600/64">
                  {value.paragraph.at(0)?.split("")}
                </p>
              </div>
              <div className="max-w-50 rounded-md overflow-hidden">
                <img src={value.image} width={"100%"} alt="" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FestivalPage;
