import Footer from "@/components/Footer";
import HeroSection from "@/components/HereSection";
import { Skills } from "@/components/MySkills";
import { NavBar } from "@/components/NavBar";
import { Projects } from "@/components/Projects";
import { Resume } from "@/components/Resume";

export default function Home() {
  return (
    <>
    <NavBar/>
    <HeroSection/>
    <Skills/>
    <Resume/>
    <Projects/>
    <Footer />

    </>
  );
}
