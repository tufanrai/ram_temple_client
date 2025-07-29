"use client";
import React from "react";
import Services from "../services/Services";

const ServicePage = () => {
  return (
    <div className="w-full h-screen">
      <div className=" sm:max-w-[1100px] w-full h-screen overflow-x-hidden flex flex-col items-start justify-start overflow-y-auto gap-1">
        <Services />
      </div>
    </div>
  );
};

export default ServicePage;
