import { Link } from "react-router";
import eb from "../assets/images/profile1-removebg-preview.png";

type headerType = {
  project: React.MutableRefObject<HTMLDivElement | null>;
};
function Main({ project }: headerType) {
  const scrollToSection = (
    elementRef: React.MutableRefObject<HTMLDivElement | null>
  ) => {
    window.scrollTo({
      top: elementRef.current?.offsetTop,
      behavior: "smooth",
    });
  };
  return (
    <div className="min-h-[100vh] w-full md:w-[1360px] relative pt-6 pb-6 px-4 md:px-0 mx-auto flex flex-col md:flex-row gap-8 md:gap-[6rem] lg:gap-[10rem] items-center md:items-center">
      <div className="flex flex-col my-auto max-w-full md:max-w-[40rem] px-0">
        <p className="font-medium text-primary text-base sm:text-lg md:text-xl lg:text-2xl mb-2">
          Hey, I'm
        </p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[4rem] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FABC3F] via-[#E85C0D] to-[#C7253E] mb-2">
          Stephen Eniola
        </h1>
        <p className="font-medium text-center md:text-left text-primary text-sm sm:text-base md:text-lg mb-4">
          I'm a self-taught frontend developer based in Nigeria and I make the
          world a better place by building quality, consistent and fully
          accessible user interfaces with react.
        </p>
        <div className="flex flex-wrap justify-center md:justify-start gap-2 mt-4">
          <button
            className="text-stone-400 border rounded-md p-1 bg-gradient3"
            onClick={() => scrollToSection(project)}
          >
            <div className="bg-card dark:bg-card px-4 py-2 sm:px-6 sm:py-3">
              <Link
                to="https://github.com/SteveEnny"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-card dark:bg-card px-2 sm:px-4 py-2 sm:py-3"
              >
                Github
              </Link>
            </div>
          </button>
          <button className="text-stone-400 border border-blue-00 rounded-md p-1 bg-gradient3">
            <div className="bg-card dark:bg-card px-4 py-2 sm:px-6 sm:py-3">
              <Link
                to="https://x.com/Stephen2Omotoso"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-card dark:bg-card px-2 sm:px-4 py-2 sm:py-3"
              >
                X
              </Link>
            </div>
          </button>
          <button className="text-stone-400 border border-blue-00 rounded-md p-1 bg-gradient4">
            <div className="bg-card dark:bg-card px-4 py-2 sm:px-6 sm:py-3">
              <Link
                to="http://linkedin.com/in/omotoso-eniola-390601226"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-card dark:bg-card px-2 sm:px-4 py-2 sm:py-3"
              >
                Linkedin
              </Link>
            </div>
          </button>
        </div>
      </div>
      <div className="flex justify-center md:justify-end w-full md:w-auto">
        <img src={eb} alt="Profile" className="w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 object-cover object-top rounded-full shadow-md" />
      </div>
    </div>
  );
}

export default Main;
