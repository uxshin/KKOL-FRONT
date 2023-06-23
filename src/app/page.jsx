"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import BrandLogo from "@/components/BrandLogo";
import PageWrapper from "@/components/PageWrapper";

const Home = () => {
  const [width, setWidth] = useState(0);
  useEffect(() => {
    setWidth(window.innerWidth);
    if (window.innerWidth < 540) {
      router.push("/projects");
      return;
    }

    const onResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", onResize);
  }, []);
  const router = useRouter();
  function onTap() {
    router.push("/projects");
  }
  const grettTxt1 =
    "꼴 스튜디오는 공상가들의 집단입니다. 우리는 개인과 공간을 연결하여 공상하고, 하나의 꼴로 구현합니다. 머무는 사람은 공간의 꼴을 정의하고, 그 공간의 꼴은 머무는 사람의 모습을 다시 확장합니다. 우리는 개인과 공간을 공상하여 꼴을 만듭니다.";
  const greetTxt2 =
    "공상가  1) 共想家 함께 고민하는 사람   2) 空想家 현실적이지 않은 것을 상상하는 사람";
  return (
    <>
      <PageWrapper
        className="hidden sm:flex absolute top-0 left-0 w-full h-screen bg-white z-50 px-10 py-11  flex-col justify-between hover:cursor-pointer"
        onClick={onTap}
      >
        <BrandLogo canMove={false} />
        <div className="absolute inset-x-10 bottom-1/4">
          <p className="w-[600px] mb-[57px] text-[15px]">{grettTxt1}</p>
          <p className="text-[13px]">{greetTxt2}</p>
          <p>{width}</p>
        </div>
      </PageWrapper>
    </>
  );
};

export default Home;
