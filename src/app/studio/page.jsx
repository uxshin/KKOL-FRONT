import MotionDiv from "@/components/MotionDiv";
import SideBar from "@/components/SideBar";
import StudioTab from "@/components/studio-tab";

const Studio = () => {
  const email = "kkol.studio@gmail.com";
  const mobile = "instagram: @kkol.studio";
  const address = "55-1, Imjeong-ro, Mapo-gu, Seoul, Republic of Korea";

  // const greetingText =
  //   "안녕하세요, 꼴스튜디오 일동입니다.\n먼저 저희 스튜디오에 관심을 기울여주셔서 감사드립니다.";
  // const greetingText =
  //   "안녕하세요, 꼴스튜디오입니다.\n저희는 2021년 7월의 어느 무더운 여름날,\n업태와 규모로 프로젝트의 경중을 구분짓지 않고\n좋은 의도와 이야기를 담은 공간을 만들고자 이루어진 공간디자이너 집단입니다.\n소규모 아뜰리에의 형식을 추구하며 공간 속에 존재하는 모든 요소들을 상상하고 구체화하는 일련의 작업을 전개합니다.";
  // // const description =
  //   "저희는 2021년 7월, 업태와 규모로 프로젝트의 경중을 구분 짓지 않고 좋은 의도와 이야기를 담은 공간을 만들고자 설립된 공간디자인 스튜디오입니다.\n아뜰리에의 형식을 추구하며 공간, 가구, 조명, 오브제 등 다양한 디자인 영역의 프로젝트를 진행하고 있습니다.";
  // const geetingTextEn =
  //   "On a sweltering summer day in July 2021,\nKKOL Studio was founded as a collective of spatial designers with the vision of creating meaningful spaces.\nWe believe that every project, whether large or small, deserves to be shaped with thoughtful intention and storytelling.\nEmbracing the essence of a small-scale atelier,\nwe meticulously envision and materialize every element that exists within a space,\nweaving together a cohesive and immersive experience.";

  const paragraph1 =
    "꼴 스튜디오는 공간에 의미를 부여하는\n디자이너 집단입니다.";

  const paragraph2 =
    "형식에 얽매이지 않는 아뜰리에적 접근을 바탕으로,\n공간을 이루는 모든 요소를 상상하고 구체화하며,\n브랜딩의 기초 단계부터 설계와 식골에 이르기까지\n전 과정을 유기적으로 이어갑니다.";

  const paragraph3 =
    "공간의 이용자에게 가장 적합한\n기능과 미감, 효율과 여운 사이의 균형을\n매 순간 새롭게 정의합니다.";

  const paragraph1_en =
    "KKOL Studio is a collective\nof spatial designers\ndedicated to creating\nmeaningful spaces.";

  const paragraph2_en =
    "Rooted in an atelier-like approach\nthat defies rigid conventions,\nwe imagine and articulate\nevery element that shapes a space.\nFrom the foundations of branding\nto design development and construction,\nwe engage in every phase\nas a seamless, integrated process.";

  const paragraph3_en =
    "For those who inhabit our spaces,\nWe continually redefine the balance\nbetween utility and beauty,\nclarity and emotion.";
  const paragraph1_en_desktop =
    "KKOL Studio is a collective of spatial designers\ndedicated to creating meaningful spaces.";

  const paragraph2_en_desktop =
    "Rooted in an atelier-like approach that defies rigid conventions,\nwe imagine and articulate every element that shapes a space.\nFrom the foundations of branding to design development and construction,\nwe engage in every phase as a seamless and integrated process.";

  const paragraph3_en_desktop =
    "For those who inhabit the spaces we create,\nWe continually redefine the balance\nbetween utility and beauty, clarity and emotion.";
  return (
    <MotionDiv>
      <SideBar />
      <div className="p-[18px] sm:p-10">
        <div className="h-[100px] sm:h-[300px]"></div>
        <StudioTab />
        {/* 데스크탑일때는 \n 을 무시하게 해줘 */}
        <p className="text-[14px] sm:text-[13px] mb-3 whitespace-pre-line leading-5 sm:whitespace-normal">
          {paragraph1}
        </p>
        <p className="text-[14px] sm:text-[13px] mb-3 whitespace-pre-line leading-5">
          {paragraph2}
        </p>
        <p className="text-[14px] sm:text-[13px] mb-12 whitespace-pre-line leading-5">
          {paragraph3}
        </p>
        <p className="text-[14px] sm:text-[13px] mb-3 whitespace-pre-line leading-5 sm:hidden">
          {paragraph1_en}
        </p>
        <p className="text-[14px] sm:text-[13px] mb-3 whitespace-pre-line leading-5 sm:hidden">
          {paragraph2_en}
        </p>
        <p className="text-[14px] sm:text-[13px] mb-3 whitespace-pre-line leading-5 sm:hidden">
          {paragraph3_en}
        </p>
        {/* 데스크탑 영문 파라그래프  */}
        <p className="text-[14px] sm:text-[13px] mb-3 whitespace-pre-line leading-5 hidden sm:block">
          {paragraph1_en_desktop}
        </p>
        <p className="text-[14px] sm:text-[13px] mb-3 whitespace-pre-line leading-5 hidden sm:block">
          {paragraph2_en_desktop}
        </p>
        <p className="text-[14px] sm:text-[13px] mb-3 whitespace-pre-line leading-5 hidden sm:block">
          {paragraph3_en_desktop}
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
