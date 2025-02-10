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
    <div className="min-h-[100vh] w-[1360px] relative pt-[20px] pb-[20px] mx-auto  flex gap-[10rem] items-center">
      <div className="flex flex-col my-auto max-w-[40rem] px-[.8px]">
        <p className="font-medium sm:text-balance text-[#121212] text-[1rem]">
          Hey, I'm
        </p>
        <h1 className="text-[4rem] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FABC3F] via-[#E85C0D] to-[#C7253E]">
          Stephen Eniola
        </h1>
        <p className="font-medium text-center sm:text-balance text-[#121212] text-[1rem]">
          I'm a self-taught frontend developer based in Nigeria and I make the
          world a better place by building quality,consistent and fully
          accessible user interfaces with react.{" "}
        </p>
        <div className="flex mx-auto sm:mx-0 gap-2 mt-5">
          <button
            className="hidden md:block text-stone-400 border rounded-md p-1 bg-gradient3"
            onClick={() => scrollToSection(project)}
          >
            <div className="bg-white px-2 py-3">
              <Link
                to="https://github.com/SteveEnny"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white px-4 py-3"
              >
                Github
              </Link>
            </div>
          </button>
          {/* <button className="text-stone-400 border border-blue-00 rounded-md p-1 px-2 bg-gradient4">
            <div className="bg-white px-4 py-3">LinkedIn</div>
          </button> */}
          <button className="text-stone-400  border border-blue-00 rounded-md p-1 px-1 bg-gradient3">
            <div className="bg-white px-2 py-3">
              <Link
                to="https://x.com/Stephen2Omotoso"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white w-10 px-2 py-3"
              >
                X
              </Link>
            </div>
          </button>
          <button className="text-stone-400  border border-blue-00 rounded-md p-1 px-1 bg-gradient4">
            <div className="bg-white px-2 py-3">
              <Link
                to="http://linkedin.com/in/omotoso-eniola-390601226"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white w-5 px-4 py-3"
              >
                Linkedin
              </Link>{" "}
            </div>
          </button>
        </div>
      </div>
      <div className="m-10">
        <img src={eb} alt="" className="hidden md:block " />
      </div>
    </div>
  );
}

export default Main;
