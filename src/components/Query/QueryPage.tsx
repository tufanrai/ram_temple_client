"use client";
import React from "react";
import QueryCard from "../cards/QueryCard";
import { FaFacebook, FaTiktok } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import qrCode from "@/public/Demo-QR.png";

const QueryPage = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className=" sm:max-w-[1100px] w-full h-screen overflow-x-hidden overflow-y-auto">
        <div className="w-full h-screen">
          <div>
            <h1>This is the section to talk about the facitii</h1>
          </div>
          <div></div>
          <div></div>
        </div>
        <div className="w-full h-screen flex flex-col items-center justify-start px-16 py-8 sm:flex-row sm:px-8 sm:py-4">
          <div className="w-full flex items-center justify-center sm:flex-col gap-2 sm:items-center sm:justify-start bg-neutral-500/15 sm:bg-red-700/15 py-4 px-8 sm:rounded-s-lg">
            <div className="w-full flex flex-col gap-3">
              <h1 className="font-semibold text-xl text-red-500 sm:mx-8">
                Follow us!
              </h1>
              <div className="w-full flex items-start sm:mx-16 sm:my-4">
                <ul className="flex flex-col gap-2">
                  <li>
                    <p className="text-black/56 text-sm flex items-center justify-start gap-2 cursor-pointer hover:underline">
                      <FaFacebook className="text-blue-600 font-bold" /> Shree
                      Ramchandra Mandir
                    </p>
                  </li>
                  <li>
                    <p className="text-black/56 text-sm flex items-center justify-start gap-2 cursor-pointer hover:underline">
                      <FaInstagram className="text-rose-600" />{" "}
                      @shreeramchandramandir
                    </p>
                  </li>
                  <li>
                    <p className="text-black/56 text-sm flex items-center justify-start gap-2 cursor-pointer hover:underline">
                      <FaTiktok className="text-slate-800" /> Shree Ramchandra
                      Mandir
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-full flex flex-col gap-3">
              <h1 className="font-semibold text-xl text-red-500 sm:mx-8">
                Donation
              </h1>
              <div
                className="max-w-35 h-35 sm:mx-16"
                style={{
                  backgroundImage: `url(${qrCode.src})`,
                  backgroundPosition: "center",
                  backgroundSize: "contain",
                }}
              ></div>
            </div>
          </div>
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
