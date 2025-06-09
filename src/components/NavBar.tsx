import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import { IconHome } from "@tabler/icons-react";
import { Code2Icon, FolderCode, GraduationCap } from "lucide-react";

export function NavBar() {
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full  text-neutral-300" />
      ),
      href: "#home",
    },

    {
      title: "Skills",
      icon: (
        <Code2Icon className="h-full w-full  text-neutral-300" />
      ),
      href: "#skills",
    },

    {
      title: "Education",
      icon: (
        <GraduationCap className="h-full w-full  text-neutral-300" />
      ),
      href: "#education",
    },
    // {
    //   title: "Experience",
    //   icon: (
    //     <Briefcase className="h-full w-full  text-neutral-300" />
    //   ),
    //   href: "#education",
    // },
    {
      title: "Projects",
      icon: (
        <FolderCode className="h-full w-full  text-neutral-300" />
      ),
      href: "#projects",
    },

  ];
  return (
    <div className="fixed left-[90%] translate-x-[-90%] md:left-[50%] md:translate-x-[-50%] top-[170px] md:top-[60px] z-[101] ">
      <FloatingDock
        mobileClassName="translate-y-20" // only for demo, remove for production
        items={links}
      />
    </div>
  );
}
