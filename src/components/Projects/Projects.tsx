import { FaGithub } from "react-icons/fa6";
import { arrProjects, arrSideProjects, arrSecondaryAccount } from "../../utils/data/projects";
import ProjectCard from "../ProjectCard/ProjectCard";
import PageTitle from "@/components/PageTitle/PageTitle";

const Projects = () => {
   const projects = arrProjects;
   const sideProjects = arrSideProjects;
   const secProjects = arrSecondaryAccount;

   return (
      <div className="text-foreground">
         <PageTitle title="Projetos" />
         <h1 className="text-xl font-semibold mb-2">Projetos</h1>
         <p className="text-muted-foreground text-sm mb-4">Projetos que fiz ou participei no desenvolvimento.</p>
         <div className="space-y-4 mb-8">
            {projects.map((project, index) => {
               return (
                  <ProjectCard
                     key={index}
                     href={project.href}
                     name={project.name}
                     desc={project.desc}
                     tech={project.tech}
                  />
               );
            })}
         </div>
         <h1 className="text-xl font-semibold mb-2">Projetos Secundários</h1>
         <p className="text-muted-foreground text-sm mb-4">
            Projetos/Experimentos que fiz para testar meus conhecimentos.
         </p>
         <div className="gap-4 mb-8 grid grid-cols-1 md:grid-cols-2">
            {sideProjects.map((project, index) => {
               return (
                  <ProjectCard
                     key={index}
                     href={project.href}
                     name={project.name}
                     desc={project.desc}
                     tech={project.tech}
                  />
               );
            })}
         </div>
         <a
            className="text-xl font-semibold mb-2 flex items-center gap-2 hover:text-muted-foreground"
            href="https://github.com/submarcus"
            target="_blank"
            rel="noopener noreferrer"
         >
            <FaGithub />
            github/submarcus
         </a>
         <p className="text-muted-foreground text-sm mb-4">
            Projetos apenas por diversão na minha conta secundária.
         </p>
         <div className="gap-4 mb-8 grid grid-cols-1 md:grid-cols-2">
            {secProjects.map((project, index) => {
               return (
                  <ProjectCard
                     key={index}
                     href={project.href}
                     name={project.name}
                     desc={project.desc}
                     tech={project.tech}
                  />
               );
            })}
         </div>
      </div>
   );
};

export default Projects;
