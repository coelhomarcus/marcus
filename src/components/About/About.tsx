import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";

const About = () => {
    return (
        <div className='text-white'>
            <h1 className='text-xl font-semibold mb-4'>Marcus Coelho</h1>
            <p className='text-neutral-400 text-sm'>
                Olá, me chamo Marcus Coelho, sou estudante de Sistemas de Informação na Unifesspa e estou sempre em busca de aprender coisas novas.
                <br />
                <br />
                Atualmente, faço parte da Exception Jr, uma empresa júnior da faculdade, onde atuo como Full Stack Developer. Alguns dos projetos em que estou envolvido incluem o Conecta Canaã.
                <br />
                <br />
                <span className="text-neutral-300 italic">
                    Front-end: React, Tailwind, Typescript, Vite, React Router.
                    <br />
                    Back-end: Node.js, Express, PostgreSQL, MySQL, Socket.io.
                    <br />
                    Outros: Swift, Python, C# (Unity)
                </span>
            </p>
            <div className="flex gap-5 border-t mt-4 pt-4 border-neutral-800 text-white">
                <a href="mailto:marcusrangelcoelho@gmail.com" rel="noreferrer noopener" target='_blank' className="inline-flex items-center gap-1 font-medium text-xs transition-colors hover:text-neutral-200">
                    <MdAlternateEmail className='size-4' />
                    E-mail
                </a>
                <a href="https://github.com/coelhomarcus" rel="noreferrer noopener" target='_blank' className="inline-flex items-center gap-1 font-medium text-xs transition-colors hover:text-neutral-200">
                    <FaGithub className='size-4' />
                    Github
                </a>
                <a href="https://www.linkedin.com/in/coelhomarcus/" rel="noreferrer noopener" target='_blank' className="inline-flex items-center gap-1 font-medium text-xs transition-colors hover:text-neutral-200">
                    <FaLinkedin className='size-4' />
                    Linkedin
                </a>
            </div>
        </div>
    )
}

export default About