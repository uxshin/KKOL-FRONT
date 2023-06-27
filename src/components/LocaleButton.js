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
    router.push(`/projects/${target.id}`);
  }

  if (isSelected) {
    return <p className="sm:text-[15px]">{text}</p>;
  }
  return (
    <p className="hover:cursor-pointer sm:text-[15px]" onClick={handleClick}>
      {text}
    </p>
  );
};

export default LocaleButton;
