import React from "react";
import Image from "next/image";
import MotionDiv from "../MotionDiv";
const LayoutBuilder = ({ layout }) => {
  const { width, align, text, subText, blockImage } = layout;
  const { url, name, height } = blockImage;
  function getWidth(width) {
    switch (width) {
      case "one":
        return "w-1/2 lg:w-1/6";
      case "two":
        return "w-3/4 lg:w-1/3";
      case "three":
        return "w-3/4 lg:w-1/2";
      case "four":
        return "w-3/4 lg:w-2/3";
      case "five":
        return "w-3/4 lg:w-5/6";
      default:
        return "w-full";
    }
  }

  function getAlign(align) {
    switch (align) {
      case "left":
        return "self-start";
      case "center":
        return "self-center";
      case "right":
        return "self-end";
      default:
        return "self-center";
    }
  }

  const className = `${getWidth(width)} flex flex-col ${getAlign(
    align
  )} mb-[120px] lg:mb-[150px] 3xl:mb-[200px] space-y-2.5 lg:space-y-3 3xl:space-y-8 leading-5 lg:leading-6 lg:leading-7`;

  return (
    <MotionDiv classname={className}>
      <Image
        src={url}
        alt={name}
        width={blockImage.width}
        height={height}
        className="w-full"
      />
      <p className="">{text}</p>
      <p className="">{subText}</p>
    </MotionDiv>
  );
};

export default LayoutBuilder;
