"use client";

import React from "react";
import { Skills } from "@/components/Skills";
import { Cover } from "@/components/ui/cover";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div
      id="home"
      className="w-full grid grid-cols-1 min-h-screen lg:grid-cols-2 gap-8 lg:gap-16 items-center relative px-4 md:px-8"
    >
      {/* Left Column: Title + Skills */}
      <div
        className="w-full flex flex-col items-center lg:items-start justify-center gap-4 lg:gap-6 
                      order-2 lg:order-1"
      >
        <h2 className="bg-clip-text text-transparent bg-gradient-to-b from-neutral-600 to-white text-4xl md:text-6xl font-sans py-2 font-bold tracking-tight text-center lg:text-left">
          Dayeh Chadi, <br /> Software <Cover>Engineer</Cover>
        </h2>

        <div className="flex flex-col gap-2 items-center lg:items-start">
          <Skills />
          <div className="w-full max-w-md flex lg:hidden flex-col items-center text-center">
            <h2 className="bg-clip-text text-transparent bg-gradient-to-b from-neutral-600 to-white text-2xl md:text-3xl lg:text-3xl font-sans font-bold tracking-tight">
              About me
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-neutral-400 mt-4">
              I'm a third-year Software Engineering student passionate about
              building innovative solutions powered by Machine Learning and
              Generative AI.
            </p>
          </div>
        </div>
      </div>

      {/* Right Column: Image + About Me */}
      <div
        className="w-full flex flex-col items-center justify-center gap-6 lg:gap-8 
                      order-1 lg:order-2"
      >
        {/* Image */}
        <div className="flex items-center justify-center">
          <div className="w-64 h-64 rounded-full overflow-hidden bg-[#0d0d0e] border flex items-center justify-center">
            <Image
              src="/chedi6.png"
              alt="model"
              width={3000}
              height={3000}
              quality={100}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* About Me */}
        <div className="w-full max-w-md hidden lg:flex flex-col items-center  text-center ">
          <h2 className="bg-clip-text text-transparent bg-gradient-to-b from-neutral-600 to-white text-2xl md:text-3xl lg:text-3xl font-sans font-bold tracking-tight">
            About me
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-neutral-400 mt-4">
            I'm a third-year Software Engineering student passionate about
            building innovative solutions powered by Machine Learning and
            Generative AI.
          </p>
        </div>
      </div>

      {/* Background Effects */}
      <ShootingStars className="z-[-1]" />
      <StarsBackground className="z-[-1]" />
    </div>
  );
};

export default HeroSection;
