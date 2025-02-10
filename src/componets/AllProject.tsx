import { Project } from "./Project";

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  projectUrl: string;
}

// const projects: Project[] = [
//   {
//     title: "Github Repo Details",
//     description:
//       "A simple app with excellent ui that allows you to log into your github account and get your repository details at a glance. It also supports complex search and theming",
//     image:
//       "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%20(685)-vMpbQWnF69b319dbiXfwzaGZlwtlgt.png",
//     technologies: ["React", "Redux", "Firebase", "Tailwind"],
//     projectUrl: "#",
//   },
//   {
//     title: "Keyboadr",
//     description:
//       "I built a app that allows anyone to learn touch typing easily. It is built in a custom dark theme. With an onscreen keyboard, user's can type in the text area and see the result in real time and also make improvements.",
//     image: "/placeholder.svg?height=400&width=600",
//     technologies: ["React", "Javascript", "Css", "github"],
//     projectUrl: "#",
//   },
//   {
//     title: "Jadoo Landing Page",
//     description:
//       "A Beautiful and pixel perfect implementation of a design for Jadoo, a travel agency.This was done with accessibility in mind and gentle animations to make the site more user friendly and lively.",
//     image: "/placeholder.svg?height=400&width=600",
//     technologies: ["React", "Next.js", "framer-motion", "tailwind"],
//     projectUrl: "#",
//   },
//   {
//     title: "Jadoo Landing Page",
//     description:
//       "A Beautiful and pixel perfect implementation of a design for Jadoo, a travel agency.This was done with accessibility in mind and gentle animations to make the site more user friendly and lively.",
//     image: "/placeholder.svg?height=400&width=600",
//     technologies: ["React", "Next.js", "framer-motion", "tailwind"],
//     projectUrl: "#",
//   },
// ];

function AllProject() {
  return (
    <div className="min-h-[100vh] w-[640px] md:w-[1360px] relative pt-[20px] pb-[20px] mx-auto">
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-6">Projects</h1>
        <p className="font-medium mb-12 max-w-[23rem] px-2 md:max-w-3xl">
          Here are some projects I've recently worked on. They are a mix of
          personal exploration and coding challenges. It also shows my
          progression in skills, technologies, and approaches. I've learned a
          lot from building these projects, and I hope to do more of them to own
          my skills and help real-world problems.
        </p>
        <Project />
      </main>
    </div>
  );
}

export default AllProject;
