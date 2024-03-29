"use client";

import BrandLogo from "@/components/BrandLogo";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { useState, useEffect } from "react";

const SideBar = ({ isShow }) => {
  async function getData() {
    const url = `https://cms-kkolstudio-w0mq.onrender.com/api/posts?populate[0]=thumbnail&sort=publishedAt:desc`;
    const res = await fetch(url);
    return res.json();
  }
  const [postList, setPostList] = useState([]);
  useEffect(() => {
    getData().then((res) => {
      setPostList(res.data);
    });
  }, []);
  let [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  function goToMain() {
    router.push("/projects");
  }
  function handleModel() {
    if (isOpen) {
      closeModal();
    } else {
      openModal();
    }
  }
  function goToProject(id) {
    router.push(`/projects/${id}`);
  }
  const pathname = usePathname();
  const menuList = [
    {
      name: "PROJECT",
      route: "/projects",
    },
    {
      name: "STUDIO",
      route: "/studio",
    },
    // {
    //   name: "PEOPLE",
    //   route: "/people",
    // },
  ];
  return (
    <>
      <div className="w-full px-[18px] py-3 flex sm:inline items-center justify-between sm:w-1/4 sm:fixed sm:h-full sm:px-10 sm:py-11">
        <BrandLogo />
        <ul className="flex space-x-4 sm:space-x-0 text-[13px] sm:mt-[37px] sm:flex-col">
          {menuList &&
            menuList.map((m) => {
              if (m.name === "PROJECT") {
                return (
                  <>
                    <li
                      onClick={goToMain}
                      className={
                        m.route === pathname
                          ? "sm:hidden underline text-[15px] underline-offset-4 hover:cursor-pointer"
                          : "sm:hidden text-[15px] hover:cursor-pointer"
                      }
                    >
                      PROJECTS
                    </li>
                    <Link key={m.name} href={m.route}>
                      <li
                        className={
                          m.route === pathname
                            ? "hidden sm:inline underline text-[15px] underline-offset-4 hover:cursor-pointer"
                            : "hidden sm:inline text-[15px] hover:cursor-pointer"
                        }
                      >
                        PROJECTS
                      </li>
                    </Link>
                  </>
                );
              }
              return (
                <Link key={m.name} href={m.route}>
                  <li
                    className={
                      m.route === pathname
                        ? "underline text-[15px] underline-offset-4 hover:cursor-pointer"
                        : "text-[15px] hover:cursor-pointer"
                    }
                  >
                    {m.name}
                  </li>
                </Link>
              );
            })}
        </ul>
        {isShow && (
          <ul className="absolute bottom-11 hidden sm:inline">
            {postList.length > 0 &&
              postList.map((p) => {
                return (
                  <p
                    onClick={() => goToProject(p.id)}
                    key={p.id}
                    className="text-[13px] leading-6 hover:cursor-pointer"
                  >
                    {p.title}
                  </p>
                );
              })}
          </ul>
        )}
      </div>
    </>
  );
};

export default SideBar;
