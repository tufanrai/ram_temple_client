import React from "react";
import BannerPage from "../Hero component/BannerPage";
import SecondSectionPage from "../Hero component/SecondSectionPage";

const HeroPage = () => {
  return (
    <div className="max-w-[1920px] w-full h-screen overflow-y-auto overflow-x-hidden flex flex-col items-center justify-start">
      <BannerPage />
      <SecondSectionPage />
    </div>
  );
};

export default HeroPage;
