"use client";
import React from "react";
import Services from "../services/Services";
import Temple from "@/public/shreeRamChandrarBanner.jpg";

const ServicePage = () => {
  return (
    <div
      style={{
        backgroundImage: `url('${Temple.src}')`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="w-full h-screen flex items-center justify-center"
    >
      <div className="bg-black/45 sm:bg-linear-to-r sm:from-black/75 sm:to-white/0 w-full h-screen overflow-x-hidden flex flex-col items-center justify-start gap-1">
        <Services />
      </div>
    </div>
  );
};

export default ServicePage;
