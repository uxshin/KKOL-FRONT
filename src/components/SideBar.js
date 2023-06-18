"use client";

import BrandLogo from "@/components/BrandLogo";
import { usePathname } from "next/navigation";
import Link from "next/link";

const SideBar = () => {
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
    <div className="w-full px-1.5 py-2 flex 3xl:inline items-center 3x:items-baseline justify-between 3xl:w-1/4 3xl:absolute 3xl:h-full 3xl:px-10 3xl:py-11">
      <BrandLogo />
      <ul className="flex space-x-4 3xl:space-x-0 text-[13px] 3xl:mt-[37px] 3xl:flex-col">
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
    </div>
  );
};

export default SideBar;
