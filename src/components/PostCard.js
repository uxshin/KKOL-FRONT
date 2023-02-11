"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Collapes from "react-collapse";

const PostCard = ({ post }) => {
  const { title, subTitle, thumbnail, id } = post;
  const { url, name, width, height } = thumbnail;
  const postLink = `/post/${id}`;
  const [isOpen, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!isOpen);
  };
  return (
    <div className="w-full flex flex-col transition-all ">
      {/* header */}
      <div
        onClick={toggle}
        className="flex justify-between hover:cursor-pointer border-b-[1px] py-1 border-black"
      >
        <p>{title}</p>
        <p>{subTitle}</p>
      </div>
      {/* <!-- body --> */}
      <Collapes isOpened={isOpen}>
        <div className="flex w-full justify-end py-2 lg:py-5 3xl:py-6">
          <Link
            href={postLink}
            className="3xl:w-1/3 3xl:pl-2 w-3/8 lg:w-1/3 transition-opacity duration-500 ease-in-out hover:opacity-40"
          >
            <Image
              src={url}
              width={width}
              height={height}
              alt={name}
              className="w-full"
            />
          </Link>
        </div>
      </Collapes>
    </div>
  );
};

export default PostCard;
