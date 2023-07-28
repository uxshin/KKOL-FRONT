import React from "react";

const DetailRow = ({ title, body }) => {
  return (
    <div className="flex justify-between text-[10px] leading-3 sm:text-[13px] sm:leading-[18px]">
      <p>{title}</p>
      <p>{body}</p>
    </div>
  );
};

export default DetailRow;
