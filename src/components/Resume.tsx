import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { Cover } from "./ui/cover";
import { LinkPreview } from "./ui/link-preview";

export function Resume() {
  const data = [
    {
      title: "Education",
      content: (
        <div className="flex flex-col gap-4 sm:gap-[30px]">
          <div>
            <h4 className="text-[#f4f4f4] text-xl sm:text-2xl md:text-[1.8rem] font-[600]">
              <Cover>+ Tunisian Baccalaureate Degree</Cover>
            </h4>
            <span className="text-blue-500 my-2 sm:my-[10px] font-semibold block">
              2020 - 2021
            </span>
            <p className="mb-4 sm:mb-8 text-xs sm:text-sm md:text-base font-semibold text-neutral-200">
              High School Diploma
            </p>
          </div>

          <div>
            <h4 className="text-[#f4f4f4] text-xl sm:text-2xl md:text-[1.8rem] font-[600]">
              <Cover>
                + Preparatory cycles for engineering studies at ISIMS
              </Cover>
            </h4>
            <span className="text-blue-500 my-2 sm:my-[10px] font-semibold block">
              2021 - 2023
            </span>
            <p className="mb-4 sm:mb-8 text-xs sm:text-sm md:text-base font-semibold text-neutral-200">
              ISIMS (Higher Institute of Computer Scienceand Multimedia of
              Sfax).
            </p>
          </div>

          <div>
            <h4 className="text-[#f4f4f4] text-xl sm:text-2xl md:text-[1.8rem] font-[600]">
              <Cover>+ Software Engineering Degree</Cover>
            </h4>
            <span className="text-blue-500 my-2 sm:my-[10px] font-semibold block">
              2023 - 2026
            </span>
            <p className="mb-4 sm:mb-8 text-xs sm:text-sm md:text-base font-semibold text-neutral-200">
              Software Engineering at ISIMS (Higher Institute of Computer
              Scienceand Multimedia of Sfax).
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "Experience",
      content: (
        <div className="flex flex-col gap-4 sm:gap-[30px]">
          <div>
            <h4 className="text-[#f4f4f4] text-xl sm:text-2xl md:text-[1.8rem] font-[600]">
              <Cover>+ Freelancing - Upwork</Cover>
            </h4>
            <span className="text-blue-500 my-2 sm:my-[10px] font-semibold block">
              August 2024 - Today
            </span>
            <p className="mb-4 sm:mb-8 text-xs sm:text-sm md:text-base font-semibold text-neutral-200">
              Work as a Full Stack Developer at Upwork
              <br />
              Click{" "}
              <LinkPreview
                url="https://www.upwork.com/freelancers/~013a32a87b6c945b37?mp_source=share"
                className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500"
              >
                Here
              </LinkPreview>{" "}
              to view my upwork profile.
            </p>
          </div>

          <div>
            <h4 className="text-[#f4f4f4] text-xl sm:text-2xl md:text-[1.8rem] font-[600]">
              <Cover>+ Summer internship at “After Code”</Cover>
            </h4>
            <span className="text-blue-500 my-2 sm:my-[10px] font-semibold block">
              August 2024 - Today
            </span>
            <p className="mb-4 sm:mb-8 text-xs sm:text-sm md:text-base font-semibold text-neutral-200">
              Developing a meeting intelligence platform that seamlessly joins
              your video calls on Zoom, Google Meet, and Microsoft Teams to
              deliver AI-powered transcriptions, concise summaries, and
              actionable insights. This project showcases the creation of a SaaS
              platform with advanced AI integrations, leveraging Gemini and
              Pinecone to provide next-generation conversational meeting
              intelligence.
              
            </p>
          </div>
        </div>
      ),
    },
  ];
  return (
    <div
      id="education"
      className="relative w-full overflow-clip px-4 sm:px-6 md:px-8 lg:px-16 xl:px-52"
    >
      <Timeline data={data} />
    </div>
  );
}
