import React, {useCallback, useEffect, useState} from "react";
import Link from "next/link";
import {montserrat} from "@/src/styles/fonts";

const Navbar = () => {
  const navLinks = [
    {name: "about", link: ""},
    {name: "skills & experience", link: ""},
    {name: "contact", link: ""},
  ];

  const [scrollY, setScrollY] = useState(0);
  const [isOnTop, setIsOnTop] = useState(false);

  const handleScroll = useCallback(() => {
    setScrollY(window.scrollY);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  useEffect(() => {
    setIsOnTop(scrollY < 100);
  }, [scrollY]);

  return (
    <div
      className={`py-8 sticky top-0 left-0 transition-all duration-75 + ${
        isOnTop ? "" : "bg-dark-grey"
      }`}
    >
      <nav className="flex gap-12 container mx-auto justify-end">
        {navLinks.map(({name, link}, idx) => (
          <Link
            key={idx}
            href={link}
            className={`${montserrat.className} text-xl`}
          >
            {name}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Navbar;
