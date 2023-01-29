import React from "react";

const Hero = ({ text }) => {
  return (
    <div className="w-full h-[285px] lg:h-[534px] 3xl:h-[1002px] flex items-center text-lg">
      <h1 className="hidden lg:flex">{text}</h1>
    </div>
  );
};

export default Hero;
