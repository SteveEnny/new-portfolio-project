import { Ref } from "react";
import { Project } from "./Project";

function Projects({ project }: { project: Ref<HTMLDivElement> }) {
  return (
    <div
      className="w-full max-w-[1360px] mx-auto flex flex-col items-center px-2 sm:px-4 py-8"
      ref={project}
    >
      <h2 className="font-semibold text-2xl sm:text-3xl md:text-4xl uppercase text-center">Projects</h2>

      <h3 className="text-lg sm:text-xl md:text-2xl font-medium px-3 my-3 sm:my-5 text-center max-w-xl">
        Here are some of the web applications I have developed
      </h3>

      <Project />

      {/* <button className="mt-10 border p-7 rounded-lg">See More project</button> */}
    </div>
  );
}

export default Projects;
