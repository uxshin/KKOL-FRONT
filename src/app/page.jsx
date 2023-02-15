import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MotionDiv from "@/components/MotionDiv";
import PostCard from "@/components/PostCard";

async function getData() {
  const url = `${process.env.BASE_URL}posts?populate[0]=thumbnail`;
  const res = await fetch(url, { next: { revalidate: 10 } });
  return res.json();
}

export default async function Home() {
  const { data } = await getData();
  console.log(data);
  function range(start, stop, step) {
    if (typeof stop == "undefined") {
      // one param defined
      stop = start;
      start = 0;
    }

    if (typeof step == "undefined") {
      step = 1;
    }

    if ((step > 0 && start >= stop) || (step < 0 && start <= stop)) {
      return [];
    }

    var result = [];
    for (var i = start; step > 0 ? i < stop : i > stop; i += step) {
      result.push(i);
    }

    return result;
  }
  const startYear = range(2021, 2099).reverse();
  const grettingText =
    "꼴 스튜디오는 공간과 사람 간의 관계를 만듭니다." +
    "\n" +
    "관계는 공간을 정의하고 연결하며 적용됩니다.\n꼴 스튜디오는 기존의 꼴을 확장해 새로운 꼴을 창조합니다.";
  return (
    <>
      <Header />
      <MotionDiv classname="w-full lg:w-full 3xl:w-3/4 mx-auto px-2 lg:text-lg text-sm">
        <div className="w-full lg:h-screen relative">
          <h1 className="pt-[240px] pb-[170px] lg:py-0 lg:absolute 3xl:bottom-[280px] lg:bottom-[190px] bottom-[170px] whitespace-pre-wrap lg:leading-8 leading-6">
            {grettingText}
          </h1>
        </div>
        <div className="3xl:mb-[100px] lg:mb-[70px] mb-[50px] border-b-[1px] border-black 3xl:pb-[389px] lg:pb-[350px] pb-[230px]">
          {startYear.map((year, i) => {
            const filter = data.filter(
              (doc) => year.toString() === doc.completedAt.split("-")[0]
            );
            if (filter.length > 0) {
              return (
                <div key={i} className="">
                  <h1 className="py-2 3xl:py-5">{year}</h1>
                  {filter &&
                    filter.map((doc) => {
                      return <PostCard key={doc.id} post={doc} />;
                    })}
                </div>
              );
            }
          })}
        </div>
      </MotionDiv>
    </>
  );
}
