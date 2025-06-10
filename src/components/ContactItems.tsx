"use client";

import { Mail, Linkedin } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { FaLocationArrow, FaWhatsapp } from "react-icons/fa6";
import { LinkPreview } from "@/components/ui/link-preview";

interface ContactItems {
  area: string;
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
  href: string;
}

const GridItem = ({ area, icon, title, description, href }: ContactItems) => {
  return (
    <li className={`min-h-[14rem] list-none ${area}`}>
      <div className="relative h-full w-96 rounded-2xl border p-2 md:rounded-3xl md:p-3 z-20">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />
        <div className="border-0.75 relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl p-6 md:p-6 shadow-[0px_0px_27px_0px_#2D2D2D]">
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <div className="w-fit rounded-lg border border-gray-600 p-2">
              {icon}
            </div>
            <div className="space-y-3">
              <h3 className="-tracking-4 pt-0.5 font-sans text-xl/[1.375rem] font-semibold text-balance md:text-2xl/[1.875rem] text-white">
                {title}
              </h3>
              <h2 className="font-sans text-sm/[1.125rem] md:text-base/[1.375rem] text-neutral-400 [&_b]:md:font-semibold [&_strong]:md:font-semibold break-words">
                {description}
              </h2>
              <LinkPreview
                url={href}
                className="bg-[#5070ff2f] font-medium px-4 my-2 rounded-lg mt-3 inline-flex items-center gap-2 hover:bg-[#5070ff4f] transition-colors duration-200"
              >
                Click here <FaLocationArrow className="h-3 w-3" />
              </LinkPreview>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default function ContactItems() {
  return (
    <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto px-4">
      <GridItem
        area=""
        icon={<Mail className="h-6 w-6 text-neutral-400" />}
        title="Email"
        description="dayehchadi56@gmail.com"
        href="mailto:dayehchadi56@gmail.com"
      />

      <GridItem
        area=""
        icon={<FaWhatsapp className="h-6 w-6 text-neutral-400" />}
        title="WhatsApp"
        description="+216 56 027 257"
        href="https://wa.me/21656027257"
      />

      <GridItem
        area=""
        icon={<Linkedin className="h-6 w-6 text-neutral-400" />}
        title="LinkedIn"
        description="Check my profile."
        href="https://www.linkedin.com/in/chedi-dayeh-b939a525b"
      />
    </ul>
  );
}