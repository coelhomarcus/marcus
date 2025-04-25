import { Link } from "react-router";
import { Badge } from "@/components/ui/badge"

import { arrProjects, arrBlog } from "@/utils/data";

const About = () => {
    return (
        <div className='text-white'>
            <h1 className='text-xl font-semibold mb-4'>Marcus Coelho</h1>
            <p className='text-neutral-400 text-sm'>
                Olá, me chamo Marcus Coelho, sou estudante de Sistemas de Informação na Unifesspa.
                Se quiser saber mais sobre minha trajetória, <span><a className="transition-colors text-neutral-100 hover:underline" href="https://docs.google.com/document/d/1wgOhwh-1YT-LRog9j1tvxzBVKfraoSzps1AiBGuSx9A/export?format=pdf" download>veja meu currículo</a></span>.
                <br />
                <br />
                Gosto de criar sites bonitos, acessíveis e fáceis de usar. No dia a dia, trabalho com o ecossistema <span className="text-neutral-300">React</span>, utilizando principalmente <span className="text-neutral-300">Vite/Next.js, Tailwind e TypeScript.</span> Estou sempre buscando evoluir como desenvolvedor — no momento estou me aprofundando em back-end com <span className="text-neutral-300">Node.js e Go</span>.
                <br />
                <br />
                Atualmente, faço parte da Exception Jr, uma empresa júnior da faculdade, onde atuo como Full Stack Developer. Alguns dos <Link className="transition-colors text-neutral-100 hover:underline" to="/projects">projetos</Link> em que estou envolvido incluem o Conecta Canaã.
            </p>
            <ProjectPostGrid />
        </div >
    )
}

const ProjectPostGrid = () => {
    const project = arrProjects[0];
    const post = arrBlog[0];

    return (
        <div className="w-full mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 *:flex *:flex-col *:h-full *:bg-[#0A0A0A] *:rounded-lg">
                {/* Card do Último Projeto */}
                <a href={project.href} target="_blank" className="border border-foreground/10 overflow-hidden transition-all duration-300 shadow-inner shadow-neutral-800 hover:shadow-neutral-700">
                    <div className="p-3 flex flex-col flex-grow">
                        <div className="flex items-center justify-between mb-2">
                            <h3 className="text-xs font-medium text-neutral-400">Último Projeto</h3>
                            <span className="bg-lime-900/30 text-lime-300 text-xs px-2.5 py-0.5 rounded-xl">Novo</span>
                        </div>
                        <h4 className="text-base font-semibold text-neutral-100 mb-2">{project?.name || "Nome do Projeto"}</h4>
                        <p className="text-neutral-400 text-sm mb-4 flex-grow">{project?.desc || "Descrição do projeto"}</p>
                        <div className="flex flex-wrap gap-2 mt-auto">
                            {project.tech?.map((tech, index) => (
                                <Badge key={index} className="text-neutral-200" variant="outline">{tech}</Badge>
                            ))}
                        </div>
                    </div>
                </a>

                {/* Card do Último Post */}
                <Link to={`blog/${post.slug}`} className="border border-foreground/10 overflow-hidden hover:border-foreground/20 transition-all duration-300 shadow-inner shadow-neutral-800 hover:shadow-neutral-700">
                    <div className="p-3 flex flex-col flex-grow">
                        <div className="flex items-center justify-between mb-2">
                            <h3 className="text-xs font-medium text-neutral-400">Último Post</h3>
                            <span className="bg-lime-900/30 text-lime-300 text-xs px-2.5 py-0.5 rounded-xl">Publicado</span>
                        </div>
                        <h4 className="text-base font-semibold text-neutral-100 mb-2">{post?.title || "Título do Post"}</h4>
                        <p className="text-neutral-400 text-sm mb-4 flex-grow">{post?.desc || "Descrição do post"}</p>
                        <div className="flex flex-wrap gap-2 mt-auto">
                            {post.tags.map((tag, index) => (
                                <Badge key={index} className="text-neutral-200" variant="outline">{tag}</Badge>
                            ))}
                        </div>
                    </div>
                </Link>
            </div>
        </div >
    );
};

export default About;