import Link from "next/link";
import React from "react";
import {abel} from "../styles/fonts";

const Navbar = () => {
  const navLinks = [
    {name: "About", link: ""},
    {name: "Portfolio", link: ""},
    {name: "Contact", link: ""},
  ];

  return (
    <div className="flex justify-end py-8">
      <nav className="flex gap-12">
        {navLinks.map(({name, link}, idx) => (
          <Link key={idx} href={link} className={`${abel.className} text-xl`}>
            {name}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Navbar;
