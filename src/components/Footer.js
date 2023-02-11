"use client";

import React from "react";
const Footer = ({ isShow }) => {
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="border-t-[1px] border-black 3xl:h-[120px] lg:h-[100px] h-[88px] w-full mx-auto flex justify-end px-2">
      {isShow && (
        <p
          className="hover:cursor-pointer mt-4 uppercase "
          onClick={() => goToTop()}
        >
          Top
        </p>
      )}
    </div>
  );
};

export default Footer;
