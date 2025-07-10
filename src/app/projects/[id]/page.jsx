"use client";

import BackButton from "@/components/BackButton";
import DetailRow from "@/components/DetailRow";
import LocaleButton from "@/components/LocaleButton";
import { useEffect, useState, useRef } from "react";
import { Carousel, menu } from "@material-tailwind/react";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/outline";
import SideBar from "@/components/SideBar";
import PageWrapper from "@/components/PageWrapper";
import MotionDiv from "@/components/MotionDiv";

// Import Swiper React components

/**
 * 프로젝트 디테일 페이지 입니다.
 * 25.07.09 수정 내용
 * 캐러셀 제거,
 * 로케일 버튼위치 변경
 */
const ProjectDetail = ({ params }) => {
  async function getPost(id) {
    const rawUrl = `https://cms-kkolstudio-w0mq.onrender.com/api/posts/${id}?populate[0]=images`;
    const res = await fetch(rawUrl);
    return res.json();
  }
  async function getPostList() {
    const url = `https://cms-kkolstudio-w0mq.onrender.com/api/posts?populate[0]=thumbnail`;
    const res = await fetch(url);
    return res.json();
  }

  const { id } = params;
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  // the required distance between touchStart and touchEnd to be detected as a swipe
  const minSwipeDistance = 20;

  const onTouchStart = (e) => {
    setTouchEnd(null); // otherwise the swipe is fired even with usual touch events
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe || isRightSwipe)
      console.log("swipe", isLeftSwipe ? "left" : "right");
    // add your conditional logic here
  };
  const [post, setPost] = useState(null);
  const [postList, setPostList] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const ref = useRef();
  useEffect(() => {
    getPost(id).then((json) => {
      setPost(json.data);
    });
    getPostList().then((json) => {
      setPostList(json.data);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const handleContextmenu = (e) => {
      e.preventDefault();
    };
    document.addEventListener("contextmenu", handleContextmenu);
    return function cleanup() {
      document.removeEventListener("contextmenu", handleContextmenu);
    };
  }, []);

  if (!post) {
    return <div></div>;
  }

  function goToTop() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }
  const {
    design,
    title,
    content,
    construction,
    client,
    area,
    location,
    branding,
    photo,
    locale,
    images,
  } = post;

  const menuText = [
    {
      ko: "디자인",
      en: "Design",
    },
    {
      ko: "시공",
      en: "Construction",
    },
    {
      ko: "브랜딩",
      en: "Branding",
    },
    {
      ko: "준공사진",
      en: "Photo",
    },
    {
      ko: "클라이언트",
      en: "Client",
    },
    {
      ko: "면적",
      en: "Area",
    },
    {
      ko: "위치",
      en: "Location",
    },
  ];
  return (
    // 데스크탑 영역
    <MotionDiv>
      <div className="fixed bg-white z-10 flex-col w-1/3 px-10 pt-11 hidden sm:flex">
        <BackButton className="mb-9" />
        <div className="w-full pr-4 flex justify-between items-start lg:w-1/2">
          <p className="text-[15px] font-bold">{title}</p>
          <div className="flex flex-row space-x-0.5 text-[10px] items-center">
            <LocaleButton
              locale={locale}
              title={title}
              text={`KR`}
              isSelected={locale == "ko"}
            />
            <p className="text-[15px]">/</p>
            <LocaleButton
              locale={locale}
              title={title}
              text={`EN`}
              isSelected={locale == "en"}
            />
          </div>
        </div>
      </div>
      {/* hide is Mobile */}
      <div
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        className="sm:w-2/3 w-full h-[250px] sm:h-screen absolute top-[60px] sm:top-0 sm:right-0 hidden sm:block"
      >
        <Carousel
          className="text-white"
          navigation={({ setActiveIndex, activeIndex, length }) => <div></div>}
          prevArrow={({ handlePrev }) => (
            <div
              className="absolute w-1/2 h-[250px] sm:h-screen z-50 hover:cursor-left opacity-0 hover:opacity-70"
              onClick={handlePrev}
            >
              {/* <ChevronLeftIcon
                strokeWidth={2}
                className="w-6 h-6 absolute top-2/4 -translate-y-2/4 left-4"
              /> */}
            </div>
          )}
          nextArrow={({ handleNext }) => (
            <div
              className="absolute w-1/2 h-[250px] sm:h-screen right-0 z-50 hover:cursor-right opacity-0 hover:opacity-70"
              onClick={handleNext}
            >
              {/* <ChevronRightIcon
                strokeWidth={2}
                className="w-6 h-6 absolute top-2/4 -translate-y-2/4 right-4"
              /> */}
            </div>
          )}
          slideRef={ref}
        >
          {images.map((i, index) => {
            console.log(i);
            const imgClassName =
              i.height > i.width
                ? "w-full h-full object-contain"
                : "w-full h-full object-cover";
            return (
              <img
                key={index}
                src={i.url}
                className={imgClassName}
                alt={title + index}
              />
            );
          })}
        </Carousel>
      </div>

      <div className="hidden sm:inline w-1/3 fixed h-screen px-10 pb-11 pt-[167px] overflow-y-scroll no-scrollbar">
        <div className="lg:w-1/2 pr-4 h-[300px] w-full">
          <DetailRow title={menuText[0][locale]} body={design} />
          <DetailRow title={menuText[1][locale]} body={construction} />
          <DetailRow title={menuText[2][locale]} body={branding} />
          <DetailRow title={menuText[3][locale]} body={photo} />
          <DetailRow title={menuText[4][locale]} body={client} />
          <DetailRow title={menuText[5][locale]} body={area + " ㎡"} />
          <DetailRow title={menuText[6][locale]} body={location} />
        </div>
        {/* <div className="flex justify-between items-start mt-[400px] mb-[30px]">
          <p className="text-[15px] font-bold">{title}</p>
          <div className="flex flex-row space-x-0.5 text-[10px] items-center">
            <LocaleButton
              locale={locale}
              title={title}
              text={`KR`}
              isSelected={locale == "ko"}
            />
            <p className="text-[15px]">/</p>
            <LocaleButton
              locale={locale}
              title={title}
              text={`EN`}
              isSelected={locale == "en"}
            />
          </div>
        </div> */}
        {/* 2월7일 수정안 400-> 150 */}
        <p className="text-[15px] pb-10 whitespace-pre-line mt-[150px]">
          {content}
        </p>
      </div>

      {/* 모바일 영역  */}
      <div className="sm:hidden w-full pb-10 no-scrollbar">
        {/* <SideBar postList={postList} /> */}
        {/* 스크롤 했을때 픽스드 되는 거 추가 */}
        {/* 스크롤 내릴 때 부드러운 애니메이션 효과를 추가  */}
        <div
          className={`fixed top-0 left-0 right-0 z-50 px-[18px] py-3 bg-white h-[72px] transition-all duration-300 ${
            isScroll ? "shadow-xs" : "shadow-none"
          }`}
        >
          <BackButton />
          <div className="w-1/3 flex items-center justify-between">
            <p className="text-[15px]">{title}</p>
            <div
              className={`flex flex-row space-x-0.5 text-[14px] py-2 items-center self-end ${
                !isScroll ? "opacity-100" : "opacity-0"
              }`}
            >
              <LocaleButton
                locale={locale}
                title={title}
                text={`KR`}
                isSelected={locale == "ko"}
              />
              <p>/</p>
              <LocaleButton
                locale={locale}
                title={title}
                text={`EN`}
                isSelected={locale == "en"}
              />
            </div>
          </div>
        </div>

        <div className={`flex flex-col px-[18px] mt-[80px]`}>
          <div className="w-1/3 text-[10px] py-0 mb-[56px]">
            <DetailRow title={menuText[0][locale]} body={design} />
            <DetailRow title={menuText[1][locale]} body={construction} />
            <DetailRow title={menuText[2][locale]} body={branding} />
            <DetailRow title={menuText[3][locale]} body={photo} />
            <DetailRow title={menuText[4][locale]} body={client} />
            <DetailRow title={menuText[5][locale]} body={area + " ㎡"} />
            <DetailRow title={menuText[6][locale]} body={location} />
          </div>

          <p className="text-[14px] pb-10 whitespace-pre-line">{content}</p>
          {/* // Adding Mobile Image ...  */}
          {/* 모바일 영역에서는 이미지를 쭉 나열합니다. 데스크탑에서는 보이지 않음 */}
          {/* 이미지 클릭 시에 확대되는 모달창 띄우기 */}
          <div className="flex flex-col mb-4">
            {images.map((i, index) => {
              return (
                <img
                  key={index}
                  src={i.url}
                  alt={title + index}
                  onClick={() => setSelectedImage(i.url)}
                />
              );
            })}
          </div>
          <p
            className="text-[10px] self-end hover:cursor-pointer "
            onClick={goToTop}
          >
            TOP
          </p>
        </div>
      </div>
    </MotionDiv>
  );
};

export default ProjectDetail;

// 캐러셀 영역 삭제
