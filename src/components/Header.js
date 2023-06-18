"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import MotionDiv from "./MotionDiv";
const Header = () => {
  return (
    <MotionDiv classname="3xl:w-3/4 mx-auto flex flex-row items-center justify-between  px-2 py-3 3xl:py-6 h-[38px] lg:h-[58px] 3xl:h-[80px]">
      <Link href={`/`} className="w-[60px] h-[16px] lg:w-[78px]">
        <Image
          src="/ggol-logo.png"
          width={121}
          height={32}
          alt="logo"
          className=""
        />
      </Link>
      <ul>
        <Link href={`/contact`}>
          <li className="hover:cursor-pointer ">Contact</li>
        </Link>
      </ul>
    </MotionDiv>
  );
};

export default Header;
