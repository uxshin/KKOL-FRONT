"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Collapes from "react-collapse";

const PostCard = ({ post }) => {
  const { projectName, concept, thumbnail, id } = post;
  const postLink = `/post/${id}`;
  const [isOpen, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!isOpen);
  };
  return (
    <div className="w-full flex flex-col transition-all">
      {/* header */}
      <div
        onClick={toggle}
        className="flex justify-between hover:cursor-pointer border-b-[1px] py-1 text-lg border-black"
      >
        <p>{projectName}</p>
        <p>{concept}</p>
      </div>
      {/* <!-- body --> */}
      <Collapes isOpened={isOpen}>
        <div className="flex w-full justify-end pt-5 pb-6 lg:pt-24 lg:pb-24 3xl:pt-11 3xl:pb-20">
          <Link
            href={postLink}
            className="w-3/8 lg:w-1/2 transition-opacity duration-500 ease-in-out hover:opacity-40"
          >
            <Image
              src={thumbnail.url}
              width={371}
              height={189}
              alt={thumbnail.alt}
              className="w-full"
            />
          </Link>
        </div>
      </Collapes>
    </div>
  );
};

export default PostCard;
