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
        <SideBar isShow={true} />
        <div className="px-1.5 py-6 sm:px-[30px] h-[93%] overflow-y-scroll sm:my-10 w-full sm:w-3/4 absolute right-0 sm:py-0 no-scrollbar">
          {/* <div className={`flex flex-wrap`}> */}
          <div className="flex flex-col space-y-8 pb-10 sm:pb-0 sm:space-y-0 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:grid-cols-3 sm:gap-2">
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
