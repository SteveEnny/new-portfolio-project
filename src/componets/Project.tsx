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
    <div>
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-rose-500 to-indigo-500 uppercase mb-10 text-center tracking-wide drop-shadow-md">
        Featured Projects
      </h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.id}
            className="flex flex-col gap-3 bg-white rounded-xl shadow-lg p-4 transform transition-transform transition-shadow duration-500 ease-in-out hover:scale-110 hover:shadow-2xl hover:-translate-y-1 hover:delay-300 animate-fadeInUp"
          >
            <img
              src={project.img}
              alt={project.name}
              className="w-[23rem] md:w-[40rem] px-2 rounded-lg object-cover"
            />
            <h3 className="text-xl sm:text-2xl font-semibold text-indigo-700 border-l-4 border-indigo-400 pl-3 mt-3 mb-1">
              {project.name}
            </h3>
            <p className="text-base font-normal max-w-[23rem] md:max-w-[25rem]">
              {project.description}
            </p>
            <p className="font-medium text-base text-indigo-600">{project.stack}</p>
            <div>
              <button className="p-1 bg-gradient1 rounded-[8px] mt-3">
                <div className="hover:text-indigo-500 bg-white px-6 py-2 rounded-[5px] transition-colors duration-300">
                  <Link to={`/projects/${project.id}`}>View project</Link>
                </div>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
