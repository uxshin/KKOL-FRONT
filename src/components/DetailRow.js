import React from "react";

const DetailRow = ({ title, body }) => {
  return (
    <div className="flex justify-between text-[8px] sm:text-[13px] leading-[18px]">
      <p>{title}</p>
      <p>{body}</p>
    </div>
  );
};

export default DetailRow;
