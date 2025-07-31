import React from "react";
import SecondSectionPage from "../Hero component/SecondSectionPage";
import Carousel from "@/src/components/Hero component/Carousel";
import img1 from "@/public/shreeRamChandrarBanner.jpg";
import img2 from "@/public/TempleLook.jpg";
import img4 from "@/public/DeviteesOfShreeRam.jpg";
import img3 from "@/public/ShreeRamDevotee2.jpg";

const HeroPage = () => {
  const slides = [img1.src, img2.src, img3.src, img4.src];
  return (
    <div className="max-w-[1820px] w-full flex flex-col items-center justify-start">
      <div className="w-full h-screen overflow-hidden">
        <Carousel autoSlide slides={slides} />
      </div>
      <SecondSectionPage />
    </div>
  );
};

export default HeroPage;
