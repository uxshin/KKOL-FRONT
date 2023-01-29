import React from "react";

const BuildRow = ({ title, content, secondTitle, secondContent }) => {
  return (
    <div className="flex border-b-[1px] border-black text-lg leading-[22px]">
      <div className="w-2/3 flex">
        <p className="w-1/3">{title}</p>
        <p className="w-full">{content}</p>
      </div>
      <div className="w-1/3 flex">
        <p className="w-1/2">{secondTitle}</p>
        <p className="w-1/2 text-right">{secondContent}</p>
      </div>
    </div>
  );
};

export default BuildRow;
