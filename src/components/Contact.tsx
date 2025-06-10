"use client";
import React from "react";
import { BackgroundBeams } from "./ui/background-beams";
import ContactItems from "./ContactItems";
import { Cover } from "./ui/cover";

export function Contact() {
  return (
    <div id="contact" className="h-[40rem] w-full rounded-md  relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-7xl mx-auto space-y-8 p-4">
      <div className="px-8 md:mt-36 flex flex-col justify-center items-center">
                    <h2 className="bg-clip-text text-transparent text-start bg-gradient-to-b  from-neutral-600 to-white text-2xl md:text-2xl lg:text-4xl font-sans  relative z-20 font-bold tracking-tight">
                        <Cover>Contact</Cover>
                    </h2>
                    <p className="max-w-x1 text-[1rem] text-start mt-[20px] md:text-1g text-neutral-400">
                        Feel free to reach out.
                    </p>
                </div>
        <p></p>
        {/* <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
          Welcome to MailJet, the best transactional email service on the web.
          We provide reliable, scalable, and customizable email solutions for
          your business. Whether you&apos;re sending order confirmations,
          password reset emails, or promotional campaigns, MailJet has got you
          covered.
        </p> */}
        <ContactItems/>
      </div>
      <BackgroundBeams />
    </div>
  );
}
