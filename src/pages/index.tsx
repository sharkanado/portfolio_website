import React from "react";
import {
  Footer,
  MainWrapper,
  Navbar,
  Paragraph,
  SectionHeader,
  SocialLinksHorizontal,
  SocialLinksVertical,
} from "@/src/components";
import {montserratBold, montserrat, barlowBold} from "@/src/styles/fonts";

export default function Home() {
  return (
    <div className="bg-main-bg bg-cover relative">
      <Navbar />
      <Hero />
      <MainWrapper>
        <Info />
        <Contact />
      </MainWrapper>
      <Footer />
    </div>
  );
}

const Hero = () => {
  return (
    <div className="container mx-auto before:flex flex-col pt-40 lg:pb-56 pb-20 z-30">
      <div className="flex flex-col lg:flex-row justify-between mx-5">
        <div>
          <p
            className={`${barlowBold.className} text-5xl sm:text-6xl pb-10 gradientText`}
          >
            Hello, <br className="sm:hidden" /> I'm Martyna
            <img
              src="/waving-hand.png"
              className="sm:h-14 h-10 inline ml-5 mb-4"
            />
          </p>
          <Paragraph align="text-left">
            I am a budding Software Developer. Obsessed with clean code and
            captivating designs. Proficient in HTML, CSS, and JavaScript.
            Turning ideas into pixel-perfect reality. Eager to learn and
            collaborate. <br />
          </Paragraph>
          <p className={`${montserratBold.className} mt-4 text-xl text-purple`}>
            Let's build the web together!
          </p>
        </div>
        <div className="lg:hidden mt-16">
          <SocialLinksHorizontal size={30} />
        </div>
        <div className="hidden lg:block">
          <SocialLinksVertical size={30} />
        </div>
      </div>
    </div>
  );
};

const Info = () => {
  return (
    <section id="about">
      <div className="lg:flex w-full pt-24 lg:gap-36">
        <About />
        <Skills />
      </div>
    </section>
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
    <div className="lg:w-1/3">
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
    <div className="lg:w-2/3 lg:mb-0 mb-20">
      <SectionHeader>About Me</SectionHeader>
      <Paragraph align="text-left">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi.
        Vivamus euismod lacus ut nisi lobortis, eu fermentum nulla feugiat. Nunc
        eget ligula sit amet purus porttitor malesuada. Sed ut quam eu libero
        volutpat hendrerit vel vel magna. Phasellus sit amet quam vel tortor
        gravida viverra. Nullam dictum, arcu et hendrerit consequat, purus purus
        <br />
        <br />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi.
        Vivamus euismod lacus ut nisi lobortis, eu fermentum nulla feugiat. Nunc
        eget ligula sit amet purus porttitor malesuada. Sed ut quam eu libero
        volutpat hendrerit vel vel magna. Phasellus sit amet quam vel tortor
        gravida viverra. Nullam dictum, arcu et hendrerit consequat, purus purus
        porttitor nulla, eget cursus dui augue ac risus. In eu ex et urna
        vestibulum fermentum. Proin eu nisi sed ligula fringilla ullamcorper id
        in justo. Vivamus eget ligula nisl. Suspendisse non pharetra nulla. Sed
        quis ante in elit feugiat lacinia at in ligula. Sed quis ex nec quam
        aliquam blandit et nec urna.
      </Paragraph>
    </div>
  );
};

const Contact = () => {
  return (
    <section id="contact">
      <div className="pb-20 pt-24 flex flex-col items-center">
        <SectionHeader>Contact Me</SectionHeader>
        <div>
          <div className="flex-1 mb-10">
            <Paragraph align="text-center">
              Feel free to contact me by submitting the form below and I will
              get back to you as soon as possible!
            </Paragraph>
          </div>
          <div className="max-w-2xl mx-auto p-5 bg-opacity-50 bg-black rounded-xl">
            <form
              target="_blank"
              action="https://formsubmit.co/m.michalska4126@gmail.com"
              method="POST"
            >
              <div className="flex flex-col gap-5">
                <input
                  type="text"
                  name="name"
                  className={`${montserrat.className} textInput`}
                  placeholder="Full Name"
                  required
                />
                <input
                  type="email"
                  name="email"
                  className={`${montserrat.className} textInput`}
                  placeholder="Email Address"
                  required
                />
                <textarea
                  placeholder="Your Message"
                  className={`${montserrat.className} textArea`}
                  style={{fontSize: "16px"}}
                  name="message"
                  rows={10}
                  required
                />
                <div className="flex justify-end">
                  <button
                    type="submit"
                    className={`${barlowBold.className} btn rounded-xl btn-lg bg-btn-gradient text-white`}
                  >
                    SEND MESSAGE
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
