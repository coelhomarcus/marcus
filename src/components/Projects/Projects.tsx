import {
   arrProjects,
   arrSideProjects,
} from "../../utils/data/projects";
import ProjectCard from "../ProjectCard/ProjectCard";
import PageTitle from "@/components/PageTitle/PageTitle";

const Projects = () => {
   const projects = arrProjects;
   const sideProjects = arrSideProjects;

   return (
      <div className="text-foreground">
         <PageTitle title="Projetos" suffix />
         <h1 className="text-xl font-semibold mb-2">Projetos</h1>
         <p className="text-muted-foreground text-sm mb-4">
            Projetos que fiz ou participei no desenvolvimento.
         </p>
         <div className="gap-4 mb-8 grid grid-cols-1 md:grid-cols-2">
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
         <h2 className="text-xl font-semibold mb-2">Secundários</h2>
         <p className="text-muted-foreground text-sm mb-4">
            Projetos que fiz por diversão.
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
      </div>
   );
};

export default Projects;
