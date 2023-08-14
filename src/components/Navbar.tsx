import React, {useState} from "react";
import {montserrat} from "@/src/styles/fonts";
import {FaBars} from "react-icons/fa";

const Navbar = () => {
  const navLinks = [
    {name: "home", link: "#"},
    {name: "about", link: "#about"},
    {name: "contact", link: "#contact"},
  ];
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  console.log(isMenuOpen);

  return (
    <div>
      <div
        className="hidden md:block py-8 sticky top-0 left-0 transition-all 
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
            className="btn btn-ghost rounded-full btn-square"
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            {" "}
            <FaBars size={30} />
          </button>
        </div>
        {isMenuOpen && (
          <nav className="flex flex-col items-center mt-5 gap-12 px-5 container mx-auto justify-end">
            {navLinks.map(({name, link}, idx) => (
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
        )}
      </div>
    </div>
  );
};

export default Navbar;
