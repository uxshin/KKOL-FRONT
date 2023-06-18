"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

const BrandLogo = () => {
  return (
    <Link href={`/`} className="">
      <Image
        src="/ggol_logo_n.svg"
        width={121}
        height={32}
        alt="logo"
        className=""
      />
    </Link>
  );
};

export default BrandLogo;
