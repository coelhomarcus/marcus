import type { ProjectCardProps } from "@/types";

import { ArrowTopRightIcon } from "@radix-ui/react-icons";

const ProjectCard = ({ href, name, desc, tech = [] }: ProjectCardProps) => {
  return (
    <a
      href={href}
      className="group relative block p-4 transition-all duration-100
            border border-border hover:bg-muted/40"
      rel="noreferrer noopener"
      target="_blank"
    >
      <div className="flex flex-col h-full">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-sm font-medium text-foreground">{name}</h3>
          <span className="opacity-50 group-hover:opacity-90 transition-opacity">
            <ArrowTopRightIcon
              width={16}
              height={16}
              className="text-muted-foreground group-hover:text-muted-foreground"
            />
          </span>
        </div>
        <p className="text-sm text-muted-foreground mb-3 flex-grow">{desc}</p>
        {tech && tech.length > 0 && (
          <div className="flex gap-2 flex-wrap mt-auto">
            {tech.map((t, i) => (
              <span
                key={i}
                className="text-xs px-2 py-0.5 bg-muted/40 text-muted-foreground"
              >
                {t}
              </span>
            ))}
          </div>
        )}
      </div>
    </a>
  );
};

export default ProjectCard;
