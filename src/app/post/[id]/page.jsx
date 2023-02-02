"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Footer from "@/components/Footer";
import PostInfo from "@/components/PostInfo";
import LayoutBuilder from "@/components/LayoutBuilder";

const Post = ({ params: { id }, searchParams }) => {
  const [post, setPost] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const populate =
    "populate[0]=cover&populate[1]=designTeams&populate[2]=branding&populate[3]=photograph&populate[4]=contents.blockImage";
  const url = `${process.env.BASE_URL}/posts/${id}?${populate}`;
  const rawUrl =
    "https://cms-kkolstudio.onrender.com/api/posts/1?populate[0]=cover&populate[1]=designTeams&populate[2]=branding&populate[3]=photograph&populate[4]=contents.blockImage";
  useEffect(() => {
    setLoading(true);
    fetch(rawUrl)
      .catch((e) => console.log(e))
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setPost(result.data);
        setLoading(false);
      });
  }, []);

  if (isLoading) return <p>Loading...</p>;

  return (
    <div>
      {/* Cover */}
      {post && (
        <Image
          src={post.cover.url}
          alt={post.cover.name}
          width={post.cover.width}
          height={post.cover.height}
          className="w-full mb-[180px]"
        />
      )}
      {/* <!-- Content > */}
      {post && (
        <div className="w-3/4 mx-auto">
          <PostInfo post={post} />
          <div className="flex flex-col w-full">
            {post.contents &&
              post.contents.map((item) => (
                <LayoutBuilder key={item.id} layout={item} />
              ))}
          </div>

          <Footer isShow={true} />
        </div>
      )}
    </div>
  );
};

export default Post;
