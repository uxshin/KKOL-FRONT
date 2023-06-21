"use client";

import { useRouter } from "next/navigation";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";

const BackButton = () => {
  const router = useRouter();
  function handleClick() {
    router.push("/");
  }
  return (
    <ChevronLeftIcon
      onClick={handleClick}
      className="w-5 h-5 hover:cursor-pointer mb-9"
    />
  );
};

export default BackButton;
