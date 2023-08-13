import React from "react";
import {FaLinkedinIn, FaGithub} from "react-icons/fa";

const SocialLinksVertical = ({size}: {size: number}) => {
  const iconSize = size;
  const socialLinks = [
    {
      icon: <FaGithub size={iconSize} />,
      link: "https://github.com/sharkanado",
    },
    {
      icon: <FaLinkedinIn size={iconSize} />,
      link: "https://www.linkedin.com/in/martyna-michalska-3a7048234/",
    },
  ];
  return (
    <div className="flex flex-col gap-10 justify-center">
      {socialLinks.map(({icon, link}, idx) => (
        <a
          key={idx}
          className="btn btn-ghost rounded-full btn-square"
          target="_blank"
          href={link}
        >
          {icon}
        </a>
      ))}
    </div>
  );
};

const SocialLinksHorizontal = ({size}: {size: number}) => {
  const iconSize = size;
  const socialLinks = [
    {
      icon: <FaGithub size={iconSize} />,
      link: "https://github.com/sharkanado",
    },
    {
      icon: <FaLinkedinIn size={iconSize} />,
      link: "https://www.linkedin.com/in/martyna-michalska-3a7048234/",
    },
  ];
  return (
    <div className="flex gap-10 justify-center">
      {socialLinks.map(({icon, link}, idx) => (
        <a
          key={idx}
          className="btn btn-ghost rounded-full btn-square"
          target="_blank"
          href={link}
        >
          {icon}
        </a>
      ))}
    </div>
  );
};

export {SocialLinksHorizontal, SocialLinksVertical};
