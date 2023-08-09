import MotionDiv from "@/components/MotionDiv";
import SideBar from "@/components/SideBar";
import React from "react";

const Studio = () => {
  const email = "kkol.studio@gmail.com";
  const mobile = "instagram: @kkol.studio";
  const address = "55-1, Imjeong-ro, Mapo-gu, Seoul, Republic of Korea";
  const greetingText =
    "안녕하세요, 꼴스튜디오 일동입니다.\n먼저 저희 스튜디오에 관심을 기울여주셔서 감사드립니다.";
  const description =
    "저희는 2021년 7월, 업태와 규모로 프로젝트의 경중을 구분 짓지 않고 좋은 의도와 이야기를 담은 공간을 만들고자 설립된 공간디자인 스튜디오입니다.\n아뜰리에의 형식을 추구하며 공간, 가구, 조명, 오브제 등 다양한 디자인 영역의 프로젝트를 진행하고 있습니다.";

  return (
    <MotionDiv>
      <SideBar />
      <div className="p-[18px] sm:p-10">
        <div className="h-[200px] sm:h-[400px]"></div>
        <p className="text-[14px] sm:text-[15px] mb-6 whitespace-pre-line">
          {greetingText}
        </p>
        <p className="text-[14px] sm:text-[15px] mb-6 whitespace-pre-line">
          {description}
        </p>
        <div className="text-[14px] sm:text-[13px] absolute bottom-[83px] sm:px-0 left-[18px] sm:left-10 z-50 leading-6 sm:leading-7">
          <p>{email}</p>
          <p>{mobile}</p>
          <p>{address}</p>
        </div>
      </div>
    </MotionDiv>
  );
};

export default Studio;
