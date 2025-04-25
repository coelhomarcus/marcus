import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoDocumentText } from "react-icons/io5";


import isMac from "@/utils/isMac";
import ContactLink from "../ContactLink/ContactLink";
import { Link } from "react-router";

const About = ({ setOpen }: { setOpen: React.Dispatch<React.SetStateAction<boolean>> }) => {
    return (
        <div className='text-white'>
            <h1 className='text-xl font-semibold mb-4'>Marcus Coelho</h1>
            <p className='text-neutral-400 text-sm'>
                Olá, me chamo Marcus Coelho, sou estudante de Sistemas de Informação na Unifesspa e estou sempre em busca de aprender coisas novas.
                Se quiser saber mais sobre minha trajetória, <span><a className="transition-colors text-neutral-200 hover:underline" href="https://docs.google.com/document/d/1wgOhwh-1YT-LRog9j1tvxzBVKfraoSzps1AiBGuSx9A/export?format=pdf" download>veja meu currículo</a></span>.
                <br />
                <br />
                Gosto de criar sites bonitos, acessíveis e fáceis de usar. Trabalho no dia a dia com o ecossistema React, usando principalmente React, Vite/Next.js, Tailwind e TypeScript.
                <br />
                <br />
                Atualmente, faço parte da Exception Jr, uma empresa júnior da faculdade, onde atuo como Full Stack Developer. Alguns dos <Link className="transition-colors text-neutral-200 hover:underline" to="/projects">projetos</Link> em que estou envolvido incluem o Conecta Canaã.
            </p>
            <div className="flex justify-between border-t mt-4 pt-4 border-neutral-800">
                <div className="flex gap-3 text-white">
                    <ContactLink title="CV" Icon={IoDocumentText} href="https://docs.google.com/document/d/1wgOhwh-1YT-LRog9j1tvxzBVKfraoSzps1AiBGuSx9A/export?format=pdf" download />
                    <ContactLink title="Github" Icon={FaGithub} href="https://github.com/coelhomarcus" />
                    <ContactLink title="Linkedin" Icon={FaLinkedin} href="https://www.linkedin.com/in/coelhomarcus/" />
                </div>
                <button className="hidden sm:block cursor-pointer text-neutral-400 hover:text-neutral-500 transition-all duration-200" onClick={() => setOpen(true)}>
                    <div className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border px-1.5 font-mono text-xs font-medium  opacity-100">
                        {isMac() ? "⌘" : "Ctrl"} K
                    </div>
                </button>
            </div>
        </div >
    )
}

export default About