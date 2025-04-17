import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

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
                <Accordion type="multiple">
                    <AccordionItem value="item-0">
                        <AccordionTrigger className="text-neutral-200 cursor-pointer">Skills</AccordionTrigger>
                        <AccordionContent className="space-y-2">
                            <p><span className="text-neutral-200 text-xs font-bold">Front-end: </span>React, Typescript, Tailwind, Next.js, Vite, React Router.</p>
                            <p><span className="text-neutral-200 text-xs font-bold">Back-end: </span>Node.js, Express, PostgreSQL, MySQL. </p>
                            <p><span className="text-neutral-200 text-xs font-bold">Outros: </span>Swift, Python, C# (Unity)</p>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </p>
            <div className="flex justify-between border-t mt-4 pt-4 border-neutral-800">
                <div className="flex gap-3 text-white">
                    <a href="mailto:marcusrangelcoelho@gmail.com" rel="noreferrer noopener" target='_blank' className="inline-flex items-center gap-1 font-medium text-xs transition-colors hover:text-neutral-400">
                        <MdAlternateEmail className='size-4' />
                        E-mail
                    </a>
                    <a href="https://github.com/coelhomarcus" rel="noreferrer noopener" target='_blank' className="inline-flex items-center gap-1 font-medium text-xs transition-colors hover:text-neutral-400">
                        <FaGithub className='size-4' />
                        Github
                    </a>
                    <a href="https://www.linkedin.com/in/coelhomarcus/" rel="noreferrer noopener" target='_blank' className="inline-flex items-center gap-1 font-medium text-xs transition-colors hover:text-neutral-400">
                        <FaLinkedin className='size-4' />
                        Linkedin
                    </a>
                </div>
                <div className="hidden sm:block">
                    <div className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border px-1.5 font-mono text-xs font-medium text-muted-foreground opacity-100">
                        ⌘ K
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About