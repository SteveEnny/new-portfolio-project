import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

export function AboutProject({
  description,
  link,
  githubLink,
}: {
  description: string;
  link: string;
  githubLink: string;
}) {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button
          variant="link"
          className="p-0 text-base text-blue-400 hover:text-blue-600"
        >
          About Project
        </Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80 z-[1000] p-5">
        <div className="flex justify-between space-x-4">
          <div className="space-y-1">
            <p className="text-sm">{description}</p>
            <div className="flex gap-[1rem] items-center pt-2">
              <span className="text-xs text-muted-foreground">
                <a href={link} className="text-blue-600 hover:text-blue-400">
                  View project
                </a>
              </span>
              <span className="text-xs text-muted-foreground">
                <a
                  href={githubLink}
                  className="text-blue-600 hover:text-blue-400"
                >
                  Github link
                </a>
              </span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}
