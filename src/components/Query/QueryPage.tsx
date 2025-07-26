"use client";
import React from "react";
import QueryCard from "../cards/QueryCard";
import MediaLinks from "./MediaLinks";
import AratiCharts from "./AratiCharts";
import MariageSetOffer from "./MariageSetOffer";
import SpecialServices from "./SpecialServices";

const QueryPage = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className=" sm:max-w-[1100px] w-full h-screen overflow-x-hidden overflow-y-auto gap-1">
        <div className="w-full h-100 border border-b-1">
          <AratiCharts />
        </div>
        <div className="w-full h-100 border border-b-1">
          <MariageSetOffer />
        </div>
        <div className="w-full h-100 border border-b-1">
          <SpecialServices />
        </div>
        <div className="w-full h-screen flex flex-col items-center justify-start px-16 py-8 sm:flex-row sm:px-8 sm:py-4">
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
