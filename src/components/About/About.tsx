import { Link } from "react-router";
import PageTitle from "@/components/PageTitle/PageTitle";
import { CgExternal } from "react-icons/cg";
import { arrBlog } from "@/utils/data/posts";
import { arrWorks } from "@/utils/data/works";
import { FaBriefcase } from "react-icons/fa";
import { IoArrowForwardSharp } from "react-icons/io5";

const About = () => {
    return (
        <main className="text-white">
            <PageTitle title="Marcus Coelho" suffix="" />
            <h1 className="text-xl font-semibold mb-4">Marcus Coelho</h1>
            <p className="text-neutral-400 text-base mb-4">
                Olá, me chamo Marcus Coelho, sou estudante de Sistemas de Informação na Unifesspa. Se quiser saber mais
                sobre minha trajetória,{" "}
                <span>
                    <a
                        className="transition-colors text-neutral-100 hover:underline"
                        href="https://docs.google.com/document/d/1wgOhwh-1YT-LRog9j1tvxzBVKfraoSzps1AiBGuSx9A/export?format=pdf"
                        download
                    >
                        veja meu currículo{<CgExternal className="inline mb-1" />}
                    </a>
                </span>
                .
                <br />
                <br />
                Gosto de criar sites bonitos, acessíveis e fáceis de usar. No dia a dia, trabalho com o ecossistema{" "}
                <span className="text-neutral-300">React</span>, utilizando principalmente{" "}
                <span className="text-neutral-300">Vite/Next.js, Tailwind e TypeScript.</span> Estou sempre buscando
                evoluir como desenvolvedor e no momento estou me aprofundando em back-end com{" "}
                <span className="text-neutral-300">Node.js e Go</span>.
                <br />
                <br />
                Atualmente, estou estagiando no PET-SAÚDE/I&SD: Inovação e Saúde Digital no SUS. Além disso, faço parte
                da Exception Jr, empresa júnior da faculdade, onde atuo como Full Stack Developer, participando de
                projetos como o Conecta Canaã. Alguns dos{" "}
                <Link className="transition-colors text-neutral-100 hover:underline" to="/projects">
                    projetos{<CgExternal className="inline mb-1" />}
                </Link>{" "}
                em que estou envolvido incluem o Conecta Canaã.
            </p>
            <div className="flex justify-center mb-4 gap-4">
                <Link
                    to={`/blog/${arrBlog[0].slug}`}
                    className="group flex items-center justify-center gap-1 vw-fit text-xs text-neutral-300 border border-neutral-800 hover:border-neutral-700 hover:bg-gradient-to-b hover:from-neutral-950 hover:to-neutral-900 p-1 text-center rounded-full transition-all"
                >
                    <div className="w-fit border border-neutral-800 group-hover:border-neutral-700 p-1 px-2 mr-1 text-center rounded-full transition-all">
                        <div className="relative inline-flex w-2 h-2 mr-1">
                            <div className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping"></div>
                            <div className="relative inline-flex w-2 h-2 bg-green-500 rounded-full"></div>
                        </div>
                        Novo
                    </div>
                    Post publicado! Vá conferir <IoArrowForwardSharp className="mr-1" />
                </Link>
            </div>
            <WorksExperience />
        </main>
    );
};

function WorksExperience() {
    return (
        <div className="space-y-6 gap-2">
            <div className="flex items-center gap-2 text-neutral-200 justify-between">
                <p className="text-sm font-semibold">Experiência</p>
                <FaBriefcase className="text-sm text-neutral-500" />
            </div>
            {arrWorks.map((work) => (
                <div className="flex gap-2 justify-between items-center" key={work.company}>
                    <div className="flex gap-2">
                        <img
                            src={work.logo}
                            alt={work.company}
                            className="size-6 sm:size-10 object-cover rounded-full"
                        />
                        <span>
                            <h3>{work.company}</h3>
                            <p className="text-[12px] sm:text-sm text-neutral-400">{work.role}</p>
                        </span>
                    </div>
                    <div>
                        <p className="text-[12px] sm:text-sm text-neutral-400">{work.duration}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default About;
