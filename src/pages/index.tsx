import React from "react";
import {MainWrapper} from "@/src/components";
import {montserratBold, montserrat, barlowBold} from "../styles/fonts";

export default function Home() {
  return (
    <MainWrapper>
      <div className="h-screen flex flex-col mt-40">
        <div>
          <p className={`${barlowBold.className} text-6xl mb-10 gradientText`}>
            Hello, I'm Martyna
          </p>
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
      </div>
    </MainWrapper>
  );
}
