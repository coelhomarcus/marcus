import { GoArrowUpRight } from "react-icons/go";

interface ProjectCardProps {
    href: string;
    name: string;
    desc: string;
    tech?: string[];
}

const ProjectCard = ({ href, name, desc, tech = [] }: ProjectCardProps) => {
    return (
        <a
            href={href}
            className="group relative block rounded-[var(--radius)] p-4 transition-all duration-300 
            border border-neutral-900 hover:bg-neutral-900/40 shadow-inner shadow-neutral-900"
            rel="noreferrer noopener"
            target="_blank"
        >
            <div className="flex flex-col h-full">
                <div className="flex justify-between items-start mb-2">
                    <h3 className="text-sm font-medium text-white">{name}</h3>
                    <span className="opacity-50 group-hover:opacity-90 transition-opacity">
                        <GoArrowUpRight size={16} className="text-neutral-400 group-hover:text-neutral-400" />
                    </span>
                </div>
                <p className="text-sm text-neutral-400 mb-3 flex-grow">{desc}</p>
                {tech && tech.length > 0 && (
                    <div className="flex gap-2 flex-wrap mt-auto">
                        {tech.map((t, i) => (
                            <span key={i} className="text-xs px-2 py-0.5 rounded-sm bg-neutral-800/40 text-neutral-400">
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
