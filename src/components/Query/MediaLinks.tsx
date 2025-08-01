import React from "react";
import { FaFacebook, FaTiktok } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const MediaLinks = () => {
  return (
    <>
      <div className="w-full flex items-start justify-center gap-2 py-4 px-8 sm:rounded-s-lg">
        <div className="w-full flex flex-col gap-3">
          <h1 className="font-semibold text-xl text-white border-b sm:border-none  px-8 py-1 sm:bg-red-500 sm:mx-8">
            Follow us!
          </h1>
          <div className="w-full flex items-start sm:mx-16 sm:my-4">
            <ul className="flex flex-col gap-2">
              <li>
                <p className="text-white text-sm flex items-center justify-start gap-2 cursor-pointer hover:underline">
                  <FaFacebook className="text-blue-600 font-bold" /> Shree
                  Ramchandra Mandir
                </p>
              </li>
              <li>
                <p className="text-white text-sm flex items-center justify-start gap-2 cursor-pointer hover:underline">
                  <FaInstagram className="text-rose-600" />{" "}
                  @shreeramchandramandir
                </p>
              </li>
              <li>
                <p className="text-white text-sm flex items-center justify-start gap-2 cursor-pointer hover:underline">
                  <FaTiktok className="text-slate-800" /> Shree Ramchandra
                  Mandir
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default MediaLinks;
