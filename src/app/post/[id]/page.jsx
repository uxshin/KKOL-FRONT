import React from "react";
import Image from "next/image";
import PostInfo from "@/components/PostInfo";
import LayoutBuilder from "@/components/LayoutBuilder";
import Footer from "@/components/Footer";

async function getPost(id) {
  const populate =
    "populate[0]=cover&populate[1]=designTeams&populate[2]=branding&populate[3]=photograph&populate[4]=contents.blockImage";
  const url = `${process.env.BASE_URL}/posts/${id}?${populate}`;
  const res = await fetch(url);

  if (!res.ok) {
    throw Error();
  }
  return res.json();
}

const Post = async ({ params: { id }, searchParams }) => {
  const post = await getPost(id);
  const { data } = post;
  const { cover, contents } = data;
  return (
    <div>
      {/* Cover */}
      <Image
        src={cover.url}
        width={cover.width}
        height={cover.height}
        className="w-full mb-[180px]"
      />
      {/* <!-- Content > */}
      <div className="w-3/4 mx-auto">
        <PostInfo post={data} />
        <div className="flex flex-col w-full">
          {contents &&
            contents.map((item) => (
              <LayoutBuilder key={item.id} layout={item} />
            ))}
        </div>

        <Footer isShow={true} />
      </div>
    </div>
  );
};

export default Post;
