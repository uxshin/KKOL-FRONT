import React from "react";

const BuildRow = ({
  title,
  content,
  secondTitle,
  secondContent,
  isHide,
  isMobile,
}) => {
  const secondClassName =
    isHide === true ? "hidden w-1/3 lg:flex" : "flex w-1/3";
  const wholeClassName =
    isMobile === true
      ? "flex border-b-[1px] border-black lg:hidden"
      : "flex border-b-[1px] border-black ";
  return (
    <div className={wholeClassName}>
      <div className="w-2/3 flex">
        <p className="w-1/3">{title}</p>
        <p className="w-full">{content}</p>
      </div>
      <div className={secondClassName}>
        <p className="w-1/2">{secondTitle}</p>
        <p className="w-1/2 text-right">{secondContent}</p>
      </div>
    </div>
  );
};

export default BuildRow;
