import MotionDiv from "@/components/MotionDiv";
import SideBar from "@/components/SideBar";
import React from "react";

const Studio = () => {
  const email = "kkol.studio@gmail.com";
  const mobile = "010.0010.0012";
  const address = "55-1, Imjeong-ro, Mapo-gu, Seoul, Republic of Korea";
  const description =
    "꼴 스튜디오는 공상가들의 집단입니다. 우리는 개인과 공간을 연결하여 공상하고, 하나의 꼴로 구현합니다. 머무는 사람은 공간의 꼴을 정의하고, 그 공간의 꼴은 머무는 사람의 모습을 다시 확장합니다. 우리는 개인과 공간을 공상하여 꼴을 만듭니다.";
  const description2 =
    "공상가  1) 共想家 함께 고민하는 사람   2) 空想家 현실적이지 않은 것을 상상하는 사람";

  return (
    <MotionDiv>
      <SideBar />
      <div className="sm:hidden absolute top-1/2 p-1.5">
        <p className="text-[10px] mb-2">{description}</p>
        <p className="text-[8px]">{description2}</p>
      </div>
      <div className="absolute bottom-[83px] px-1.5 sm:px-0 left-0 sm:left-10 z-50 text-[10px] sm:text-[13px] leading-4 sm:leading-7">
        <p>{email}</p>
        <p>{mobile}</p>
        <p>{address}</p>
      </div>
    </MotionDiv>
  );
};

export default Studio;
