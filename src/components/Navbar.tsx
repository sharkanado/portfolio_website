import React, {useEffect, useRef, useState} from "react";
import {montserrat} from "@/src/styles/fonts";
import {FaBars} from "react-icons/fa";

const Navbar = () => {
  const navLinks = [
    {name: "home", link: "#"},
    {name: "about", link: "#about"},
    {name: "contact", link: "#contact"},
  ];
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      menuRef.current &&
      !menuRef.current.contains(event.target as Node) &&
      event.target !== buttonRef.current
    ) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <div className="sticky top-0 left-0">
      <div
        className="hidden md:block py-8 transition-all 
       bg-opacity-50 bg-black"
      >
        <nav className="flex gap-12 px-5 container mx-auto justify-end">
          {navLinks.map(({name, link}, idx) => (
            <a
              key={idx}
              href={link}
              className={`${montserrat.className} text-xl uppercase hover:text-pink transition-all`}
            >
              {name}
            </a>
          ))}
        </nav>
      </div>
      <div className="md:hidden flex flex-col items-end w-full fixed  top-0 left-0 p-5 bg-opacity-50 bg-black">
        <div className="">
          <button
            ref={buttonRef}
            className="btn btn-ghost rounded-full btn-square"
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            <FaBars size={30} />
          </button>
        </div>
        <nav
          ref={menuRef}
          className="flex-col flex items-center gap-12 px-5 container mx-auto justify-end transition-all"
          style={{
            height: isMenuOpen ? "10rem" : "0rem",
            marginTop: isMenuOpen ? "3rem" : "0rem",
          }}
        >
          {isMenuOpen &&
            navLinks.map(({name, link}, idx) => (
              <a
                key={idx}
                href={link}
                className={`${montserrat.className} text-xl uppercase hover:text-pink transition-all`}
                onClick={() => setIsMenuOpen(false)}
              >
                {name}
              </a>
            ))}
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
