import React from "react";
import Image from "next/image";

const LayoutBuilder = ({ layout }) => {
  const { width, align, coverImg, description, subtext } = layout;
  function getWidth(width) {
    switch (width) {
      case "1":
        return "w-1/6";
      case "2":
        return "w-1/3";
      case "3":
        return "w-1/2";
      case "4":
        return "w-2/3";
      case "5":
        return "w-5/6";
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
  )} mb-[150px] space-y-10`;
  return (
    <div className={className}>
      <Image
        src={coverImg.url}
        alt={coverImg.alt}
        width={coverImg.width}
        height={coverImg.height}
        className="w-full"
      />
      <p className="w-full whitespace-normal">{description}</p>
      <p className="w-full whitespace-normal">{subtext}</p>
    </div>
  );
};

export default LayoutBuilder;
