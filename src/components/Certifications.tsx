"use client";
import { Cover } from "./ui/cover";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion, MotionConfig } from "motion/react";
import { useState, useRef, createContext, useContext, useEffect } from "react";
import { IconX } from "@tabler/icons-react";
import { useOutsideClick } from "@/hooks/use-outside-click";
import { AnimatedTooltip } from "./ui/animated-tooltip";
import { IconType } from "react-icons/lib";
import { LinkPreview } from "./ui/link-preview";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa6";
import { Github } from "lucide-react";
import { HoverEffect } from "./ui/card-hover-effect";

export const certifications = [
  {
    title: "Scrum Fundamentals Certified",
    description:
      "Awarded for foundational knowledge and understanding of Scrum principles, practices, and roles. Demonstrates ability to contribute effectively to Scrum teams and projects.",
    src: "/ScrumFundamentalsCertified-ChediDayeh-1083185_page-0001.jpg",
  },
  {
    title: "Oracle Generative AI Professional",
    description:
      "Awarded for foundational knowledge and understanding of Generative AI capabilities. From understanding the core principles of 𝗔𝗜, 𝗠𝗟, 𝗮𝗻𝗱 𝗗𝗟 to mastering 𝗚𝗲𝗻𝗲𝗿𝗮𝘁𝗶𝘃𝗲 𝗔𝗜 𝗮𝗻𝗱 𝗥𝗔𝗚 systems.",
    src: "/Oracle Certification.png",
  },
  {
    title: "Hashgraph Developer Course",
    description:
      "Completed the Hashgraph Developer Course, gaining expertise in building decentralized applications on the Hedera Hashgraph platform. Acquired skills in smart contract development, consensus mechanisms, and distributed ledger technology.",
    src: "/Hedera Hashgraph Developer Certificate.png",
  }
];

export function Certifications() {
  return (
    <MotionConfig transition={{ duration: 0.3, ease: "easeInOut" }}>
      <div
        id="certifications"
        className="px-4 sm:px-6 md:px-8 lg:px-16 xl:px-52 mt-20 sm:mt-28 md:mt-36 flex flex-col justify-center items-center mb-6 sm:mb-10"
      >
        <h2 className="bg-clip-text text-transparent text-start bg-gradient-to-b from-neutral-600 to-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-sans relative z-20 font-bold tracking-tight">
          <Cover>My Certifications</Cover>
        </h2>
      </div>
      <div className="mx-auto">
        <HoverEffect items={certifications} />
      </div>
    </MotionConfig>
  );
}
