import React from "react";
import Link from "next/link";
import {montserrat} from "@/src/styles/fonts";

const Navbar = () => {
  const navLinks = [
    {name: "home", link: "#"},
    {name: "about", link: "#about"},
    {name: "contact", link: "#contact"},
  ];

  return (
    <div
      className="hidden sm:block py-8 sticky top-0 left-0 transition-all 
       bg-opacity-50 bg-black"
    >
      <nav className="flex gap-12 px-5 container mx-auto justify-end">
        {navLinks.map(({name, link}, idx) => (
          <Link
            key={idx}
            href={link}
            className={`${montserrat.className} text-xl uppercase hover:text-pink transition-all`}
          >
            {name}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Navbar;
