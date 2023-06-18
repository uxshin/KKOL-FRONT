"use client";

import BrandLogo from "@/components/BrandLogo";
import { usePathname } from "next/navigation";
import Link from "next/link";

const SideBar = ({ postList }) => {
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
  ];
  return (
    <div className="w-full px-1.5 py-2 flex sm:inline items-center justify-between sm:w-1/4 sm:fixed sm:h-full sm:px-10 sm:py-11">
      <BrandLogo />
      <ul className="flex space-x-4 sm:space-x-0 text-[13px] sm:mt-[37px] sm:flex-col">
        {menuList &&
          menuList.map((m) => (
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
          ))}
      </ul>
      <ul className="absolute bottom-11 hidden sm:inline">
        {postList &&
          postList.map((p) => {
            return (
              <p
                key={p.id}
                className="text-[13px] leading-6 hover:cursor-pointer"
              >
                {p.title}
              </p>
            );
          })}
      </ul>
    </div>
  );
};

export default SideBar;
