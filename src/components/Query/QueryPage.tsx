"use client";
import React from "react";
import QueryCard from "../cards/QueryCard";
import MediaLinks from "./MediaLinks";

const QueryPage = () => {
  return (
    <div className="w-full h-screen">
      <div className=" sm:max-w-[1100px] w-full h-screen overflow-x-hidden flex flex-col items-start justify-start overflow-y-auto gap-1">
        <div className="w-full h-screen flex flex-col-reverse items-center justify-start px-16 py-8 sm:flex-row sm:px-8 sm:py-4">
          <MediaLinks />
          <div className="w-full flex flex-col gap-3 sm:border py-4 px-16 sm:rounded-lg">
            <h1 className="font-semibold text-xl text-red-500">Query form</h1>
            <div className="max-w-95">
              <QueryCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QueryPage;
