import React from "react";
import {
  Footer,
  MainWrapper,
  Navbar,
  SectionHeader,
  SocialLinksVertical,
} from "@/src/components";
import {montserratBold, montserrat, barlowBold} from "@/src/styles/fonts";

export default function Home() {
  return (
    <>
      <div className="h-screen">
        <Navbar />
        <Hero />
      </div>
      <MainWrapper>
        <Info />
      </MainWrapper>
      <Footer />
    </>
  );
}

const Hero = () => {
  return (
    <div className="container mx-auto before:flex flex-col mt-40 h-[65vh]">
      <div className="flex justify-between">
        <div>
          <div className="flex gap-5">
            <p
              className={`${barlowBold.className} text-6xl pb-10 gradientText`}
            >
              Hello, I'm Martyna
            </p>
            <img src="/waving-hand.png" className="h-14" />
          </div>
          <p
            className={`${montserrat.className} leading-loose max-w-5xl text-xl`}
          >
            I am a budding Software Developer. Obsessed with clean code and
            captivating designs. Proficient in HTML, CSS, and JavaScript.
            Turning ideas into pixel-perfect reality. Eager to learn and
            collaborate. <br />
            <span className={montserratBold.className}>
              Let's build the web together!
            </span>
          </p>
        </div>
        <SocialLinksVertical size={30} />
      </div>
    </div>
  );
};

const Info = () => {
  return (
    <div className="flex w-full mb-20">
      <About />
      <Skills />
    </div>
  );
};

const Skills = () => {
  const technologies = [
    "HTML",
    "CSS",
    "SASS",
    "Git",
    "TypeScript",
    "JavaScript",
    "React",
    "NextJS",
    "Vue",
    "NuxtJS",
    "MaterialUI",
    "TailwindCSS",
    "Figma",
  ];
  return (
    <div className="w-1/3">
      <SectionHeader>Skills</SectionHeader>
      <div>
        {technologies.map((item) => (
          <div className="bg-[#333] mr-3 py-2 px-4 inline-block mb-3 rounded-full">
            <span className={montserratBold.className}>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
const About = () => {
  return (
    <div className="w-2/3">
      <SectionHeader>About Me</SectionHeader>
      <p
        className={`${montserrat.className} leading-loose max-w-5xl text-xl`}
      ></p>
    </div>
  );
};
