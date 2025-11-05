import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "Next.js Error 404 | TailAdmin - Next.js Dashboard Template",
  description:
    "This is Next.js Error 404 page for TailAdmin - Next.js Tailwind CSS Admin Dashboard Template",
};

export default function NotFound() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen p-6 overflow-hidden z-1">
      <div className="mx-auto w-full max-w-[242px] text-center sm:max-w-[472px]">
        <h1 className="mb-8 font-bold text-title-md text-white/90 xl:text-title-2xl">
          ERROR
        </h1>

        <div className="bg-clip-text text-transparent bg-gradient-to-b from-neutral-600 to-white text-9xl font-sans py-2 font-bold tracking-tight text-center">
          404
        </div>

        <p className="mt-10 mb-6 text-base text-gray-400 sm:text-lg">
          We can’t seem to find the page you are looking for!
        </p>

        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-lg border px-5 py-3.5 text-sm font-medium shadow-theme-xs hover:bg-gray-50 border-gray-700 text-gray-400 hover:bg-white/[0.03] hover:text-gray-200"
        >
          Back to Home Page
        </Link>
      </div>
      {/* <!-- Footer --> */}
      <p className="absolute text-sm text-center -translate-x-1/2 bottom-6 left-1/2 text-gray-400">
        &copy; {new Date().getFullYear()} - Dayeh Chadi
      </p>
    </div>
  );
}
