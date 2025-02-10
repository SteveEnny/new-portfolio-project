import { Link } from "react-router";

type projectsType = {
  id: string;
  name: string;
  link: string;
  description: string;
  img: string;
  stack: string;
  gitbubLink: string;
};

const projects: projectsType[] = [
  // {
  //   name: "Wild oasis",
  //   link: "https://unepopcorn.vercel.app/",
  //   description:
  //     "Wild Oasis is a comprehensive hotel management application designed to streamline hotel operations and enhance guest experiences. The platform enables hotels to manage reservations, check-ins, and check-outs with ease, while also handling room assignments and inventory. ",
  //   img: "/wildO.png",
  //   stack: "React TypeScript, supabase, React query, react form",
  // },
  {
    id: "HR",
    name: "HR Management",
    link: "https://hrms-dashboard.netlify.app",
    description:
      "HRMS is an all-in-one HR management application designed to streamline employee management processes. The platform allows HR teams to manage employee records, track attendance, and oversee payroll and benefits",
    img: "/hr.png",
    stack: "Angular  Bootstrap  Laravel",
    gitbubLink: "https://github.com/Oluwabambi/HRMS-frontend",
  },
  {
    id: "wildoasis",
    name: "The Wild Oasis",
    link: "https://the-wild-oasis-user-two.vercel.app/",
    description:
      "Wild Oasis is an easy-to-use hotel booking website that helps travelers find their perfect getaway in stunning natural locations. The platform offers a curated selection of hotels, resorts, and eco-lodges, focusing on properties nestled in serene landscapes.",
    img: "/wildoasis.png",
    stack: "NextJs  TypeScript  Supabase",
    gitbubLink: "https://github.com/SteveEnny/The-wild-oasis-user",
  },
  {
    id: "fastpizza",
    name: "Fast Pizza",
    link: "https://fast-pizza-aygz.vercel.app",
    description:
      "PizzaHub is a user-friendly application that allows customers to explore and order from a variety of pizza types. With an intuitive interface, users can browse through different pizza styles—whether classic, gourmet, or customizable.",
    img: "/fastpizza.png",
    stack: "NextJs  TypeScript  Supabase",
    gitbubLink: "https://github.com/SteveEnny/Fast-pizza",
  },

  // {
  //   id: "usepcorn",
  //   name: "Usepcorn",
  //   link: "https://unepopcorn.vercel.app/",
  //   description:
  //     "Usepopcorn is an exciting movie website that offers users a seamless way to discover the latest films and timeless classics. ",
  //   img: "/usepopcorn.png",
  //   stack: "React TypeScript",
  //   gitbubLink: "https://github.com/SteveEnny/unepopcorn",
  // },
  // {
  //   name: "Usepcorn",
  //   link: "https://unepopcorn.vercel.app/",
  //   description:
  //     "Usepopcorn is an exciting movie website that offers users a seamless way to discover the latest films and timeless classics. ",
  //   img: "/usepopcorn.png",
  //   stack: "React TypeScript",
  //   gitbubLink: "https://github.com/SteveEnny/unepopcorn",
  // },
  // {
  //   name: "Uppcorn",
  //   link: "https://unepopcorn.vercel.app/",
  //   description:
  //     "Uppcoen applicaton is site where you can search for movies of various types",
  // },
  // {
  //   name: "Uppcorn",
  //   link: "https://unepopcorn.vercel.app/",
  //   description:
  //     "Uppcoen applicaton is site where you can search for movies of various types",
  // },
];

export function Project() {
  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <div className="flex flex-col gap-3">
          <img
            src={project.img}
            alt=""
            className="w-[23rem] md:w-[40rem] px-2"
          />
          <p className="mt-3 font-semibold text-lg">{project.name}</p>
          <p className="text-base font-normal max-w-[23rem] md:max-w-[25rem]">
            {project.description}
          </p>

          {/* <a href="https://unepopcorn.vercel.app/">About pro</a> */}
          <p className="font-medium text-base text-blue-600">{project.stack}</p>
          <div>
            <button className="p-1 bg-gradient1 rounded-[8px] mt-3">
              <div className=" hover:text-blue-400 bg-white px-6 py-2 rounded-[5px]">
                <Link to={`/projects/${project.id}`}>View project</Link>
                {/* <a href={project.link}>View project</a> */}
              </div>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
