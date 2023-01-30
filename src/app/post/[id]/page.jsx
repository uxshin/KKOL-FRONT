import React from "react";
import Image from "next/image";
import PostInfo from "@/components/PostInfo";
import LayoutBuilder from "@/components/LayoutBuilder";
import Footer from "@/components/Footer";
import "server-only";

async function getPost(id) {
  const url = `${process.env.BASE_URL}/posts/${id}`;
  const res = await fetch(url);

  if (!res.ok) {
    throw Error();
  }
  return res.json();
}

const Page = async ({ params: { id }, searchParams }) => {
  const post = await getPost(id);
  const { coverImg, layout } = post;
  return (
    <div>
      {/* Cover */}
      <Image
        src={coverImg.url}
        width="1920"
        height="1000"
        className="w-full mb-[180px]"
      />
      {/* <!-- Content > */}
      <div className="w-3/4 mx-auto">
        <PostInfo post={post} />
        <div className="flex flex-col w-full">
          {layout &&
            layout.map((item) => <LayoutBuilder key={item.id} layout={item} />)}
        </div>

        <Footer isShow={true} />
      </div>
    </div>
  );
};

export default Page;
