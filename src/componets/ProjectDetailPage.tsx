import { Card, CardContent } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
import { details } from "@/data/project-data";
import { Link, useParams } from "react-router";

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
    <div className="w-full max-w-[1360px] mx-auto px-2 sm:px-4 py-8 sm:py-16">
      <header className="mb-8 sm:mb-12 mt-[5rem]">
        <h1 className="text-xl sm:text-2xl md:text-4xl font-bold mb-4 sm:mb-6 text-center md:text-left">
          Developing {projectInfo?.prjectName}: A Walkthrough
        </h1>
        <div className="relative rounded-lg overflow-hidden mb-6 sm:mb-8 flex flex-col md:flex-row gap-4 md:gap-5">
          <img
            src={`/${projectInfo?.projectImg}.png`}
            alt="GitHub Repo Details Project"
            className="w-full md:w-[50%] max-w-[30rem] md:max-w-[50rem] object-cover rounded-lg mx-auto md:mx-0"
          />
          <div className="font-medium flex-1">
            <p className="text-sm sm:text-base md:text-lg max-w-full py-2">
              {projectInfo?.projectInfo}
            </p>
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 sm:mb-4 mt-4">Links</h2>
            <ul className="space-y-2">
              <li className="flex gap-1 items-center">
                <span className="w-3 h-3 border rounded-full bg-gradient3 inline-block"></span>
                <Link
                  to={`${projectInfo?.link.github}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub Repository
                </Link>
              </li>
              <li className="flex gap-1 items-center">
                <span className="w-3 h-3 border rounded-full bg-gradient3 inline-block"></span>
                <Link
                  to={`${projectInfo?.link.live}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                </Link>
              </li>
            </ul>
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold my-2 sm:my-4">Tech Stack</h2>
            <div className="flex flex-wrap gap-2 sm:gap-4">
              {projectInfo?.techStack.map((tech) => (
                <img src={`/${tech}.svg`} alt="" className="w-10 sm:w-14" />
              ))}
            </div>
          </div>
        </div>
      </header>

      <section className="mb-8 sm:mb-12"></section>

      <section className="mb-5 font-medium">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 sm:mb-4">Features</h2>
        <ul className="space-y-2 list-disc list-inside">
          {projectInfo?.features.map((feature, index) => (
            <li key={index} className="text-sm sm:text-base md:text-lg">
              {feature}
            </li>
          ))}
        </ul>
      </section>
      <section className="mb-8 sm:mb-12">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 sm:mb-4">Screenshots</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {projectInfo?.screenshots.map((img, index) => (
            <div
              key={index}
              className="relative rounded-lg overflow-hidden w-full max-w-[27rem] mx-auto object-cover"
            >
              <img
                src={`/screenshort/${img}.png`}
                alt={`Screenshot ${index + 1}`}
                className="object-cover w-full h-48 sm:h-64 md:h-72"
              />
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 sm:mb-4">Lessons Learned</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {lessonsLearned.map((lesson, index) => (
            <Card key={index} className="w-full">
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2 text-base sm:text-lg md:text-xl">{lesson.title}</h3>
                <p className="text-muted-foreground text-sm sm:text-base">{lesson.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
