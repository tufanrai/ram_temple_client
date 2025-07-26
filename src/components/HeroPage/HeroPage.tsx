import React from "react";
import BannerPage from "../Hero component/BannerPage";
import SecondSectionPage from "../Hero component/SecondSectionPage";

const HeroPage = () => {
  return (
    <div className="w-full h-screen overflow-y-auto overflow-x-hidden">
      <BannerPage />
      <SecondSectionPage />
    </div>
  );
};

export default HeroPage;
