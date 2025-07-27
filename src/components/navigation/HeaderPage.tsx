"use client";
import Link from "next/link";
import React, { useState } from "react";
import { IoMenuOutline } from "react-icons/io5";
import { RxExit } from "react-icons/rx";
import Logo from "@/public/Logo.png";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const HeaderPage = () => {
  const [CloseTab, setCloseTab] = useState(true);

  const tabClosed = () => {
    setCloseTab(true);
  };

  const tabOpened = () => {
    setCloseTab(false);
  };

  return (
    <div className="amx-w-80 w-full bg-red-700">
      <div className="w-full hidden sm:flex items-center justify-end px-4">
        <ul className="w-full flex items-center justify-between mt-4">
          <li>
            <div className="w-20 h-20">
              <img
                src={`${Logo.src}`}
                className="object-contain"
                width={"100%"}
                alt=""
              />
            </div>
          </li>
          <li>
            <NavigationMenu className="w-full text-white">
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuLink href="/">Home</NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-black">
                    About
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <NavigationMenuLink href="/about/about-temple">
                      Shree Ram Temple
                    </NavigationMenuLink>
                    <NavigationMenuLink href="/about/founder">
                      Founder
                    </NavigationMenuLink>
                    <NavigationMenuLink href="/about/JASS">
                      JASS
                    </NavigationMenuLink>
                    <NavigationMenuLink href="/about/acharya">
                      Acharya
                    </NavigationMenuLink>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink href="/query">Query</NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-black">
                    History
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <NavigationMenuList>
                      <NavigationMenuLink href="/history/before">
                        Before - 2016
                      </NavigationMenuLink>
                    </NavigationMenuList>
                    <NavigationMenuList>
                      <NavigationMenuLink href="/history/after">
                        After - 2016
                      </NavigationMenuLink>
                    </NavigationMenuList>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink href="/blogs">Blogs</NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink href="/photosagar">
                    PhotoSagar
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </li>
        </ul>
      </div>

      <ul className="w-full sm:hidden flex items-center justify-end">
        <Link className="mr-auto ml-10" href={"/"}>
          <div className="w-15 h-15 flex items-center justify-center overflow-hidden">
            <img
              src={Logo.src}
              width={"100%"}
              className="object-center object-contain"
              alt=""
            />
          </div>
        </Link>
        <li
          onClick={() => tabOpened()}
          className={`sm:hidden text-light text-lg text-white font-black px-5 py-2 cursor-pointer`}
        >
          <IoMenuOutline />
        </li>
        {CloseTab ? (
          ""
        ) : (
          <div className="max-w-[240px] w-full text-white absolute top-0 right-0 h-screen z-999 bg-black/75">
            {CloseTab && CloseTab ? (
              ""
            ) : (
              <ul className="flex flex-col items-center justify-end gap-2">
                <Link className="w-full " href={"/"}>
                  <li
                    onClick={() => tabClosed()}
                    className="text-light text-sm px-5 py-2 hover:bg-black ease duration-300 cursor-pointer"
                  >
                    Home
                  </li>
                </Link>
                <li className="w-full font-light text-sm px-5 py-2 hover:bg-black ease duration-300 cursor-pointer">
                  <NavigationMenu className="w-full">
                    <NavigationMenuList className="w-full">
                      <NavigationMenuItem>
                        <NavigationMenuTrigger className="text-white text-sm max bg-transparent">
                          About Us
                        </NavigationMenuTrigger>
                        <NavigationMenuContent className="w-full bg-white/25">
                          <NavigationMenuLink
                            className="text-black text-sm font-light bg-white/25"
                            onClick={() => tabClosed()}
                            href="/about/about-temple"
                          >
                            Shree Ram Temple
                          </NavigationMenuLink>
                          <NavigationMenuLink
                            className="text-black text-sm font-light bg-white/25"
                            onClick={() => tabClosed()}
                            href="/about/founder"
                          >
                            Founder
                          </NavigationMenuLink>
                          <NavigationMenuLink
                            className="text-black text-sm font-light bg-white/25"
                            onClick={() => tabClosed()}
                            href="/about/JASS"
                          >
                            JASS
                          </NavigationMenuLink>
                          <NavigationMenuLink
                            className="text-black text-sm font-light bg-white/25"
                            onClick={() => tabClosed()}
                            href="/about/acharya"
                          >
                            Acharya
                          </NavigationMenuLink>
                        </NavigationMenuContent>
                      </NavigationMenuItem>
                    </NavigationMenuList>
                  </NavigationMenu>
                </li>
                <li
                  onClick={() => tabClosed()}
                  className="w-full text-light text-sm px-5 py-2 hover:bg-black ease duration-300 cursor-pointer"
                >
                  <NavigationMenu>
                    <NavigationMenuList>
                      <NavigationMenuItem>
                        <NavigationMenuTrigger className="text-white bg-transparent text-sm">
                          History
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <NavigationMenuList>
                            <NavigationMenuLink href="/history/before">
                              Before - 2016
                            </NavigationMenuLink>
                          </NavigationMenuList>
                          <NavigationMenuList>
                            <NavigationMenuLink href="/history/after">
                              After - 2016
                            </NavigationMenuLink>
                          </NavigationMenuList>
                        </NavigationMenuContent>
                      </NavigationMenuItem>
                    </NavigationMenuList>
                  </NavigationMenu>
                </li>
                <Link className="w-full " href={"/query"}>
                  <li
                    onClick={() => tabClosed()}
                    className="text-light text-sm px-5 py-2 hover:bg-black ease duration-300 cursor-pointer"
                  >
                    Query
                  </li>
                </Link>
                <Link className="w-full " href={""}>
                  <li className="text-light text-sm px-5 py-2 hover:bg-black ease duration-300 cursor-pointer">
                    Events
                  </li>
                </Link>
                <Link className="w-full" href={"/photosagar"}>
                  <li
                    onClick={() => tabClosed()}
                    className="text-light text-sm px-5 py-2 hover:bg-black ease duration-300 cursor-pointer"
                  >
                    PhotoSagar
                  </li>
                </Link>
                <li
                  onClick={() => tabClosed()}
                  className={`${
                    CloseTab ? "hidden" : ""
                  }w-full text-light text-sm px-5 py-2 hover:bg-black ease duration-300 cursor-pointer`}
                >
                  <RxExit />
                </li>
              </ul>
            )}
          </div>
        )}
      </ul>
    </div>
  );
};

export default HeaderPage;
