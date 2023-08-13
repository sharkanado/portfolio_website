import React from "react";
import {MainWrapper} from "@/src/components";
import {montserratBold, montserrat, barlowBold} from "../styles/fonts";
import {FaLinkedinIn, FaGithub, FaFacebook} from "react-icons/fa";
import Link from "next/link";

export default function Home() {
  return (
    <MainWrapper>
      <Hero />
    </MainWrapper>
  );
}

const Hero = () => {
  const iconSize = 30;
  const socialLinks = [
    {icon: <FaGithub size={iconSize} />, link: ""},
    {icon: <FaLinkedinIn size={iconSize} />, link: ""},
    {icon: <FaFacebook size={iconSize} />, link: ""},
  ];
  return (
    <div className="h-screen flex flex-col mt-40">
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
        <div className="flex flex-col gap-10 justify-center">
          {socialLinks.map(({icon, link}, idx) => (
            <Link key={idx} href={link}>
              {icon}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
