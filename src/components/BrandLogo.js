"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

const BrandLogo = (canMove) => {
  if (canMove) {
    <Image
      src="/ggol_logo_n.svg"
      width="0"
      height="0"
      sizes="100vw"
      alt="logo"
      className="w-[60px] h-[16px] sm:w-[121px] sm:h-[32px]"
    />;
  }
  return (
    <Link href={`/`} className="">
      <Image
        src="/ggol_logo_n.svg"
        width="0"
        height="0"
        sizes="100vw"
        alt="logo"
        className="w-[60px] h-[16px] sm:w-[121px] sm:h-[32px]"
      />
    </Link>
  );
};

export default BrandLogo;
