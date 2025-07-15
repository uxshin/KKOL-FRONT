"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const PostCard = ({ post }) => {
  const [kHeight, setHeight] = useState(939);
  useEffect(() => {
    setHeight(window.innerHeight);

    const onResize = () => {
      setHeight(window.innerHeight);
    };
    window.addEventListener("resize", onResize);
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
  const bHeight = (kHeight * 0.93 - 10) / 3;
  const { title, subTitle, thumbnail, id } = post;
  const { url, name, width, height } = thumbnail;
  const postLink = `/projects/${id}`;

  return (
    <>
      {/* 모바일 메인 카드 */}
      <Link href={postLink} className="sm:hidden">
        <Image
          src={url}
          // fill
          // width={bHeight}
          // height={bHeight}
          // style={{ objectFit: "contain" }}
          width="0"
          height="0"
          sizes="100vw"
          alt={title}
          // className="object-contain"
          // className={`w-[100px] h-[${bHeight}px] hover:cursor-pointer`}
          className={`w-full h-full aspect-[1.2/1] sm:aspect-[1/1] hover:cursor-pointer object-cover`}
        />
        <p className="text-right text-[11px] sm:hidden py-1">{title}</p>
      </Link>

      <Link
        href={postLink}
        className="hidden sm:block"
        style={{
          height: bHeight,
        }}
      >
        <Image
          src={url}
          // fill
          // width={bHeight}
          // height={bHeight}
          // style={{ objectFit: "contain" }}
          width="0"
          height="0"
          sizes="100vw"
          alt={title}
          // className="object-contain"
          // className={`w-[100px] h-[${bHeight}px] hover:cursor-pointer`}
          className={`w-full h-full aspect-[1.2/1] sm:aspect-[1/1 hover:cursor-pointer object-cover`}
        />
        <p className="text-right text-[11px] sm:hidden py-1">{title}</p>
      </Link>
    </>
  );
};

export default PostCard;
