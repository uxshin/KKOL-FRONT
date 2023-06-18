"use client";

import MotionDiv from "@/components/MotionDiv";
import BrandLogo from "@/components/BrandLogo";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  function handleOnclick() {
    router.push("/projects");
  }
  const grettTxt1 =
    "꼴 스튜디오는 공상가들의 집단입니다. 우리는 개인과 공간을 연결하여 공상하고, 하나의 꼴로 구현합니다. 머무는 사람은 공간의 꼴을 정의하고, 그 공간의 꼴은 머무는 사람의 모습을 다시 확장합니다. 우리는 개인과 공간을 공상하여 꼴을 만듭니다.";
  const greetTxt2 =
    "공상가  1) 共想家 함께 고민하는 사람   2) 空想家 현실적이지 않은 것을 상상하는 사람";
  return (
    <>
      <MotionDiv>
        <div
          href={`/projects`}
          className="w-full h-screen px-10 py-11 flex flex-col justify-between hover:cursor-pointer"
          onClick={handleOnclick}
        >
          <BrandLogo canMove={false} />
          <div className="absolute inset-x-10 bottom-1/4">
            <p className="w-[600px] mb-[57px] text-[15px]">{grettTxt1}</p>

            <p className="text-[13px]">{greetTxt2}</p>
          </div>
        </div>
      </MotionDiv>
    </>
  );
}
