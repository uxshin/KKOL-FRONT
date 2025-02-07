import MotionDiv from "@/components/MotionDiv";
import SideBar from "@/components/SideBar";
import StudioTab from "@/components/studio-tab";

const Studio = () => {
  const email = "kkol.studio@gmail.com";
  const mobile = "instagram: @kkol.studio";
  const address = "55-1, Imjeong-ro, Mapo-gu, Seoul, Republic of Korea";

  // const greetingText =
  //   "안녕하세요, 꼴스튜디오 일동입니다.\n먼저 저희 스튜디오에 관심을 기울여주셔서 감사드립니다.";
  const greetingText =
    "안녕하세요, 꼴스튜디오입니다.\n저희는 2021년 7월의 어느 무더운 여름날,\n업태와 규모로 프로젝트의 경중을 구분짓지 않고\n좋은 의도와 이야기를 담은 공간을 만들고자 이루어진 공간디자이너 집단입니다.\n소규모 아뜰리에의 형식을 추구하며 공간 속에 존재하는 모든 요소들을 상상하고 구체화하는 일련의 작업을 전개합니다.";
  // const description =
  //   "저희는 2021년 7월, 업태와 규모로 프로젝트의 경중을 구분 짓지 않고 좋은 의도와 이야기를 담은 공간을 만들고자 설립된 공간디자인 스튜디오입니다.\n아뜰리에의 형식을 추구하며 공간, 가구, 조명, 오브제 등 다양한 디자인 영역의 프로젝트를 진행하고 있습니다.";
  const geetingTextEn =
    "On a sweltering summer day in July 2021,\nKKOL Studio was founded as a collective of spatial designers with the vision of creating meaningful spaces.\nWe believe that every project, whether large or small, deserves to be shaped with thoughtful intention and storytelling.\nEmbracing the essence of a small-scale atelier,\nwe meticulously envision and materialize every element that exists within a space,\nweaving together a cohesive and immersive experience.";
  return (
    <MotionDiv>
      <SideBar />
      <div className="p-[18px] sm:p-10">
        <div className="h-[200px] sm:h-[300px]"></div>
        <StudioTab />
        <p className="text-[14px] sm:text-[15px] mb-6 whitespace-pre-line">
          {greetingText}
        </p>
        <p className="text-[14px] sm:text-[13px] mb-6 whitespace-pre-line">
          {geetingTextEn}
        </p>
        <div className="h-[100px] sm:h-[200px]"></div>
        <div className="text-[14px] sm:text-[13px] leading-6 sm:leading-7">
          <p>{email}</p>
          <p>{mobile}</p>
          <p>{address}</p>
        </div>
      </div>
    </MotionDiv>
  );
};

export default Studio;
