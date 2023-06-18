import MotionDiv from "@/components/MotionDiv";
import PostCard from "@/components/PostCard";
import SideBar from "@/components/SideBar";

async function getData() {
  const url = `${process.env.BASE_URL}posts?populate[0]=thumbnail`;
  const res = await fetch(url);
  return res.json();
}

const Project = async () => {
  const { data } = await getData();
  console.log(data);
  return (
    <MotionDiv>
      <SideBar postList={data} />
      <div className="px-[30px] h-screen py-11 absolute w-full sm:w-3/4 right-0">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 3xl:grid-cols-4 gap-2.5">
          {data &&
            data.map((d) => {
              return <PostCard post={d} key={d.id} />;
            })}
        </div>
      </div>
    </MotionDiv>
  );
};

export default Project;
