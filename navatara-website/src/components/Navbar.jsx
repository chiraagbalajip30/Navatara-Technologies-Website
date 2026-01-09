import { Link } from "react-router-dom";
import Logo from "../assets/navatara logo.jpg";
import Sidebar from "./Sidebar";
import { useState } from "react";
import Logo1 from "../assets/copy_2_image.png";
import Logo2 from "../assets/copy_image.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="w-full bg-black text-white border-b-2 border-white/40">
        <nav className="max-w-[1440px] mx-auto px-6 h-20 flex items-center justify-between">
          {/* LEFT SECTION */}
          <div className="flex items-center justify-around gap-6">
            {/* HAMBURGER — ALWAYS VISIBLE */}
            <button
              aria-label="toggle menu"
              onClick={() => setIsOpen(!isOpen)}
              className="relative w-10 h-10 flex items-center justify-center cursor-pointer hover:shadow-cyan-400/50 hover:shadow-lg transition"
            >
              <span
                className={`
      absolute w-6 h-[2px] bg-white transition-all duration-300
      ${isOpen ? "rotate-45" : "-translate-y-2"}
    `}
              />
              <span
                className={`
      absolute w-6 h-[2px] bg-white transition-all duration-300
      ${isOpen ? "opacity-0" : "opacity-100"}
    `}
              />
              <span
                className={`
      absolute w-6 h-[2px] bg-white transition-all duration-300
      ${isOpen ? "-rotate-45" : "translate-y-2"}
    `}
              />
            </button>

            {/* LOGO */}
            {/* <div className="h-10 flex items-center">
            <img
              src={Logo}
              alt="Navatara Technologies"
              className="h-full w-auto object-contain"
            />
          </div> */}

            {/* BORDER */}
            <div className="flex items-center justify-center ml-4 w-0.5 h-12 bg-white/40"></div>

            <div className="h-10 flex items-center relative group">
              <img
                src={Logo2}
                alt="Navatara Technologies"
                className="h-full w-auto object-contain transition-all duration-500"
              />
              <div className="absolute inset-0 bg-cyan-400 mix-blend-screen opacity-0 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none rounded-full" />
            </div>

            {/* NAVATARA HEADING IN SMALL AND MEDIUM SCREENS */}
            {/* <h1 className="text-2xl font-semibold tracking-wide block lg:hidden">
              Navatara Technologies
            </h1> */}
          </div>

          {/* CENTER MENU — ONLY LARGE SCREENS */}
          <ul className="hidden lg:flex items-center gap-8 text-md font-semibold tracking-wide">
            <li>
              <Link className={"hover:text-cyan-400"} to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className={"hover:text-cyan-400"} to="/services">
                Services
              </Link>
            </li>
            <li>
              <Link className={"hover:text-cyan-400"} to="/about">
                About
              </Link>
            </li>
          </ul>

          {/* RIGHT SECTION — ONLY LARGE SCREENS */}
          <div className="hidden lg:flex items-center gap-6">
            <Link to="/contact">
              <button className="px-6 py-2 rounded-full border border-cyan-400 text-cyan-400 text-sm tracking-wide hover:bg-cyan-400 hover:text-black transition hover:cursor-pointer">
                CONTACT US
              </button>
            </Link>
          </div>
        </nav>
      </header>

      {/* SIDEBAR */}
      <Sidebar isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};

export default Navbar;
