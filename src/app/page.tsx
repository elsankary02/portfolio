import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Experience from "@/components/sections/Experience";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import Footer from "@/components/sections/Footer";
import Hero from "@/components/sections/Hero";
import Skills from "@/components/sections/Skills";
import WhatIDo from "@/components/sections/WhatIDo";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <WhatIDo />
      <Experience />
      <FeaturedProjects />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}
