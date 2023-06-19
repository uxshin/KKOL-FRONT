"use client";
import Image from "next/image";
import Link from "next/link";

const PostCard = ({ post }) => {
  const { title, subTitle, thumbnail, id } = post;
  const { url, name, width, height } = thumbnail;
  const postLink = `/projects/${id}`;

  return (
    <Link href={postLink}>
      <Image
        src={url}
        width="0"
        height="0"
        sizes="100vw"
        alt={title}
        className="w-full h-full aspect-[1.09/1] hover:cursor-pointer"
      />
    </Link>
  );
};

export default PostCard;
