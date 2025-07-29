"use client";

import BackButton from "@/components/BackButton";
import DetailRow from "@/components/DetailRow";
import LocaleButton from "@/components/LocaleButton";
import { useEffect, useState, useRef } from "react";
import { Carousel, menu } from "@material-tailwind/react";
import {
  ChevronRightIcon,
  ChevronLeftIcon,
  ChevronUpIcon,
} from "@heroicons/react/24/outline";
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
        <div className="w-full pr-4 flex justify-between items-start 2xl:w-1/2">
          <p className="text-[15px] font-bold truncate whitespace-nowrap overflow-hidden">
            {title}
          </p>
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
              className="absolute w-1/2 h-[250px] sm:h-screen z-50 hover:cursor-left opacity-100"
              onClick={handlePrev}
            >
              {/* <ChevronLeftIcon className="w-5 h-5 absolute top-2/4 -translate-y-2/4 left-4 text-black" /> */}
            </div>
          )}
          nextArrow={({ handleNext }) => (
            <div
              className="absolute w-1/2 h-[250px] sm:h-screen right-0 z-50 hover:cursor-right opacity-100"
              onClick={handleNext}
            >
              {/* <ChevronRightIcon className="w-6 h-6 absolute top-2/4 -translate-y-2/4 right-4 text-black" /> */}
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
        <div className="2xl:w-1/2 pr-4 h-[300px] w-full">
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
        <p className="text-[15px] pb-0 whitespace-pre-line mt-[150px]">
          {content}
        </p>
      </div>

      {/* 모바일 영역  */}
      <div className="sm:hidden w-full mb-10 no-scrollbar">
        {/* <SideBar postList={postList} /> */}
        {/* 스크롤 했을때 픽스드 되는 거 추가 */}
        {/* 스크롤 내릴 때 부드러운 애니메이션 효과를 추가  */}
        <div
          className={`fixed top-0 left-0 right-0 z-50 px-[13px] py-3 bg-white h-[81px] transition-all duration-300 ${
            isScroll ? "shadow-xs" : "shadow-none"
          }`}
        >
          <BackButton />
          {/* 
            Tailwind만 사용, title 길이에 따라 w-3/5 또는 w-4/5 적용.
            만약 CSS 속성(스타일)을 써야 한다면, style prop을 직접 사용 가능.
            아래는 Tailwind만 사용한 예시와, style prop을 활용한 예시 둘 다 제시.
          */}

          {/* Tailwind만 사용하는 방법 */}
          <div
            className={`${
              title && title.length >= 39
                ? "w-full"
                : title && title.length < 22
                ? "w-3/5"
                : "w-4/5"
            } flex items-center justify-between px-[5px] mt-2.5 gap-2 transition-all duration-300 max-w-full min-w-[180px]`}
          >
            <p className="text-[15px] truncate whitespace-nowrap overflow-hidden max-w-full">
              {title}
            </p>
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

        <div className={`flex flex-col px-[18px] mt-[90px]`}>
          <div
            className={`w-1/3 text-[10px] py-0 mb-[120px] ${
              title && title.length >= 39
                ? "w-full"
                : title && title.length < 22
                ? "w-3/5"
                : "w-4/5"
            }`}
          >
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
          <div className="flex flex-col mb-4 gap-y-1">
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

          {/* <div className="bg-white w-full h-[50px] fixed bottom-0 flex justify-end items-center">
            <ChevronUpIcon
              className="w-4 h-4 text-[10px] self-end hover:cursor-pointer"
              onClick={goToTop}
            />
          </div> */}
        </div>
      </div>
      {/* // Fixed bottom 영역생성  */}
      {/* isScrolled 일때만 보여지게, 변환시 애니메이션 자연스럽게 추가  */}
      <div
        className={`bg-white w-full h-[60px] pt-5 pb-7 fixed bottom-[-1px] flex justify-end items-center transition-all duration-300 ${
          isScroll ? "opacity-100" : "opacity-0"
        }`}
      />
      {/* isScrolled 일때만 보여지게, 변환시 애니메이션 자연스럽게 추가  */}
      <ChevronUpIcon
        className={`w-5 h-5  self-end hover:cursor-pointer fixed bottom-7 right-6 z-50 transition-all duration-300 ${
          isScroll ? "opacity-100" : "opacity-0"
        }`}
        onClick={goToTop}
      />
    </MotionDiv>
  );
};

export default ProjectDetail;

// 캐러셀 영역 삭제
