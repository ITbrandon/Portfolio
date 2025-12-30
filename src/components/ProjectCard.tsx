import { ExternalLink, Github } from "lucide-react";
import { Button } from "./ui/button";

interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string[];
  demoUrl: string;
  githubUrl: string;
}

export function ProjectCard({
  title,
  description,
  techStack,
  demoUrl,
  githubUrl,
}: ProjectCardProps) {
  return (
    <article className="group rounded-xl border border-border bg-card p-6 card-hover">
      <div className="flex flex-col h-full">
        <h3 className="text-lg font-semibold text-foreground mb-3">{title}</h3>
        
        <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">
          {description}
        </p>

        <div className="flex flex-wrap gap-2 mb-5">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 text-xs font-mono font-medium rounded-md bg-secondary text-muted-foreground"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-3">
          <Button
            variant="outline"
            size="sm"
            asChild
            className="flex-1"
          >
            <a href={demoUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-4 w-4" />
              Live Demo
            </a>
          </Button>
          <Button
            variant="outline"
            size="sm"
            asChild
            className="flex-1"
          >
            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4" />
              GitHub
            </a>
          </Button>
        </div>
      </div>
    </article>
  );
}
