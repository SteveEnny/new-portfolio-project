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
        className="w-full max-w-4xl mx-auto flex flex-col mt-16 px-2 sm:px-4"
      >
        <div className="text-center contact w-full">
          <p className="font-semibold text-2xl sm:text-3xl md:text-4xl uppercase"> get in touch</p>
          <p className="font-medium text-base sm:text-lg md:text-xl">
            Have an inquiry or feedback ? fill out the form below to contact me.
          </p>
        </div>
        <ContactForm />
      </div>
    </div>
  );
}

export default Home;
