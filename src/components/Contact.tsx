"use client";
import React from "react";
import { BackgroundBeams } from "./ui/background-beams";
import ContactItems from "./ContactItems";
import { Cover } from "./ui/cover";

export function Contact() {
  return (
    <div id="contact" className="min-h-[60vh] h-auto w-full rounded-md relative flex flex-col items-center justify-center antialiased py-12 sm:py-16 md:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto space-y-8 p-4 w-full">
        <div className="px-2 sm:px-4 md:mt-24 flex flex-col justify-center items-center text-center">
          <h2 className="bg-clip-text text-transparent bg-gradient-to-b from-neutral-600 to-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-sans relative z-20 font-bold tracking-tight">
            <Cover>Contact</Cover>
          </h2>
          <p className="max-w-xl text-base sm:text-lg md:text-xl mt-4 text-neutral-400">
            Feel free to reach out.
          </p>
        </div>
        <ContactItems/>
      </div>
      <BackgroundBeams />
    </div>
  );
}
