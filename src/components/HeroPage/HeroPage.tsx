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
    <div className=" w-full flex flex-col items-center justify-start overflow-x-hidden overflow-y-auto bg-linear-to-r from-green-800 to-green-950">
      <div className="max-w-[1280px] w-full overflow-hidden">
        <Carousel autoSlide slides={slides} />
      </div>
      <SecondSectionPage />
      <ThirdSectionPage />
    </div>
  );
};

export default HeroPage;
