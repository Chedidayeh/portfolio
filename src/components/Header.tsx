"use client";

import React from "react";
import { motion } from "motion/react";
import Image from "next/image";

export default function Header() {
  const logoVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <motion.div
      className="px-4 my-6"
      variants={logoVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.a
        href="/"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.2 }}
      >
        <Image
          src="/images/logo.png"
          alt=""
          width={120}
          height={80}
          className="max-h-[80px] h-full object-contain object-center"
        />
      </motion.a>
    </motion.div>
  );
}
