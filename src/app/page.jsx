"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import BrandLogo from "@/components/BrandLogo";
import PageWrapper from "@/components/PageWrapper";

const Home = () => {
  const [width, setWidth] = useState(0);
  useEffect(() => {
    setWidth(window.innerWidth);
    console.log("height>>" + window.innerHeight);
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
    "우리 모두는 저마다의 꼴을 지니고 살아갑니다.\n'꼴'은 외적인 모양새를 나타내는 동시에 인간의 행태를 표현하고\n나아가 정서적인 부분까지 은유적으로 담아내기도 합니다.\n저희는 그런 상상의 꼴을 발견하고 연결하며 정의하는 일을 돕습니다.";
  const greetTxt2 = "당신의 꼴은 어떤 꼴인가요?";
  return (
    <>
      <PageWrapper
        className="hidden sm:flex absolute top-0 left-0 w-full h-screen bg-white z-50 px-10 py-11 flex-col justify-between hover:cursor-pointer"
        onClick={onTap}
      >
        <BrandLogo canMove={false} />
        <div className="absolute inset-x-10 bottom-1/4">
          <p className="w-[600px] mb-5 text-[15px] whitespace-pre-line">
            {grettTxt1}
          </p>
          <p className="text-[15px]">{greetTxt2}</p>
        </div>
      </PageWrapper>
    </>
  );
};

export default Home;
