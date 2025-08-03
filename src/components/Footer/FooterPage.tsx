import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import Logo from "@/public/Logo.png";

const FooterPage = () => {
  return (
    <div className=" w-full h-32 flex items-center justify-center overflow-hidden px-8 sm:px-32 sm:py-8 bg-black">
      <div className="max-w-[1280px] w-full flex items-center justify-center">
        <div className="flex flex-col items-end justify-center text-white gap-2">
          <FaFacebook className="hover:text-blue-500 cursor-pointer ease duration-300" />
          <FaInstagram className="hover:text-rose-600 cursor-pointer ease duration-300" />
          <FaTiktok className="hover:text-slate-500 cursor-pointer ease duration-300" />
        </div>
        <hr className="w-30 bg-red-500 rotate-90" />
        <div className="w-full text-white flex flex-col items-start justify-center gep-3 font-light text-xs sm:text-sm">
          <strong>+01-4598526</strong>
          <strong>Batisputali, Kathmandu</strong>
          <strong>shreramchandra@gmail.com</strong>
        </div>
      </div>
      <div className="p-1 w-14 h-14 sm:w-24 sm:h-24">
        <img
          src={Logo.src}
          width={"100%"}
          className="object-contain object-center"
          alt=""
        />
      </div>
    </div>
  );
};

export default FooterPage;
