// import * as React from "react";
// import uppcorn from "@/assets/images/uppcorn.png";
// import wildO from "@/assets/images/wildO.png";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { AboutProject } from "./AboutProject";

type projectsType = {
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
    name: "HR Management",
    link: "https://hrms-dashboard.netlify.app",
    description:
      "HRMS is an all-in-one HR management application designed to streamline employee management processes. The platform allows HR teams to manage employee records, track attendance, and oversee payroll and benefits",
    img: "/hr mangement.png",
    stack: "Angular, Bootstrap, laravel",
    gitbubLink: "https://github.com/Oluwabambi/HRMS-frontend",
  },
  {
    name: "The wild Oasis",
    link: "https://the-wild-oasis-typescript-based.vercel.app/",
    description:
      "Wild Oasis is an easy-to-use hotel booking website that helps travelers find their perfect getaway in stunning natural locations. The platform offers a curated selection of hotels, resorts, and eco-lodges, focusing on properties nestled in serene landscapes.",
    img: "/The wild oasis.png",
    stack: "NextJs TypeScript, supabase",
    gitbubLink: "https://github.com/SteveEnny/The-wild-oasis-user",
  },
  {
    name: "Fast Pizza",
    link: "https://fast-pizza-aygz.vercel.app",
    description:
      "PizzaHub is a user-friendly application that allows customers to explore and order from a variety of pizza types. With an intuitive interface, users can browse through different pizza styles—whether classic, gourmet, or customizable.",
    img: "/fast pizza.png",
    stack: "NextJs TypeScript, supabase",
    gitbubLink: "https://github.com/SteveEnny/Fast-pizza",
  },

  {
    name: "Usepcorn",
    link: "https://unepopcorn.vercel.app/",
    description:
      "Usepopcorn is an exciting movie website that offers users a seamless way to discover the latest films and timeless classics. ",
    img: "/usepopcorn.png",
    stack: "React TypeScript",
    gitbubLink: "https://github.com/SteveEnny/unepopcorn",
  },
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

export function CarouselSize() {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full px-4 md:px-[5rem] lg:px-[9rem] xl:px-[10rem] md:h-[20rem] lg:h-[30rem]"
    >
      <CarouselContent className="w-full flex lg:gap-5 h-[30rem] sm:h-[37rem] md:h-[37rem]">
        {projects.map((project, index) => (
          <CarouselItem
            key={index}
            className="sm:basis-1/2 lg:basis-[50%] xl:basis-[33%]"
          >
            <div className="p-1">
              <Card className="md:w-[20rem] lg:w-[28rem] xl:w-[30rem]">
                <CardContent className="flex aspect-square items-center justify-center p-6 pt-1">
                  <div>
                    <img src={project.img} alt="" />
                    <div className="flex justify-between p-5">
                      <p className="mt-3 font-semibold">{project.name}</p>
                      <div>
                        <AboutProject
                          description={project.description}
                          githubLink={project.gitbubLink}
                          link={project.link}
                          key={index}
                        />
                      </div>
                      {/* <a href="https://unepopcorn.vercel.app/">About pro</a> */}
                    </div>
                    <p className="px-3 font-normal">
                      Stack include : {project.stack}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden sm:block md:ml-[5rem] ml-[10rem]" />
      <CarouselNext className="hidden sm:block md:mr-[5rem] mr-[10rem]" />
    </Carousel>
  );
}
