import { useState, useEffect } from "react";
import { NavLink } from "react-router";
import resume from "../assets/resume.pdf";


type headerType = {
  about: React.MutableRefObject<HTMLDivElement | null>;
  project: React.MutableRefObject<HTMLDivElement | null>;
  contact: React.MutableRefObject<HTMLDivElement | null>;
};

function Header({ about, project }: headerType) {
  const [menuOpen, setMenuOpen] = useState(false);
  // 



  const scrollToSection = (
    elementRef: React.MutableRefObject<HTMLDivElement | null>
  ) => {
    window.scrollTo({
      top: elementRef.current?.offsetTop,
      behavior: "smooth",
    });
    setMenuOpen(false); // Close menu on navigation (mobile)
  };

  return (
    <nav className="fixed left-0 right-0 backdrop-blur-md z-20">
      <div className="w-full md:w-[1360px] px-4 md:px-0 mx-auto flex justify-between items-center text-[1.2rem] md:text-[1.5rem] py-4">
        <div className="text-stone-500 from-cyan-200 to-blue-400 font-bold">
          Steve.Oe
        </div>
        <div className="flex items-center gap-4">
          {/* Hamburger menu for mobile */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 focus:outline-none"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label="Toggle menu"
          >
            <span className={`block h-0.5 w-6 bg-black mb-1 transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block h-0.5 w-6 bg-black mb-1 transition-all ${menuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block h-0.5 w-6 bg-black transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>
        {/* Navigation links */}
        <ul
          className={`absolute md:static top-full left-0 right-0 bg-background md:bg-transparent shadow-md md:shadow-none flex flex-col md:flex-row gap-2 md:gap-4 items-center px-4 md:px-0 py-4 md:py-0 transition-all duration-300 z-30 ${menuOpen ? 'block' : 'hidden'} md:flex`}
        >
          <li
            onClick={() => scrollToSection(about)}
            className="bg-gradient3 rounded-xl w-full md:w-auto text-center"
          >
            <NavLink to="/" className="block px-4 py-2 md:py-3 backdrop-blur-md bg-card dark:bg-card z-20 rounded-xl">
              Home
            </NavLink>
          </li>
          <li
            onClick={() => scrollToSection(about)}
            className="bg-gradient3 rounded-xl w-full md:w-auto text-center"
          >
            <NavLink to="about" className="block px-4 py-2 md:py-3 bg-card dark:bg-card rounded-xl">
              About
            </NavLink>
          </li>
          <li
            onClick={() => scrollToSection(project)}
            className="bg-gradient3 rounded-xl w-full md:w-auto text-center"
          >
            <NavLink to="projects" className="block px-4 py-2 md:py-3 bg-card dark:bg-card rounded-xl">
              Project
            </NavLink>
          </li>
          <li className="bg-gradient3 rounded-xl w-full md:w-auto text-center">
            <a
              href={resume}
              download
              className="block px-4 py-2 md:py-3 bg-amber-500 text-white font-semibold rounded-lg shadow hover:bg-amber-600 transition-colors text-sm md:text-base"
            >
              Download Resume
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
