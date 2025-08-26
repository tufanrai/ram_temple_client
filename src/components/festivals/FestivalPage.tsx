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
        <div className="w-full p-4">
          {Festivals.map((value, index) => (
            <div
              className="w-full cursor-pointer border-b-1 border-slate-500 mt-4 py-2"
              onClick={() => SaveFestivalId(index)}
              key={index}
            >
              <div
                style={{
                  backgroundImage: `url('${value.image}')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
                className="w-full h-26 px-4 py-2 overflow-hidden rounded-sm flex items-center justify-center"
              >
                <h3 className="font-bold text-lg text-white">{value.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FestivalPage;
