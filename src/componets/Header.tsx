import { NavLink } from "react-router";

type headerType = {
  about: React.MutableRefObject<HTMLDivElement | null>;
  project: React.MutableRefObject<HTMLDivElement | null>;
  contact: React.MutableRefObject<HTMLDivElement | null>;
};
// type headerType
function Header({ about }: headerType) {
  const scrollToSection = (
    elementRef: React.MutableRefObject<HTMLDivElement | null>
  ) => {
    window.scrollTo({
      top: elementRef.current?.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <nav className="fixed left-0 right-0 backdrop-blur-md  z-20">
      <div className="w-[1360px] mx-auto flex justify-between text-[1.5rem] py-4">
        <div className="hidden md:block text-stone-500 from-cyan-200 to-blue-400 ">
          Steve.Oe
        </div>
        <ul className="px-3 flex justify-end gap-4 md:justify-between w-full md:w-[25rem] items-center">
          <li
            onClick={() => scrollToSection(about)}
            className="bg-gradient3 rounded-xl"
          >
            <NavLink to="/" className="backdrop-blur-md bg-white z-20 pt-3">
              Home
            </NavLink>
          </li>
          <li
            onClick={() => scrollToSection(about)}
            className="bg-gradient3 rounded-xl"
          >
            <NavLink to="about" className="bg-white pt-3">
              About
            </NavLink>
          </li>
          <li
            onClick={() => scrollToSection(about)}
            className="bg-gradient3 rounded-xl"
          >
            <NavLink to="projects" className="bg-white pt-3">
              Project
            </NavLink>
          </li>
          {/* <li
            onClick={() => scrollToSection(about)}
            className="bg-gradient3 rounded-xl"
          >
            <NavLink to="contact" className="bg-white pt-3">
              Contact
            </NavLink>
          </li> */}
        </ul>
      </div>
    </nav>
  );
}

export default Header;
