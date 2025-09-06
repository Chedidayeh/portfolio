import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./ui/MagicButton";
import Image from "next/image";

export const mySocials = [
  {
    name: "WhatsApp",
    href: "",
    icon: "/assets/socials/whatsApp.svg",
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/ali-sanati/",
    icon: "/assets/socials/linkedIn.svg",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/ali.sanatidev/reels/",
    icon: "/assets/socials/instagram.svg",
  },
];
const Footer = () => {
  return (
    <footer className="w-full pt-20 px-4 sm:px-6 md:px-8 lg:px-16  pb-10">
      <section className="flex flex-col sm:flex-row flex-wrap items-center justify-between gap-5 pb-3 text-sm text-neutral-400 c-space">
        <div className="mb-4 bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full" />
        <div className="flex gap-2">
        <a href="/">
        <Image
          src="/images/logo.png"
          alt="" width={120}
          height={80}
          className="max-h-[80px] h-full object-contain object-center" />
      </a>
        </div>
        <p>© {new Date().getFullYear()}. Chadi Dayeh, Tunisia, Nabeul.</p>
      </section>
    </footer>
  );
};

export default Footer;
