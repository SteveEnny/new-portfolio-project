import { Ref } from "react";
import { Project } from "./Project";

function Projects({ project }: { project: Ref<HTMLDivElement> }) {
  return (
    <div
      className="w-[1360px] mx-auto flex flex-col items-center"
      ref={project}
    >
      <h2 className="font-semibold text-[3rem] uppercase">Projects</h2>

      <h3 className="text-[1.5rem] font-medium px-3 my-5">
        Here are some of the web applications I have developed{" "}
      </h3>

      <Project />

      {/* <button className="mt-10 border p-7 rounded-lg">See More project</button> */}
    </div>
  );
}

export default Projects;
