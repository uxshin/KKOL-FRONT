"use client";

import BackButton from "@/components/BackButton";
import DetailRow from "@/components/DetailRow";
import LocaleButton from "@/components/LocaleButton";
import MotionDiv from "@/components/MotionDiv";
import { useEffect, useState, useRef } from "react";
import { Carousel, IconButton } from "@material-tailwind/react";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";

const ProjectDetail = ({ params }) => {
  async function getPost(id) {
    const rawUrl = `https://cms-kkolstudio-w0mq.onrender.com/api/posts/${id}?populate[0]=images`;
    const res = await fetch(rawUrl);
    return res.json();
  }

  const { id } = params;
  const [post, setPost] = useState(null);
  const ref = useRef();
  useEffect(() => {
    getPost(id).then((json) => {
      setPost(json.data);
    });
  }, []);

  if (!post) {
    return <div></div>;
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
  console.log(post);

  return (
    <MotionDiv>
      <div className="w-1/3 fixed h-screen px-10 py-11 overflow-y-scroll no-scrollbar">
        <BackButton />
        <div className="w-1/2 pr-4">
          <DetailRow title="디자인" body={design} />
          <DetailRow title="시공" body={construction} />
          <DetailRow title="브랜딩" body={branding} />
          <DetailRow title="준공사진" body={photo} />
          <DetailRow title="클라이언트" body={client} />
          <DetailRow title="면적" body={area + " m2"} />
          <DetailRow title="위치" body={location} />
        </div>
        <div className="flex justify-between items-start mt-[300px] mb-7">
          <p className="text-[15px] font-bold">{title}</p>
          <div className="flex flex-row space-x-0.5 text-[10px] items-center">
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
        <p className="text-[15px] pb-10">{content}</p>
      </div>
      <div className="w-2/3 absolute right-0 h-screen text-white">
        <Carousel
          className=""
          navigation={({ setActiveIndex, activeIndex, length }) => <div></div>}
          prevArrow={({ handlePrev }) => (
            <div
              className="absolute w-1/2 h-screen z-50 hover:cursor-pointer opacity-0 hover:opacity-70"
              onClick={handlePrev}
            >
              <ArrowLeftIcon
                strokeWidth={2}
                className="w-6 h-6 absolute top-2/4 -translate-y-2/4 left-4"
              />
            </div>
          )}
          nextArrow={({ handleNext }) => (
            <div
              className="absolute w-1/2 h-screen right-0  z-50 hover:cursor-pointer opacity-0 hover:opacity-70"
              onClick={handleNext}
            >
              <ArrowRightIcon
                strokeWidth={2}
                className="w-6 h-6 absolute top-2/4 -translate-y-2/4 right-4"
              />
            </div>
          )}
          slideRef={ref}
        >
          {images.map((i) => {
            return (
              <img
                src={i.url}
                className="h-full w-full object-cover"
                alt={title}
              />
            );
          })}
        </Carousel>
      </div>
    </MotionDiv>
  );
};

export default ProjectDetail;
