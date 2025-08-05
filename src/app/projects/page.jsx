import MotionDiv from "@/components/MotionDiv";
import PostCard from "@/components/PostCard";
import SideBar from "@/components/SideBar";

export const metadata = {
  title: "꼴 스튜디오의 프로젝트",
  description:
    "Kkol Studio's Works and Projects - 공간 디자인과 브랜딩 프로젝트를 소개합니다",
  keywords:
    "꼴스튜디오, 프로젝트, 공간디자인, 브랜딩, KKOL STUDIO, 인테리어 디자인",
  openGraph: {
    title: "꼴 스튜디오 프로젝트",
    description: "Kkol Studio's Works and Projects",
    type: "website",
    url: "https://www.kkol-studio.com/projects",
  },
  twitter: {
    card: "summary_large_image",
    title: "꼴 스튜디오 프로젝트",
    description: "Kkol Studio's Works and Projects",
  },
};

async function getData() {
  const url = `https://cms-kkolstudio-w0mq.onrender.com/api/posts?populate[0]=thumbnail&sort=publishedAt:desc`;
  const res = await fetch(url, { next: { revalidate: 30 } });
  return res.json();
}

const Projects = async () => {
  const { data } = await getData();
  return (
    <>
      <MotionDiv>
        <SideBar isShow={true} />
        <div className="px-[18px] py-6 sm:px-[30px] h-[93%] overflow-y-scroll sm:my-10 w-full sm:w-3/4 absolute right-0 sm:py-0 no-scrollbar">
          {/* <div className={`flex flex-wrap`}> */}
          <div className="flex flex-col space-y-8 pb-10 sm:pb-0 sm:space-y-0 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:grid-cols-3 sm:gap-1">
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
