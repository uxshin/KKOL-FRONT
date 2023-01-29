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
    <div className="border-t-[1px] border-black h-[170px] w-full mx-auto flex justify-end">
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
