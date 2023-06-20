"use client";

import BrandLogo from "@/components/BrandLogo";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import { Transition } from "@headlessui/react";

const SideBar = ({ postList }) => {
  let [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
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
  ];
  return (
    <>
      <div className="w-full px-1.5 py-2 flex sm:inline items-center justify-between sm:w-1/4 sm:fixed sm:h-full sm:px-10 sm:py-11">
        <BrandLogo />
        <ul className="flex space-x-4 sm:space-x-0 text-[13px] sm:mt-[37px] sm:flex-col">
          {menuList &&
            menuList.map((m) => {
              if (m.name === "PROJECT") {
                return (
                  <>
                    <li
                      onClick={handleModel}
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
        <ul className="absolute bottom-11 hidden sm:inline">
          {postList &&
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
      </div>
      {isOpen && (
        <Transition
          show={isOpen}
          enter="transition ease duration-500 transform"
          enterFrom="opacity-0 -translate-y-12"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease duration-300 transform"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 -translate-y-12"
        >
          <ul className="absolute w-full h-screen top-10 sm:hidden bg-white py-8 px-1.5 z-10 ">
            {postList &&
              postList.map((p) => {
                return (
                  <p
                    onClick={() => goToProject(p.id)}
                    key={p.id}
                    className="text-[12px] leading-6 hover:cursor-pointer"
                  >
                    {p.title}
                  </p>
                );
              })}
          </ul>
        </Transition>
      )}
      {/* <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex h-full items-center justify-center text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="absolute w-full h-full mt-[100px] transform overflow-hidden bg-white text-left align-middle shadow-xl transition-all">
                  <ul className="">
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
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition> */}
    </>
  );
};

export default SideBar;
