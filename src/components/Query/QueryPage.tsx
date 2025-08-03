"use client";
import React from "react";
import QueryCard from "../cards/QueryCard";
import MediaLinks from "./MediaLinks";
import Logo from "@/public/Logo.png";

const QueryPage = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div
        style={{
          backgroundImage: `url('${Logo.src}')`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
        className="w-full h-screen overflow-x-hidden flex flex-col items-center justify-start overflow-y-auto gap-1"
      >
        <div className="w-full h-screen bg-black/58 sm:bg-linear-to-r flex justify-center sm:from-black/45 sm:to-white/0">
          <div className="max-w-[1280px] w-full flex flex-col-reverse items-center justify-start px-8 sm:px-16 py-8 sm:flex-row sm:items-center sm:justify-center sm:px-8 sm:py-4">
            <MediaLinks />
            <div className="w-full flex flex-col rounded-sm border-[1px] border-black/24 bg-black/14 gap-3 shadow-lg py-4 px-8 sm:px-16 sm:rounded-lg">
              <h1 className="font-semibold text-xl border-b text-white py-1 text-center">
                Query form
              </h1>
              <div className="max-w-150">
                <QueryCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QueryPage;
