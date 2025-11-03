"use client";

import React from "react";
import { motion } from "motion/react";
import { FloatingDock } from "@/components/ui/floating-dock";
import { IconHome } from "@tabler/icons-react";
import { Code2Icon, FolderCode, GraduationCap, Mail, Trophy } from "lucide-react";

export function NavBar() {
  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };
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
    {
      title: "Certifications",
      icon: (
        <Trophy className="h-full w-full  text-neutral-300" />
      ),
      href: "#certifications",
    },
    // {
    //   title: "Contact",
    //   icon: (
    //     <Mail className="h-full w-full  text-neutral-300" />
    //   ),
    //   href: "#contact",
    // },

  ];
  return (
    <motion.div
      className="fixed translate-x-[-90%] md:left-[40%] md:translate-x-[-50%] top-[170px] md:top-[60px] z-[101]"
      variants={navVariants}
      initial="hidden"
      animate="visible"
    >
      <FloatingDock
        mobileClassName="translate-y-20" // only for demo, remove for production
        items={links}
      />
    </motion.div>
  );
}
