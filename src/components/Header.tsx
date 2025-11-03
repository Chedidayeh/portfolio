import React from "react";
import Image from "next/image";

export default function Header() {
  return (
    <div className="px-4 my-6">
      <a href="/">
        <Image
          src="/images/logo.png"
          alt=""
          width={120}
          height={80}
          className="max-h-[80px] h-full object-contain object-center"
        />
      </a>
    </div>
  );
}
