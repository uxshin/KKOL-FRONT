import React from "react";
import MotionDiv from "@/components/MotionDiv";

const Contact = () => {
  const list = [
    "kkol.studio@gmail.com",
    "Instagram @kkol.studio",
    "Office 서울시 마포구 공덕동 임정로 55-1",
  ];
  return (
    <MotionDiv classname="w-3/4 mx-auto flex items-center">
      <ul className="flex flex-col absolute top-1/2 transform -translate-y-1/2 left-[7px] lg:left-[177px] 3xl:left-[257px]">
        {list.map((contact, i) => (
          <li key={i} className="text-lg">
            {contact}
          </li>
        ))}
      </ul>
    </MotionDiv>
  );
};

export default Contact;
