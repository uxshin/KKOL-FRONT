import React from "react";
import Image from "next/image";
import MotionDiv from "./MotionDiv";
const LayoutBuilder = ({ layout }) => {
  const { width, alignment, text, subText, blockImage } = layout;
  const { url, name, height } = blockImage;
  function getWidth(width) {
    switch (width) {
      case "one":
        return "w-1/6";
      case "two":
        return "w-1/3";
      case "three":
        return "w-1/2";
      case "four":
        return "w-2/3";
      case "five":
        return "w-5/6";
      default:
        return "w-full";
    }
  }

  function getAlign(alignment) {
    switch (alignment) {
      case "align":
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
    alignment
  )} mb-[150px] space-y-10`;

  return (
    <MotionDiv classname={className}>
      <Image
        src={url}
        alt={name}
        width={blockImage.width}
        height={height}
        className="w-full"
      />
      <p className="w-full whitespace-normal">{text}</p>
      <p className="w-full whitespace-normal">{subText}</p>
    </MotionDiv>
  );
};

export default LayoutBuilder;
