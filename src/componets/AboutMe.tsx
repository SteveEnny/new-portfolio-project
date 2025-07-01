import AngularIcon from "@/Icons/Angular";
import CssIcon from "@/Icons/CssIcons";
import FramerIcon from "@/Icons/FramerIcon";
import GitHubIcon from "@/Icons/GitHubIcon";
import HtmlIcon from "@/Icons/HtmlIcons";
import LaravelIcon from "@/Icons/Laravel";
import NextIcon from "@/Icons/NextJs";
import ReactIcon from "@/Icons/React";
import TailwindIcon from "@/Icons/TailwindIcon";
import ContactForm from "./ContactForm";

function AboutMe() {
  return (
    // <div
    //   // ref={about}
    //   className="w- flex flex-col lg:flex-row items-center justify-between border  text-stone-700 md:px-[5rem] lg:px-[10rem] xl:px-[20rem]"
    // >
    <div className="min-h-[100vh] w-full max-w-[1360px] relative px-4 sm:px-4 pt-5 pb-5 mx-auto">
      <div
        // ref={about}
        className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-[5rem] my-[5rem] text-base md:text-lg font-medium"
      >
        <div className="mb-5 flex justify-center md:block">
          <img
            src="/Profile pics.jpg"
            alt=""
            className="rounded-full w-[15rem] h-[15rem] sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-96 lg:h-96 object-cover mx-auto"
          />
        </div>
        <div className="my-10 max-w-full md:max-w-[40rem]">
          <h2 className="font-bold text-xl md:text-3xl">
            Welcome to my profile page
          </h2>
          <p className="text-balance font-medium my-5 md:text-left">
            I'm an experienced and versatile Full Stack Web Developer with a
            deep passion for building seamless, impactful, and high-performing
            websites. My goal is to turn your ideas into powerful web
            experiences, using a blend of creativity, technical expertise, and
            user-centered design.
          </p>
          <p className="text-xl"> My Specialties💻✨</p>
          <p className="font-medium my-5 px-3  text-left flex gap-2">
            <span>🎯</span>
            <span>
              Full Stack Development : With expertise in both frontend and
              backend development, I ensure that every aspect of your web
              application is cohesive and robust. From intuitive, responsive
              interfaces to secure, scalable server-side logic, I bring a
              comprehensive approach to your projects.
            </span>
          </p>
          <p className="mb-5 px-3  text-left flex gap-2">
            <span>🎯</span>
            <span>
              React.js, Angular Expertise : Creating dynamic, interactive user
              interfaces is a core part of my skill set. With frameworks like
              React.js and Angular, I build engaging front-end applications that
              are fast, responsive, and designed to keep users coming back.
            </span>
          </p>
          <p className="mb-5 px-3  text-left flex gap-2">
            <span>🎯</span>
            <span>
              Laravel Backend Solutions : For developing robust and scalable
              backends, Laravel is my go-to framework. I use it to deliver
              efficient, secure, and adaptable solutions that ensure high
              performance for all your application needs.
            </span>
          </p>
          <div>
            {/* <a className="my-10 px-16 py-3 text-base rounded-md md:text-xl group dark:bg-stone-900 dark:text-stone-100 bg-stone-100 text-stone-900 dark:hover:bg-stone-950 hover:bg-stone-200">
            Learn more about me
          </a> */}
          </div>
        </div>
      </div>
      <div className="my-10">
        <h2 className="font-bold text-lg md:text-3xl mb-6">
          💼 Why Work with Me
        </h2>
        <div className="md:flex">
          <p className=" mb-5 px-3 w-[22rem] md-[45rem] text-left flex flex-col gap-2 hover:shadow-lg p-4 hover:scale-105 transition-all hover:mx-5">
            <span>🏅 Commitment to Excellence</span>
            <span>
              Every line of code is crafted with quality and precision in mind.
              I prioritize your satisfaction and work diligently to deliver
              solutions that exceed expectations.
            </span>
          </p>
          <p className="w-[22rem] md-[45rem] text-left flex flex-col gap-2 hover:shadow-lg p-4 hover:scale-105 transition-all hover:mx-5">
            <span>🏅 Commitment to Excellence</span>
            <span>
              Every line of code is crafted with quality and precision in mind.
              I prioritize your satisfaction and work diligently to deliver
              solutions that exceed expectations.
            </span>
          </p>
          <p className="w-[22rem] md-[45rem] text-left flex flex-col gap-2 hover:shadow-lg p-4 hover:scale-105 transition-all hover:mx-5">
            <span>🏅 Commitment to Excellence</span>
            <span>
              Every line of code is crafted with quality and precision in mind.
              I prioritize your satisfaction and work diligently to deliver
              solutions that exceed expectations.
            </span>
          </p>
        </div>
      </div>
      <div>
        <h2 className="font-bold text-lg md:text-3xl text-stone-700 mb-6">
          Tools & Technologies
        </h2>
        <p className="text-base md:text-lg font-normal mb-5 px-3 flex gap-2 w-[22rem] md:w-full">
          One of my favourite things since I starting to learn to code has
          discovering all of the amazing tools and abstractions developers have
          created to make theirs and other developers' lives easier. Here are
          some of the tools I use most frequently.
        </p>
        <div className="flex md:content-center md:justify-center px-5">
          <div className="w-[10rem] md-w-[700px] grid grid-cols-2 md:grid-cols-3 gap-10 gap-x-[15rem] md:gap-x-[34%] pl-3 content-center justif my-10">
            <ReactIcon />
            <CssIcon />
            <NextIcon />
            <AngularIcon />
            <LaravelIcon />
            <FramerIcon />
            <GitHubIcon />
            <TailwindIcon />
            <HtmlIcon />
          </div>
        </div>
      </div>
      <div className="w-[1360px] mx-auto flex flex-col mt-[10rem] hidden md:block">
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

export default AboutMe;
