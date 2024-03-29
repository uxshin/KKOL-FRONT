import React from "react";

// 바디값이 널일때를 체크 합니다.
function bodyNullCheck(body) {
  if (body === null || body === "null ㎡") {
    return true;
  } else {
    return false;
  }
}

const DetailRow = ({ title, body }) => {
  return (
    // if body is empty, don't render
    <>
      {!bodyNullCheck(body) && (
        <div className="flex justify-between text-[8px] sm:text-[13px] leading-[18px]">
          <p>{title}</p>
          <p>{body}</p>
        </div>
      )}
    </>
  );
};

export default DetailRow;
