"use client";

import { useRouter } from "next/navigation";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";

// add className
const BackButton = ({ className }) => {
  const router = useRouter();
  function handleClick() {
    router.push("/projects");
  }
  return (
    <ChevronLeftIcon
      onClick={handleClick}
      className={`w-5 h-5 hover:cursor-pointer ${className}`}
    />
  );
};

export default BackButton;
