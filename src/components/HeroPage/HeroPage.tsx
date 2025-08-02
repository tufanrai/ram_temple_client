import React from "react";
import SecondSectionPage from "../Hero component/SecondSectionPage";
import Carousel from "@/src/components/Hero component/Carousel";
import img1 from "@/public/shreeRamChandrarBanner.jpg";
import img2 from "@/public/TempleLook.jpg";
import img4 from "@/public/DeviteesOfShreeRam.jpg";
import img3 from "@/public/ShreeRamDevotee2.jpg";
import ThirdSectionPage from "../Hero component/ThirdSectionPage";

const HeroPage = () => {
  const slides = [img1.src, img2.src, img3.src, img4.src];
  return (
    <div className="max-w-[1820px] w-full flex flex-col items-center justify-start overflow-x-hidden overflow-y-auto">
      <div className="w-full max-h-80 sm:max-h-screen overflow-hidden">
        <Carousel autoSlide slides={slides} />
      </div>
      <SecondSectionPage />
      <ThirdSectionPage />
    </div>
  );
};

export default HeroPage;
