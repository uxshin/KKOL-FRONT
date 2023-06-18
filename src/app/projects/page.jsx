import MotionDiv from "@/components/MotionDiv";
import SideBar from "@/components/SideBar";

const Project = () => {
  return (
    <MotionDiv>
      <SideBar />

      <div className="px-[30px] h-screen py-11 bg-red  absolute w-3/4 right-0"></div>
    </MotionDiv>
  );
};

export default Project;
