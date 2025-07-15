"use client";

import { NavigationLink } from "@/components/links";

export const StudioTab = () => {
  const tabs = [
    {
      text: "INFO",
      href: "/studio",
    },

    {
      text: "PEOPLE",
      href: "/people",
    },
  ];
  return (
    <>
      {/* only show at mobile page , tabs two */}
      <div className="sm:hidden mb-[50px] sm:mb-0">
        <div className="flex space-x-3">
          {tabs.map((tab, index) => (
            <NavigationLink key={index} href={tab.href}>
              {tab.text}
            </NavigationLink>
          ))}
        </div>
      </div>
    </>
  );
};

export default StudioTab;
