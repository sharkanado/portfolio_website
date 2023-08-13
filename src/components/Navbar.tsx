import Link from "next/link";
import React from "react";
import {barlowBold} from "../styles/fonts";

const Navbar = () => {
  const navLinks = [
    {name: "about", link: ""},
    {name: "portfolio", link: ""},
    {name: "contact", link: ""},
  ];

  return (
    <div className="py-8 sticky top-0 left-0">
      <nav className="flex gap-12 container mx-auto justify-end">
        {navLinks.map(({name, link}, idx) => (
          <Link
            key={idx}
            href={link}
            className={`${barlowBold.className} text-xl`}
          >
            .{name}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Navbar;
