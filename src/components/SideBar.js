"use client";

import BrandLogo from "@/components/BrandLogo";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

const CustomLink = ({ href, ...props }) => {
  const pathname = usePathname();
  const isActive = href === pathname;

  return (
    <NavigationMenu.Link asChild active={isActive}>
      <Link
        href={href}
        className={
          isActive
            ? "underline text-[15px] underline-offset-4 hover:cursor-pointer"
            : "text-[15px] hover:cursor-pointer"
        }
        {...props}
      />
    </NavigationMenu.Link>
  );
};

const SideBar = ({ isShow }) => {
  const ref = useRef();
  const ulRef = useRef();
  const pathname = usePathname();
  const router = useRouter();

  async function getData() {
    const url = `https://cms-kkolstudio-w0mq.onrender.com/api/posts?populate[0]=thumbnail&sort=publishedAt:desc`;
    const res = await fetch(url);
    return res.json();
  }

  const [postList, setPostList] = useState([]);
  const [isScrollAtBottom, setIsScrollAtBottom] = useState(true);

  useEffect(() => {
    getData().then((res) => {
      setPostList(res.data);
    });
  }, []);
  let [isOpen, setIsOpen] = useState(false);

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

  // 스크롤 위치 확인 함수
  const checkScrollPosition = () => {
    if (ulRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = ulRef.current;
      const isAtBottom = scrollTop + clientHeight >= scrollHeight - 1; // 1px 여유
      setIsScrollAtBottom(isAtBottom);
    }
  };

  // 최하단으로 스크롤하는 함수
  const scrollToBottom = () => {
    if (ulRef.current) {
      ulRef.current.scrollTo({
        top: ulRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  };

  // 스크롤 이벤트 리스너 등록
  useEffect(() => {
    const ulElement = ulRef.current;
    if (ulElement) {
      ulElement.addEventListener("scroll", checkScrollPosition);
      // 초기 스크롤 위치 확인
      checkScrollPosition();

      return () => {
        ulElement.removeEventListener("scroll", checkScrollPosition);
      };
    }
  }, [postList]); // postList가 변경될 때마다 다시 확인

  const isTrigger = pathname === "/studio" || pathname === "/people";
  const menuList = [
    {
      name: "WORKS",
      route: "/projects",
    },
    {
      name: "STUDIO",
      route: "/studio",
    },
  ];

  return (
    <>
      <div className="w-full h-auto px-[18px] py-3 flex sm:inline items-center justify-between sm:w-1/4 sm:fixed sm:h-full sm:px-10 sm:py-11 bg-transparent">
        <BrandLogo />
        {/* PC 용 */}
        <NavigationMenu.Root className="sm:mt-[37px] text-[13px] sm:visible invisible hidden sm:flex bg-white pb-4">
          <NavigationMenu.List className="sm:flex-col flex space-x-4 sm:space-x-0 items-start">
            <NavigationMenu.Item>
              <CustomLink href="/projects">WORKS</CustomLink>
            </NavigationMenu.Item>
            <NavigationMenu.Item className="sm:flex sm:items-start sm:space-x-4 space-y-1 sm:space-y-0">
              {isTrigger ? (
                <NavigationMenu.Item className="flex">
                  <p className="underline text-[15px] underline-offset-4 mr-4">
                    STUDIO
                  </p>
                  <NavigationMenu.Sub className="z-40 bg-white">
                    <NavigationMenu.List className="px-4">
                      <NavigationMenu.Item>
                        <CustomLink href="/studio">INFO</CustomLink>
                      </NavigationMenu.Item>
                      <NavigationMenu.Item>
                        <CustomLink href="/people">PEOPLE</CustomLink>
                      </NavigationMenu.Item>
                    </NavigationMenu.List>
                  </NavigationMenu.Sub>
                </NavigationMenu.Item>
              ) : (
                <>
                  <NavigationMenu.Trigger
                    ref={ref}
                    className={
                      pathname === "/studio" || pathname === "/people"
                        ? "underline text-[15px] underline-offset-4 hover:cursor-pointer"
                        : "text-[15px] hover:cursor-pointer"
                    }
                  >
                    STUDIO
                  </NavigationMenu.Trigger>
                  <NavigationMenu.Content>
                    <NavigationMenu.Sub className="z-40 bg-white">
                      <NavigationMenu.List className="px-4">
                        <NavigationMenu.Item>
                          <CustomLink href="/studio">INFO</CustomLink>
                        </NavigationMenu.Item>
                        <NavigationMenu.Item>
                          <CustomLink href="/people">PEOPLE</CustomLink>
                        </NavigationMenu.Item>
                      </NavigationMenu.List>
                    </NavigationMenu.Sub>
                  </NavigationMenu.Content>
                </>
              )}
            </NavigationMenu.Item>
          </NavigationMenu.List>
        </NavigationMenu.Root>

        {/* // 모바일용 */}
        <div className={`flex space-x-3 sm:invisible`}>
          <ul className="flex space-x-2 sm:space-x-0 text-[13px] sm:mt-[37px] sm:flex-col">
            {menuList &&
              menuList.map((m) => {
                if (m.name === "PROJECT") {
                  return (
                    <>
                      <li
                        onClick={goToMain}
                        className={
                          m.route === pathname
                            ? "sm:hidden underline text-[13px] underline-offset-4 hover:cursor-pointer"
                            : "sm:hidden text-[13px] hover:cursor-pointer"
                        }
                      >
                        PROJECTS
                      </li>
                      <Link key={m.name} href={m.route}>
                        <li
                          className={
                            m.route === pathname
                              ? "hidden sm:inline underline text-[13px] underline-offset-4 hover:cursor-pointer"
                              : "hidden sm:inline text-[13px] hover:cursor-pointer"
                          }
                        >
                          PROJECTS
                        </li>
                      </Link>
                    </>
                  );
                }
                if (m.name === "STUDIO") {
                  return (
                    <Link key={m.name} href={m.route}>
                      <li
                        className={
                          pathname === "/studio" || pathname === "/people"
                            ? "underline text-[13px] underline-offset-4 hover:cursor-pointer"
                            : "text-[13px] hover:cursor-pointer"
                        }
                      >
                        {m.name}
                      </li>
                    </Link>
                  );
                }

                return (
                  <Link key={m.name} href={m.route}>
                    <li
                      className={
                        m.route === pathname
                          ? "underline text-[13px] underline-offset-4 hover:cursor-pointer"
                          : "text-[13px] hover:cursor-pointer"
                      }
                    >
                      {m.name}
                    </li>
                  </Link>
                );
              })}
          </ul>
        </div>

        {isShow && (
          <div className="absolute bottom-11 flex flex-col">
            <ul
              ref={ulRef}
              className="hidden sm:inline max-h-[336px] overflow-y-auto pr-2 no-scrollbar"
            >
              {postList.length > 0 &&
                postList.map((p) => {
                  return (
                    <li
                      onClick={() => goToProject(p.id)}
                      key={p.id}
                      className="text-[13px] leading-6 hover:cursor-pointer"
                    >
                      {p.title}
                    </li>
                  );
                })}
            </ul>

            <ChevronDownIcon
              className={`w-5 h-5 cursor-pointer hover:opacity-70 transition-all duration-300 ${
                isScrollAtBottom
                  ? "opacity-0 pointer-events-none"
                  : "opacity-100"
              }`}
              onClick={scrollToBottom}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default SideBar;
