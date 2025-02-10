import { useRef } from "react";
import Main from "./Main";
import Projects from "./Projects";
import ContactForm from "./ContactForm";

function Home() {
  //   const about = useRef<HTMLDivElement>(null);
  const project = useRef<HTMLDivElement>(null);
  const contact = useRef<HTMLDivElement>(null);
  return (
    <div>
      <main>
        <Main project={project} />
        {/* <AboutMe about={about} /> */}
        <Projects project={project} />
      </main>

      <div
        ref={contact}
        className="w-[1360px] mx-auto flex flex-col mt-[10rem]"
      >
        <div className="text-center">
          <p className="font-semibold text-[3rem] uppercase"> get in touch</p>
          <p className="font-medium text-xl">
            Have an inquiry or feedback ? fill out the form below to contact me.
          </p>
        </div>
        <ContactForm />
      </div>
    </div>
  );
}

export default Home;
