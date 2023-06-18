"use client";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MotionDiv from "@/components/MotionDiv";
import PostCard from "@/components/PostCard";
import SideBar from "@/components/SideBar";
import Link from "next/link";
import Image from "next/image";
import BrandLogo from "@/components/BrandLogo";
import { useRouter } from "next/navigation";
// async function getData() {
//   const url = `${process.env.BASE_URL}posts?populate[0]=thumbnail`;
//   const res = await fetch(url);
//   return res.json();
// }

export default function Home() {
  // const { data } = await getData();
  // console.log(data);
  // function range(start, stop, step) {
  //   if (typeof stop == "undefined") {
  //     // one param defined
  //     stop = start;
  //     start = 0;
  //   }

  //   if (typeof step == "undefined") {
  //     step = 1;
  //   }

  //   if ((step > 0 && start >= stop) || (step < 0 && start <= stop)) {
  //     return [];
  //   }

  //   var result = [];
  //   for (var i = start; step > 0 ? i < stop : i > stop; i += step) {
  //     result.push(i);
  //   }

  //   return result;
  // }
  // const startYear = range(2021, 2099).reverse();
  const router = useRouter();
  const menuList = [
    {
      name: "PROJECT",
      route: "/home",
    },
    {
      name: "STUDIO",
      route: "/studio",
    },
  ];

  function handleOnclick() {
    router.push("/projects");
  }
  const grettTxt1 =
    "꼴 스튜디오는 공상가들의 집단입니다. 우리는 개인과 공간을 연결하여 공상하고, 하나의 꼴로 구현합니다. 머무는 사람은 공간의 꼴을 정의하고, 그 공간의 꼴은 머무는 사람의 모습을 다시 확장합니다. 우리는 개인과 공간을 공상하여 꼴을 만듭니다.";
  const greetTxt2 =
    "공상가  1) 共想家 함께 고민하는 사람   2) 空想家 현실적이지 않은 것을 상상하는 사람";
  const grettingText =
    "꼴 스튜디오는 공간과 사람 간의 관계를 만듭니다." +
    "\n" +
    "관계는 공간을 정의하고 연결하며 적용됩니다.\n꼴 스튜디오는 기존의 꼴을 확장해 새로운 꼴을 창조합니다.";
  return (
    <>
      <MotionDiv>
        <div
          href={`/projects`}
          className="w-full h-screen px-10 py-11 flex flex-col justify-between hover:cursor-pointer"
          onClick={handleOnclick}
        >
          <BrandLogo />
          <div className="absolute inset-x-10 bottom-1/4">
            <p className="w-[600px] mb-[57px] text-[15px]">{grettTxt1}</p>

            <p className="text-[13px]">{greetTxt2}</p>
          </div>
        </div>
      </MotionDiv>

      {/* <SideBar /> */}
      {/* <div className="w-full max-w-[1920px]"></div>
      <div className="w-1/4 bg-blue-300 absolute h-full px-10 py-11">
        <Link href={`/`} className="w-[60px] h-[16px] lg:w-[78px]">
          <Image
            src="/ggol_logo_n.svg"
            width={121}
            height={32}
            alt="logo"
            className=""
          />
        </Link>
        <ul>
          {menuList && menuList.map((m) => <li key={m.name}>{m.name}</li>)}
        </ul>
      </div>
      <div className="bg-red bg-red-300">
        <p>body</p>
      </div> */}
      {/* <Header /> */}

      {/* <MotionDiv classname="w-full lg:w-full 3xl:w-3/4 mx-auto px-2 lg:text-lg text-sm">
        <div className="w-full lg:h-screen relative">
          <h1 className="pt-[240px] pb-[170px] lg:py-0 lg:absolute 3xl:bottom-[280px] lg:bottom-[190px] bottom-[170px] whitespace-pre-wrap lg:leading-8 leading-6">
            {grettingText}
          </h1>
        </div>
        <div className="3xl:mb-[100px] lg:mb-[70px] mb-[50px] border-b-[1px] border-black lg:pb-[180px] ">
          {startYear.map((year, i) => {
            const filter = data.filter(
              (doc) => year.toString() === doc.completedAt.split("-")[0]
            );
            if (filter.length > 0) {
              return (
                <div
                  key={i}
                  className="3xl:pb-[389px] lg:pb-[350px] pb-[230px]"
                >
                  <h1 className="pb-2 3xl:py-5">{year}</h1>
                  {filter &&
                    filter.map((doc) => {
                      return <PostCard key={doc.id} post={doc} />;
                    })}
                </div>
              );
            }
          })}
        </div>
      </MotionDiv> */}
    </>
  );
}
