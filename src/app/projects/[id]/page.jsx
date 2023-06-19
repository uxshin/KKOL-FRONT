import BackButton from "@/components/BackButton";
import Carousel from "@/components/Carousel";
import DetailRow from "@/components/DetailRow";
import LocaleButton from "@/components/LocaleButton";
import MotionDiv from "@/components/MotionDiv";

async function getPost(id) {
  const rawUrl = `https://cms-kkolstudio-w0mq.onrender.com/api/posts/${id}`;
  const res = await fetch(rawUrl);
  return res.json();
}

const ProjectDetail = async ({ params }) => {
  const { id } = params;
  const { data } = await getPost(id);
  const post = data;
  const {
    design,
    title,
    content,
    construction,
    client,
    area,
    location,
    branding,
    photo,
    locale,
  } = post;
  function handleBack() {
    window.history.back();
  }
  return (
    <MotionDiv>
      <div className="w-1/3 fixed h-screen px-10 py-11 overflow-y-scroll no-scrollbar">
        <BackButton />
        <div className="w-1/2 pr-4">
          <DetailRow title="디자인" body={design} />
          <DetailRow title="시공" body={construction} />
          <DetailRow title="브랜딩" body={branding} />
          <DetailRow title="준공사진" body={photo} />
          <DetailRow title="클라이언트" body={client} />
          <DetailRow title="면적" body={area + " m2"} />
          <DetailRow title="위치" body={location} />
        </div>
        <div className="flex justify-between items-start mt-[300px] mb-7">
          <p className="text-[15px] font-bold">{title}</p>
          <div className="flex flex-row space-x-0.5 text-[10px] items-center">
            <LocaleButton
              locale={locale}
              title={title}
              text={`KR`}
              isSelected={locale == "ko"}
            />
            <p>/</p>
            <LocaleButton
              locale={locale}
              title={title}
              text={`EN`}
              isSelected={locale == "en"}
            />
          </div>
        </div>
        <p className="text-[15px] pb-10">{content}</p>
      </div>
      <div className="w-2/3 absolute right-0 h-screen">
        <Carousel />
      </div>
    </MotionDiv>
  );
};

export default ProjectDetail;
