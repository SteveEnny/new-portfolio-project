import { Card, CardContent } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
import { details } from "@/data/project-data";
import { Link, useParams } from "react-router";
// const features = [
//   "Authentication with Firebase",
//   "State Management with Redux Query",
//   "Data Management with Redux",
//   "Dark and Light Mode powered by Tailwind CSS",
//   "Excellent error handling",
//   "Excellent code structure similar to that of GitHub",
// ];

// const futurePlans = [
//   "Searching for any repository of Github",
//   "Charts and graphs",
// ];

const lessonsLearned = [
  {
    title: "Authentication",
    description:
      "Learned how firebase/github works and implemented it in depth with Firebase",
  },
  {
    title: "Error Handling with Redux",
    description:
      "Used my experience fetching data without using useEffect, I wrote useful try-catch/error",
  },
  {
    title: "Environmental Variables",
    description:
      "To protect my firebase identity from hackers, I used environmental variables",
  },
  {
    title: "No Loops In Teaching Others",
    description:
      "I probably wouldn't know what if I hadn't tried to learn it. Teaching someone really made me feel confident about the topic, application and approaches",
  },
];

export default function ProjectDetailsPage() {
  const { id } = useParams();
  // console.log(id);

  const projectInfo = details.find((detail) => id === detail.id);
  // console.log(projectInfo);
  // const  = projectInfo;
  return (
    <div className="w-[620px] md:w-[1360px] mx-auto px-4 py-16">
      <header className="mb-12">
        <h1 className="sm:text-[1.5rem] md:text-4xl font-bold mb-6">
          Developing {projectInfo?.prjectName}: A Walkthrough
        </h1>
        <div className="relative rounded-lg overflow-hidden mb-8 md:flex gap-5">
          <img
            src={`/${projectInfo?.projectImg}.png`}
            alt="GitHub Repo Details Project"
            className="w-[23rem] md:w-[50rem] object-cover"
          />
          <div className="font-medium">
            <p className=" text-sm md:text-lg max-w-[23rem] md:max-w-full py-2">
              {projectInfo?.projectInfo}
            </p>
            <h2 className="text-2xl font-semibold mb-4">Links</h2>
            <ul className="">
              <li className="flex gap-1 items-center">
                <span className="w-3 h-3 border rounded-[100%] bg-gradient3 inline-block"></span>
                <Link
                  to={`${projectInfo?.link.github}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub Repository
                </Link>
              </li>
              <li className="flex gap-1 items-center">
                <span className="w-3 h-3 border rounded-[100%] bg-gradient3 inline-block"></span>
                <Link
                  to={`${projectInfo?.link.live}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                </Link>
              </li>
            </ul>
            <h2 className="text-2xl font-semibold my-4">Tech Stack</h2>
            <div className="flex flex-wrap gap-4">
              {projectInfo?.techStack.map((tech) => (
                <img src={`/${tech}.svg`} alt="" className=" w-14" />
              ))}
              {/* <img src={`/{}`} alt="" /> */}
            </div>
          </div>
        </div>
      </header>

      <section className="mb-12"></section>

      <section className="mb-5 font-medium">
        <h2 className="text-2xl font-semibold mb-4">Features</h2>
        <ul className="space-y-2 list-disc list-inside">
          {projectInfo?.features.map((feature, index) => (
            <li key={index} className="">
              {feature}
            </li>
          ))}
        </ul>
      </section>
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Screenshots</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projectInfo?.screenshots.map((img, index) => (
            <div
              key={index}
              className="relative rounded-lg overflow-hidden w-[23rem] md:w-[27rem] object-cover"
            >
              <img
                src={`/screenshort/${img}.png`}
                alt={`Screenshot ${index + 1}`}
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Lessons Learned</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {lessonsLearned.map((lesson, index) => (
            <Card key={index} className="w-[22rem] md:w-full">
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">{lesson.title}</h3>
                <p className="text-muted-foreground">{lesson.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
