import React from "react";
import MotionDiv from "@/components/MotionDiv";
import Header from "@/components/Header";

const Contact = () => {
  const listText =
    "kkol.studio@gmail.com \nInstagram @kkol.studio Office 서울시 \n마포구 공덕동 임정로 55-1";
  return (
    <>
      <Header />
      <MotionDiv classname="w-full lg:w-full 3xl:w-3/4 mx-auto px-2 lg:text-lg text-sm">
        <h1 className="pt-[240px] pb-[170px] lg:py-0 lg:absolute 3xl:bottom-[280px] lg:bottom-[190px] bottom-[170px] whitespace-pre-wrap lg:leading-8 leading-6">
          {listText}
        </h1>
      </MotionDiv>
    </>
  );
};

export default Contact;
