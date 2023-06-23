import InitialModal from "@/components/InitialModal";
import MotionDiv from "@/components/MotionDiv";
import PostCard from "@/components/PostCard";
import SideBar from "@/components/SideBar";

async function getData() {
  const url = `https://cms-kkolstudio-w0mq.onrender.com/api/posts?populate[0]=thumbnail`;
  const res = await fetch(url);
  return res.json();
}

const Projects = async () => {
  const { data } = await getData();
  return (
    <>
      <MotionDiv>
        <SideBar postList={data} />
        <div className="px-1.5 py-6 sm:px-[30px] h-screen sm:py-11 absolute w-full sm:w-3/4 right-0">
          <div className="flex flex-col space-y-2 pb-10 sm:pb-0 sm:space-y-0 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:grid-cols-4 sm:gap-2.5">
            {data &&
              data.map((d) => {
                return <PostCard post={d} key={d.id} />;
              })}
          </div>
        </div>
      </MotionDiv>
    </>
  );
};

export default Projects;
