import { arrProjects, arrSideProjects } from "../../utils/data";
import ProjectCard from "../ProjectCard/ProjectCard";
import PageTitle from "@/components/PageTitle/PageTitle";

const Projects = () => {
  const projects = arrProjects;
  const sideProjects = arrSideProjects;

  return (
    <div className="text-white">
      <PageTitle title="Projetos" />
      <h1 className="text-xl font-semibold mb-2">Projetos</h1>
      <p className="text-neutral-400 text-sm mb-4">
        Projetos que fiz ou participei no desenvolvimento.
      </p>
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
      <p className="text-neutral-400 text-sm mb-4">
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
    </div>
  );
};

export default Projects;
