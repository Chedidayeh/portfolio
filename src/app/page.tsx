"use client";
import { Certifications } from "@/components/Certifications";
import { Contact } from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HereSection";
import { Skills } from "@/components/MySkills";
import { NavBar } from "@/components/NavBar";
import { Projects } from "@/components/Projects";
import { Resume } from "@/components/Resume";
import { useView } from "@/hooks/use-inViews";

const AnimatedSection = ({ children }: { children: React.ReactNode }) => {
  const [ref, isInView] = useView({ threshold: 0.1 });
  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 transform ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {children}
    </div>
  );
};
export default function Home() {
  return (
    <>
      <NavBar />

      <Header />

      <HeroSection />

      <Skills />

      <Resume />

      <Projects />

      <Certifications />

      {/* <Contact/> */}
      <Footer />
    </>
  );
}
