import React from 'react'
import { Skills } from "@/components/Skills";
import { Cover } from "@/components/ui/cover";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import Image from "next/image";

const HeroSection = () => {
return (
    <div id="home" className="w-full overflow-x-hidden min-h-screen grid lg:grid-cols-[1fr_0.6fr_0.4fr] gap-[20px]">
    
    <div className="max-w-[600px] w-[90%] mx-auto py-[30px]">
      <a href="/">
        <Image
          src="/images/logo.png"
          alt="" width={120}
          height={80}
          className="max-h-[80px] h-full object-contain object-center" />
      </a>

      <div className="flex flex-col justify-center h-[80%]">
        <h2 className="bg-clip-text text-transparent text-start bg-gradient-to-b  from-neutral-600 to-white text-2xl md:text-4xl lg:text-6xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
          Dayeh Chadi, <br /> Software <Cover>Engineer</Cover>.
        </h2>
        <a href="#"
          className="text-white border-b border- border-[#525252] hover:p-[10px] hover:bg-[#5070ff2f] transition-all ease-in-out mr-auto py-[10px] font-[600]">Hire Me</a>
      </div>
    </div>

    {/* my image */}

    <div className="w-full h-full flex items-end p-4 md:p-0 ">
      <Image
        src="/chedi2.png"
        alt="model"
        width={3000}
        height={3000}
        quality={100}
        className="w-full max-h-[90vh] object-contain   rounded-3xl object-top bg-[#0d0d0e]" />
    </div>
    

    <div className="w-[90%] mx-auto md:py-[30px] flex flex-col items-center z-2">
      


      <h2 className="bg-clip-text md:mt-[100px] text-transparent text-start mr-auto bg-gradient-to-b  from-neutral-600 to-white text-2xl md:text-2xl lg:text-3xl font-sans relative z-20 font-bold tracking-tight">
      About me
    </h2>
    <p className="max-w-xl mx-auto text-sm md:text-lg text-neutral-400 text-start mt-[20px]">
    I’m a dedicated second-year Software Engineering student with a passion for developing innovative, high-quality software solutions. My academic journey has equipped me with a strong foundation inprogramming, system architecture, and system design.
    </p>



    <Skills/>


    </div>

    <ShootingStars className="z-[-1] " />
    <StarsBackground className="z-[-1] " />


    
  </div >
)




}
export default HeroSection