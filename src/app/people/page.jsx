import MotionDiv from "@/components/MotionDiv";
import SideBar from "@/components/SideBar";
import React from "react";

/**
 * 피플 페이지 입니다.
 */
const People = () => {
  const peopleList = [
    // name, email, working
    {
      name: "Dajeong Kim",
      email: "kimdj.kkol@gmail.com",
    },
    {
      name: "Dajeong Kim",
      email: "kimdj.kkol@gmail.com",
    },
    {
      name: "Dajeong Kim",
      email: "kimdj.kkol@gmail.com",
    },
    {
      name: "Dajeong Kim",
      email: "kimdj.kkol@gmail.com",
    },
    {
      name: "Dajeong Kim",
      email: "kimdj.kkol@gmail.com",
    },
  ];
  const formerList = [];
  return (
    <MotionDiv>
      <SideBar />
      <div className="w-full flex items-center justify-center h-screen ">
        {/* current area */}
        <div className="space-x-10 flex">
          <div>
            <h1>CURRENT</h1>
            {peopleList.length === 0 && <p>데이터가 없습니다</p>}
            {peopleList &&
              peopleList.map((person, index) => (
                <div key={index}>
                  <p>{person.name}</p>
                  <p>{person.email}</p>
                </div>
              ))}
          </div>
          {/* former area */}
          <div>
            <h1>FORMER</h1>
            {formerList.length === 0 && <p>데이터가 없습니다</p>}
            {formerList &&
              formerList.map((person, index) => (
                <div key={index}>
                  <p>{person.name}</p>
                  <p>{person.email}</p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </MotionDiv>
  );
};

export default People;
