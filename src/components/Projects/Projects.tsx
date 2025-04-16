import { arrProjects, arrSideProjects } from "../../utils/arrays"

const Projects = () => {
    const projects = arrProjects;
    const sideProjects = arrSideProjects;

    return (
        <div className='text-white'>
            <h1 className='text-xl font-semibold mb-2'>Projetos</h1>
            <p className='text-neutral-400 text-sm mb-4'>
                Projetos que fiz ou participei no desenvolvimento.
            </p>
            <div className="space-y-2 mb-10">
                {projects.map((project, index) => {
                    return <a key={index} href={project.href}
                        className="block rounded-xl text-neutral-400 -mx-4 px-4 py-2 transition-colors hover:bg-neutral-900 hover:text-neutral-200 border-b border-neutral-800"
                        rel="noreferrer noopener"
                        target="_blank">
                        <p className="text-sm text-neutral-100 font-medium">{project.name}</p>
                        <p className="text-sm">{project.desc}</p>
                    </a>
                })}
            </div>
            <h1 className='text-xl font-semibold mb-2'>Projetos Secundarios</h1>
            <p className='text-neutral-400 text-sm mb-4'>
                Projetos/Experimentos que fiz para testar meu conhecimento.
            </p>
            <div className="space-y-2 mb-10">
                {sideProjects.map((project, index) => {
                    return <a key={index} href={project.href}
                        className="block rounded-xl text-neutral-400 -mx-4 px-4 py-2 transition-colors hover:bg-neutral-900 hover:text-neutral-200 border-b border-neutral-800"
                        rel="noreferrer noopener"
                        target="_blank">
                        <p className="text-sm text-neutral-100 font-medium">{project.name}</p>
                        <p className="text-sm">{project.desc}</p>
                    </a>
                })}
            </div>
        </div>
    )
}

export default Projects