import MotionDiv from "@/components/MotionDiv";
import SideBar from "@/components/SideBar";
import StudioTab from "@/components/studio-tab";

function sortedPeople(peopleList) {
  // sort by priority
  const sortedPeopleList = peopleList.sort((a, b) => a.priority - b.priority);
  return sortedPeopleList;
}

function PeopleSection({ peopleList, algin, title }) {
  // algin left or right
  const layoutClassName =
    algin === "left"
      ? "w-1/2 text-left sm:text-left sm:self-start sm:w-fit sm:min-w-[120px]"
      : "w-1/2 self-end text-right sm:text-left sm:self-start sm:w-fit sm:min-w-[120px]";
  const arr = sortedPeople(peopleList);
  return (
    <div className={layoutClassName}>
      {/* <h1 className="text-[15px] mb-[15px]">{title}</h1> */}
      {arr.length === 0 && <p></p>}
      {arr &&
        arr.map((person, index) => (
          <div key={index} className="mb-2.5">
            <p className="leading-5"> {person.name}</p>
            <p className="text-[13px] leading-5">{person.email}</p>
          </div>
        ))}
    </div>
  );
}

async function getPeople() {
  const url = `https://cms-kkolstudio-w0mq.onrender.com/api/peoples`;
  const res = await fetch(url, { next: { revalidate: 30 } });
  return res.json();
}

/**
 * 피플 페이지 입니다.
 */
const People = async () => {
  const { data } = await getPeople();
  const currentList = data.filter((person) => person.working === true);
  const formerList = data.filter((person) => person.working === false);
  return (
    <MotionDiv>
      <SideBar />
      <div className="w-full flex flex-col p-4 ">
        <div className="h-[100px] sm:h-[400px]"></div>
        <StudioTab />
        <div className="w-full sm:w-4/5 flex mt-4 sm:flex-row flex-col space-y-4 sm:space-y-0 sm:justify-end sm:space-x-[80px]">
          <PeopleSection
            peopleList={currentList}
            algin="left"
            title={"CURRENT"}
          />
          {/* former area */}
          <PeopleSection
            peopleList={formerList}
            algin="left"
            title={"FORMER"}
          />
        </div>
      </div>
    </MotionDiv>
  );
};

export default People;
