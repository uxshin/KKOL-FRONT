"use client";

import { useRouter } from "next/navigation";

const LocaleButton = ({ title, locale, text, isSelected }) => {
  const router = useRouter();
  async function handleClick() {
    const urls = {
      ko: `https://cms-kkolstudio-w0mq.onrender.com/api/posts?locale=en`,
      en: `https://cms-kkolstudio-w0mq.onrender.com/api/posts`,
    };
    const rawUrl = urls[locale];
    const res = await fetch(rawUrl);
    const { data } = await res.json();
    const target = data.find((p) => p.title === title);
    if (target) {
      router.push(`/projects/${target.id}`);
    } else {
      alert("번역 자료가 없습니다.");
    }
  }

  if (isSelected) {
    return <p className="sm:text-[15px] text-[14px]">{text}</p>;
  }
  return (
    <p
      className="hover:cursor-pointer sm:text-[15px] text-[14px]"
      onClick={handleClick}
    >
      {text}
    </p>
  );
};

export default LocaleButton;
