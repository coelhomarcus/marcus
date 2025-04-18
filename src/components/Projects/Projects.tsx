import { arrProjects, arrSideProjects } from "../../utils/arrays"
import SimpleCard from "../SimpleCard/SimpleCard";

const Projects = () => {
    const projects = arrProjects;
    const sideProjects = arrSideProjects;

    return (
        <div className='text-white'>
            <h1 className='text-xl font-semibold mb-2'>Projetos</h1>
            <p className='text-neutral-400 text-sm mb-4'>Projetos que fiz ou participei no desenvolvimento.</p>
            <div className="space-y-4 mb-8">
                {projects.map((project, index) => {
                    return (
                        <SimpleCard
                            key={index}
                            href={project.href}
                            name={project.name}
                            desc={project.desc}
                        />);
                })}
            </div>
            <h1 className='text-xl font-semibold mb-2'>Projetos Secundarios</h1>
            <p className='text-neutral-400 text-sm mb-4'>Projetos/Experimentos que fiz para testar meu conhecimento.</p>
            <div className="space-y-4 mb-8">
                {sideProjects.map((project, index) => {
                    return (
                        <SimpleCard
                            key={index}
                            href={project.href}
                            name={project.name}
                            desc={project.desc}
                        />);
                })}
            </div>
        </div>
    )
}

export default Projects